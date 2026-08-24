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

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Our Mission
        </h2>

        <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
          Help brands earn trustworthy AI recommendations, not just
          appearances, by turning AI-generated conversations into measurable,
          actionable growth opportunities.
        </p>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
          We want every marketing team to have clear visibility into how AI
          platforms describe, compare, cite, and recommend their brand across
          personas, scenarios, and markets.
        </p>
      </div>
    </section>
  );
}
