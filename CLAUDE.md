# CLAUDE.md — Stuck to Shipped

> Instructions for every Claude session (main agent + subagents) working in this repo.
> These rules override defaults. Subagents must be briefed on them in every dispatch.

---

## 1. Source of truth

`docs/PRD.md` is the Master PRD — the single source of truth for the whole business (ladder, sprint modes, Skool, apply-first, four filters, marketing honesty, referral). Read it before making any decision that touches offer, copy, forms, pages, or delivery.

Current business shape (as of 2026-07-09 marketing plan Wave 1): two products, both Builds — **Greenfield Build** ($199, no code yet) and **Brownfield Build** ($399, existing project, with `#ceiling` and `#traction` hero variants). **Skool ($69/mo or $500/yr, 7-day free trial)** is retention. **~5-min approval SLA** (Will reads live). **Referral:** $100 credit both sides, open to anyone.

Cascading source-of-truth docs, all under `docs/`:
- `OFFER.md` — offer chassis (Hormozi Value Equation, value stacks, guarantees, ladder LTV, Greenfield imaginative-solution frame, Referral)
- `ICP.md` — ideal customer profile per offer (Greenfield / Brownfield / Skool)
- `FILTERS.md` — the four filters (F1 hard line, F2–4 lens)
- `COMMUNITY.md` — Skool $69/mo · $500/yr · 7-day trial, Labs, hot-seat mechanics, Day-7 pitch
- `FORMS.md` — every form + change-control checklist (Q1 = Greenfield / Brownfield, `ref_code`, UTM fields)
- `ADS.md` — Meta ads library (BROWNFIELD, BROWNFIELD-CEILING, BROWNFIELD-TRACTION, GREENFIELD, Skool trial, cross-cutting SLA + Referral angles)
- `SKOOL_POSTS.md` — Ship Club feed templates (Labs terminology, Template 7 = trial + annual save)
- `ENTRY.md` — free-course top-of-funnel plan
- `ROADMAP.md` — drift log + Wave tracking for the marketing plan execution

If any doc conflicts with the live site, **the live site wins** and the doc gets updated. If any doc conflicts with `PRD.md`, `PRD.md` wins.

---

## 2. Hormozi three-tier framework alignment (HARD RULE)

Every decision — copy edit, offer change, page add, doc write, ad angle, funnel step, product tier — must sit inside Alex Hormozi's three-tier framework and cannot violate it:

**Tier 1 — $100M Offers.** Any offer we ship must move the Value Equation the right direction:
`Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort)`.
Every offer must have: named dream outcome, likelihood levers (proof/process/guarantee), fixed time delay, low/stated effort, itemized value stack with dollar anchors totaling >6× price, a guarantee, scarcity, a reason-why for the price, and (once we have them) social proof. Do not remove any of these to "clean things up."

**Tier 2 — $100M Leads.** Every top-of-funnel decision must use one of Hormozi's four core lead-getting methods (warm outreach, cold outreach, content, paid ads) or a lead-magnet variant that feeds them. Never rely on a single channel. Every lead capture must have a mechanism (magnet), a nurture path, and a conversion asset. The four "give value first" magnet formats are canon: free info, free tool, free service, free discount.

**Tier 3 — $100M Models.** Every product/offer decision must be evaluated on the LTV/CAC engine and the Value Ladder: attraction offer → core offer → continuity → back-end. Our ladder: **Greenfield Build ($199) → Brownfield Build ($399, core, with `#ceiling` and `#traction` hero variants on the same page) → Skool ($69/mo or $500/yr with 7-day free trial, walking-pace continuity)**. Launch Sprint is retired — traction is a Brownfield hero variant, not a separate SKU. Referral flywheel ($100 credit both sides, open to anyone, never expires) sits across the whole ladder. Do not propose product tiers that break this ladder or create a dead-end (no continuity, no upsell path).

If a proposed change violates any of these tiers, refuse or push back — don't ship it silently. Note the framework conflict in the response.

---

## 3. Marketing-honesty rule (HARD RULE)

