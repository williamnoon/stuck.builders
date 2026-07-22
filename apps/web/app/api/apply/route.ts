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
  phone: string;
  ack: boolean;
  refCode?: string;
  utm?: Record<string, string>;
  talkNotesToWill?: string;
  talkSummary?: string;
};

type FlaggedField =
  | "email"
  | "phone"
  | "name"
  | "stuck"
  | "shipped"
  | "projectText"
  | "aboutYou"
  | "ack"
  | "q1"
  | null;

type ParseError = { error: string; flaggedField: FlaggedField };
type ParseResult =
  | { ok: true; payload: ApplyPayload }
  | { ok: false; error: ParseError };

const VARIANT_LABEL: Record<ApplyVariant, string> = {
  "build-b": "The Build — virtual 1:1 · 4hr · $1,995 launch / $2,995 reg",
  "build-live": "The Build LIVE — 1:1 in-person · Fri Sep 11 2026 · Charleston · $1,995 launch / $5,995 reg",
  legacy: "Legacy Sprint (Greenfield / Brownfield)",
};

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

function phoneDigits(raw: string): string {
  return raw.replace(/^\+/, "").replace(/\D/g, "");
}

function isPlaceholder555(raw: string, digits: string): boolean {
  // digits-only: match 555 area code (US, with or without leading 1)
  if (/^1?555\d{7}$/.test(digits)) return true;
  // raw input containing "555-" in the area-code position
  // e.g. "(555)-", "555-", "+1 555-", " 555-"
  if (/(^|[^\d])555-/.test(raw)) return true;
  return false;
}

