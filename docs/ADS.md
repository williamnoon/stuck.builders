# STUCK TO SHIPPED — ADS
*Meta Ads creative library. Ready to paste into Ads Manager. Paired with PRD §9 (Ads) and §10 (Technical Notes). Every angle sits inside Hormozi's three tiers ($100M Offers, $100M Leads, $100M Models). Every ad is an offer, stated compactly.*

*Marketing-honesty rule (hard): Greenfield Build ads promise **the imaginative solution + a built AI-native demo of your idea** (MVP-grade, running) + operating environment, never a production app. Brownfield Build ads (`/brownfield`, `/brownfield#ceiling`, `/brownfield#traction`) all promise the same core outcome — **unstuck + deployed live next version at a real URL by Day 7, one major feature or one major fix locked Day 1 in your own words.** `#ceiling` = platform ceiling unblocked OR moved to code you own. `#traction` = a traction milestone shipped (first users reached, first outreach live). Skool ads promise walking-pace Labs + hot seats + $69/mo or $500/yr with a 7-day free trial. Never sell "we build it for you" — delivery is they code, Will copilots. Operator identity extends: "a builder who ships with AI every day, with taste about what deserves to be built."*

*Apply-first is intentional. All ads route to landing pages that end in the application form. Optimization event = Lead (not Purchase). **Approval SLA: ~5 min** — Will reads applications live. Angle-of-the-house: "Apply, hear back before you close the tab."*

*Two SKUs, three doors on Brownfield. Brownfield Build has three landing-page doors — `/brownfield`, `/brownfield#ceiling`, `/brownfield#traction` — same $399 SKU, same 7-day engine, same Day-7 promise. Different hook on the way in; same offer on the way out. Greenfield Build has one door — `/greenfield` — at $199. Retired URLs (`/`, `/idea`, `/out`, `/grow`) 301-redirect to the new routes; do not use them in new ad copy.*

*Referral flywheel: $100 credit both sides, open to everyone, never expires. Cross-cutting ad angle available on any campaign — see §3E.*

---

## 1. ADS META-RULES

- **Objective:** Sales objective in Meta Ads Manager, **optimizing for the Lead event (application submitted)** at launch. Once volume grows (>50 leads/week per campaign for two weeks), test Purchase optimization on a duplicate ad set.
- **Budget:** $50/day per campaign at launch. Four Track-A campaigns: BROWNFIELD (`/brownfield`), BROWNFIELD-CEILING (`/brownfield#ceiling`), BROWNFIELD-TRACTION (`/brownfield#traction`), GREENFIELD (`/greenfield`). $200/day total. Skool + retargeting layered on later.
- **Targeting:** Broad US, ages 24–55, Advantage+ audience targeting ON. Do not stack narrow interest layers at launch — let the pixel learn on Lead events.
- **Placements:** Advantage+ placements ON. Facebook + Instagram feeds and Reels are the primary volume drivers.
- **Creative rotation:** Minimum 3 creatives per campaign at all times. Rotate creative weekly. Duplicate any winner into a new ad set before scaling.
- **Every landing page ends in the application form.** No ad promises pay-first. No ad links to a checkout.
- **No fake urgency.** Scarcity claims must match the live slot board — "5 slots this week" is real (PRD §5); a countdown timer that resets is not. Only claim a date if the board actually shows that state.
- **No fake testimonials, no fake founder credentials, no stock-image "founder" photos, no AI-generated faces.** Pre-launch = process proof only (slot board, calendar screenshots, hand-written notes, Version Map on paper).
- **Support/reply email in copy:** `will@stuck.builders`.
- **No emojis in ad copy.** Meta serves fine without them and they clash with the workshop voice.
- **Voice:** direct, honest, engineer-facing. Every word informs or helps the reader act.

---

## 2. PIXEL & EVENT SETUP (engineer-facing spec)

- **Meta Pixel** installed site-wide via `apps/web/app/layout.tsx` (or a `PixelProvider` component). Base pixel fires PageView on every route.
- **Lead event** fires from `apps/web/components/ApplicationForm.tsx` via a `trackLead()` helper on successful `POST /api/apply` response (status 200).
  - `event_name`: `Lead`
  - `value`: `PRICES[kind]` — `199` for Greenfield (internal key `idea`), `399` for Brownfield (internal key `build`) (regardless of which Brownfield door: `/brownfield`, `#ceiling`, or `#traction`)
  - `currency`: `USD`
  - `content_name`: `sprintKindLabel(kind)` — `"Greenfield Build $199"` or `"Brownfield Build $399"`. All three Brownfield doors (base, `#ceiling`, `#traction`) report the same label; the landing-page URL + `angle` field distinguish source, not the event label.
  - `content_category`: `sprint-application`
  - Additional payload fields: `sprintKind`, `angle` (`ceiling` / `traction` / `main`), `utm_source`, `utm_campaign`, `utm_content`, `ref_code`
- **CAPI (server-side Conversions API):** deferred to a future pass. Browser Pixel only at launch. Set a `TODO` in `docs/ROADMAP.md`.
- **Optimization note (important):** Lead ≠ Purchase. Expect higher event volume and lower "CPA" numbers than a pay-first funnel. Do not benchmark the CPL against the sprint price directly — benchmark against **CPL × application-to-payment conversion rate**. Track that ratio weekly.
- **De-duplication:** if a browser fires Lead and later CAPI fires the same event, use `event_id = applicationId` (returned from `/api/apply`) so Meta de-dupes cleanly when CAPI ships.

---

## 3. TRACK A — SPRINT ADS (front door, cold traffic)

Four campaigns, five angles each. Twenty angles total. Each angle stated as a compact offer.

Three of the four campaigns sell the same $399 Brownfield Build through different pain-point doors. The fourth sells the $199 Greenfield Build. Every angle promises the SKU's real deliverable — nothing else.

