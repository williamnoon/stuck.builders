# AGENTS — Talk-to-my-AI + subagent patterns

Two things live here: (1) the visitor-facing eve agent (Talk-to-my-AI), and (2) how Claude Code subagents should be dispatched inside this repo.

---

## 1. Talk-to-my-AI (eve agent)

**Where it lives:** `apps/talk-to-my-ai/`.
**Where it renders:** `/talk` route in `apps/web/` (in flight — being wired in a parallel session).
**Purpose:** post-apply AI onboarding. The agent talks to the applicant, stages 3 candidate AI systems on the visitor's YOU tab, and routes them to `/build-b` to lock in.

### Flow

1. Visitor lands on `/talk` (from `/thanks` or directly).
2. Eve opens the conversation. Left panel = live feed. Right panel = YOU tab (staged systems build up here).
3. Eve asks about business, tools, time-eaters (mirrors the apply form questions).
4. Eve calls `stage_system` up to 3 times, each time populating a card on the YOU tab.
5. Eve calls `capture_lead` if the applicant hasn't already applied.
6. Eve calls `notify_will` with a summary + the 3 staged systems.
7. Eve routes to `/build-b` (or `/build-live` if geo/context suggests it).

### Tools (agent tool surface)

- `stage_system(name, description, integrations, first_move)` — add a card to the YOU tab.
- `capture_lead(email, phone, business)` — POST to `/api/apply` if not yet applied.
- `notify_will(summary, staged_systems, applicant_context)` — email Will.

### Honesty rule (hard)

The left-panel feed must show **real** events (real tool calls, real timestamps). If we ever render synthetic activity to warm the page up, it must be labeled **"simulation of a typical day"** in-frame. No fake activity presented as real. This is the same marketing-honesty rule from `CLAUDE.md` §4 applied to the agent surface.

### Model + provider

TBD in parallel session. Whatever ships must respect the honesty rule and the apply-first flow.

---

## 2. Subagent dispatch patterns (inside this repo)

When dispatching any Claude Code subagent — research, code write, doc write, review — brief them explicitly. Do not assume they've read `CLAUDE.md`.

### Required brief (paste into every subagent prompt)

> This repo is stuck.builders. Read `CLAUDE.md` and `docs/OFFER.md` before touching offer copy, pricing, forms, or funnel. Hard rules: marketing honesty (every page promises real deliverable, never "done for you"), apply-first (never propose pay-first / add-checkout), no emojis in files, prices match everywhere. Do not commit, push, or deploy — only write/edit files.

### Additional context to include when relevant

- Touching **offer copy or pricing** → also read `docs/OFFER.md` + note the change-control checklist in `CLAUDE.md` §6.
- Touching **the form** → read `docs/FORMS.md` first. Validation rules are strict (see §1 there).
- Touching **routing** → read `docs/FUNNEL.md` first.
- Touching **ads** → read `docs/ADS.md`. Do not invent angles.
- Touching **agent surfaces** → this doc's §1 (honesty rule).

### What subagents can NOT decide alone

- Add/remove a product tier.
- Change pricing.
- Switch to pay-first.
- Add a new top-level route.
- Restyle the workshop-paper aesthetic.
- Commit or push.

If in doubt, come back and ask.

---

## 3. Future agents (planned)

- **Onboarding-call agent** — post-apply, replaces the initial human call. Warmup for Will's close.
- **Ship Club member agent** — post-graduate, inside Skool, helps members troubleshoot their live systems.
- **Weekly-drop drafting agent** — pulls the week's Build outcomes + wall-hits and drafts Friday's newsletter per `WEEKLY_DROP.md` format.

All future agents must respect the honesty rule and the apply-first flow.
