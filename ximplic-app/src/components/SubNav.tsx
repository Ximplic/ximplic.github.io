import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type SubNavLink = { href: string; label: string };

/**
 * Sticky on-this-page sub-nav for product pages. Highlights the section currently
 * in view via IntersectionObserver (scrollspy) and underlines it like a current tab.
 * Pass a module-scope `links` array so its identity is stable across renders.
 */
export default function SubNav({ links }: { links: SubNavLink[] }) {
  const [active, setActive] = useState(links[0]?.href.slice(1) ?? "");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // of the sections crossing the band below the sticky headers, pick the topmost
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -62% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="sticky top-[57px] z-40 bg-black/70 backdrop-blur-md border-b border-white/10" aria-label="On this page">
      <div className="max-w-7xl mx-auto px-6 flex gap-6 overflow-x-auto h-12 items-stretch">
        {links.map((l) => {
          const isActive = active === l.href.slice(1);
          return (
            <a
              key={l.href}
              href={l.href}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "relative flex items-center text-xs uppercase tracking-wider whitespace-nowrap transition-colors",
                isActive
                  ? "text-white after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[#2BE8A5]"
                  : "text-white/50 hover:text-white",
              )}
            >
              {l.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
