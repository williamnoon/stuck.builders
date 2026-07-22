# ROADMAP — current TODOs + drift log

Legacy waves 1–7 are archived (see `_archive/`). This is the live TODO list as of 2026-07-20.

---

## Active TODOs

### High priority

- [ ] **Wire `/talk` route + Talk-to-my-AI agent.** In flight, parallel session. Spec in `docs/AGENTS.md` §1.
- [ ] **Redirect retired live pages to `/build-b`.** Currently reachable but unlinked from primary flow: `/greenfield`, `/brownfield`, `/community`, `/greenfield-b`, `/brownfield-b`, `/community-b`, `/jarvais`, `/mockups`. Add 301s in `apps/web/next.config.js`.
- [ ] **Refactor `apps/web/lib/config.ts`.** Still references retired pricing (`PRICES = {idea: 199, build: 399}`, `SKOOL_PRICE_MONTHLY = 69`, `SKOOL_PRICE_ANNUAL = 500`, `SKOOL_TRIAL_DAYS = 7`, `SKOOL_FOUNDING_CAP`). Replace with `BUILD_PRICE = 1995`, `SHIP_CLUB_PRICE = 499`, or delete unused constants. Trace every import first.

### Medium priority

- [ ] **Meta Pixel `content_name`.** Currently uses old label helper referencing retired products. Update to `build-b` / `build-live` variants.
- [ ] **CAPI (server-side pixel).** Currently browser-only. Wire server-side event on `POST /api/apply` success.
- [ ] **Newsletter Resend Audiences.** Currently manual v1 (single email to Will). Migrate to Resend Audiences for real subscriber list management.
- [ ] **Populate `docs/ADS.md` angle library.** Trigger: first paid Build lands. Extract language from applicant + session.

### Low priority / opportunistic

- [ ] **Delete or archive legacy component files** once retired pages are 301'd (`greenfield-b`, `brownfield-b`, `community-b`, `jarvais`, `mockups`).
- [ ] **Case studies section on `/build-b`.** Add once first 3 Builds complete with permission.

---

## Drift log

Format: `YYYY-MM-DD — file(s) touched — reason it's drift — planned fix.`

- **2026-07-20 — `apps/web/lib/config.ts`** — Still holds retired constants after CLAUDE.md/docs rewrite. Kept working (imports intact) but no longer describes the business. Fix in "Refactor config.ts" TODO above.
- **2026-07-20 — legacy page routes** — 8 unlinked routes still resolve. Fix in "Redirect retired live pages" TODO above.
- **2026-07-20 — `apps/web/app/api/apply/route.ts`** — Not touched in this pass (belongs to parallel validation subagent). Ensure `variant` field lands in Resend subject + body per `docs/FORMS.md`.

---

## Recently done

- **2026-07-20** — Full docs reorg. New `CLAUDE.md` (75 lines, current-business-only). New `docs/FUNNEL.md` + `docs/AGENTS.md`. Rewrote `docs/OFFER.md`, `docs/FORMS.md`, `docs/ICP.md`, `docs/ADS.md`, `docs/ROADMAP.md`. Archived retired specs to `docs/_archive/` (PRD, COMMUNITY, SKOOL_POSTS, ENTRY, FILTERS, RUNBOOK).
