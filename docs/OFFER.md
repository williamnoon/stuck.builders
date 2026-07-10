# Stuck to Shipped — Offer Doc

**Framing:** `docs/PRD.md` is the source of truth for the whole business (ladder,
sprints, forms, pages, ads, launch order). This doc is the **offer chassis** —
Hormozi's Value Equation and value-stack model applied to each product so
landing-page copy, ad hooks, and price frames stay coherent as they evolve.
When PRD and OFFER disagree, PRD wins; update this doc to match.

## The Value Equation

    Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort)

Every page pushes both numerators up (bigger outcome, more believable) and both
denominators down (faster, easier). If a page isn't doing all four, it's leaking
value.

## The Ladder & LTV

Text version of the ladder in PRD §2. One customer moves through it for life:
sprint to break a wall, drop to community for pace, sprint again at the next
wall.

    $199 GREENFIELD  →  $399 BROWNFIELD  →  $69/mo or $500/yr SKOOL
                                             (7-day free trial)
       │                    │                          │
     imaginative        unstuck +                 weekly Labs +
     solution +         deployed live             library + feed
     PRD + demo         next version
       └────────────────┴──────────────────────────────┘
                        ↓
              FORK (after any sprint)
         ┌───────────────┴───────────────┐
       keep sprinting            drop to Skool
       ($399, next wall)         ($69/mo · $500/yr, trial)

**LTV of the full chain:** $199 + $399 + $69/mo (or $500/yr) = **$598 upfront +
$69/mo indefinite** (annual saves $328/yr).

*"Launch Sprint" was retired. Traction is just a next version — a Brownfield
Build whose Day-7 target = "first 10 users reached" is still a Brownfield
Build. `/brownfield#traction` is a Brownfield hero variant angled at "shipped,
no users."*

## Products

Two sprint SKUs + one community. Same 7-day skeleton, same runbook, same
calendar (§PRD 3). Same productized setup-to-win operating environment
(prompts, docs, tools, skills we build together and the customer keeps using).
Only the work inside the containers changes.

*Terminology:* **Greenfield** = no code yet. **Brownfield** = existing project.
Users may not know the engineering terms — every product page defines them
visually + textually.

### Greenfield Build — `/greenfield` — $199

- **Wedge:** AI democratized building. Almost nobody can conceive an idea worth
  building. This sprint fills that constraint.
- **Dream outcome:** walk out with **the imaginative solution** — an idea worth
  building, shaped by Will's taste + judgment — plus the working AI-native demo
  of it, the PRD, and the operating environment to keep shipping.
- **The imaginative solution is the deliverable.** The PRD, the demo, and the
  operating environment are **artifacts** of that solution — the delivery
  vehicle, not the outcome. In an era where AI writes code on demand, the
  constraint that binds most would-be builders is not implementation capacity;
  it's the ability to conceive a solution worth implementing.
