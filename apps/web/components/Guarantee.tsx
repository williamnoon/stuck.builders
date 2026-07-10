export function Guarantee({
  headline,
  body,
  handNote,
  stampTop = "SHIP",
  stampBottom = "OR REFUND",
}: {
  headline: string;
  body: string;
  handNote?: string;
  stampTop?: string;
  stampBottom?: string;
}) {
  return (
    <section>
      <div className="wrap">
        <p className="sec-label">// THE GUARANTEE</p>
        <div className="guarantee-frame">
          <div className="guarantee-stamp" aria-hidden="true">
            <svg viewBox="0 0 160 160" width="120" height="120">
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="#128A4B"
                strokeWidth="3"
                strokeDasharray="6 4"
                opacity=".7"
              />
              <circle cx="80" cy="80" r="58" fill="none" stroke="#128A4B" strokeWidth="1.5" opacity=".5" />
              <text
                x="80"
                y="72"
                textAnchor="middle"
                fill="#128A4B"
                fontFamily="Big Shoulders Display, sans-serif"
                fontWeight="800"
                fontSize="18"
                letterSpacing="1"
              >
                {stampTop}
              </text>
              <text
                x="80"
                y="96"
                textAnchor="middle"
                fill="#128A4B"
                fontFamily="Big Shoulders Display, sans-serif"
                fontWeight="800"
                fontSize="16"
                letterSpacing="1"
              >
                {stampBottom}
              </text>
            </svg>
          </div>
          <div className="guarantee-body">
            <h2 className="display">{headline}</h2>
            <p>{body}</p>
            {handNote && <span className="hand">{handNote}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}
