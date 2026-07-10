# ROADMAP — drift log

*Where doc/code updates are tracked when the change-control checklist (`CLAUDE.md` §9) can't be executed in one pass. Each TODO gets closed by a commit that updates the affected files.*

---

## 2026-07-09 marketing plan execution — Wave 1 (docs)

Plan file: `/Users/willnoon/.claude/plans/humming-floating-lighthouse.md`

Wave 1 landed the docs-only pass. Every doc in `docs/` and `CLAUDE.md` now reflects:

- **Rename:** Idea Sprint → **Greenfield Build** ($199); Build Sprint → **Brownfield Build** ($399). Internal `SprintKind` keys (`idea` / `build`) intentionally preserved in config to keep API/pixel contracts stable — labels only changed externally.
- **Greenfield reframe:** the imaginative solution is the deliverable; PRD + demo + operating environment are artifacts. Value stack leads with a $1,000 anchor for the imaginative solution. Guarantee stamp updated to `SOLUTION + DEMO / OR REFUND`. Operator identity extended: "a builder who ships with AI every day, with taste about what deserves to be built."
- **Skool repricing:** $59/mo founding-20 retired; now $69/mo or $500/yr with a 7-day free trial (live on Skool platform). Config constants: `SKOOL_PRICE_MONTHLY = 69`, `SKOOL_PRICE_ANNUAL = 500`, `SKOOL_TRIAL_DAYS = 7`. `SKOOL_FOUNDING_CAP` retires.
- **Approval SLA:** 24 hrs → **~5 min** (Will reads live). New Track A ad angle: "Apply, hear back before you close the tab." Skool hot-seat SLA is different and NOT changed (Sunday picks for the following week's Lab).
- **URL structure:** `/` → 302 `/brownfield`; new routes `/greenfield`, `/brownfield` (with `#ceiling` and `#traction` anchor variants), `/community`. 301 redirects: `/idea` → `/greenfield`, `/out` → `/brownfield#ceiling`, `/grow` → `/brownfield#traction`.
- **Referral program (NEW):** $100 credit both sides, open to anyone, never expires. Mechanism = `?ref=CODE` → cookie `ref_code` (60 days) → payload → Stripe discount at acceptance.
- **Labs:** Skool live sessions renamed **Labs** (working name); "Group Unstick" retired.
- **SKOOL_POSTS Template 7:** founding-20 countdown archived; replaced with 7-day trial + annual-save reminder template.

### Docs updated in this wave

- [x] `docs/PRD.md` — full rewrite (§1–§12, added §12 Referral)
- [x] `docs/OFFER.md` — full rewrite (products, Greenfield stack reframe, Skool section, Referral cross-cutting)
- [x] `docs/COMMUNITY.md` — full rewrite (retired founding-20, added trial mechanics, Labs terminology, Day-7 pitch rewrite)
- [x] `docs/ICP.md` — renames, imaginative solution wedge, "I have AI. I still don't know what to build." verbatim quote added, ~5-min SLA note
- [x] `docs/FORMS.md` — Q1 labels + help lines, ~5-min SLA, `ref_code` + UTM payload extension, review workflow updated
- [x] `docs/ADS.md` — full campaign rename (BROWNFIELD, BROWNFIELD-CEILING, BROWNFIELD-TRACTION, GREENFIELD), landing URLs updated, Track B Skool rewritten (trial + annual + Labs), new §3E cross-cutting angles (SLA X1, Referral X2), new Angle I6 (imaginative solution wedge)
- [x] `docs/SKOOL_POSTS.md` — Template 7 archived + replaced, Labs terminology, retired founding-20 language
- [x] `docs/ENTRY.md` — Skool pricing references throughout, product renames
- [x] `docs/ROADMAP.md` — this section
- [x] `CLAUDE.md` — §1 doc list, §2 Tier 3 ladder, §3 marketing honesty, §7 config paths, §9 change-control file list

### Waves NOT executed in this pass

- [ ] Wave 2 — config layer + shared components (`apps/web/lib/config.ts`, TopBar, SlotBoard, Footer, ApplicationForm, api/apply, apply/thanks/layout)
- [ ] Wave 3 — new pages + graphics (`/greenfield`, `/brownfield` with anchor variants, `/community` full rewrite, `greenfield.svg`, `brownfield.svg`)
- [ ] Wave 4 — redirects + cleanup (`next.config.js` redirects, delete retired route files)
- [ ] Wave 5 — referral wiring (`?ref=CODE` middleware, cookie, payload extension, api handler)
- [ ] Wave 6 — measurement wiring (UTM parsing, GA4, extended Meta Pixel Lead payload)
- [ ] Wave 7 — verification (`pnpm tsc --noEmit`, `pnpm build`, browser walkthrough, grep sweep)

---

## Drift from the 2026-07-08 alignment pass

The following model corrections landed in the canonical docs (`PRD.md`, `OFFER.md`, `COMMUNITY.md`, `ICP.md`, `FORMS.md`, `FILTERS.md`, `CLAUDE.md`) and in auto-memory (`~/.claude/memory/business_prd.md`). The Next.js site and config **have not yet been updated** — the live site still reflects the pre-correction model. Until closed, treat the docs as source of truth and the site as legacy.

Corrections applied in docs:

- Launch Sprint SKU retired. `/grow` is now a Build Sprint variant for "shipped, no users."
- Build Sprint price: $499 → **$399**.
- Idea Sprint deliverable now includes a **built AI-native demo (MVP-grade)** — not just PRD + go/no-go.
- Idea Sprint Day 1 length: 90 min → **~30 min call**.
- Build Sprint scope: locked Day 1 in the customer's own words = **one *major* feature or one *major* fix.**
- Build Sprint unstick calls: 15 min → **10 min** each, up to 5/week.
- Skool price: $99/mo → **$59/mo founding, first 20 members locked for life**, rises after.
- Skool founding cap: 100 → **20**.
- Sprint slot cap: **5 concurrent active sprints per SKU** (5 Idea + 5 Build simultaneously), not 5 total.
- Delivery style principle: **they code, Will copilots**. Hands on their keyboard. Never done-for-you (see `~/.claude/projects/.../memory/feedback_delivery_style_they_code.md`).
- Operating environment (prompts, docs, tools, skills) is built together during the sprint and kept after — not a Day-7 handoff. Productize as much as possible.
- Operator identity: *"a builder who ships with AI every day"* — AI-native, not consultant.

### TODO — Next.js site + config (Phase C from the alignment plan)

Plan file: `/Users/willnoon/.claude/plans/humming-floating-lighthouse.md`

- [x] **`apps/web/lib/config.ts`** — landed 2026-07-08. `PRICES = { idea: 199, build: 399 }`, `SKOOL_PRICE = 59`, `SKOOL_FOUNDING_CAP = 20`, `SprintKind = "idea" | "build"`, hoisted `sprintKindLabel()` + `sprintPriceLabel()` + `OPERATOR_IDENTITY`.
- [x] **`apps/web/lib/slots.ts`** — landed 2026-07-08. Two independent counters via `getSlots(kind, now)` and `getTopBarStatus()` returning `{ idea, build }`. `TopBar` + `SlotBoard` both consume per-SKU state.
- [x] **`apps/web/app/page.tsx`** — landed 2026-07-08. $399, one major feature or major fix, scope locked Day 1 in own words, 10-min unstick calls, operating environment stack item, `<SlotBoard kind="build" />`, cross-links to `/idea` + `/out` + `/grow`.
- [x] **`apps/web/app/idea/page.tsx`** — landed 2026-07-08. Day 1 = 30 min call, deliverable = PRD + built AI-native demo + operating environment, ICP verbatim phrasings, guarantee stamp = "PRD + DEMO / OR REFUND", `<SlotBoard kind="idea" />`.
- [x] **`apps/web/app/out/page.tsx`** — landed 2026-07-08. $399, Lovable/Bolt angle preserved, 10-min unstick, operating environment stack item, `<SlotBoard kind="build" />`, cross-link to `/grow`.
- [x] **`apps/web/app/grow/page.tsx`** — landed 2026-07-08 (NEW). Build Sprint traction door: $399, "shipped → first users reached in 7 days," Day-7 target = traction milestone shipped, guarantee stamp = "TRACTION / OR REFUND".
- [x] **`apps/web/app/community/page.tsx`** — landed 2026-07-08 (NEW). Ship Club landing. Verbatim Skool entry copy, $59/mo founding, first 20 locked for life, positioning line, sprint upsell to `/`, two 5-caps distinction.
- [x] **`apps/web/components/ValueStack.tsx`** — no change needed. Idea + Build stacks updated in-place on each page. Launch stack never existed as a component variant.
- [x] **`apps/web/components/ApplicationForm.tsx`** — landed 2026-07-08. Q1 = two options (Idea + Build), prices from `sprintPriceLabel()`, label from `sprintKindLabel()`. No `launch` branches.
- [x] **`apps/web/app/api/apply/route.ts`** — landed 2026-07-08. `isSprintKind` accepts `"idea" | "build"` only. Imports `sprintKindLabel` from config (dedup).
- [x] Nav / footer / cross-link audit — landed 2026-07-08. Footer rewritten ("5 Idea + 5 Build slots a week · Ship Club · questions"). Cross-links added on `/`, `/out` pointing to sibling Build doors + `/idea`.
- [x] **`apps/web/app/apply/page.tsx`** — copy updated ("5 Idea + 5 Build slots a week").
- [x] **`apps/web/app/thanks/page.tsx`** — imports `sprintKindLabel` from config; shows correct Build $399 label.
- [x] **`apps/web/app/layout.tsx`** — root metadata description updated to reflect two-SKU model + $199/$399.
- [x] **`pnpm build`** — passes clean. All 8 routes generate.

### TODO — copy/positioning follow-ups

- [x] **Build Sprint ICP language** — resolved by full Hormozi-structured page rewrites on `/`, `/out`, `/grow`; ICP phrasings woven into each door's "who this is for" section. No separate verbatim block needed.
- [x] **Four filters sharpening pass** — resolved as internal-only per Will's read; four filters stay unchanged on `/idea` (client-facing) and internal to Will (delivery productization).
- [x] **Ads copy revision** — `docs/ADS.md` rewritten 2026-07-08 (subagent). Four Track-A campaigns (BUILD, BUILD-OUT, BUILD-TRACTION, IDEA) + Track B (Skool). Hormozi-structured. Zero references to Launch Sprint / $499 / $99/mo / PRD-go-no-go.
- [x] **Post-founding-20 Skool price** — intentionally not spec'd. `/community` says "$59/mo founding, first 20 locked for life; rises as room fills." Will decides the post-cap number when the tier is close to full.
- [x] **Founding-20 rollout copy triggers** — CLOSED 2026-07-09 by marketing plan Wave 1. The founding-20 pricing model was superseded when Skool platform pricing went live at $69/mo or $500/yr with 7-day free trial. Counter file (`docs/community-members.md`) and 15/18/20 landing-copy triggers no longer apply. See `COMMUNITY.md` §8 (Trial → Paid Conversion) for the replacement mechanic.

### Verification (once TSX + config updates land)

Grep sanity checks:

- `grep -R "Launch Sprint" apps/ docs/` → zero hits.
- `grep -R "\\$499" apps/ docs/` → zero hits for sprint contexts (may still appear as historical LTV before the correction).
- `grep -R "PRD + go/no-go" apps/ docs/` → zero hits.
- `grep -R "app in 7 days" apps/ docs/` → zero hits.
- `grep -R "SKOOL_PRICE.*99" apps/` → zero hits.
- `grep -R "15 min" apps/ docs/` for unstick-call contexts → zero hits.
- `grep -R "90 min" apps/ docs/` for Idea Day 1 contexts → zero hits.

Cross-file consistency: open PRD.md, OFFER.md, COMMUNITY.md, all TSX pages, `config.ts`, `ValueStack.tsx`, `ApplicationForm.tsx` side by side. Any price, deliverable, or scope statement that disagrees is drift; add a new TODO here rather than shipping the mismatch.

---

*Owner: Will. Close TODOs by commits; don't just delete them. Add a `Closed: <commit-sha>` line when done.*
