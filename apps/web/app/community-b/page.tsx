import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { CrossLink } from "@/components/CrossLink";
import { Guarantee } from "@/components/Guarantee";
import { ValueStack } from "@/components/ValueStack";
import {
  OPERATOR_IDENTITY,
  SKOOL_PRICE_ANNUAL,
  SKOOL_PRICE_MONTHLY,
  SKOOL_TRIAL_DAYS,
  SKOOL_URL,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Ship Club (B) — the room where builders learn to ship at agentic speed together | Stuck to Shipped",
  description: `Weekly Labs where hot seats work agents live. Searchable library of every wall we've cleared. Fuse hosted — your Claude auto-consults the community skill library in real-time. $${SKOOL_PRICE_MONTHLY}/mo or $${SKOOL_PRICE_ANNUAL}/yr with a ${SKOOL_TRIAL_DAYS}-day free trial.`,
};

export default function CommunityBPage() {
  return (
    <>
      <TopBar />
      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <p className="eyebrow">
            // SHIP CLUB (B) — the room where builders ship at agentic speed together ·{" "}
            <span className="ok">{SKOOL_TRIAL_DAYS}-day free trial</span>
          </p>
          <h1 className="display">
            Nobody leaves<br />
            <span className="dim">where they came in.</span>
          </h1>

          <p className="sub">
            Sprints teach you agentic speed by shipping one thing this week. Ship Club is where that
            compounds. Weekly Labs where 5 hot seats work agents live. Searchable library of every wall
            we&apos;ve cleared. Fuse hosted MCP — your Claude auto-consults the community skill library
            in real-time. Every wall the room clears stays clear for everyone in it.
          </p>

          <div style={{ marginTop: "1.5rem" }}>
            <a className="btn" href={SKOOL_URL}>
              Start {SKOOL_TRIAL_DAYS}-day free trial · ${SKOOL_PRICE_MONTHLY}/mo or ${SKOOL_PRICE_ANNUAL}/yr
            </a>
            <p className="pay-note">
              Billed through Skool · Cancel any time inside the trial, no charge · Annual saves $328/yr
            </p>
          </div>
        </div>

        {/* WHAT YOU GET */}
        <section>
          <div className="wrap">
            <p className="sec-label">// WHAT YOU GET INSIDE</p>
            <h2 className="display">
              Agentic-speed shipping.<br />
              <span className="dim">Compounded across the room.</span>
            </h2>
            <span className="sec-hand hand">the room raises everyone&apos;s ceiling.</span>
            <div className="points">
              <div className="point">
                <h3>
                  <span className="from">Labs</span> <span className="to">→ Weekly, live</span>
                </h3>
                <p>
                  ~5 Labs per week — hot seats work their agents live. Everyone watches the orchestration
                  patterns, not just the fixes. Recordings tagged by wall type, in the library within 24 hrs.
                </p>
                <span className="hand">&quot;show up live if you can.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Hot seats</span> <span className="to">→ 5 per Lab</span>
                </h3>
                <p>
                  Submit your project + wall. Will picks 5. On the Lab, you orchestrate your agent live —
                  the room watches, learns the pattern, applies it to their walls.
                </p>
                <span className="hand">&quot;submit your wall. get picked. orchestrate live.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Fuse hosted MCP</span> <span className="to">→ Your Claude consults ours</span>
                </h3>
                <p>
                  When you get stuck locally, your Claude auto-consults the community skill library —
                  compounded from every wall this room has cleared. Real-time. Free with membership.
                </p>
                <span className="hand">&quot;when you get stuck, your Claude asks ours.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Library</span> <span className="to">→ Searchable by wall</span>
                </h3>
                <p>
                  Every replay organized by problem taxonomy: <strong>Idea → Build → Deploy → Market</strong>.
                  Every skill categorized. Every wall we&apos;ve cleared, findable by the next member who
                  hits it.
                </p>
                <span className="hand">&quot;someone else already broke this wall.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Feed</span> <span className="to">→ Async between Labs</span>
                </h3>
                <p>
                  Post your wall between Labs. Get eyes from Will + members before the next live. Everything
                  inside Skool. No Discord, no second platform.
                </p>
                <span className="hand">&quot;one room. one feed. one pace — agentic.&quot;</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOT SEATS */}
        <section>
          <div className="wrap">
            <p className="sec-label">// HOW HOT SEATS WORK</p>
            <h2 className="display">
              Submit. Get picked. <span className="dim">Orchestrate live.</span>
            </h2>
            <div className="points">
              <div className="point">
                <h3>1 — Submit your wall</h3>
                <p>
                  Three fields: where you&apos;re stuck, what your agent tried, what &quot;unstuck&quot;
                  would look like by end of Lab. Applications close Sunday for the following week.
                </p>
              </div>
              <div className="point">
                <h3>2 — Will picks 5</h3>
                <p>
                  Sunday night. Criteria: clearest wall, most tractable in ~10 min of live orchestration,
                  mix of stages (Idea → Build → Deploy → Market) so replays serve the whole library.
                </p>
              </div>
              <div className="point">
                <h3>3 — Live. Recorded. Tagged.</h3>
                <p>
                  Hot seats orchestrate their agent live. Everyone else watches the pattern. Replay drops
                  within 24 hrs, tagged by the wall it solved, searchable by the next member who hits it.
                </p>
              </div>
            </div>
            <p className="sub" style={{ marginTop: "2rem" }}>
              <strong>Two 5-caps — not the same thing.</strong>{" "}
              <span className="dim">
                5 hot seats per Lab (community cap). Separate from 5 concurrent paid sprints per SKU
                (Will&apos;s paid-sprint capacity). Different products, different mechanics.
              </span>
            </p>
          </div>
        </section>

        {/* NOT INSTEAD OF A SPRINT */}
        <section>
          <div className="wrap">
            <p className="sec-label">// NOT INSTEAD OF A SPRINT</p>
            <h2 className="display">
              Sprints teach the speed.<br />
              <span className="dim">The room compounds it.</span>
            </h2>
            <p className="sub">
              A Sprint gets you shipping at agentic speed on ONE project this week. Ship Club is the room
              where that speed compounds across every wall you hit for months and years. If you have an{" "}
              <strong>active wall you need broken this week</strong>, a private Sprint is the right move.
              The room is for after.
            </p>
            <span className="hand">
              need a breakthrough THIS week? book a private Sprint → <a href="/brownfield-b">stuck.builders</a>
            </span>
          </div>
        </section>

        {/* PRICE FRAME + VALUE STACK — new for B */}
        <section id="join">
          <div className="wrap">
            <p className="sec-label">// JOIN SHIP CLUB</p>
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
                  <sup>$</sup>
                  {SKOOL_PRICE_MONTHLY}
                  <span style={{ fontSize: "0.35em", fontWeight: 400 }}>/mo</span>
                </div>
              </div>
              <p className="price-sub">
                or <strong>${SKOOL_PRICE_ANNUAL}/yr</strong> (saves $328/yr — ~$42/mo effective).
                <strong> {SKOOL_TRIAL_DAYS}-day free trial</strong> on both.
              </p>
              <span className="price-hand hand">
                monthly on-ramps. annual locks the price for a year.
              </span>
              <ValueStack
                items={[
                  { strong: "Weekly Labs (~5/wk, live)", label: "— hot seats orchestrate agents live, the room watches the patterns", value: "$600/mo value" },
                  { strong: "5 hot seats per Lab (you submit, Will picks)", label: "— active orchestration on your wall", value: "$500/mo value" },
                  { strong: "Fuse hosted MCP", label: "— your Claude auto-consults the community skill library in real-time", value: "$600/mo value" },
                  { strong: "Searchable library organized by problem", label: "— every wall cleared, findable by the next member", value: "$300/mo value" },
                  { strong: "Community feed", label: "— post between Labs, eyes from Will + members before next live", value: "$200/mo value" },
                  { strong: "Radar community intelligence", label: "— anonymized wall aggregation + pattern trends surfaced weekly", value: "$400/mo value" },
                ]}
                totalValue="$2,600/mo"
                price={`$${SKOOL_PRICE_MONTHLY}/mo`}
                priceReason={`$${SKOOL_PRICE_MONTHLY}/mo is the monthly cost to keep the room running — Labs, hot-seat curation, Fuse hosted, library maintenance. $${SKOOL_PRICE_ANNUAL}/yr locks it for a year and saves you $328.`}
              />
              <a className="btn" href={SKOOL_URL}>
                Start {SKOOL_TRIAL_DAYS}-day free trial
              </a>
              <p className="pay-note">
                Billed through Skool · Cancel any time inside the trial, no charge · Cancel after, no clawback
              </p>
            </div>

            <div className="signoff">
              <span className="hand">
                Will — {OPERATOR_IDENTITY}.
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
          </div>
        </section>

        {/* GUARANTEE */}
        <Guarantee
          stampTop="TRIAL"
          stampBottom="NO CHARGE"
          headline={`${SKOOL_TRIAL_DAYS}-day free trial. Cancel inside, no charge. Ever.`}
          body={`Start the trial. Show up to a Lab. Watch a hot seat orchestrate. See how Fuse injects community skills into your Claude live. If it's not the room where your building compounds — cancel before day ${SKOOL_TRIAL_DAYS + 1}, pay nothing. No email required to cancel. Cancel after, no clawback of the last cycle.`}
          handNote="the room raises everyone's ceiling. never yours alone."
        />

        <CrossLink
          prompt="Ready for a private breakthrough this week?"
          linkText="Book a Brownfield Build (B) →"
          href="/brownfield-b"
        />
      </main>
      <Footer />
    </>
  );
}
