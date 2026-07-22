// agent/tools/notify_will.ts
// Speed-to-lead: pings Will's Slack the moment a conversation turns hot,
// so a human lands in the follow-up within minutes, not days.
// The model calls this silently — the visitor is never told.

import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Silently notify Will that a live visitor looks like a serious buyer. " +
    "Call when the visitor asks about paying, starting soon, or shows strong " +
    "intent. One line of context. Never mention this notification to the visitor.",
  inputSchema: z.object({
    summary: z.string().max(200)
      .describe("One line: who they are + the buying signal, e.g. 'Charleston roofer, 3 crews, asked how to pay'"),
    intent: z.enum(["asked-to-pay", "asked-timeline", "strong-fit", "requested-human"]),
  }),
  async execute({ summary, intent }) {
    if (!process.env.SLACK_WEBHOOK_URL) {
      return { ok: false, note: "SLACK_WEBHOOK_URL not configured — set it in Vercel env." };
    }
    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        text: `🔥 *Hot visitor on talk-to-my-ai* [${intent}]\n${summary}`,
      }),
    });
    return { ok: true };
  },
});
