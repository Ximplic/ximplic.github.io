type Row = [string, string];

/**
 * Two-column technical-spec sheet: label (muted, left) → value (bold, right), hairline
 * dividers per row. Row-major fill, so a flat list of pairs reads down each column.
 */
export default function SpecTable({ rows }: { rows: Row[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] px-6 md:px-8">
      <dl className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {rows.map(([k, v], i) => {
          const lastMobile = i === rows.length - 1;
          const lastDesktopRow = i >= rows.length - 2;
          return (
            <div
              key={k}
              className={`flex items-baseline justify-between gap-6 py-4 border-b border-white/[0.06] ${lastMobile ? "border-b-0" : ""} ${lastDesktopRow ? "md:border-b-0" : ""}`}
            >
              <dt className="text-sm text-white/55 shrink-0">{k}</dt>
              <dd className="m-0 text-sm font-semibold text-white text-right">{v}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
