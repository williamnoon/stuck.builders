import type { Metadata } from "next";
import Image from "next/image";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { SlotBoard } from "@/components/SlotBoard";
import { ApplyCta } from "@/components/ApplyCta";
import { CrossLink } from "@/components/CrossLink";
import { Guarantee } from "@/components/Guarantee";
import { ValueStack } from "@/components/ValueStack";
import { PRODUCT_TAGLINE, SKOOL_PRICE_ANNUAL, SKOOL_PRICE_MONTHLY, SKOOL_TRIAL_DAYS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Greenfield Build — Walk out a builder with a PRD and a working AI-native demo of your idea | Stuck to Shipped",
  description:
    "Bring a half-idea, no idea, or three you can't pick between. In 7 days we pressure-test the idea and build an AI-native demo of it together — hands on your keyboard, Will copilots. You walk out with the PRD, the demo, and the operating environment to keep shipping. $199. 5 Greenfield slots a week. Apply first.",
};

export default function GreenfieldPage() {
  return (
    <>
      <TopBar />
      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <p className="eyebrow">
            // GREENFIELD BUILD — the gateway sprint · <span className="ok">5 Greenfield slots a week</span>
          </p>
          <h1 className="display">
            <span className="stuck">
              Someday
              <svg className="scratch" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M4,22 C60,14 90,30 150,20 C210,10 250,28 296,18"
                  fill="none"
                  stroke="#C93A2B"
                  strokeWidth="7"
                  strokeLinecap="round"
                  opacity=".85"
                />
                <path
                  d="M10,30 C70,24 130,34 190,26 C240,20 270,30 292,26"
                  fill="none"
                  stroke="#C93A2B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity=".5"
                />
              </svg>
            </span>{" "}
            <span className="arrow">→</span> Answered<br />in 7 days.
          </h1>

          <div className="hero-note hand" aria-hidden="true">
            just tell me —<br />is this dumb?
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
            <Image src="/greenfield.svg" alt="a green field with a small sapling" width={160} height={96} />
            <span className="hand" style={{ maxWidth: 320 }}>
              greenfield: {PRODUCT_TAGLINE.idea}
            </span>
          </div>

          <p className="sub">
            You don&apos;t need a finished idea to start. Bring a <strong>half-idea</strong>, <strong>no idea</strong>,{" "}
            or three you can&apos;t pick between. In seven days we mine your background, land on the great idea sitting
            in your own life, and <strong>build an AI-native demo of it together</strong> — hands on your keyboard, I
            copilot. You walk out with the <strong>PRD</strong>, the <strong>working demo</strong>, and the operating
            environment we built together — prompts, docs, tools, skills you keep for every next thing you ship.
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
            note="Reply in ~5 min. Accepted: Stripe link + Day 1 booking. Qualifier for Brownfield Build — you leave with a working demo it takes to a deployed live URL."
          />
        </div>

        <SlotBoard kind="idea" applyHref="/apply?kind=idea" />

        {/* WHO IT'S FOR */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHO THIS IS FOR</p>
            <h2 className="display">
              You don&apos;t need an idea.<br />
              <span className="dim">You need the right one.</span>
            </h2>
            <span className="sec-hand hand">which one is you?</span>
            <div className="points">
              <div className="point">
                <h3>
                  <span className="from">Half-baked</span> <span className="to">→ Real</span>
                </h3>
                <p>
                  You&apos;ve had the shape of an idea for a year. Never executed. Never validated. Maybe
                  it&apos;s the right one, maybe it&apos;s the wrong version of the right one. We land on the
                  real one and write the MVP spec around it.
                </p>
                <span className="hand">&quot;i&apos;ve had a version of this in my head forever&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Blank</span> <span className="to">→ Yours</span>
                </h3>
                <p>
                  You want to build. You don&apos;t have an idea. That&apos;s not a blocker — that&apos;s
                  Day 1. We mine your background, your work, the problems in your own life, and pull out the
                  one that&apos;s actually yours to build.
                </p>
                <span className="hand">&quot;i have no idea what to build&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Three</span> <span className="to">→ The one</span>
                </h3>
                <p>
                  You have three ideas. Every friend picks a different one. You can&apos;t decide. One week
                  of pressure-testing, real people, and a taste-based call — you leave with the one, the PRD,
                  and permission to shelve the other two.
                </p>
                <span className="hand">&quot;i can&apos;t pick&quot;</span>
              </div>
            </div>
          </div>
        </section>

        {/* THE WEEK */}
        <section>
          <div className="wrap">
            <p className="sec-label">// HOW THE SPRINT RUNS</p>
            <h2 className="display">
              Seven days.<br />
              <span className="dim">One honest answer.</span>
            </h2>
            <div className="days">
              <svg className="path-line" viewBox="0 0 22 400" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M11,0 C4,60 18,110 10,170 C3,230 17,290 11,400"
                  fill="none"
                  stroke="#128A4B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1 9"
                  opacity=".7"
                />
              </svg>
              <div className="day">
                <p className="d">DAY 1 — BACKGROUND MINING · 30 MIN CALL</p>
                <h3>We interview you first. The best idea usually lives in your own life.</h3>
                <p>
                  Your background, your work, the problems you&apos;ve actually lived with. We map where the idea
                  came from, pressure-test it against the <strong>four filters</strong>, and scope what the demo
                  will show. By end of Day 1 you have a written hypothesis, a testable riskiest assumption, and a
                  shortlist of five real people to talk to this week.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 2–6 — DEMO BUILD + REAL-PEOPLE CHECKS · 30–60 MIN DAILY</p>
                <h3>Set up the operating environment. Build the demo. Talk to real people.</h3>
                <p>
                  From Day 2 we set up the operating environment together — prompts, docs, tools, skills tailored
                  to your idea and stack — and use it to build an <strong>AI-native demo of your idea, hands on
                  your keyboard</strong>. I copilot; you build. Alongside it: real-people conversations to test
                  the assumption. You keep the operating environment forever, and every day of the sprint moves
                  the idea forward and your capability up.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 6 — PIVOT / PROCEED / STOP</p>
                <h3>The decision. Called out loud. No hedging.</h3>
                <p>
                  We put the week&apos;s evidence + demo on the table and I tell you what I actually think —
                  proceed, pivot to the better idea sitting next to it (the demo becomes the pivot artifact),
                  or stop and get your year back. This is the moment you paid for. The PRD just documents it.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 7 — DELIVERY · 45 MIN</p>
                <h3>PRD in hand. Demo in front of you. Next 3 steps written down.</h3>
                <p>
                  You walk away with the <strong>1–2 page PRD</strong>, the <strong>working AI-native demo</strong>{" "}
                  of your idea (link + local run instructions), the <strong>validation findings</strong> in writing,
                  and the next 3 steps — a Brownfield Build, more validation, or a clean shelving. All yours to keep.
                </p>
                <span className="hand">a &quot;don&apos;t build this&quot; is still a real win.</span>
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
                  This one is a gate, not a coaching call. If the project is illegal, harmful, or built on
                  someone else losing so the customer wins — application declined, same day, no charge. Stated
                  on the form so most people self-select out before applying.
                </p>
              </div>
              <div className="day">
                <p className="d">FILTER 2 — REAL (LENS)</p>
                <h3>Is this a problem people actually have?</h3>
                <p>
                  Not a problem you invented to justify the idea. Real people bump into it repeatedly, complain
                  in threads, duct-tape workarounds. Days 2–5 exist to find that evidence — or not. If we
                  can&apos;t, that&apos;s the finding.
                </p>
              </div>
              <div className="day">
                <p className="d">FILTER 3 — VALUABLE (LENS)</p>
                <h3>Does solving it earn someone&apos;s time?</h3>
                <p>
                  Saves time, saves money, unlocks something they can name. If they&apos;d tell a friend without
                  being asked, it&apos;s valuable. If it just farms attention or is novelty without utility, it
                  fails — and I&apos;ll say so.
                </p>
              </div>
              <div className="day">
                <p className="d">FILTER 4 — CLOSE TO YOU (LENS)</p>
                <h3>Are you the right person to build it?</h3>
                <p>
                  Background, lived experience, or real domain proximity. When closeness is missing, Day 1
                  background-mining often surfaces a better, closer idea sitting right next to the one you
                  applied with. That pivot is a feature, not a failure.
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
                  <path
                    d="M28,66 C20,24 92,6 138,10 C196,15 246,32 242,66 C238,102 180,124 118,120 C58,116 20,100 30,62"
                    fill="none"
                    stroke="#A56A11"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity=".9"
                  />
                </svg>
                <div className="price">
                  <sup>$</sup>199
                </div>
              </div>
              <p className="price-sub">
                One week. The imaginative solution + PRD + working AI-native demo + operating environment.
                Flat price, no upsells inside.
              </p>
              <span className="price-hand hand">a coffee-budget bet on becoming a builder.</span>
              <ValueStack
                items={[
                  { strong: "The imaginative solution", label: "— the shape of an idea worth building, developed with Will's taste + judgment", value: "$1,000 value" },
                  { strong: "Day 1 background-mining call + four-filter pressure-test", label: "(30 min, 1:1 with Will)", value: "$400 value" },
                  { strong: "1–2 page PRD documenting the solution", label: "— the spec to build from, yours to keep", value: "$400 value" },
                  { strong: "Built AI-native demo of the solution", label: "— MVP-grade, running, hands on your keyboard", value: "$600 value" },
                  { strong: "Operating environment we build together", label: "— prompts, docs, tools, skills you keep for life", value: "$400 value" },
                  { strong: "Next-3-steps handoff", label: "— so Day 8 is a real move, not a blank page", value: "$200 value" },
                ]}
                totalValue="$3,000"
                price="$199"
                priceReason="I only take 5 Greenfield slots a week and I want them full."
              />
              <a className="btn" href="/apply?kind=idea">
                Apply for a slot — $199
              </a>
              <p className="pay-note">
                Reply in ~5 min · Accepted applicants get a payment link (
                <span className="ok">Cash App Pay</span> or card) + Day 1 booking · First-accepted, first-locked
              </p>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <Guarantee
          stampTop="SOLUTION + DEMO"
          stampBottom="OR REFUND"
          headline="Imaginative solution + working demo by Day 7. Or your money back."
          body="If you don't walk away with an imaginative solution you believe is worth building, a working AI-native demo of it, and the operating environment we built together by the Day 7 delivery call, I refund the full $199. All of it. A 'don't build this' verdict — with the demo as a pivot artifact — still counts as delivery, but if you don't get the deliverables at all, you don't pay."
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
                Then the sprint worked. You get the PRD of what we tested, the customer evidence in writing, and
                the reasoning — so you can move on clean instead of half-building it for another year at 11pm.
                A written &quot;no&quot; in Week 1 is worth the year you were about to spend finding out on your
                own. That&apos;s a completed sprint, not a failed one.
              </p>
            </details>
            <details>
              <summary>I already know I want to build it. Can I skip to the Brownfield Build?</summary>
              <p className="a">
                Yes — if you&apos;ve already talked to 5+ real potential users and the idea is clear, the{" "}
                <a href="/brownfield">Brownfield Build ($399)</a> is the right door. Greenfield Build is for when
                the &quot;what&quot; isn&apos;t settled yet. If you&apos;re unsure, apply and say so on the form
                — I route you to the right sprint before any money changes hands.
              </p>
            </details>
            <details>
              <summary>Do I need customers or an audience to start?</summary>
              <p className="a">
                No. That&apos;s the point of the guided-outreach mechanic. Day 1 identifies 5 real people who
                fit the problem. You get the outreach templates, the interview scripts, and a coached first
                conversation so you don&apos;t freeze up. No list, no following, no product — just 30–60 minutes
                a day and willingness to send the messages.
              </p>
            </details>
            <details>
              <summary>Why not just skip validation and start building?</summary>
              <p className="a">
                You can. Most people do. Most people spend 3–6 months on the wrong thing, then quietly shelve
                it. $199 and one week buys the answer before the calendar does. If the idea holds up, the
                Brownfield Build is the next door and the PRD becomes its scoping doc — nothing gets thrown away.
              </p>
            </details>
            <details>
              <summary>What happens after Day 7?</summary>
              <p className="a">
                You keep the PRD, the findings, and the next-3-steps doc — forever. If the answer is proceed, the{" "}
                <a href="/brownfield">Brownfield Build ($399)</a> is the natural next door — you walk in with the
                spec written AND the demo already in hand. If it&apos;s a no, you keep the demo as a pivot artifact
                and a clean record of why. On the Day 7 call I&apos;ll also offer the Skool community (<strong>${SKOOL_PRICE_MONTHLY}/mo
                or ${SKOOL_PRICE_ANNUAL}/yr with a {SKOOL_TRIAL_DAYS}-day free trial</strong>) if you want walking-
                pace momentum while you decide what&apos;s next. <a href="/community">See Ship Club →</a>
              </p>
            </details>
            <details>
              <summary>What if my idea trips Filter 1?</summary>
              <p className="a">
                You&apos;ll know before you pay. Filter 1 (not illegal / not harmful / not predatory) is checked
                at application, not at Day 1 — declined applications don&apos;t get a payment link. If something
                trips Filter 1 mid-sprint that we didn&apos;t catch upfront, the sprint ends and the fee is
                refunded in full. No arguments, no fine print.
              </p>
            </details>
          </div>
        </section>

        <div className="signoff">
          <span className="hand">
            stop carrying the idea around.<br />give it one honest week.
            <svg width="220" height="26" viewBox="0 0 220 26" aria-hidden="true">
              <path
                d="M8,16 C50,8 90,22 130,14 C165,8 195,16 212,12"
                fill="none"
                stroke="#128A4B"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity=".85"
              />
            </svg>
          </span>
        </div>

        <CrossLink
          prompt="Already building? Skip the validation —"
          linkText="Brownfield Build ($399) →"
          href="/brownfield"
        />
      </main>
      <Footer />
    </>
  );
}
