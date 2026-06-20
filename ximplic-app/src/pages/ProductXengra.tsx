import { ArrowRight } from "lucide-react";
import RequestAccessButton from "@/components/RequestAccessButton";
import Faq from "@/components/Faq";
import SpecTable from "@/components/SpecTable";
import IntegrationSoC from "@/components/IntegrationSoC";
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
  { href: "#features", label: "Architecture" },
  { href: "#integration", label: "Integration" },
  { href: "#specs", label: "Specifications" },
  { href: "#usecases", label: "Applications" },
  { href: "#performance", label: "Validation" },
  { href: "#faq", label: "FAQ" },
];

export default function ProductXengra() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-svh flex flex-col justify-center px-6 py-24" style={{ animation: "fadeIn 0.6s ease-out" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: TEAL }}>RTL IP · Edge AI · In-Memory Computing</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.015em] text-balance mb-6" style={{ letterSpacing: "-0.02em" }}>
              <span style={gradText}>Xengra</span><br />
              <span style={gradText}>the </span><span style={{ color: TEAL }}>in-memory</span><span style={gradText}>{" RTL IP"}</span>
            </h1>
            <p className="text-white/55 leading-relaxed max-w-xl mb-8">A Digital In-Memory Computing neural accelerator that keeps weights resident in the SRAM array and computes in place, cutting the weight-movement energy that dominates conventional NPUs. FPGA-proven today, on a path to ASIC.</p>
            <div className="flex items-center gap-3 mb-9">
              <RequestAccessButton subject="Ximplic Xengra — RTL IP licensing enquiry" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>License Xengra <ArrowRight size={16} /></RequestAccessButton>
              <a href="#overview" className="inline-flex items-center text-sm md:text-base font-medium px-6 h-12 rounded-lg border border-white/15 text-white/90 hover:border-white/30 transition-colors">How it works</a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
              <span className="inline-flex items-center gap-2"><i className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: TEAL }} /> Weight-stationary MAC</span>
              <span className="inline-flex items-center gap-2"><i className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: TEAL }} /> INT8 / INT4 / INT2 / INT1</span>
              <span className="inline-flex items-center gap-2"><i className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: TEAL }} /> AMBA AXI4 interfaces</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 w-full lg:max-w-[460px] lg:ml-auto">
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-medium text-white/80">Per-cluster datapath</span>
              <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: TEAL, background: `${TEAL}14`, border: `1px solid ${TEAL}40` }}>in-memory MAC</span>
            </div>
            <svg className="soc w-full h-auto max-h-[320px]" viewBox="0 0 300 326" role="img" aria-label="Per-cluster datapath: input and sparsity, the in-memory DIMC macro, adder tree, post-processing, and elementwise/pooling">
              <rect className="blk" x="40" y="10" width="220" height="42" rx="10" /><text className="blk-l" x="150" y="36">Input + sparsity</text>
              <path className="wire" d="M150 52 V70" /><polygon className="arrow" points="150,76 144,66 156,66" />
              <rect className="accel" x="40" y="76" width="220" height="58" rx="12" /><text className="accel-l" x="150" y="100">DIMC MACRO</text><text className="accel-s" x="150" y="118">MAC, in memory</text>
              <path className="wire" d="M150 134 V152" /><polygon className="arrow" points="150,158 144,148 156,148" />
              <rect className="blk" x="40" y="158" width="220" height="42" rx="10" /><text className="blk-l" x="150" y="184">Adder tree</text>
              <path className="wire" d="M150 200 V218" /><polygon className="arrow" points="150,224 144,214 156,214" />
              <rect className="blk" x="40" y="224" width="220" height="42" rx="10" /><text className="blk-l" x="150" y="250">Post-process · LUT · requant</text>
              <path className="wire" d="M150 266 V284" /><polygon className="arrow" points="150,290 144,280 156,280" />
              <rect className="blk" x="40" y="290" width="220" height="32" rx="10" /><text className="blk-l" x="150" y="310">Eltwise · pooling</text>
            </svg>
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center"><b className="block text-sm font-semibold">In-SRAM</b><small className="text-[10px] tracking-widest uppercase text-white/55">COMPUTE</small></div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center"><b className="block text-sm font-semibold">INT8–INT1</b><small className="text-[10px] tracking-widest uppercase text-white/55">RUNTIME</small></div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center"><b className="block text-sm font-semibold">FPGA→ASIC</b><small className="text-[10px] tracking-widest uppercase text-white/55">ONE IP</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SUB-NAV */}
      <SubNav links={subnavLinks} />

      {/* 01 · OVERVIEW */}
      <section id="overview" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>What it is</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Compute where the data already lives</h2>
          <p className="text-white/55 max-w-3xl mb-12">Conventional accelerators burn most of their energy moving weights between memory and compute. Ximplic Xengra keeps weights pinned inside the SRAM array and does the multiply-accumulate in place. On always-on models, weight movement stops being the dominant cost.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-white/55 leading-relaxed">A tiled, weight-stationary in-memory engine. Each cluster holds a MAC array; the post-processing (scaling, activation, requantization, residual add, pooling) sits outside the compute macro so the datapath stays flexible across edge models. Precision is configurable at runtime from INT8 down to INT1.</p>
              <p className="text-white/55 leading-relaxed">The compute-macro interface is frozen between the FPGA prototype and the ASIC. Ximplic Xengra runs today on an FPGA, with block RAM standing in for the array, and migrates to a custom low-voltage SRAM macro at silicon, with no change to the surrounding logic. De-risk on hardware now and carry the validated design into the end product.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4">The datapath, per cluster</h3>
              <ul className="space-y-3 text-sm text-white/55">
                <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Input buffer + sparsity engine</li>
                <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> DIMC macro: MAC in memory</li>
                <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Pipelined adder tree</li>
                <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Post-process: scale · LUT · requant</li>
                <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Eltwise add · pooling · on-chip memory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · ARCHITECTURE */}
      <section id="features" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Architecture</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-12 max-w-2xl">Efficiency from several techniques combined</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>, h: "In-memory MAC array", p: "Weights pinned in the SRAM array; activations stream in, no weight movement." },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>, h: "Multi-precision, runtime", p: "INT8 to INT1, configurable per layer for more throughput, less energy." },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5h14v14H5z" /><path d="M9 9h6v6H9z" /></svg>, h: "Dual sparsity engine", p: "Input and weight sparsity skip needless work for measured energy savings." },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v6H4zM4 14h16v6H4z" /></svg>, h: "Flexible post-processing", p: "A 256-entry LUT approximates any activation, plus inline residual add and pooling." },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h10" /></svg>, h: "Standard SoC interfaces", p: "AMBA AXI4 and AXI4-Lite, memory-mapped control, plus AXI4 DMA from DRAM." },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7z" /><path d="M9 12l2 2 4-4" /></svg>, h: "FPGA-to-ASIC contract", p: "Frozen compute-macro interface: validate on FPGA, migrate to ASIC without logic rework." },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h3l2-6 3 12 2-8 2 5h6" /></svg>, h: "Spiking networks, too", p: "Runs rate-coded spiking neural networks (integrate-and-fire / LIF) in a single pass, board-validated, on the same array as CNNs and transformers." },
            ].map((c) => (
              <div key={c.h} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
                <div className="w-9 h-9 mb-4" style={{ color: TEAL }}>{c.svg}</div>
                <h3 className="text-lg font-semibold mb-2">{c.h}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <IntegrationSoC />

      {/* SPECS */}
      <section id="specs" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Specifications</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-12 max-w-2xl">Technical summary</h2>
          <SpecTable rows={[
            ["Architecture", "Weight-stationary digital in-memory MAC"],
            ["Post-processing", "LUT activation · requant · eltwise · pool"],
            ["Compute array", "Configurable, multi-cluster"],
            ["Host interface", "AXI4-Lite control + AXI4 DMA"],
            ["Precision", "INT8 / INT4 / INT2 / INT1, runtime"],
            ["FPGA prototype", "Proven end to end on FPGA"],
            ["Sparsity", "Input + weight, row/column masking"],
            ["Model classes", "CNN · transformer-class · rate-coded SNN"],
            ["ASIC target", "Custom low-voltage SRAM macro"],
            ["Toolchain", "Vextyl + Vyzora"],
          ]} />
        </div>
      </section>

      {/* APPLICATIONS */}
      <SectionSeam to="light" align="left" />
      <section id="usecases" className="px-6 py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#0a8f63" }}>Where it fits</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Built for always-on edge inference</h2>
          <p className="text-black/60 max-w-2xl mb-12">It wins where models are small and run continuously, the workloads that drain a battery on a conventional NPU.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tag: "Audio", h: "Keyword spotting", p: "Wake-word and command detection at sub-mW duty cycles." },
              { tag: "Sensors", h: "Anomaly detection", p: "Predictive-maintenance autoencoders on industrial sensor streams." },
              { tag: "Vision", h: "Compact CNN inference", p: "MobileNet-class person, gesture and presence sensing." },
              { tag: "Fusion", h: "Sensor-hub AI", p: "Low-power classification in always-on sensor hubs." },
            ].map((u) => (
              <div key={u.h} className="rounded-xl border border-black/10 bg-black/[0.03] p-6 hover:border-black/20 transition-colors">
                <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "#0a8f63" }}>{u.tag}</span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{u.h}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{u.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionSeam to="dark" align="right" />

      {/* DELIVERABLES */}
      <section id="deliverables" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>What it includes</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-8">A validated Xengra IP package</h2>
            <ul className="space-y-4">
              {[
                ["Xengra RTL", "Synthesisable DIMC core with configurable, multi-cluster array."],
                ["SoC integration wrapper", "AXI4-Lite control, AXI4 DMA, and a command/interrupt model for the host SoC."],
                ["FPGA prototype flow", "Packaging, block-design and bitstream flow proven on FPGA."],
                ["Verification suite", "Self-checking testbenches with golden-value and board-correlation checks."],
                ["Vextyl", "The Compiler: ONNX-to-hardware toolchain that deploys any model onto Core."],
                ["Vyzora", "The Virtual Prototype: SystemC model for early architecture and software work."],
                ["Docs", "Design spec, ASIC migration contract, and integration guidance."],
              ].map(([b, s]) => (
                <li key={b} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/20 transition-colors">
                  <b className="block text-sm font-semibold mb-1">{b}</b>
                  <span className="text-sm text-white/55 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>How to engage</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-8">From evaluation to integration</h2>
            <div className="space-y-4">
              {[
                ["Scope", "Share workloads and power budget; we confirm fit and array sizing."],
                ["Evaluate", "Measure latency and energy on target workloads via the Virtual Prototype and FPGA."],
                ["Integrate", "Wires into the SoC over AXI and deploys models with the compiler."],
                ["Tape out", "License Ximplic Xengra and carry the frozen-interface design into the target ASIC."],
              ].map(([h, p]) => (
                <div key={h} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20 transition-colors">
                  <h3 className="text-base font-semibold mb-1.5">{h}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p}</p>
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
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Proven on FPGA</h2>
          <p className="text-white/55 max-w-2xl mb-12">Ximplic Xengra runs real models end-to-end on an FPGA, bit-exact against simulation.</p>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden mb-6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[10px] tracking-widest uppercase text-white/55">
                  <th className="px-5 py-3 font-medium">What</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Where</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["End-to-end inference, INT8", "Measured", "FPGA, matches simulation"],
                  ["Multi-precision (INT4) deployment", "Measured", "FPGA, mixed precision"],
                  ["Two model families, one bitstream", "Measured", "Keyword spotting + anomaly detection"],
                  ["Rate-coded spiking network (SNN)", "Measured", "FPGA, bit-exact vs simulation"],
                ].map(([w, s, wh]) => (
                  <tr key={w} className="border-b border-white/[0.06] last:border-b-0">
                    <td className="px-5 py-4 text-white/80">{w}</td>
                    <td className="px-5 py-4 font-medium" style={{ color: TEAL }}>{s}</td>
                    <td className="px-5 py-4 text-white/55">{wh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 flex gap-4">
            <div className="w-6 h-6 shrink-0 mt-0.5" style={{ color: TEAL }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg></div>
            <p className="text-sm text-white/55 leading-relaxed"><b className="text-white/90 font-medium">What's measured, stated plainly.</b> Functional correctness and per-layer timing are measured on the FPGA prototype, where block RAM stands in for the in-memory array. Final power and efficiency depend on the custom SRAM macro and process node at ASIC. We share the methodology and the FPGA results under NDA.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Questions</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-12">Frequently asked</h2>
          <Faq items={[
            { q: "What exactly is available to evaluate?", a: "Ximplic Vyzora: a SystemC TLM-2.0 model of the accelerator. Plug it into the SoC over AXI, run any model, and measure latency and energy. No hardware, no proprietary EDA, zero licence cost." },
            { q: "Is special hardware or a toolchain required?", a: "No. Ximplic Vyzora runs in pure software on open SystemC. Evaluation happens entirely on standard machines before committing to any hardware." },
            { q: "Which models can it run?", a: "Any standard model. Ximplic Vextyl maps an ONNX or framework model onto the accelerator and targets both Ximplic Vyzora and the RTL, so what is measured in software matches what runs on the RTL." },
            { q: "How is the performance validated?", a: "The model is correlated to RTL co-simulation and calibrated against FPGA measurement. We're transparent about what's measured versus projected, and share the full methodology under NDA. The IP is FPGA-proven; it has not yet been taped out to silicon." },
            { q: "How do we move from evaluation to integration?", a: "Evaluate with Ximplic Vyzora, then license Ximplic Xengra and integrate it into the SoC with our support. The same validated design carries from software to RTL, into the target silicon." },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <SectionSeam to="light" align="right" />
      <section id="contact" className="px-6 py-28 bg-white text-black">
        <div className="max-w-2xl mx-auto text-center rv">
          <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border mb-6" style={{ color: "#0a8f63", borderColor: "rgba(10,143,99,0.4)", background: "rgba(10,143,99,0.08)" }}>Partner with Ximplic</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.015em] mb-5" style={{ letterSpacing: "-0.03em" }}>Designing an always-on AI SoC?</h2>
          <p className="text-black/60 mb-9">Ready to license Ximplic Xengra into an always-on AI SoC? Let's set up an evaluation tailored to the target workloads and power budget.</p>
          <div className="flex items-center justify-center">
            <RequestAccessButton subject="Ximplic Xengra — RTL IP licensing enquiry" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>License Xengra <ArrowRight size={16} /></RequestAccessButton>
          </div>
          <div className="text-xs text-black/60 mt-7">Email <a href="mailto:info@ximplic.com" style={{ color: "#0a8f63" }}>info@ximplic.com</a> · Groningen, The Netherlands</div>
        </div>
      </section>
      <SectionSeam to="dark" align="left" />
    </>
  );
}
