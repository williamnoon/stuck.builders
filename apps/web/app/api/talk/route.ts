import { anthropic } from "@ai-sdk/anthropic";
import { streamText, tool } from "ai";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";

export const maxDuration = 60;

// Load the canonical agent instructions from the sibling app at cold start.
// Fallback = a short embedded system prompt so /api/talk still serves if the
// instructions file is missing at deploy time.
function loadInstructions(): string {
  const candidates = [
    path.join(process.cwd(), "..", "talk-to-my-ai", "agent", "instructions.md"),
    path.join(process.cwd(), "apps", "talk-to-my-ai", "agent", "instructions.md"),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) return fs.readFileSync(p, "utf8");
    } catch {
      // keep trying
    }
  }
  return (
    "You are the front-of-house agent for stuck.builders. Keep messages 1-3 " +
    "sentences. Ask what business the visitor runs, then their pain, then " +
    "their tools. Stage exactly 3 systems via the stage_system tool. Close by " +
    "pointing to The Build ($1,995, first 10 launch seats). Never fabricate."
  );
}

const ENFORCEMENT_BANNER = `
# CRITICAL — READ BEFORE ANY REPLY

The visitor's UI has TWO surfaces:
1. The chat stream (your assistant text).
2. A right-hand "Fit-Check" sidebar that ONLY populates from stage_system tool calls.

If you describe a system in prose without calling stage_system, the sidebar
stays empty. The visitor reads your description, looks at the empty sidebar,
and thinks the site is broken. This is the #1 failure mode.

**Absolute rule: if your assistant text names, describes, or previews a system
("Build 01", "your first system", "staging X now", etc.), stage_system MUST
fire in the SAME turn for that system.** No exceptions.

Same rule for prep_brief (fires the "prefilled" moment) and capture_lead
(fires when they give you contact). If your text says "I've drafted your
application" or "that's saved", the corresponding tool MUST fire.

---

`;

const SYSTEM_PROMPT = ENFORCEMENT_BANNER + loadInstructions();

type StagedSystem = {
  slot?: number;
  title?: string;
  what?: string;
  wiredTo?: string[];
  estSavedPerWeek?: string;
  sampleLine?: string;
};

type TranscriptTurn = { role: string; content: string };

