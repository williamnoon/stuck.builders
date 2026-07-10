# FORMS — source of truth

*Spec for every form on stuck.builders. Keep this in sync with the live component, the API handler, and PRD.md §7.*

---

## 1. Purpose

Forms are the primary conversion mechanic on stuck.builders. We do not sell via raw checkout — the application form IS the checkout: apply → review (~5 min) → accept → pay. Every landing page (`/`, `/greenfield`, `/brownfield` with `#ceiling` and `#traction` anchor variants) funnels to one form. Because the form is the only path to revenue, its spec must stay in sync across three surfaces: `docs/PRD.md` §7 (the source-of-truth copy), `apps/web/components/ApplicationForm.tsx` (the live component), and `apps/web/app/api/apply/route.ts` (the parser + email template). When any one changes, all three must change together. This doc is the reconciled spec.

---

## 2. Sprint Application Form (`/apply`)

One form, branches on Q1. **Two options** — Launch Sprint SKU is retired; `/brownfield#traction` is a Brownfield Build hero variant angled at "shipped, no users." Traction builders enter through the Brownfield path and their milestone becomes the Day-1 scoped target.

**Component:** `apps/web/components/ApplicationForm.tsx`
**Handler:** `apps/web/app/api/apply/route.ts`
**Post-submit route:** `/thanks?kind={kind}`

### Q1 — Where are you? (radio, required)

Two options, both mapped to a `SprintKind` in `lib/config.ts`. Internal keys `idea` / `build` are retained to preserve API/pixel contracts; external labels are Greenfield / Brownfield.

| Label (external) | Help line | `SprintKind` value (internal) | Price tag shown |
|---|---|---|---|
| **Greenfield — I have/need idea. Nothing built yet.** | $199. no code yet — imaginative solution + PRD + demo. | `idea` | $199 |
| **Brownfield — I started building. I'm stuck.** | $399. project exists — unstuck + deployed live next version. | `build` | $399 |

- Default selection is controlled by `defaultKind` prop (`"idea"` or `"build"`). Landing pages pass this per page — `/brownfield` (including `#ceiling`, `#traction`) defaults to `"build"`; `/greenfield` defaults to `"idea"`.
- The "I have/need" wording is intentional — captures both "I have an idea that needs shaping" and "I need an idea, help me find one." The imaginative-solution deliverable serves both.
- **"Shipped, no users"** builders (the `#traction` variant) enter through the Brownfield path. Their traction milestone becomes what they describe in Q4 and Q5. No new SKU.
- **Do NOT add a `"launch"` option.** The Launch SKU is retired.

### Q2 — Your project (textarea + URL input, at least one required)

Two fields, either satisfies, both allowed:

- `projectText` — textarea, placeholder: *"A few sentences on what it is and who it's for."*
  - Label: *"Q2 — Your project"*
  - Help: *"Describe it in a few sentences, or paste a link — either works."*
- `projectUrl` — `type="url"` input, placeholder: *"https://…"*
  - Label: *"or paste a link (repo, live URL, Lovable/Bolt project, Figma, doc)"*
  - Bare URLs without protocol are accepted; validator prepends `https://` before `new URL(...)`.

### Q3 — About you (GREENFIELD path only, gated)

Only rendered when `q1.value === "idea"` (internal key for Greenfield). Textarea, required on that path.
- Label: *"Q3 — About you"*
- Placeholder: *"your background, your interests, problems close to you that you wish were solved"*

### Q4 — Where exactly are you stuck? (textarea, required)

- Label: *"Q4 — Where exactly are you stuck?"*
- Help: *"2–3 sentences is plenty."*

### Q5 — Day-7 shipped (textarea, required)

- Label: *"Q5 — What would 'shipped' look like for you by Day 7?"*

### Q6 — Contact (required)

- `name` — text input, `autoComplete="name"`, label *"Your name"*
- `email` — `type="email"`, `autoComplete="email"`, label *"Your email"*

### Referral code (optional, auto-filled)

- `ref_code` — hidden or read-only input, auto-populated from the `ref_code` cookie (60-day cookie set by any `?ref=CODE` URL param on any route). Not user-facing unless the code is present; when present, render a small note: *"Referral applied — $100 off. Final price $99 (Greenfield) / $299 (Brownfield) on acceptance."*
- Discount is applied at Stripe payment link stage (Will manually generates the discounted link). Not applied client-side to Q1 price display.

### UTM fields (auto-captured, hidden)

The form auto-captures the following on submit and includes them in the POST payload + application email + Meta Pixel Lead event:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `angle` — derived from the URL hash (`#ceiling` / `#traction`) or from `utm_content` when present

