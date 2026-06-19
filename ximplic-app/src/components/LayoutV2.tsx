import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteNav from "./SiteNav";
import FooterV2 from "./FooterV2";

/* themed shell: pure-black + Poppins, shared nav/footer, light scroll-reveal */
export default function LayoutV2() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv, .rvs"));
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      document.documentElement.classList.add("rv-ready"); // hide-then-reveal only once JS is live
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

  return (
    <div className="min-h-screen bg-black text-white antialiased" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <SiteNav />
      <main key={pathname} className="route-fade"><Outlet /></main>
      <FooterV2 />
    </div>
  );
}
