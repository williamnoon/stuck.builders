# Brownfield Day 1 — Alignment Call (15 min)

The plan is already drafted, reviewed, and locked BEFORE this call (agent-to-agent handshake). Day 1 is 15-min alignment, not from-a-blank-page scoping.

Source-of-truth: `docs/PRD.md` §3B · `docs/OFFER.md` Brownfield section.

## Pre-Day-1 handshake (T-3 to T-2 days — agents automate)

- [ ] Applicant's agent + Radar reads Q1-Q6 + local transcripts
- [ ] Drafts proposed Version Map + daily plan
- [ ] Applicant reviews at `stuck.builders/scope/<id>` → approve / edit inline
- [ ] Sent to Will's operator agent
- [ ] Will's operator agent reviews with Radar signals + community MCP wall matches
- [ ] Will taps in ~5 min: Agree · Adjust · Route
- [ ] Locked plan sent to applicant + calendar drops
- [ ] Fuse hook enabled if Ship Club member
- [ ] Radar installed (verify already installed)
- [ ] Community-relevant library entries pre-loaded into skills folder

## Call structure (15 min alignment)

### 0:00 — 0:02 · Open the locked plan together
- Both open `stuck.builders/scope/<id>` on screen
- Confirm scope target in customer's own words (from Q4 of application, pre-drafted)

### 0:02 — 0:08 · Walk through pre-drafted Version Map + daily plan
- Any surprises to the customer? Adjust inline.
- Rule stays: one major feature OR one major fix. Not both. No "and also this small thing."
- In extreme cases where a nearer blocker or closer target is visible, call it out here. Otherwise the customer's stated wall stands.

### 0:08 — 0:12 · Confirm the agent's Day-2 brief
- The agent's overnight instructions for Night 2 are already drafted
- Both approve the brief
- Cover: branch strategy, taste-call escalation path, budget cap

### 0:12 — 0:15 · Close
- Confirm 15-min daily windows on calendar
- Confirm any Day 6 flex constraints (family, work, etc.)
- Cover the guarantee anchor verbatim (below)

## Guarantee anchor

If Day 1 doesn't leave you with a map you can act on, the sprint is refunded before Day 2 starts. Restate on the call at the 40-min mark.

## Post-call artifacts (auto-generated)

- [ ] Version Map committed to sprinter's `~/sprints/YYYY-MM-DD-<slug>/version-map.md`
- [ ] Daily plan committed to same folder
- [ ] Radar wired to daily agent run schedule
- [ ] Fuse hook installed (if Ship Club)
- [ ] Day 2 agent brief queued for tonight

## What Will does vs what the customer's agent does (post-Day-1)

**Will (Days 2-6):**
- 15-min daily planning-mode call
- Review agent's overnight output
- Answer taste calls the agent flagged
- Update tomorrow's plan based on today's outcome

**Customer's agent (Days 2-6):**
- Executes today's plan on customer's machine, branch-only commits
- Flags every taste call for the customer
- Never touches main branch, never deploys to prod without approval
- Never makes design / naming / scope-boundary decisions

## Changelog

- 2026-07-10 · initial template · pending first real Brownfield delivery to validate