---

### 3A. BROWNFIELD — `/brownfield` — $399
*ICP: solo founder / indie builder, repo exists, hasn't touched it in weeks, wants a code partner for one focused week. One major feature or one major fix, locked Day 1 in their own words.*

---

**Angle A1 — Loss-framed pain**

- **Hook:** Your repo hasn't been touched in 18 days.
- **Primary text:**

  Your repo hasn't been touched in 18 days. You open the project, stare at it, close it. You know what needs to happen — you can't get yourself to start again.

  One week. 15–30 minutes a day. Your code, your keyboard, someone shipping alongside you. Day 1 we lock scope in your own words — one major feature or one major fix. Day 7 you demo the deployed next version at a real URL.

  Not a course. Not a freelancer. Not an agency. A private build sprint. They code, Will copilots.

  Five slots a week. Apply at stuck.builders — Will reads live, reply usually in ~5 min.

- **Headline:** Get the repo shipping again
- **Description:** 7-day private build sprint. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield`
- **Creative direction:** Screen recording of a real dormant repo — GitHub commit graph showing an 18-day gap, then Day 1 scope being hand-written on paper with a Sharpie in the customer's own words.
- **Hormozi lever:** Loss framing (cost of the wall staying up) + Perceived Likelihood (scope locked Day 1 in their language).

---

**Angle A2 — Cursor-solo tired**

- **Hook:** I don't need another Cursor course. I need someone shipping with me.
- **Primary text:**

  You already know how to code. You already have Cursor open. You've watched the videos. What's missing isn't information — it's a room.

  Brownfield Build: 7 days, your code, your project. Day 1 we lock one major feature or one major fix, in your own words. 15–30 min daily sessions live with me after that. Up to 5 unstick calls (10 min each) when you hit a wall between sessions. Day 7 you ship the deployed next version at a real URL.

  They code. Will copilots. $399. Five slots a week.

  stuck.builders

- **Headline:** Ship with a partner, not a course
- **Description:** 7 days. Deployed by Sunday. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield`
- **Creative direction:** Will talking to camera, phone-shot, no ring light. "I built four courses' worth of half-apps before I figured out I didn't need another course. I needed someone in the room."
- **Hormozi lever:** Dream Outcome (ship, not learn) + Effort (15–30 min/day is doable).

---

**Angle A3 — Localhost-only shame**

- **Hook:** It only runs on localhost. Nobody's ever clicked it.
- **Primary text:**

  You built the thing. It compiles. It works on your machine. It has never been deployed. Nobody has ever clicked it but you.

  That's the wall for a lot of builders — the last 10% between localhost and a real URL. That's exactly what a Brownfield Build is for.

  Day 1 we lock the one major fix or feature that gets you off localhost. Day 7 you demo the deployed next version at a real URL. They code, Will copilots.

  $399. Deployed by Day 7 or refund.

  Apply: stuck.builders

- **Headline:** Get it off localhost
- **Description:** Deployed URL by Day 7. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield`
- **Creative direction:** Screenshot of `localhost:3000` in a browser tab, then a hand-drawn arrow to a Vercel deploy screen with a real URL. Chalk-yellow annotation: "the last 10% is the whole game."
- **Hormozi lever:** Time Delay (7 days is the wall between "works on my machine" and "shipped").

---

**Angle A4 — Guarantee-led**

- **Hook:** Deployed by Sunday or your money back.
- **Primary text:**

  Here's the deal. Day 1 we scope your build in your own words — one major feature or one major fix, locked. If Day 1 doesn't leave you with a scope you can act on, you get a full refund. No argument.

  Then 15–30 minutes a day, your code, my eyes. Up to 5 unstick calls (10 min each) between sessions. Day 7 you demo the deployed next version at a real URL. If it isn't shipped live, full refund.

  They code. Will copilots. $399. Five slots a week. Apply at stuck.builders.

- **Headline:** Day 1 scope or refund. Day 7 deployed or refund.
- **Description:** 7 days. Deployed. Guaranteed.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield`
- **Creative direction:** Photograph of a legal pad with the scoped feature written out in the customer's language, "locked Day 1" underlined. Guarantee sentence written under it in the same handwriting.
- **Hormozi lever:** Guarantee (Day-1 refund + Day-7 refund) + Perceived Likelihood.

---

**Angle A5 — Process / mechanism**

- **Hook:** One major thing. Seven days. One URL.
- **Primary text:**

  Same engine every sprint: Day 1, a 45-min scoping call where we lock one major feature or one major fix in your exact words. Days 2–6, adaptive daily sessions (15–30 min) on your code, live with me. Up to 5 unstick calls when you hit a wall (10 min each). Day 7 you demo the deployed next version at a real URL.

  That's the whole mechanism. Not a course. Not an agency. A private sprint on your project. They code, Will copilots.

  $399. Five slots a week. Apply at stuck.builders — Will reads live, reply usually in ~5 min.

- **Headline:** Same engine. Seven days. Shipped.
- **Description:** Private build sprint. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield`
- **Creative direction:** Slow zoom on the 7-day calendar block from the landing page — real event names on real days. No voiceover, just cursor movement.
- **Hormozi lever:** Effort (specific, small daily ask) + Perceived Likelihood (mechanism is legible).

---

### 3B. BROWNFIELD-CEILING — `/brownfield#ceiling` — $399
*ICP: builder stuck on Lovable / Bolt / v0 / Replit. Auth broke, credits draining, wants either the platform unblocked or a clean move to code they own. Same $399 Brownfield Build, angled at the ceiling.*

---

**Angle B1 — Platform-named**

