export type StackItem = { label: string; strong?: string; value: string };

export function ValueStack({
  items,
  totalValue,
  price,
  priceReason,
}: {
  items: StackItem[];
  totalValue: string;
  price: string;
  priceReason: string;
}) {
  return (
    <div className="stack-wrap">
      {items.map((it, i) => (
        <div className="stack-anchor" key={i}>
          <span className="label">
            {it.strong && <strong>{it.strong}</strong>}
            {it.strong ? ` ${it.label}` : it.label}
          </span>
          <span className="value">{it.value}</span>
        </div>
      ))}
      <div className="stack-total">
        <span>Total value</span>
        <span className="value">{totalValue}</span>
      </div>
      <p className="stack-price-line">
        Your price: <strong>{price}</strong> — {priceReason}
      </p>
    </div>
  );
}
