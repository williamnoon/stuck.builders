# STUCK TO SHIPPED — SKOOL POST LIBRARY
*Copy-paste templates for the Ship Club community feed. Will fills the `{{VARIABLES}}` and posts. Paired with `docs/COMMUNITY.md`.*

---

## 1. Purpose & Voice

Skool posts do two jobs. **Retention** — give members a reason to open the app daily and keep walking-pace momentum between sprints (Tier 3 Models / continuity). **Leads** — public posts that get reshared pull warm traffic back to `/apply` and `/community` (Tier 2 Leads / content). Every post pushes at least one Hormozi lever: dream outcome named, likelihood proven with a real case, effort reduction shown, loss framed honestly, or hot-seat scarcity stated as a fact (5 seats/session, applied for).

Voice: direct, honest, engineer-facing. No hype. No fabricated wins. No guru posts. Handwritten-note asides OK when they carry information. Every post ends with a specific action — apply for a hot seat, RSVP the live session, reply in comments, or DM Will.

---

## 2. Weekly Cadence

Confirm the recurring live session day as `{{SESSION_DAY}}` (working assumption: Tuesday 11am PT — Will to confirm). Aim for 4–5 posts/week. Two are non-negotiable: **Post-Session Recap** and **Hot-Seat Callout**. The rest slip when the week gets loud.

| Day | Post Type | Non-negotiable? |
|---|---|---|
| Mon | This-Week Roadmap + who's in the hot seat | No |
| `{{SESSION_DAY}}` AM | Live Session Reminder | Yes (post live) |
| `{{SESSION_DAY}}` PM | Post-Session Recap | Yes |
| Wed | Library Drop — "we've solved this before" | No |
| Thu | Member Win / Version Map snapshot | No |
| Fri | Hot-Seat Application Callout for next week | Yes |
| Sun | Weekly Ship Roundup + apply reminder | Optional |

Rotate in: 7-Day Trial + Annual-Save reminder (monthly, Template 7), AMA prompts (biweekly), Sprint-Grad Return posts (as they land), Public Lead-Magnet posts (monthly).

---

## 3. Post Templates

Each template marked `[MEMBERS-ONLY]` or `[PUBLIC — shareable]`.

---

### Template 1 — Hot-Seat Application Callout `[MEMBERS-ONLY]`