Every page promises its REAL deliverable.
- **Greenfield Build** delivers **the imaginative solution** — an idea worth building, shaped with Will's taste + judgment — as: PRD + built AI-native demo (MVP-grade) + operating environment. Never "an app in 7 days," never "we build it for you." The PRD, demo, and operating environment are **artifacts** of the imaginative solution; the solution itself is the outcome.
- **Brownfield Build** delivers **unstuck + a deployed live next version at a real URL** (scope: one *major* feature or one *major* fix, locked Day 1).
- **`/brownfield#traction`** is a Brownfield Build hero variant angled at "shipped, no users"; its Day-7 target is a traction milestone (first users reached, one angle proven live) — not a separate SKU, not a GTM-plan-only deliverable.
- **`/brownfield#ceiling`** is a Brownfield Build hero variant angled at Lovable/Bolt/v0/Replit ceiling-hitters — same $399, same deployed-live promise, angled hero.
- **Skool** delivers **weekly Labs** (~5/week, 5 hot seats per Lab), searchable library, community feed. **$69/mo or $500/yr with a 7-day free trial.** No founding tier.
- **Approval SLA:** **~5 minutes.** Will reads applications live. The promise is "apply, hear back before you close the tab." Skool hot-seat SLA is different — picks by Sunday for the following week's Lab.
- **Referral:** $100 credit both sides, open to anyone, never expires. Sits across the ladder.

Do not blur these. Any copy suggestion that promises what a sprint does not deliver gets rejected. Any copy suggestion that positions delivery as done-for-you ("we build it," "our team ships") gets rejected — the real model is "they code, Will copilots."

**Operator identity (extended):** *"a builder who ships with AI every day, with taste about what deserves to be built."* The AI-native half validates capability (Brownfield). The taste half validates judgment (Greenfield).

**"Launch Sprint" is retired.** If a subagent or draft references a Launch Sprint SKU, correct it — traction is a Brownfield hero variant.

**Founding-20 language is retired.** If a subagent or draft references $59/mo founding, first-20, or a founding countdown, correct it — Skool is $69/mo or $500/yr with a 7-day free trial, live on the Skool platform.

---

## 4. Apply-first is intentional (do not "fix" it)

Sprints are applied for, not bought directly. Two reasons: (a) real 5-slots/week capacity cap, (b) the four filters as a values gate. The Meta Pixel is optimized for the `Lead` event (application submitted), not Purchase, because Purchase happens after acceptance. Do not propose pay-first flows unless the current apply-first flow is proven a bottleneck with real data. If a subagent suggests "just add checkout," refuse and cite this section.

Fallback condition (documented in `docs/OFFER.md`): if apply-first proves too slow for ad conversion at scale, we switch to pay-first + refund-for-declined. That's a Will decision, not an agent decision.

---

## 5. The four filters are values, not marketing

F1 (not illegal / harmful / predatory) is a hard auto-reject gate. F2–4 (real problem, valuable, close to you) are Will's coaching lens. Never frame the filters as a scorecard or a sales gimmick. They are what makes the guarantee possible — Will only works on projects he stands behind.

---

## 6. Voice & copy conventions

- Direct. Honest. Engineer-facing. No hype.
- Every word informs or helps the reader act.
- Handwritten notes (Caveat font) carry information or mirror the customer's inner voice.
- Never write emojis in files unless explicitly asked.
- Never invent testimonials, metrics, or founder credentials. Pre-launch = process proof (slot board, day-by-day breakdown, guarantee) only.
- Prices, deliverables, and offer names must match across `PRD.md`, `OFFER.md`, live pages, and `lib/config.ts`. Change all together or don't change at all.

---

## 7. Tech & workflow rules

