import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Guarantee } from "@/components/Guarantee";
import { ValueStack } from "@/components/ValueStack";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "The Build (B) — Your AI system, live in 4 hours | Stuck.builders",
  description:
    "Live 4-hour virtual build. You build your own AI system hands-on. Will unsticks you the second you stall. $3,500 launch price.",
};

const INDUSTRIES = [
  "Real Estate",
  "E-commerce",
  "Trades & Construction",
  "Coaching & Fitness",
  "Marketing Agencies",
  "Finance & Mortgage",
  "Health & Wellness",
  "Beauty & Salons",
  "Hospitality",
  "Professional Services",
];

const AI_MODELS = ["Claude", "GPT-4o", "Gemini", "Copilot"];

const BUSINESS_TOOLS = [
  "Gmail",
  "Xero",
  "HubSpot",
  "Stripe",
  "Slack",
  "Notion",
  "Google Cal",
  "Shopify",
  "QuickBooks",
  "Airtable",
  "Calendly",
  "+ 24 more",
];

const CHAOS_VS_AUTOMATED: [string, string][] = [
  ["8 hours a week following up leads", "Every lead followed up, in your voice, same day"],
  ["2 hours to write one quote", "Quote drafted in 90 seconds, sent while you drink coffee"],
  ["Evenings lost to admin catch-up", "Evenings back — starting the Monday after"],
  ["Paying a VA, an agency, and five tools", "One system doing the same job, ten times faster"],
  ["Leads going cold while you're slammed", "The system replies. You call the ones worth calling"],
  ["You are the bottleneck", "You are free to grow the business"],
];

