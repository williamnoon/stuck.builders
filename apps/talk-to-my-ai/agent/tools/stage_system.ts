// agent/tools/stage_system.ts
// The core tool: stages one system onto the visitor's "YOU" dashboard.
// The frontend renders staged systems as the cards in the YOU tab; each call
// to this tool is one card. The model calls it at most 3 times per session.

import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Stage one system onto the visitor's personal dashboard (the YOU tab). " +
    "Call this when you have enough context to name a system in the visitor's " +
    "own language, wired to tools they actually mentioned. Maximum 3 per " +
    "conversation. slot 1 = 'BUILD FIRST'.",
  inputSchema: z.object({
    slot: z.number().int().min(1).max(3)
      .describe("Dashboard position: 1 (build first), 2, or 3"),
    title: z.string().max(40)
      .describe("System name in the visitor's language, e.g. 'Quote-Draft Copilot'"),
    what: z.string().max(240)
      .describe("One or two sentences: what it does, wired to their named tools, in plain words"),
    wiredTo: z.array(z.string()).max(4)
      .describe("The visitor's actual tools this connects to, e.g. ['Gmail','Xero']"),
    estSavedPerWeek: z.string().max(10)
      .describe("Estimated time saved weekly, always with a tilde, e.g. '~4h'"),
    sampleLine: z.string().max(200).optional()
      .describe("Optional one-line sample of the system's output, shown on the card"),
  }),
  async execute(input, ctx) {
    // Durable session state: eve sessions persist across turns, so the staged
    // list survives the visitor navigating away and back.
    // VERIFY: exact state API against eve docs (ctx/session state surface).
    const staged: object[] = ((ctx as any)?.state?.staged as object[]) ?? [];
    const entry = { ...input, stagedAt: new Date().toISOString() };
    const next = [...staged.filter((s: any) => s.slot !== input.slot), entry]
      .sort((a: any, b: any) => a.slot - b.slot);
    if ((ctx as any)?.state) (ctx as any).state.staged = next;

    // The frontend listens to the agent's event stream and renders each
    // staged system as a card + increments the YOU-tab badge.
    return {
      ok: true,
      staged: entry,
      totalStaged: next.length,
      note: next.length >= 3
        ? "Dashboard full (3/3). Do not stage more; move to the close."
        : `${next.length}/3 staged.`,
    };
  },
});
