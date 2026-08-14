import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  SearchIcon,
  Wand2Icon,
  TrendingUpIcon,
  RefreshCwIcon,
  ArrowRightIcon,
} from "lucide-react";

export function GenezioFlywheelSection() {
  const steps = [
    {
      icon: SearchIcon,
      label: "Evidence",
      title: "Why you lost the recommendation",
      detail:
        "On a high-intent prompt, see exactly why the engine picked a competitor, the missing citation, the weak attribute, the comparison you lost.",
    },
    {
      icon: Wand2Icon,
      label: "Intervention",
      title: "The precise fix",
      detail:
        "Genezio proposes the specific change most likely to flip that recommendation, the content, citation, or positioning move, ready to ship.",
    },
    {
      icon: TrendingUpIcon,
      label: "Result",
      title: "Measured lift",
      detail:
        "Watch the recommendation rate move after the change lands, attributed to the intervention, not guesswork.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">
            Attributable actions
          </HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Not another dashboard. Every win traces back to a change
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mt-6">
            Genezio ties each recommendation you win back to the exact move that
            earned it, evidence, intervention, result.
          </p>
        </div>

        {/* Three-step loop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 max-w-6xl mx-auto mb-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="h-full bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-xs font-mono text-white/30">
                      {`0${index + 1}`}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-2">
                    {step.label}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#B0B0B3] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRightIcon className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-white/20 z-10" />
                )}
              </div>
            );
          })}
        </div>

        {/* Attributed result example */}
        <div className="max-w-6xl mx-auto bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-10 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-2">
                Attributed outcome
              </div>
              <p className="text-lg md:text-xl text-white leading-snug mb-3">
                On{" "}
                <span className="text-white/60">
                  “best bank for a first mortgage”
                </span>
                , the engine recommended a competitor.
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Intervention:{" "}
                <span className="text-white/80">
                  a data-backed mortgage comparison page + 3 authoritative
                  citations
                </span>
                . Result attributed to that change, not the calendar.
              </p>
            </div>

            {/* before → after */}
            <div className="flex items-center justify-center gap-4 md:gap-6 bg-[#050506] border border-white/10 rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-white/50 leading-none">
                  38%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/35 mt-2">
                  Before
                </div>
              </div>
              <ArrowRightIcon className="w-6 h-6 text-white/30 flex-shrink-0" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 leading-none">
                  49%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/35 mt-2">
                  After
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-center pl-2 border-l border-white/10">
                <span className="text-lg font-bold text-emerald-400">+11</span>
                <span className="text-[10px] uppercase tracking-wider text-white/35">
                  pts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* loop note */}
        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-white/40">
          <RefreshCwIcon className="w-4 h-4 text-white/30" />
          Then repeat, engines re-crawl continuously, so early movers compound.
        </div>
      </div>
    </section>
  );
}
