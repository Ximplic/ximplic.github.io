const TEAL = "#2BE8A5";

type QA = { q: string; a: string };

/**
 * Accessible FAQ accordion built on native <details>/<summary> — toggles on click and
 * keyboard with no JS, no broken hardcoded "open" state. Styled to the V2 system.
 */
export default function Faq({ items, light = false }: { items: QA[]; light?: boolean }) {
  const wrap = light
    ? "max-w-3xl rounded-xl border border-black/10 bg-black/[0.03] divide-y divide-black/10 overflow-hidden"
    : "max-w-3xl rounded-xl border border-white/10 bg-white/[0.02] divide-y divide-white/10 overflow-hidden";
  const summary = light
    ? "flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden px-5 py-4 text-[15px] font-medium text-black hover:bg-black/[0.04] transition-colors"
    : "flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden px-5 py-4 text-[15px] font-medium text-white hover:bg-white/[0.02] transition-colors";
  const answer = light
    ? "px-5 pb-5 -mt-1 text-sm text-black/60 leading-relaxed"
    : "px-5 pb-5 -mt-1 text-sm text-white/60 leading-relaxed";
  const plus = light ? "#0a8f63" : TEAL;
  return (
    <div className={wrap}>
      {items.map((it) => (
        <details key={it.q} className="group">
          <summary className={summary}>
            {it.q}
            <span
              className="shrink-0 text-xl leading-none transition-transform duration-200 group-open:rotate-45"
              style={{ color: plus }}
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className={answer}>{it.a}</p>
        </details>
      ))}
    </div>
  );
}
