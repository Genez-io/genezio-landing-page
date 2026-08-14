import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

export function AgencyCtaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] px-6 md:px-8 lg:px-16">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0C] border border-white/10 p-8 md:p-12 lg:p-16">
          {/* Subtle single glow for depth */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <HeroEyebrow className="mb-6 mx-auto w-fit">Start today</HeroEyebrow>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to scale your agency?
            </h2>

            <p className="text-base md:text-lg text-white/60 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Join leading agencies delivering AI-powered strategies
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC">
                <Button
                  size="lg"
                  className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200 w-full sm:w-auto"
                >
                  Talk to Sales
                </Button>
              </Link>
              <Button
                onClick={() => window.location.href = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC"}
                size="lg"
                variant="outline"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 py-6 text-base font-semibold rounded-xl transition-colors w-full sm:w-auto"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
