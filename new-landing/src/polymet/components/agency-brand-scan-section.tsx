import { Button } from "@/components/ui/button";
import {
  BarChart3Icon,
  TrendingUpIcon,
  TargetIcon,
  LightbulbIcon,
  ArrowRightIcon,
} from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

export function AgencyBrandScanSection() {
  const deliverables = [
    { icon: BarChart3Icon, title: "Visibility score", desc: "AI presence metrics" },
    { icon: TrendingUpIcon, title: "Citations", desc: "Source analysis" },
    { icon: TargetIcon, title: "Top keywords", desc: "What drives answers" },
    { icon: LightbulbIcon, title: "Action plan", desc: "Prioritized next steps" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] px-6 md:px-8 lg:px-16">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <HeroEyebrow className="mb-6 w-fit">Client visibility</HeroEyebrow>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              See how AI represents every client
            </h2>

            <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed">
              Visibility, citations, sentiment and recommendations, per client
              and per engine, all in one workspace. Bring it to your next
              pitch or QBR with a report clients understand.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
                >
                  Get a demo
                </Button>
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-white/50 pt-4">
                <ArrowRightIcon className="w-4 h-4 text-white/40" />
                See a live client report
              </span>
            </div>

            {/* What you get per client */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#0A0A0C] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">
                        {d.title}
                      </div>
                      <div className="text-white/60 text-xs">{d.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Visual Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0C] p-6 md:p-8">
              {/* Mock Dashboard Preview */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="text-white/60 text-sm mb-1">
                      Client analysis
                    </div>
                    <div className="text-white font-bold text-xl">Nike</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 text-sm mb-1">
                      Visibility score
                    </div>
                    <div className="text-3xl font-bold text-emerald-400">87</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                      <div className="text-white/60 text-xs">
                        ChatGPT mentions
                      </div>
                    </div>
                    <div className="text-white font-bold text-2xl">247</div>
                    <div className="text-emerald-400 text-xs mt-1">
                      +24% vs last month
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div className="text-white/60 text-xs">
                        Perplexity coverage
                      </div>
                    </div>
                    <div className="text-white font-bold text-2xl">89%</div>
                    <div className="text-emerald-400 text-xs mt-1">
                      Across 50+ queries
                    </div>
                  </div>
                </div>

                {/* Top Keywords */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white/60 text-xs mb-3">Top keywords</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                      best running shoes online under 300$
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                      lightweight athletic sneakers for winter 2026
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                      premium sportswear brands
                    </span>
                  </div>
                </div>

                {/* Insights */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <LightbulbIcon className="w-4 h-4 text-emerald-400" />
                    <div className="text-white text-sm font-semibold">
                      34 insights found
                    </div>
                  </div>
                  <div className="text-white/70 text-xs">
                    Identified gaps in AI visibility for sustainable products
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-white/[0.04] blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
