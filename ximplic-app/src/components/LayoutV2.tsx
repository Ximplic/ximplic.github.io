import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteNav from "./SiteNav";
import FooterV2 from "./FooterV2";
import ScrollProgress from "./ScrollProgress";

/* themed shell: dark base + Poppins, shared nav/footer, scroll-reveal.
   Dark<->light banding is solid sections + CSS gradient strips (no JS background).
   Ambient glow is a decoupled GPU float loop — NOT scroll-driven (moving a large blurred
   layer on scroll re-rasterizes and flickers). */
export default function LayoutV2() {
  const { pathname, hash } = useLocation();

  // scroll-reveal + hash scroll
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv, .rvs, .rv-l, .rv-r"));
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      document.documentElement.classList.add("rv-ready");
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );
      els.forEach((el) => io.observe(el));
      var cleanup = () => io.disconnect();
    }
    if (hash) {
      const t = document.getElementById(hash.slice(1));
      if (t) requestAnimationFrame(() => t.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
    return () => cleanup?.();
  }, [pathname, hash]);

  // scroll-linked glow — transform only (GPU), never `top`
  return (
    <div className="relative min-h-screen bg-black text-white antialiased" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ambient teal glow — gentle GPU float loop, decoupled from scroll. Shows on the dark
          sections; the opaque light sections sit above it. Soft radial, no blur filter. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="bg-glow absolute left-1/2 top-[6vh] h-[60vh] w-[85vw] max-w-[1200px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(43,232,165,0.13), transparent 68%)" }}
        />
      </div>

      <ScrollProgress />

      <div className="relative z-10">
        <SiteNav />
        <main key={pathname} className="route-fade"><Outlet /></main>
        <FooterV2 />
      </div>
    </div>
  );
}
