import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import RequestAccessButton from "@/components/RequestAccessButton";
import EnergyBars from "@/components/EnergyBars";

const TEAL = "#2BE8A5";

export default function Technology() {
  return (
    <>
      {/* PAGE HEAD */}
      <section className="px-6 pt-32 md:pt-36 pb-16 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Technology</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.015em] text-white mb-6" style={{ letterSpacing: "-0.02em" }}>We compute inside the memory</h1>
          <p className="text-white/55 max-w-2xl leading-relaxed">Conventional chips spend most of their energy shuttling data between memory and logic. Ximplic does the computation inside the memory itself, so always-on AI runs on a fraction of the power.</p>
        </div>
      </section>

      {/* 01 · THE PROBLEM */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3 text-white/50">The problem</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">The energy goes into moving data, not using it</h2>
          <p className="text-white/55 max-w-2xl leading-relaxed mb-12">In a conventional design, memory and compute sit apart, and data is moved between them for every operation. On small models that run constantly, that movement, not the calculation, dominates the energy.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-semibold">Ximplic</h3>
                <span className="text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border" style={{ color: TEAL, borderColor: `${TEAL}40`, background: `${TEAL}14` }}>Compute in memory</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Data is used where it is stored",
                  "Almost no movement between blocks",
                  "Energy tracks the useful work",
                  "Standard memory, buildable today",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/75 leading-relaxed">
                    <Check size={16} className="mt-0.5 shrink-0" style={{ color: TEAL }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-semibold">Conventional</h3>
                <span className="text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/15 text-white/40">Memory apart from logic</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Data moves for every operation",
                  "Movement dominates the energy",
                  "Battery drains on always-on models",
                  "Designed around constant movement",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-white/40">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · THE IDEA */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3 text-white/50">The approach</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4">The memory does the computation</h2>
              <p className="text-white/55 leading-relaxed mb-6">The model lives inside the memory array, and the array computes directly on it. Data goes in, the result comes out, and almost nothing moves in between.</p>
              <ul className="space-y-3">
                {[
                  "Memory and compute are one block",
                  "Computation happens where the data is stored",
                  "Far less movement, far less power",
                  "Standard memory, portable across foundries",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/75 leading-relaxed">
                    <Check size={16} className="mt-0.5 shrink-0" style={{ color: TEAL }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <svg className="idia" viewBox="0 0 460 250" role="img" aria-label="Data goes into a memory that computes in place, and the result comes out">
                {/* data in */}
                <rect className="ibox" x="20" y="92" width="92" height="64" rx="10"/>
                <text className="il" x="66" y="120">Data</text>
                <text className="is" x="66" y="137">goes in</text>
                <path className="iwire" d="M112 124 H146"/>
                <polygon className="iarr" points="152,124 140,118 140,130"/>
                {/* memory that computes */}
                <rect className="ibox x" x="152" y="34" width="186" height="182" rx="14"/>
                <text className="il x" x="245" y="58">Memory that computes</text>
                <g>
                  <rect className="wcell" x="170" y="74" width="22" height="22" rx="4"/><rect className="wcell x" x="198" y="74" width="22" height="22" rx="4"/><rect className="wcell" x="226" y="74" width="22" height="22" rx="4"/><rect className="wcell x" x="254" y="74" width="22" height="22" rx="4"/><rect className="wcell" x="282" y="74" width="22" height="22" rx="4"/><rect className="wcell x" x="310" y="74" width="22" height="22" rx="4"/>
                  <rect className="wcell x" x="170" y="102" width="22" height="22" rx="4"/><rect className="wcell" x="198" y="102" width="22" height="22" rx="4"/><rect className="wcell x" x="226" y="102" width="22" height="22" rx="4"/><rect className="wcell" x="254" y="102" width="22" height="22" rx="4"/><rect className="wcell x" x="282" y="102" width="22" height="22" rx="4"/><rect className="wcell" x="310" y="102" width="22" height="22" rx="4"/>
                  <rect className="wcell" x="170" y="130" width="22" height="22" rx="4"/><rect className="wcell x" x="198" y="130" width="22" height="22" rx="4"/><rect className="wcell" x="226" y="130" width="22" height="22" rx="4"/><rect className="wcell x" x="254" y="130" width="22" height="22" rx="4"/><rect className="wcell" x="282" y="130" width="22" height="22" rx="4"/><rect className="wcell x" x="310" y="130" width="22" height="22" rx="4"/>
                  <rect className="arow" x="166" y="98" width="172" height="30" rx="6"/>
                </g>
                <text className="is" x="245" y="184">computed in place</text>
                {/* result out */}
                <path className="iwire" d="M338 124 H372"/>
                <polygon className="iarr" points="378,124 366,118 366,130"/>
                <rect className="ibox" x="378" y="92" width="64" height="64" rx="10"/>
                <text className="il" x="410" y="128">Result</text>
              </svg>
              <div className="figcap">Data goes in, the array computes in place, and only the result comes out.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · WHY IT MATTERS */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3 text-white/50">The payoff</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Where the energy goes</h2>
          <p className="text-white/55 max-w-2xl leading-relaxed mb-12">The computation itself costs about the same either way. The difference is the data movement around it. Remove the movement and the total energy drops sharply.</p>
          <EnergyBars />
        </div>
      </section>

      {/* 04 · IS IT REAL */}
      <section id="performance" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3 text-white/50">Proof</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Proven on real hardware</h2>
          <p className="text-white/55 max-w-2xl leading-relaxed mb-12">The design runs end to end on an FPGA today, with results correlated to the hardware design and calibrated against board measurement.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Runs on an FPGA", desc: "The full design works end to end on an FPGA." },
              { title: "Matches the design", desc: "Software results correlate to the hardware, step for step." },
              { title: "Measured, not promised", desc: "Reports separate measured results from targets, with detail under NDA." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/55 mt-8">Numbers for a specific workload come from the <Link to="/products/vyzora" style={{ color: TEAL }}>Vyzora</Link>. See also <Link to="/products/xengra#integration" style={{ color: TEAL }}>how it integrates into a chip</Link>.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center rv">
          <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border mb-6" style={{ color: TEAL, borderColor: `${TEAL}40`, background: `${TEAL}14` }}>Talk to us</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.015em] mb-5" style={{ letterSpacing: "-0.03em" }}>See it on a real workload</h2>
          <p className="text-white/55 mb-9">Evaluate it in software with Ximplic Vyzora, then take the same design into a chip as licensable RTL.</p>
          <div className="flex items-center justify-center">
            <RequestAccessButton subject="Ximplic Vyzora evaluation" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>Request evaluation <ArrowRight size={16} /></RequestAccessButton>
          </div>
          <p className="text-xs text-white/55 mt-7">Email <a href="mailto:info@ximplic.com" style={{ color: TEAL }}>info@ximplic.com</a> · Groningen, The Netherlands</p>
        </div>
      </section>
    </>
  );
}