These support per-campaign, per-angle attribution in the weekly funnel review.

### Acknowledgment (checkbox, required)

Single checkbox, must be checked to submit. Copy verbatim:
> *"I understand projects must be legal and non-harmful, and that slots are limited and applications are reviewed."*

Covers three points at once: (a) legal/non-harmful hard line, (b) slots are limited, (c) applications are reviewed (not auto-accepted).

### Client-side validation

Order of checks in `validate()`. Error strings are shown verbatim in the `.form-error` element:

1. `"Please pick where you are."` — no Q1 selected (defensive; the UI always has a default).
2. `"Tell us about your project — a description or a link."` — both `projectText` and `projectUrl` empty.
3. `"Please share a bit about you (background, interests)."` — IDEA path, `aboutYou` empty.
4. `"Tell us where you're stuck."` — `stuck` empty.
5. `"Tell us what 'shipped' looks like by day 7."` — `shipped` empty.
6. `"Your name is required."` — `name` empty.
7. `"Your email is required."` — `email` empty.
8. `"That email doesn't look right."` — email fails regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`.
9. `"The project link doesn't look like a valid URL."` — `projectUrl` present but not parseable as URL (with `https://` prefix fallback).
10. `"Please acknowledge the note about legal / non-harmful projects."` — `ack` unchecked.

Form uses `noValidate` on the `<form>` — browser HTML5 validation is intentionally disabled; all validation flows through `validate()`.

### Submit flow

1. `onSubmit` prevents default, runs `validate()`.
2. On error → `setError(v)`, no network call, no pixel.
3. On success → `setSubmitting(true)`, `POST /api/apply` with JSON payload (`q1Price` = 199 or 399 depending on kind):
   ```ts
   {
     sprintKind, q1Label, q1Price,
     projectText, projectUrl, aboutYou,
     stuck, shipped, name, email, ack,
     ref_code,                                // from cookie, may be ""
     utm_source, utm_medium, utm_campaign,    // from URL, may be ""
     utm_content, utm_term, angle             // angle from hash or utm_content
   }
   ```
4. API handler `parsePayload` re-validates every field server-side (do not trust client).
5. On success (`res.ok && data.ok`):
   - Fire Meta Pixel `Lead` event via `trackLead({ value: PRICES[kind], currency: "USD", content_name: sprintKindLabel(kind), sprintKind, angle, utm_source, utm_campaign, utm_content, ref_code })`.
   - `router.push('/thanks?kind=${kind}')`.
6. On failure → display server's `data.error` string, or fallback: *"Something went wrong. Please email williamdeval@gmail.com directly."*
7. On network throw → *"Network error. Please try again or email williamdeval@gmail.com."*

### Server-side email

Handler sends a Resend email:
- **To:** `process.env.APPLICATIONS_EMAIL`
- **From:** `process.env.APPLICATIONS_FROM_EMAIL` (default `applications@stuck.builders`)
- **Reply-To:** applicant's email
- **Subject:** `[stuck.builders] New application — {name} — {sprintKindLabel(kind)}`
- **Body:** HTML table of all Q&A rows plus submitted-at UTC (`buildHtml`).
- If `RESEND_API_KEY` or `APPLICATIONS_EMAIL` is unset, the handler logs the payload and returns `{ ok: true, mode: "logged" }` — the form still redirects to `/thanks`. This is intentional for local dev; production must have both env vars set.

---

## 3. Post-submit review workflow

Once the applicant hits `/thanks`, the manual pipeline kicks in:

