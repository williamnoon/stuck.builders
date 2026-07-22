# stuck.builders — Claude Code memory

Next.js 15 monorepo for a $1,995 AI-installation service. Site lives in `apps/web/`. Deployed on Vercel at www.stuck.builders. Homepage `/` redirects (307) to `/build-b`.

## 1. Current offers

Source of truth is the live site + `apps/web/lib/config.ts`. Docs describe; site decides.

- **The Build** — `/build-b` — virtual 1:1, 4 hours, hands-on-their-keyboard, **$1,995 launch** (going up). 1 seat/day, Mon–Fri.
- **The Build LIVE** — `/build-live` — in-person 1:1, **Fri Sep 11, 2026, 9am–3pm**, Bridgeview Conference Room at Charleston Digital, Charleston SC. **$1,995 launch, first 10 seats only.**
- **Free cheatsheets** — `/free` — 3 Claude Code PDFs (shortcuts, slash commands, make Claude yours). No gate. Optional weekly newsletter opt-in.
- **Ship Club** — https://www.skool.com/stuck2shipped/about — **$499 one-time, graduates only**. Linked via `<CrossLink>` from every page.

## 2. Flow

`apply` → AI onboarding call (Talk-to-my-AI agent, `apps/talk-to-my-ai/`) → Will closes → Square or Cash App payment link → seat locked. Apply-first, never pay-first.

## 3. Voice

- Direct. Honest. Engineer-facing. No hype.
- Handwritten notes (Caveat font) carry information, not decoration.
- No emojis in files, ever. Not in copy, not in commit messages.
- Never invent testimonials, metrics, or credentials.

## 4. Hard rules

- **Marketing honesty.** Every page promises its real deliverable. Never "done for you" — the model is "done by you, Will unsticks."
- **Apply-first is intentional.** Never propose a pay-first / add-checkout flow.
- **Prices match everywhere.** `lib/config.ts` + live pages + docs update together or don't change at all.
- **Preserve the workshop-paper aesthetic** — cream/chalk/green, Big Shoulders Display, Caveat, JetBrains Mono. Do not restyle.
- **Never commit, push, or deploy** unless the user explicitly asks. Only write/edit files.

## 5. Tech

- Next.js 15 App Router. Turborepo monorepo. `apps/web/` is the site, `apps/talk-to-my-ai/` is the eve agent.
- Design tokens in `apps/web/app/globals.css`. Reuse existing utility classes (`.wrap`, `.hero`, `.chip`, `.day`, `.hand`, `.sec-label`, `.btn`) — do not add new ones without reason.
- Email via Resend. Env: `RESEND_API_KEY`, `APPLICATIONS_EMAIL` (comma-separated), `APPLICATIONS_FROM_EMAIL` (single).
- Do not add npm packages without checking existing deps.

## 6. Change-control checklist

When touching pricing, offer copy, or flow — update in one pass:

1. `apps/web/app/build-b/page.tsx`
2. `apps/web/app/build-live/page.tsx`
3. `apps/web/app/apply/page.tsx` + `apps/web/components/ApplicationForm.tsx`
4. `apps/web/app/thanks/page.tsx`
5. `apps/web/app/api/apply/route.ts`
6. `apps/web/lib/config.ts`
7. `apps/web/next.config.js` (only if routing changes)
8. Relevant doc in `docs/` (OFFER, FUNNEL, FORMS)
9. `docs/ROADMAP.md` — log any deferred drift

If you only touch a subset, log the drift as a `TODO:` in `docs/ROADMAP.md`.

## 7. Where things live

- Offer specs: `docs/OFFER.md`
- Routing + visitor journey: `docs/FUNNEL.md`
- Application form spec: `docs/FORMS.md`
- Weekly newsletter spec: `docs/WEEKLY_DROP.md`
- Ad copy: `docs/ADS.md`
- ICP: `docs/ICP.md`
- Talk-to-my-AI + agent patterns: `docs/AGENTS.md` + `apps/talk-to-my-ai/README.md`
- Roadmap + drift log: `docs/ROADMAP.md`
- Retired specs (do not follow): `docs/_archive/`

Radar (`~/.claude/skills/radar` if installed) is optional but useful for orchestrating multiple projects.
