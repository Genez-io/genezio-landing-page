import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { BookOpenIcon, LeafIcon } from "lucide-react";

export function AboutCommunitySection() {
  return (
    <section className="relative overflow-hidden">
      {/* Community & Sustainability */}
      <div className="relative py-24 md:py-32 bg-[#0E0E10]">
        {/* Top hairline divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-12">
            <HeroEyebrow className="mb-6 mx-auto w-fit">Community</HeroEyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Community & Sustainability
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <BookOpenIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Education
                </h3>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">
                Through our{" "}
                <a
                  href="/glossary/"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                >
                  glossary
                </a>{" "}
                and{" "}
                <a
                  href="/blog/"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                >
                  blog
                </a>
               , we help marketers understand terms such as GEO, AEO, AI
                visibility, and recommendation rate. Good decisions require
                shared language, especially in a rapidly evolving industry.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <LeafIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Healthier Digital Ecosystems
                </h3>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">
                We encourage accurate, high-quality, citation-worthy content
                instead of low-value content inflation. We help teams reduce
                wasted content production by focusing on assets, channels, and
                partnerships most likely to improve visibility and
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Genezio + CTA */}
      <div className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
        {/* Top hairline divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Subtle glow */}

        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16 text-center relative z-10">
          <HeroEyebrow className="mb-8 mx-auto w-fit">
            Why Choose Genezio
          </HeroEyebrow>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Built specifically for
            <br />
            <span className="font-extrabold">
              AI recommendation performance
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Genezio is the AI-native platform that helps brands understand how
            AI engines see them, improve how they are cited, and increase how
            often they are recommended across personas, topics, and competitive
            scenarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-300 text-black px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-xl transition-colors w-full"
              >
                Get a demo
              </Button>
            </a>
            <a
              target="_blank"
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC"
              className="w-full sm:w-auto"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-xl transition-colors w-full"
              >
                Talk to Sales
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom hairline divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
