import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Guarantee } from "@/components/Guarantee";
import { ValueStack } from "@/components/ValueStack";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "The Build (Live) — In-person, one day, your AI system live in the room | Stuck.builders",
  description:
    "Fri Sep 11, 2026 — one full day, in-person at Charleston Digital's Bridgeview Room, Charleston SC. First 10 launch seats at $1,995 — then $5,995.",
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

const HOURS: { time: string; kind: string; h3: string; p: string; tick: string; isBreak?: boolean }[] = [
  {
    time: "9 AM",
    kind: "arrive",
    h3: "You arrive.",
    p: "Laptop + your business. That's all you bring. Coffee's on, room's set up, we start on time.",
    tick: "// laptop + business on the table",
  },
  {
    time: "10 AM",
    kind: "install",
    h3: "Claude Code installed.",
    p: "Set up on your laptop, hands-on. The environment, the prebuilt skill library, the multi-model core — all live on your machine, tailored to you.",
    tick: "// environment live on your machine",
  },
  {
    time: "11 AM",
    kind: "connect",
    h3: "Your tools connect.",
    p: "Gmail, Xero, Shopify, CRM — wired in so your AI can actually see and act on your business.",
    tick: "// integrations wired",
  },
  {
    time: "12 PM",
    kind: "lunch",
    h3: "Lunch.",
    p: "Catered Mediterranean pita bar — chicken, tzatziki, hummus, feta, veggies, warm pita. Sit down, eat, talk shop.",
    tick: "// break — 1 hour",
    isBreak: true,
  },
  {
    time: "1 PM",
    kind: "build",
    h3: "Your system, built.",
    p: "Tailored to your business. Hands on your keyboard, me next to you — building the AI-native version of your world. Not a demo.",
    tick: "// system live in front of you",
  },
  {
    time: "3 PM",
    kind: "off you go",
    h3: "Off you go to scale.",
    p: "Built, and yours to run. Your system live. Environment yours. Next 3 moves in writing. You know exactly what tomorrow looks like.",
    tick: "// systems nominal ✓",
  },
];

