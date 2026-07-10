# THE PLAN — Free Course + Skool + Sprints

> Full plan draft. Will edits from here. Everything with `TODO:` needs Will's call before ship.
> Framework: Hormozi three-tier alignment.
> **Leads:** the free course = the top-of-funnel content play.
> **Offers:** Greenfield + Brownfield Builds stay as grand-slam paid offers (Brownfield has three hero variants on one page: `/brownfield`, `/brownfield#ceiling`, `/brownfield#traction`). Launch Sprint SKU retired.
> **Models:** Skool $69/mo or $500/yr with 7-day free trial = continuity engine; sprints = high-ticket back-end.

---

## 1. What changed

Course is **FREE.** Delivered on YouTube (public, discoverable, shareable). First module = the trip-wire that pulls people into the funnel. Whole course exists to prove value publicly and funnel to Skool + sprints.

**Skool has native Stripe integration** — Skool's own paid-group mechanism uses Stripe under the hood. We use that for the Community subscription: **$69/mo or $500/yr with a 7-day free trial** (live on Skool platform). No founding tier. We don't build our own webhook infrastructure for Skool billing.

---

## 2. The updated ladder

```
┌──────────────────────────────────────────────────────────────────┐
│  FREE — TOP OF FUNNEL (Hormozi Leads tier)                       │
├──────────────────────────────────────────────────────────────────┤
│  YouTube course — 5 modules, public, evergreen                   │
│    "You have AI. You still don't know how to ship."              │
│    → free content that ships a v1 by module 5                    │
│    → CTA on every module: join Skool OR apply for a sprint       │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  PAID FRONT DOORS (Hormozi Offers tier)                          │
├──────────────────────────────────────────────────────────────────┤
│  Greenfield Build — $199 / 7 days — imaginative solution + demo  │
│  Brownfield Build — $399 / 7 days — "unstuck + deployed live"    │
│  Brownfield #ceiling — $399 — Lovable/Bolt ceiling hero variant  │
│  Brownfield #traction — $399 — shipped-no-users hero variant     │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  CONTINUITY (Hormozi Models tier)                                │
├──────────────────────────────────────────────────────────────────┤
│  Skool Community — $69/mo or $500/yr · 7-day free trial          │
│    ~5 Labs/week (live unstick + idea) · library · community feed │
│    5 hot seats per Lab · payments via Skool's native Stripe      │
└──────────────────────────────────────────────────────────────────┘
```

LTV (illustrative full chain): free course viewer → $199 Greenfield → $399 Brownfield → $69/mo (or $500/yr) Skool = **$598 upfront + $69/mo indefinite** (or $500/yr, saves $328/yr).

*Launch Sprint SKU is retired. Traction is a Brownfield Build hero variant (`/brownfield#traction`) whose Day-7 target is a traction milestone, not a code feature.*

---

## 3. The free YouTube course — spec

**Name:** `TODO: Will names.` Working titles: *"Ship With AI"*, *"Idea → Live URL"*, *"The Build"*, *"Zero to v1"*.

**Format:** 5 modules. Each module = one YouTube video, 8–20 min. Screen-recording + face cam. No paid production. Recorded on the same laptop the sprints ship from.

**Modules:**

1. **Module 1 — The Build Brief (trip-wire).** The 5-question self-audit that decides if the idea is worth building. F1 hard-line check. Deliverable: one-page Build Brief downloadable as a PDF (email-gated → this is the first email capture).
2. **Module 2 — Tool selection.** Pick a high-level builder + a low-level AI editor. Set up both. Prompt fluency.
3. **Module 3 — Ship the v1 skeleton.** Scaffold in the high-level tool. Get to a preview URL.
4. **Module 4 — Extend & own.** Move the critical piece to the low-level tool. Platform-independence pattern.
5. **Module 5 — Deploy & demo.** Custom domain, deployed. Where to go next (Skool for pace / sprint for a jump).

