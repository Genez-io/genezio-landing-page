import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { EyeOffIcon, AlertTriangleIcon } from "lucide-react";

/* Small centered divider label with the brand square marker */
function BandLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-[2px] bg-emerald-400" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        {children}
      </span>
    </div>
  );
}

export function GenezioAiTrafficSection() {
  const hiddenStats = [
    { value: "~64%", label: "of AI users click nothing at all, they just take the answer" },
    {
      value: "12–15%",
      label: "of all searches now happen inside AI tools, up from 5–6% a year ago",
    },
  ];

  const revenueStats = [
    {
      value: "4.4×",
      label: "higher conversion from AI visitors vs standard organic traffic",
      source: "Semrush · 2026",
    },
    {
      value: "+42%",
      label: "better conversion, AI-referred vs non-AI retail traffic",
      source: "Adobe · Q1 2026",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <HeroEyebrow className="mb-6 mx-auto w-fit">
            The hidden traffic
          </HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            The traffic you can't see is your best-converting channel
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed">
            AI answers the question and the user rarely clicks, so it barely
            shows up in analytics. But the few who do arrive already had their
            comparison shopping done, so they convert like nothing else.
          </p>
        </div>

        {/* Part 1: invisible in analytics */}
        <BandLabel>Invisible in analytics</BandLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-6">
          {hiddenStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bridge callout: the critical difference */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start gap-4 bg-[#0A0A0C] border border-white/10 rounded-2xl p-5 md:p-6 mb-16 md:mb-20">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
            <EyeOffIcon className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-white font-semibold mb-1">
              Visibility ≠ recommendation
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              A brand can be mentioned constantly yet rarely recommended when a
              user asks for the best option. The worst place to be:{" "}
              <span className="inline-flex items-center gap-1.5 text-white/90 font-medium">
                <AlertTriangleIcon className="w-3.5 h-3.5 text-emerald-400" />
                high visibility, low recommendation
              </span>. AI knows you exist but prefers your competitors.
            </p>
          </div>
        </div>

        {/* Part 2: outsized in revenue */}
        <BandLabel>Outsized in revenue</BandLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {/* Headline first-party stat */}
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <div className="text-6xl md:text-7xl font-extrabold text-emerald-400 leading-none mb-5">
              37%
            </div>
            <div className="text-lg font-semibold text-white leading-snug mb-3">
              of new signups arrived recommended by answer engines
            </div>
            <div className="text-sm text-[#B0B0B3]">
              Genezio customer, first-party data. Already happening.
            </div>
          </div>

          {revenueStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col justify-center hover:border-white/20 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-none">
                {stat.value}
              </div>
              <div className="text-sm text-white/80 leading-snug mb-2">
                {stat.label}
              </div>
              <div className="text-xs font-mono text-white/40">
                {stat.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