- **Likelihood levers:** four filters (§PRD 6) on Day 1, background-mining
  interview (finds closer, better ideas from the customer's own life), Will's
  taste + judgment applied through Days 2–6 of pressure-testing against real
  people, hands-on-their-keyboard build days, PRD + demo as proof artifacts.
- **Time delay:** 7 days.
- **Effort:** 30–60 min/day + one ~30 min Day 1 call.
- **Value stack (imaginative solution leads as the largest anchor):**
  - **The imaginative solution** — the shape of an idea worth building,
    developed with Will's taste + judgment across Day 1 background-mining and
    Days 2–6 of pressure-testing — **$1,000**
  - Day 1 background-mining call + four-filter pressure-test — $400
  - 1–2 page PRD documenting the solution — $400
  - Built AI-native demo (MVP-grade, running) of the solution — $600
  - Operating environment set up together (prompts, docs, tools, skills — kept
    for life) — $400
  - Next-3-steps handoff — $200
  - **Total: $3,000 → $199** (15× multiplier, well above the >6× rule).
- **Guarantee stamp:** `SOLUTION + DEMO / OR REFUND`.
  > "If you don't walk away with an imaginative solution you believe is worth
  > building, a working AI-native demo of it, and the operating environment we
  > built together by the Day 7 delivery call, I refund the full $199. All of
  > it. A 'don't build this' verdict — with the demo as a pivot artifact —
  > still counts as delivery, but if you don't get the deliverables at all,
  > you don't pay."
- **Marketing honesty:** we don't guarantee the idea will make money. We
  guarantee we help you conceive a solution *worth building*, prove it with a
  working demo, and equip you with the environment to keep shipping. Promise
  "imaginative solution + PRD + built demo," not "an app in 7 days."

### Brownfield Build — `/brownfield` — $399  ← core product

- **Dream outcome:** unstuck + your next version deployed live at a real URL by
  Day 7.
- **Likelihood levers:** Day 1 scope-lock in the customer's own words, adaptive
  daily cadence (rhythm shaped by what the scoped feature/fix actually needs),
  up to 5 unstick calls × 10 min, Day 7 ship review with the deployed URL.
- **Time delay:** 7 days.
- **Effort:** 15–30 min/day + up to 5 unstick calls (10 min each).
- **Scope constraint:** one *major* feature OR one *major* fix. Locked Day 1,
  no mid-sprint renegotiation.
- **Value stack (identical across all Brownfield hero variants):**
  - Day 1 scoping call + Version Map (locked scope in your own words) — $400
  - 6 days of adaptive daily co-working sessions — $1,800
  - Up to 5 unstick calls × 10 min — $500
  - Deployment to production URL — $400
  - Session recordings + next-version roadmap — $200
  - Operating environment kept (prompts, docs, tools, skills) — $400
  - **Total: $3,700 → $399.**
- **Guarantee** (identical across all Brownfield hero variants — `SHIPPED / OR
  REFUND`):
  > "Deployed by Day 7. Or your money back. If your next version isn't live on
  > a real URL by the Day 7 ship review — deployed, working, visitable — I
  > refund the full $399. Not part of it. All of it. No form, no back-and-
  > forth, no fine print. One reply and it's done."

### Brownfield Build — Ceiling variant — `/brownfield#ceiling` — $399

Same SKU, same value stack, same guarantee. Angle-specific hero + one
supporting paragraph.

- **Angle:** off the ceiling. TRAPPED → SHIPPED. Lovable / Bolt / v0 / Replit
  users hitting the platform ceiling — fix in place or clean move to code you
  own.
- **Two-path framing:** decided Day 1 — fix on the platform vs. clean move to
  Next.js on Vercel with the repo in your GitHub.

### Brownfield Build — Traction variant — `/brownfield#traction` — $399

Same SKU, same value stack, same guarantee. Angle-specific hero + one
supporting paragraph.

- **Angle:** first users reached. Next-version target = a traction milestone
  (5–10 real potential users conversed with, one angle proven live, first
  outreach shipped) instead of a code feature.
- **Day 1 scope-lock** on the traction milestone as the Brownfield target.
  Same daily cadence, same 5 × 10-min unstick calls, same Day 7 ship review
  (deployed = the traction milestone shipped).

### Skool Community — `/community` — $69/mo or $500/yr (7-day free trial)

- **Dream outcome:** walking-pace momentum after (or instead of) a sprint. Never
  stall alone; never re-buy the whole engine to keep moving.
- **Likelihood levers:** ~5 weekly **Labs** (live group work sessions — unstick
  + idea), everyone watches, 5 hot seats per Lab worked on active with Will,
  searchable library by problem taxonomy (Idea → Build → Deploy → Market),
  community feed between Labs.
- **Time delay:** ongoing.
- **Effort:** show up when stuck.
- **Value stack:**
  - Weekly Labs (unstick + idea, ~5/wk) — $600/mo
  - 5 hot-seat picks per Lab — $500/mo
  - Searchable library organized by problem — $200/mo
  - Community feed with Will's replies — $300/mo
  - Same operating environment as paid sprints — $400/mo
  - **Total: $2,000/mo value → $69/mo (or $500/yr = ~$42/mo).**
- **Pricing (live on Skool platform):** $69/mo or $500/yr. Annual saves $328/yr.
- **Trial:** 7-day free trial. Cancel any time inside the trial, no charge.
  Cancel after, no clawback.
- **Reason-why-for-price:** $69/mo is the monthly cost to keep the operating
  engine running at group pace — weekly Labs, hot-seat curation, library
  maintenance. $500/yr locks the price for a year and saves $328.
- **Members apply for hot seats** — not first-come. Same selection lens as
  sprints (§PRD 5–6), 5 per Lab. Hot-seat SLA: applications close Sunday, Will
  picks by Sunday for the following week's Lab. This is different from the
  sprint-application ~5-min SLA.
- **Two 5-caps, do not conflate:** 5 hot seats per Skool Lab (this cap); 5
  concurrent active paid sprints *per SKU* (that cap, tracked in `lib/slots.ts`).
- **Position:** not sold cold. Back-end that retains sprint graduates and turns
  a one-shot buyer into $69/mo (or $500/yr) indefinite. Positioning line:
  *"Nobody leaves where they came in."*
- **Entry copy (verbatim, source = Skool about page):** "You have an idea
  you've never started. Or an app that's half-built and fighting you. Or
  something you shipped that nobody uses. Stuck to Shipped gets you unstuck —
  and you feel it the same week."

*(The founding-20 pricing model was retired 2026-07-09. Skool platform's own
$69/$500/trial pricing is now live and controls billing.)*

## Referral Program (cross-cutting)

**Both parties get $100 credit.** Open to anyone — Ship Club member, sprint
grad, first-time visitor. Never expires. Applies once per referred person.

- **Mechanism:** `stuck.builders/?ref=CODE` URL → cookie `ref_code` (60 days) →
  auto-included in application form payload → included in acceptance email.
- **Referred party** gets $100 off their first Greenfield ($99) or Brownfield
  ($299), auto-applied at application time.
- **Referrer** gets $100 credit on their next sprint once the referred party
  completes their first paid sprint OR their Skool 7-day-trial-to-paid
  conversion.
- No leaderboard, no gamification, no expiration. Just a working link, both
  sides win.

**Copy (source of truth for `/community`, product pages, and any referral
landing):**
> Bring a builder. Both of you get $100 off. They apply with your link, we
> accept, they pay $99 for a Greenfield or $299 for a Brownfield. When they
> finish, your next sprint is $100 off. Open to anyone — Ship Club member,
> sprint grad, first-time visitor. Never expires. Applies once per referred
> person.

## Setup-to-win operating environment (both sprints + Skool)

Not a Day-7 handoff. The prompts, docs, tools, and skills are the operating
environment we build **together** from Day 2 on. The customer uses them during
the sprint, and they persist after. Productize it as much as possible —
templates, standard prompt packs, standard tool configurations, standard skill
packs — so Will's time inside a sprint is spent on the customer's specific
work, not rebuilding the operating environment from scratch each time.

**Marketing framing:** "you leave inside the operating environment we shipped
in," not "you leave with a toolkit we hand over."

## Delivery style (both sprints)

**They code. Will copilots.** Will guides, demonstrates AI-native moves worth
watching, and sets up the operating environment, but does not write the
customer's code for them. Never propose done-for-you positioning, even if it
would convert better — it breaks the actual delivery model.

**Operator identity:** *"a builder who ships with AI every day, with taste
about what deserves to be built."* AI-native, not consultant. The AI-native
half validates capability (Brownfield). The taste half validates judgment
(Greenfield).

## Apply-first (values, not scarcity theater)

Sprints are **applied for, not bought**. Two real reasons — not marketing
pressure:

1. **Real 5-slot/SKU cap.** Will delivers each sprint personally. First
   accepted, first locked. See PRD §5.
2. **The four filters (PRD §6).** F1 is a hard line: not illegal / not harmful
   / not predatory — declined, no exceptions. F2–4 (real problem / beneficial /
   close to you) are Will's coaching lens, applied with judgment. Filtering
   before money changes hands is more honest than refunding after.

**Approval SLA: ~5 minutes.** Will reads applications live. Occasional
exception up to a few hours if Will is inside a Day-1 session — but never a
full day.

**Fallback condition:** if apply-first proves too slow for ad conversion in
practice, fall back to pay-first + automatic refund for projects that fail F1
or that Will declines. Default at launch is apply-first (PRD §5, §10).

## Cross-cutting rules

- **Scarcity:** 5 slots per SKU (5 Greenfield + 5 Brownfield, two independent
  counters), first-accepted-first-locked. Live slot board on every page
  rendering both counters, not a single combined bar.
- **Urgency:** applications reviewed in ~5 minutes (Will reads live). "Apply
  now, hear back before you close the tab." Next week fills first.
- **Reason-why for price:** "I only take 5 per sprint kind per week and want
  them full." Ties price to the cap, not to greed.
- **Guarantee:** every product has one. Non-negotiable. Written on the page.
- **Value stacks:** every include line has a dollar anchor. Total > 6× price.
  All Brownfield hero variants render the SAME value stack.
- **Proof:** process-proof (calendar screenshots, live slot board, Version Map
  templates) until real testimonials exist. Then one real testimonial per page,
  in the price frame. Never fabricate.
- **Operator identity:** *"a builder who ships with AI every day, with taste
  about what deserves to be built."*

## Naming

- **Brand:** Stuck to Shipped.
- **Products:**
  - Brownfield Build — `/brownfield` (with `#ceiling` and `#traction` hero
    variants)
  - Greenfield Build — `/greenfield`
  - Skool Community — `/community` (Skool URL in `lib/config.ts`)
- **Root:** `/` redirects to `/brownfield` (primary cold-traffic destination).
- **Retired URLs (301 redirects):** `/idea` → `/greenfield`, `/out` →
  `/brownfield#ceiling`, `/grow` → `/brownfield#traction`.
- Two SKU families (Greenfield + Brownfield) with two Brownfield hero variants
  for different stuck points. Skool is the community back-end.

## What to change when

- **Price change** → update, in one commit: the page copy, the `<ValueStack>`
  `price` prop, `lib/config.ts`, PRD.md (§2 ladder + §3 mode), and this doc.
  LTV number updates in PRD §2 and OFFER §"The Ladder & LTV" only.
- **New include / bonus** → add a line to `<ValueStack>` with a dollar anchor;
  keep total > 6× price; reflect in this doc's Products section.
- **Testimonial arrives** → drop into `Testimonial.tsx` (or the page's price
  frame above `<ValueStack>`). One per page.
- **Skool URL change** → `lib/config.ts` only; pages read from there.
- **Sprint slot count change** → `TopBar` + `SlotBoard` (two counters!) +
  reason-why line + PRD §5.
- **Apply-first → pay-first fallback flip** → PRD §5 + §10 + this doc's
  Apply-first section + form CTAs on every page.
