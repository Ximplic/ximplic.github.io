import { Link } from "react-router-dom";
import SectionSeam from "@/components/SectionSeam";

const TEAL = "#2BE8A5";

export default function Events() {
  return (
    <>
      {/* HEAD */}
      <section className="px-6 pt-32 md:pt-36 pb-8">
        <div className="max-w-3xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Events</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.015em] mb-5" style={{ letterSpacing: "-0.02em" }}>Where to find Ximplic</h1>
          <p className="text-white/55 max-w-2xl leading-relaxed">Talks, conferences and meetups on energy-efficient edge AI and in-memory computing.</p>
        </div>
      </section>

      {/* EVENTS */}
      <SectionSeam to="light" align="right" />
      <section className="px-6 pt-12 pb-24 bg-white text-black">
        <div className="max-w-3xl mx-auto rv">
          <div className="rounded-xl border border-black/10 bg-black/[0.03] p-6 text-center transition-colors hover:border-black/10">
            <h3 className="text-xl font-semibold mb-2">Events coming soon</h3>
            <p className="text-sm text-black/60 leading-relaxed">
              Upcoming talks and appearances will be listed here. To arrange a meeting or invite us to speak, <Link to="/#contact" className="font-medium" style={{ color: "#0a8f63" }}>get in touch</Link>.
            </p>
          </div>
        </div>
      </section>
      <SectionSeam to="dark" align="left" />
    </>
  );
}
