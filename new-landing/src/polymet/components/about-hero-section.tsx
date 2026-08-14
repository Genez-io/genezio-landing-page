import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  MessageSquareIcon,
  TrendingUpIcon,
  TargetIcon,
} from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="relative bg-[#050506] pt-40 pb-20 overflow-hidden">
      {/* Subtle center glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <HeroEyebrow className="mb-8 mx-auto w-fit">
            About Genezio
          </HeroEyebrow>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Driven Search Visibility
            <br />
            <span className="text-emerald-400">
              & Recommendation Analytics
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Genezio was built for a new reality in digital discovery: buyers
            increasingly ask AI systems for recommendations before they ever
            click a link. We help marketing teams win actual AI
            recommendations, not just mentions.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-6 text-lg rounded-xl transition-colors"
              >
                Book a Demo
              </Button>
            </a>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC">
              <Button
                variant="outline"
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-xl transition-colors"
              >
                Talk to Sales
              </Button>
            </a>
          </div>

          {/* Visual indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <MessageSquareIcon className="w-8 h-8 text-emerald-400" />
              <div className="text-2xl font-bold text-white">AI-Native</div>
              <div className="text-sm text-white/60">
                Built for Generative Search
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <TrendingUpIcon className="w-8 h-8 text-emerald-400" />
              <div className="text-2xl font-bold text-white">
                Recommendation
              </div>
              <div className="text-sm text-white/60">
                Beyond Visibility Tracking
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <TargetIcon className="w-8 h-8 text-emerald-400" />
              <div className="text-2xl font-bold text-white">Actionable</div>
              <div className="text-sm text-white/60">
                Insights & Benchmarks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