**Each module ends with two CTAs:**
- **Free next move:** "Get the Build Brief PDF" (email opt-in) OR "Get the next module by email" (email opt-in).
- **Paid next move:** "Stuck between modules? $69/mo (or $500/yr, 7-day free trial) in Skool" OR "Want a private breakthrough this week? Apply for a Brownfield Build."

**Marketing honesty check:** the course promises a v1 skeleton by end of module 5. Does NOT promise a business, customers, or a finished product. Says so on every module intro.

---

## 4. The trip-wire mechanic (Module 1 as lead magnet)

Module 1 is the classic Hormozi lead magnet. Watch → get the PDF Build Brief → we capture the email → nurture sequence begins.

**Flow:**
1. Viewer lands on YouTube (via ads or organic).
2. Watches Module 1.
3. Video CTA + pinned comment: "Get the Build Brief template — link in description."
4. Clicks link → lands on `/free` on the site (new page).
5. Enters email → gets the PDF + kicks off the 7-email nurture sequence.
6. Nurture pitches Skool + sprints over 7 days.

**PDF Build Brief content (the deliverable):**
- The 5 questions (see PRD.md §6 four filters + module 1 spec).
- F1 hard line acknowledgment.
- Blank one-page template.
- On the back: "how to know which offer is right for you" — the ladder decision-tree.

---

## 5. The funnel (top to bottom)

```
YouTube video (free content, evergreen + ads)
    ↓
YouTube pinned comment + description link
    ↓
stuck.builders/free — landing page
    ↓
Email opt-in → Build Brief PDF + first nurture email
    ↓
7-email nurture sequence over 7 days:
  Day 0: PDF delivery + welcome
  Day 1: "The three kinds of stuck" — routes viewer to correct offer
  Day 2: case study / process proof (once we have one; process proof pre-launch)
  Day 3: Skool community pitch — $69/mo or $500/yr, 7-day free trial
  Day 4: Sprint pitch tailored to their answer (idea vs. build vs. traction)
  Day 5: objection handling — the guarantee, apply-first, four filters
  Day 6: last-nudge — one clear CTA to apply or subscribe
    ↓
Two conversion targets:
  A. Skool $69/mo (or $500/yr, 7-day free trial) subscription (Stripe via Skool)
  B. Sprint application (apply-first, Meta pixel Lead event)
```

---

## 6. Skool + Stripe

Skool handles Community payments natively. Set up:
- One Skool group: `Stuck to Shipped Community` — paid, $69/mo (or $500/yr, 7-day free trial).
- Pricing ($69/mo or $500/yr, 7-day free trial) is live on the Skool platform and configured in Skool's own Stripe settings. No founding tier.
- Annual saves $328/yr; Skool platform controls the price and the trial mechanic.
- No custom webhook infrastructure needed for Skool subscriptions.

We do NOT build a separate "Course" Skool group. YouTube is public — no gating.

**When we ever want to charge for the course** (future — not this pass): we can either
1. Move the course into Skool as a paid group with Skool-native Stripe, OR
2. Sell paid cohort tiers ($99/$299/$800) on our site with our own Stripe.

Not this pass. Course stays free.

---

## 7. What ships in the first 72 hours (Will's shot list)

**Will owns (record + upload):**

- **Today / tomorrow:**
  - Record Module 1 (Build Brief) — 12–15 min, screen recording + face cam. Script beat sheet below.
  - Record Module 2 (Tool Selection) — 15–20 min.
  - Record Module 3 (Ship v1 Skeleton) — 15–20 min, screen recording of an actual scaffold on Lovable + Cursor.
  - Publish Module 1 to YouTube with:
    - Title: `TODO`
    - Description: link to `stuck.builders/free` + Skool + sprint pages
    - Pinned comment: "Get the Build Brief template — [link]"
    - End screen: subscribe + link to Module 2

- **Later this week:**
  - Record Modules 4 and 5.
  - Set up YouTube channel branding (banner, avatar, playlist).

**I own (build on the site):**

