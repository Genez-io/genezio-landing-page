import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { AgencyBrandMarquee } from "@/polymet/components/agency-brand-marquee";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

export function AgencyHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050506] pt-24 pb-12 px-4">
      {/* Subtle single glow for depth */}

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12 px-2 sm:px-4 md:px-12 py-2 md:py-8 mt-0 md:mt-4">
          <HeroEyebrow className="mb-6 mx-auto w-fit">
            Loved by agencies
          </HeroEyebrow>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5 leading-[1.05] tracking-[-0.03em] text-white">
            Increase AI visibility
            <br />
            for every client
          </h1>

          <p className="text-base md:text-lg text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Build a GEO practice on a methodology you can put in front of any
            client, and own AI presence across your whole roster.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-10 md:mb-12 px-2 sm:px-4 max-w-md sm:max-w-none mx-auto">
            <Link
              to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200 w-full"
              >
                Talk to Sales
              </Button>
            </Link>
            <Link to="/methodology/" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 py-6 text-base font-semibold rounded-xl transition-colors w-full sm:w-auto"
              >
                See the methodology
              </Button>
            </Link>
          </div>

          <div className="hidden md:block max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-24 overflow-hidden">
            <AgencyBrandMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
