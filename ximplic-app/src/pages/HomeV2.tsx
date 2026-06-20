import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import RequestAccessButton from "@/components/RequestAccessButton";
import EnergyBars from "@/components/EnergyBars";
import SectionSeam from "@/components/SectionSeam";

const TEAL = "#2BE8A5";
const gradText = {
  background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.62))",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

/* elegant floating shapes — blurred ellipses drifting behind the hero.
   One hue only (#2BE8A5, varied alpha) per the One-Signal Rule; three shapes, spread, not clustered. */
const SHAPES = [
  { w: 600, h: 140, r: 12, d: 0.3, pos: "left-[-10%] md:left-[-5%] top-[16%] md:top-[20%]", grad: "from-[#2BE8A5]/25" },
  { w: 480, h: 120, r: -15, d: 0.5, pos: "right-[-6%] md:right-[0%] top-[64%] md:top-[70%]", grad: "from-[#2BE8A5]/16" },
  { w: 300, h: 80, r: -8, d: 0.45, pos: "left-[4%] md:left-[10%] bottom-[8%]", grad: "from-[#2BE8A5]/14" },
];

export default function HomeV2() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[82vh] flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {SHAPES.map((s, i) => (
            <div key={i} className={cn("hero-shape", s.pos)} style={{ ["--r"]: `${s.r}deg`, ["--d"]: `${s.d}s` } as CSSProperties}>
              <div className={cn("hero-shape-inner bg-gradient-to-r to-transparent border-2 border-white/15", s.grad)} style={{ width: s.w, height: s.h, boxShadow: "0 8px 32px 0 rgba(43,232,165,0.10)" }} />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        <div className="relative z-10 flex flex-col items-center">
        <a href="#proof" className="rise mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-xs text-white/70 hover:text-white transition-colors">
          <Sparkles size={13} style={{ color: TEAL }} />
          FPGA-proven edge AI inference IP
          <ArrowRight size={12} />
        </a>

        <h1 className="rise text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-center max-w-4xl leading-[1.12] mb-6" style={{ letterSpacing: "-0.02em", animationDelay: ".08s" }}>
          <span style={gradText}>Energy-efficient AI for </span>
          <span style={{ color: TEAL }}>everyday</span>
          <span style={gradText}> devices</span>
        </h1>

        <p className="rise text-sm md:text-base text-center max-w-2xl text-white/55 mb-9 leading-relaxed" style={{ animationDelay: ".16s" }}>
          Prove power and performance on any model in software with <span className="text-white/90 font-medium">Ximplic Vyzora</span>, before committing to RTL or silicon. The same validated IP then integrates straight into the SoC.
        </p>

        <div className="rise flex items-center gap-3" style={{ animationDelay: ".24s" }}>
          <RequestAccessButton subject="Ximplic Vyzora evaluation" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>
            Request evaluation <ArrowRight size={16} />
          </RequestAccessButton>
          <a href="#why" className="inline-flex items-center text-sm md:text-base font-medium px-6 h-12 rounded-lg border border-white/15 text-white/90 hover:border-white/30 transition-colors">How it works</a>
        </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Energy-efficient inference IP for the edge</h2>
          <p className="text-white/55 max-w-2xl mb-12">Evaluate it in software, map any model onto it, then integrate the same validated design into the SoC.</p>
          <div className="rvs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tag: "Virtual prototype", name: "Vyzora", desc: "The Virtual Prototype. Run any model, measure power, no hardware.", to: "/products/vyzora" },
              { tag: "Toolchain", name: "Vextyl", desc: "The Compiler. Map any ONNX model, quantized and RTL-validated.", to: "/products/vextyl" },
              { tag: "Synthesisable RTL", name: "Xengra", desc: "The RTL IP. In-memory core with AMBA AXI for clean integration.", to: "/products/xengra" },
              { tag: "In development", name: "Silven", desc: "The Silicon IP. Hardened to silicon as a drop-in macro.", to: null },
            ].map((p) => (
              p.to ? (
                <Link key={p.name} to={p.to} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 flex flex-col transition-colors hover:border-white/20 hover:bg-white/[0.04]">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-white/55 mb-4">{p.tag}</span>
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-white/55 flex-1 leading-relaxed">{p.desc}</p>
                  <span className="text-sm font-medium mt-4 inline-flex items-center gap-1 transition-[gap] group-hover:gap-2" style={{ color: TEAL }}>Explore <ArrowRight size={13} /></span>
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
        </div>
      </section>

      {/* ENERGY */}
      <section id="why" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3 text-white/50">Where the energy goes</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Most of the energy moves data, not uses it</h2>
          <p className="text-white/55 max-w-2xl mb-12">On small models that run all the time, the computation is cheap. The cost is shuttling weights between memory and logic. We compute inside the memory, so that movement mostly disappears.</p>
          <EnergyBars />
        </div>
      </section>

      {/* PROOF SIGNALS */}
      <section id="proof" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Measured, not promised</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-12 max-w-2xl">Proven on real hardware</h2>
          <div className="rvs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/10 bg-white/10">
            {[
              ["Validated", "FPGA-proven", "Full design runs end to end on an FPGA today."],
              ["Architecture", "SRAM in-memory", "Standard-cell digital memory, portable across foundries."],
              ["Integration", "AMBA AXI", "Drop the RTL into the SoC over a standard bus."],
              ["Models", "Any ONNX", "Mapped onto the array with Vextyl, quantized."],
            ].map(([k, v, d]) => (
              <div key={v} className="bg-black p-6">
                <div className="text-[10px] font-medium tracking-widest uppercase mb-3 text-white/50">{k}</div>
                <div className="text-lg font-semibold mb-1.5">{v}</div>
                <div className="text-sm text-white/55 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEAM: dark proof → light contact */}
      <SectionSeam to="light" align="right" />

      {/* CONTACT — light band */}
      <section id="contact" className="bg-white text-black px-6 py-28">
        <div className="max-w-2xl mx-auto text-center rv">
          <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border mb-6" style={{ color: "#0a8f63", borderColor: "#2BE8A555", background: "#2BE8A51f" }}>Request access</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.015em] mb-5" style={{ letterSpacing: "-0.03em" }}>Get Ximplic Vyzora</h2>
          <p className="text-black/60 mb-9">Share the target workloads and platform and we'll set up an evaluation under NDA. Or reach out about licensing the IP, a partnership, or a role.</p>
          <div className="flex items-center justify-center">
            <RequestAccessButton subject="Ximplic Vyzora evaluation" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>Request evaluation <ArrowRight size={16} /></RequestAccessButton>
          </div>
          <p className="text-xs text-black/55 mt-7">Email <a href="mailto:info@ximplic.com" style={{ color: "#0a8f63" }}>info@ximplic.com</a> · Groningen, The Netherlands</p>
        </div>
      </section>

      {/* SEAM: light contact → dark footer */}
      <SectionSeam to="dark" align="left" />
    </>
  );
}