1. **Email lands** in `APPLICATIONS_EMAIL` inbox (Will's inbox). Reply-To is the applicant. Email body includes `ref_code`, `utm_*`, and `angle` fields when present.
2. **Will reviews live — target ~5 minutes.** Will reads applications live during working hours. Occasional exception up to a few hours if Will is inside a Day-1 session or asleep — but never a full day. Uses the four filters (see `docs/FILTERS.md`):
   - Legal / non-harmful (hard line)
   - Fits sprint scope (7 days, one deliverable)
   - Applicant can respond in-flight (async but present)
   - Correct sprint kind (they picked Brownfield but need Greenfield, etc.)
3. **Accepted** → send acceptance email (see `docs/EMAILS.md`) containing:
   - Stripe payment link ($199 Greenfield / $399 Brownfield, Cash App Pay enabled). **If `ref_code` present**, generate a discounted link ($99 Greenfield / $299 Brownfield) and note the $100 referral credit.
   - Cal.com booking link for Day 1 kickoff (~30 min for Greenfield, ~45 min for Brownfield)
   - Sprint start = next Monday
4. **Declined** → send one of the decline templates (see `docs/EMAILS.md`):
   - `decline-clean` — polite decline, no route
   - `decline-wrong-fit-route-X` — decline this kind, suggest the correct sprint (e.g. picked Brownfield but should apply for Greenfield because nothing is built yet)
5. **No response after 5 days** — treat as lapsed. No auto-followup yet.

The form promise on the page (`.form-hint`): *"Reply in ~5 min — accepted or not. Will reads live."* — do not soften this SLA. It is a first-order marketing hook: apply now, hear back before you close the tab.

*(Note: this ~5-min SLA applies to sprint applications only. Skool hot-seat applications have a different SLA — Will picks by Sunday for the following week's Lab. See `COMMUNITY.md` §5.)*

---

## 4. Skool Hot-Seat Application (future, on Skool platform)

Runs inside Skool community, members-only. Not on stuck.builders. Spec kept here so the two forms stay coordinated.

**Purpose:** members apply for a live hot-seat slot in the weekly Lab. 5 seats per Lab.

**Fields:**
- Current wall — what are you stuck on right now? (textarea)
- What you've tried — briefly, what's already been attempted? (textarea)
- What would "unstuck" look like — one sentence, the outcome of a successful hot seat (textarea)
- Preferred session date — dropdown of next 2–3 upcoming sessions

**Constraints:**
- Members-only (Skool auth gates it)
- 5 seats per Lab, first-come after review
- Selection by Sunday for the following week's Lab (different from sprint SLA — do not conflate)

No API integration with stuck.builders yet.

---

## 5. Lead-Magnet Email Capture (future, `/free`)

Purpose: capture emails from top-of-funnel visitors who aren't ready to apply. Feeds a nurture sequence that returns them to `/apply`.

**Fields (minimum viable):**
- `firstName` — text input, required
- `email` — `type="email"`, required, same regex as apply form

**Submit flow:**
1. `POST /api/subscribe` (does not exist yet — to be built)
2. Add to Resend audience (audience ID in env)
3. Trigger nurture sequence (broadcast or Resend automation)
4. Fire Meta Pixel `Lead` event: `trackLead({ content_name: "lead-magnet-{name}" })` where `{name}` is the specific magnet slug (e.g. `"lead-magnet-prd-template"`).
5. Redirect to `/free/thanks` with the magnet download.

**Note:** value/currency are intentionally omitted from the pixel event for lead-magnet leads — they aren't $199/$399 intent signals. Separate the audiences downstream.

---

## 6. Change-control checklist

When editing the application form, all of these must be updated together:

- [ ] `apps/web/components/ApplicationForm.tsx` — UI, state, client validation.
- [ ] `apps/web/app/api/apply/route.ts` — `parsePayload`, `buildHtml` email template, `sprintKindLabel`.
- [ ] `docs/FORMS.md` — this doc.
- [ ] `docs/PRD.md` §7 — only if it's a structural change (new question, removed question, changed acknowledgment copy).

**When adding a new sprint kind:** (Note: Launch is retired. Do not re-add it. Adding another SKU should be a Will decision documented in `PRD.md` first.)
- [ ] `apps/web/lib/config.ts` — extend `SprintKind` type and `PRICES` map.
- [ ] `apps/web/app/api/apply/route.ts` — update `isSprintKind` guard and `sprintKindLabel`.
- [ ] `apps/web/components/ApplicationForm.tsx` — add Q1 radio option and update `sprintKindLabel` copy (currently duplicated; consider hoisting to `lib/config.ts` if a third kind ships).
- [ ] `docs/PRD.md` §7 — add the new price/label row.
- [ ] `docs/FORMS.md` §2 Q1 table — add the new row.
- [ ] `docs/OFFER.md` — add the offer if it's a new sprint (not just a Q1 re-slice or landing-page variant on an existing SKU).

---

## 7. Error-state fallbacks

The form must never silently drop an applicant. If the API 500s or the network fails, the human fallback is `williamdeval@gmail.com` — displayed verbatim in the error message. Keep that email address in the copy; do not swap for a support alias until one is stood up and a redirect from the personal address is in place.

Current fallback strings (do not change without updating this doc):
- Server error: *"Something went wrong. Please email williamdeval@gmail.com directly."*
- Resend send error: *"Could not send. Please email williamdeval@gmail.com directly."*
- Network throw: *"Network error. Please try again or email williamdeval@gmail.com."*

The `/thanks` page is served regardless of whether Resend was configured (see §2, dev-mode logging). This means a broken production Resend config would silently succeed from the applicant's view — monitor `APPLICATIONS_EMAIL` inbox daily to catch drift.
