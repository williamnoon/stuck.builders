# Prioritization skill

How to rank moves when Will asks "what should I work on?" — without pruning any project.

## Ranking signals (in order of weight)

1. **Explicit ask** — if Will named a project, that project wins. No ranking needed.
2. **Deadline coupled** — anything with a calendar event today/tomorrow beats everything else.
3. **Hot signal** — project with commits in last 3 days AND open TODOs in ROADMAP.md.
4. **Ripe signal** — project idle 7–30 days with a clear, documented next unstick in `notes/<name>.md` or ROADMAP.md.
5. **Warm-nudge signal** — `with-sons` projects idle >21 days. Surface as invitation, not debt.
6. **Slow-simmer** — `experiment` projects idle >60 days without a documented next step. Mention only if Will asks about them.

## Never do

- Never suggest dropping any project.
- Never rank on "which project makes the most money" unless Will explicitly asks that framing.
- Never rank a `business` project above a `with-sons` project by default. Sons projects are first-class.
- Never claim a project is "dead" or "should be archived" — only Will decides that.

## Output shape (three moves max)

Each move MUST be one of:
- **Code change** — one file path + one-line what.
- **Message to draft** — recipient + one-line hook.
- **Command to run** — the exact shell command.
- **Decision to make** — the specific question Will needs to answer.
- **Quality time** — for `with-sons`, a specific hour-shaped activity ("saturday morning — walk through bitsbots' onboarding with them").

If you can't produce a concrete move for a project, say "I need more context — what were you last doing on X?" and let Will fill in. Never propose "polish the UI" or "improve the docs" — too vague.
