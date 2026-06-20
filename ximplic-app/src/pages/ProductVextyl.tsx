import { ArrowRight, Square, Activity, Grid, Rows, ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";
import RequestAccessButton from "@/components/RequestAccessButton";
import Faq from "@/components/Faq";
import SpecTable from "@/components/SpecTable";

const TEAL = "#2BE8A5";
const gradText = {
  background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.62))",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export default function ProductVextyl() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 pt-32 md:pt-36 pb-10" style={{ animation: "fadeIn 0.6s ease-out" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: TEAL }}>Toolchain · ONNX · Deploy</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.015em] leading-[1.12] text-balance mb-6" style={{ letterSpacing: "-0.02em" }}>
              <span style={gradText}>Vextyl</span><br />
              <span style={gradText}>the </span><span style={{ color: TEAL }}>Compiler</span>
            </h1>
            <p className="text-sm md:text-base max-w-xl text-white/55 mb-9 leading-relaxed">
              Take a trained ONNX model and deploy it on the XIM accelerator: quantized, optionally pruned, and packaged for the hardware in one toolchain. Multi-precision to INT4, validated on FPGA.
            </p>
            <div className="flex items-center gap-3 mb-9">
              <RequestAccessButton subject="Ximplic Vextyl — compiler enquiry" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>
                Request access <ArrowRight size={16} />
              </RequestAccessButton>
              <a href="#overview" className="inline-flex items-center text-sm md:text-base font-medium px-6 h-12 rounded-lg border border-white/15 text-white/90 hover:border-white/30 transition-colors">How it works</a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
              <span className="inline-flex items-center gap-2"><i className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: TEAL }} /> Standard ONNX input</span>
              <span className="inline-flex items-center gap-2"><i className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: TEAL }} /> INT8 / INT4 mixed precision</span>
              <span className="inline-flex items-center gap-2"><i className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: TEAL }} /> Structured pruning</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 w-full lg:max-w-[460px] lg:ml-auto hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-medium">Compile flow</span>
              <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full border" style={{ color: TEAL, borderColor: `${TEAL}40`, background: `${TEAL}14` }}>ONNX → deploy</span>
            </div>
            <svg className="soc w-full h-auto max-h-[320px]" viewBox="0 0 300 332" role="img" aria-label="Compile flow: ONNX model, quantize and prune, schedule banks, deploy to the accelerator">
              <rect className="blk" x="40" y="12" width="220" height="46" rx="10" /><text className="blk-l" x="150" y="40">ONNX model</text>
              <path className="wire" d="M150 58 V80" /><polygon className="arrow" points="150,86 144,76 156,76" />
              <rect className="blk" x="40" y="86" width="220" height="46" rx="10" /><text className="blk-l" x="150" y="114">Quantize · prune</text>
              <path className="wire" d="M150 132 V154" /><polygon className="arrow" points="150,160 144,150 156,150" />
              <rect className="blk" x="40" y="160" width="220" height="46" rx="10" /><text className="blk-l" x="150" y="188">Schedule banks</text>
              <path className="wire" d="M150 206 V228" /><polygon className="arrow" points="150,234 144,224 156,224" />
              <rect className="accel" x="40" y="234" width="220" height="64" rx="12" /><text className="accel-l" x="150" y="262">DEPLOY</text><text className="accel-s" x="150" y="280">to the accelerator</text>
            </svg>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                ["INT8–INT4", "PRECISION"],
                ["Multi", "MODEL FAMILIES"],
                ["Board", "VALIDATED"],
              ].map(([b, s]) => (
                <div key={s} className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <b className="block text-base font-semibold mb-1">{b}</b>
                  <small className="text-[10px] tracking-widest uppercase text-white/55">{s}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SUB-NAV */}
      <nav className="sticky top-[57px] z-40 bg-black/70 backdrop-blur-md border-b border-white/10" aria-label="On this page">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 overflow-x-auto h-12 items-center">
          <a href="#overview" className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors whitespace-nowrap">Overview</a>
          <a href="#features" className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors whitespace-nowrap">Capabilities</a>
          <a href="#specs" className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors whitespace-nowrap">Specifications</a>
          <a href="#usecases" className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors whitespace-nowrap">Applications</a>
          <a href="#deliverables" className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors whitespace-nowrap">What's included</a>
          <a href="#performance" className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors whitespace-nowrap">Validation</a>
          <a href="#faq" className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors whitespace-nowrap">FAQ</a>
        </div>
      </nav>

      {/* 01 · OVERVIEW */}
      <section id="overview" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>What it is</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-3xl">From a trained model to running on the accelerator</h2>
          <p className="text-white/55 max-w-3xl mb-12 leading-relaxed">In-memory computing only pays off if a model can be mapped onto it. Ximplic Vextyl turns a standard ONNX model into a hardware-ready deployment for the XIM accelerator: it quantizes weights and activations, calibrates the requantization, optionally prunes channels, schedules the work across the compute banks, and emits the descriptor the hardware runs, with the numerical behaviour matched to the hardware.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <p className="text-white/55 leading-relaxed">Ximplic Vextyl is built around a model-agnostic core. A thin frontend reads the ONNX graph and normalizes it; the core handles the hardware-shaping decisions: tiling wide layers, splitting columns, allocating compute banks, and choosing per-layer precision. The same path serves convolutional, depthwise-separable and fully-connected networks, so adding a model means describing it, not hand-writing a deployment.</p>
              <p className="text-white/55 leading-relaxed">Quantization is the hard part of edge deployment, and it is where Ximplic Vextyl earns its keep. It supports per-layer mixed precision (keeping sensitive layers at INT8 while the rest run INT4), structured weight pruning with hardware-aware masking, and a requantization path calibrated so that what is measured in software is what the hardware computes, confirmed on the FPGA, not assumed.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Deploy a model in a few lines</h3>
              <p className="text-sm text-white/55 mb-5 leading-relaxed">A clean Python API takes an ONNX model and calibration data to a hardware deployment:</p>
              <div className="codeblk"><span className="c"># normalize an ONNX graph into the compiler IR</span>
{"\n"}layers = onnx_frontend(<span className="s">"model.onnx"</span>, calibration)
{"\n"}
{"\n"}<span className="c"># quantize, prune, schedule -&gt; hardware descriptor</span>
{"\n"}model = compile_ir(layers)
{"\n"}
{"\n"}<span className="c"># emit the deploy header the accelerator runs</span>
{"\n"}emit_model_header(model)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · CAPABILITIES */}
      <section id="features" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-12 max-w-2xl">A production deployment toolchain</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { Icon: Square, h: "Standard ONNX frontend", p: "Any framework, exported to ONNX. No proprietary format to learn." },
              { Icon: Activity, h: "Multi-precision quantization", p: "Per-layer INT8/INT4 mixed precision, calibrated to the hardware datapath." },
              { Icon: Grid, h: "Structured weight pruning", p: "Hardware-aware column pruning with fine-tuning, turning sparsity into energy savings." },
              { Icon: Rows, h: "Tiling & bank scheduling", p: "Layers tiled and scheduled across compute banks automatically, no hand-tuning." },
              { Icon: ShieldCheck, h: "Hardware-faithful behaviour", p: "Deployments checked bit-for-bit against the accelerator. A compile that succeeds, runs." },
              { Icon: TrendingUp, h: "Multiple model families", p: "CNNs, depthwise-separable vision nets and dense autoencoders, one core." },
            ].map(({ Icon, h, p }) => (
              <div key={h} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center mb-4" style={{ color: TEAL }}>
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{h}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{p}</p>
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
            ["Input", "Standard ONNX + calibration data"],
            ["Scheduling", "Tiling, column-split, bank allocation"],
            ["Output", "Hardware deploy descriptor"],
            ["Model families", "CNN · depthwise-separable · dense"],
            ["Precision", "INT8 / INT4, per-layer mixed"],
            ["Toolchain", "Python, pip-installable"],
            ["Quantization", "Calibrated requant, hardware-matched"],
            ["Validation", "Bit-exact vs accelerator + regression pins"],
            ["Sparsity", "Structured column pruning"],
            ["Target", "XIM DIMC accelerator (FPGA & ASIC)"],
          ]} />
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="usecases" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Where it fits</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Built for always-on edge inference</h2>
          <p className="text-white/55 max-w-2xl mb-12 leading-relaxed">Ximplic Vextyl targets the small, continuously-running models that define battery-powered edge AI, the workloads in-memory computing was made for.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tag: "Audio", h: "Keyword spotting", p: "Always-listening wake-word detection, quantized for sub-mW duty cycles." },
              { tag: "Sensors", h: "Anomaly detection", p: "Predictive-maintenance autoencoders on industrial sensor streams, on-device." },
              { tag: "Vision", h: "Compact CNN inference", p: "MobileNet-class person, gesture and presence sensing for wearables." },
              { tag: "Fusion", h: "Sensor-hub AI", p: "Low-power classification in always-on hubs, weights resident on-chip." },
            ].map((u) => (
              <div key={u.h} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
                <span className="text-[10px] font-medium tracking-widest uppercase text-white/40 mb-4 block">{u.tag}</span>
                <h3 className="text-lg font-semibold mb-2">{u.h}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{u.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>What's included</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-8">A complete deployment toolchain</h2>
            <ul className="space-y-4">
              {[
                ["Vextyl", "A pip-installable Python package: ONNX in, deploy descriptor out."],
                ["Quantization & pruning", "Mixed-precision calibration and structured pruning with fine-tuning."],
                ["Model frontends", "ONNX and exported-weight frontends, with a pattern for new models."],
                ["Deploy-faithful simulation", "A software model of the datapath to check accuracy before a board."],
                ["Reference model recipes", "Worked examples for keyword spotting, anomaly detection and vision."],
                ["Regression & equivalence tests", "Bit-exact pins so updates can't silently change a deployed model."],
                ["Integration guide", "Docs for the compile flow, deployment ABI, and host runtime."],
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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-8">From a model to a deployment</h2>
            <div className="space-y-4">
              {[
                ["Scope", "Share the model, accuracy and power budget. We confirm fit."],
                ["Compile", "The ONNX model runs through the toolchain: quantize, prune, explore precision."],
                ["Validate", "Check accuracy in the simulator, then confirm bit-exact behaviour on hardware."],
                ["Deploy", "Ship on the XIM accelerator, validated against the FPGA."],
              ].map(([h, p], i) => (
                <div key={h} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20 transition-colors flex gap-4">
                  <span className="text-sm font-semibold w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center shrink-0" style={{ color: TEAL }}>{i + 1}</span>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{h}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{p}</p>
                  </div>
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
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Validated on FPGA, honest about the trade-offs</h2>
          <p className="text-white/55 max-w-2xl mb-12 leading-relaxed">Deployments are confirmed on the XIM accelerator on an FPGA, against simulation, not assumed in software.</p>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-x-auto mb-8">
            <table className="t reveal w-full text-sm">
              <thead><tr><th>Reference workload</th><th>Precision</th><th>Status</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Keyword spotting (DS-CNN-L)</td><td>INT8</td><td className="ok">Board-validated</td><td>Bit-exact, full classifier accuracy</td></tr>
                <tr><td>Keyword spotting (DS-CNN-L)</td><td>INT4 (mixed)</td><td className="ok">Board-validated</td><td>Multi-precision deployment</td></tr>
                <tr><td>Keyword spotting (DS-CNN-L)</td><td>INT8, pruned</td><td className="ok">Board-validated</td><td>Structured pruning + fine-tune</td></tr>
                <tr><td>Anomaly-detection autoencoder</td><td>INT8</td><td className="ok">Board-validated</td><td>Dense / fully-connected model family</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 flex gap-4">
            <div className="shrink-0 mt-0.5" style={{ color: TEAL }}>
              <AlertTriangle size={20} />
            </div>
            <p className="text-sm text-white/55 leading-relaxed"><b className="text-white/90 font-medium">Accuracy is a trade-off, and we say so.</b> Lower precision and pruning trade accuracy for energy, and the right operating point depends on the model and the application. Ximplic Vextyl makes that trade explicit, measured on hardware, per model, rather than promising a single magic number. We share the validation methodology and the per-model results under NDA so teams can judge fit.</p>
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
      <section id="contact" className="px-6 py-28 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center rv">
          <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border mb-6" style={{ color: TEAL, borderColor: `${TEAL}40`, background: `${TEAL}14` }}>Partner with Ximplic</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.015em] mb-5" style={{ letterSpacing: "-0.03em" }}>Have a model to run at the edge?</h2>
          <p className="text-white/55 mb-9">Ready to deploy a model on the XIM accelerator? Let's set up an evaluation of Ximplic Vextyl against target workloads.</p>
          <div className="flex items-center justify-center gap-3">
            <RequestAccessButton subject="Ximplic Vextyl — compiler enquiry" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>Request access <ArrowRight size={16} /></RequestAccessButton>
          </div>
          <p className="text-xs text-white/55 mt-7">Email <a href="mailto:info@ximplic.com" style={{ color: TEAL }}>info@ximplic.com</a> · Groningen, The Netherlands</p>
        </div>
      </section>
    </>
  );
}
