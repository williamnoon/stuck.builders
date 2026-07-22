// agent/tools/note.ts
// Behind-the-scenes reasoning event. Streams into the visitor's live view
// (left panel) as proof of the AI's judgment on THEIR specific case. The
// visitor watches the agent think — that is the product.

import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Emit a behind-the-scenes reasoning event to the visitor's live view. " +
    "Call this constantly as you think — classification, matching, judgment, " +
    "considering, deciding. Every note appears in the visitor's live feed as " +
    "proof of the AI's judgment. This is the product. Call at least 3-5 times " +
    "per turn. Short, specific, in your own words.",
  inputSchema: z.object({
    type: z
      .enum([
        "reading",       // "reading their business description"
        "classified",    // "classified: multi-brand embodiment coach"
        "matching",      // "matching against systems catalog"
        "considering",   // "considering: knowledge base + media pipeline + meeting workflow"
        "judgment",      // "highest leverage: file taxonomy → sits under everything else"
        "staging",       // "staging system #1: Knowledge Base Foundation"
        "deciding",      // "not a fit for 4hr Build — but 30min-slice would work"
      ])
      .describe("What kind of thinking this is"),
    text: z
      .string()
      .max(140)
      .describe("One-sentence narration of the thought, in your voice"),
  }),
  async execute(input) {
    return { ok: true, note: input };
  },
});
