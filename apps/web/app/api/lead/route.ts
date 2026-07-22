import { NextResponse } from "next/server";
import { Resend } from "resend";

type StagedSystem = {
  slot?: number;
  title?: string;
  what?: string;
  wiredTo?: string[];
  estSavedPerWeek?: string;
  sampleLine?: string;
};

type LeadPayload = {
  email: string;
  businessType?: string;
  painSummary?: string;
  hotness?: "browsing" | "warm" | "hot";
  staged?: StagedSystem[];
  transcript?: Array<{ role: string; content: string }>;
};

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function esc(s: string): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(p: LeadPayload, submittedAt: string): string {
  const stagedHtml = (p.staged ?? [])
    .map(
      (s, i) => `
      <div style="border:1px solid #ddd;border-radius:6px;padding:10px 12px;margin-bottom:8px;">
        <div style="font-size:11px;letter-spacing:.1em;color:#A56A11;font-weight:700;text-transform:uppercase;">
          SYSTEM ${s.slot ?? i + 1} — ${esc(s.title ?? "")}
        </div>
        <div style="font-size:13px;color:#111;margin-top:4px;">${esc(s.what ?? "")}</div>
        <div style="font-size:11px;color:#555;margin-top:4px;">
          wired to: ${(s.wiredTo ?? []).map((t) => esc(t)).join(", ") || "(none)"} · saves ${esc(s.estSavedPerWeek ?? "?")}
        </div>
        ${s.sampleLine ? `<div style="font-size:11px;color:#333;margin-top:4px;font-style:italic;">${esc(s.sampleLine)}</div>` : ""}
      </div>`,
    )
    .join("");

  const transcriptHtml = (p.transcript ?? [])
    .slice(-20)
    .map(
      (m) => `
      <div style="margin-bottom:6px;">
        <span style="font-size:10px;letter-spacing:.08em;color:#888;text-transform:uppercase;">${esc(m.role)}</span><br/>
        <span style="font-size:12px;color:#111;">${esc(m.content)}</span>
      </div>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111;">
  <h2 style="margin:0 0 12px;">New lead — talk-to-my-ai</h2>
  <p style="margin:0 0 12px;color:#555;"><strong>${esc(p.email)}</strong> · ${esc(p.businessType ?? "unknown")} · <span style="color:#C93A2B;font-weight:700;">${esc(p.hotness ?? "browsing")}</span></p>
  <p style="margin:0 0 16px;color:#333;">${esc(p.painSummary ?? "")}</p>
  <h3 style="margin:20px 0 8px;font-size:14px;">Staged dashboard (${(p.staged ?? []).length}/3)</h3>
  ${stagedHtml || "<p style='color:#888;font-size:12px;'>(nothing staged)</p>"}
  ${transcriptHtml ? `<h3 style="margin:20px 0 8px;font-size:14px;">Recent transcript</h3>${transcriptHtml}` : ""}
  <p style="margin-top:20px;font-size:11px;color:#888;">Submitted (UTC): ${submittedAt}</p>
</body></html>`;
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!raw || typeof raw !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const b = raw as Record<string, unknown>;

  const email = typeof b.email === "string" ? b.email.trim() : "";
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const payload: LeadPayload = {
    email,
    businessType: typeof b.businessType === "string" ? b.businessType.slice(0, 120) : "",
    painSummary: typeof b.painSummary === "string" ? b.painSummary.slice(0, 400) : "",
    hotness:
      b.hotness === "hot" || b.hotness === "warm" || b.hotness === "browsing"
        ? b.hotness
        : "browsing",
    staged: Array.isArray(b.staged) ? (b.staged as StagedSystem[]).slice(0, 3) : [],
    transcript: Array.isArray(b.transcript)
      ? (b.transcript as Array<{ role: string; content: string }>).slice(-30)
      : [],
  };

  const submittedAt = new Date().toISOString();
  const hotnessTag = (payload.hotness ?? "browsing").toUpperCase();
  const subject = `[talk-to-my-ai] ${hotnessTag} lead — ${payload.businessType || "unknown"}`;
  const html = buildHtml(payload, submittedAt);

  const apiKey = process.env.RESEND_API_KEY;
  const toRaw = process.env.APPLICATIONS_EMAIL;
  const fromRaw = process.env.APPLICATIONS_FROM_EMAIL ?? "will@stuck.builders";

  const from = fromRaw.split(",")[0]!.trim();
  const to = toRaw ? toRaw.split(",").map((s) => s.trim()).filter(Boolean) : [];

  if (!apiKey || to.length === 0) {
    console.log("[lead] Resend not configured — logging lead:", {
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
      console.error("[lead] Resend error:", result.error);
      return NextResponse.json(
        { error: "Could not send. Please email will@stuck.builders directly." },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] Resend threw:", err);
    return NextResponse.json(
      { error: "Could not send. Please email will@stuck.builders directly." },
      { status: 500 },
    );
  }
}
