import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { ApplicationForm } from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply for your Build slot | Stuck to Shipped",
  description:
    "Six questions. Will reads live — replies usually in about 5 minutes. Accepted applicants get a payment link and a Day 1 booking. Greenfield $199 or Brownfield $399.",
};

type SearchParams = Promise<{ kind?: string }>;

export default async function ApplyPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const kind: "idea" | "build" = params.kind === "idea" ? "idea" : "build";

  return (
    <>
      <TopBar />
      <main id="top">
        <div className="hero wrap" style={{ paddingBottom: 20 }}>
          <p className="eyebrow">// APPLICATION</p>
          <h2 className="display">Six questions. One reply. Usually ~5 minutes.</h2>
          <span className="sec-hand hand" style={{ marginTop: 18 }}>
            5 Greenfield + 5 Brownfield slots a week. will reads live.
          </span>
        </div>

        <div className="form-wrap">
          <ApplicationForm defaultKind={kind} />
          <p className="form-hint" style={{ marginTop: 32 }}>
            You don&apos;t pay here. Fit: Stripe link + Cal.com booking, slot locks. Not a fit: honest reply.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