- Repo layout: Next.js 15 monorepo. `apps/web/` is the site. Copy lives in TSX/React components (no CMS).
- Prices in `apps/web/lib/config.ts` — `PRICES = {idea: 199, build: 399}` (internal keys retained for API/pixel contract stability; external labels are Greenfield / Brownfield via `PRODUCT_LABEL` map). Skool constants: `SKOOL_PRICE_MONTHLY = 69`, `SKOOL_PRICE_ANNUAL = 500`, `SKOOL_TRIAL_DAYS = 7`. `SKOOL_FOUNDING_CAP` retired. `OPERATOR_IDENTITY = "a builder who ships with AI every day, with taste about what deserves to be built"`.
- Slot state in `apps/web/lib/slots.ts` (must track two independent counters: 5 Greenfield + 5 Brownfield). Skool URL in `SKOOL_URL` (env-driven when filled).
- Route structure: `/` → 302 `/brownfield`; product pages at `/greenfield`, `/brownfield` (with `#ceiling` and `#traction` anchor variants); community at `/community`. 301 redirects: `/idea` → `/greenfield`, `/out` → `/brownfield#ceiling`, `/grow` → `/brownfield#traction`.
- Referral: `?ref=CODE` → cookie `ref_code` (60d) → included in application POST payload → applied at Stripe payment link stage (manual by Will during acceptance).
- Do not add npm packages without checking existing deps first.
- Do not migrate to a CMS or refactor the file layout without a specific request.
- Do not restyle — the workshop aesthetic is on-brand.

---

## 8. Subagent briefing requirement

When dispatching any subagent (research, code write, doc write, review), the prompt MUST include a short version of §2 (Hormozi three-tier alignment) and §3 (marketing honesty) and §4 (apply-first is intentional). Subagents cannot make offer/copy/funnel decisions in a vacuum.

Suggested one-paragraph brief to paste into every subagent prompt:

> This repo is Stuck to Shipped. Read `docs/PRD.md` and `CLAUDE.md` before making any decision. Every proposal must align with Hormozi's three tiers ($100M Offers, $100M Leads, $100M Models). Every page must promise its REAL deliverable (marketing-honesty rule). Apply-first is intentional; do not propose pay-first flows. Do not commit, push, or deploy — only write/edit files.

---

## 9. Change-control checklist

When touching pricing, offer structure, or naming — update ALL of these together in one pass:
1. `docs/PRD.md`
2. `docs/OFFER.md`
3. `docs/COMMUNITY.md` (if Skool spec changes)
4. `docs/ICP.md` (if ICP language changes)
5. `docs/FORMS.md` (if application form changes)
6. `docs/ADS.md` (if campaign structure, price, SLA, or URL changes)
7. `docs/SKOOL_POSTS.md` (if Skool pricing / Labs terminology / templates change)
8. Live page(s) — `apps/web/app/{greenfield/page,brownfield/page,community/page,apply/page,thanks/page,layout}.tsx`
9. `apps/web/lib/config.ts` (`PRICES`, `SprintKind`, `PRODUCT_LABEL`, `PRODUCT_TAGLINE`, `SKOOL_PRICE_MONTHLY`, `SKOOL_PRICE_ANNUAL`, `SKOOL_TRIAL_DAYS`, `OPERATOR_IDENTITY`)
10. `apps/web/lib/slots.ts` (two independent counters: Greenfield + Brownfield — internal keys `idea` + `build`)
11. `apps/web/components/ValueStack.tsx` items (if bonuses/inclusions change; Greenfield stack leads with the imaginative-solution anchor)
12. `apps/web/components/ApplicationForm.tsx` (Q1 options: Greenfield + Brownfield labels, internal `idea` + `build` values; `launch` is retired; `ref_code` + UTM fields in payload)
13. `apps/web/app/api/apply/route.ts` (`sprintKindLabel`, `isSprintKind`, `ref_code` handling in email)
14. `apps/web/next.config.js` (redirects for `/`, `/idea`, `/out`, `/grow`)
15. Auto-memory: `~/.claude/projects/-Users-willnoon-Documents-GitHub-stuck-builders/memory/business_prd.md` if ladder/prices change.
16. `docs/ROADMAP.md` — log any deferred drift as a `TODO:` here.

If you only touch a subset, log the drift as a `TODO:` in `docs/ROADMAP.md`.