- **Hook:** Stuck on Lovable, Bolt, v0, or Replit?
- **Primary text:**

  You got further than you ever thought you would. Then auth broke. Or Supabase started rejecting everything. Or the credits bill hit $200 and the app still won't do the one thing.

  Day 1 of a Brownfield Build we lock scope in your own words and pick the path: fix it in the platform, or move the essentials to code you own. Then we execute for the rest of the week — they code, Will copilots.

  Day 7 you demo the deployed next version at a real URL. Either the platform build works, or your app is running on Next.js + Vercel with the repo in your GitHub and the credits meter stopped.

  $399. Apply at stuck.builders/brownfield#ceiling.

- **Headline:** Off the platform ceiling, in a week
- **Description:** Fixed or moved. Own it. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#ceiling`
- **Creative direction:** Screen recording — Lovable/Bolt/v0/Replit UI on the left, a Vercel dashboard + a real GitHub repo on the right. Hand-drawn arrow between them: "Path A" and "Path B."
- **Hormozi lever:** Dream Outcome (own it) + Perceived Likelihood (two-path framing removes fear).

---

**Angle B2 — Credits meter**

- **Hook:** $200 a month in credits. Still stuck.
- **Primary text:**

  You're paying $200 a month in credits to prompt the builder in circles. Every fix breaks two other things. You don't own the code and it's starting to feel like a problem.

  One week. Day 1 we lock scope in your own words and decide: fix it in place, or move the essentials to code you own. Day 7 the deployed next version is live at a real URL — either the platform build works or you've moved.

  $399 — less than three months of what you're already paying to be stuck.

  stuck.builders/brownfield#ceiling

- **Headline:** Stop paying to be stuck
- **Description:** 7 days. Off the platform. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#ceiling`
- **Creative direction:** Screenshot of a real credits usage screen (Lovable/Bolt billing page), red circle around the amount, hand-written note: "3 months of this = your sprint, twice."
- **Hormozi lever:** Loss framing (ongoing credit burn) + Dream Outcome (meter stops).

---

**Angle B3 — Auth-broke**

- **Hook:** Why does auth always break?
- **Primary text:**

  You added login and everything downstream fell over. Now you're prompting the builder to fix Supabase and it keeps breaking the dashboard. Every fix costs credits. Every fix breaks two other things.

  Auth is where these platforms hit their ceiling. It's fixable in place, or it's a signal to move.

  Day 1 we lock scope in your own words and pick the path. Day 7 the deployed next version is live at a real URL — auth working, and you own what runs it. They code, Will copilots.

  $399. Five slots a week. stuck.builders/brownfield#ceiling

- **Headline:** Auth working. You own it.
- **Description:** Fix or move, in 7 days. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#ceiling`
- **Creative direction:** Split-screen phone recording — a broken auth flow on the platform (red error), then a working Next.js auth flow with a real user profile loaded. No stock people — a test user "test@stuck.builders."
- **Hormozi lever:** Perceived Likelihood (named the exact wall) + Time Delay (7 days).

---

**Angle B4 — Ownership**

- **Hook:** Your GitHub repo. Live on Vercel. Credits stopped.
- **Primary text:**

  Path B, if that's the honest Day-1 call: we move the essentials of your app to Next.js on Vercel. You walk out with a repo in your GitHub, a live URL you deployed yourself, and the platform credits meter stopped.

  Not a clone. The essentials, in a week, that you own. They code, Will copilots.

  $399. Apply at stuck.builders/brownfield#ceiling — Will reads live, reply usually in ~5 min.

- **Headline:** Own the code you shipped
- **Description:** Repo, deploy, ownership. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#ceiling`
- **Creative direction:** Photo of a laptop screen: GitHub repo page on one side, Vercel deployment on the other, real URL bar visible. Handwritten annotation: "yours."
- **Hormozi lever:** Dream Outcome (ownership) + Perceived Likelihood (specific stack).

---

**Angle B5 — Path A / Path B likelihood**

- **Hook:** Day 1 decides. Either way you ship.
- **Primary text:**

  Every Brownfield Build on `/brownfield#ceiling` starts the same way. Day 1, 45 minutes: we look at what you have, we lock scope in your own words, we pick fix-in-place or clean-move.

  If Day 1 says we can't fix it AND we can't cleanly move it, you don't pay. No argument.

  Otherwise: 15–30 minutes daily for six days, up to 5 × 10-min unstick calls when you hit a wall. Day 7 you demo the deployed next version at a real URL.

  $399. stuck.builders/brownfield#ceiling

- **Headline:** Two paths. One deploys. $399.
- **Description:** Day 1 guarantee. 7-day sprint.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#ceiling`
- **Creative direction:** Whiteboard sketch: "Path A: fix in place" arrow to a deployed platform build. "Path B: clean move" arrow to a Next.js repo. Both end in a live URL. Hand-drawn, one-take.
- **Hormozi lever:** Guarantee + Perceived Likelihood.

---

### 3C. BROWNFIELD-TRACTION — `/brownfield#traction` — $399
*ICP: builder who shipped it. Nobody's using it. They're an engineer, not a marketer. Same $399 Brownfield Build, angled at a traction milestone as the Day-7 target. Never promise "customers" — promise first users reached, one angle proven live, first conversation logged.*

---

**Angle G1 — Loss-framed pain**

- **Hook:** Analytics says 12 sessions. 9 of them are you.
- **Primary text:**

  You shipped it. It's live. The analytics tab says 12 sessions this month and you know 9 of them are you refreshing.

  This is a Brownfield Build. Same $399, same 7-day engine — the "next version" we scope isn't a feature, it's a traction milestone. Day 1 we lock it in your own words: first 10 real users reached, one outreach angle proven live, first conversation logged.

  Day 7 the milestone is shipped. Real people at the URL. Actual conversations in your inbox. They do the outreach, Will copilots.

  $399. stuck.builders/brownfield#traction

