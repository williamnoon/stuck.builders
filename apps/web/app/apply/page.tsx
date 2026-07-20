import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { ApplicationForm } from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply for your Build seat | Stuck.builders",
  description:
    "A few questions. My AI does the onboarding call, Will jumps on to close, seat locks on a Square or Cash App link.",
};

type Variant = "build-b" | "build-live" | "legacy";
type SearchParams = Promise<{ kind?: string; variant?: string }>;

function normalizeVariant(v: string | undefined): Variant {
  if (v === "build-b" || v === "build-live") return v;
  return "legacy";
}

const VARIANT_CONFIG: Record<Variant, {
  eyebrow: string;
  h2: string;
  handNote: string;
  flowHint: string;
}> = {
  "build-b": {
    eyebrow: "// APPLICATION — THE BUILD · virtual · 4 hours · 1:1",
    h2: "A few questions. Then a call. Then you're in.",
    handNote: "$1,995 launch (regular $2,995) · 1 seat a day · Mon–Fri",
    flowHint:
      "You don't pay here. Apply → my AI does the onboarding call → Will jumps on to close → I send a Square or Cash App link. Seat locks on payment.",
  },
  "build-live": {
    eyebrow: "// APPLICATION — THE BUILD LIVE · Fri Sep 11, 2026 · Bridgeview Room, Charleston SC",
    h2: "A few questions. Then a call. Then you're in the room.",
    handNote: "$1,995 launch (first 10) · then $5,995 · in-person day, 9am–3pm",
    flowHint:
      "You don't pay here. Apply → my AI does the onboarding call → Will jumps on to close → I send a Square or Cash App link. Seat locks on payment. First 10 in get the launch price.",
  },
  legacy: {
    eyebrow: "// APPLICATION",
    h2: "Six questions. One reply. Usually ~5 minutes.",
    handNote: "5 Greenfield + 5 Brownfield slots a week. will reads live.",
    flowHint:
      "You don't pay here. Fit: Stripe link + Cal.com booking, slot locks. Not a fit: honest reply.",
  },
};

export default async function ApplyPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const kind: "idea" | "build" = params.kind === "idea" ? "idea" : "build";
  const variant = normalizeVariant(params.variant);
  const cfg = VARIANT_CONFIG[variant];

  return (
    <>
      <TopBar />
      <main id="top">
        <div className="hero wrap" style={{ paddingBottom: 20 }}>
          <p className="eyebrow">{cfg.eyebrow}</p>
          <h2 className="display">{cfg.h2}</h2>
          <span className="sec-hand hand" style={{ marginTop: 18 }}>
            {cfg.handNote}
          </span>
        </div>

        <div className="form-wrap">
          <ApplicationForm defaultKind={kind} variant={variant} />
          <p className="form-hint" style={{ marginTop: 32 }}>
            {cfg.flowHint}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
