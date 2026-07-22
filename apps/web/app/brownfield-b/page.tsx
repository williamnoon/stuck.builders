import type { Metadata } from "next";
import Image from "next/image";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { SlotBoard } from "@/components/SlotBoard";
import { ApplyCta } from "@/components/ApplyCta";
import { CrossLink } from "@/components/CrossLink";
import { Guarantee } from "@/components/Guarantee";
import { ValueStack } from "@/components/ValueStack";
import {
  OPERATOR_IDENTITY,
  PRODUCT_TAGLINE,
  SKOOL_PRICE_ANNUAL,
  SKOOL_PRICE_MONTHLY,
  SKOOL_TRIAL_DAYS,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Brownfield Build (B) — Agentic speed on your project · Shipped by Sunday | Stuck to Shipped",
  description:
    "Ideate, build, deploy at agentic speed. Your agent ships nights on your machine under your approvals. You direct 15 min/morning. Deployed live URL by Sunday + the muscle to keep shipping at this pace forever. $399. Apply-first, ~5 min reply.",
};

type Angle = "main" | "ceiling" | "traction";
type SearchParams = Promise<{ angle?: string }>;

function normalizeAngle(a: string | undefined): Angle {
  if (a === "ceiling" || a === "traction") return a;
  return "main";
}

function Hero({ angle }: { angle: Angle }) {
  const commonMediaBlock = (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
        <Image src="/brownfield.svg" alt="a brown field with an existing partial structure" width={160} height={96} />
        <span className="hand" style={{ maxWidth: 360 }}>brownfield: {PRODUCT_TAGLINE.build}</span>
      </div>
    </>
  );

  if (angle === "ceiling") {
    return (
      <div className="hero wrap">
        <p className="eyebrow">
          // BROWNFIELD BUILD (B) — off the platform ceiling at agentic speed ·{" "}
          <span className="ok">5 Brownfield slots a week</span>
        </p>
        <h1 className="display">
          <span className="stuck">
            Trapped
            <svg className="scratch" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M4,22 C60,14 90,30 150,20 C210,10 250,28 296,18" fill="none" stroke="#C93A2B" strokeWidth="7" strokeLinecap="round" opacity=".85" />
              <path d="M10,30 C70,24 130,34 190,26 C240,20 270,30 292,26" fill="none" stroke="#C93A2B" strokeWidth="4" strokeLinecap="round" opacity=".5" />
            </svg>
          </span>{" "}
          <span className="arrow">→</span> Shipped<br />overnight.
        </h1>

        {commonMediaBlock}

        <p className="sub">
          You built something real on <strong>Lovable</strong>, <strong>Bolt</strong>, <strong>v0</strong>, or{" "}
          <strong>Replit</strong>. Then auth broke, or credits hit $200/mo, or the one feature that matters
          just won&apos;t take. This week your agent runs the plan on your machine — fix in place, or move
          the essentials to Next.js on Vercel with your own repo and domain. Pre-Day-1 handshake locks the
          path. Nights 2–6 your agent executes under your approvals. Mornings 15 min. Day 7 you demo the
          live URL.
        </p>

        <p className="hand" style={{ marginTop: 8 }}>
          &quot;why does auth always break?&quot; ·{" "}
          &quot;I&apos;m paying $200 a month and still stuck.&quot; ·{" "}
          &quot;I don&apos;t own this code and it&apos;s starting to feel like a problem.&quot;
        </p>

        <ApplyCta
          label="Apply for a slot — $399"
          href="/apply?kind=build"
          note="Reply in ~5 min. Your agent + Radar drafts scope before Day 1. Day 1 is 15-min alignment."
        />
      </div>
    );
  }

  if (angle === "traction") {
    return (
      <div className="hero wrap">
        <p className="eyebrow">
          // BROWNFIELD BUILD (B) — traction at agentic speed ·{" "}
          <span className="ok">5 Brownfield slots a week</span>
        </p>
        <h1 className="display">
          <span className="stuck">
            Shipped
            <svg className="scratch" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M4,22 C60,14 90,30 150,20 C210,10 250,28 296,18" fill="none" stroke="#C93A2B" strokeWidth="7" strokeLinecap="round" opacity=".85" />
              <path d="M10,30 C70,24 130,34 190,26 C240,20 270,30 292,26" fill="none" stroke="#C93A2B" strokeWidth="4" strokeLinecap="round" opacity=".5" />
            </svg>
          </span>{" "}
          <span className="arrow">→</span> First users reached<br />in 7 days.
        </h1>

        {commonMediaBlock}

        <p className="sub">
          The app is live. Nobody&apos;s ever used it. This week the next version isn&apos;t a feature —
          it&apos;s a <strong>traction milestone shipped</strong>. Pre-Day-1 your agent + Radar drafts
          the outreach cohort + messaging plan. Nights 2–6 your agent runs outreach, tunes landing, ships
          the traction step on your machine. Mornings 15 min you direct. Day 7 the milestone is live:
          outreach to 5–10 real potential users, one angle proven with their language, first
          conversation logged.
        </p>

        <p className="hand" style={{ marginTop: 8 }}>
          &quot;Nobody&apos;s ever used it.&quot; ·{" "}
          &quot;I built the whole thing and I don&apos;t even know who it&apos;s for anymore.&quot; ·{" "}
          &quot;If I don&apos;t get one real user this month I&apos;m shelving it.&quot;
        </p>

        <ApplyCta
          label="Apply for a slot — $399"
          href="/apply?kind=build"
          note="Reply in ~5 min. Your agent + Radar drafts scope before Day 1. Day 1 is 15-min alignment."
        />
      </div>
    );
  }

  return (
    <div className="hero wrap">
      <p className="eyebrow">
        // BROWNFIELD BUILD (B) — agentic speed on your project ·{" "}
        <span className="ok">5 Brownfield slots a week</span>
      </p>
      <h1 className="display">
        <span className="stuck">
          You
          <svg className="scratch" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
            <path d="M4,22 C60,14 90,30 150,20 C210,10 250,28 296,18" fill="none" stroke="#C93A2B" strokeWidth="7" strokeLinecap="round" opacity=".85" />
            <path d="M10,30 C70,24 130,34 190,26 C240,20 270,30 292,26" fill="none" stroke="#C93A2B" strokeWidth="4" strokeLinecap="round" opacity=".5" />
          </svg>
        </span>{" "}
        + your agent <span className="arrow">→</span> Deployed<br />by Sunday.
      </h1>

      {commonMediaBlock}

      <p className="sub">
        One week. Your agent ships nights on your machine — in your repo, under your approvals. Pre-Day-1
        your Radar + agent drafts a Version Map + daily plan you review and lock. Day 1 we meet 15 min to
        align, tap, and queue tonight&apos;s brief. Nights 2–6 the agent executes; every commit branch-only,
        every taste call flagged. Mornings 2–6 we meet 15 min: review, direct, unstick. Sunday you paste the
        deployed URL. You leave with the shipped next version <em>and</em> the muscle to keep shipping at
        agentic speed forever.
      </p>

      <p className="hand" style={{ marginTop: 8 }}>
        &quot;It broke 3 weeks ago and I still haven&apos;t opened it.&quot; ·{" "}
        &quot;I know what needs to happen. I can&apos;t get myself to start again.&quot; ·{" "}
        &quot;One more week of this and I shelve it.&quot;
      </p>

      <ApplyCta
        label="Apply for a slot — $399"
        href="/apply?kind=build"
        note="Reply in ~5 min. Your agent + Radar drafts scope before Day 1. Day 1 is 15-min alignment. Monday start."
      />
    </div>
  );
}