- New page `apps/web/app/free/page.tsx` — landing page for the Build Brief opt-in. Reuses the workshop-paper aesthetic. Single-field email form.
- New API route `apps/web/app/api/subscribe/route.ts` — POST email → Resend audience add + PDF delivery + kick off nurture sequence.
- Resend audience + Resend broadcast for the 7-email nurture (all 7 emails drafted).
- New component `apps/web/components/EmailCapture.tsx` — reusable email opt-in.
- New Meta Pixel event: `Lead` fires on subscribe (same event as sprint applications; content_name differentiates: `lead-magnet-build-brief`).
- The PDF itself — `TODO: Will drafts the Brief content OR I generate from PRD.md §6.` I can generate a text-to-PDF Build Brief today if you want.
- Link updates on `/`, `/idea`, `/out` FAQs pointing at the free course as the "not ready to apply" fallback.

---

## 8. Module 1 script beat sheet (so you can record tomorrow)

**Cold open (0–20 sec):** "You have Claude, Cursor, Lovable. You've had this idea for a year. You still haven't shipped. This whole video is the reason why." Face cam.

**Reframe (20 sec–1 min):** the two kinds of stuck. Which one is you.

**The Build Brief (1–8 min):** walk through the 5 questions on a real, live idea. Ideally an idea a viewer would submit — but for now, pick one of your own. Fill out the Brief on-screen.

**Filter 1 (8–10 min):** the hard line. What we don't build. Why.

**Wrap (10–13 min):** "Grab the Build Brief PDF — link in the description. Fill it out on your idea. Module 2 tomorrow — we pick your two tools."

**Pinned comment (posted at upload):** "Build Brief PDF here → stuck.builders/free · If you get through it, next steps: join Ship Club for weekly Labs + hot seats ($69/mo or $500/yr, 7-day free trial) — or apply for a paid sprint if you want a private breakthrough this week. Both linked at the top of the site."

---

## 9. The nurture sequence — 7 emails (drafts to follow this pass)

Sent from `will@stuck.builders` via Resend.

- **Day 0 — Welcome + PDF.** Deliver the Build Brief. One-line intro. What's coming.
- **Day 1 — The three kinds of stuck.** Route the reader to the right offer (Idea / Build / Skool). Traction stuckness routes to Build (`/grow`).
- **Day 2 — Process proof.** Show the sprint mechanic: Version Map, daily sessions, the guarantee. Pre-launch = no testimonials, just structure.
- **Day 3 — Skool community pitch.** $69/mo or $500/yr with 7-day free trial, hot seats (5 per Lab, ~5 Labs/week), library organized by problem taxonomy (Idea → Build → Deploy → Market). What a week inside looks like.
- **Day 4 — Sprint pitch (personalized).** If reader replied to Day 1's routing question, tailored. If not, generic Brownfield Build pitch.
- **Day 5 — Objection handling.** The guarantee. Apply-first (why it exists). The four filters.
- **Day 6 — Last nudge.** One clear CTA: apply OR subscribe. Or reply and tell me what's in the way.

`TODO: Will approves tone + call. I draft each email once approved.`

---

## 10. YouTube growth mechanics (what makes this work)

**Titles that pull:**
- "I built a working app in 4 days using Claude + Cursor. Here's the exact process."
- "This is what stops most people from shipping an app."
- "The 5-question test I run on every idea before writing code."

`TODO: Will picks initial titles. I can generate 10 title candidates per module if needed.`

**Thumbnails:** face + red arrow + one word (STUCK / STOP / BUILD / SHIP). Same workshop aesthetic as the site so branding stays consistent.

**Cross-posting:**
- Twitter/X: thread per module summarizing the video, ending with the link.
- LinkedIn: same thread format for the professional side of the ICP.
- Reddit: r/SaaS, r/indiehackers, r/nocode — one post per module, focused on the tactical lesson (not marketing).

