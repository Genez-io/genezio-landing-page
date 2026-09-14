import { CrosshairIcon } from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

export function AboutMissionSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}

      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-16 relative z-10 text-center">
        {/* Eyebrow */}
        <HeroEyebrow className="mb-6 mx-auto w-fit">Our mission</HeroEyebrow>

        {/* Icon chip */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-8">
          <CrosshairIcon className="w-6 h-6 text-emerald-400" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Our Mission
        </h2>

        <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
          Help brands earn trusted AI recommendations, not just name mentions.
          We turn AI chat data into clear steps for business growth.
        </p>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto mb-10">
          Every marketing team deserves clear answers to three key questions:
        </p>

        {/* Structured bullet points */}
        <div className="grid sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
          <div className="bg-[#0A0A0C] border border-white/10 rounded-xl p-5">
            <div className="text-emerald-400 font-semibold text-sm mb-1">1. Perception</div>
            <div className="text-white font-medium text-sm mb-1">How AI describes you</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Understand the exact words and traits AI uses for your brand.
            </p>
          </div>
          <div className="bg-[#0A0A0C] border border-white/10 rounded-xl p-5">
            <div className="text-emerald-400 font-semibold text-sm mb-1">2. Preference</div>
            <div className="text-white font-medium text-sm mb-1">Who AI recommends</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Find out when AI picks you over rivals in direct comparisons.
            </p>
          </div>
          <div className="bg-[#0A0A0C] border border-white/10 rounded-xl p-5">
            <div className="text-emerald-400 font-semibold text-sm mb-1">3. Sources</div>
            <div className="text-white font-medium text-sm mb-1">What AI cites</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Identify the exact web pages and reviews that train the answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
