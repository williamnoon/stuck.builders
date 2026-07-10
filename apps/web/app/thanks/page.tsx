import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { sprintKindLabel, type SprintKind } from "@/lib/config";

export const metadata: Metadata = {
  title: "You're in the queue | Stuck to Shipped",
  description:
    "Application received. Will reads applications live — replies usually in about 5 minutes, accepted or not.",
};

type SearchParams = Promise<{ kind?: string }>;

export default async function ThanksPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const kind: SprintKind = params.kind === "idea" ? "idea" : "build";
  const priceLabel = sprintKindLabel(kind);
  const backHref = kind === "idea" ? "/greenfield" : "/brownfield";

  return (
    <>
      <TopBar />
      <main id="top">
        <div className="hero wrap">
          <p className="eyebrow">// IN THE QUEUE</p>
          <h1 className="display" style={{ fontSize: "clamp(44px, 8vw, 96px)" }}>
            Got it.<br />Reply in<br />~5 minutes.
          </h1>

          <p className="sub">
            {priceLabel}. Will reads live. Accepted: Stripe link + Cal.com booking. Not a fit: honest reply.
          </p>

          <div className="signoff">
            <span className="hand">
              watch your inbox — the reply comes from will@stuck.builders.
            </span>
          </div>

          <p style={{ marginTop: 20, fontSize: 13, color: "var(--gray)" }}>
            <a href={backHref} style={{ borderBottom: "1px dashed var(--green)" }}>
              ← back to stuck.builders
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
