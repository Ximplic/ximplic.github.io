const TEAL = "#2BE8A5";

type Props = {
  /** Background of the section that FOLLOWS this seam. */
  to?: "light" | "dark";
  /** Which side the bridging accent bar sits on. Alternate for rhythm. */
  align?: "left" | "right";
};

/**
 * Hard-seam section divider. Instead of fading the whole width black→white (which
 * re-rasterizes and flickers on scroll), the colour switch stays a crisp horizontal
 * line — but a teal accent bar straddles that line, half in the section above and half
 * in the one below. One object crossing the boundary reads as "merged", not a hardcut.
 * Fully static: no scroll listener, no animated blur, so nothing flickers.
 */
export default function SectionSeam({ to = "light", align = "right" }: Props) {
  const topColor = to === "light" ? "#000000" : "#ffffff";
  const bottomColor = to === "light" ? "#ffffff" : "#000000";
  const side = align === "right" ? "right-[5%]" : "left-[5%]";
  // bright lime at the bar's outer edge, fading inward — directional, like the reference
  const grad =
    align === "right"
      ? `linear-gradient(90deg, rgba(43,232,165,0.06), ${TEAL})`
      : `linear-gradient(90deg, ${TEAL}, rgba(43,232,165,0.06))`;

  return (
    <div aria-hidden="true" className="relative h-24 overflow-hidden" style={{ background: bottomColor }}>
      <div className="absolute inset-x-0 top-0 h-1/2" style={{ background: topColor }} />
      <div
        className={`absolute top-1/2 -translate-y-1/2 h-11 w-[44%] max-w-[560px] rounded-[3px] ${side}`}
        style={{ background: grad, boxShadow: "0 0 60px rgba(43,232,165,0.28)" }}
      />
    </div>
  );
}
