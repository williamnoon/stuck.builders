# Talk-to-my-AI — the stuck.builders live agent

The eve agent behind the "Talk to my AI" page: visitors watch Will's OS run on the left,
talk to this agent on the right, and it stages their personal 3-system dashboard (the
YOU tab) before pointing them at The Build application.

## Layout

```
talk-to-my-ai/
├── package.json
└── agent/
    ├── agent.ts                  # model + runtime options
    ├── instructions.md           # persona, flow, hard rules (start here)
    ├── tools/
    │   ├── stage_system.ts       # writes a card onto the visitor's YOU tab (max 3)
    │   ├── capture_lead.ts       # saves email + staged dashboard (only when offered)
    │   └── notify_will.ts        # Slack ping on hot-lead signals (speed-to-lead)
    ├── skills/
    │   ├── stage_systems.md      # how to pick + customize the 3 slots
    │   └── objection_handling.md # honest answers to price/skepticism/timing
    └── lib/
        └── systems_catalog.ts    # vertical → candidate systems (from the skill library)
```

## Setup

```bash
npm install
# env (Vercel → Project → Settings → Environment Variables):
#   SLACK_WEBHOOK_URL   – incoming webhook for hot-lead pings
#   LEAD_WEBHOOK_URL    – (optional) endpoint that stores captured leads
npm run dev           # local
vercel deploy         # ship it
```

## Wiring the frontend (the mockup you built)

The interactive mockup's contract maps to the agent like this:

| Frontend element            | Source                                                        |
|-----------------------------|---------------------------------------------------------------|
| Chat messages               | agent session via eve's HTTP channel (see eve channel docs)   |
| YOU-tab cards + badge count | `stage_system` tool calls in the event stream — each call is one card (slot, title, what, wiredTo, estSavedPerWeek, sampleLine) |
| Sticky CTA appearing        | show after the 3rd `stage_system` event                       |
| Will's-OS live feed (left)  | **NOT this agent** — see honesty note below                   |

Listen to the agent's streamed events; when a `stage_system` tool result arrives,
render the card and bump the badge. The session is durable, so a returning visitor
gets their staged dashboard back.

## The honesty note (read this one)

The left-panel "live feed" in the mock shows Will's OS working — email drafted,
skill fired, follow-up sent, "127 today." **Only ship real events.** Wire the feed
to a sanitized log from your actual OS (a small endpoint your skills POST to when
they run), with names/details scrubbed. If launch day arrives before that plumbing
exists, label the panel "simulation of a typical day" — visibly. The entire pitch
of this page is "not a demo — the live system"; one visitor asking "is this real?"
and getting a mumble kills it. Same rule as the seat counts: real numbers convert
better anyway.

The agent's instructions already forbid it from claiming feed activity it can't
verify — keep the page honest to match.

## Things to verify against current eve docs (framework is young)

- `defineAgent` / `defineTool` option names and the session-state surface used in
  `stage_system.ts` (marked with VERIFY comments)
- HTTP channel setup for the web chat (whether default or an explicit `channels/web.ts`)
- Model identifier strings for the version you install

## Roadmap hooks

- `agent/connections/` — point at your MCPs (Gmail, CRM) when the agent graduates
  from staging sketches to doing real onboarding work
- `agent/schedules/` — daily digest of conversations + staged dashboards to Slack
- Same skeleton = the "Always-On" client tier: swap instructions + catalog, deploy
  per client, charge deploy + retainer