**When to use:** Every Friday, for the following `{{SESSION_DAY}}` session. Also Monday reminder if seats remain.
**Purpose:** Scarcity (5 seats, applied for), likelihood (name last week's win).
**Length target:** 120–180 words.
**CTA:** Apply link.

```
Hot seats open for {{SESSION_DATE}}.

5 seats. Applications close Sunday night. I pick by Sunday, everyone hears back Monday morning.

If you're stuck on something specific and want 10 minutes of live work on it — apply. If you're not on the hot seat, you still get the whole session live plus the replay tagged in the library.

What I need in the application:
→ Current wall (2–3 sentences, be specific)
→ What you've already tried
→ What "unstuck" looks like by end of session

Last week {{LAST_WEEK_MEMBER}} came in stuck on {{LAST_WEEK_PROBLEM}} and left with {{LAST_WEEK_OUTCOME}}. Recording is tagged {{LIBRARY_TAG}} in the library.

Apply here: {{HOT_SEAT_APPLY_URL}}

— Will
```

---

### Template 2 — Live Session Reminder `[MEMBERS-ONLY]`

**When to use:** Morning of `{{SESSION_DAY}}`, ~3 hrs before session. Post live — do not pre-schedule (session times can slip).
**Purpose:** Retention (show up live), effort reduction (one click to join).
**Length target:** 30–60 words.
**CTA:** RSVP / join link.

```
Lab today at {{SESSION_TIME}}.

Hot seats: {{MEMBER_1}}, {{MEMBER_2}}, {{MEMBER_3}}, {{MEMBER_4}}, {{MEMBER_5}}.

Everyone else — show up live if you can. Best way to learn is watching someone else get unstuck on the same wall you'll hit next month.

Join: {{SESSION_URL}}

Replay drops in the library within 24 hrs, tagged by problem.
```

---

### Template 3 — Post-Session Recap `[PUBLIC — shareable]`

**When to use:** Same day as session, within 2 hrs of wrap.
**Purpose:** Likelihood (real work, real outcomes, timestamps), library seed, public proof.
**Length target:** 200–300 words.
**CTA:** Watch the recording (members) / apply for next week's hot seat.

```
Today's Lab — 5 hot seats, 60 min. Here's what got unstuck:

→ {{MEMBER_1}} — stuck on {{PROBLEM_1}}. Cleared by {{FIX_1}}. Timestamp {{TS_1}}.
→ {{MEMBER_2}} — {{PROBLEM_2}}. Cleared by {{FIX_2}}. Timestamp {{TS_2}}.
→ {{MEMBER_3}} — {{PROBLEM_3}}. Cleared by {{FIX_3}}. Timestamp {{TS_3}}.
→ {{MEMBER_4}} — {{PROBLEM_4}}. Cleared by {{FIX_4}}. Timestamp {{TS_4}}.
→ {{MEMBER_5}} — {{PROBLEM_5}}. Cleared by {{FIX_5}}. Timestamp {{TS_5}}.

Not every seat ships a fix on the call. Two of these {{NUMBER_OPEN}} still have work to do — the session gave them a next action, not a done state. That's the honest version.

Recording is in the library tagged: {{TAGS}}.

Next {{SESSION_DAY}}: 5 more seats. Apply here — {{HOT_SEAT_APPLY_URL}}.

— Will
```

**Public reshare note:** This template is designed to be screenshotted or linked outside Skool. Do NOT include member last names or company details without permission.

---

### Template 4 — Library Drop `[MEMBERS-ONLY]`

**When to use:** Wednesday. Also anytime a member posts a wall we've already solved on a recorded session.
**Purpose:** Effort reduction (search-then-watch beats re-asking), likelihood proof (we've done this before).
**Length target:** 80–140 words.
**CTA:** Watch the recording, comment if the wall is different.

```
Library drop — {{PROBLEM_CATEGORY}}.

We've solved this on the following sessions:

→ {{SESSION_DATE_1}} — {{MEMBER_1}}'s wall: {{SUMMARY_1}}. Watch: {{URL_1}}
→ {{SESSION_DATE_2}} — {{MEMBER_2}}'s wall: {{SUMMARY_2}}. Watch: {{URL_2}}
→ {{SESSION_DATE_3}} — {{MEMBER_3}}'s wall: {{SUMMARY_3}}. Watch: {{URL_3}}

If you're stuck on {{PROBLEM_CATEGORY}} right now — start with the closest one. If the wall looks the same but the fix doesn't hold, comment below and I'll look. If it's actually a new wall, apply for the next hot seat: {{HOT_SEAT_APPLY_URL}}.
```

---

### Template 5 — Member Win / Ship Announcement `[PUBLIC — shareable]`

**When to use:** Thursday or Friday, when a member deploys something. Only with the member's explicit written OK.
**Purpose:** Dream outcome (real proof), likelihood (someone like you shipped).
**Length target:** 150–220 words.
**CTA:** Congrats in comments; visit the shipped thing.

```
{{MEMBER_NAME}} shipped {{PROJECT_NAME}} this week.

What it does: {{ONE_LINE_DESCRIPTION}}
Where they were stuck 30 days ago: {{ORIGINAL_WALL}}
What actually moved it: {{WHAT_UNSTUCK_IT}} (from the {{SESSION_DATE}} session — tagged {{LIBRARY_TAG}})

Live URL: {{LIVE_URL}}

No 10x-in-a-week hype here — this took {{ACTUAL_WEEKS}} weeks of walking-pace work between sessions. That's the deal. Show up when stuck, ship when it's ready.

Drop {{MEMBER_NAME}} a note in the comments.

— Will
```

**Do NOT post if:** the member hasn't given written OK, or the "win" is a marketing metric with no shipped artifact behind it.

---

### Template 6 — Version Map Snapshot `[PUBLIC — shareable]`

**When to use:** Monthly-ish. When a member gives permission to share their Day 1 Version Map as a case study.
**Purpose:** Effort reduction (show the artifact), likelihood (real member, real map), lead magnet (public share pulls traffic).
**Length target:** 180–260 words.
**CTA:** Comment your own current wall / apply for a hot seat / (public) apply for a Brownfield Build.

```
Version Map snapshot — {{MEMBER_NAME}}, {{PROJECT_CATEGORY}}.

[image: Version Map screenshot, with member permission]

Day 1 wall (what they wrote): "{{VERBATIM_WALL}}"

Version Map (what we shipped by end of Day 1 sprint scoping):
→ Where they are now: {{CURRENT_STATE}}
→ Where "done by Day 7" lives: {{TARGET_STATE}}
→ The 5 pushes between here and there: {{PUSH_LIST}}

The Version Map isn't the fix. It's the thing that makes the fix possible. Most stuck comes from not knowing what "next" actually is — the map turns "I'm stuck" into "here's push #2."

If you want your own Version Map without doing the whole sprint — that's what the Lab sessions are for. Apply: {{HOT_SEAT_APPLY_URL}}

If you want the full sprint version (personal Day 1 + 7 daily sessions + ship review): {{APPLY_URL}}

— Will
```

---

### Template 7 — [ARCHIVED 2026-07-09] — 7-Day Free Trial + Annual Save $328 `[PUBLIC — shareable]`

**ARCHIVAL NOTE:** The original Template 7 was the founding-20 progress countdown ($59/mo locked for life, first 20 seats). That pricing model was superseded 2026-07-09 when Skool platform pricing went live at $69/mo or $500/yr with a 7-day free trial. The founding-20 template is retired and must not be used. This slot is replaced with the trial + annual-save template below.

**When to use:** Monthly or when a new campaign is running against warm Skool audiences. Also inside the Skool feed as a nudge for members still on monthly to consider annual.
**Purpose:** Effort reduction (free trial), loss framing (leave $328 on the table if you go month-to-month and stay), continuity signal.
**Length target:** 60–100 words.
**CTA:** Start free trial / switch to annual.

```
Ship Club — 7-day free trial. $69/mo or $500/yr after.

Weekly Labs (live unstick + idea), 5 hot seats per Lab worked on active, searchable library organized by problem, community feed between Labs.

The math: monthly is $69 × 12 = $828. Annual is $500. Save $328 if you know you're staying.

Trial cancels free any time inside 7 days. After: monthly or annual, your call.

Start the trial: {{COMMUNITY_URL}}
```

**Rule:** No fake urgency. No "founding" language. Skool platform controls the price — don't manufacture cohort scarcity.

---

### Template 8 — "We've Solved This Before" Reply Post `[MEMBERS-ONLY]`

**When to use:** When a member posts a wall in the feed that's already answered in the library. Post as a top-level response so the whole community sees the pattern, not just a comment.
**Purpose:** Effort reduction, retention (library gets exercised), signal that Will reads the feed.
**Length target:** 60–120 words.
**CTA:** Watch the recording, comment back if the fix doesn't hold.

```
@{{MEMBER_NAME}} — we've solved this. Two things:

1. Closest match in the library: {{RECORDING_URL}} ({{SESSION_DATE}}, {{ORIGINAL_MEMBER}}'s wall on {{ORIGINAL_PROBLEM}}). Watch from {{TIMESTAMP}}.
2. If the fix doesn't hold for your specific setup — reply here with what broke and I'll look. If the wall is actually different (not just similar), it's a good hot-seat candidate: {{HOT_SEAT_APPLY_URL}}.

For everyone else — this pattern comes up ~monthly. Bookmark the tag {{LIBRARY_TAG}}.
```

---

### Template 9 — Sprint Grad Return Post `[MEMBERS-ONLY]`

**When to use:** Day a sprint graduate joins Ship Club from Day-7 pitch. Post within 24 hrs.
**Purpose:** Welcome, retention (grad has to introduce themselves = commitment), community pattern-building.
**Length target:** 60–100 words.
**CTA:** Welcome in comments; grad posts their intro (see §7).

```
New in: @{{GRAD_NAME}}.

Just finished a {{SPRINT_TYPE}} Sprint — shipped {{WHAT_THEY_SHIPPED}} on Day 7. Now dropping to walking pace.

@{{GRAD_NAME}} — post an intro in the feed when you get a sec. What you're building, where the next wall probably is, one thing you learned in your sprint. Whole community will see it.

Welcome in.

— Will
```

---

### Template 10 — Weekly Ship Roundup `[PUBLIC — shareable]`

**When to use:** Sunday. Only include members who OK'd being named. If nobody shipped, do NOT fabricate — post an AMA prompt (Template 11) instead.
**Purpose:** Retention (see progress), likelihood (accumulating proof), public shareable.
**Length target:** 180–260 words.
**CTA:** Apply for a hot seat next week / (public) explore sprints.

```
This week in Ship Club:

Shipped:
→ {{MEMBER_1}} — {{WHAT_1}} ({{URL_1}})
→ {{MEMBER_2}} — {{WHAT_2}} ({{URL_2}})
→ {{MEMBER_3}} — {{WHAT_3}} ({{URL_3}})

Cleared a wall on the {{SESSION_DAY}} live:
→ {{HS_MEMBER_1}} — {{HS_PROBLEM_1}}
→ {{HS_MEMBER_2}} — {{HS_PROBLEM_2}}

Still walking:
→ {{IN_PROGRESS_1}}
→ {{IN_PROGRESS_2}}

Next {{SESSION_DAY}}: 5 hot seats. Apply by Sunday night — {{HOT_SEAT_APPLY_URL}}.

This is what walking pace looks like. Not everyone ships every week. The point is nobody stalls out — every wall gets a seat inside 2 weeks.

— Will
```

---

### Template 11 — AMA / Community Prompt `[MEMBERS-ONLY]`

**When to use:** Biweekly, or any week nothing shipped. Also mid-week if feed is quiet.
**Purpose:** Retention (engagement), library seed (best questions become recordings).
**Length target:** 40–80 words.
**CTA:** Reply with your question; top questions get answered on next live.

```
Open thread — drop your current wall in the comments.

Doesn't have to be polished. One line is fine. "Stuck on X" is enough.

Top {{NUMBER}} questions get answered live on {{SESSION_DAY}}, in order, before hot seats. Rest get pointed to the library or invited to apply for a seat.

Go.

— Will
```

---

### Template 12 — Public Lead-Magnet Post `[PUBLIC — shareable]`

**When to use:** Monthly. Designed to be reshared outside Skool (LinkedIn, X, IH). Quietly funnels to `/apply` or `/community`.
**Purpose:** Tier 2 Leads via content magnet. Effort reduction (free useful thing), likelihood (real member case).
**Length target:** 220–300 words.
**CTA:** DM Will for the template / apply / join community.

```
The Version Map template — free, no email gate.

Every Brownfield Build starts with the same artifact: a Version Map. One page. Left side: where you are (with commit hash + last thing that worked). Right side: where "shipped" lives by Day 7. Middle: the 5 pushes between them.

Most stuck builders don't have a stuck problem. They have a "what's next" problem. The Version Map turns "I'm stuck" into "push #2 is broken, here's the specific line."

Template's here: {{TEMPLATE_URL}}

If filling it out reveals you don't know push #2, that's what the Labs are for ({{COMMUNITY_URL}}) or a Brownfield Build ({{APPLY_URL}}) — whichever pace fits.

If you fill it out and immediately know push #2, you didn't need us. Ship it.

— Will (@{{HANDLE}})
```

**Reshare rules:** Public post. No member names without permission. Do not gate with email at launch — the point is spread.

---

### Template 13 — This-Week Roadmap `[MEMBERS-ONLY]`

**When to use:** Monday morning.
**Purpose:** Retention (open the app for the plan), scarcity (who's in the seats).
**Length target:** 80–140 words.
**CTA:** Show up live / apply for next week.

```
This week in Ship Club — {{DATE_RANGE}}.

→ {{SESSION_DAY}} {{SESSION_TIME}}: Lab. Hot seats: {{HS_1}}, {{HS_2}}, {{HS_3}}, {{HS_4}}, {{HS_5}}.
→ Wednesday: library drop — {{PROBLEM_CATEGORY}}.
→ Friday: next-week hot-seat callout.

Non-session days: feed's open. Post your wall, tag it, get eyes before the live.

Applications for next {{SESSION_DAY}}'s seats open Friday, close Sunday night.

— Will
```

---

## 4. Skool Pricing — Trial + Annual Rules (replaces Founding-20 Countdown)

- **Skool pricing is $69/mo or $500/yr with a 7-day free trial.** Live on the Skool platform — that's the price. Do not fabricate a discount, a founding cohort, or a countdown.
- Template 7 (trial + annual-save reminder) posts monthly, plus ad-hoc when a warm-traffic campaign is running.
- **Founding-20 language is retired.** Do not revive it. Any post that says "$59 locked for life" or "first 20 members" is stale and must not go up.
- **Annual bias is a retention signal.** Members who go annual stay longer. Nudge annual on renewal reminders — never on first-day trial signups (that's over-selling).
- Trial cancels free at any point inside 7 days. After trial: monthly or annual, member's call. No clawback on cancel-after-paid.

---

## 5. Hot-Seat Mechanics (posts must reflect this)

Every post that references the live session must obey:

- Hot seats are **applied for**, not booked. Copy says "apply" — never "book a call."
- **5 seats per session.** State the number. Don't inflate.
- Applications close Sunday night; Will picks by Sunday, applicants hear back Monday.
- Everyone else watches live and gets the replay in the library within 24 hrs.
- If not selected, application rolls to next week's queue automatically. No wall waits more than 2 weeks (per `COMMUNITY.md` §5).
- Copy must direct to `{{HOT_SEAT_APPLY_URL}}` — never to a Calendly, never to a Stripe link, never to "DM me."

---

## 6. Public vs. Members-Only Summary

| # | Template | Visibility |
|---|---|---|
| 1 | Hot-Seat Application Callout | MEMBERS-ONLY |
| 2 | Live Session Reminder | MEMBERS-ONLY |
| 3 | Post-Session Recap | PUBLIC — shareable |
| 4 | Library Drop | MEMBERS-ONLY |
| 5 | Member Win | PUBLIC — shareable |
| 6 | Version Map Snapshot | PUBLIC — shareable |
| 7 | 7-Day Trial + Annual-Save reminder | PUBLIC — shareable |
| 8 | "We've Solved This Before" | MEMBERS-ONLY |
| 9 | Sprint Grad Return | MEMBERS-ONLY |
| 10 | Weekly Ship Roundup | PUBLIC — shareable |
| 11 | AMA Prompt | MEMBERS-ONLY |
| 12 | Public Lead-Magnet | PUBLIC — shareable |
| 13 | This-Week Roadmap | MEMBERS-ONLY |

Public posts should be safe to screenshot to LinkedIn/X. Members-only posts assume the reader is inside.

---

## 7. The Day-7 Sprint-Grad Handoff

The day a sprint grad joins Ship Club (they take the Day-7 pitch offer):

**Step 1 — Will posts Template 9 (Sprint Grad Return)** within 24 hrs of join. Names them, names the sprint type, names what they shipped. No project details beyond what the grad already published publicly.

**Step 2 — Grad's first-post prompt** (Will DMs this to the grad, they post it themselves in the feed):

```
Hey — I'm {{GRAD_NAME}}.

Just finished a {{SPRINT_TYPE}} Sprint. Shipped {{WHAT_YOU_SHIPPED}} — live at {{URL}} (if you want to share) or in progress (if not).

Where I was stuck 7 days ago: {{ORIGINAL_WALL}}
What actually moved it: {{ONE_THING_THAT_UNSTUCK_ME}}
Where the next wall probably is: {{NEXT_WALL_GUESS}}

Here for walking pace. Nice to meet everyone.
```

**Why grad posts it themselves (not Will):** commitment device. Members who post an intro in the first 72 hours retain. Members who don't, don't (per `COMMUNITY.md` §7 nudge cadence).

---

## 8. Content NOT to Post

Hard nos. Do not post any of the following, ever:

- **Fake wins.** "This member 10x'd MRR in 3 days." Not real. Not posted.
- **Guru posts.** "The ONE thing every builder gets wrong." No.
- **Screenshots without permission.** Includes code, Version Maps, Loom stills, DMs, Skool comments from other members.
- **Anyone's code or Version Map without explicit consent.** Even redacted. Ask.
- **Cold DMs disguised as "just checking in."** If it's a sales DM, say so.
- **Emoji-heavy hype posts.** See §11.
- **"Instant unstuck" or "unstuck in one call" copy.** Session runs 60 min, 5 hot seats, some walls don't close on the call. Say the truth.
- **Community pitched to someone with an active wall.** They need a sprint. Community is for after (per `COMMUNITY.md` §10).
- **Discounts on Skool price to close a hesitant grad.** $69/mo or $500/yr is the price — Skool platform controls it. Never lower. Never fabricate a "just for you" discount.

---

## 9. Automation & Scheduling

**Pre-schedulable** (queue in Skool or a scheduler, safe to auto-post):
- Template 4 — Library Drop
- Template 7 — 7-Day Trial + Annual-Save reminder (monthly cadence)
- Template 10 — Weekly Ship Roundup (draft Saturday, post Sunday)
- Template 12 — Public Lead-Magnet
- Template 13 — This-Week Roadmap

**Must post live** (do NOT pre-schedule — content changes at the last minute):
- Template 1 — Hot-Seat Callout (seats fill unpredictably; state actual number remaining)
- Template 2 — Live Session Reminder (session times slip)
- Template 3 — Post-Session Recap (real outcomes, real timestamps)
- Template 5 — Member Win (requires last-minute permission check)
- Template 8 — "We've Solved This Before" (responds to real feed activity)
- Template 9 — Sprint Grad Return (triggered by real join event)
- Template 11 — AMA Prompt (post when feed is actually quiet, not on a schedule)

At launch: no scheduler. Post live for the first 90 days so patterns settle. Add scheduling only after cadence proves stable.

---

## 10. Response SOP

When a member comments a problem on any post:

1. **Reply inside 24 hours.** Personal, not templated. Address by name.
2. **If the problem is already solved in the library** → link the recording with a timestamp, add one line of context. Don't just drop the URL.
3. **If it's a great hot-seat candidate** → say so, and link `{{HOT_SEAT_APPLY_URL}}`. Don't be coy.
4. **Never reply "let's take this to DM" as the entire response.** Always give at least one substantive public line first. The public line is the value — the DM is the follow-up.
5. **If it's outside scope** (not a build/idea/launch wall — e.g. tax advice, personal crisis) → say so honestly and point them to the right resource.
6. **If the problem is F1 (illegal / harmful / predatory)** → decline and remove per `COMMUNITY.md` and `FILTERS.md`.

---

## 11. Emoji Policy

Files in this repo: no emojis (per `CLAUDE.md` §6). Skool posts are user-facing chat, not repo files — a single emoji is OK **only when it does a job**:

- `→` arrow: fine, communicates "next step" or list item
- `✅` checkmark: fine on a checklist item
- Any other emoji: default no

**Hard rule: one emoji max per post, and only if it carries information.** Never use `🚀 🔥 💯 ⚡ 🎯`. Never use emojis for tone or hype. If a post reads flat without emojis, the copy is the problem — fix the copy, don't add emojis.

---

## 12. Framework Alignment Notes

- **Tier 1 (Offers):** every post either names a real dream outcome (shipped deployed app, cleared wall, first users reached) or points at a real guarantee (5 seats per Lab, 7-day free trial, library access). No inflated stacks in posts — the stack lives on landing pages.
- **Tier 2 (Leads):** Templates 3, 5, 6, 7, 10, 12 are the public/shareable set — designed to be reshared outside Skool and pull warm traffic to `/apply` or `/community`.
- **Tier 3 (Models):** the whole post library serves continuity — retaining sprint grads at $69/mo (or $500/yr) indefinitely and back-flowing them into another $399 Brownfield Build when the next wall shows up.
- **Marketing honesty:** no "instant unstuck," no "10x in a week," no fabricated metrics. Sessions are 60 min, 5 hot seats, some walls need a follow-up. Say it.
- **Apply-first:** every hot-seat and sprint CTA uses "apply," never "book" or "buy." Do not "fix" this to a checkout link.

---

*Owner: Will. Paired with `docs/COMMUNITY.md` and `docs/PRD.md` §4. Update this file when the Lab day/time is confirmed, when a template stops working, or when Skool pricing changes on the platform.*
