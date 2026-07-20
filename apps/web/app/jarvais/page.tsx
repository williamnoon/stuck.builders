import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Guarantee } from "@/components/Guarantee";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "jarvais.builders — your AI HQ, built with you in one live day",
  description:
    "Multi-model AI command center for your businesses, your team, your world. Built with you in one live virtual day. Ongoing architect partnership after.",
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

const AI_MODELS = ["Claude", "OpenAI", "Gemini", "Copilot"];

const BUSINESS_TOOLS = [
  "Gmail",
  "Xero",
  "HubSpot",
  "Stripe",
  "Slack",
  "Notion",
  "Google Cal",
  "Shopify",
  "Airtable",
  "Calendly",
  "+ 24 more",
];

const HERO_CHIPS = ["Claude", "OpenAI", "Gemini", "Hermes", "n8n", "Make", "APIs"];

const HOURS: { time: string; kind: string; h3: string; p: string; tick: string }[] = [
  {
    time: "9:00",
    kind: "briefing",
    h3: "Mission briefing.",
    p: "We map your businesses, your team, and the decisions eating your time — and lock exactly what your HQ should run.",
    tick: "// scope + architecture locked",
  },
  {
    time: "10:00",
    kind: "install",
    h3: "Your AI HQ goes live.",
    p: "The command center comes online with Claude, OpenAI & Gemini working together as one system — not three tabs.",
    tick: "// multi-model core online",
  },
  {
    time: "11:00",
    kind: "connect",
    h3: "Your tools connect.",
    p: "Gmail, calendar, CRM, Shopify, Xero, your drive — wired in through APIs so your AI can actually see and act on your business.",
    tick: "// data + tools integrated",
  },
  {
    time: "1:00",
    kind: "automate",
    h3: "Your first agents go live.",
    p: "Workflow automations in n8n / Make — triaging, drafting, routing, reporting. The repetitive work starts handling itself.",
    tick: "// automations deployed",
  },
  {
    time: "2:00",
    kind: "command",
    h3: "You & your team take command.",
    p: "We train you to direct it in plain language — how to ask, delegate, and add to it — so it's yours, not a mystery.",
    tick: "// operators onboarded",
  },
  {
    time: "3:00",
    kind: "online",
    h3: "JARVIS is online.",
    p: "Live, connected, and running. Off you go to scale — built, and yours to grow.",
    tick: "// systems nominal",
  },
];

const WALKOUT: { title: string; body: string }[] = [
  { title: "Multi-model core", body: "Claude, OpenAI & Gemini working together under one command layer." },
  { title: "Tools integrated", body: "Email, calendar, CRM, commerce & finance connected via API." },
  { title: "Working automations", body: "Live n8n / Make workflows handling the repetitive work today." },
  { title: "Command dashboard", body: "One view of your businesses — status, priorities, what needs you." },
  { title: "Trained team", body: "You and your people able to operate and extend the system." },
  { title: "Documented & yours", body: "Clear docs so nothing lives in one person's head — including mine." },
];

