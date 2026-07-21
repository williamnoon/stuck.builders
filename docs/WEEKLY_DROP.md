# The Weekly Drop — content spec

The email that goes out to `/free` signups + any list Will maintains. Fixed cadence, fixed format, so subscribers know what they're getting and Will knows exactly what to write each week.

---

## Cadence + rhythm

- **Ships every Friday, 8:00 AM ET.**
- **One email per week.** Zero exceptions. Skip weeks silently — do not send filler.
- If you don't have real content by Thursday night → **skip**. A skipped week beats a hollow one.

The whole promise of the drop is "the actual thing Will did this week." Filler destroys that in one send.

---

## The reader — who's on the list

- **Free-cheatsheet signups** from `/free` (primary source)
- **Past applicants** who didn't buy (opted in during apply)
- **Graduates** of The Build (opted in after — separate segment eventually)
- **Cold traffic** who signed up from ads or footer

Voice assumes they're **builder-curious, non-technical business owners** who took a real interest but haven't bought yet. Some are tinkerers, some are shopping. Write for the middle.

---

## Fixed format — 5 sections, 250-450 words total

Every drop has these 5 sections in this order. Nothing else. If a section has nothing worth saying that week, use the "empty state" line (below) — do not skip the section.

### 1. **The Build of the Week** (1 paragraph, ~80 words)
The most interesting thing Will actually built or shipped in the last 7 days. Real system. Real business. Named specifically.

Example:
> *"Wired a Lead-Reply Agent into a Charleston roofer's Gmail this week. Every form-fill now gets a same-day draft in his voice, referencing his last 20 quotes for tone. He wakes up to a folder of ready-to-send replies instead of a stack of leads gone cold. Took ~3 hrs total — 45 min of the Build session was setup, the rest was tuning voice + edge cases."*

**Rules:**
- Must be a real build (Will's own business or a Build customer, with permission)
- Must name the system + the outcome
- No fake numbers, no vanity metrics
- **Empty state** (if no build shipped): *"Skipped a build this week — spent it on the priors doc for the trades vertical. Better to build twice next week than half-build once now."*

### 2. **The Skill of the Week** (1 tip, ~60 words)
One concrete, immediately useful thing about Claude Code, agents, or AI OS-building. Not a "productivity tip" — a **muscle-memory unlock** the reader can use today.

Example:
> *"The `/skill` command works in the middle of a session, not just at start. Type `/skill add-radar` mid-flow to inject a skill you didn't know you needed until the wall showed up. Saved me 20 min on Wednesday."*

**Rules:**
- Must fit in 60 words or less
- Must be actionable in the next 5 min
- **Empty state**: *"No skill unlock this week worth pinning. Next Friday."*

### 3. **The Wall of the Week** (1 paragraph, ~80 words)
Something that broke. Honest. What the wall was, how Will got past it, what he learned. This is the trust builder — it says "I hit walls too, and I don't hide them."

Example:
> *"Vercel's OpenAI SDK version pinned to a version that broke Claude's tool-use format on Tuesday. Spent 40 min chasing a phantom bug in my agent before I realized the SDK was silently downgrading calls. Fix: pin `@ai-sdk/anthropic` to 3.x explicitly in package.json. Never trust `latest`."*

**Rules:**
- Must be a real wall Will actually hit that week
- Must name the fix, not just the pain
- **Empty state**: *"No new walls this week. Suspicious — probably means I'm not shipping enough."*

### 4. **The Highlight** (1 line, one link, ~25 words)
One outside thing worth pointing at. A tool release, a talk, a build someone else shipped, a paper, an Anthropic docs update. **One only.** Not a link dump.

Example:
> *"Anthropic dropped Claude Sonnet 4.7 this week. If you're on 4.6, the tool-use fidelity gain alone is worth swapping — I felt it inside 10 min of switching."*

**Rules:**
- One link maximum. If nothing outside catches Will's eye, skip.
- No affiliate links, no partners, no reciprocity trades
- **Empty state**: *"Nothing outside caught me this week."*

### 5. **The Offer** (2 lines, unchanging template)
The soft close. Same wording every week — familiarity + zero pressure. Vary the middle sentence based on seat availability.

Fixed template:
> *"The Build is $1,995 launch (first 10 seats, then it goes up). [Next week has 3 open seats.] Reply to this email if you want in — I read every reply."*

**Rules:**
- Never change the price framing
- Middle sentence is the only dynamic bit — update seat count each Friday morning
- If seats are gone: *"Next week is full — I'll open new seats Monday."*

---

## Voice + tone rules

- **Second-person direct** ("you", not "one" or "folks")
- **Contractions** ("I've", "you're", "won't"). Don't sound like a press release.
- **No emojis** in any drop, ever
- **No hype words**: "game-changing", "revolutionary", "hack", "unlock" (unless it's literal — "the /skill unlock is …")
- **No fake urgency** in the middle sections. The offer section is the only place scarcity language lives.
- **Numbers only when real**: "45 min" is fine if it took 45 min. "10x faster" is banned unless measured.
- **Names when possible**: real client names (with permission), real tool names, real command names. Specificity is the differentiator.

---

## What makes a drop worth reading (the truth test)

Before hitting send, Will asks:
1. Does this teach someone one concrete thing they can do today?
2. Did I actually build the thing in section 1, this week?
3. Would I read this if it landed in *my* inbox from a stranger?

If any answer is no → skip the week.

---

## Distribution mechanics

**Tool**: Resend Broadcasts (in-place with our existing `RESEND_API_KEY`). List is stored in Resend Audiences.

**Send flow**:
1. Signups from `/free` (via `WeeklyDropForm`) hit `/api/newsletter` → Will gets notification → Will adds to Resend Audience manually (v1)
2. Once list is >100, wire double-opt-in confirmation email
3. Once list is >500, consider dedicated tool (Buttondown / ConvertKit) — until then Resend is fine

**Archive on site** (optional v2): every past drop published at `/drop/{yyyy-mm-dd}` so cold traffic can browse past drops as social proof + SEO.

---

## What NOT to include, ever

- Case studies with fake numbers
- Reposts of Twitter threads
- AI-generated fluff (LLM writes the outline, Will writes the words)
- Sponsored links / paid content
- More than one CTA
- More than 450 words total

The moment the drop becomes noise, subscribers leave and don't come back.

---

## Backup plan if Will misses a Friday

Send **nothing**. No auto-drip, no "sorry we're late", no filler. A missed Friday communicates "quality control > cadence". A filler drop communicates "cadence > you".

The reader trusts the empty inbox more than the padded one.
