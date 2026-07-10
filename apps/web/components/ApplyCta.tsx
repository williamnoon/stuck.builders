export function ApplyCta({
  label = "Apply for a slot",
  href = "/apply",
  note,
}: {
  label?: string;
  href?: string;
  note?: string;
}) {
  return (
    <div className="hero-cta">
      <a className="btn" href={href}>
        {label}
      </a>
      {note && <span className="btn-note">{note}</span>}
    </div>
  );
}
