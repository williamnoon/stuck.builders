import type { SprintKind } from "@/lib/config";
import { getSlots, getUpdatedLabel } from "@/lib/slots";

export function SlotBoard({
  kind,
  applyHref,
}: {
  kind: SprintKind;
  applyHref?: string;
}) {
  const weeks = getSlots(kind);
  const updated = getUpdatedLabel();
  const href = applyHref ?? `/apply?kind=${kind}`;
  const skuLabel = kind === "idea" ? "GREENFIELD" : "BROWNFIELD";
  return (
    <div className="board wrap">
      <div className="board-frame" role="region" aria-label={`${skuLabel} Build slot availability`}>
        <span className="tape tl" aria-hidden="true" />
        <span className="tape tr" aria-hidden="true" />
        <div className="board-head">
          <span>5 {skuLabel} SLOTS / WEEK · LIVE BOARD</span>
          <span className="live">● last checked {updated}</span>
        </div>
        {weeks.map((week, wi) => (
          <div className="week" key={wi}>
            <div className="week-label">
              <span className="week-name">
                {week.label} <span className="dim">· {week.sublabel}</span>
              </span>
              <span className={`week-tag ${week.tag === "full" ? "tag-full" : "tag-open"}`}>
                {week.tag === "full" ? "LOCKED — 5/5" : "TAKING APPLICATIONS"}
              </span>
            </div>
            <div className="slots">
              {week.slots.map((s, i) => {
                const num = String(i + 1).padStart(2, "0");
                if (s === "filled") {
                  return (
                    <div className="slot slot-full" key={i}>
                      <span className="n">SLOT {num}</span>
                      <span className="sticker">filled!</span>
                    </div>
                  );
                }
                return (
                  <a className="slot slot-open" href={href} key={i}>
                    <span className="n">SLOT {num}</span>
                    <span className="state">OPEN</span>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
        <div className="board-foot">
          <span>Apply — Will reads live, replies usually in about 5 minutes.</span>
          <span className="ok">Accepted: payment link, Cal.com booking for Day 1, slot locks. Sprint starts Monday.</span>
        </div>
      </div>
    </div>
  );
}