export default function BuildLivePage() {
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
        <span style={{ color: "#F4C56A" }}>// LAUNCH</span> — first{" "}
        <strong style={{ color: "#F4C56A" }}>10 seats at $1,995</strong>{" "}
        <span style={{ opacity: 0.75 }}>(regular $5,995)</span> · <strong style={{ color: "#F4C56A" }}>Fri Sep 11, 2026</strong> · Charleston SC
      </div>

      <TopBar />

      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <p className="eyebrow">
            // THE BUILD — in-person · one full day ·{" "}
            <span className="ok">Fri Sep 11, 2026 · Bridgeview Room, Charleston SC · first 10 launch seats</span>
          </p>
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
            <span className="arrow">→</span> Your AI system<br />built in the room.
          </h1>

          <div className="hero-note hand" aria-hidden="true">
            come build it —<br />in person,<br />next to me.
          </div>

          <p className="sub">
            One full day. You bring your laptop and your business.{" "}
            <strong>I bring the room, the prebuilt library, and 8 hours of my attention.</strong> By 3pm
            your AI system is live on your laptop, your tools are connected, your automations are firing,
            and you know exactly what Monday looks like. Not done-for-you. <strong>Done-by-you</strong> — I
            just make sure you never sit stuck.
          </p>

          <p className="hand" style={{ marginTop: 10, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            &quot;i want to be in the room, not on a zoom.&quot; ·{" "}
            &quot;get me out of my head for a day.&quot; ·{" "}
            &quot;i learn faster with someone next to me.&quot;
          </p>

          <div className="hero-cta">
            <a className="btn" href="/apply?kind=build&variant=build-live">
              Apply for a launch seat — $1,995 →
            </a>
            <span className="btn-note">
              regular $5,995 · first 10 apply-in-early get the launch price · apply → AI onboarding call →
              Will closes → Square / Cash App link
            </span>
          </div>
        </div>

        {/* VENUE — BRIDGEVIEW CONFERENCE ROOM */}
        <section style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="wrap">
            <div className="venue-frame">
              <span className="tape tl" />
              <span className="tape tr" />
              <div className="venue-visual">
                <img
                  src="/venue/bridgeview-main.jpg"
                  alt="Bridgeview Conference Room — top floor of Charleston Tech Center, view of Ravenel Bridge and Charleston Harbor"
                  loading="lazy"
                />
              </div>
              <div className="venue-body">
                <p className="sec-label" style={{ marginBottom: 6 }}>// THE LOCATION</p>
                <h3 className="display" style={{ fontSize: 30, marginBottom: 8 }}>
                  Bridgeview.<br />
                  <span className="dim">Private rooftop.</span>
                </h3>
                <p style={{ color: "var(--gray)", fontSize: 14, marginBottom: 12 }}>
                  Extra-large monitor so we can pair on-screen. Gigabit wi-fi so the install works first
                  try. A <strong style={{ color: "var(--white)" }}>private rooftop putting green</strong>{" "}
                  so your 1-hour lunch is a real break — not a laptop-in-a-cafe.
                </p>
                <ul className="venue-list">
                  <li>◆ Private rooftop · putting green</li>
                  <li>◆ Big A/V monitor · we pair on-screen</li>
                  <li>◆ 1-hour catered Mediterranean pita bar lunch</li>
                  <li>◆ Gigabit wi-fi · install works first try</li>
                </ul>
                <span className="hand" style={{ marginTop: 12, display: "inline-block", transform: "rotate(-1deg)", fontSize: 20 }}>
                  lunch on the roof · hole-in-one is on you.
                </span>
              </div>
            </div>
            <div className="venue-gallery">
              <div className="venue-thumb">
                <img src="/venue/bridgeview-av.jpg" alt="Bridgeview Conference Room — A/V teleconferencing equipped" loading="lazy" />
                <span className="venue-caption">A/V + teleconferencing equipped</span>
              </div>
              <div className="venue-thumb">
                <img src="/venue/bridgeview-rooftop.jpg" alt="Attached rooftop putting green with Ravenel Bridge view" loading="lazy" />
                <span className="venue-caption">Attached rooftop putting green</span>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRY CHIPS */}
        <section style={{ paddingTop: 40, paddingBottom: 40 }}>
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
              real tools · real businesses · built in one day
            </p>
          </div>
        </section>

        {/* SEATS BOARD — 10 LAUNCH SEATS */}
        <section className="board">
          <div className="wrap">
            <div className="board-title">
              <span className="hand">first 10 launch seats · then $5,995</span>
            </div>
            <div className="board-frame">
              <span className="tape tl" />
              <span className="tape tr" />
              <div className="board-head">
                <span>// LAUNCH SEATS</span>
                <span>
                  <span className="live">● live</span> — booking now for Fri Sep 11, 2026
                </span>
              </div>
              <div className="week">
                <div className="week-label">
                  <span className="week-name">
                    FRI SEP 11, 2026 <span className="dim">— Bridgeview Room, Charleston SC</span>
                  </span>
                  <span className="week-tag tag-open">10 SEATS AT $1,995</span>
                </div>
                <div className="slots slots-10">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <a className="slot slot-open" href="/apply?kind=build&variant=build-live" key={i}>
                      <span className="n">SEAT {String(i + 1).padStart(2, "0")}</span>
                      <span className="state">OPEN →</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="board-foot">
                <span>launch price holds until all 10 seats commit</span>
                <span className="ok">then it goes to $5,995</span>
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
                  You&apos;ve tried. You hit a wall and it sits for weeks. In the room you don&apos;t stall
                  — the second you&apos;re stuck, I&apos;m right there to unstick you.
                </p>
                <span className="hand">&quot;i keep starting and never finishing&quot;</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW THE DAY RUNS */}
        <section>
          <div className="wrap">
            <p className="sec-label">// HOW THE DAY RUNS</p>
            <h2 className="display">
              9 to 3.<br />
              <span className="dim">Hour by hour.</span>
            </h2>
            <span className="sec-hand hand">3 hours build · 1 hour lunch · a day at the workshop</span>
            <p style={{ color: "var(--gray)", fontSize: 15, maxWidth: 620, marginTop: 4, marginBottom: 12 }}>
              You arrive with your laptop and your business. We install the tools, build alongside you
              hands-on, and walk through everything together until it runs.
            </p>
            <div className="days">
              <svg className="path-line" viewBox="0 0 22 600" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M11,0 C4,60 18,140 10,220 C3,320 17,420 11,600"
                  fill="none"
                  stroke="#128A4B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1 9"
                  opacity=".7"
                />
              </svg>
              {HOURS.map((h) => (
                <div className={h.isBreak ? "day day-break" : "day"} key={h.time}>
                  <p className="d">
                    {h.time} · {h.kind.toUpperCase()}
                  </p>
                  <h3>{h.h3}</h3>
                  <p>{h.p}</p>
                  <span className="hour-tick">{h.tick}</span>
                </div>
              ))}
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
              <div className="chips">
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

        {/* PRICE / APPLY */}
        <section id="apply">
          <div className="wrap">
            <p className="sec-label">// APPLY FOR A LAUNCH SEAT</p>
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
                  <sup>$</sup>1,995
                </div>
              </div>
              <p className="price-sub">
                <span style={{ textDecoration: "line-through", opacity: 0.55 }}>Regular $5,995</span> —
                launch price for the first 10 seats. Then it goes up.
              </p>
              <span className="price-hand hand">
                one flat launch price. no upsells, no &quot;let&apos;s hop on a quick call.&quot;
              </span>
              <ValueStack
                items={[
                  {
                    strong: "Full-day in-person 1:1 build with Will",
                    label: "— 8 hours of my undivided attention, in the room, hands on your keyboard.",
                    value: "$10,000 value",
                  },
                  {
                    strong: "Prebuilt AI skill library preloaded on your machine",
                    label: "— 120+ ready-to-run skills we've distilled from real builds. Yours forever.",
                    value: "$4,000 value",
                  },
                  {
                    strong: "Multi-model operating environment",
                    label: "— Claude + GPT + Gemini wired together with your prompts, docs, tools. Yours to keep.",
                    value: "$3,500 value",
                  },
                  {
                    strong: "Your working AI system, live by end of day",
                    label: "— not a demo. Real system doing real work in your business by 3pm.",
                    value: "$10,000 value",
                  },
                  {
                    strong: "The map — riskiest assumption + build order",
                    label: "— the one artefact that makes every future build 10× faster.",
                    value: "$2,500 value",
                  },
                  {
                    strong: "Next-3-steps handoff written on the day",
                    label: "— Monday morning is a real move, not a blank page.",
                    value: "$1,000 value",
                  },
                  {
                    strong: "30 days of async support after the day",
                    label: "— email Will when you hit a wall. Reply within 24 hrs.",
                    value: "$3,000 value",
                  },
                  {
                    strong: "Post-build 1-hour 1:1 follow-up call",
                    label: "— two weeks after, look at what shipped, dial in what's next.",
                    value: "$1,500 value",
                  },
                  {
                    strong: "Bridgeview room + private rooftop + catered pita bar lunch",
                    label: "— top-floor room, Ravenel Bridge view, private putting green, Mediterranean pita bar. All handled.",
                    value: "$500 value",
                  },
                  {
                    strong: "Graduate access to the private $499 Ship Club",
                    label: "— where builds keep compounding. Reserved for people who've shipped one.",
                    value: "$499 value",
                  },
                ]}
                totalValue="$36,499"
                price="$1,995"
                priceReason="launch price for the first 10 seats · 18.3× value at launch · 6.1× at regular ($5,995) · graduates unlock the private $499 Ship Club after"
              />
              <a className="btn" href="/apply?kind=build&variant=build-live">
                Apply for a launch seat — $1,995 →
              </a>
              <p className="pay-note">
                <strong style={{ color: "var(--white)" }}>How it works:</strong> apply →{" "}
                <span className="ok">my AI does the onboarding call</span> to qualify + scope your build →
                Will jumps on to close → I send a Square or Cash App link →{" "}
                <span className="ok">seat locked</span> · first 10 in get the launch price · then $5,995 ·
                venue: Bridgeview Conference Room · Charleston Digital · Charleston SC
              </p>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <Guarantee
          stampTop="UNSTUCK"
          stampBottom="OR REFUND"
          headline="You leave with your system running. Or you don't pay."
          body="If you don't walk out of the day with a working AI system you built, your operating environment to keep, and your next 3 moves in writing — I refund the full launch price. All of it."
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
              <summary>Where is it and when?</summary>
              <p className="a">
                <strong>Bridgeview Conference Room</strong> at{" "}
                <strong>Charleston Digital</strong> — top floor of the Charleston Tech Center, downtown
                Charleston SC. Floor-to-ceiling glass view of the Ravenel Bridge and Charleston Harbor,
                attached rooftop terrace and putting green, prep kitchen, extra-large A/V monitor,
                livestream + recording equipped. Catered Mediterranean pita bar for lunch.{" "}
                <strong>Fri Sep 11, 2026, 9am–3pm.</strong> Apply early — only 10 launch seats before it
                goes to $5,995.
              </p>
            </details>
            <details>
              <summary>Why is it $1,995?</summary>
              <p className="a">
                Because you&apos;re a launch seat. First 10 apply-and-close-in get the launch price to help
                me lock a venue and prove the room. After that, it&apos;s $5,995 flat. Same day. Same build.
              </p>
            </details>
            <details>
              <summary>I&apos;m not technical. Can I actually build this?</summary>
              <p className="a">
                Yes — that&apos;s the whole design. You drive; I unstick. The environment we set up in
                Hour 2 does the heavy lifting. People who&apos;ve never built anything walk out with a
                running system.
              </p>
            </details>
            <details>
              <summary>Is this a group session?</summary>
              <p className="a">
                No. It&apos;s 1:1 — just you and Will for the full day. One seat means one build, one
                laptop, one system. That&apos;s the cap.
              </p>
            </details>
            <details>
              <summary>What do I keep afterward?</summary>
              <p className="a">
                Everything: your operating environment (prompts, docs, tools, 120+ prebuilt skills), the
                working system you built, your map, and your next 3 steps. You built it, so you can run
                and grow it.
              </p>
            </details>
            <details>
              <summary>What happens after the day?</summary>
              <p className="a">
                You leave with a system and a clear next move. 30 days of async support to keep you moving.
                A 1-hour follow-up 1:1 two weeks later. Graduates unlock the private{" "}
                <strong>$499 Ship Club</strong> — where builds keep compounding.{" "}
                <a href="https://www.skool.com/stuck2shipped/about">See Ship Club →</a>
              </p>
            </details>
          </div>
        </section>

        <div className="signoff">
          <span className="hand">
            get in the room.<br />leave with it running.
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
          prompt="Can&apos;t make an in-person day?"
          linkText="try the virtual build — 4hrs, 1:1, $995 launch →"
          href="/build-b"
        />

        <CrossLink
          prompt="Graduates get the private Ship Club —"
          linkText="$499 · builds compound here →"
          href="https://www.skool.com/stuck2shipped/about"
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
        .hour-tick {
          display: inline-block;
          margin-top: 10px;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--green);
          letter-spacing: .04em;
        }
        .day-break {
          opacity: .85;
        }
        .day-break .d { color: var(--chalk) !important; }
        .day-break h3 { color: var(--chalk); }
        .day-break .hour-tick { color: var(--chalk); }
        .venue-frame {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 32px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 24px;
          box-shadow: var(--shadow-card-lg);
          position: relative;
          transform: rotate(-.3deg);
        }
        @media (max-width: 760px) {
          .venue-frame { grid-template-columns: 1fr; }
        }
        .venue-visual {
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--bg);
          min-height: 240px;
        }
        .venue-visual img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .venue-body { display: flex; flex-direction: column; justify-content: center; }
        .venue-list {
          list-style: none;
          padding: 0;
          margin: 6px 0 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 13.5px;
          color: var(--gray);
        }
        .venue-list li::before { content: ""; }
        .venue-list li {
          padding-left: 0;
          font-family: var(--font-mono), 'JetBrains Mono', monospace;
          letter-spacing: .02em;
        }
        .venue-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 18px;
        }
        @media (max-width: 700px) { .venue-gallery { grid-template-columns: 1fr; } }
        .venue-thumb {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          position: relative;
        }
        .venue-thumb:nth-child(1) { transform: rotate(-.5deg); }
        .venue-thumb:nth-child(2) { transform: rotate(.5deg); }
        .venue-thumb img { display: block; width: 100%; height: 220px; object-fit: cover; }
        .venue-caption {
          display: block;
          padding: 10px 14px;
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--gray);
          letter-spacing: .02em;
          border-top: 1px dashed var(--line);
        }
        .slots-10 {
          grid-template-columns: repeat(5, 1fr) !important;
        }
        @media (max-width: 700px) {
          .slots-10 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
