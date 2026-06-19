const TEAL = "#2BE8A5";

type QA = { q: string; a: string };

/**
 * Accessible FAQ accordion built on native <details>/<summary> — toggles on click and
 * keyboard with no JS, no broken hardcoded "open" state. Styled to the V2 system.
 */
export default function Faq({ items }: { items: QA[] }) {
  return (
    <div className="max-w-3xl rounded-xl border border-white/10 bg-white/[0.02] divide-y divide-white/10 overflow-hidden">
      {items.map((it) => (
        <details key={it.q} className="group">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden px-5 py-4 text-[15px] font-medium text-white hover:bg-white/[0.02] transition-colors">
            {it.q}
            <span
              className="shrink-0 text-xl leading-none transition-transform duration-200 group-open:rotate-45"
              style={{ color: TEAL }}
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="px-5 pb-5 -mt-1 text-sm text-white/60 leading-relaxed">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
