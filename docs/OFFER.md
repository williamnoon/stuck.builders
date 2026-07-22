# OFFER — stuck.builders

Source of truth is the live site (`apps/web/app/build-b/page.tsx`, `apps/web/app/build-live/page.tsx`). This doc describes what's live so subagents can reason without opening every file.

Two products (both "The Build," different modalities) plus a graduates-only community back-end.

---

## Value Equation quick reference

Value = (Dream Outcome x Perceived Likelihood) / (Time Delay x Effort)

Every offer below is scored against this. Do not remove any element to "clean up" copy.

---

## 1. The Build — `/build-b`

**Modality:** virtual 1:1 with Will over 4 hours.
**Price:** $1,995 launch (going up).
**Capacity:** 1 seat/day, Mon–Fri.
**Apply flow:** `/apply?kind=build&variant=build-b`.

### Dream Outcome
One AI operating system running your business. You walk out of the session with it live on your laptop, tailored to your industry, tools connected, and the next 3 moves written down. You are no longer the bottleneck.

### Perceived Likelihood levers
- Will next to you the entire time — hands-on-their-keyboard model, not a course, not a demo.
- Prebuilt skill library + multi-model core installed live on your machine.
- 10 industries, 4 AI models, 35+ business tools already supported (Real Estate, E-commerce, Trades, Coaching, Marketing Agencies, Finance, Health, Beauty, Hospitality, Professional Services).
- UNSTUCK OR REFUND guarantee.

### Time Delay
Same day. 4 hours from "empty laptop" to "system live." No sprint week, no async back-and-forth.

### Effort
You bring: laptop + your business context. Will brings: environment, skills, playbooks, integrations. You type; Will unsticks the second you stall.

### Value stack (totals $21,199)
Lives in `apps/web/app/build-b/page.tsx`. Anchors include: Claude Code environment install, prebuilt skill library, multi-model core, tool integrations, tailored playbook, live 1:1 hours, 3-move written plan. Update page + this line together.

### Guarantee
UNSTUCK OR REFUND. If you don't leave with a live system that unblocks the thing you came in stuck on, full refund.

### Scarcity
1 seat/day, Mon–Fri. Launch price expires (going up soon).

### Reason-why-for-price
Launch pricing while we build case studies. Price goes up after.

---

## 2. The Build LIVE — `/build-live`

**Modality:** in-person 1:1 with Will, one full day.
**When:** Fri Sep 11, 2026, 9am–3pm ET.
**Where:** Bridgeview Conference Room, Charleston Digital, Charleston SC.
**Price:** $1,995 launch — first 10 seats only.
**Apply flow:** `/apply?kind=build&variant=build-live`.

Same core deliverable as The Build (system live on your laptop, tailored, integrations wired, 3-move plan), plus:

- Private rooftop putting green between sessions.
- Catered Mediterranean pita bar lunch (chicken, tzatziki, hummus, feta, warm pita).
- In-person coffee + workspace at a real conference room.

### Value stack (totals $36,499)
Lives in `apps/web/app/build-live/page.tsx`. Includes everything from The Build stack + venue + catering + rooftop + in-room presence value. Update page + this line together.

### Scarcity
First 10 seats only at launch price. Real cap (real venue, real day).

### Reason-why-for-price
Same launch pricing as The Build — the venue + catering are absorbed as launch investment. Price goes up after the first 10.

---

## 3. Ship Club — Skool, graduates only

**URL:** https://www.skool.com/stuck2shipped/about
**Price:** $499 one-time.
**Access:** graduates of The Build or The Build LIVE only.
**Positioning:** where builds compound — post-Build support, playbook exchange, other people running the same OS in different industries.
**Linked via:** `<CrossLink>` component at the bottom of every page. Not sold on cold traffic.

Ship Club is the back-end of the ladder, not an entry point.

---

## 4. Free cheatsheets — `/free`

**Deliverable:** 3 Claude Code PDFs — shortcuts, slash commands, make Claude yours.
**Gate:** none. Direct download.
**Nurture:** optional weekly newsletter opt-in (Friday 8am ET — see `WEEKLY_DROP.md`).

Feeds the top of funnel. Never gated behind email for the PDFs themselves.

---

## Naming + routes cheat sheet

| Product | Route | Apply URL | Kind | Variant |
|---|---|---|---|---|
| The Build | `/build-b` | `/apply?kind=build&variant=build-b` | `build` | `build-b` |
| The Build LIVE | `/build-live` | `/apply?kind=build&variant=build-live` | `build` | `build-live` |
| Ship Club | Skool (external) | n/a | n/a | n/a |
| Free cheatsheets | `/free` | n/a | n/a | n/a |

Legacy routes still resolve (see `docs/FUNNEL.md`).