- **Headline:** Get real users to your live app
- **Description:** Traction milestone shipped in 7 days. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#traction`
- **Creative direction:** Screenshot of a real analytics dashboard with a flat line. Red circle around the session count. Hand-written note: "9 of these are me."
- **Hormozi lever:** Loss framing (empty product) + Dream Outcome (real people at the URL).

---

**Angle G2 — Not-a-marketer**

- **Hook:** You're an engineer, not a marketer. That's fine.
- **Primary text:**

  You built the whole thing. You deployed it. You did what most people can't. Marketing is not the same skill and nobody handed you the reps.

  Brownfield Build on `/brownfield#traction` is the same $399 engine, angled at traction. Day 1 we scope one traction milestone in your own words — first 10 real users reached, one angle proven live, first conversation logged. Then 15–30 min a day, you doing the outreach, Will copilots.

  Day 7 the milestone is shipped live. Not a plan. Actual first-move done.

  $399. Five slots a week. stuck.builders/brownfield#traction

- **Headline:** Traction, without pretending to be a marketer
- **Description:** 7 days. Milestone shipped. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#traction`
- **Creative direction:** Will to camera, phone-shot. "You didn't spend three years learning to code so you could pretend to be a marketer. You don't have to. You have to do the first move, and I'll sit with you while you do it."
- **Hormozi lever:** Effort (small, specific first move) + Perceived Likelihood (engineer language, not marketer language).

---

**Angle G3 — Real-people-language**

- **Hook:** First 10 real users reached in 7 days.
- **Primary text:**

  A specific target, in your own words on Day 1. Something like: 10 real potential users messaged, one outreach angle tested live, one real conversation about the product logged. Whatever "shipped" means for your traction — locked Day 1.

  Days 2–6, 15–30 minutes a day, you doing the moves, Will copilots. Up to 5 × 10-min unstick calls when the outreach stalls.

  Day 7, the milestone is done. Not a GTM plan. The first-move actually shipped.

  $399. stuck.builders/brownfield#traction

- **Headline:** First 10 real users. Reached, not planned.
- **Description:** 7-day traction sprint. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#traction`
- **Creative direction:** Screenshot of a real DM thread or cold email — one sent, one reply. Names blurred. Green underline under the reply. Hand-written: "the first one is the whole thing."
- **Hormozi lever:** Perceived Likelihood (concrete target) + Dream Outcome (real humans engaging).

---

**Angle G4 — Guarantee-led**

- **Hook:** Traction milestone shipped by Day 7 or refund.
- **Primary text:**

  Day 1 we lock a traction milestone in your own words. Something specific and small enough to actually ship in a week — first 10 users reached, first angle proven live, first conversation logged.

  If Day 1 doesn't leave you with a milestone you can act on, full refund. If Day 7 doesn't ship the milestone live, full refund.

  In between, 15–30 minutes a day. You do the outreach. Will copilots.

  $399. Five slots a week. stuck.builders/brownfield#traction

- **Headline:** Milestone shipped by Sunday. Or refund.
- **Description:** 7-day traction sprint. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#traction`
- **Creative direction:** Legal-pad photo with the traction milestone written out in a customer's language, "shipped Day 7" underlined. Guarantee sentence in the same handwriting.
- **Hormozi lever:** Guarantee + Perceived Likelihood.

---

**Angle G5 — Anti-plan positioning**

- **Hook:** We don't hand you a GTM plan. We ship the first outreach step with you.
- **Primary text:**

  There's a whole industry that will sell you a marketing plan. A slide deck. A "customer list." None of it moves.

  This is a Brownfield Build. The Day-7 deliverable is a shipped move: the outreach actually went out, the first real conversation actually happened, the first angle actually got tested. In your voice, on your keyboard, with Will in the room.

  Not a plan. A shipped move.

  $399. stuck.builders/brownfield#traction

- **Headline:** Not a plan. A shipped move.
- **Description:** Traction sprint. Shipped, not planned. $399.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/brownfield#traction`
- **Creative direction:** Split image — left side, a slide-deck GTM plan graying out; right side, a real DM thread with a reply. Hand-drawn arrow from left to right crossed out.
- **Hormozi lever:** Dream Outcome (real motion, not paper) + Perceived Likelihood (shipped artifact).

---

### 3D. GREENFIELD — `/greenfield` — $199
*ICP: would-be founder or newly AI-native builder carrying an unvalidated idea (or no idea, or three). Wants — this week — an imaginative solution worth building AND a working AI-native demo of it. Wedge: **AI democratized building. Almost nobody can conceive an idea worth building.** Marketing-honesty: this ad promises the imaginative solution + PRD + built AI-native demo + operating environment. Never "an app," never "PRD alone." Include the "I have AI. I still don't know what to build." phrasing wherever it fits — it's the sharpest verbatim inner voice for this ICP.*

---

**Angle I1 — Someday-idea framing**

- **Hook:** You've had that idea for 2 years. In 7 days ship a working demo of it.
- **Primary text:**

  You've journaled it. You've pitched it to your partner at dinner. You registered a domain for it eighteen months ago and never used it.

  Greenfield Build: 7 days. 30–60 minutes a day. Day 1 we background-mine and pressure-test the idea against the four filters. Days 2–6 we set up the operating environment together and build the AI-native demo — your hands on the keyboard, Will copilots.

  Day 7 you walk out with a PRD (1–2 pg spec) plus a running AI-native demo of the idea at a real URL, plus the operating environment you keep using after.

  $199. stuck.builders/greenfield

