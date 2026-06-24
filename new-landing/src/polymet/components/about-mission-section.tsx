import { CrosshairIcon } from "lucide-react";

export function AboutMissionSection() {
  return (
    <section className="py-16 md:py-28 bg-[#050506] relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-8">
          <CrosshairIcon className="w-8 h-8 text-blue-400" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mission
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
          Help brands earn trustworthy AI recommendations — not just
          appearances — by turning AI-generated conversations into measurable,
          actionable growth opportunities.
        </p>

        <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed max-w-3xl mx-auto">
          We want every marketing team to have clear visibility into how AI
          platforms describe, compare, cite, and recommend their brand across
          personas, scenarios, and markets.
        </p>

        {/* Decorative gradient line */}
        <div className="mt-16 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </section>
  );
}