export default function BuildBPage() {
  return (
    <>
      <div
        style={{
          background: "#14140F",
          color: "#F4F1E8",
          padding: "10px 16px",
          textAlign: "center",
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: 12,
          letterSpacing: ".05em",
          borderBottom: "2px solid #C93A2B",
        }}
      >
        <span style={{ color: "#F4C56A" }}>// LAUNCH PRICE</span>{" "}
        <span style={{ textDecoration: "line-through", opacity: 0.55 }}>$4,995</span>{" "}
        <strong style={{ color: "#F4C56A" }}>$3,500</strong> — next 12 hours · then it goes back up
      </div>

      <TopBar />

      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <h1 className="display">
            <span className="stuck">
              Stuck in your head
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
            <span className="arrow">→</span> Your AI system<br />live in 4 hours.
          </h1>

          <div className="hero-note hand" aria-hidden="true">
            just tell me —<br />where do I<br />even start?
          </div>

          <p className="sub">
            You have the vision, the content, the tools. You do <strong>not</strong> have a system that runs
            without you carrying it. One 4-hour live virtual session, <strong>1:1 with Will</strong> —
            <strong> you</strong> build the AI operating system for your world, hands on your keyboard, and I&apos;m
            right there the whole time to unstick you the second you stall. Not done-for-you.{" "}
            <strong>Done-by-you.</strong>
          </p>

          <p className="hand" style={{ marginTop: 10, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            &quot;i have every AI subscription and still don&apos;t know what to build.&quot; ·{" "}
            &quot;the tabs are open. the system isn&apos;t.&quot; ·{" "}
            &quot;i keep starting and never finishing.&quot;
          </p>

          <div className="hero-cta">
            <a className="btn" href="/apply?kind=build&variant=build-b">
              Apply for a seat — $3,500 →
            </a>
            <span className="btn-note">
              was $4,995 · launch price for the next 12 hours · apply → AI onboarding call → Will closes →
              Square / Cash App link
            </span>
          </div>
        </div>

        {/* INDUSTRY CHIPS */}
        <section style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="sec-label">// BUILT FOR EVERY BUSINESS</p>
            <div className="chips">
              {INDUSTRIES.map((i) => (
                <span className="chip" key={i}>
                  {i}
                </span>
              ))}
            </div>
            <p className="hand" style={{ marginTop: 24, fontSize: 24, display: "inline-block", transform: "rotate(-1deg)" }}>
              real tools · real businesses · built in one session
            </p>
          </div>
        </section>

        {/* SEATS BOARD */}
        <section className="board">
          <div className="wrap">
            <div className="board-title">
              <span className="hand">this week · 1 seat a day · Mon–Fri</span>
            </div>
            <div className="board-frame">
              <span className="tape tl" />
              <span className="tape tr" />
              <div className="board-head">
                <span>// THIS WEEK&apos;S SEATS</span>
                <span>
                  <span className="live">● live</span> — booking today
                </span>
              </div>
              <div className="week">
                <div className="week-label">
                  <span className="week-name">
                    THIS WEEK <span className="dim">— one 4-hour build per day, 1:1</span>
                  </span>
                  <span className="week-tag tag-open">2 OPEN · 3 FILLED</span>
                </div>
                <div className="slots">
                  <div className="slot slot-full">
                    <span className="n">MON</span>
                    <span className="sticker">FILLED</span>
                  </div>
                  <div className="slot slot-full">
                    <span className="n">TUE</span>
                    <span className="sticker">FILLED</span>
                  </div>
                  <div className="slot slot-full">
                    <span className="n">WED</span>
                    <span className="sticker">FILLED</span>
                  </div>
                  <a className="slot slot-open" href="/apply?kind=build&variant=build-b">
                    <span className="n">THU</span>
                    <span className="state">OPEN →</span>
                  </a>
                  <a className="slot slot-open" href="/apply?kind=build&variant=build-b">
                    <span className="n">FRI</span>
                    <span className="state">OPEN →</span>
                  </a>
                </div>
              </div>
              <div className="board-foot">
                <span>launch price holds while seats are open</span>
                <span className="ok">first-come · first-locked</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHO THIS IS FOR</p>
            <h2 className="display">
              You don&apos;t need to be technical.<br />
              <span className="dim">You need to get unstuck.</span>
            </h2>
            <span className="sec-hand hand">which one sounds like you?</span>
            <div className="points">
              <div className="point">
                <h3>
                  <span className="from">In your head</span> <span className="to">→ In a system</span>
                </h3>
                <p>
                  Knowledge, media, decisions, follow-ups — all of it depends on you remembering. We get it
                  out of your head and into a system that holds it for you.
                </p>
                <span className="hand">&quot;everything runs through me and i&apos;m the bottleneck&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Tools</span> <span className="to">→ System</span>
                </h3>
                <p>
                  You&apos;ve got the AI, the apps, the subscriptions — and none of them talk to each other.
                  We turn scattered tools into one operating system that actually works.
                </p>
                <span className="hand">&quot;i have all the AI and still don&apos;t know what to build&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Start &amp; stall</span> <span className="to">→ Keep building</span>
                </h3>
                <p>
                  You&apos;ve tried. You hit a wall and it sits for weeks. In this session you don&apos;t stall
                  — the second you&apos;re stuck, Will unsticks you and you keep going.
                </p>
                <span className="hand">&quot;i keep starting and never finishing&quot;</span>
              </div>
            </div>
          </div>
        </section>

        {/* MANUAL VS AUTOMATED */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHAT CHANGES</p>
            <h2 className="display">
              From carrying it around<br />
              <span className="dim">to one running system.</span>
            </h2>
            <span className="sec-hand hand">what your week actually looks like — before and after</span>
            <div className="vs-grid">
              <div className="vs-col vs-chaos">
                <div className="vs-head">Manual · chaos</div>
                {CHAOS_VS_AUTOMATED.map(([left]) => (
                  <div className="vs-row" key={left}>
                    <span className="vs-x">✕</span>
                    <span>{left}</span>
                  </div>
                ))}
              </div>
              <div className="vs-col vs-auto">
                <div className="vs-head">AI · automated</div>
                {CHAOS_VS_AUTOMATED.map(([, right], i) => (
                  <div className="vs-row" key={i}>
                    <span className="vs-check">✓</span>
                    <span>{right}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="hand" style={{ display: "block", marginTop: 24, textAlign: "center", fontSize: 24, transform: "rotate(-1deg)" }}>
              you build it. so tomorrow it&apos;s still yours.
            </p>
          </div>
        </section>

        {/* HOW THE BUILD RUNS — 4 HOURS */}
        <section>
          <div className="wrap">
            <p className="sec-label">// HOW THE BUILD RUNS</p>
            <h2 className="display">
              Four hours.<br />
              <span className="dim">Hands on your keyboard.</span>
            </h2>
            <span className="sec-hand hand">just you and Will. one 4-hour build. locked in.</span>
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
                <p className="d">HOUR 1 · MAP + UNSTICK</p>
                <h3>We find the real thing to build.</h3>
                <p>
                  We mine what you&apos;re already working on, name the one system that unlocks the most,
                  and scope what you&apos;ll walk out running. <strong>The fog lifts here.</strong>
                </p>
                <span className="hand">&quot;oh — that&apos;s the thing i&apos;ve been avoiding&quot;</span>
              </div>
              <div className="day">
                <p className="d">HOUR 2 · SET UP YOUR ENVIRONMENT</p>
                <h3>You stand up the operating environment you&apos;ll use forever.</h3>
                <p>
                  Together we set up the prompts, docs, tools, and skills tailored to you and your stack.
                  <strong> Yours to keep</strong> — the environment you build everything in from now on.
                </p>
              </div>
              <div className="day">
                <p className="d">HOUR 3 · YOU BUILD</p>
                <h3>You build your system. Hands on your keyboard.</h3>
                <p>
                  Not watching a demo. Building the AI-native version of your world — file architecture,
                  knowledge base, workflows, whatever it needs. Will copilots the whole four hours.
                </p>
              </div>
              <div className="day">
                <p className="d">HOUR 4 · IT RUNS</p>
                <h3>It works in front of you. You know what tomorrow is.</h3>
                <p>
                  We get the system running live. Then we write your <strong>next 3 moves</strong> so
                  tomorrow is a real step, not a blank page. You leave with a system, not a to-do list.
                </p>
                <span className="hand">the whole point: you don&apos;t stay stuck.</span>
              </div>
            </div>
          </div>
        </section>

        {/* MODELS + TOOLS GRIDS */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHAT YOU CONNECT</p>
            <h2 className="display">
              Every model you already pay for.<br />
              <span className="dim">Every tool your business runs on.</span>
            </h2>
            <span className="sec-hand hand">stop paying five subscriptions to do one job</span>

            <div style={{ marginTop: 24 }}>
              <div className="grid-label">AI MODELS · one command layer</div>
              <div className="chips chips-models">
                {AI_MODELS.map((m) => (
                  <span className="chip chip-model" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <div className="grid-label">CONNECTED TO YOUR BUSINESS TOOLS</div>
              <div className="chips">
                {BUSINESS_TOOLS.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICE / CLAIM */}
        <section id="claim">
          <div className="wrap">
            <p className="sec-label">// APPLY FOR A SEAT</p>
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
                  <sup>$</sup>3,500
                </div>
              </div>
              <p className="price-sub">
                <span style={{ textDecoration: "line-through", opacity: 0.55 }}>Regular $4,995</span> —
                launch price for the next 12 hours.
              </p>
              <span className="price-hand hand">
                flat price. no upsells inside the session. no &quot;let&apos;s hop on a quick call.&quot;
              </span>
              <ValueStack
                items={[
                  {
                    strong: "Live 4-hour build intensive led by Will",
                    label: "— just you and Will, 4 hours, hands on your keyboard. Comparable 1:1 time runs $1,500/hr.",
                    value: "$6,000 value",
                  },
                  {
                    strong: "Prebuilt AI skill library — preloaded on your machine",
                    label: "— 120+ ready-to-run skills we've distilled from real builds. Yours forever.",
                    value: "$3,000 value",
                  },
                  {
                    strong: "Multi-model operating environment",
                    label: "— Claude + GPT + Gemini wired together with your prompts, docs, tools. Yours to keep.",
                    value: "$2,500 value",
                  },
                  {
                    strong: "Your working AI system — built by you, running by Hour 4",
                    label: "— not a demo. Real system doing real work in your business today.",
                    value: "$5,000 value",
                  },
                  {
                    strong: "The map — riskiest assumption + build order",
                    label: "— the one artefact that makes every future build 10× faster.",
                    value: "$1,500 value",
                  },
                  {
                    strong: "Next-3-steps handoff written on the day",
                    label: "— Monday morning is a real move, not a blank page.",
                    value: "$700 value",
                  },
                  {
                    strong: "30 days of async support after the build",
                    label: "— email Will when you hit a wall. Reply within 24 hrs.",
                    value: "$2,000 value",
                  },
                  {
                    strong: "Graduate access to the private $499 Ship Club",
                    label: "— where builds keep compounding. Reserved for people who've shipped one.",
                    value: "$499 value",
                  },
                ]}
                totalValue="$21,199"
                price="$3,500"
                priceReason="one flat launch price · 6.05× the price in value · graduates unlock the private $499 Ship Club after"
              />
              <a className="btn" href="/apply?kind=build&variant=build-b">
                Apply for a seat — $3,500 →
              </a>
              <p className="pay-note">
                <strong style={{ color: "var(--white)" }}>How it works:</strong> apply →{" "}
                <span className="ok">my AI does the onboarding call</span> to qualify + scope your build →
                Will jumps on to close → I send a Square or Cash App link →{" "}
                <span className="ok">seat locked</span> · first-come, first-locked · launch price holds for
                the next 12 hours
              </p>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <Guarantee
          stampTop="UNSTUCK"
          stampBottom="OR REFUND"
          headline="You leave with your system running. Or you don't pay."
          body="If you don't walk out of the 4 hours with a working AI system you built, your operating environment to keep, and your next 3 moves in writing — I refund the full $3,500. All of it."
          handNote="the whole point is that you leave unstuck. if you don't, that's on me."
        />

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <p className="sec-label">// QUESTIONS</p>
            <h2 className="display">
              Before you <span className="dim">apply.</span>
            </h2>
            <details>
              <summary>I&apos;m not technical. Can I actually build this?</summary>
              <p className="a">
                Yes — that&apos;s the whole design. You drive; Will unsticks. The environment we set up in
                Hour 2 does the heavy lifting. People who&apos;ve never built anything walk out with a
                running system.
              </p>
            </details>
            <details>
              <summary>Is this a group session?</summary>
              <p className="a">
                No. It&apos;s 1:1 — just you and Will for the full 4 hours. One seat a day, Monday to
                Friday. That&apos;s the whole cap. When your day is booked, that day is gone until next
                week.
              </p>
            </details>
            <details>
              <summary>What if I don&apos;t have a clear idea or system yet?</summary>
              <p className="a">
                That&apos;s Hour 1. We mine what you&apos;re already working on and land on the one system
                worth building. You don&apos;t need a finished idea to start — you need to start.
              </p>
            </details>
            <details>
              <summary>What do I actually keep afterward?</summary>
              <p className="a">
                Everything: your operating environment (prompts, docs, tools, skills), the working system
                you built, your map, and your next 3 steps. You built it, so you can run and grow it.
              </p>
            </details>
            <details>
              <summary>Why is it $3,500?</summary>
              <p className="a">
                That&apos;s the launch price for the next 12 hours only. After that it returns to $4,995.
                Flat price, no upsells inside the session.
              </p>
            </details>
            <details>
              <summary>What happens after the 4 hours?</summary>
              <p className="a">
                You leave with a system and a clear next move. Graduates unlock the private{" "}
                <strong>$499 Ship Club</strong> — the room where builds keep compounding.{" "}
                <a href="https://skool.com/stucked2shipped">See Ship Club →</a>
              </p>
            </details>
          </div>
        </section>

        <div className="signoff">
          <span className="hand">
            stop carrying it around.<br />give it four honest hours.
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
          prompt="Graduates get the private Ship Club —"
          linkText="$499 · builds compound here →"
          href="https://skool.com/stucked2shipped"
        />
      </main>
      <Footer />

      <style>{`
        .chips {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        .chip {
          font-family: var(--font-mono), 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 600;
          color: var(--gray);
          border: 1px solid var(--line);
          background: var(--panel);
          padding: 7px 13px;
          border-radius: 999px;
          letter-spacing: .02em;
          box-shadow: 1px 1px 0 rgba(30, 24, 10, .05);
        }
        .chip:nth-child(3n) { transform: rotate(-1deg); }
        .chip:nth-child(3n+1) { transform: rotate(1deg); }
        .chip-model {
          background: var(--green-dim);
          color: var(--green-ink);
          border-color: rgba(18, 138, 75, 0.35);
        }
        .grid-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: .12em;
          color: var(--chalk);
          text-align: center;
          margin-bottom: 6px;
        }
        .vs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }
        @media (max-width: 700px) { .vs-grid { grid-template-columns: 1fr; } }
        .vs-col {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 22px 22px 18px;
          box-shadow: var(--shadow-card);
        }
        .vs-chaos { transform: rotate(-.6deg); }
        .vs-auto { transform: rotate(.6deg); border-color: rgba(18, 138, 75, 0.35); }
        .vs-head {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          letter-spacing: .12em;
          color: var(--chalk);
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px dashed var(--line);
          text-transform: uppercase;
        }
        .vs-auto .vs-head { color: var(--green-ink); }
        .vs-row {
          display: flex;
          gap: 12px;
          font-size: 14px;
          color: var(--gray);
          padding: 8px 0;
          line-height: 1.45;
        }
        .vs-x, .vs-check {
          font-family: var(--font-hand), 'Caveat', cursive;
          font-weight: 700;
          font-size: 22px;
          line-height: 1;
          flex: 0 0 auto;
          width: 20px;
        }
        .vs-x { color: var(--red); }
        .vs-check { color: var(--green); }
      `}</style>
    </>
  );
}
