# STUCK TO SHIPPED — COMMUNITY (SKOOL) SOURCE OF TRUTH
*Operational doc for the Skool community. Paired with PRD.md §4. One person edits.*

---

## 1. PURPOSE

Skool is the **walking-pace back-end** of the ladder. It exists to retain sprint graduates and steady-pace builders between breakthroughs — not to acquire cold traffic. When a customer finishes a sprint and doesn't need another wall busted yet, the community keeps momentum without the sprint price tag. Name: **"Ship Club"** (working name — `TODO: name` — Will to confirm or replace). Skool is not the front door. The sprint pages are the front door. Skool is where builders land after Day 7 and stay for years.

**One job, two intensities.** Skool runs the same operating engine as the paid sprints (same setup-to-win environment, same "they code, Will copilots" style) — just at group pace with hot-seat allocation instead of dedicated 1-on-1 time.

---

## 2. PRICE & TIER

- **$69/mo or $500/yr** (Skool platform pricing, live). Annual saves $328/yr (~$42/mo effective).
- **7-day free trial.** Cancel any time inside the trial, no charge. Cancel after, no clawback.
- **Billing:** Skool-native. No separate Stripe. No custom webhook infrastructure.
- **No founding tier.** The founding-20 model ($59/mo locked for life for the first 20 members) was superseded 2026-07-09. Skool's own platform pricing now controls billing; there is no separate promotional cohort.
- **Reason-why-for-price:** $69/mo is the monthly cost to keep the operating engine running at group pace — weekly Labs, hot-seat curation, library maintenance. $500/yr locks the price for a year and saves you $328.

*(Prior pricing model — $59/mo founding, first 20 locked for life — was retired 2026-07-09. Kept here as an archival reference only.)*

---

## 3. POSITIONING

- **Sold at Day 7 of every sprint** — this is the primary acquisition channel. Every sprint ends with the pitch (see §6). The 7-day free trial changes the acquisition math: grads can start the trial on the Day-7 call and try a Lab before paying.
- **`/community` page** exists for warm/considered traffic — people who heard about Stuck to Shipped, aren't ready to sprint, want the lower-commitment entry. Not indexed hard, not the ad landing page.
- **Track B ads** (§9 of PRD) run **lighter and warm-first** — retargeting sprint-page visitors, lookalikes of sprint applicants. No cold community-first campaigns until the paid tier is proven.
- **Never pitched as "instead of" a sprint** when someone is stuck on a wall. If they have a wall, they need a sprint. Community is for between-walls pace.
- **Three entry states, one door.** Verbatim entry copy (source = Skool about page — do not paraphrase in ads or pages without checking against this):

  > "You have an idea you've never started. Or an app that's half-built and fighting you. Or something you shipped that nobody uses. Stuck to Shipped gets you unstuck — and you feel it the same week."

- **Positioning line:** *"Nobody leaves where they came in."*
- **Sprint upsell inside Skool copy:** *"Need a breakthrough THIS week? Book a private Sprint → stuck.builders"*.
- **Operator identity:** *"a builder who ships with AI every day, with taste about what deserves to be built."*

---

## 4. WHAT MEMBERS GET

1. **Weekly Labs** — roughly 5 Labs per week (mix of live unstick + live idea work). Everyone in the community can *watch* the Lab. Recordings drop to library within 24 hours.
2. **5 hot seats per Lab** — members submit their project inside the community ahead of a scheduled Lab; Will picks the 5 whose projects will be worked on active during the session. The rest watch and learn.
3. **Searchable library organized by problem taxonomy** — every replay tagged by the wall it solved. Taxonomy: **Idea → Build → Deploy → Market**. Members search by their wall, not by date.
4. **Community feed** — async help between Labs. Post your wall, get eyes from Will + other builders before the next Lab.
5. **Skool-native content** — short posts, prompts, resources. Everything lives inside Skool. No newsletter, no Discord, no second platform.

That is the entire offer. No courses, no cohorts, no 1:1, no bonuses. The pace is the product.

**Two 5-caps — do not conflate in copy:**
- **5 hot seats per Skool Lab.** This is the community cap.
- **5 concurrent active paid sprints per SKU** (5 Greenfield + 5 Brownfield in motion at once). This is Will's paid-sprint carrying capacity, tracked in `apps/web/lib/slots.ts` and shown on the slot board. It has nothing to do with Skool hot seats — do not describe it as such.

---

## 5. HOT SEAT MECHANICS

- **Members apply, do not book.** Same selection logic as sprints (§5 + §6 of PRD).
- **5 hot seats per Lab.** Rest of members watch live and get replays.
- **Application form lives on Skool** (native form or embedded Tally). Three fields:
  1. **Current wall** — where exactly you're stuck (2–3 sentences, in your own words).
  2. **What you've tried** — so Will doesn't waste seat time on the obvious.
  3. **What would "unstuck" look like** — the specific state you want by end of Lab.
- **Selection:** Will picks 5 by Sunday night for the following week's Lab. Criteria: clearest wall, most tractable in ~10 min, mix of stages (Idea → Build → Deploy → Market) so replays serve the whole library.
- **Hot-seat SLA is different from sprint-application SLA.** Sprint applications get a ~5-min reply (Will reads live). Hot-seat applications get selected by Sunday for the following week's Lab. Do not conflate these.
- **If not selected:** rolls to next week's queue automatically. Applicant is told. No wall gets buried more than 2 weeks.
- **Cap on applications:** none. If backlog exceeds 15 open applications, Will adds a second weekly Lab before raising cap or price.
- **Idea → demo also happens in Skool.** A member with just an idea can float it in the community; when hot-seated, we save the idea and start building toward the demo *in the group format*. Idea → demo work isn't exclusive to the paid Greenfield Build — the paid sprint is the 1-on-1 dedicated version of the same job.