export default function JarvaisPage() {
  return (
    <div data-brand="jarvais">
      <div
        style={{
          background: "#14140F",
          color: "#F4F1E8",
          padding: "10px 16px",
          textAlign: "center",
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: 12,
          letterSpacing: ".05em",
          borderBottom: "2px solid #A56A11",
        }}
      >
        <span style={{ color: "#F4C56A" }}>// jarvais.builders</span>{" "}
        — your AI headquarters, built with you in one live day
      </div>

      {/* Custom topbar for jarvais brand */}
      <header className="topbar">
        <div className="wrap">
          <a className="brand" href="/jarvais" aria-label="jarvais.builders">
            <span className="jarvais-dot" aria-hidden="true" />
            jarvais<span style={{ color: "var(--gray-dim)" }}>.builders</span>
          </a>
          <span className="topstatus">
            <span className="ok">● live</span> · book the build day
          </span>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <p className="eyebrow">
            // THE HQ — live virtual build day · you command, I make sure it comes together
          </p>
          <h1 className="display">
            <span className="stuck">
              Scattered tools
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
            <span className="arrow">→</span> Your own<br />JARVIS.
          </h1>

          <div className="hero-note hand" aria-hidden="true">
            just tell me —<br />where do all<br />these AI&apos;s live?
          </div>

          <p className="sub">
            You&apos;ve got the models, the apps, the subscriptions — and none of them talk to each other.
            In one live virtual day, we wire them into a <strong>single AI headquarters</strong> that runs
            your businesses, your projects, and your team. <strong>You</strong> command it; I make sure it
            actually comes together.
          </p>

          <div className="chips" style={{ marginTop: 22, justifyContent: "center" }}>
            {HERO_CHIPS.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>

          <p className="hand" style={{ marginTop: 18, maxWidth: 560, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            not a black box someone hands you. built together, in plain language,<br />
            so you and your team actually run it — and keep growing it.
          </p>

          <div className="hero-cta">
            <a className="btn" href="#claim">
              Build your HQ →
            </a>
            <a href="#day" className="btn-note" style={{ textDecoration: "underline", color: "var(--gray)" }}>
              see the day, hour by hour ↓
            </a>
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
              multi-model. multi-business. one headquarters.
            </p>
          </div>
        </section>

        {/* MISSION */}
        <section>
          <div className="wrap">
            <p className="sec-label">// THE MISSION</p>
            <h2 className="display">
              You don&apos;t need another app.<br />
              <span className="dim">You need one that thinks with you.</span>
            </h2>
            <span className="sec-hand hand">right now your AI is powerful in pieces and useless as a system</span>
            <div className="mission-quote">
              <p>
                a JARVIS-style headquarters where multiple AI models and automations work together to help
                run my businesses, my projects, and my team — <strong>built once, taught to my team, and
                grown over time.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* HOW THE DAY RUNS */}
        <section id="day">
          <div className="wrap">
            <p className="sec-label">// HOW THE DAY RUNS</p>
            <h2 className="display">
              One live day.<br />
              <span className="dim">Hands on your keyboard.</span>
            </h2>
            <span className="sec-hand hand">you bring your business. we bring the room + the TA team.</span>
            <div className="days">
              <svg className="path-line" viewBox="0 0 22 600" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M11,0 C4,60 18,140 10,220 C3,320 17,420 11,600"
                  fill="none"
                  stroke="#A56A11"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1 9"
                  opacity=".7"
                />
              </svg>
              {HOURS.map((h) => (
                <div className="day" key={h.time}>
                  <p className="d" style={{ color: "var(--chalk)" }}>
                    {h.time} · {h.kind.toUpperCase()}
                  </p>
                  <h3>{h.h3}</h3>
                  <p>{h.p}</p>
                  <span className="hour-tick">{h.tick}</span>
                </div>
              ))}
            </div>
            <div className="ta-note">
              <strong>Why it holds together:</strong> I lead the build live, and a hands-on TA team works
              alongside — so every tool connects, every agent fires, and you finish the day with a
              headquarters that actually runs.
            </div>
          </div>
        </section>

        {/* MODELS + TOOLS GRIDS */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHAT YOU CONNECT</p>
            <h2 className="display">
              One command layer.<br />
              <span className="dim">Many models. All your tools.</span>
            </h2>
            <div style={{ marginTop: 28 }}>
              <div className="grid-label">AI MODELS · under one command layer</div>
              <div className="chips">
                {AI_MODELS.map((m) => (
                  <span className="chip chip-model" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <div className="grid-label">CONNECTED VIA API</div>
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

        {/* WHAT YOU WALK OUT WITH */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHAT YOU WALK OUT WITH</p>
            <h2 className="display">
              By 3 PM,<br />
              <span className="dim">the headquarters is live.</span>
            </h2>
            <span className="sec-hand hand">not a slide deck. a system that runs.</span>
            <div className="walkout-grid">
              {WALKOUT.map((w) => (
                <div className="walkout-item" key={w.title}>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LONG-TERM ARC */}
        <section>
          <div className="wrap">
            <p className="sec-label">// THIS IS A LONG-TERM BUILD</p>
            <h2 className="display">
              The day gets it online.<br />
              <span className="dim">Then we keep building it.</span>
            </h2>
            <span className="sec-hand hand">build day is ignition, not the finish line</span>
            <div className="arc-grid">
              <div className="arc-step">
                <div className="arc-n">DAY ONE</div>
                <h4>HQ online</h4>
                <p>Core, integrations, first agents, and your team trained — all live in a day.</p>
              </div>
              <div className="arc-step">
                <div className="arc-n">ONGOING</div>
                <h4>Your AI architect</h4>
                <p>
                  A monthly partnership: new agents, deeper automations, and continuous training as your
                  world grows.
                </p>
              </div>
              <div className="arc-step">
                <div className="arc-n">THE HORIZON</div>
                <h4>A self-running org</h4>
                <p>
                  Content, lead nurture, operations, executive decision support — a system that scales
                  without you in every loop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLAIM */}
        <section id="claim">
          <div className="wrap">
            <p className="sec-label">// CLAIM YOUR BUILD</p>
            <h2 className="display">
              Two ways<br />
              <span className="dim">to deploy.</span>
            </h2>
            <span className="sec-hand hand">start with the day. continue with the architect.</span>
            <div className="plans">
              <div className="plan plan-feature">
                <div className="plan-k">THE BUILD DAY</div>
                <div className="plan-amt">
                  <sup>$</sup>X,XXX
                </div>
                <ul>
                  <li>One live virtual day, built with you</li>
                  <li>Multi-model AI command center installed</li>
                  <li>Your tools connected via API</li>
                  <li>First automations live in n8n / Make</li>
                  <li>You &amp; your team trained to command it</li>
                  <li>Documentation + 30 days of support</li>
                </ul>
                <a
                  className="btn"
                  href="mailto:will@stuck.builders?subject=jarvais.builders%20%E2%80%94%20build%20day"
                  style={{ marginTop: 20 }}
                >
                  Book the build day →
                </a>
              </div>
              <div className="plan">
                <div className="plan-k">THE ARCHITECT RETAINER</div>
                <div className="plan-amt">
                  <sup>$</sup>X,XXX<span className="plan-per"> / month</span>
                </div>
                <ul>
                  <li>Ongoing build-out of new agents &amp; automations</li>
                  <li>Deeper integrations across your stack</li>
                  <li>Continuous team training</li>
                  <li>Priority support &amp; monthly roadmap</li>
                  <li>Access to the builders community</li>
                </ul>
                <a
                  className="btn"
                  href="mailto:will@stuck.builders?subject=jarvais.builders%20%E2%80%94%20architect%20retainer"
                  style={{ marginTop: 20, background: "var(--chalk)", boxShadow: "4px 4px 0 rgba(140,90,15,.35)" }}
                >
                  Talk about the retainer →
                </a>
              </div>
            </div>
            <p className="hand" style={{ marginTop: 20, textAlign: "center", fontSize: 20, display: "block", transform: "rotate(-.5deg)" }}>
              pricing shown as placeholders — real numbers land once we spec your day.
            </p>
          </div>
        </section>

        {/* GUARANTEE */}
        <Guarantee
          stampTop="ONLINE BY 3"
          stampBottom="OR WE KEEP GOING"
          headline="Your headquarters goes live by the end of the day. Or we don't stop."
          body="If your AI HQ isn't installed, connected, and running by the end of our day together, we keep building at no additional cost until it is."
          handNote="you leave with it running. that's the whole deal."
        />

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <p className="sec-label">// QUESTIONS</p>
            <h2 className="display">
              Before you <span className="dim">build.</span>
            </h2>
            <details>
              <summary>I&apos;m not technical. Can I really run this?</summary>
              <p className="a">
                Yes — that&apos;s the point of building it together in plain language. You direct it by
                talking to it; the TA team makes sure every piece connects. You leave able to operate it,
                not dependent on me to touch it.
              </p>
            </details>
            <details>
              <summary>Which AI models does it use?</summary>
              <p className="a">
                Claude, OpenAI, and Gemini working together under one command layer, plus workflow
                automation in n8n / Make and API connections to your real tools. One headquarters, many
                models.
              </p>
            </details>
            <details>
              <summary>What if my tools are messy or all over the place?</summary>
              <p className="a">
                That&apos;s normal — and it&apos;s Hour 1. We map what you&apos;ve got and connect what
                matters. You don&apos;t need to clean anything up first.
              </p>
            </details>
            <details>
              <summary>What do I actually keep?</summary>
              <p className="a">
                Everything: the command center, the integrations, the automations, and the documentation —
                built with you, and yours to run and grow.
              </p>
            </details>
            <details>
              <summary>What happens after day one?</summary>
              <p className="a">
                You leave with a working HQ. From there, the Architect Retainer keeps building it — new
                agents, deeper automation, and ongoing training as you scale. Graduates also get the
                private <strong>$499 Ship Club</strong>.{" "}
                <a href="https://www.skool.com/stuck2shipped/about">See Ship Club →</a>
              </p>
            </details>
          </div>
        </section>

        <div className="signoff">
          <span className="hand">
            ready to bring JARVIS online?<br />
            <svg width="220" height="26" viewBox="0 0 220 26" aria-hidden="true">
              <path
                d="M8,16 C50,8 90,22 130,14 C165,8 195,16 212,12"
                fill="none"
                stroke="#A56A11"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity=".85"
              />
            </svg>
          </span>
        </div>

        <CrossLink
          prompt="Graduates get the private Ship Club —"
          linkText="$499 · where builds compound →"
          href="https://www.skool.com/stuck2shipped/about"
        />
      </main>
      <Footer />

      <style>{`
        [data-brand="jarvais"] .jarvais-dot {
          width: 16px;
          height: 16px;
          background: var(--chalk);
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(165, 106, 17, .18);
          display: inline-block;
        }
        [data-brand="jarvais"] h1 .arrow { color: var(--chalk); }
        [data-brand="jarvais"] .btn {
          background: var(--chalk);
          box-shadow: 4px 4px 0 rgba(140, 90, 15, .35);
        }
        [data-brand="jarvais"] .btn:hover { background: #8C5A0F; }
        [data-brand="jarvais"] .sec-label { color: var(--chalk); }
        [data-brand="jarvais"] .point .to { color: var(--chalk); }
        [data-brand="jarvais"] .stack-total .value { color: var(--chalk); }
        [data-brand="jarvais"] .day .d { color: var(--chalk); }
        [data-brand="jarvais"] .faq summary::after { color: var(--chalk); }
        [data-brand="jarvais"] a { color: var(--chalk); }

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
          background: rgba(165, 106, 17, .12);
          color: #8C5A0F;
          border-color: rgba(165, 106, 17, .35);
        }
        .grid-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: .12em;
          color: var(--chalk);
          text-align: center;
          margin-bottom: 6px;
        }
        .mission-quote {
          background: var(--panel);
          border: 1px solid var(--line);
          border-left: 4px solid var(--chalk);
          border-radius: 6px;
          padding: 26px 28px;
          margin-top: 24px;
          box-shadow: var(--shadow-card);
          transform: rotate(-.4deg);
        }
        .mission-quote p {
          font-size: 18px;
          line-height: 1.5;
          font-style: italic;
          color: var(--white);
        }
        .hour-tick {
          display: inline-block;
          margin-top: 10px;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--green);
          letter-spacing: .04em;
        }
        .ta-note {
          margin-top: 30px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-left: 4px solid var(--chalk);
          border-radius: 6px;
          padding: 18px 22px;
          font-size: 14px;
          color: var(--gray);
        }
        .ta-note strong { color: var(--white); }
        .walkout-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 28px;
        }
        @media (max-width: 900px) { .walkout-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .walkout-grid { grid-template-columns: 1fr; } }
        .walkout-item {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 22px 20px;
          box-shadow: var(--shadow-card);
        }
        .walkout-item:nth-child(2n) { transform: rotate(.4deg); }
        .walkout-item:nth-child(2n+1) { transform: rotate(-.4deg); }
        .walkout-item h4 {
          font-family: var(--font-display), sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 18px;
          margin-bottom: 6px;
          color: var(--white);
        }
        .walkout-item p { color: var(--gray); font-size: 13.5px; }
        .arc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 26px;
        }
        @media (max-width: 760px) { .arc-grid { grid-template-columns: 1fr; } }
        .arc-step {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 24px 22px;
          box-shadow: var(--shadow-card);
        }
        .arc-step:nth-child(1) { transform: rotate(-1deg); }
        .arc-step:nth-child(2) { transform: rotate(.8deg); }
        .arc-step:nth-child(3) { transform: rotate(-.6deg); }
        .arc-n {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: .12em;
          color: var(--chalk);
          font-weight: 700;
          margin-bottom: 8px;
        }
        .arc-step h4 {
          font-family: var(--font-display), sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 22px;
          margin-bottom: 8px;
        }
        .arc-step p { color: var(--gray); font-size: 13.5px; }
        .plans {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 32px;
        }
        @media (max-width: 760px) { .plans { grid-template-columns: 1fr; } }
        .plan {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 32px 28px;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
        }
        .plan-feature {
          border-color: rgba(165, 106, 17, .45);
          box-shadow: var(--shadow-card-lg);
          transform: rotate(-.4deg);
        }
        .plan:nth-child(2) { transform: rotate(.4deg); }
        .plan-k {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          letter-spacing: .14em;
          color: var(--chalk);
          font-weight: 700;
          margin-bottom: 12px;
        }
        .plan-amt {
          font-family: var(--font-display), sans-serif;
          font-weight: 800;
          font-size: 48px;
          line-height: 1;
          color: var(--white);
          margin-bottom: 18px;
        }
        .plan-amt sup { font-size: .35em; color: var(--gray); vertical-align: super; }
        .plan-per { font-family: var(--font-mono), monospace; font-size: 14px; font-weight: 400; color: var(--gray); letter-spacing: 0; }
        .plan ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1 1 auto;
        }
        .plan li {
          padding-left: 24px;
          position: relative;
          color: var(--gray);
          font-size: 13.5px;
        }
        .plan li::before {
          content: "▸";
          color: var(--chalk);
          position: absolute;
          left: 4px;
          top: 0;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
