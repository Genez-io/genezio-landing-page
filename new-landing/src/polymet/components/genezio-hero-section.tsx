import { Button } from "@/components/ui/button";
import {
  PlayCircleIcon,
  ShieldCheckIcon,
  QuoteIcon,
  GitForkIcon,
  SparklesIcon,
} from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

export function GenezioHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Single, restrained glow */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* Left: headline */}
          <div className="text-center lg:text-left">
            <HeroEyebrow className="mb-8">
              The enterprise AI visibility platform
            </HeroEyebrow>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.03] tracking-[-0.03em] mb-8">
              <span className="block text-white">The world stopped</span>
              <span className="block text-white">searching.</span>
              <span className="block text-emerald-400">It started asking.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Enterprise brands trust Genezio to measure how AI engines
              represent them in every market, and to win the recommendation,
              not just the mention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
                >
                  Get a demo
                </Button>
              </a>
              <button
                onClick={() =>
                  window.open(
                    "https://app.genezio.ai/brand-report/49/Natwest?demo=account",
                    "_blank"
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-3 text-zinc-300 hover:text-white transition-colors duration-200 text-base font-medium group"
              >
                <PlayCircleIcon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                See the interactive demo
              </button>
            </div>

            {/* Enterprise trust microline */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-white/40">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-white/40" />
                SOC 2 Type II
              </span>
              <span className="hidden sm:inline text-white/15">·</span>
              <span>ISO 27001</span>
              <span className="hidden sm:inline text-white/15">·</span>
              <span>CSA STAR Level 1</span>
              <span className="hidden sm:inline text-white/15">·</span>
              <span>GDPR compliant</span>
            </div>
          </div>

          {/* Right: the "prompt → recommendation" visual */}
          <div className="relative">
            <div className="mb-4 flex items-center gap-2 max-w-md ml-auto text-xs uppercase tracking-[0.2em] text-white/35">
              A buyer asks an AI
            </div>

            {/* The question */}
            <div className="relative max-w-md ml-auto">
              <div className="absolute -inset-3 bg-white/[0.03] rounded-3xl blur-2xl" />
              <div className="relative bg-[#0E0E12] border border-white/10 rounded-3xl rounded-bl-md p-7 md:p-8 shadow-2xl shadow-black/40">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                  "What's the best wearable I could get for my husband to help
                  him{" "}
                  <span className="text-emerald-400 font-semibold">
                    monitor his sleep
                  </span>
                  ?"
                </p>
              </div>
            </div>

            {/* What Genezio extracts from this conversation */}
            <div className="relative max-w-md mr-auto mt-4">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl rounded-tl-md p-5 md:p-6 backdrop-blur-sm">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                  Genezio collects data from each conversation
                </span>
                <div className="mt-4 space-y-3.5">
                  {[
                    {
                      icon: QuoteIcon,
                      label: "Citations",
                      chips: ["sleepfoundation.org", "oura.com", "whoop.com"],
                    },
                    {
                      icon: GitForkIcon,
                      label: "Query fanouts",
                      chips: [
                        "best sleep tracker 2026",
                        "most accurate sleep wearable",
                        "Oura vs Whoop for sleep",
                      ],
                    },
                    {
                      icon: SparklesIcon,
                      label: "Perceptions",
                      chips: ["Accurate sleep-stage tracking, validated in studies"],
                    },
                  ].map((row) => {
                    const Icon = row.icon;
                    return (
                      <div key={row.label} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                          <Icon className="w-3.5 h-3.5 text-emerald-400" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white/85 mb-0.5">
                            {row.label}
                          </div>
                          <div className="text-[11px] text-white/35 leading-relaxed">
                            {row.chips.join(", ")}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
