import {
  LayersIcon,
  BuildingIcon,
  ArrowUpRightIcon,
} from "lucide-react";

export function GenezioGroupLevelView() {
  const brands = [
    { name: "Brand A", score: 72 },
    { name: "Brand B", score: 64 },
    { name: "Brand C", score: 58 },
    { name: "Brand D", score: 51 },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-300 mb-6">
              Enterprise · Group-level view
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              One group. Every brand.{" "}
              <span className="text-emerald-400">One report.</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
              Managing a portfolio? Roll every brand up under a single group and
              generate reports at the group level, not just brand by brand.
              Compare brands side by side, track the whole portfolio in one
              workspace, and drill into any single brand when you need the
              detail.
            </p>
            <ul className="space-y-3">
              {[
                "Group-level reports across every brand you own",
                "Compare and rank brands within the portfolio",
                "Drill from group → brand → product in one click",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-600/20">
                    <ArrowUpRightIcon className="h-3 w-3 text-emerald-400" />
                  </div>
                  <span className="text-sm text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: group rollup → brands */}
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            {/* Group header */}
            <div className="flex items-center gap-4 pb-5 mb-5 border-b border-white/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <LayersIcon className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-base leading-tight">
                  Your Group
                </div>
                <div className="text-white/50 text-xs">
                  4 brands · rolled up
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-emerald-400 leading-none">
                  61
                </div>
                <div className="text-[10px] text-white/40">group visibility</div>
              </div>
            </div>

            {/* Brand rows */}
            <div className="space-y-2.5">
              {brands.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#050506] border border-white/10 rounded-xl px-4 py-3 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <BuildingIcon className="w-4 h-4 text-white/50" />
                  </div>
                  <span className="flex-1 text-sm text-white/80 font-medium truncate">
                    {b.name}
                  </span>
                  <div className="w-24 h-2 rounded-full bg-white/5 overflow-hidden hidden sm:block">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${b.score}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono text-white/50 w-6 text-right">
                    {b.score}
                  </span>
                  <ArrowUpRightIcon className="w-4 h-4 text-white/20 flex-shrink-0" />
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] text-white/30 mt-5">
              Illustrative, one workspace, portfolio to product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
