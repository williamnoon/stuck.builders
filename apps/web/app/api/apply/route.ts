import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sprintKindLabel, type SprintKind } from "@/lib/config";

type ApplyVariant = "build-b" | "build-live" | "legacy";

type ApplyPayload = {
  sprintKind: SprintKind;
  q1Label: string;
  q1Price: string;
  variant: ApplyVariant;
  projectText: string;
  projectUrl: string;
  aboutYou: string;
  stuck: string;
  shipped: string;
  name: string;
  email: string;
  ack: boolean;
  refCode?: string;
  utm?: Record<string, string>;
};

const VARIANT_LABEL: Record<ApplyVariant, string> = {
  "build-b": "The Build (virtual · 4hr · $1,995 launch / $2,995 regular)",
  "build-live": "The Build LIVE (Fri Sep 11 2026 · Bridgeview Room, Charleston SC · $1,995 launch / $5,995 regular)",
  legacy: "Legacy Sprint (Greenfield / Brownfield)",
};

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function isSprintKind(v: unknown): v is SprintKind {
  return v === "idea" || v === "build";
}

function normalizeVariant(v: unknown): ApplyVariant {
  if (v === "build-b" || v === "build-live") return v;
  return "legacy";
}

function parsePayload(body: unknown): ApplyPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (!isSprintKind(b.sprintKind)) return null;
  if (!isString(b.q1Label) || !b.q1Label.trim()) return null;
  if (!isString(b.q1Price)) return null;
  if (!isString(b.projectText) && !isString(b.projectUrl)) return null;
  if (!isString(b.stuck) || !b.stuck.trim()) return null;
  if (!isString(b.shipped) || !b.shipped.trim()) return null;
  if (!isString(b.name) || !b.name.trim()) return null;
  if (!isString(b.email) || !b.email.trim()) return null;
  if (typeof b.ack !== "boolean" || !b.ack) return null;

  const projectText = isString(b.projectText) ? b.projectText : "";
  const projectUrl = isString(b.projectUrl) ? b.projectUrl : "";
  if (!projectText.trim() && !projectUrl.trim()) return null;

  const aboutYou = isString(b.aboutYou) ? b.aboutYou : "";
  if (b.sprintKind === "idea" && !aboutYou.trim()) return null;

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email.trim());
  if (!emailOk) return null;

  const refCode = isString(b.refCode) && b.refCode.trim() ? b.refCode.trim().slice(0, 64) : undefined;
  let utm: Record<string, string> | undefined;
  if (b.utm && typeof b.utm === "object") {
    const cleaned: Record<string, string> = {};
    for (const [key, val] of Object.entries(b.utm as Record<string, unknown>)) {
      if (isString(val) && val.trim()) cleaned[key] = val.trim().slice(0, 128);
    }
    if (Object.keys(cleaned).length) utm = cleaned;
  }

  return {
    sprintKind: b.sprintKind,
    q1Label: b.q1Label,
    q1Price: b.q1Price,
    variant: normalizeVariant(b.variant),
    projectText,
    projectUrl,
    aboutYou,
    stuck: b.stuck,
    shipped: b.shipped,
    name: b.name,
    email: b.email,
    ack: b.ack,
    refCode,
    utm,
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(p: ApplyPayload, submittedAt: string): string {
  const rows: Array<[string, string]> = [
    ["Offer applied for", VARIANT_LABEL[p.variant]],
    ["Q1 — Where are you? (legacy)", `${p.q1Label} (${p.q1Price})`],
    ["Q2 — Project description", p.projectText || "(none)"],
    ["Q2 — Project link", p.projectUrl || "(none)"],
  ];
  if (p.sprintKind === "idea") {
    rows.push(["Q3 — About you", p.aboutYou]);
  }
  rows.push(
    ["Q4 — Where stuck", p.stuck],
    ["Q5 — Shipped by day 7 looks like", p.shipped],
    ["Q6 — Name", p.name],
    ["Q6 — Email", p.email],
    ["Acknowledgment", p.ack ? "Confirmed" : "Not confirmed"],
  );
  if (p.refCode) {
    rows.push(["Referral code", `${p.refCode} — apply $100 credit at Stripe link`]);
  }
  if (p.utm) {
    for (const [key, val] of Object.entries(p.utm)) {
      rows.push([`Traffic — ${key}`, val]);
    }
  }
  rows.push(["Submitted (UTC)", submittedAt]);
  const body = rows
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:700;vertical-align:top;width:220px;">${escapeHtml(
          k,
        )}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap;">${escapeHtml(
          v,
        )}</td>
      </tr>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111;">
  <h2 style="margin:0 0 12px;">New application — ${escapeHtml(VARIANT_LABEL[p.variant])}</h2>
  <p style="margin:0 0 16px;color:#555;">${escapeHtml(p.name)} &lt;${escapeHtml(p.email)}&gt;</p>
  <table style="border-collapse:collapse;width:100%;max-width:720px;">${body}</table>
</body></html>`;
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const payload = parsePayload(raw);
  if (!payload) {
    return NextResponse.json(
      { error: "Missing or invalid fields. Please fill in all required questions." },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toISOString();
  const subject = `[stuck.builders] New application — ${payload.name} — ${VARIANT_LABEL[payload.variant]}`;
  const html = buildHtml(payload, submittedAt);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.APPLICATIONS_EMAIL;
  const from = process.env.APPLICATIONS_FROM_EMAIL ?? "will@stuck.builders";

  if (!apiKey || !to) {
    console.log("[apply] Resend not configured — logging application:", {
      subject,
      to,
      from,
      payload,
      submittedAt,
    });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject,
      html,
    });
    if (result.error) {
      console.error("[apply] Resend error:", result.error);
      return NextResponse.json(
        { error: "Could not send. Please email will@stuck.builders directly." },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[apply] Resend threw:", err);
    return NextResponse.json(
      { error: "Could not send. Please email will@stuck.builders directly." },
      { status: 500 },
    );
  }
}