**Ads (Meta first, YouTube after we have 3+ videos live):**
- Meta Ads Track A already spec'd in `docs/ADS.md` — repoint attraction-tier ads to `stuck.builders/free` (email opt-in) instead of directly to sprint pages. Sprint pages become the paid-tier destination for warmer traffic.
- YouTube ads later — pre-roll on relevant tech / indie-hacker content, driving to Module 1.

---

## 11. What this means for existing docs

Once Will approves this plan, cascade updates to:

- `docs/PRD.md` §2 — update ladder to include the free course as top-of-funnel.
- `docs/OFFER.md` — add the course as a Hormozi Leads-tier attraction offer (no price, but real value stack — module count, PDF, community access).
- `docs/COMMUNITY.md` — Skool payments via native Stripe (not our own webhook). Founding-20 configured in Skool.
- `docs/ADS.md` — Track A ads repoint to `/free` for cold traffic; sprint pages stay for warmer / retargeting.
- `docs/SKOOL_POSTS.md` — reference new YouTube modules; drive traffic Skool ← YouTube ← module.
- `apps/web/lib/config.ts` — add `SKOOL_URL` (once created), `YOUTUBE_URL`, `BUILD_BRIEF_PDF_URL`.
- Site pages — add "free course" link in FAQ + footer + a new `/free` page.

---

## 12. Open questions for Will

1. Course name.
2. Module 1 title (YouTube-facing).
3. Recording target: today or tomorrow?
4. Skool group name — is `Stuck to Shipped Community` the exact name?
5. Skool platform pricing is live at $69/mo or $500/yr with 7-day free trial (resolved — no post-founding decision needed).
6. Do I generate the Build Brief PDF today (from PRD.md §6), or does Will draft?
7. Nurture-sequence tone approval — direct/honest same as site copy? (Recommend yes.)
8. Email opt-in required to watch beyond Module 1? (Recommend NO — keep YouTube public; email opt-in is only for the Build Brief PDF and future content. Friction kills reach.)
9. Cross-post to Twitter / LinkedIn / Reddit personally, or use scheduled posts?
10. YouTube channel already exist, or does Will need to spin one up?

---

## 13. What I'll build in the next 30 minutes if you say go

Fast track — no waiting on §12 for the low-risk stuff:

1. Build `apps/web/app/free/page.tsx` — email opt-in landing page for the Build Brief PDF.
2. Build `apps/web/components/EmailCapture.tsx` — reusable component.
3. Build `apps/web/app/api/subscribe/route.ts` — Resend audience add + confirmation email.
4. Add Meta Pixel `Lead` fire on subscribe with `content_name: "build-brief-pdf"`.
5. Draft the Build Brief PDF content as `docs/build-brief-template.md` (Will converts to PDF or I use a headless renderer later).
6. Draft all 7 nurture emails as `docs/emails/*.md`.
7. Update `/`, `/idea`, `/out` FAQ 5 to add "not ready? watch the free course" cross-link.
8. Add YouTube + Skool + free-course links to `Footer.tsx`.

That's the whole visible build. Sub-2-hour execution once you greenlight.

---

## 14. What I'm NOT building yet

Blocked on Will:

- Actual YouTube videos (Will records).
- Skool group creation (already live — $69/mo or $500/yr with 7-day free trial configured on the Skool platform).
- Real PDF file (Will designs, or I generate from markdown once approved).
- The 7 nurture emails sent live (drafted first, scheduled after Will approves tone).
- YouTube channel branding (Will's face/brand).
- Retargeting ads (need first 500+ pixel visits on `/free`).

---

## Bottom line

Course is free. YouTube-delivered. Trip-wire is Module 1's Build Brief PDF via email opt-in. Nurture converts to Skool $69/mo (or $500/yr, 7-day free trial) OR a paid sprint application (Idea $199 or Build $399). Skool's native Stripe handles Community subscriptions. We don't build custom Skool billing. We do build the `/free` landing page + email nurture + PDF.

If you say go, I ship §13 in the next 30 minutes. Recording is on you.
