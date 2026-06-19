const TEAL = "#2BE8A5";

/**
 * Energy-split comparison: conventional NPU vs Ximplic in-memory. The teal "compute"
 * block is left-anchored at the same 18% in both bars so they align — the difference is
 * the grey data-movement length and the total bar fill. Shared by Home and Technology.
 */
export default function EnergyBars() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-7 md:p-9 space-y-7">
      <div>
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm mb-2"><span className="font-medium">Conventional NPU</span><span className="text-white/55">most energy moves data</span></div>
        <div className="flex h-9 rounded-md overflow-hidden bg-white/5" role="img" aria-label="Conventional NPU: 18% computes, 82% of energy moves data">
          <div style={{ width: "18%", background: TEAL }} />
          <div style={{ width: "82%", background: "rgba(255,255,255,0.12)" }} />
        </div>
        <p className="mt-2 text-xs text-white/55"><span style={{ color: TEAL }}>18% compute</span> · <span className="text-white/75">82% moving data</span></p>
      </div>
      <div>
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm mb-2"><span className="font-medium">Ximplic in-memory</span><span className="text-white/55">energy goes to useful work</span></div>
        <div className="flex h-9 rounded-md overflow-hidden bg-white/5" role="img" aria-label="Ximplic in-memory: 18% computes, only 5% moves data, far less total energy">
          <div style={{ width: "18%", background: TEAL }} />
          <div style={{ width: "5%", background: "rgba(255,255,255,0.12)" }} />
        </div>
        <p className="mt-2 text-xs text-white/55"><span style={{ color: TEAL }}>18% compute</span> · <span className="text-white/75">5% moving data</span> · far less total energy</p>
      </div>
      <p className="text-xs text-white/55">Illustrative split, not measured values. Per-workload figures come from Ximplic Vyzora.</p>
    </div>
  );
}