// Rebuild the client-side staged dashboard + visible transcript from the
// message array the client posts on every turn. Server-only — the tool's
// execute() closure calls this so /api/lead sees the full picture.
function reconstructContext(messages: unknown): {
  staged: StagedSystem[];
  transcript: TranscriptTurn[];
} {
  if (!Array.isArray(messages)) return { staged: [], transcript: [] };

  const bySlot = new Map<number, StagedSystem>();
  const transcript: TranscriptTurn[] = [];

  for (const m of messages) {
    if (!m || typeof m !== "object") continue;
    const msg = m as Record<string, unknown>;
    const role = typeof msg.role === "string" ? msg.role : "";

    // Collect stage_system tool calls from any assistant tool invocations.
    const invocations = Array.isArray(msg.toolInvocations)
      ? (msg.toolInvocations as Array<Record<string, unknown>>)
      : [];
    for (const inv of invocations) {
      if (inv?.toolName === "stage_system" && inv.args && typeof inv.args === "object") {
        const a = inv.args as StagedSystem;
        if (typeof a.slot === "number") bySlot.set(a.slot, a);
      }
    }

    // Only user + assistant text turns in the transcript. Skip system + tool.
    if (role !== "user" && role !== "assistant") continue;

    let text = "";
    if (typeof msg.content === "string") {
      text = msg.content;
    } else if (Array.isArray(msg.content)) {
      // AI SDK message parts: keep only text parts.
      text = (msg.content as Array<Record<string, unknown>>)
        .filter((p) => p?.type === "text" && typeof p.text === "string")
        .map((p) => p.text as string)
        .join(" ");
    }
    text = text.trim();
    if (!text) continue;
    transcript.push({ role, content: text });
  }

  const staged = Array.from(bySlot.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([, v]) => v);

  return { staged, transcript: transcript.slice(-20) };
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Staged systems produced during THIS turn's tool calls. reconstructContext
  // only sees prior turns from the request body, so we capture in-turn stages
  // here and merge before forwarding to /api/lead.
  const inTurnStaged = new Map<number, StagedSystem>();

  // Force-a-tool safeguard: prompt-only enforcement fails, so count prior
  // staged systems from the incoming messages. If < 3, the next turn MUST
  // call a tool (the model can pick stage_system, prep_brief, or capture_lead
  // — but it cannot end with pure prose describing systems).
  const { staged: priorStaged } = reconstructContext(messages);
  const requireTool = priorStaged.length < 3;

  const result = streamText({
    model: anthropic("claude-sonnet-4-5"),
    system: SYSTEM_PROMPT,
    messages,
    maxTokens: 1024,
    // Room for stage_system x3 + prep_brief + capture_lead + notify_will
    // + streamed text at each step.
    maxSteps: 12,
    // Prompt-only enforcement failed reliably. If < 3 systems staged so far,
    // force a tool call for THIS request. Consequence: agent may not emit
    // accompanying assistant text on that turn — the tool cards + sidebar
    // fill IS the response. Text follows on later turns once staging is done.
    toolChoice: requireTool ? "required" : "auto",
    tools: {
      stage_system: tool({
        description:
          "RENDERS one system card in the visitor's right-hand sidebar. This is " +
          "the ONLY way anything appears in that sidebar — prose descriptions do " +
          "not render. You MUST call this tool every time you name a system in " +
          "chat. If your text says 'Build 01' or 'staging your first system' or " +
          "'your second system is X' and you have NOT called stage_system in the " +
          "same turn, the visitor's sidebar stays empty and the demo is broken. " +
          "Maximum 3 per conversation. slot 1 = BUILD FIRST.",
        parameters: z.object({
          slot: z
            .number()
            .int()
            .min(1)
            .max(3)
            .describe("Dashboard position: 1 (build first), 2, or 3"),
          title: z
            .string()
            .max(40)
            .describe("System name in the visitor's language, e.g. 'Quote-Draft Copilot'"),
          what: z
            .string()
            .max(240)
            .describe("One or two sentences: what it does, wired to their named tools"),
          wiredTo: z
            .array(z.string())
            .max(4)
            .describe("The visitor's actual tools this connects to, e.g. ['Gmail','Xero']"),
          estSavedPerWeek: z
            .string()
            .max(10)
            .describe("Estimated time saved weekly, always with a tilde, e.g. '~4h'"),
          sampleLine: z
            .string()
            .max(280)
            .optional()
            .describe("Optional one-line sample of output. Keep concise — under 240 chars ideal."),
        }),
        execute: async (input) => {
          inTurnStaged.set(input.slot, input as StagedSystem);
          return {
            ok: true,
            staged: input,
            note: `Slot ${input.slot} staged.`,
          };
        },
      }),
      capture_lead: tool({
        description:
          "Save the visitor's contact info as a lead so the /apply form pre-fills. " +
          "ONLY call after they explicitly share a REAL email address in chat. " +
          "Never call with placeholder values like 'UNKNOWN', 'test@example.com', " +
          "or made-up emails — server rejects these and the turn errors out. " +
          "If you don't have their real email yet, emit a text reply asking for " +
          "it (with name/phone/website in the same ask) instead of calling this tool.",
        parameters: z.object({
          name: z
            .string()
            .max(80)
            .optional()
            .describe("Visitor's name as they typed it. Omit if not given."),
          email: z
            .string()
            .email()
            .refine((v) => !/^unknown|^n\/a$|^none$|placeholder/i.test(v), {
              message:
                "Placeholder email detected. Wait for the visitor's real email before calling capture_lead.",
            }),
          phone: z
            .string()
            .max(40)
            .optional()
            .describe("Phone number in the format they gave it. Omit if not given."),
          website: z
            .string()
            .max(200)
            .optional()
            .describe("Business website URL. Omit if not given."),
          businessType: z.string().max(80),
          painSummary: z
            .string()
            .max(200)
            .describe("One line: the pain in the visitor's own words"),
          hotness: z
            .enum(["browsing", "warm", "hot"])
            .describe("hot = asked about paying/starting; warm = engaged fully; browsing = curious"),
        }),
        execute: async (input) => {
          try {
            const origin =
              process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
            const { staged: priorStaged, transcript } = reconstructContext(messages);
            const bySlot = new Map<number, StagedSystem>();
            for (const s of priorStaged) {
              if (typeof s.slot === "number") bySlot.set(s.slot, s);
            }
            for (const [slot, s] of inTurnStaged) bySlot.set(slot, s);
            const staged = Array.from(bySlot.values()).sort(
              (a, b) => (a.slot ?? 0) - (b.slot ?? 0),
            );
            await fetch(`${origin}/api/lead`, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ ...input, staged, transcript }),
            });
          } catch (err) {
            console.error("[talk] capture_lead forward failed:", err);
          }
          return {
            ok: true,
            message:
              "Lead saved. Your NEXT text reply must be short (one sentence) and MUST tell the visitor to click the YOU'RE READY banner above the composer to submit. Do NOT paste any URL — the banner already has the link.",
          };
        },
      }),
      prep_brief: tool({
        description:
          "Call this ONCE, immediately after slot 3 is staged and before the CTA text. " +
          "Synthesize the conversation into (a) a one-line summary the visitor sees on the " +
          "'you're ready to apply' handoff, and (b) a 3-5 sentence note for Will that gets " +
          "attached to their application. This is what preloads their apply form; Will reads " +
          "notesToWill BEFORE the call. Written in your voice, in the visitor's language.",
        parameters: z.object({
          summary: z
            .string()
            .max(140)
            .describe(
              "One-line pitch summary in visitor's own language, e.g. 'Roofing crew — quote-draft copilot + cold-lead nudge + Monday snapshot'",
            ),
          notesToWill: z
            .string()
            .max(700)
            .describe(
              "3-5 sentences of context Will needs before the call. Business + pain in their words, tools they run, why these three systems, any hot signal you noticed. Written to Will directly.",
            ),
          suggestedFormFill: z
            .object({
              projectText: z
                .string()
                .max(400)
                .describe("Prefills Q2 — one paragraph on their business, in their words"),
              stuck: z
                .string()
                .max(400)
                .describe("Prefills Q4 — the time-eater, in their words"),
              shipped: z
                .string()
                .max(400)
                .describe("Prefills Q5 — what 'it's running' looks like, drawn from the sample lines of the staged systems"),
            })
            .describe("Field-level prefill for the apply form. Visible to the visitor; edit-friendly."),
        }),
        execute: async (input) => {
          return {
            ok: true,
            message:
              "Application preloaded and the YOU'RE READY banner is now visible above the composer. Your NEXT text reply should be short and point the visitor to that banner. NEVER paste a URL — the banner IS the link.",
            brief: input,
          };
        },
      }),
      notify_will: tool({
        description:
          "Silently notify Will that a live visitor looks like a serious buyer. " +
          "Never mention this to the visitor.",
        parameters: z.object({
          summary: z.string().max(200),
          intent: z.enum([
            "asked-to-pay",
            "asked-timeline",
            "strong-fit",
            "requested-human",
          ]),
        }),
        execute: async ({ summary, intent }) => {
          if (!process.env.SLACK_WEBHOOK_URL) {
            console.log(
              `[talk] notify_will [${intent}] ${summary} (no SLACK_WEBHOOK_URL set)`,
            );
            return { ok: true, note: "logged" };
          }
          try {
            await fetch(process.env.SLACK_WEBHOOK_URL, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                text: `Hot visitor on talk-to-my-ai [${intent}]\n${summary}`,
              }),
            });
          } catch (err) {
            console.error("[talk] notify_will forward failed:", err);
          }
          return { ok: true };
        },
      }),
    },
  });

  return result.toDataStreamResponse({
    // AI SDK v4 defaults to masking errors as "An error occurred." with NO
    // server-side log. That makes prod failures invisible. Log the real error
    // here (goes to Vercel runtime logs) AND surface a short type hint to the
    // client so we can distinguish "config problem" from "provider outage"
    // without leaking secrets.
    getErrorMessage: (err: unknown) => {
      const message = err instanceof Error ? err.message : String(err);
      const name = err instanceof Error ? err.name : "UnknownError";
      const isAuth =
        /api key|unauthori[sz]ed|401|authentication/i.test(message) ||
        !process.env.ANTHROPIC_API_KEY;
      const isRate = /rate limit|429|quota/i.test(message);
      const isNet = /fetch failed|ENOTFOUND|ECONN|timeout/i.test(message);

      console.error("[talk] streamText error:", {
        name,
        message,
        isAuth,
        isRate,
        isNet,
        hasApiKey: Boolean(process.env.ANTHROPIC_API_KEY),
        hasSiteUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
      });

      if (isAuth) return "Config error: agent credentials missing or invalid.";
      if (isRate) return "Rate limit hit — try again in a minute.";
      if (isNet) return "Network hiccup reaching the model — try again.";
      return `Agent error (${name}) — check server logs.`;
    },
  });
}