export default async function BrownfieldBPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const angle = normalizeAngle(params.angle);

  return (
    <>
      <TopBar />
      <main id="top">
        <Hero angle={angle} />

        <SlotBoard kind="build" applyHref="/apply?kind=build" />

        {/* WHO IT'S FOR — new for B: agentic speed framing */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHO THIS IS FOR</p>
            <h2 className="display">
              You started it.<br />
              <span className="dim">Something got between you and shipped.</span>
            </h2>
            <span className="sec-hand hand">this week your agent gets past it — you direct.</span>
            <div className="points">
              <div className="point">
                <h3>
                  <span className="from">Human-pace</span> <span className="to">→ Agent-pace</span>
                </h3>
                <p>
                  You&apos;ve been typing while your agents could ship. This week you drop the typing and
                  start orchestrating. Agent runs nights on your machine; you direct 15 min mornings.
                </p>
                <span className="hand">&quot;I don&apos;t need a class, I need someone shipping with me at pace.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Stalled</span> <span className="to">→ Nightly shipping</span>
                </h3>
                <p>
                  Last commit was 18 days ago. This week your agent commits every night to a branch you
                  approve. Momentum returns because it never stops overnight.
                </p>
                <span className="hand">&quot;It broke 3 weeks ago and I haven&apos;t opened it since.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Local only</span> <span className="to">→ Live URL</span>
                </h3>
                <p>
                  It runs on localhost. Nobody else has seen it. By Day 7 it&apos;s deployed under your
                  approval, custom domain pointed, working when you send it to a stranger.
                </p>
                <span className="hand">&quot;one more week of this and I&apos;m shelving it.&quot;</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW THE SPRINT RUNS — the corrected model */}
        <section>
          <div className="wrap">
            <p className="sec-label">// HOW THE SPRINT RUNS</p>
            <h2 className="display">
              Pre-Day-1 handshake.<br />
              <span className="dim">Nights your agent ships. Mornings you direct.</span>
            </h2>
            <div className="days">
              <svg className="path-line" viewBox="0 0 22 400" preserveAspectRatio="none" aria-hidden="true">
                <path d="M11,0 C4,60 18,110 10,170 C3,230 17,290 11,400" fill="none" stroke="#128A4B" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 9" opacity=".7" />
              </svg>
              <div className="day">
                <p className="d">PRE-DAY 1 · AGENT HANDSHAKE (24–48 HRS BEFORE)</p>
                <h3>Your agent + Radar drafts the plan. You approve. Will&apos;s operator agent reviews.</h3>
                <p>
                  Your Radar reads your application + your local Claude Code transcripts. Your agent drafts
                  a proposed <strong>Version Map + daily plan</strong>. You review at a private link, edit
                  inline, approve. Will&apos;s operator agent cross-checks (Radar signals, community wall
                  matches, four-filter lens). Will taps in ~5 min: agree / adjust / route. Locked plan sent
                  back to you.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 1 · ALIGNMENT CALL · 15 MIN</p>
                <h3>Open the locked plan together. Final tap. Queue tonight&apos;s brief.</h3>
                <p>
                  Both open the same locked Version Map. Confirm scope in your own words. Approve the
                  agent&apos;s Day-2 brief. Cover the guarantee anchor. Done in 15 min. No scoping from a
                  blank page.
                </p>
              </div>
              <div className="day">
                <p className="d">NIGHTS 2–6 · YOUR AGENT SHIPS ON YOUR MACHINE</p>
                <h3>Agentic speed under your approvals. Branch-only. Taste calls flagged.</h3>
                <p>
                  Agent executes today&apos;s plan on your machine, in your repo. <strong>Every commit
                  branch-only.</strong> Every taste call flagged for you. No unattended prod deploys, no
                  main-branch changes without your tap. You wake up to a recap + a set of taste calls to
                  answer.
                </p>
              </div>
              <div className="day">
                <p className="d">MORNINGS 2–6 · PLANNING-MODE REVIEW · 15 MIN EACH</p>
                <h3>Review overnight ship. Answer taste calls. Direct tonight.</h3>
                <p>
                  15 min with Will. Review the agent&apos;s overnight recap. Answer flagged taste calls.
                  Decide what tonight&apos;s brief includes. You direct. I copilot the orchestration. Up to
                  5 async unstick pings/week if you get stuck between mornings (10 min each).
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 7 · SHIP REVIEW · 30 MIN</p>
                <h3>You paste the URL. We verify. Roadmap + Skool pitch.</h3>
                <p>
                  We demo the deployed app on the real URL — deployed under your approvals, working,
                  visitable. You keep every session recording + the operating environment we built together
                  + a next-version roadmap doc so Monday&apos;s not a blank page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE / APPLY — corrected value stack for the new model */}
        <section id="book">
          <div className="wrap">
            <p className="sec-label">// CLAIM YOUR SLOT</p>
            <div className="price-frame">
              <div className="price-wrap">
                <svg viewBox="0 0 260 130" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M28,66 C20,24 92,6 138,10 C196,15 246,32 242,66 C238,102 180,124 118,120 C58,116 20,100 30,62" fill="none" stroke="#A56A11" strokeWidth="3.5" strokeLinecap="round" opacity=".9" />
                </svg>
                <div className="price">
                  <sup>$</sup>399
                </div>
              </div>
              <p className="price-sub">
                One week. Agentic speed. Deployed live URL by Sunday under your approvals.
              </p>
              <span className="price-hand hand">
                one flat price. no retainer. no scope-creep. no per-hour meter.
              </span>
              <ValueStack
                items={[
                  { strong: "Pre-Day-1 agent handshake", label: "— Version Map + daily plan drafted, reviewed, locked before you pay", value: "$400 value" },
                  { strong: "Day 1 alignment call (15 min)", label: "— final tap on your locked plan + Day-2 agent brief queued", value: "$200 value" },
                  { strong: "6 nights of agent execution on your machine", label: "— ~40 hrs of agentic building under your approvals, branch-only", value: "$2,400 value" },
                  { strong: "6 morning planning-mode reviews (15 min each) with Will", label: "— you direct, I copilot the orchestration", value: "$600 value" },
                  { strong: "Deployment to production URL", label: "— real users can visit, custom domain works, your approval every step", value: "$400 value" },
                  { strong: "Every session recorded + next-version roadmap", label: "— archived to your Radar, yours forever", value: "$200 value" },
                  { strong: "Operating environment we build together", label: "— prompts, docs, tools, skills you keep for every next version", value: "$400 value" },
                  { strong: "Fuse hosted MCP access during sprint", label: "— community skill library injects into your Claude live (Ship Club preview)", value: "$400 value" },
                ]}
                totalValue="$5,000"
                price="$399"
                priceReason="Five Brownfield slots a week because I deliver every sprint personally — and I only take what I can actually ship at agentic speed."
              />
              <a className="btn" href="/apply?kind=build">
                Apply for a slot — $399
              </a>
              <p className="pay-note">
                Reply in ~5 min · Accepted builders get a payment link (
                <span className="ok">Cash App Pay</span> or card) + Cal.com booking · First-accepted, first-locked · Monday start
              </p>
            </div>
          </div>
        </section>

        {/* GUARANTEE — updated body for the new delivery model */}
        <Guarantee
          stampTop="SHIPPED"
          stampBottom="OR REFUND"
          headline="Deployed by Day 7. Under your approvals. Or your money back."
          body="If the target we locked pre-Day-1 isn't live on a real URL by the Day 7 ship review — deployed under your approvals, working, visitable — I refund the full $399. Every night your agent runs on your machine, under your approvals. Every commit branch-only until you approve merge. I never deploy for you. If the shipped target isn't live Day 7, you don't pay."
          handNote="the only guarantee worth writing is the one you'd honor without being asked."
        />

        {/* FAQ — new for the corrected model */}
        <section className="faq">
          <div className="wrap">
            <p className="sec-label">// QUESTIONS</p>
            <h2 className="display">
              Before you <span className="dim">apply.</span>
            </h2>
            <details>
              <summary>Isn&apos;t this done-for-you?</summary>
              <p className="a">
                No. Your agent runs on <em>your</em> machine, in <em>your</em> repo. Every commit branch-only
                until you approve merge. Every deploy requires your tap. I never touch your prod. You
                direct; the agent executes; you approve. What you learn is orchestration — the durable
                skill for the next decade.
              </p>
            </details>
            <details>
              <summary>What am I paying for if my agent does the work?</summary>
              <p className="a">
                Speed you can&apos;t get alone. Scope + orchestration coaching from someone who engineers
                and orchestrates real-world agents every day. The pre-Day-1 agent handshake that compresses
                Day 1 into a 15-min alignment call. Radar receipts of everything. The operating environment
                we build together. Community skill inheritance via Fuse.
              </p>
            </details>
            <details>
              <summary>Do I need to be a coder?</summary>
              <p className="a">
                You need to learn orchestration, not typing. Sprints are the fastest way to learn it — by
                shipping something real this week under your own approvals. If you can read code and answer
                taste calls (yes/no/redirect), you can run this sprint.
              </p>
            </details>
            <details>
              <summary>What if my agent breaks something?</summary>
              <p className="a">
                Branch-only commits. Nothing merges to main without your approval. Nothing deploys to prod
                without your tap. If a night&apos;s work goes sideways, Radar captures every session so you
                can rewind + fork from any prior turn. Then we adjust tonight&apos;s brief in the morning.
              </p>
            </details>
            <details>
              <summary>What happens after Day 7?</summary>
              <p className="a">
                You keep everything: recordings, roadmap, live URL, operating environment, Radar receipts.
                Ship Club (<strong>${SKOOL_PRICE_MONTHLY}/mo or ${SKOOL_PRICE_ANNUAL}/yr with a{" "}
                {SKOOL_TRIAL_DAYS}-day free trial</strong>) is the room where agentic speed compounds.
                Weekly Labs. Searchable library. Fuse hosted — your Claude auto-consults the community
                skill library live. <a href="/community-b">See Ship Club →</a>
              </p>
            </details>
          </div>
        </section>

        <div className="signoff">
          <span className="hand">
            you type for years. your agent ships this week.<br />open Monday. deploy Sunday.
            <svg width="220" height="26" viewBox="0 0 220 26" aria-hidden="true">
              <path d="M8,16 C50,8 90,22 130,14 C165,8 195,16 212,12" fill="none" stroke="#128A4B" strokeWidth="3.5" strokeLinecap="round" opacity=".85" />
            </svg>
          </span>
          <p className="hand" style={{ marginTop: 8 }}>Will — {OPERATOR_IDENTITY}.</p>
        </div>

        <CrossLink
          prompt="Idea not conceived yet? Start one rung back —"
          linkText="Greenfield Build (B) ($199) →"
          href="/greenfield-b"
        />

        <CrossLink
          prompt="Between walls, want the room where this compounds?"
          linkText={`Ship Club (B) ($${SKOOL_PRICE_MONTHLY}/mo · ${SKOOL_TRIAL_DAYS}-day free trial) →`}
          href="/community-b"
        />
      </main>
      <Footer />
    </>
  );
}
