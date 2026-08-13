import { TrendingUpIcon } from "lucide-react";

export function GenezioProofSection() {
  const secondaryStats = [
    {
      value: "+42%",
      label: "better conversion, AI-referred vs non-AI retail traffic",
      source: "Adobe · Q1 2026 · 1T+ visits",
    },
    {
      value: "13×",
      label: "growth in AI-referred orders, year over year",
      source: "Shopify · Q1 2026",
    },
    {
      value: "4.4×",
      label: "conversion rate of AI visitors vs standard organic",
      source: "Semrush · 2026",
    },
    {
      value: "0.5→12%",
      label: "of traffic → of signups: a ~23× conversion premium",
      source: "Ahrefs case study",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10] via-[#050506] to-[#050506]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <TrendingUpIcon className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              The proof
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Small traffic.{" "}
            <span className="text-emerald-400">
              Outsized revenue.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed">
            Leads recommended by answer engines are few, and remarkably good.
            The AI already did the comparison shopping, so the click is a
            decision, not a browse.
          </p>
        </div>

        {/* Hero stat + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-5 md:gap-6">
          {/* Headline first-party stat */}
          <div className="lg:row-span-2 bg-emerald-500/10 border border-emerald-500/40 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-emerald-400 leading-none mb-6">
              37%
            </div>
            <div className="text-lg md:text-xl font-semibold text-white leading-snug mb-3">
              of new account signups arrived recommended by answer engines
            </div>
            <div className="text-sm text-[#B0B0B3]">
              Genezio customer, first-party data. This is already happening.
            </div>
          </div>

          {secondaryStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-7 flex flex-col justify-center hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-none">
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