- **Headline:** Ship a demo of the idea this week
- **Description:** PRD + AI-native demo. 7 days. $199.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/greenfield`
- **Creative direction:** Photograph of a Notion page or notebook with the same idea rewritten across three dates a year apart. Chalk-yellow annotation over the top: "still here."
- **Hormozi lever:** Loss framing (time carried) + Dream Outcome (running demo of the idea, not "an app" but a real artifact).

---

**Angle I2 — AI-native-but-what-to-build**

- **Hook:** I just learned AI/Bolt. I don't know what to build.
- **Primary text:**

  You've got the tools. You've done a couple tutorials. You can prompt. What you don't have is the thing worth prompting for.

  Greenfield Build: Day 1 Will interviews you on your background, interests, and the problems closest to you — the best ideas usually live in your own life. Pressure-test against the four filters. Scope what the demo shows.

  Days 2–6 you set up the operating environment (prompts, docs, tools, skills) and build the AI-native demo of the idea, hands on your keyboard. Day 7 you have a PRD + a running demo + the environment.

  $199. stuck.builders/greenfield

- **Headline:** You have the tools. Get an idea worth them.
- **Description:** PRD + AI-native demo. $199.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/greenfield`
- **Creative direction:** Will to camera, phone-shot. "The people I hear from most: 'I just learned Bolt, I don't know what to build.' That's Day 1 of this sprint."
- **Hormozi lever:** Dream Outcome (become a builder) + Perceived Likelihood (background-mining as mechanism).

---

**Angle I3 — Background-mining hook**

- **Hook:** The best idea usually lives in your own life.
- **Primary text:**

  Founders don't need "an idea." They need to notice the one they're already carrying. The one shaped by their job, their side gigs, the problem they solved for themselves last month.

  Day 1 of Greenfield Build is a 30-minute background-mining interview — Will asks about your work, your interests, the problems close to you. We pressure-test against the four filters. We pick the one worth building a demo of this week.

  Days 2–6 you build the AI-native demo, hands on your keyboard, Will copilots. Day 7 you have a PRD, a running demo at a real URL, and the operating environment.

  $199. stuck.builders/greenfield

- **Headline:** Mine your own life for the idea
- **Description:** 7-day idea sprint. PRD + demo. $199.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/greenfield`
- **Creative direction:** Photograph of a hand-written interview notes page — job history on one side, "problems you've solved yourself" on the other, arrows connecting them.
- **Hormozi lever:** Perceived Likelihood (real mechanism for finding the idea) + Dream Outcome (idea + demo).

---

**Angle I4 — Anti-validation-theater**

- **Hook:** Real people, real language, a working demo you can show.
- **Primary text:**

  Most "validation" is asking your friends if they'd pay, hearing yes, and building anyway. That's theater.

  Greenfield Build is different. Day 1 we background-mine and pressure-test the idea against four filters. Days 2–6 we build the AI-native demo you can actually put in front of people. Day 7 you have a PRD + running demo + the operating environment you keep using.

  You leave with something to show, not something to hope about.

  $199. stuck.builders/greenfield

- **Headline:** Something to show, not something to hope about
- **Description:** PRD + AI-native demo. 7 days. $199.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/greenfield`
- **Creative direction:** Photograph of a phone showing a real running demo on a real URL. Hand next to it, thumb ready to tap. Green underline under the URL bar.
- **Hormozi lever:** Perceived Likelihood (real artifact) + Dream Outcome (become a builder).

---

**Angle I5 — Guarantee-led**

- **Hook:** PRD + demo by Day 7 or refund.
- **Primary text:**

  Day 1 we lock what the demo will show and what the PRD will spec. If Day 1 doesn't leave you with an idea and a scope you can act on, full refund.

  Days 2–6 you build the AI-native demo with Will copiloting, in the operating environment we set up together. Day 7 you have a PRD (1–2 pages) plus a running demo at a real URL plus the environment you keep.

  If any of that is missing on Day 7, full refund.

  $199. stuck.builders/greenfield

