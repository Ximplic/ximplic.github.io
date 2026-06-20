import { Link } from "react-router-dom";
import { ArrowRight, MoveLeft } from "lucide-react";

const TEAL = "#2BE8A5";
const gradText = {
  background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.62))",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export default function NotFound() {
  return (
    <section className="px-6 min-h-[78vh] flex flex-col items-center justify-center text-center pt-28 pb-20">
      <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: TEAL }}>Error 404</p>

      <h1 className="text-7xl md:text-9xl font-semibold tracking-[-0.02em] leading-none mb-6">
        <span style={gradText}>4</span>
        <span style={{ color: TEAL }}>0</span>
        <span style={gradText}>4</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.015em] mb-3">This page moved or never existed</h2>
      <p className="text-white/55 max-w-md mb-9 leading-relaxed">
        The link may be broken or the page may have been retired in the redesign. Let's get you back to something real.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95"
          style={{ background: TEAL }}
        >
          <MoveLeft size={16} /> Back to home
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-6 h-12 rounded-lg border border-white/15 text-white/90 hover:border-white/30 transition-colors"
        >
          Browse products <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
