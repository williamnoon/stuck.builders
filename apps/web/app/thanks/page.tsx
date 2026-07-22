import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Application in — talk soon | Stuck.builders",
  description:
    "Application received. Will reads every one himself. Expect a short call to lock your seat.",
};

type Variant = "build-b" | "build-live" | "legacy";
type SearchParams = Promise<{ kind?: string; variant?: string }>;

function normalizeVariant(v: string | undefined): Variant {
  if (v === "build-b" || v === "build-live") return v;
  return "legacy";
}

const VARIANT_CONFIG: Record<Variant, {
  eyebrow: string;
  h1: React.ReactNode;
  sub: React.ReactNode;
  hand: string;
  backHref: string;
  backLabel: string;
}> = {
  "build-b": {
    eyebrow: "// APPLICATION IN — THE BUILD",
    h1: (
      <>
        Got it.<br />Talk soon.
      </>
    ),
    sub: (
      <>
        You applied for <strong>The Build</strong> — live · virtual · 4 hours · 1:1 with Will.{" "}
        <strong>$1,995 launch price — going up soon.</strong>
        <br />
        <br />
        <strong>Next:</strong> Will reads your application himself. If it&apos;s a fit, we call to
        scope your build and lock the day that works for you. If it&apos;s not, you get an honest
        reply — no ghosting.
      </>
    ),
    hand: "watch your phone + inbox — reply comes from will@stuck.builders.",
    backHref: "/build-b",
    backLabel: "← back to The Build",
  },
  "build-live": {
    eyebrow: "// APPLICATION IN — THE BUILD LIVE · SEP 11, 2026 · CHARLESTON",
    h1: (
      <>
        Got it.<br />Save the date.
      </>
    ),
    sub: (
      <>
        You applied for <strong>The Build — LIVE</strong> — in-person, Fri Sep 11, 2026, Bridgeview
        Room at Charleston Digital. <strong>$1,995 launch price — first 10 seats only. Then the price goes up.</strong>
        <br />
        <br />
        <strong>Next:</strong> Will reads your application himself. If it&apos;s a fit, we call to
        scope your build and get the seat locked with a Square or Cash App link. If it&apos;s not,
        you get an honest reply — no ghosting.
        <br />
        <br />
        <strong>Meanwhile:</strong> block <strong>Fri Sep 11, 2026, 9am–3pm</strong> in your calendar
        so the day&apos;s held once we confirm.
      </>
    ),
    hand: "watch your phone + inbox — reply comes from will@stuck.builders.",
    backHref: "/build-live",
    backLabel: "← back to The Build LIVE",
  },
  legacy: {
    eyebrow: "// APPLICATION IN",
    h1: (
      <>
        Got it.<br />Reply in<br />~5 minutes.
      </>
    ),
    sub: <>Will reads live. Accepted: payment link + first session booked. Not a fit: honest reply.</>,
    hand: "watch your inbox — the reply comes from will@stuck.builders.",
    backHref: "/",
    backLabel: "← back to stuck.builders",
  },
};

export default async function ThanksPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const variant = normalizeVariant(params.variant);
  const cfg = VARIANT_CONFIG[variant];

  return (
    <>
      <TopBar />
      <main id="top">
        <div className="hero wrap">
          <p className="eyebrow">{cfg.eyebrow}</p>
          <h1 className="display" style={{ fontSize: "clamp(44px, 8vw, 96px)" }}>
            {cfg.h1}
          </h1>

          <p className="sub" style={{ marginTop: 30 }}>{cfg.sub}</p>

          <div className="signoff">
            <span className="hand">{cfg.hand}</span>
          </div>

          <section
            style={{
              margin: "40px auto 0",
              maxWidth: 620,
              padding: "22px 24px",
              background: "var(--panel)",
              border: "1px solid var(--line)",
              borderLeft: "4px solid var(--green)",
              borderRadius: 6,
              textAlign: "left",
            }}
          >
            <p className="sec-label" style={{ marginTop: 0 }}>// WHILE YOU WAIT</p>
            <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: "6px 0 12px" }}>
              Meet the OS.
            </h2>
            <p style={{ fontSize: 15, color: "var(--gray)", margin: "0 0 18px" }}>
              Same system Will&apos;s about to open with you on the call. Talk to it now — it drafts
              your 3-system dashboard before he replies. Not a substitute for the human call, just a
              head start.
            </p>
            <a href="/talk" className="btn">talk to the OS →</a>
            <div style={{ marginTop: 12 }}>
              <span className="hand">optional · takes ~4 min</span>
            </div>
          </section>

          {variant === "build-live" && (
            <div
              style={{
                margin: "24px auto 0",
                maxWidth: 620,
                padding: "18px 22px",
                background: "var(--panel)",
                border: "1px solid var(--line)",
                borderLeft: "4px solid var(--chalk)",
                borderRadius: 6,
                textAlign: "left",
                fontSize: 14,
                color: "var(--gray)",
              }}
            >
              <strong style={{ color: "var(--white)" }}>Bridgeview Conference Room</strong> ·
              Charleston Digital · top floor of the Charleston Tech Center, downtown Charleston SC.
              Floor-to-ceiling glass, Ravenel Bridge view, private rooftop putting green, catered
              Mediterranean pita bar lunch. Doors 9am, we&apos;re building by 9:15.
            </div>
          )}

          <p style={{ marginTop: 24, fontSize: 13, color: "var(--gray)" }}>
            <a href={cfg.backHref} style={{ borderBottom: "1px dashed var(--green)" }}>
              {cfg.backLabel}
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