- **Headline:** PRD + demo Day 7 or refund
- **Description:** 7-day idea sprint. $199.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/greenfield`
- **Creative direction:** Photograph of a physical printed PRD — 1–2 pages, hand-annotated with green marker — next to a laptop showing a running demo URL. Not a mockup. Real document, real demo.
- **Hormozi lever:** Guarantee + Perceived Likelihood (real deliverables shown).

---

**Angle I6 — Imaginative solution wedge (NEW — primary Greenfield angle)**

- **Hook:** I have AI. I still don't know what to build.
- **Primary text:**

  AI democratized building. Almost nobody can conceive an idea worth building. That's the constraint that binds most would-be builders now — not implementation capacity. Ideas.

  Greenfield Build: 7 days. Day 1 we background-mine — Will interviews you on your work, your interests, the problems close to you. Days 2–6 we shape **the imaginative solution** together — an idea worth building, developed with Will's taste + judgment, pressure-tested against real people — and build the AI-native demo of it.

  Day 7 you walk out with the solution, a running demo of it at a real URL, a 1–2 page PRD, and the operating environment you keep. Solution + demo, or full refund.

  $199. stuck.builders/greenfield — Will reads live, reply usually in ~5 min.

- **Headline:** The imaginative solution, shipped as a demo
- **Description:** 7 days. Solution + PRD + AI-native demo. $199.
- **CTA:** Apply Now
- **Landing:** `stuck.builders/greenfield`
- **Creative direction:** Split screen — left: a Cursor / Bolt / Lovable window with a blank prompt. Right: a legal pad with 3 crossed-out ideas and one circled in green. Hand-drawn arrow from the pad to the tool.
- **Hormozi lever:** Dream Outcome (become a builder who conceives) + Perceived Likelihood (mechanism = background-mining + Will's taste).

---

## 4. TRACK B — SKOOL ADS (community, warm-first)

Skool ads run lighter. Community sells best to sprint graduates and warm audiences (see COMMUNITY.md §3). Target: retargeting sprint-page visitors + lookalikes of applicants + warm site visitors. **Do not run cold.** Landing page = the Skool group URL — leave as `{SKOOL_URL}` placeholder for Will to populate.

Three angles.

---

**Angle S1 — 7-day free trial**

- **Hook:** Try Ship Club free for 7 days.
- **Primary text:**

  The Skool community is the walking-pace back-end of Stuck to Shipped. ~5 Labs a week — live unstick and live idea sessions. Everyone watches. 5 hot seats per Lab get worked on active with Will. Searchable library organized by problem (Idea → Build → Deploy → Market). Community feed between Labs.

  7-day free trial. Cancel any time inside the trial, no charge. After the trial: $69/mo or $500/yr (annual saves $328).

  Nobody leaves where they came in.

  Join at {SKOOL_URL}.

- **Headline:** 7-day free trial. $69/mo after.
- **Description:** Weekly Labs pace. Try before you pay.
- **CTA:** Start Free Trial
- **Landing:** `{SKOOL_URL}`
- **Creative direction:** Screen recording of the Skool group homepage — real member count visible, real posts in the feed. No fabricated activity. Only run after real members + real feed activity exist.
- **Hormozi lever:** Effort (free trial removes risk) + Perceived Likelihood (try a Lab before paying).

---

**Angle S2 — Annual save $328**

- **Hook:** $500/yr locks the price. Saves $328.
- **Primary text:**

  Monthly is $69. Annual is $500 — that's $41.67/mo, saving $328 over the year.

  Same access either way: ~5 Labs a week (live unstick + live idea), 5 hot seats per Lab worked on active with Will, searchable library organized by problem, community feed. 7-day free trial on both.

  Sprint graduates come here for pace between walls. Cold audience: try the trial, come to a Lab, decide.

  {SKOOL_URL}

- **Headline:** $500/yr. Save $328. 7-day free trial.
- **Description:** Annual price-lock on Ship Club.
- **CTA:** Start Free Trial
- **Landing:** `{SKOOL_URL}`
- **Creative direction:** Simple math on a legal pad — $69 × 12 = $828, then $500 circled in green with "$328 saved" hand-written underneath.
- **Hormozi lever:** Dream Outcome (price lock) + Loss framing (leave $328 on the table if you go month-to-month and stay).

---

**Angle S3 — Weekly Labs + hot seats**

- **Hook:** ~5 Labs a week. 5 hot seats per Lab. Everyone watches.
- **Primary text:**

  You finished a sprint. Or you're between them. Or your wall is a 20-minute wall, not a $399 wall.

  Ship Club runs about 5 Labs a week — live unstick and live idea. You submit your project ahead of time. Will picks 5 for hot seats per Lab. Everyone else watches live and the replay gets tagged by problem in the library.

  $69/mo or $500/yr. 7-day free trial. Nobody leaves where they came in.

  {SKOOL_URL}

- **Headline:** Weekly Labs. Small room.
- **Description:** 5 hot seats per Lab + tagged library.
- **CTA:** Start Free Trial
- **Landing:** `{SKOOL_URL}`
- **Creative direction:** Screenshot of the hot-seat application form on Skool with a real (test) submission visible.
- **Hormozi lever:** Effort (low commitment + free trial) + Dream Outcome (walking pace).

---

**Angle S4 — Library-by-problem**

- **Hook:** Search the library by your wall, not by date.
- **Primary text:**

  Every Lab gets tagged by the problem it solved — Idea, Build, Deploy, Market — and inside that, the specific wall (auth, deploy, pricing, first users, framer-to-code, Supabase RLS). You search by your wall. You watch the closest replay before your next Lab.

  That library is why members stay. That library is the product.

  $69/mo or $500/yr. 7-day free trial. {SKOOL_URL}

- **Headline:** Search the library by your wall
- **Description:** Every Lab tagged by problem. 7-day free trial.
- **CTA:** Start Free Trial
- **Landing:** `{SKOOL_URL}`
- **Creative direction:** Screen recording of the Skool library search — user types "auth broke," results filter to tagged replays. Real content only (post-launch angle — hold until at least 4 replays exist).
- **Hormozi lever:** Perceived Likelihood (proof of pattern) + Effort (search vs. re-solve).

---

## 3E. CROSS-CUTTING ANGLES (any campaign)

Two angles that can be layered on any Track A or Track B campaign as creative rotations. They aren't tied to a single door.

**Angle X1 — Approval SLA (~5 min) — "Apply, hear back before you close the tab"**

- **Hook:** Apply, hear back before you close the tab.
- **Primary text:**

  Applications get read live. Will reads them himself, one at a time, usually inside 5 minutes. Not an autoresponder. Not a form-to-inbox queue. A real reply from the person who'll do the sprint.

  If Will's asleep or already inside a Day-1 call, it might take a couple hours. Never a full day.

  Apply where you left off.

- **Headline:** ~5-min reply. Will reads live.
- **Description:** Apply now. Reply before you close the tab.
- **CTA:** Apply Now
- **Landing:** dynamic to source page (Greenfield or Brownfield)
- **Creative direction:** Screen recording of Will's inbox — real (blurred-name) application arriving, being read, replied to. Real timestamps visible.
- **Hormozi lever:** Time Delay (near-zero) + Perceived Likelihood (Will himself).

**Angle X2 — Referral — "Bring a builder, both of you get $100 off"**

- **Hook:** Bring a builder. Both of you get $100 off.
- **Primary text:**

  Referral program is open to anyone — Ship Club member, sprint grad, first-time visitor.

  They apply with your link. We accept. They pay $99 for a Greenfield or $299 for a Brownfield — $100 off. When their sprint (or their Skool trial-to-paid) completes, your next sprint is $100 off too.

  Never expires. One credit per referred person. That's the whole program.

  Grab a link: stuck.builders/community — bring a builder.

- **Headline:** Bring a builder. Both of you get $100 off.
- **Description:** $100 credit both sides. Open to anyone.
- **CTA:** Learn More
- **Landing:** `stuck.builders/community` (referral section)
- **Creative direction:** Two hand-drawn stick figures on paper, arrow between them, "$100 off" written under each. Simple, honest.
- **Hormozi lever:** Effort (link + apply) + Dream Outcome (a builder friend inside the same room).

---

## 5. ANGLE STRUCTURE (reference)

For each new angle added later, use this format:

```
**Angle X — Name**
- **Hook:** short line
- **Primary text:** body (~3–5 short paragraphs, workshop voice, no hype)
- **Headline:** short
- **Description:** short with price
- **CTA:** Apply Now (or Join Ship Club for Track B)
- **Landing:** page URL
- **Creative direction:** what the image/video shows
- **Hormozi lever:** which piece of the value equation it's aiming at
```

Voice: direct, honest, engineer-facing. No hype. No emojis. Every word informs or helps the reader act.

---

## 6. RETARGETING ADS (warm traffic that saw a landing page but didn't apply)

Audience: 30-day page-view retargeting, excluding people who fired Lead. Ideally dynamic per source page. If dynamic isn't set up on Day 1, run three static audiences — `/brownfield` (with `#ceiling` and `#traction` variants collapsed to one audience) + `/greenfield` + `/community` — and swap the landing URL to match.

