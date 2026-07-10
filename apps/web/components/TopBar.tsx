export function TopBar() {
  return (
    <header className="topbar">
      <div className="wrap">
        <a className="brand" href="/" aria-label="Stuck to Shipped">
          <svg width="22" height="22" viewBox="0 0 512 512" aria-hidden="true">
            <rect width="512" height="512" fill="#0C0C0B" />
            <rect x="108" y="108" width="150" height="34" fill="#4A4D46" />
            <rect x="108" y="108" width="34" height="296" fill="#4A4D46" />
            <rect x="108" y="370" width="150" height="34" fill="#4A4D46" />
            <rect x="194" y="228" width="158" height="56" fill="#128A4B" />
            <polygon points="352,152 474,256 352,360" fill="#128A4B" />
          </svg>
          stuck<span style={{ color: "var(--gray-dim)" }}>.builders</span>
        </a>
      </div>
    </header>
  );
}
