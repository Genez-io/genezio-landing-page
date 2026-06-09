import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import { Link } from "react-router";
import { AgencyBrandMarquee } from "@/polymet/components/agency-brand-marquee";

export function AgencyHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12 px-2 sm:px-4 md:px-12 py-2 md:py-8 mt-0 md:mt-4">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <SparklesIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-white/80 font-medium text-xs sm:text-sm">
                Loved by agencies. Trusted by brands.
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 leading-[1.1] tracking-tight text-white">
            Increase <span className="text-blue-400">AI visibility</span>
            <br />
            for every client
          </h1>

          <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Monitor brands, deliver digital strategies, own AI presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-10 md:mb-12 px-2 sm:px-4 max-w-md sm:max-w-none mx-auto">
            <Link
              to="https://app.genezio.ai/sign-up"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 md:px-8 py-6 sm:py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-500/30 w-full"
              >
                Get Started
              </Button>
            </Link>
            <a
              target="_blank"
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/20 text-white hover:text-white px-6 md:px-8 py-6 sm:py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </a>
          </div>

          <div className="hidden md:block max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-24 overflow-hidden">
            <AgencyBrandMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