Three angles, each addressing a common objection.

---

**Angle R1 — Price objection (value stack)**

- **Hook:** $399 vs. one Upwork week that never ships.
- **Primary text:**

  You saw the page. You probably saw the price. Here's the frame that helps:

  One week of a freelancer on Upwork: $2,000–$4,000, they own the codebase, you don't learn. One AI-builder credit bill for a month of being stuck: $200 and no ship. One more course you won't finish: $99–$500 and nothing to show.

  Brownfield Build: $399. 7 days. Deployed next version at a real URL. Your code, your keyboard, Will's eyes.

  Apply where you left off.

- **Headline:** The math on $399
- **Description:** 7 days. Deployed. Your code.
- **CTA:** Apply Now
- **Landing:** dynamic to source page (`/brownfield` with anchor variants, or `/greenfield` — Greenfield variant uses "$199 vs. six months on the wrong thing")
- **Creative direction:** Simple stacked comparison, hand-written on lined paper: freelancer $3,000 · course $299 · sprint $399. Sprint circled in green.
- **Hormozi lever:** Perceived Likelihood (anchored against real alternatives) + reason-why for price.

---

**Angle R2 — Time objection (I don't have a week)**

- **Hook:** 15 minutes a day. That's the ask.
- **Primary text:**

  You have a job. You have a family. You don't have "a whole week" to build.

  You don't need one. Sprint mechanic is 45 minutes on Day 1, 15–30 minutes daily Tuesday–Saturday, 30 minutes Day 7. Total under 4 hours across the week. Plus up to 5 × 10-min unstick calls when you actually hit a wall.

  If you can protect 15 minutes a day, you can ship the next version.

  Apply where you left off.

- **Headline:** 15 min/day. Under 4 hours total.
- **Description:** Same daily window all week.
- **CTA:** Apply Now
- **Landing:** dynamic to source page
- **Creative direction:** Screenshot of a calendar with a single 15-minute block on repeat for the week, highlighted. Everything else grayed out.
- **Hormozi lever:** Effort (specific low ask) + Perceived Likelihood.

---

**Angle R3 — Is-this-for-me objection (fit)**

- **Hook:** Two questions decide if this is for you.
- **Primary text:**

  One: are you willing to apply, get reviewed, and hear "yes" or "not yet" — instead of pay-first and hope? If yes, the door is open.

  Two: do you want someone shipping alongside you — not for you, not instead of you — for one focused week? If yes, this is the fit.

  If either answer is no, save the $199 or $399. Genuinely.

  If both are yes, apply where you left off. Will reads live — reply usually in ~5 min.

- **Headline:** Two questions. Then apply.
- **Description:** Honest fit check.
- **CTA:** Apply Now
- **Landing:** dynamic to source page
- **Creative direction:** Two hand-written questions on paper, one on each side of the frame, checkbox next to each. Signal-green marks in both.
- **Hormozi lever:** Perceived Likelihood (self-qualification) + Dream Outcome (working alongside a partner).

---

## 7. CREATIVE ASSETS CHECKLIST

Everything on this list Will can produce on his phone or laptop in 20 minutes. Nothing requires a designer, stock service, or paid font license.

### Static image ideas

1. **Slot board photo.** A real screenshot of the site's slot board — 5 Idea slots + 5 Build slots as two independent counters. Cropped tight. No caption on the image.
2. **Day 1 scope on paper.** Hand-written on a legal pad, in the customer's own language, "one major feature or one major fix — locked Day 1." Signal-green marker underline.
3. **GitHub commit graph gap.** Real screenshot of a repo commit graph with a visible dead zone. Chalk-yellow annotation across it: "18 days."
4. **Localhost vs. deploy URL.** Two browser tabs — `localhost:3000` next to a real Vercel URL. Hand-drawn arrow between them.
5. **Credits usage screenshot.** Real Lovable/Bolt/v0 billing screen with the monthly credit spend visible. Red circle around the number. (Use Will's own account.)
6. **Printed PRD + running demo.** An actual printed PRD, 1–2 pages, hand-annotated in green marker, next to a laptop showing a real running demo URL. For `/greenfield` ads only.
7. **Analytics flatline.** Real analytics tab with 12 sessions this month, red circle around the number, hand-written note "9 of these are me." For `/brownfield#traction` ads only.
8. **Calendar block screenshot.** Cal.com or Google Calendar week view showing the 7-day sprint cadence — Day 1 (45 min BUILD / 30 min IDEA), daily sessions (15–30 min), Day 7 (30 min).
9. **The four filters written out.** Handwritten on off-white paper. F1 hard-line at the top. For fit-check and retargeting.

### Short-form video ideas (Reels / Stories / Feed)

1. **Will to camera, phone-shot, no ring light.** "I don't need another Cursor course, I need someone shipping with me" — 30 seconds, one take, no b-roll.
2. **Screen recording of the slot board filling.** Time-lapse of the current week's slot board being updated live as applications get accepted. No music.
3. **Day 1 scope being written.** 45-second timelapse: Will writing the customer's exact stuck-words on a legal pad, then circling "one major feature or one major fix." Sharpie sound audible.
4. **Real dormant repo demo.** Will opens a real (test) dormant repo, GitHub commit graph visible, then talks over the top for 20 seconds: "this is the wall the sprint is built for."
5. **Path A / Path B whiteboard.** Will drawing the two-path diagram on a whiteboard, live, one take, 45 seconds. For `/brownfield#ceiling` ads.
6. **Day-1 refund promise.** Will to camera, 20 seconds: "Day 1 doesn't leave you with a scope you can act on, you don't pay. That's on the page." No graphics.
7. **Greenfield Build honesty cut.** Will to camera, 30 seconds: "This sprint ships the imaginative solution — an idea worth building, developed with taste — plus a working AI-native demo of it and a PRD. Not a production app. A real running artifact you can put in front of people." For `/greenfield` only.
8. **Traction first-move.** Will to camera, 30 seconds: "We don't hand you a marketing plan. Day 7 you've actually sent the first outreach, had the first real conversation. That's the deliverable." For `/brownfield#traction` only.
9. **Reading a real application.** Will reading a real (anonymized) application aloud, then talking through why it's a yes or a "not yet." 60 seconds. Post-launch angle — hold for after 5+ applications.

---

## 8. WHAT NOT TO DO

- **No fake urgency.** No countdown timers, no "48 hours only," no "price goes up midnight" unless the live page actually says so and it actually does.
- **No fake reviews.** No fabricated star ratings, no fake testimonials, no "one member said…" quotes that weren't said.
- **No fake founder photos.** No stock people, no AI-generated faces, no rented photographers pretending to be Will. Will's actual face, phone-shot, is the standard.
- **No promising a production app on `/greenfield` ads.** Greenfield Build delivers the imaginative solution + PRD + a working AI-native demo (MVP-grade) + operating environment. Any Greenfield ad copy that implies a shipped production app as the Day-7 deliverable is a hard reject and must not ship. The word "demo" underpromises intentionally so the running MVP overdelivers. (Marketing-honesty rule.)
- **No promising "customers" on `/brownfield#traction` ads.** Traction milestone is first users reached, first outreach shipped, first conversation logged — not "paying customers." Promise the shipped move, not the outcome we can't guarantee.
- **No promising a "GTM plan" on `/brownfield#traction` ads.** It's a shipped move, not paper.
- **No reviving the founding-20 language on Skool ads.** That model was superseded 2026-07-09. Skool is $69/mo or $500/yr with a 7-day free trial. Do not run any variant of "$59 locked for life" ads.
- **No pay-first flow.** Every ad routes to a landing page that ends in the application form. No ad links to Stripe. No "buy now" copy.
- **No done-for-you positioning on any ad.** "We build it," "our team ships it," "we do the outreach" — all rejected. Delivery is they code, Will copilots. Period.
- **No guru language.** No "unlock," no "secrets," no "6-figure," no "in just," no "level up." Direct, honest, engineer-facing.
- **No emojis in ad copy.** Meta will still deliver fine. The workshop voice does not use them.
- **No fake press badges.** No "as seen in Forbes," no "featured in" logos we haven't earned. Silence beats a lie.
- **No pitching Skool ads cold.** Warm-first only (retargeting sprint-page visitors, lookalikes of applicants) per COMMUNITY.md §3.
- **No sweetening the offer to compensate for low application-to-payment.** Per §9: tighten the ICP, don't discount.

---

## 9. KILL CRITERIA & ITERATION

**Kill an ad set when:**

- **3-day CPL > $50** — pause the ad set. Rewrite the hook.
- **7-day CPL > $30 with fewer than 3 leads** — kill the creative, not just the ad set. It didn't land.
- **Frequency > 3.0 with declining CTR** — creative fatigue. Rotate to a new angle from the same campaign's list of five.
- **Application-to-payment rate < 20% for two weeks straight** — the ICP is loose. Tighten the ad copy (name the customer more sharply, not soften the offer). Do NOT drop the price or add bonuses to compensate — that's leaking value up the ladder.

**Rotate creative weekly.** Even winners get 3–4 weeks max at the same creative before fatigue kicks in on broad targeting.

**Duplicate before scaling.** When a creative wins, duplicate the ad set into a new one at a higher budget rather than editing the winning ad set in place. Preserves the learning phase.

**Weekly review cadence (Sunday, 30 minutes):**

1. Pull CPL and Lead volume per ad set.
2. Pull application-to-payment rate per ad set (from the review queue — email or Airtable per PRD §10).
3. Kill anything above threshold.
4. Move budget from bottom-quartile ad sets into top-quartile.
5. Queue one new creative per campaign for next week.

**Do not touch settings mid-learning-phase** (first 50 Lead events per ad set) unless the ad set is clearly dead — resetting learning is worse than waiting.

---

*Owner: Will. Paired with PRD §9 and §10, OFFER §Products, ICP.md, COMMUNITY.md §3. Update this file when a sprint price changes, when the Skool tier closes, when a new sprint launches, or when a creative angle beats the current control on CPL for two straight weeks (promote it to a canonical angle here).*
