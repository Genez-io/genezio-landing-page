import { Button } from "@/components/ui/button";
import {
  SparklesIcon,
  MessageSquareIcon,
  TrendingUpIcon,
  TargetIcon,
} from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="relative bg-[#050506] pt-40 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <SparklesIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              About Genezio
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Driven Search Visibility
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              & Recommendation Analytics
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Genezio was built for a new reality in digital discovery: buyers
            increasingly ask AI systems for recommendations before they ever
            click a link. We help marketing teams win actual AI
            recommendations — not just mentions.
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-200 hover:scale-105"
              >
                Book a Demo
              </Button>
            </a>
            <a href="https://app.genezio.ai/sign-up">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-lg transition-all"
              >
                Get Started
              </Button>
            </a>
          </div>

          {/* Visual indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <MessageSquareIcon className="w-8 h-8 text-blue-400" />
              <div className="text-2xl font-bold text-white">AI-Native</div>
              <div className="text-sm text-white/60">
                Built for Generative Search
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
              <TrendingUpIcon className="w-8 h-8 text-purple-400" />
              <div className="text-2xl font-bold text-white">
                Recommendation
              </div>
              <div className="text-sm text-white/60">
                Beyond Visibility Tracking
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <TargetIcon className="w-8 h-8 text-blue-400" />
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
