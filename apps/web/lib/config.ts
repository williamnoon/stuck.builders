// Two products only. Both are Builds.
// Greenfield Build — $199, no code yet. Core deliverable: the imaginative solution.
// Brownfield Build — $399, existing project. Core deliverable: unstuck + deployed live.
// Skool — $69/mo or $500/yr with a 7-day free trial. Retention layer, not a third product.
// See docs/PRD.md §2–§4 and CLAUDE.md §3.

// Internal type keys stay "idea"/"build" to preserve the API + form + pixel contract.
// External labels render as "Greenfield Build" / "Brownfield Build" via PRODUCT_LABEL.
export type SprintKind = "idea" | "build";

export const PRICES: Record<SprintKind, number> = {
  idea: 199, // Greenfield Build
  build: 399, // Brownfield Build
} as const;

// Stripe Payment Links — filled in and referenced from acceptance emails.
// NOT displayed on landing pages (apply-first flow per docs/PRD.md §5).
export const STRIPE_LINKS: Record<SprintKind, string> = {
  idea: "", // $199 Greenfield Build
  build: "", // $399 Brownfield Build (main + #ceiling + #traction all use this link)
};

// Skool community. $69/mo or $500/yr with a 7-day free trial.
// Live on Skool platform. No founding tier — previous founding-20 model retired 2026-07-09.
// See docs/COMMUNITY.md.
export const SKOOL_URL = "https://www.skool.com/stuck2shipped";
export const SKOOL_PRICE_MONTHLY = 69;
export const SKOOL_PRICE_ANNUAL = 500;
export const SKOOL_TRIAL_DAYS = 7;

// Operator identity — client-facing, per docs/PRD.md §8 / CLAUDE.md §3.
// The AI-native half validates capability (Brownfield). The taste half validates
// judgment (Greenfield — the imaginative-solution deliverable). Both are the
// whole promise.
export const OPERATOR_IDENTITY =
  "engineering and orchestrating real-world agents that ship";

// External product labels. Internal key -> customer-facing name.
export const PRODUCT_LABEL: Record<SprintKind, string> = {
  idea: "Greenfield Build",
  build: "Brownfield Build",
};

// Short taglines that DEFINE the terms visually for users who don't know the
// engineering jargon. Rendered next to the product graphics on each page.
export const PRODUCT_TAGLINE: Record<SprintKind, string> = {
  idea: "no code yet. we conceive the solution together, then plant the demo of it.",
  build: "something's already built. we dig in and ship the next version.",
};

// Application review SLA. Will reads applications live — typically ~5 minutes.
// Occasionally longer if he's in a Day-1 call. See project memory.
export const APPROVAL_SLA_COPY = "usually ~5 minutes";

// Referral program — $100 credit on either sprint, both sides, open to all.
// Never expires. One credit per referred person.
// Applied at Stripe payment link stage (Will manually generates discounted link).
export const REFERRAL_CREDIT = 100;
export const REFERRAL_COOKIE_NAME = "ref_code";
export const REFERRAL_COOKIE_DAYS = 60;

export function sprintKindLabel(kind: SprintKind): string {
  return `${PRODUCT_LABEL[kind]} $${PRICES[kind]}`;
}

export function sprintPriceLabel(kind: SprintKind): string {
  return `$${PRICES[kind]}`;
}
