import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { ArrowRightIcon } from "lucide-react";

/**
 * ROI-first framing that sits above the commercial detail: we lead with the
 * recommendation rate, the target, and the gap in points, so the investment
 * sits under a number the reader already agrees matters.
 */
export function GenezioRoiBand() {
  const current = 75;
  const target = 90;
  const gain = target - current;

  return (
    <section className="relative bg-[#0E0E10] py-16 md:py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <HeroEyebrow className="mb-6 w-fit">Return, before price</HeroEyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              We start with the number, not the invoice
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              Every engagement opens on your current recommendation rate, the
              target we set together, and the gap between them in points. The
              investment sits underneath a number you already agree matters.
            </p>
          </div>

          {/* Gauge */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-6">
              Recommendation rate
            </div>

            <div className="flex items-end justify-between mb-3">
              <div>
                <div className="text-xs text-white/40 mb-1">Today</div>
                <div className="text-3xl md:text-4xl font-extrabold text-white/70 leading-none">
                  {current}%
                </div>
              </div>
              <ArrowRightIcon className="w-6 h-6 text-white/30 mb-1" />
              <div className="text-right">
                <div className="text-xs text-white/40 mb-1">Target</div>
                <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 leading-none">
                  {target}%
                </div>
              </div>
            </div>

            {/* progress bar with current + target markers */}
            <div className="relative h-3 w-full rounded-full bg-white/[0.06] overflow-hidden mt-5">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-white/25"
                style={{ width: `${current}%` }}
              />
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-emerald-500/40"
                style={{ width: `${target}%` }}
              />
              <div
                className="absolute inset-y-0 rounded-full bg-emerald-400"
                style={{ left: `${current}%`, width: `${gain}%` }}
              />
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-white/70">
              <span className="h-1.5 w-1.5 rounded-[2px] bg-emerald-400" />
              <span className="font-semibold text-emerald-400">+{gain} points</span>
              <span className="text-white/50">is the case for the investment.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
