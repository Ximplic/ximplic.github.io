import { ArrowRight } from "lucide-react";
import RequestAccessButton from "@/components/RequestAccessButton";
import Faq from "@/components/Faq";
import SpecTable from "@/components/SpecTable";
import SectionSeam from "@/components/SectionSeam";
import SubNav from "@/components/SubNav";

const TEAL = "#2BE8A5";
const gradText = {
  background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.62))",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const subnavLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#features", label: "Capabilities" },
  { href: "#specs", label: "Specifications" },
  { href: "#usecases", label: "Applications" },
  { href: "#deliverables", label: "What's included" },
  { href: "#performance", label: "Validation" },
  { href: "#faq", label: "FAQ" },
];

export default function ProductVyzora() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-svh flex flex-col justify-center px-6 py-24" style={{ animation: "fadeIn 0.6s ease-out" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: TEAL }}>Edge AI IP · Virtual Prototype</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.015em] leading-[1.12] text-balance mb-6" style={{ letterSpacing: "-0.02em" }}>
              <span style={gradText}>Vyzora</span><br />
              <span style={gradText}>the Virtual </span><span style={{ color: TEAL }}>Prototype</span>
            </h1>
            <p className="text-sm md:text-base text-white/55 leading-relaxed max-w-2xl mb-8">
              A cycle-approximate, SystemC TLM-2.0 model of the XIM <span className="text-white/90 font-medium">Digital In-Memory Computing</span> accelerator IP. Benchmark workloads, explore power and performance, and design the accelerator into a target SoC, months before RTL or silicon and at zero EDA cost.
            </p>
            <div className="flex items-center gap-3 mb-9">
              <RequestAccessButton subject="Ximplic Vyzora — integration enquiry" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>
                Request integration <ArrowRight size={16} />
              </RequestAccessButton>
              <a href="#overview" className="inline-flex items-center text-sm md:text-base font-medium px-6 h-12 rounded-lg border border-white/15 text-white/90 hover:border-white/30 transition-colors">How it works</a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50">
              <span className="inline-flex items-center gap-2"><i className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: TEAL }} /> SystemC TLM-2.0 native</span>
              <span className="inline-flex items-center gap-2"><i className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: TEAL }} /> ARM AMBA AXI4 / AXI4-Lite</span>
              <span className="inline-flex items-center gap-2"><i className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: TEAL }} /> IP-XACT register map</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 w-full lg:max-w-[460px] lg:ml-auto hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-medium">SoC integration</span>
              <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: TEAL, background: `${TEAL}14`, border: `1px solid ${TEAL}40` }}>AXI4 · drop-in IP</span>
            </div>
            <svg className="soc" viewBox="0 0 420 330" role="img" aria-label="XIM DIMC accelerator plugging into a host SoC over AXI">
              <rect className="blk" x="16" y="14" width="116" height="46" rx="10" />
              <text className="blk-l" x="74" y="42">RISC-V CPU</text>
              <rect className="blk" x="152" y="14" width="116" height="46" rx="10" />
              <text className="blk-l" x="210" y="42">SRAM / DDR</text>
              <rect className="blk" x="288" y="14" width="116" height="46" rx="10" />
              <text className="blk-l" x="346" y="42">Sensors I/O</text>
              <path className="wire" d="M74 60 V112" />
              <path className="wire" d="M210 60 V112" />
              <path className="wire" d="M346 60 V112" />
              <rect className="bus" x="16" y="112" width="388" height="36" rx="8" />
              <text className="bus-l" x="210" y="134">AXI INTERCONNECT</text>
              <path className="wire" d="M210 148 V200" />
              <path className="flow" d="M210 148 V196" />
              <polygon className="arrow" points="210,206 203,194 217,194" />
              <text className="axi-l" x="222" y="176">AXI4</text>
              <rect className="accel" x="70" y="206" width="280" height="108" rx="12" />
              <text className="accel-l" x="210" y="230">XIM DIMC ACCELERATOR</text>
              <text className="accel-s" x="210" y="247">in-memory compute engine</text>
              <g>
                <rect className="scell" x="96" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="114" y="262" width="14" height="14" rx="3" />
                <rect className="scell on" x="132" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="150" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="168" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="186" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="204" y="262" width="14" height="14" rx="3" />
                <rect className="scell on" x="222" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="240" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="258" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="276" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="294" y="262" width="14" height="14" rx="3" />
                <rect className="scell" x="96" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="114" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="132" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="150" y="280" width="14" height="14" rx="3" />
                <rect className="scell on" x="168" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="186" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="204" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="222" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="240" y="280" width="14" height="14" rx="3" />
                <rect className="scell on" x="258" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="276" y="280" width="14" height="14" rx="3" />
                <rect className="scell" x="294" y="280" width="14" height="14" rx="3" />
              </g>
            </svg>
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                ["INT8–INT1", "PRECISION"],
                ["TLM-2.0", "SYSTEMC"],
                ["R²=1.00", "vs RTL (dense)"],
              ].map(([b, s]) => (
                <div key={s} className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center">
                  <b className="block text-sm font-semibold mb-0.5">{b}</b>
                  <small className="block text-[10px] tracking-widest uppercase text-white/55">{s}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SUB-NAV */}
      <SubNav links={subnavLinks} />

      {/* OVERVIEW */}
      <section id="overview" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>What it is</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-3xl">Design around the accelerator before the silicon exists</h2>
          <p className="text-white/55 max-w-3xl mb-12">An executable, cycle-approximate model of the accelerator IP. Drops into a SystemC platform to run any workload, returning trustworthy cycles, latency and energy to drive architecture and software decisions.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <p className="text-white/55 leading-relaxed">The accelerator keeps weights resident in the SRAM array and computes in place. It targets the workloads that run continuously on battery: keyword spotting, anomaly detection, sensor fusion and compact vision.</p>
              <p className="text-white/55 leading-relaxed">De-risk the integration today. Measures latency and energy on any model, validates the driver path, and explores operating points, all in software with no hardware and no proprietary EDA.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
              <h3 className="text-lg font-semibold mb-1.5">Probe the accelerator from any testbench</h3>
              <p className="text-sm text-white/55 mb-4">A stable C++ probe API exposes the numbers that matter, per inference:</p>
              <div className="codeblk"><span className="c">// link libxim_component.a into your SoC VP</span>
{"\n"}<span className="k">auto</span> xim = <span className="k">new</span> xim_accelerator_tlm(<span className="s">"xim"</span>, /*clusters*/4);
{"\n"}xim-&gt;set_operating_point(<span className="s">0.6</span>, <span className="s">250.0</span>);  <span className="c">// V, MHz</span>
{"\n"}
{"\n"}<span className="c">// ...run your command stream over AXI...</span>
{"\n"}
{"\n"}xim-&gt;get_cycle_count();         <span className="c">// wall-clock cycles</span>
{"\n"}xim-&gt;get_compute_latency_ns();  <span className="c">// latency</span>
{"\n"}xim-&gt;get_energy_pJ();           <span className="c">// dynamic + leakage</span>
{"\n"}xim-&gt;get_compute_tops_per_watt();</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-12 max-w-2xl">Everything needed to evaluate and integrate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Configurable compute array", desc: "INT8 / INT4 / INT2 / INT1, sized to a target power and area budget.", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></> },
              { title: "RTL-correlated timing", desc: "R² = 1.0000 vs RTL on the dense path, FPGA-calibrated to ±5% per layer.", icon: <><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="9" /></> },
              { title: "Standard SoC interfaces", desc: "ARM AMBA AXI4 + AXI4-Lite with an IEEE 1685-2014 IP-XACT register map.", icon: <path d="M4 7h16M4 12h16M4 17h10" /> },
              { title: "Energy & DVFS modeling", desc: "Dynamic and leakage energy with DVFS sweeps for TOPS/W and battery life.", icon: <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7z" /> },
              { title: "Drop-in integration", desc: "Shim template, RISC-V reference SoC and 8 hooks. Integrate in days.", icon: <path d="M4 4h16v6H4zM4 14h16v6H4z" /> },
              { title: "Target workloads, measured", desc: "20+ MAC-honest model builders with HTML/CSV reports and comparison.", icon: <><path d="M3 3v18h18" /><path d="M7 14l3-4 4 3 4-6" /></> },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${TEAL}14`, color: TEAL }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">{c.icon}</svg>
                </div>
                <h3 className="text-base font-semibold mb-1.5">{c.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Specifications</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-12 max-w-2xl">Technical summary</h2>
          <SpecTable rows={[
            ["Model type", "Cycle-approximate SystemC TLM-2.0"],
            ["Scaling", "Configurable, parallel"],
            ["Host interface", "AXI4-Lite control + AXI4 DMA"],
            ["Integrator API", "8 callback hooks + probe getters"],
            ["Compute array", "Configurable, in-memory"],
            ["Precision", "INT8 / INT4 / INT2 / INT1"],
            ["Register map", "IEEE 1685-2014 IP-XACT XML"],
            ["Timing profiles", "FPGA + ASIC design-intent"],
            ["Toolchain", "Open SystemC, no proprietary EDA"],
            ["Validation", "RTL co-sim + FPGA calibration"],
          ]} />
        </div>
      </section>

      {/* APPLICATIONS */}
      <SectionSeam to="light" align="right" />
      <section id="usecases" className="px-6 py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#0a8f63" }}>Where it fits</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Built for always-on edge inference</h2>
          <p className="text-black/60 max-w-3xl mb-12">In-memory computing wins when models are small and run all the time, exactly the workloads that flatten a battery on a conventional NPU.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tag: "Audio", title: "Keyword spotting", desc: "Always-listening wake-word detection (DS-CNN) at sub-mW duty cycles." },
              { tag: "Sensors", title: "Anomaly detection", desc: "Predictive-maintenance autoencoders on IoT sensor streams, on-device." },
              { tag: "Vision", title: "Compact CNN inference", desc: "MobileNet-class person, gesture and presence sensing for wearables." },
              { tag: "Fusion", title: "Sensor-hub AI", desc: "Low-power fusion in always-on hubs with weights resident on-chip." },
            ].map((u) => (
              <div key={u.title} className="rounded-xl border border-black/10 bg-black/[0.03] p-6 transition-colors hover:border-black/20">
                <span className="text-[10px] font-medium tracking-widest uppercase mb-4 inline-block" style={{ color: "#0a8f63" }}>{u.tag}</span>
                <h3 className="text-base font-semibold mb-1.5">{u.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionSeam to="dark" align="left" />

      {/* DELIVERABLES */}
      <section id="deliverables" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>What's included</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.015em] mb-8">A complete integration kit</h2>
            <ul className="deliv space-y-px rounded-xl border border-white/10 bg-white/[0.02] p-2">
              <li><b>The accelerator core</b><span>SystemC IP-block model plus a static library to link in.</span></li>
              <li><b>AMBA reference wrappers</b><span>AXI4 wrappers verified against the ARM AMBA TLM-2.0 kit.</span></li>
              <li><b>Integration shim &amp; reference SoC</b><span>Drop-in template plus a RISC-V reference platform.</span></li>
              <li><b>Workload runner &amp; benchmarks</b><span>20+ model builders with HTML/CSV performance reports.</span></li>
              <li><b>IP-XACT register description</b><span>IEEE 1685-2014 XML, one source for driver and docs.</span></li>
              <li><b>Calibration &amp; test suites</b><span>RTL co-sim, AXI-compliance and golden-value regression tests.</span></li>
              <li><b>Integration guide &amp; onboarding</b><span>Step-by-step docs, AXI protocol BVI and model description.</span></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>How to engage</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.015em] mb-8">From evaluation to design-in</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { h: "Scope", p: "Share target workloads, power budget and platform. We confirm fit." },
                { h: "Evaluate", p: "Run customer models under NDA, measuring latency and energy." },
                { h: "Integrate", p: "Plug into a SystemC platform via the shim and AXI sockets." },
                { h: "Design-in", p: "License the XIM IP and move to RTL with a validated path." },
              ].map((s) => (
                <div key={s.h} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: TEAL }}>{s.h}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section id="performance" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Validation</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Numbers worth trusting</h2>
          <p className="text-white/55 max-w-2xl mb-12">Validated against RTL co-simulation and FPGA measurement.</p>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2 overflow-x-auto mb-6">
            <table className="t">
              <thead><tr><th>Configuration</th><th>Precision</th><th>Vyzora cycles</th><th>RTL cycles</th><th>Δ</th></tr></thead>
              <tbody>
                <tr><td>256×256 dense</td><td>INT8</td><td className="num">2,574</td><td className="num">2,573</td><td className="ok">+0.0%</td></tr>
                <tr><td>256×256 dense</td><td>INT4</td><td className="num">1,542</td><td className="num">1,545</td><td className="ok">−0.2%</td></tr>
                <tr><td>128×128 dense</td><td>INT8</td><td className="num">1,294</td><td className="num">1,293</td><td className="ok">+0.1%</td></tr>
                <tr><td>64×64 · 50% sparse</td><td>INT8</td><td className="num">398</td><td className="num">397</td><td className="ok">+0.3%</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${TEAL}14`, color: TEAL }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
            </div>
            <p className="text-sm text-white/55 leading-relaxed"><b className="text-white/90 font-semibold">Modeling transparency.</b> Ximplic Vyzora is FPGA-calibrated end-to-end for the DS-CNN-L reference workload. Other models (MobileNet, ResNet, transformers, LLMs) are <strong className="text-white/80">MAC-honest analytic projections</strong> for relative comparison and architecture exploration, and reports label them as estimates. We share the full calibration methodology and validity envelope under NDA so teams can judge fit for their own use case.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SectionSeam to="light" align="left" />
      <section id="faq" className="px-6 py-24 bg-white text-black">
        <div className="max-w-3xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#0a8f63" }}>Questions</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-12 max-w-2xl">Frequently asked</h2>
          <Faq light items={[
            { q: "What exactly is available to evaluate?", a: "Ximplic Vyzora: a SystemC TLM-2.0 model of the accelerator. Plug it into the SoC over AXI, run any model, and measure latency and energy. No hardware, no proprietary EDA, zero licence cost." },
            { q: "Is special hardware or a toolchain required?", a: "No. Ximplic Vyzora runs in pure software on open SystemC. Evaluation happens entirely on standard machines before committing to any hardware." },
            { q: "Which models can it run?", a: "Any standard model. Ximplic Vextyl maps an ONNX or framework model onto the accelerator and targets both Ximplic Vyzora and the RTL, so what is measured in software matches what runs on the RTL." },
            { q: "How is the performance validated?", a: "The model is correlated to RTL co-simulation and calibrated against FPGA measurement. We're transparent about what's measured versus projected, and share the full methodology under NDA. The IP is FPGA-proven; it has not yet been taped out to silicon." },
            { q: "How do we move from evaluation to integration?", a: "Evaluate with Ximplic Vyzora, then license Ximplic Xengra and integrate it into the SoC with our support. The same validated design carries from software to RTL, into the target silicon." },
          ]} />
        </div>
      </section>
      <SectionSeam to="dark" align="right" />

      {/* CTA / CONTACT */}
      <section id="contact" className="px-6 py-28 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center rv">
          <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border mb-6" style={{ color: TEAL, borderColor: `${TEAL}40`, background: `${TEAL}14` }}>Partner with Ximplic</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.015em] mb-5" style={{ letterSpacing: "-0.03em" }}>Plug the XIM accelerator into a target design</h2>
          <p className="text-white/55 mb-9">Scoping an always-on AI SoC, benchmarking for a product roadmap, or ready to design-in? Let's set up an evaluation of Ximplic Vyzora, tailored to target workloads.</p>
          <div className="flex items-center justify-center">
            <RequestAccessButton subject="Ximplic Vyzora — integration enquiry" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>Request integration <ArrowRight size={16} /></RequestAccessButton>
          </div>
          <p className="text-xs text-white/55 mt-7">Email <a href="mailto:info@ximplic.com" style={{ color: TEAL }}>info@ximplic.com</a> · Ximplic · ximplic.com</p>
        </div>
      </section>
    </>
  );
}
