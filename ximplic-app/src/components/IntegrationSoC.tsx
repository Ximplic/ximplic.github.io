import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TEAL = "#2BE8A5";

/** How the accelerator integrates into a host SoC — two paths. Shared by Products + Xengra. */
export default function IntegrationSoC() {
  return (
    <section id="integration" className="px-6 py-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto rv">
        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Integration</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.015em] mb-4 max-w-2xl">Two ways it integrates into the SoC</h2>
        <p className="text-white/55 max-w-2xl mb-12">From a low-risk drop-in to an in-place memory upgrade. Option A is available and FPGA-tested today. Option B is on the way.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-medium tracking-widest uppercase text-white/55">Option A</span>
              <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: TEAL, background: `${TEAL}14`, border: `1px solid ${TEAL}40` }}>Available · tested</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">External Accelerator</h3>
            <svg className="idia" viewBox="0 0 460 190" role="img" aria-label="Core connected to a host SoC over an AXI bus">
              <rect className="ibox" x="34" y="58" width="160" height="74" rx="12" />
              <text className="il" x="114" y="92">Host SoC</text>
              <text className="is" x="114" y="112">unchanged</text>
              <rect className="ibox x" x="266" y="58" width="160" height="74" rx="12" />
              <text className="il x" x="346" y="92">Accelerator</text>
              <text className="is" x="346" y="112">drop-in block</text>
              <path className="iwire" d="M194 95 H256" />
              <polygon className="iarr" points="266,95 253,88 253,102" />
              <text className="iwl" x="226" y="83">AXI</text>
            </svg>
            <ul className="space-y-2 text-sm text-white/55 mt-4">
              <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Sits next to the host SoC as separate IP</li>
              <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Standard AXI bus connection</li>
              <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Zero changes to host silicon</li>
            </ul>
            <Link className="text-sm font-medium mt-5 inline-flex items-center gap-1" style={{ color: TEAL }} to="/products/vyzora">Evaluate via the Virtual Prototype <ArrowRight size={13} /></Link>
            <div className="text-xs uppercase tracking-wider text-white/35 mt-4">Lowest risk · fastest PoC</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-medium tracking-widest uppercase text-white/55">Option B</span>
              <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full text-white/50 border border-white/15">In progress</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">In-Place Memory Upgrade</h3>
            <svg className="idia" viewBox="0 0 460 190" role="img" aria-label="XIM SRAM replacing passive SRAM inside a host node">
              <rect className="idash" x="34" y="40" width="392" height="120" rx="16" />
              <text className="icap" x="56" y="66">HOST NODE</text>
              <rect className="ibox" x="58" y="80" width="160" height="64" rx="12" />
              <text className="il" x="138" y="117">cores</text>
              <rect className="ibox x" x="242" y="80" width="160" height="64" rx="12" />
              <text className="il x" x="322" y="108">XIM SRAM</text>
              <text className="is" x="322" y="128">compute + memory</text>
            </svg>
            <ul className="space-y-2 text-sm text-white/55 mt-4">
              <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Replaces passive on-chip SRAM</li>
              <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Same footprint, memory now computes</li>
              <li className="flex items-start gap-2"><span style={{ color: TEAL }}>—</span> Zero data movement</li>
            </ul>
            <a className="text-sm font-medium mt-5 inline-flex items-center gap-1" style={{ color: TEAL }} href="#contact">Register interest <ArrowRight size={13} /></a>
            <div className="text-xs uppercase tracking-wider text-white/35 mt-4">Highest performance · production target</div>
          </div>
        </div>
      </div>
    </section>
  );
}
