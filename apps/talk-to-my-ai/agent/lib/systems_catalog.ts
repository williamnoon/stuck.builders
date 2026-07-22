// agent/lib/systems_catalog.ts
// The staging catalog: candidate systems per vertical, drawn from the
// stuck.builders skill library. The model picks and CUSTOMIZES from these —
// names get rewritten in the visitor's own words, tools swapped for theirs.
// Keep entries short; this ships into context via the stage_systems skill.

export type CatalogSystem = {
  key: string;
  title: string;          // default name — model should adapt to visitor's language
  what: string;           // one-sentence behavior
  wiredTo: string[];      // typical tool hookups
  estSavedPerWeek: string; // ALWAYS an estimate, rendered with "~"
};

export const CATALOG: Record<string, CatalogSystem[]> = {
  contractor: [
    { key: "lead-reply", title: "Lead-Reply Agent", what: "Every inbound inquiry gets a same-day draft reply in your voice, pulled from your past replies; you approve, it sends.", wiredTo: ["Gmail"], estSavedPerWeek: "~4h" },
    { key: "quote-draft", title: "Quote-Draft Copilot", what: "Job notes + photos in → line-item quote, materials list, and cover email out in ~90 seconds, priced from your last 20 quotes.", wiredTo: ["Gmail", "Xero/QuickBooks"], estSavedPerWeek: "~6h" },
    { key: "follow-up", title: "Follow-Up Sequencer", what: "Every open quote gets a day-3 and day-7 nudge in your voice unless you mark it closed; one weekly digest of what needs your call.", wiredTo: ["Gmail", "Calendar"], estSavedPerWeek: "~3h" },
    { key: "crew-brief", title: "Morning Crew Brief", what: "Each morning: today's jobs, addresses, materials, and weather flags, one page per crew.", wiredTo: ["Calendar", "Sheets"], estSavedPerWeek: "~2h" },
  ],
  realestate: [
    { key: "lead-reply", title: "Inquiry Responder", what: "Every portal/website lead gets a personal reply within minutes, in your voice, with 2 proposed showing slots.", wiredTo: ["Gmail", "Calendar"], estSavedPerWeek: "~5h" },
    { key: "listing-desc", title: "Listing Writer", what: "Photos + facts in → MLS description, social captions, and email blast out, matched to your past listings' tone.", wiredTo: ["Drive", "Gmail"], estSavedPerWeek: "~3h" },
    { key: "nurture", title: "Client Nurture Sequencer", what: "Buyers and sellers each get the right touch at the right stage automatically; you get a weekly 'call these 3 people' list.", wiredTo: ["Gmail", "CRM"], estSavedPerWeek: "~4h" },
    { key: "transaction", title: "Transaction Checklist Runner", what: "Every deal tracked against your checklist; missing docs and looming dates get flagged before they bite.", wiredTo: ["Drive", "Calendar"], estSavedPerWeek: "~2h" },
  ],
  ecommerce: [
    { key: "review-reply", title: "Review Responder", what: "Every review answered in your brand voice within hours; negative ones flagged to you first.", wiredTo: ["storefront", "email"], estSavedPerWeek: "~3h" },
    { key: "product-desc", title: "Product Description Engine", what: "New SKU in → description, variants, and SEO copy out, consistent with your catalog's voice.", wiredTo: ["Shopify"], estSavedPerWeek: "~4h" },
    { key: "ops-report", title: "Daily Trading Report", what: "Yesterday's sales, ad spend, and margin in one morning message — with the one number that needs your attention.", wiredTo: ["Shopify", "Stripe", "ads"], estSavedPerWeek: "~3h" },
  ],
  coach: [
    { key: "discovery-prep", title: "Discovery Call Prep", what: "Before every call: who they are, what they said on the form, and 3 suggested questions — one page.", wiredTo: ["Calendly", "Gmail"], estSavedPerWeek: "~2h" },
    { key: "session-notes", title: "Session Notes + Follow-Up", what: "After each session: clean notes, action items, and a follow-up email draft in your voice.", wiredTo: ["Gmail", "Drive"], estSavedPerWeek: "~4h" },
    { key: "content-engine", title: "Content Repurposer", what: "One idea or recording in → posts for every channel out, in your voice, queued for the week.", wiredTo: ["Drive", "socials"], estSavedPerWeek: "~5h" },
  ],
  agency: [
    { key: "client-report", title: "Client Report Builder", what: "Monthly reports assembled from real data and annotated in your voice — review, don't write.", wiredTo: ["analytics", "Slack"], estSavedPerWeek: "~6h" },
    { key: "scope-doc", title: "Scope & Proposal Drafter", what: "Discovery notes in → scoped proposal out, priced from your past projects.", wiredTo: ["Drive", "Gmail"], estSavedPerWeek: "~4h" },
    { key: "standup", title: "Async Standup Digest", what: "Team updates collected and summarized daily; blockers flagged to you by name.", wiredTo: ["Slack"], estSavedPerWeek: "~3h" },
  ],
  // Fallback for anything else — adapt titles hard to their language.
  generic: [
    { key: "inbox-triage", title: "Inbox Triage + Reply Drafts", what: "Your inbox sorted every morning; the 3 that matter flagged, replies drafted in your voice.", wiredTo: ["email"], estSavedPerWeek: "~4h" },
    { key: "follow-up", title: "Follow-Up Sequencer", what: "Nothing open goes quiet: day-3 and day-7 nudges in your voice, weekly digest of what needs you.", wiredTo: ["email", "calendar"], estSavedPerWeek: "~3h" },
    { key: "weekly-review", title: "Weekly Numbers Review", what: "Your key numbers pulled and explained every Friday — wins, stucks, and next week's one priority.", wiredTo: ["your data"], estSavedPerWeek: "~2h" },
  ],
};

/** Map a free-text business description to a catalog vertical. */
export function pickVertical(description: string): keyof typeof CATALOG {
  const d = description.toLowerCase();
  if (/(roof|hvac|plumb|electric|contract|landscap|construct|remodel|paint)/.test(d)) return "contractor";
  if (/(real ?estate|realtor|broker|listing|property)/.test(d)) return "realestate";
  if (/(shop|store|e-?comm|product|brand|dtc|amazon|shopify)/.test(d)) return "ecommerce";
  if (/(coach|consult|course|creator|speaker|author)/.test(d)) return "coach";
  if (/(agency|marketing|design studio|dev shop|freelance)/.test(d)) return "agency";
  return "generic";
}
