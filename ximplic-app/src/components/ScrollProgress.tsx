import { useEffect, useRef } from "react";

/**
 * Thin teal scroll-progress bar pinned to the top of the viewport. Reads scroll
 * position in a rAF-throttled passive listener and drives a GPU transform (scaleX)
 * only — no layout, no React re-render per scroll tick.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.scrollingElement || document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? Math.min(1, el.scrollTop / max) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-[60] h-[2px] origin-left will-change-transform pointer-events-none"
      style={{
        transform: "scaleX(0)",
        background: "linear-gradient(90deg, rgba(43,232,165,0.4), #2BE8A5)",
        boxShadow: "0 0 8px rgba(43,232,165,0.55)",
      }}
    />
  );
}
