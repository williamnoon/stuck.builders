import type { SprintKind } from "@/lib/config";

export type SlotState = "filled" | "open";
export type Week = {
  label: string;
  sublabel: string;
  tag: "full" | "open";
  slots: SlotState[];
};
export type WeekStatus = { thisWeek: string; nextWeek: string };

// Two independent slot counters — 5 Idea + 5 Build concurrent per week.
// Same day-of-week fill schedule for both SKUs at launch; if Idea and Build
// ever need different cadences, branch on `kind` inside the fill helpers.
// See docs/PRD.md §4 for the two-cap distinction.

function makeSlots(filled: number): SlotState[] {
  const clamped = Math.max(0, Math.min(5, filled));
  return Array.from({ length: 5 }, (_, i) => (i < clamped ? "filled" : "open"));
}

function thisWeekFilledFor(_kind: SprintKind, dayOfWeek: number): number {
  // Sun=0, Mon=1, ..., Sat=6
  if (dayOfWeek === 0) return 5; // Sunday — week wrapping, fully spoken for
  if (dayOfWeek === 1) return 3; // Monday — kickoffs in progress
  if (dayOfWeek === 2) return 4; // Tuesday
  if (dayOfWeek === 3) return 4; // Wednesday
  if (dayOfWeek === 4) return 5; // Thursday
  if (dayOfWeek === 5) return 5; // Friday
  return 5; // Saturday
}

function nextWeekFilledFor(_kind: SprintKind, dayOfWeek: number): number {
  if (dayOfWeek === 0) return 1; // Sunday — fresh applications rolling in
  if (dayOfWeek === 1) return 1;
  if (dayOfWeek === 2) return 2;
  if (dayOfWeek === 3) return 2;
  if (dayOfWeek === 4) return 3;
  if (dayOfWeek === 5) return 4;
  return 4; // Saturday — most of next week claimed
}

export function getSlots(kind: SprintKind, now: Date = new Date()): Week[] {
  const day = now.getDay();
  const thisFilled = thisWeekFilledFor(kind, day);
  const nextFilled = nextWeekFilledFor(kind, day);

  return [
    {
      label: "THIS WEEK",
      sublabel: thisFilled >= 5 ? "closed" : "in progress",
      tag: "full",
      slots: makeSlots(thisFilled),
    },
    {
      label: "NEXT WEEK",
      sublabel: "starts Monday",
      tag: nextFilled >= 5 ? "full" : "open",
      slots: makeSlots(nextFilled),
    },
  ];
}

function statusFor(kind: SprintKind, now: Date): WeekStatus {
  const day = now.getDay();
  const thisFilled = thisWeekFilledFor(kind, day);
  const nextFilled = nextWeekFilledFor(kind, day);
  return {
    thisWeek: thisFilled >= 5 ? "CLOSED" : `${5 - thisFilled} LEFT`,
    nextWeek: nextFilled >= 5 ? "FULL" : `${5 - nextFilled} OPEN`,
  };
}

export function getTopBarStatus(now: Date = new Date()): {
  idea: WeekStatus;
  build: WeekStatus;
} {
  return {
    idea: statusFor("idea", now),
    build: statusFor("build", now),
  };
}

export function getNextWeekOpen(kind: SprintKind, now: Date = new Date()): number {
  return 5 - nextWeekFilledFor(kind, now.getDay());
}

export function getThisWeekOpen(kind: SprintKind, now: Date = new Date()): number {
  return 5 - thisWeekFilledFor(kind, now.getDay());
}

export function getUpdatedLabel(now: Date = new Date()): string {
  const opts: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  };
  return new Intl.DateTimeFormat("en-US", opts).format(now) + " PT";
}
