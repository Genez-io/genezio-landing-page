import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { BookOpenIcon, LeafIcon, SparklesIcon } from "lucide-react";

export function AboutCommunitySection() {
  return (
    <section className="relative overflow-hidden">
      {/* Community & Sustainability */}
      <div className="py-16 md:py-24 bg-[#0E0E10] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Community &{" "}
              <span className="text-white">
                Sustainability
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            <div className="group bg-[#050506] border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <BookOpenIcon className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>
              <p className="text-[#B0B0B3] leading-relaxed text-sm">
                Through our{" "}
                <a
                  href="/glossary/"
                  className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2 transition-colors"
                >
                  glossary
                </a>{" "}
                and{" "}
                <a
                  href="/blog/"
                  className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2 transition-colors"
                >
                  blog
                </a>
               , we help marketers understand terms such as GEO, AEO, AI
                visibility, and recommendation rate. Good decisions require
                shared language, especially in a rapidly evolving industry.
              </p>
            </div>

            <div className="group bg-[#050506] border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <LeafIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Healthier Digital Ecosystems
                </h3>
              </div>
              <p className="text-[#B0B0B3] leading-relaxed text-sm">
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
      <div className="relative py-16 md:py-32 bg-[#050506] overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "10s" }}
        />

        {/* Particle effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-zinc-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-zinc-300 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16 text-center relative z-10">
          <HeroEyebrow className="mb-8">Why Choose Genezio</HeroEyebrow>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Built specifically for</span>
            <br />
            <span className="text-white font-extrabold">
              AI recommendation performance
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-[#B0B0B3] max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
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
                className="bg-emerald-400 hover:bg-emerald-300 text-black px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg shadow-lg shadow-zinc-500/30 hover:shadow-zinc-500/50 transition-all duration-300 hover:scale-105 w-full"
              >
                Book a Demo
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
                className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 w-full"
              >
                Talk to Sales
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
