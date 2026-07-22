# Ship Club Lab — Hot Seat Format (per seat, 10 min)

Source-of-truth: `docs/COMMUNITY.md` §5 · `docs/RUNBOOK/labs/show-structure.md`.

## Pre-seat (agents automate)

- [ ] Community MCP has selected the seat from the week's submissions
- [ ] Wall clustered by category (auth / deploy / scoping / copy / etc.)
- [ ] Radar surfaces relevant library entries + prior fixes
- [ ] Fuse fetches applicable skills into the seat member's Cursor
- [ ] Pre-brief sent to the seat member 24 hrs ahead

## Per seat structure (10 min)

### 0:00 — 0:01 · Seat reveal
- Animated lower-third: name + wall in their own words
- Bug: category tag ("auth" / "deploy" / etc.)

### 0:01 — 0:04 · Sprinter walks through
- What their agent tried overnight (or up to this Lab)
- The taste call flagged that needs Will
- Any error messages or reproducers

### 0:04 — 0:08 · Will diagnoses live
- Read the code / config / error together
- Point at what's off
- Reference: "there's a library entry from Sarah last week that hit this — let's pull it"
- The diagnosis is TAUGHT, not just delivered — audience learns the pattern

### 0:08 — 0:09 · Direct the agent
- Sprinter types the direction to their agent
- Screen shows agent running
- Radar pulse animation while agent works

### 0:09 — 0:10 · Fix shipped OR clear next step
- If shipped: green stamp + library entry created + skill candidate flagged
- If next step: honest, "next action logged, follow-up in feed" — no spin

## Animation cues (per seat)

- **Seat reveal**: 2 sec lower-third slide-in with Caveat handwriting
- **Wall banner**: persistent lower-third for the seat
- **Agent-thinking pulse**: dashed circle sweep during agent runs
- **Fix reveal**: green stamp 2 sec if shipped
- **Library stamp**: 2 sec always at end ("→ auth/YYYY-MM-DD-slug")
- **Skill stamp**: 2 sec if promoted ("→ skill candidate: diagnose-X")

## Audience takeaways (per seat)

- One pattern they can apply to their own similar wall
- One library entry tagged and searchable
- One skill candidate they can vote to promote to community lib

## Rules per seat

- **10 min hard cap**. If more needed, "we go async in the feed, next Lab if it's a shared wall."
- **Honest failure mode**. If a seat doesn't clear: say it, log next action, don't spin.
- **Attribution**. Every library entry credits the seat member + Will as reviewer.
- **Never surface a member's private repo without explicit consent**. Pre-brief captures this consent per Lab.
- **Never fabricate a fix on camera**. If unsure, say "I don't know, let's dig in" — teaches humility + diagnosis pattern.

## Changelog

- 2026-07-10 · initial template