---

## 6. DAY-7 PITCH SCRIPT

Delivered by Will at the end of every Day-7 ship-review call, right after the demo, before "any questions." Verbatim:

> "One thing before we wrap. You just shipped. The wall after this one is going to show up in about two weeks — that's the pattern. You've got two options: keep sprinting when you hit it — another $399, same engine, same me — or drop into walking pace in Ship Club. It's $69 a month or $500 a year — and there's a 7-day free trial, so you can try a Lab before you pay a cent. Weekly Labs (live unstick + idea), searchable library of every wall we've solved, community feed between. If you go annual, you save $328 over the year. Link's in the wrap-up email. Start the trial on your way out — no pressure to decide today."

Rules for delivery:
- Say it once, at the end. Do not repeat.
- Do not discount either option to steer them; both are real.
- If they ask "which should I do?" — answer honestly based on whether they have a wall right now.
- Never over-sell annual. Monthly is a fine on-ramp; annual is the price-lock for members who know they're staying.

---

## 7. ONBOARDING FLOW (NEW MEMBER — trial or paid)

**Day 0 — Welcome DM (Skool-native, sent within 1 hour of trial signup or paid join):**

> "Welcome in. You're on the 7-day free trial (or paid — same access either way). Three things to do this week:
> 1. Next Lab is [DAY] at [TIME] — calendar link inside. Show up live if you can.
> 2. Library is tagged by problem (Idea → Build → Deploy → Market) — search your current wall, watch the closest replay.
> 3. When you're stuck, apply for a hot seat (form pinned in the feed). Applications close Sunday for the following week's Lab.
> Post an intro in the feed when you get a sec: what you're building + where you're stuck right now. — Will"

**Day 3 — Nudge (only if member hasn't posted, watched a replay, or opened the hot-seat form):**

> "Hey — noticed you haven't dropped in yet. Two-minute move: post one sentence in the feed about what you're building. That's the whole ask. Everything else follows from there. — Will"

**Day 6 — Trial ending reminder (only trial members):**

> "Your trial ends tomorrow. If Ship Club earned its keep this week — stay in. Monthly is $69, annual is $500 (saves $328). If it didn't, no charge, no clawback. Either way, glad you tried. — Will"

All messages are Skool-native. No external email required at launch.

---

## 8. TRIAL → PAID CONVERSION

The 7-day free trial is the primary Skool conversion mechanic (replaces the retired founding-20 seat mechanic).

- **Trial signups tracked** manually in Will's weekly review (Skool dashboard exports member counts + churn).
- **Trial-to-paid pitch inside the Lab.** Will mentions renewal naturally during a live: "if you got value from today, monthly is $69 or annual is $500 with the $328/yr savings; renews on your join date."
- **No hard sell inside the trial.** The pace is the product — if a member watches a Lab, opens the library, and posts once, they'll self-convert or self-remove without needing pressure.
- **Track monthly vs. annual mix** in the weekly dashboard. Annual bias is a retention signal.

*(This section replaces the retired §8 Founding-20 tracking. The `docs/community-members.md` counter and the 15/18/20 landing-copy triggers are no longer used.)*

---

## 9. CONTENT CADENCE

One post per day, Skool-native. No scheduling tool at launch — post live.

- **Monday:** wins from the previous week's sprints (with permission). Short — "X shipped Y, here's the wall they cleared."
- **Tuesday:** replay drop from last Lab + one-line summary of the wall.
- **Wednesday:** prompt — one question for the feed ("what's the smallest thing you could ship this week?"). Drives async engagement.
- **Thursday:** resource — one link, one tool, one pattern. No roundups. One thing.
- **Friday:** hot-seat call — "Lab Monday, applications close Sunday, here's the form."
- **Saturday:** off, or a builder spotlight if there's a story worth telling.
- **Sunday:** off. Will reviews hot-seat applications and picks the 5.

If a week gets busy, the non-negotiables are: **replay drop (Tues)** and **hot-seat call (Fri).** Everything else can slip.

---

## 10. WHAT NOT TO DO

- **No cold acquisition through Skool ads yet.** Track B stays warm-first until the paid tier is proven (>15 paying members, >3 months retention on the first cohort).
- **No free tier beyond the 7-day trial.** Not now, not "just to seed the feed." Free-forever members don't show up to Labs, don't apply for seats, and dilute the signal. Trial is the on-ramp; after 7 days it's paid or gone.
- **No letting hot-seat applications back up.** If the queue exceeds 15 open apps, add a second weekly Lab **before** raising cap or price. The promise is momentum — a 3-week wait on a wall breaks it.
- **No side channels.** No Discord, no WhatsApp, no private Telegram. Everything in Skool or it doesn't exist.
- **No courses or "vaults."** The product is the pace + the library that accumulates from real Labs. Don't manufacture content to look full.
- **No reviving the founding-20 language.** That model was superseded 2026-07-09. Don't reintroduce it as a promo. Skool platform pricing controls.
- **No pitching community to someone who has an active wall.** Sell them the sprint. Community is for after.
- **No conflating the two 5-caps.** 5 hot seats per Lab ≠ 5 concurrent paid sprints per SKU. Different products, different mechanics, do not describe together.
- **No done-for-you positioning inside the community.** "Live with you on your code, your keyboard" — same as the paid sprints. Never "we build it for you."
- **No conflating sprint SLA with hot-seat SLA.** Sprint applications get a ~5-min reply. Hot-seat applications get selected by Sunday for the following week's Lab. Don't mix them.

---

*Owner: Will. Paired with PRD.md §4. Update this file when the trial-to-paid ratio shifts materially, when a price changes, or when the Lab cadence shifts.*
