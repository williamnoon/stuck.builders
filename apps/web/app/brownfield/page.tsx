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
  title: "Brownfield Build — Your next version deployed at a real URL by Sunday | Stuck to Shipped",
  description:
    "Seven days on your stuck app with a builder who ships with AI every day. Scope locked Day 1 in your own words — one major feature or one major fix. Deployed live by Day 7 or a full refund. $399, 5 Brownfield slots a week, apply first.",
};

type Angle = "main" | "ceiling" | "traction";
type SearchParams = Promise<{ angle?: string }>;

function normalizeAngle(a: string | undefined): Angle {
  if (a === "ceiling" || a === "traction") return a;
  return "main";
}

function Hero({ angle }: { angle: Angle }) {
  if (angle === "ceiling") {
    return (
      <div className="hero wrap">
        <p className="eyebrow">
          // BROWNFIELD BUILD — off the platform ceiling in 7 days ·{" "}
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
          <span className="arrow">→</span> Shipped<br />in 7 days.
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
          <Image src="/brownfield.svg" alt="a brown field with an existing partial structure" width={160} height={96} />
          <span className="hand" style={{ maxWidth: 360 }}>brownfield: {PRODUCT_TAGLINE.build}</span>
        </div>

        <p className="sub">
          You built something real on <strong>Lovable</strong>, <strong>Bolt</strong>, <strong>v0</strong>, or{" "}
          <strong>Replit</strong>. Then auth broke, or the credits hit $200/mo, or the one feature that matters just
          won&apos;t take. Every re-prompt breaks two other things. In one week we either{" "}
          <strong>unblock it inside the platform</strong> or <strong>move the essentials to code you own</strong> —
          Next.js repo in your GitHub, deployed on Vercel, your custom domain, credits meter stopped. Day 1 decides
          which path. Day 7 you demo the live URL.
        </p>

        <ApplyCta
          label="Apply for a slot — $399"
          href="/apply?kind=build"
          note="Reply in ~5 min. Accepted: Stripe link + Day 1 booking. First-accepted, first-locked."
        />
      </div>
    );
  }

  if (angle === "traction") {
    return (
      <div className="hero wrap">
        <p className="eyebrow">
          // BROWNFIELD BUILD — the traction door ·{" "}
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

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
          <Image src="/brownfield.svg" alt="a brown field with an existing partial structure" width={160} height={96} />
          <span className="hand" style={{ maxWidth: 360 }}>brownfield: {PRODUCT_TAGLINE.build}</span>
        </div>

        <p className="sub">
          The app is live. Nobody&apos;s ever used it. Every week you tell yourself you&apos;ll &quot;do
          marketing&quot; and every week the tab closes. The next version isn&apos;t a feature — it&apos;s a{" "}
          <strong>traction step</strong>. Day 1 we lock one traction milestone in your own words (no
          renegotiation). Days 2–6 you run outreach, tune messaging, and put the landing in front of real people
          — 15–30 min a day on the screen with me, your keyboard. Up to <strong>5 unstick calls (10 min)</strong>{" "}
          when you freeze on a DM or a page. Day 7 the milestone is <strong>shipped</strong>: outreach live to
          5–10 real potential users, one angle proven with their language, first conversation logged.
        </p>

        <ApplyCta
          label="Apply for a slot — $399"
          href="/apply?kind=build"
          note="Reply in ~5 min. Accepted: Stripe link + Day 1 booking. First-accepted, first-locked."
        />
      </div>
    );
  }

  return (
    <div className="hero wrap">
      <p className="eyebrow">
        // BROWNFIELD BUILD — 7 days on YOUR repo ·{" "}
        <span className="ok">5 Brownfield slots a week, next Monday start</span>
      </p>
      <h1 className="display">
        <span className="stuck">
          Stuck
          <svg className="scratch" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
            <path d="M4,22 C60,14 90,30 150,20 C210,10 250,28 296,18" fill="none" stroke="#C93A2B" strokeWidth="7" strokeLinecap="round" opacity=".85" />
            <path d="M10,30 C70,24 130,34 190,26 C240,20 270,30 292,26" fill="none" stroke="#C93A2B" strokeWidth="4" strokeLinecap="round" opacity=".5" />
          </svg>
        </span>{" "}
        <span className="arrow">→</span> Deployed<br />by Sunday.
      </h1>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
        <Image src="/brownfield.svg" alt="a brown field with an existing partial structure" width={160} height={96} />
        <span className="hand" style={{ maxWidth: 360 }}>brownfield: {PRODUCT_TAGLINE.build}</span>
      </div>

      <p className="sub">
        One week. Your repo, your keyboard. Day 1 we lock <strong>one major feature or one major fix</strong> — in
        your own words — as the scope. Then we ship it together in 15–30 minutes a day with{" "}
        <strong>10-min unstick calls the moment you hit a wall</strong> until you paste a{" "}
        <strong>real URL into your group chat by Day 7.</strong>
      </p>

      <ApplyCta
        label="Apply for a slot — $399"
        href="/apply?kind=build"
        note="Reply in ~5 min. Accepted: Stripe link + Day 1 booking. Monday start."
      />
    </div>
  );
}

