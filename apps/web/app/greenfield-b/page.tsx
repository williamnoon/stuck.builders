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
  title: "Greenfield Build (B) — Conceive + ship at agentic speed · Working demo by Sunday | Stuck to Shipped",
  description:
    "AI made anyone able to build. Almost nobody can conceive an idea worth building. This week: your agent + Radar drafts the PRD before Day 1. Nights 2–6 your agent builds the AI-native demo on your machine. Day 1 is 15-min alignment. Day 7 you demo. $199. Apply-first, ~5 min reply.",
};

export default function GreenfieldBPage() {
  return (
    <>
      <TopBar />
      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <p className="eyebrow">
            // GREENFIELD BUILD (B) — conceive + ship at agentic speed ·{" "}
            <span className="ok">5 Greenfield slots a week</span>
          </p>
          <h1 className="display">
            <span className="stuck">
              Someday
              <svg className="scratch" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4,22 C60,14 90,30 150,20 C210,10 250,28 296,18" fill="none" stroke="#C93A2B" strokeWidth="7" strokeLinecap="round" opacity=".85" />
                <path d="M10,30 C70,24 130,34 190,26 C240,20 270,30 292,26" fill="none" stroke="#C93A2B" strokeWidth="4" strokeLinecap="round" opacity=".5" />
              </svg>
            </span>{" "}
            <span className="arrow">→</span> Working demo<br />by Sunday.
          </h1>

          <div className="hero-note hand" aria-hidden="true">
            AI made anyone able to build.<br />
            almost nobody can conceive an idea worth building.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
            <Image src="/greenfield.svg" alt="a green field with a small sapling" width={160} height={96} />
            <span className="hand" style={{ maxWidth: 320 }}>
              greenfield: {PRODUCT_TAGLINE.idea}
            </span>
          </div>

          <p className="sub">
            One week. Your agent conceives + builds the demo of your imaginative solution at agentic speed —
            on your machine, in your repo, under your approvals. Pre-Day-1 your Radar + agent drafts the PRD
            skeleton + imaginative solution shape from your background. Day 1 is 15-min alignment. Nights 2–6
            your agent builds the AI-native demo. Mornings 15 min: you direct + review + confirm the shape.
            Day 7 you demo + walk out with a working AI-native MVP of your idea + the operating environment
            to keep shipping at this pace forever.
          </p>

          <p className="hand" style={{ marginTop: 8 }}>
            &quot;I need help with an idea to build something of value.&quot; ·{" "}
            &quot;I have an idea but I&apos;m stuck on how to build it.&quot; ·{" "}
            &quot;I just learned AI/Bolt but don&apos;t know what to build.&quot; ·{" "}
            &quot;I have AI. I still don&apos;t know what to build.&quot;
          </p>

          <ApplyCta
            label="Apply for a slot — $199"
            href="/apply?kind=idea"
            note="Reply in ~5 min. Your agent + Radar drafts the PRD before Day 1. Day 1 is 15-min alignment. This is the qualifier for Brownfield Build."
          />
        </div>

        <SlotBoard kind="idea" applyHref="/apply?kind=idea" />

        {/* WHO IT'S FOR */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHO THIS IS FOR</p>
            <h2 className="display">
              You don&apos;t need to type.<br />
              <span className="dim">You need the imaginative solution.</span>
            </h2>
            <span className="sec-hand hand">which one is you?</span>
            <div className="points">
              <div className="point">
                <h3>
                  <span className="from">Half-baked</span> <span className="to">→ Shaped</span>
                </h3>
                <p>
                  You&apos;ve had the shape of an idea for a year. Never executed. Never validated. This week
                  your agent + Radar surfaces the closer, better version of it sitting in your background —
                  and builds the demo of THAT.
                </p>
                <span className="hand">&quot;I&apos;ve had a version of this in my head forever.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Blank</span> <span className="to">→ Yours</span>
                </h3>
                <p>
                  You want to build. You don&apos;t have an idea. That&apos;s not a blocker — Radar mines
                  your background, your work, the problems in your own life. The imaginative solution comes
                  from you (Radar surfaces it), not from a template.
                </p>
                <span className="hand">&quot;I have no idea what to build.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Three</span> <span className="to">→ The one</span>
                </h3>
                <p>
                  You have three ideas. Every friend picks a different one. Radar surfaces which pattern
                  actually recurs in your life; four-filter pressure-tests the one that holds. Agent builds
                  the demo. You demo it and know.
                </p>
                <span className="hand">&quot;I can&apos;t pick.&quot;</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW THE SPRINT RUNS — corrected model */}
        <section>
          <div className="wrap">
            <p className="sec-label">// HOW THE SPRINT RUNS</p>
            <h2 className="display">
              Pre-Day-1 handshake.<br />
              <span className="dim">Nights your agent builds. Mornings you shape.</span>
            </h2>
            <div className="days">
              <svg className="path-line" viewBox="0 0 22 400" preserveAspectRatio="none" aria-hidden="true">
                <path d="M11,0 C4,60 18,110 10,170 C3,230 17,290 11,400" fill="none" stroke="#128A4B" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 9" opacity=".7" />
              </svg>
              <div className="day">
                <p className="d">PRE-DAY 1 · AGENT HANDSHAKE (24–48 HRS BEFORE)</p>
                <h3>Your agent + Radar drafts the PRD skeleton. Will&apos;s operator agent reviews.</h3>
                <p>
                  Your Radar reads your Q3 background + your local Claude Code transcripts. Recurring
                  patterns from your life surface. Your agent drafts a proposed imaginative solution shape +
                  PRD skeleton + Day 2–7 plan. You review, edit inline, approve. Will&apos;s operator agent
                  cross-checks (four filters, community MCP demos, prior sprint patterns). Will taps in ~5 min.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 1 · IMAGINATIVE SOLUTION LOCK · 15 MIN CALL</p>
                <h3>Open the pre-drafted PRD together. Deepen the framing. Lock.</h3>
                <p>
                  Both open the locked PRD skeleton. Live conversation reveals what the pre-draft missed.
                  Four filters cross-checked live. Any red flag → we pivot to the closer, better idea Radar
                  already surfaced. Confirm the agent&apos;s Day-2 build brief. Done in 15 min.
                </p>
              </div>
              <div className="day">
                <p className="d">NIGHTS 2–6 · YOUR AGENT BUILDS THE DEMO ON YOUR MACHINE</p>
                <h3>Agentic speed. Branch-only. Every UX/design taste call flagged for you.</h3>
                <p>
                  Agent builds the AI-native demo of the imaginative solution on your machine, in your repo.
                  Every commit branch-only. Every taste call flagged for you (naming, UX, design). You wake
                  up to a recap + a set of taste calls to answer. In parallel: real-people conversations run
                  to test the assumption.
                </p>
              </div>
              <div className="day">
                <p className="d">MORNINGS 2–6 · PLANNING-MODE REVIEW · 15 MIN EACH</p>
                <h3>Review overnight demo. Answer taste calls. Direct tonight.</h3>
                <p>
                  15 min with Will. Review the demo as it takes shape overnight. Answer flagged taste calls.
                  Real-people feedback informs shape. Decide what tonight&apos;s brief includes. You direct.
                  I copilot the orchestration.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 6 · PIVOT / PROCEED / STOP · IN THE MORNING CALL</p>
                <h3>The decision. The demo is already in front of you.</h3>
                <p>
                  We put the week&apos;s evidence + the demo on the table. The demo IS the pivot artifact if
                  needed. Verdict: proceed to Brownfield / pivot with the demo as artifact / stop and keep
                  the year back. The PRD documents whichever we land on.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 7 · DELIVERY · 30 MIN</p>
                <h3>PRD final. Working demo live. Operating environment kept.</h3>
                <p>
                  You walk out with the <strong>1–2 page PRD</strong>, the <strong>working AI-native demo</strong>
                  of your idea (link + local run instructions), the <strong>validation findings</strong> in
                  writing, and the operating environment we built together. And the muscle to keep conceiving +
                  building at agentic speed forever.
                </p>
                <span className="hand">a &quot;don&apos;t build this&quot; is still a real win — the demo is the pivot artifact.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR FILTERS */}
        <section>
          <div className="wrap">
            <p className="sec-label">// THE FOUR FILTERS</p>
            <h2 className="display">
              What we pressure-test<br />
              <span className="dim">your idea against.</span>
            </h2>
            <span className="sec-hand hand">is this even a real problem?</span>
            <div className="days">
              <div className="day">
                <p className="d">FILTER 1 — HARD LINE (GATE)</p>
                <h3>Not illegal. Not harmful. Not predatory.</h3>
                <p>
                  Gate, not coaching call. If the project trips this, application declined same day, no charge.
                </p>
              </div>
              <div className="day">
                <p className="d">FILTER 2 — REAL (LENS)</p>
                <h3>Is this a problem people actually have?</h3>
                <p>
                  Not invented to justify the idea. Real people bump into it repeatedly. Days 2–5
                  real-people conversations find that evidence or don&apos;t.
                </p>
              </div>
              <div className="day">
                <p className="d">FILTER 3 — VALUABLE (LENS)</p>
                <h3>Does solving it earn someone&apos;s time?</h3>
                <p>
                  Saves time, saves money, unlocks something they can name. If not, we&apos;ll say so.
                </p>
              </div>
              <div className="day">
                <p className="d">FILTER 4 — CLOSE TO YOU (LENS)</p>
                <h3>Are you the right person to build it?</h3>
                <p>
                  Radar surfaces recurring patterns from your background. When closeness is missing,
                  background-mining often surfaces a better, closer idea sitting next to the one you
                  applied with. That pivot is a feature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE / APPLY */}
        <section id="book">
          <div className="wrap">
            <p className="sec-label">// CLAIM YOUR SLOT</p>
            <div className="price-frame">
              <div className="price-wrap">
                <svg viewBox="0 0 260 130" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M28,66 C20,24 92,6 138,10 C196,15 246,32 242,66 C238,102 180,124 118,120 C58,116 20,100 30,62" fill="none" stroke="#A56A11" strokeWidth="3.5" strokeLinecap="round" opacity=".9" />
                </svg>
                <div className="price">
                  <sup>$</sup>199
                </div>
              </div>
              <p className="price-sub">
                One week. Imaginative solution + working AI-native demo + operating environment. Agentic speed.
              </p>
              <span className="price-hand hand">a coffee-budget bet on becoming a builder who ships at agentic speed.</span>
              <ValueStack
                items={[
                  { strong: "The imaginative solution", label: "— the shape of an idea worth building, developed with Will's taste + judgment", value: "$1,000 value" },
                  { strong: "Pre-Day-1 agent handshake", label: "— PRD skeleton + imaginative solution shape drafted, reviewed, locked before you pay", value: "$400 value" },
                  { strong: "Day 1 alignment call (15 min)", label: "— final tap on the locked PRD + Day-2 agent brief queued", value: "$200 value" },
                  { strong: "5 nights of agent building the demo on your machine", label: "— AI-native MVP under your approvals, branch-only", value: "$2,000 value" },
                  { strong: "5 morning planning-mode reviews (15 min each) with Will", label: "— you direct + shape, I copilot orchestration", value: "$500 value" },
                  { strong: "1–2 page PRD documenting the solution", label: "— the spec to build from, yours forever", value: "$400 value" },
                  { strong: "Operating environment we build together", label: "— prompts, docs, tools, skills you keep for life", value: "$600 value" },
                  { strong: "Radar receipts of every session + Fuse hosted MCP", label: "— community skill library injects into your Claude", value: "$400 value" },
                ]}
                totalValue="$5,500"
                price="$199"
                priceReason="I only take 5 Greenfield slots a week and I want them full."
              />
              <a className="btn" href="/apply?kind=idea">
                Apply for a slot — $199
              </a>
              <p className="pay-note">
                Reply in ~5 min · Accepted applicants get a payment link (
                <span className="ok">Cash App Pay</span> or card) + Cal.com booking · First-accepted, first-locked
              </p>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <Guarantee
          stampTop="SOLUTION + DEMO"
          stampBottom="OR REFUND"
          headline="Imaginative solution + working demo by Day 7. Under your approvals. Or your money back."
          body="If you don't walk away with an imaginative solution you believe is worth building, a working AI-native demo of it, and the operating environment we built together by the Day 7 delivery call — full $199 refund. Your agent runs on your machine, under your approvals. I never build for you. A 'don't build this' verdict — with the demo as a pivot artifact — still counts as delivery, but if you don't get the deliverables at all, you don't pay."
          handNote="a 'no' answered clean is worth more than a 'maybe' carried forever."
        />

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <p className="sec-label">// QUESTIONS</p>
            <h2 className="display">
              Before you <span className="dim">apply.</span>
            </h2>
            <details>
              <summary>What if the answer is &quot;don&apos;t build&quot;?</summary>
              <p className="a">
                Then the sprint worked. You get the PRD of what we tested, the customer evidence in writing,
                the demo as a pivot artifact, and the reasoning. Move on clean instead of half-building it
                for another year at 11pm. A written &quot;no&quot; in Week 1 is worth the year you were about
                to spend finding out on your own.
              </p>
            </details>
            <details>
              <summary>Isn&apos;t this done-for-you?</summary>
              <p className="a">
                No. Your agent builds the demo on <em>your</em> machine, in <em>your</em> repo, branch-only,
                under your approvals. Every UX/design taste call is flagged for you. You direct the shape.
                What you learn is orchestration + taste — the durable AI-era skill.
              </p>
            </details>
            <details>
              <summary>I already know I want to build it. Skip to Brownfield?</summary>
              <p className="a">
                Yes — if you&apos;ve already talked to 5+ real potential users and the imaginative solution
                is clear, the <a href="/brownfield-b">Brownfield Build ($399)</a> is the right door. Greenfield
                is for when the &quot;what&quot; isn&apos;t settled yet. If you&apos;re unsure, apply and say
                so on the form.
              </p>
            </details>
            <details>
              <summary>Do I need customers or an audience to start?</summary>
              <p className="a">
                No. Pre-Day-1 Radar identifies who to talk to based on your imaginative solution. Days 2–5
                guided-outreach mechanic gets you to 5 real people. No list, no following, no product —
                just 30–60 min a day and willingness to send messages.
              </p>
            </details>
            <details>
              <summary>What happens after Day 7?</summary>
              <p className="a">
                You keep the PRD, findings, next-3-steps doc, demo, and operating environment forever. If
                proceeding, <a href="/brownfield-b">Brownfield Build ($399)</a> takes the demo to deployed
                live URL. If not, keep the demo as a pivot artifact. Ship Club (<strong>${SKOOL_PRICE_MONTHLY}/mo
                or ${SKOOL_PRICE_ANNUAL}/yr with a {SKOOL_TRIAL_DAYS}-day free trial</strong>) is the room
                where agentic speed compounds. <a href="/community-b">See Ship Club →</a>
              </p>
            </details>
          </div>
        </section>

        <div className="signoff">
          <span className="hand">
            AI made anyone able to build.<br />this week, conceive the one worth building.
            <svg width="220" height="26" viewBox="0 0 220 26" aria-hidden="true">
              <path d="M8,16 C50,8 90,22 130,14 C165,8 195,16 212,12" fill="none" stroke="#128A4B" strokeWidth="3.5" strokeLinecap="round" opacity=".85" />
            </svg>
          </span>
          <p className="hand" style={{ marginTop: 8 }}>Will — {OPERATOR_IDENTITY}.</p>
        </div>

        <CrossLink
          prompt="Already building? Skip to the next door —"
          linkText="Brownfield Build (B) ($399) →"
          href="/brownfield-b"
        />
      </main>
      <Footer />
    </>
  );
}