function parsePayload(body: unknown): ParseResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: { error: "Invalid request body.", flaggedField: null } };
  }
  const b = body as Record<string, unknown>;

  if (!isSprintKind(b.sprintKind)) {
    return { ok: false, error: { error: "Pick where you are — idea or build.", flaggedField: "q1" } };
  }
  if (!isString(b.q1Label) || !b.q1Label.trim()) {
    return { ok: false, error: { error: "Pick where you are — idea or build.", flaggedField: "q1" } };
  }
  if (!isString(b.q1Price)) {
    return { ok: false, error: { error: "Invalid request body.", flaggedField: null } };
  }

  const projectText = isString(b.projectText) ? b.projectText : "";
  const projectUrl = isString(b.projectUrl) ? b.projectUrl : "";
  if (!projectText.trim() && !projectUrl.trim()) {
    return {
      ok: false,
      error: { error: "Q2 needs something — a couple sentences or a link.", flaggedField: "projectText" },
    };
  }

  const aboutYou = isString(b.aboutYou) ? b.aboutYou : "";
  if (b.sprintKind === "idea" && !aboutYou.trim()) {
    return {
      ok: false,
      error: { error: "Q3 matters on the idea path — a couple lines on you is enough.", flaggedField: "aboutYou" },
    };
  }

  if (!isString(b.stuck) || !b.stuck.trim()) {
    return {
      ok: false,
      error: { error: "Q4 — name the wall. Two sentences beats none.", flaggedField: "stuck" },
    };
  }
  if (!isString(b.shipped) || !b.shipped.trim()) {
    return {
      ok: false,
      error: { error: "Q5 — name what Day 7 looks like.", flaggedField: "shipped" },
    };
  }
  if (!isString(b.name) || !b.name.trim()) {
    return { ok: false, error: { error: "Need your name to reply to you.", flaggedField: "name" } };
  }
  if (!isString(b.email) || !b.email.trim()) {
    return {
      ok: false,
      error: { error: "Need your email — that's where the reply goes.", flaggedField: "email" },
    };
  }
  if (!EMAIL_RE.test(b.email.trim())) {
    return {
      ok: false,
      error: { error: "That email looks off — double-check it.", flaggedField: "email" },
    };
  }

  const phoneRaw = isString(b.phone) ? b.phone.trim().slice(0, 40) : "";
  const digits = phoneDigits(phoneRaw);
  const isNewOffer = b.variant === "build-b" || b.variant === "build-live";

  if (phoneRaw || isNewOffer) {
    if (isPlaceholder555(phoneRaw, digits)) {
      return {
        ok: false,
        error: {
          error: "That's a placeholder area code — enter your real number.",
          flaggedField: "phone",
        },
      };
    }
    if (digits.length < 7) {
      return {
        ok: false,
        error: {
          error: isNewOffer
            ? "Need a phone number — that's where the onboarding call comes in."
            : "That phone number looks short — double-check it.",
          flaggedField: "phone",
        },
      };
    }
    if (digits.length > 15) {
      return {
        ok: false,
        error: { error: "That phone number looks too long.", flaggedField: "phone" },
      };
    }
  }

  if (typeof b.ack !== "boolean" || !b.ack) {
    return {
      ok: false,
      error: { error: "One box left — the legal/non-harmful line at the bottom.", flaggedField: "ack" },
    };
  }

  const refCode = isString(b.refCode) && b.refCode.trim() ? b.refCode.trim().slice(0, 64) : undefined;
  let utm: Record<string, string> | undefined;
  if (b.utm && typeof b.utm === "object") {
    const cleaned: Record<string, string> = {};
    for (const [key, val] of Object.entries(b.utm as Record<string, unknown>)) {
      if (isString(val) && val.trim()) cleaned[key] = val.trim().slice(0, 128);
    }
    if (Object.keys(cleaned).length) utm = cleaned;
  }

  const talkNotesToWill =
    isString(b.talkNotesToWill) && b.talkNotesToWill.trim()
      ? b.talkNotesToWill.trim().slice(0, 2000)
      : undefined;
  const talkSummary =
    isString(b.talkSummary) && b.talkSummary.trim()
      ? b.talkSummary.trim().slice(0, 400)
      : undefined;

  return {
    ok: true,
    payload: {
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
      phone: phoneRaw,
      ack: b.ack,
      refCode,
      utm,
      talkNotesToWill,
      talkSummary,
    },
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
    ["Q6 — Phone", p.phone || "(none)"],
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

  const talkBlock =
    p.talkNotesToWill || p.talkSummary
      ? `
  <div style="background:#FFF7E5;border-left:4px solid #A56A11;padding:14px 16px;margin:0 0 18px;">
    <div style="font-size:11px;letter-spacing:.1em;color:#A56A11;font-weight:700;text-transform:uppercase;margin-bottom:6px;">
      Notes from /talk agent (read before the call)
    </div>
    ${p.talkSummary ? `<div style="font-size:13px;color:#111;margin-bottom:6px;"><strong>${escapeHtml(p.talkSummary)}</strong></div>` : ""}
    ${p.talkNotesToWill ? `<div style="font-size:13px;color:#333;white-space:pre-wrap;line-height:1.5;">${escapeHtml(p.talkNotesToWill)}</div>` : ""}
  </div>`
      : "";

  return `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111;">
  <h2 style="margin:0 0 12px;">New application — ${escapeHtml(VARIANT_LABEL[p.variant])}</h2>
  <p style="margin:0 0 16px;color:#555;">${escapeHtml(p.name)} &lt;${escapeHtml(p.email)}&gt;</p>
  ${talkBlock}
  <table style="border-collapse:collapse;width:100%;max-width:720px;">${body}</table>
</body></html>`;
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body.", flaggedField: null }, { status: 400 });
  }

  const parsed = parsePayload(raw);
  if (!parsed.ok) {
    return NextResponse.json(
      { error: parsed.error.error, flaggedField: parsed.error.flaggedField },
      { status: 400 },
    );
  }
  const payload = parsed.payload;

  const submittedAt = new Date().toISOString();
  const subject = `[stuck.builders] New application — ${payload.name} — ${VARIANT_LABEL[payload.variant]}`;
  const html = buildHtml(payload, submittedAt);

  const apiKey = process.env.RESEND_API_KEY;
  const toRaw = process.env.APPLICATIONS_EMAIL;
  const fromRaw = process.env.APPLICATIONS_FROM_EMAIL ?? "will@stuck.builders";

  const from = fromRaw.split(",")[0]!.trim();

  const to = toRaw
    ? toRaw.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  if (!apiKey || to.length === 0) {
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
        { error: "Could not send. Please email will@stuck.builders directly.", flaggedField: null },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[apply] Resend threw:", err);
    return NextResponse.json(
      { error: "Could not send. Please email will@stuck.builders directly.", flaggedField: null },
      { status: 500 },
    );
  }
}
