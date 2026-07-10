export function CrossLink({ prompt, linkText, href }: { prompt: string; linkText: string; href: string }) {
  return (
    <div className="crosslink">
      <div className="wrap">
        {prompt} <a href={href}>{linkText}</a>
      </div>
    </div>
  );
}
