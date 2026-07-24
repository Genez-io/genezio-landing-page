import { Button } from "@/components/ui/button";
import { PlayCircleIcon } from "lucide-react";

export function GenezioHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle gradient background + glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: headline */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              <span className="block text-white">The world stopped</span>
              <span className="block text-white">searching.</span>
              <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                It started asking.
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Track how AI engines see your brand — and win the recommendation,
              not just the mention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="default"
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white px-6 py-2.5 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20"
                >
                  Book a Demo
                </Button>
              </a>
              <a href="https://app.genezio.ai/sign-up">
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold px-6 rounded-lg transition-all"
                >
                  Get Started
                </Button>
              </a>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://app.genezio.ai/brand-report/49/Natwest?demo=account",
                  "_blank"
                )
              }
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium group"
            >
              <PlayCircleIcon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              Try Interactive Demo
            </button>
          </div>

          {/* Right: the "prompt" visual */}
          <div className="relative">
            {/* Faded lines of "old" text/links */}
            <div className="space-y-3 mb-8 opacity-40 max-w-md ml-auto">
              <div className="h-3 w-[70%] ml-auto bg-white/15 rounded-full" />
              <div className="h-3 w-[88%] ml-auto bg-white/10 rounded-full" />
              <div className="h-3 w-[60%] ml-auto bg-white/15 rounded-full" />
            </div>

            {/* The question — the new way people search */}
            <div className="relative max-w-md ml-auto">
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-[#0E0E12] border border-blue-500/25 rounded-3xl rounded-bl-md p-7 md:p-8 shadow-2xl shadow-emerald-500/10">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                  "What's the best wearable I could get for my husband to help
                  him{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                    monitor his sleep
                  </span>
                  ?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
