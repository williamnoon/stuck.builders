# FORMS — source of truth

Two forms on the site:

1. **Application form** — `apps/web/components/ApplicationForm.tsx`, submitted to `POST /api/apply`.
2. **Newsletter form** — `apps/web/components/WeeklyDropForm.tsx` (on `/free`), submitted to `POST /api/newsletter`.

Change-control: touch the component, the API route, and this doc together. Log drift in `ROADMAP.md`.

---

## 1. Application form

Single component, variant-aware. URL params drive labels + payload:

- `?kind=build&variant=build-b` → The Build (virtual)
- `?kind=build&variant=build-live` → The Build LIVE (in-person)
- No params / unknown → `variant=legacy` fallback

### Questions (6, in order)

1. **What business do you run?** (short text, required)
2. **What tools + AI are you using today?** (multiline, required)
3. **What eats the most time?** (multiline, required)
4. **What does the dream look like?** (multiline, required)
5. **Your name** (short text, required)
6. **Email** (email, required) + **Phone** (tel, required)

Plus:

- Legal-line acknowledgment checkbox (required).
- Hidden honeypot field (bot trap — non-empty = drop).
- Hidden `kind` + `variant` fields prefilled from URL.

### Validation rules (client-side, inline per-field errors)

Each field renders its own error under the input. No blanket "please check the form" error at bottom.

**Email:**
- Regex: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
- Soft warn (does NOT block submit) on common TLD/domain typos:
  - `.con` → suggest `.com`
  - `.cmo` → suggest `.com`
  - `.co,` → suggest `.com`
  - `gmial` → suggest `gmail`
  - Warning renders in muted amber below the field, submission still allowed.

**Phone:**
- Strip everything except digits and a single leading `+`.
- Require 7–15 digits (E.164 valid range).
- **Hard block on US 555 area code** — NANP-reserved fake range, no real US number uses it. Blocks bots + accidental test-value submissions.
- Error copy suggestions:
  - Too short: "Phone number looks too short — need at least 7 digits."
  - Too long: "Phone number looks too long — max 15 digits."
  - 555 area code: "That looks like a placeholder number. Enter a real phone."

**Text fields:** required, trim whitespace, min length 2.

**Checkbox:** required.

### Submission

`POST /api/apply` payload:

```
{
  kind: "build" | ...,
  variant: "build-b" | "build-live" | "legacy",
  business: string,
  toolsAi: string,
  timeEater: string,
  dream: string,
  name: string,
  email: string,
  phone: string,
  acknowledged: true,
  hp: ""  // honeypot
}
```

On success:
- Fire Meta Pixel `Lead` event.
- Redirect to `/thanks?variant=<variant>`.

On Resend failure or missing key:
- Log + return `{ok:true, mode:"logged"}` (dev fallback).
- Still redirect to `/thanks` — do not surface infra errors to applicant.

### Resend email spec

- `to`: `APPLICATIONS_EMAIL` split on comma, trimmed.
- `from`: `APPLICATIONS_FROM_EMAIL` (single address).
- `subject`: `[<VARIANT>] <name> — <business>`.
- Body: plain text, one question per line, name/email/phone at bottom, apply timestamp.

---

## 2. Newsletter form (weekly drop)

Rendered on `/free`. Simple email opt-in.

- Fields: email only.
- Same email regex + typo soft-warn rules as above.
- Honeypot.
- `POST /api/newsletter`. Same Resend fallback pattern.
- Success state: inline "You're in — Friday 8am ET."

---

## Change-control checklist

When touching form structure, validation, or payload:

1. `apps/web/components/ApplicationForm.tsx`
2. `apps/web/app/api/apply/route.ts`
3. `apps/web/components/WeeklyDropForm.tsx` (if newsletter form changes)
4. `apps/web/app/api/newsletter/route.ts`
5. `apps/web/app/thanks/page.tsx` (if variant handling changes)
6. This doc
7. `ROADMAP.md` — log any deferred drift

Never propose a pay-first flow. See `CLAUDE.md` §4.
