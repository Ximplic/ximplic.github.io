import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RequestAccessButton from "@/components/RequestAccessButton";
import IntegrationSoC from "@/components/IntegrationSoC";
import SectionSeam from "@/components/SectionSeam";

const TEAL = "#2BE8A5";
const gradText = {
  background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.62))",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export default function Products() {
  return (
    <>
      {/* HEAD */}
      <section className="px-6 pt-32 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: TEAL }}>Products</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.015em] max-w-4xl leading-[1.12] mb-6" style={{ letterSpacing: "-0.02em" }}>
            <span style={gradText}>The XIM inference platform</span>
          </h1>
          <p className="text-sm md:text-base text-white/55 max-w-2xl leading-relaxed">
            One energy-efficient inference accelerator, on a de-risked path. Evaluate it in pure software, map any model onto it, then integrate the same validated design as <span className="text-white/90 font-medium">Ximplic Xengra</span>.
          </p>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>The platform</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">One accelerator, the whole path</h2>
          <p className="text-white/55 max-w-2xl mb-12">The same accelerator at every step: evaluate it in software, map any model onto it, then integrate it as Ximplic Xengra.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tag: "Virtual prototype", name: "Vyzora", desc: "The Virtual Prototype. SystemC model, run any model and measure power, no hardware.", to: "/products/vyzora" },
              { tag: "Toolchain", name: "Vextyl", desc: "The Compiler. Map any ONNX model onto the accelerator, quantized and RTL-validated.", to: "/products/vextyl" },
              { tag: "Synthesisable RTL", name: "Xengra", desc: "The RTL IP. Synthesisable in-memory core with AMBA AXI for clean SoC integration.", to: "/products/xengra" },
              { tag: "In development", name: "Silven", desc: "The Silicon IP. The accelerator hardened to silicon as a drop-in macro.", to: null },
            ].map((p) => (
              p.to ? (
                <Link key={p.name} to={p.to} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 flex flex-col transition-colors hover:border-white/20 hover:bg-white/[0.04]">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-white/55 mb-4">{p.tag}</span>
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-white/55 flex-1 leading-relaxed">{p.desc}</p>
                  <span className="text-sm font-medium mt-5 inline-flex items-center gap-1 transition-[gap] group-hover:gap-2" style={{ color: TEAL }}>Explore {p.name} <ArrowRight size={13} /></span>
                </Link>
              ) : (
                <div key={p.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 flex flex-col opacity-60">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-white/55 mb-4">{p.tag}</span>
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-white/55 flex-1 leading-relaxed">{p.desc}</p>
                  <span className="text-xs uppercase tracking-wider text-white/55 mt-5">Coming soon</span>
                </div>
              )
            ))}
          </div>
          <p className="mt-10">
            <a href="#integration" className="text-sm font-medium inline-flex items-center gap-1" style={{ color: TEAL }}>See how to adopt it <ArrowRight size={13} /></a>
          </p>
        </div>
      </section>

      {/* INTEGRATION — how the accelerator drops into a host SoC (the how-to-adopt step) */}
      <IntegrationSoC />

      {/* CONTACT */}
      <SectionSeam to="light" align="right" />
      <section id="contact" className="px-6 py-28 bg-white text-black">
        <div className="max-w-2xl mx-auto text-center rv">
          <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border mb-6" style={{ color: "#0a8f63", borderColor: `${TEAL}40`, background: `${TEAL}14` }}>Partner with Ximplic</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.015em] mb-5" style={{ letterSpacing: "-0.03em" }}>Find the right starting point</h2>
          <p className="text-black/60 mb-9">Not sure where to begin? Share the target workloads and platform. We'll recommend the right product and set up an evaluation.</p>
          <div className="flex items-center justify-center">
            <RequestAccessButton subject="Ximplic — platform enquiry" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>Request evaluation <ArrowRight size={16} /></RequestAccessButton>
          </div>
          <p className="text-xs text-black/60 mt-7">Email <a href="mailto:info@ximplic.com" style={{ color: "#0a8f63" }}>info@ximplic.com</a> · Groningen, The Netherlands</p>
        </div>
      </section>
      <SectionSeam to="dark" align="left" />
    </>
  );
}
