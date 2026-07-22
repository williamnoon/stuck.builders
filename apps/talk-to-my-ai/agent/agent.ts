// agent/agent.ts — runtime configuration for the Talk-to-my-AI agent.
// eve discovers this file automatically. Instructions live in instructions.md,
// tools in tools/, skills in skills/ — this file only picks the model and options.
//
// NOTE: verify option names against the eve docs for the version you install —
// the framework is young and the config surface may move.

import { defineAgent } from "eve";

export default defineAgent({
  // The public-facing voice of stuck.builders. Sonnet-class is the right
  // cost/latency tradeoff for a high-volume marketing surface; bump to an
  // opus-class model only if staging quality disappoints in testing.
  model: "claude-sonnet-4-5",

  // Keep responses chat-sized. The instructions enforce brevity; a modest
  // cap is a backstop against runaway essays on a phone screen.
  maxOutputTokens: 1024,

  // Sessions are the visitor conversation. eve keeps them durable by default
  // (Workflow SDK underneath) — a visitor can leave and come back.
});
