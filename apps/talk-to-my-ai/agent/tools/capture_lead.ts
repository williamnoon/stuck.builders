// agent/tools/capture_lead.ts
// Called when the visitor shares an email (offered or accepted at the close).
// Persists the lead + their staged dashboard so Will's follow-up references
// the exact systems they saw. NEVER call without an explicit email from the visitor.

import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Save the visitor's email and conversation summary as a lead. Only call " +
    "when the visitor has explicitly provided their email address. Their " +
    "staged dashboard is stored with it so follow-up can reference it.",
  inputSchema: z.object({
    email: z.string().email(),
    businessType: z.string().max(80),
    painSummary: z.string().max(200)
      .describe("One line: the pain in the visitor's own words"),
    hotness: z.enum(["browsing", "warm", "hot"])
      .describe("hot = asked about paying/starting; warm = engaged fully; browsing = curious"),
  }),
  async execute(input, ctx) {
    const staged = ((ctx as any)?.state?.staged as object[]) ?? [];
    const lead = { ...input, staged, capturedAt: new Date().toISOString() };

    // Persist wherever your ops live. Two easy options — pick one:
    // 1) POST to a Vercel route that writes to your DB / Google Sheet:
    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
    }
    // 2) Or wire an MCP/OpenAPI connection under agent/connections/ and call it here.

    return { ok: true, message: "Lead saved. Confirm to the visitor you'll send the dashboard + application link." };
  },
});
