# RUNBOOK — Sprint & Lab Delivery Templates

Internal delivery playbook for stuck.builders. Sprint runners (Will + future) execute against these; no runner improvises the parts already scripted here. Templates evolve as we ship — every real delivery updates the corresponding template.

## Structure

```
docs/RUNBOOK/
├── shared/                    # cross-product templates
│   ├── application-review.md
│   ├── email-accept.md
│   ├── email-decline-*.md
│   └── day7-skool-pitch.md
├── greenfield/                # $199 Greenfield Build
│   ├── day1-scope.md          # 30-min call script + agent handshake
│   └── day7-delivery.md       # PRD + demo handoff
├── brownfield/                # $399 Brownfield Build
│   ├── day1-scope.md          # 45-min call script + Version Map lock
│   ├── daily-15min.md         # Day 2-6 planning-mode session template
│   └── day7-ship-review.md    # deployed URL + roadmap
├── labs/                      # weekly Ship Club Lab production
│   ├── show-structure.md      # 60-min format
│   ├── hot-seat-format.md     # per-seat template
│   └── post-lab-pipeline.md   # library entries + skill promotion
└── environment/               # operating environment setup
    ├── prompt-packs/          # by stack
    ├── doc-templates/         # Version Map, roadmap
    └── skill-packs/           # AI-native shipping loop, unstick playbook
```

## Rules for template maintenance

- **Every real delivery updates its template.** After each sprint / Lab, note what worked / what didn't in the template's changelog.
- **Verbatim from docs/PRD.md, docs/OFFER.md.** Don't invent. Templates are executable versions of what's already in the source-of-truth docs.
- **~5 min SLA** — every reference to reply time is ~5 min, not 24 hrs.
- **They orchestrate, Will copilots the orchestration.** Update templates from the new memory rule as they evolve (2026-07-10).
- **Radar + Fuse integrated.** Every template references what Radar surfaces and what Fuse contributes to make the delivery step easier.
