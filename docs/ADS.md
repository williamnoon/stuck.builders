# ADS — meta-rules + campaign scaffolding

Deliberately thin. The old angle library was built for retired products (Greenfield $199, Brownfield $399, Skool founding-20). We rebuild the library from real customer language after the first paid Builds land.

---

## Meta-rules (always)

- **No fake urgency.** Real caps only (1 seat/day for The Build; 10 seats for The Build LIVE; launch price genuinely goes up).
- **No fabricated testimonials, metrics, or faces.** Pre-launch = process proof only (guarantee, day breakdown, value stack).
- **No emojis.** In creative or copy.
- **Apply-first.** Every ad routes to `/build-b` or `/build-live` or `/free`. Never a direct checkout. See `CLAUDE.md` §4.
- **Optimize for `Lead`.** Meta Pixel fires `Lead` on POST `/api/apply` success. Do not switch campaigns to Purchase optimization — payment happens off-site.
- **Reply address:** `will@stuck.builders` for any prompt/CTA that includes an email.
- **Honesty rule.** Every ad promises the real deliverable (see `OFFER.md`). No "done for you" — the model is "done by you, Will unsticks."

---

## Campaign structure

Two live campaigns at launch:

### BUILD-VIRTUAL
- Destination: `/build-b`
- Objective: Leads (Meta), optimizing for `Lead` event.
- Audiences: TBD — populate after first paid customer.
- Creative angles: TBD.

### BUILD-LIVE
- Destination: `/build-live`
- Objective: Leads.
- Geo-constrained: Charleston SC + drivable radius (in-person Sep 11 2026).
- Audiences: TBD.
- Creative angles: TBD.

Optional third:

### FREE-CHEATSHEETS (top-of-funnel)
- Destination: `/free`
- Objective: Leads on newsletter opt-in (secondary), page views (primary).
- Feeds nurture, not direct revenue.

---

## Angle library

**TODO:** populate once the first paid Build lands and we have real language from the applicant + the session. Until then, hero copy on `/build-b` and `/build-live` is the ad copy.

Rules for future angles:
- Trace each angle to a real applicant sentence or a real session outcome.
- One dream outcome per ad set. Don't stack.
- Every ad ends with the same CTA verb: "Apply."

---

## URLs cheat sheet

- `/build-b` — The Build ($1,995 virtual)
- `/build-live` — The Build LIVE ($1,995 in-person, Sep 11 2026)
- `/free` — 3 Claude Code cheatsheets
- Never link ads to legacy routes (`/greenfield`, `/brownfield`, etc.). They still resolve but will be redirected.