export default async function BrownfieldPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const angle = normalizeAngle(params.angle);

  return (
    <>
      <TopBar />
      <main id="top">
        <Hero angle={angle} />

        <SlotBoard kind="build" applyHref="/apply?kind=build" />

        {/* WHO IT'S FOR */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHO THIS IS FOR</p>
            <h2 className="display">
              You started it.<br />
              <span className="dim">Something got between you and shipped.</span>
            </h2>
            <span className="sec-hand hand">which one sounds like your last three weekends?</span>
            <div className="points">
              <div className="point">
                <h3>
                  <span className="from">Half-built</span> <span className="to">→ Merged</span>
                </h3>
                <p>
                  The repo exists. Last commit was 18 days ago. This week we open it back up, kill the one bug that
                  killed the momentum, and merge your next feature by Friday.
                </p>
                <span className="hand">&quot;it broke 3 weeks ago and I haven&apos;t opened it since&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Cursor solo</span> <span className="to">→ Shipping partner</span>
                </h3>
                <p>
                  You can code. You ship with AI. You just can&apos;t do another weekend staring at the same file alone
                  — one focused session a day with someone building alongside you, and it moves again.
                </p>
                <span className="hand">&quot;I don&apos;t need a class, I need someone shipping with me&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Local only</span> <span className="to">→ Live URL</span>
                </h3>
                <p>
                  It runs on localhost. Nobody else has ever seen it. By Day 7 it&apos;s deployed, a custom domain is
                  pointed at it, and the link works when you send it to a stranger.
                </p>
                <span className="hand">&quot;one more week of this and I&apos;m shelving it&quot;</span>
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
              <span className="dim">Every one has a job.</span>
            </h2>
            <div className="days">
              <svg className="path-line" viewBox="0 0 22 400" preserveAspectRatio="none" aria-hidden="true">
                <path d="M11,0 C4,60 18,110 10,170 C3,230 17,290 11,400" fill="none" stroke="#128A4B" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 9" opacity=".7" />
              </svg>
              <div className="day">
                <p className="d">DAY 1 — SCOPING · 45 MIN</p>
                <h3>We lock the scope. In your own words. On paper.</h3>
                <p>
                  We open your repo together. You name the wall —{" "}
                  <strong>the one major feature or one major fix you&apos;re stuck on</strong> — and we lock it as
                  the target, in your own words, plus the <strong>Version Map</strong> to a live URL by Sunday. In
                  extreme cases where I see a nearer blocker or closer target, I&apos;ll say so on the call. No
                  mid-sprint renegotiation. If Day 1 doesn&apos;t leave you with a map you can act on, the sprint is
                  refunded before Day 2 starts.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 2–6 — DAILY BUILD SESSIONS · 15–30 MIN EACH</p>
                <h3>One push every day. You never lose a day again.</h3>
                <p>
                  Screen share, your codebase, hands on your keyboard —{" "}
                  <strong>one focused session every single day</strong>, sized so it fits between a job and a life.
                  Momentum never gets a day off. And the second you hit a wall between sessions:{" "}
                  <strong>10-minute unstick calls, up to 5 across the week</strong>, plus an async line that answers
                  inside 24 hours.
                </p>
              </div>
              <div className="day">
                <p className="d">DAY 7 — SHIP REVIEW · 30 MIN</p>
                <h3>You paste the URL into a group chat while I watch.</h3>
                <p>
                  We demo the deployed app on the real URL. You keep the recording of every session and a written{" "}
                  <strong>next-3-steps doc</strong> so you know what to open on Monday — the muscle memory of shipping,
                  not just the win.
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
                  <sup>$</sup>399
                </div>
              </div>
              <p className="price-sub">
                Cheaper than a week of a freelancer. Nothing gets added to it inside the sprint.
              </p>
              <span className="price-hand hand">
                one flat price. no retainer, no scope-creep meetings, no &quot;let&apos;s hop on a quick call.&quot;
              </span>
              <ValueStack
                items={[
                  { strong: "Day 1 scoping call + Version Map", label: "— scope locked in your own words, no renegotiation", value: "$400 value" },
                  { strong: "6 days of adaptive co-working sessions on your code", label: "(15–30 min daily, live)", value: "$1,800 value" },
                  { strong: "Up to 5 unstick calls", label: "(10 min, the moment you hit a wall)", value: "$500 value" },
                  { strong: "Deployment to production URL", label: "— real users can visit, custom domain works", value: "$400 value" },
                  { strong: "Every session recorded + next-version roadmap doc", label: "— so Monday isn't a blank page", value: "$200 value" },
                  { strong: "Operating environment we build together", label: "— prompts, docs, tools, skills you keep for every next version", value: "$400 value" },
                ]}
                totalValue="$3,700"
                price="$399"
                priceReason="Five Brownfield slots a week because I deliver every sprint personally — and I only take what I can actually ship."
              />
              <a className="btn" href="/apply?kind=build">
                Apply for a slot — $399
              </a>
              <p className="pay-note">
                Reply in ~5 min · Accepted builders get a payment link (
                <span className="ok">Cash App Pay</span> or card) + Day 1 booking · First accepted, first locked · Sprint starts Monday
              </p>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <Guarantee
          stampTop="SHIPPED"
          stampBottom="OR REFUND"
          headline="Deployed by Day 7. Or your money back."
          body="If your next version isn't live on a real URL by the Day 7 ship review — deployed, working, visitable — I refund the full $399. Not part of it. All of it. No form, no back-and-forth, no fine print. One reply and it's done. I only ship what I can ship, which is why applications get reviewed before payment."
          handNote="the only guarantee worth writing is the one you'd honor without being asked."
        />

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <p className="sec-label">// QUESTIONS</p>
            <h2 className="display">
              Before you <span className="dim">apply.</span>
            </h2>
            <details>
              <summary>Why apply — why can&apos;t I just pay?</summary>
              <p className="a">
                Two reasons, both real. One: five Brownfield slots a week, because I deliver every sprint personally
                and can&apos;t fake capacity. Two: I only take projects I can actually ship in seven days, so I read
                the form before I take the money. The form is short. Accepted applicants get a payment link within
                ~5 minutes and the slot locks when you pay.
              </p>
            </details>
            <details>
              <summary>My app is still just an idea — is this the right sprint?</summary>
              <p className="a">
                No — the Greenfield Build is the right one first. One week to conceive the imaginative solution,
                plus a PRD and a working AI-native demo of your idea you can point at. $199. After that, the
                Brownfield Build takes the demo to a deployed app on a real URL.{" "}
                <a href="/greenfield">See the Greenfield Build →</a>
              </p>
            </details>
            <details>
              <summary>Are you writing the code, or am I?</summary>
              <p className="a">
                You are — on your keyboard, on your repo, with me on screen share writing alongside you using the
                same AI-native workflow I ship with every day. You leave the week with the shipped version <em>and</em>{" "}
                the operating environment we built together (prompts, docs, tools, skills) so you keep shipping after
                Day 7. A freelancer takes the codebase and the learning; this doesn&apos;t.
              </p>
            </details>
            <details>
              <summary>What if my definition of &quot;shipped&quot; is bigger than one week?</summary>
              <p className="a">
                That&apos;s what Day 1 is for. In 45 minutes we lock <strong>one major feature or one major fix</strong>{" "}
                as the target and write the Version Map — the exact next version we can honestly deploy by Day 7 given
                your codebase. Anything past that lands in the next-version roadmap doc. If the map we agree on Day 1
                isn&apos;t live by Day 7, the full $399 comes back. If the project genuinely needs 2–4 weeks of runway,
                we scope that in the Day 1 call.
              </p>
            </details>
            <details>
              <summary>What happens after Day 7?</summary>
              <p className="a">
                You keep everything — recordings, Version Map, next-version roadmap, the operating environment we
                built together, and the live URL. On the Day 7 call I&apos;ll offer the Skool community (
                <strong>${SKOOL_PRICE_MONTHLY}/mo or ${SKOOL_PRICE_ANNUAL}/yr with a {SKOOL_TRIAL_DAYS}-day free trial</strong>){" "}
                — weekly Labs, searchable library organized by problem, direct line to me between sessions. Repeat
                sprints are always open when the next real wall shows up. <a href="/community">See Ship Club →</a>
              </p>
            </details>
          </div>
        </section>

        <div className="signoff">
          <span className="hand">
            your repo has been closed long enough.<br />open it Monday. deploy it Sunday.
            <svg width="220" height="26" viewBox="0 0 220 26" aria-hidden="true">
              <path d="M8,16 C50,8 90,22 130,14 C165,8 195,16 212,12" fill="none" stroke="#128A4B" strokeWidth="3.5" strokeLinecap="round" opacity=".85" />
            </svg>
          </span>
        </div>

        <CrossLink
          prompt="Idea not conceived yet? Start one rung back —"
          linkText="Greenfield Build ($199) →"
          href="/greenfield"
        />

        <CrossLink
          prompt="Between walls, want walking pace?"
          linkText={`Join our skool stuck2shipped community ($${SKOOL_PRICE_MONTHLY}/mo · ${SKOOL_TRIAL_DAYS}-day free trial) →`}
          href="/community"
        />
      </main>
      <Footer />
    </>
  );
}
