# FUNNEL — routes + visitor journey

Live routing lives in `apps/web/next.config.js` and `apps/web/app/`. This doc explains why each route exists.

---

## Route map

### Primary flow

| Route | What it is | Notes |
|---|---|---|
| `/` | 307 redirect to `/build-b` | `next.config.js`. Non-permanent so we can retarget later. |
| `/build-b` | The Build sales page ($1,995 virtual) | Primary door. |
| `/build-live` | The Build LIVE sales page ($1,995 in-person, Sep 11 2026) | 10-seat cap. |
| `/free` | 3 free Claude Code cheatsheet PDFs | No email gate. Optional newsletter opt-in. |
| `/apply` | Variant-aware application form | Reads `?kind=` + `?variant=` from URL. |
| `/thanks` | Variant-aware confirmation | Confirms what they applied to. |
| `/talk` | Talk-to-my-AI onboarding (in flight) | Post-apply agent. See `AGENTS.md`. |

### Legacy 301s (kept for ad-linked traffic)

| Old route | Redirects to | Why |
|---|---|---|
| `/idea` | `/greenfield` | Old $199 Greenfield door. |
| `/out` | `/brownfield?angle=ceiling` | Old Brownfield ceiling angle. |
| `/grow` | `/brownfield?angle=traction` | Old Brownfield traction angle. |

### Legacy pages still live (reachable via URL, not linked from primary flow)

`/greenfield`, `/brownfield`, `/community`, `/greenfield-b`, `/brownfield-b`, `/community-b`, `/jarvais`, `/mockups`.

**TODO** (see `ROADMAP.md`): redirect all of these to `/build-b`. Currently unlinked but crawlable.

---

## Visitor journey

1. **Discovery.** Ads → `/build-b` or `/build-live`. Cheatsheet ads → `/free`. Organic → `/` → `/build-b`.
2. **Consideration.** Reads value stack, guarantee, day breakdown. Cross-links available to the other Build modality and (if graduated) to Ship Club.
3. **Apply.** Submits `/apply` form. `Lead` pixel fires on POST success. Confirmation lands on `/thanks?variant=...`.
4. **AI onboarding.** Applicant is routed to `/talk` (Talk-to-my-AI, eve agent — see `AGENTS.md`). Agent stages 3 candidate systems on the visitor's YOU tab and notifies Will.
5. **Close.** Will reviews the staged systems + the application. Closes by email or phone.
6. **Payment.** Will sends Square or Cash App payment link. Seat is locked on payment.
7. **Delivery.** Build happens (4 hours virtual, or Sep 11 in-person).
8. **Back-end.** Graduate is invited to Ship Club ($499 one-time).

Apply-first, never pay-first. See `CLAUDE.md` §4.

---

## CrossLink pattern

`apps/web/components/CrossLink.tsx` sits at the bottom of every primary page and links to the sibling offer + Ship Club. Do not remove — it's the internal ladder.

---

## Pixel + tracking

- Meta Pixel fires `Lead` on successful POST to `/api/apply`. Client-side only right now.
- `content_name` still uses the old label helper — needs update per `ROADMAP.md`.
- CAPI (server-side) not wired yet — logged as TODO.
- No Purchase event yet (payment happens off-site via Square/Cash App). If we move to a webhook, `Purchase` fires there.

---

## APIs

- `POST /api/apply` — Resend email to `APPLICATIONS_EMAIL` (comma-separated) from `APPLICATIONS_FROM_EMAIL`. Dev fallback: if `RESEND_API_KEY` unset, logs + returns `{ok:true, mode:"logged"}` and still redirects to `/thanks`.
- `POST /api/newsletter` — Resend email for weekly-drop opt-ins. Same fallback pattern.

Env vars: `RESEND_API_KEY`, `APPLICATIONS_EMAIL`, `APPLICATIONS_FROM_EMAIL`.
