import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { CrossLink } from "@/components/CrossLink";
import {
  OPERATOR_IDENTITY,
  SKOOL_PRICE_ANNUAL,
  SKOOL_PRICE_MONTHLY,
  SKOOL_TRIAL_DAYS,
  SKOOL_URL,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Ship Club — walking-pace community for builders | Stuck to Shipped",
  description: `Weekly Labs, searchable library, community feed between. $${SKOOL_PRICE_MONTHLY}/mo or $${SKOOL_PRICE_ANNUAL}/yr with a ${SKOOL_TRIAL_DAYS}-day free trial.`,
};

export default function CommunityPage() {
  return (
    <>
      <TopBar />
      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <p className="eyebrow">
            // SHIP CLUB — walking-pace community ·{" "}
            <span className="ok">{SKOOL_TRIAL_DAYS}-day free trial</span>
          </p>
          <h1 className="display">
            Nobody leaves<br />
            <span className="dim">where they came in.</span>
          </h1>

          <p className="sub">
            You have an idea you&apos;ve never started. Or an app that&apos;s half-built and fighting you.
            Or something you shipped that nobody uses. Stuck to Shipped gets you unstuck — and you feel it
            the same week.
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
              Same operating engine as the paid sprints.<br />
              <span className="dim">Group format. Walking pace.</span>
            </h2>
            <span className="sec-hand hand">the pace is the product.</span>
            <div className="points">
              <div className="point">
                <h3>
                  <span className="from">Labs</span> <span className="to">→ Weekly, live</span>
                </h3>
                <p>
                  Roughly <strong>5 Labs per week</strong> — live group work sessions (mix of unstick + idea).
                  Everyone in the community can watch every Lab. Recordings drop to the library within 24 hours.
                </p>
                <span className="hand">&quot;show up live if you can.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Hot seats</span> <span className="to">→ 5 per Lab</span>
                </h3>
                <p>
                  Members submit their project ahead of a scheduled Lab. Will picks <strong>5</strong>{" "}
                  whose projects will be worked on active during the session. The rest watch and learn —
                  and every replay is tagged and searchable.
                </p>
                <span className="hand">&quot;submit your wall. get picked. ship it live.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Library</span> <span className="to">→ Searchable by wall</span>
                </h3>
                <p>
                  Every replay organized by problem taxonomy:{" "}
                  <strong>Idea → Build → Deploy → Market</strong>. Search by your current wall, not by
                  date. Watch the closest replay before your Lab.
                </p>
                <span className="hand">&quot;someone else already broke this wall.&quot;</span>
              </div>
              <div className="point">
                <h3>
                  <span className="from">Feed</span> <span className="to">→ Async between Labs</span>
                </h3>
                <p>
                  Post your wall between sessions. Get eyes from Will and other builders before the next
                  Lab. Everything lives inside Skool — no Discord, no newsletter, no second platform.
                </p>
                <span className="hand">&quot;one place. one feed. one pace.&quot;</span>
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
            </div>
          </div>
        </section>

        {/* HOT SEATS */}
        <section>
          <div className="wrap">
            <p className="sec-label">// HOW HOT SEATS WORK</p>
            <h2 className="display">
              Submit. Get picked. <span className="dim">Ship it live.</span>
            </h2>
            <div className="points">
              <div className="point">
                <h3>1 — Submit your wall</h3>
                <p>
                  Three fields inside Skool: where exactly you&apos;re stuck, what you&apos;ve tried, what
                  &quot;unstuck&quot; would look like by end of Lab. Applications close Sunday for the
                  following week&apos;s Labs.
                </p>
              </div>
              <div className="point">
                <h3>2 — Will picks 5</h3>
                <p>
                  Sunday night. Criteria: clearest wall, most tractable in one Lab, mix of stages (Idea →
                  Build → Deploy → Market) so replays serve the whole library. Not picked? Rolls to next
                  week automatically. No wall waits more than 2 weeks.
                </p>
              </div>
              <div className="point">
                <h3>3 — Live. Recorded. Tagged.</h3>
                <p>
                  Hot seats work active on the call. Everyone else watches live. Replay drops within 24
                  hours, tagged by the wall it solved, searchable by the next member who hits the same one.
                </p>
              </div>
            </div>
            <p className="sub" style={{ marginTop: "2rem" }}>
              <strong>Two 5-caps — not the same thing.</strong>{" "}
              <span className="dim">
                5 hot seats per Lab is the community cap. Separate from 5 concurrent paid sprints per SKU
                (Will&apos;s paid-sprint capacity, tracked on the sprint slot board). Different products,
                different mechanics.
              </span>
            </p>
          </div>
        </section>

        {/* NOT INSTEAD OF A SPRINT */}
        <section>
          <div className="wrap">
            <p className="sec-label">// NOT INSTEAD OF A SPRINT</p>
            <h2 className="display">
              Walking pace.<br />
              <span className="dim">Not breakthrough pace.</span>
            </h2>
            <p className="sub">
              Ship Club is for between-walls momentum — steady building, weekly hot seats, a library that
              compounds. If you have an <strong>active wall you need broken this week</strong>, a private
              Sprint is the right move. Community is for after.
            </p>
            <span className="hand">
              need a breakthrough THIS week? book a private Sprint → <a href="/brownfield">stuck.builders</a>
            </span>
          </div>
        </section>

        {/* PRICING */}
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

        <CrossLink
          prompt="Ready for a private breakthrough this week?"
          linkText="Book a Brownfield Build →"
          href="/brownfield"
        />
      </main>
      <Footer />
    </>
  );
}
