# Application Review — ~5 min flow

Source-of-truth: `docs/PRD.md` §5-6 · `docs/FORMS.md` · `docs/FILTERS.md`.

## SLA — ~5 min

Will reads live. Reply within ~5 min in normal windows; occasionally a few hours if in a Day 1 call. Never 24 hrs.

## Flow

### 0:00 — 0:00:15 · F1 gate check (auto)
- Legal / non-harmful / non-predatory
- Fail → decline-clean template, no charge, done
- Pass → proceed

### 0:00:15 — 0:01 · Q1 verification
- Q1 = Greenfield ("I have/need idea. Nothing built") → OFFER: Greenfield $199
- Q1 = Brownfield ("I started building. Stuck") → OFFER: Brownfield $399
- If Q2 (project) reveals wrong-fit route (e.g. Brownfield picked but no code exists):
  - Reply with decline-wrong-fit-route template + route them to the right SKU

### 0:01 — 0:03 · F2-F4 coaching lens
- F2 real problem — evidence of pattern?
- F3 valuable — deserves someone's time?
- F4 close to you — background/lived proximity?
- All three green or amber → ACCEPT
- Two or more red → DECLINE with route

### 0:03 — 0:04 · Radar cross-check (if applicant's Radar export attached)
- Confirms fit signals: coding fluency, wall recurrence, stuck-then-recovered pattern
- Community MCP flags: similar prior applicants + outcomes

### 0:04 — 0:05 · Send response
- ACCEPT: acceptance email with Stripe link ($199 or $399, minus $100 if `ref_code` present) + Cal.com booking link
- DECLINE-clean: polite, no route
- DECLINE-wrong-fit-route-{SKU}: decline this kind, suggest correct SKU
- DECLINE-not-fit: "come back after you've talked to 5 potential users" or similar

## What agents do vs Will

**Agents:**
- Auto-parse form, F1 gate check, radar cross-check
- Draft the acceptance/decline template with placeholders filled
- Compute referral credit if `ref_code` present
- Never send without Will's tap

**Will:**
- 5 min reading, F2-F4 judgment call, tap the response
- Anything that needs judgment stays human

## Never

- Never auto-accept without Will's tap
- Never fabricate a route "just to be nice" — decline honestly
- Never delay reply because "I'll batch these later" — the ~5 min SLA is a first-order marketing hook

## Changelog

- 2026-07-10 · initial template
