import { NextResponse } from "next/server";
import { Resend } from "resend";

type NewsletterPayload = {
  email: string;
  source?: string; // e.g. "free-cheatsheets", "footer", "post-build"
};

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!raw || typeof raw !== "object") {
    return NextResponse.json({ error: "Missing body." }, { status: 400 });
  }

  const b = raw as Record<string, unknown>;
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const source = typeof b.source === "string" ? b.source.trim().slice(0, 64) : "unknown";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const apiKey = process.env.RESEND_API_KEY;
  const toRaw = process.env.APPLICATIONS_EMAIL;
  const from = process.env.APPLICATIONS_FROM_EMAIL ?? "will@stuck.builders";
  const to = toRaw ? toRaw.split(",").map((s) => s.trim()).filter(Boolean) : [];

  const subject = `[stuck.builders] Newsletter signup — ${email}`;
  const html = `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111;">
  <h2 style="margin:0 0 12px;">New newsletter signup</h2>
  <table style="border-collapse:collapse;width:100%;max-width:520px;font-size:14px;">
    <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:700;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:700;">Source</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${source}</td></tr>
    <tr><td style="padding:8px 12px;font-weight:700;">Submitted</td><td style="padding:8px 12px;">${submittedAt}</td></tr>
  </table>
  <p style="margin-top:20px;color:#666;font-size:13px;">Add them to the weekly build drop list.</p>
</body></html>`;

  // If Resend not configured (localhost / dev), log and return ok.
  if (!apiKey || to.length === 0) {
    console.log("[newsletter] Resend not configured — logging signup:", {
      email,
      source,
      submittedAt,
    });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    });
    if (result.error) {
      console.error("[newsletter] Resend error:", result.error);
      const detail = typeof result.error === "object" && result.error && "message" in result.error
        ? String((result.error as { message: unknown }).message)
        : String(result.error);
      return NextResponse.json(
        { error: "Could not save signup.", resendError: detail, resendFrom: from, resendTo: to },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] Resend threw:", err);
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Could not save signup.", resendError: detail, resendFrom: from, resendTo: to },
      { status: 500 },
    );
  }
}
