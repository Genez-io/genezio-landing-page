import { BadgeCheckIcon } from "lucide-react";

export function GenezioOfficialSection() {
  const openaiStats = [
    { value: "~20%", label: "of ChatGPT queries carry direct commercial intent" },
    { value: "$100M", label: "annualized ad revenue in under two months of pilot" },
    { value: "$100B", label: "ad-revenue ambition by 2030, a tenth of digital ad spend" },
  ];

  const timeline = [
    {
      date: "JAN 2026",
      title: "Universal Commerce Protocol",
      detail: "Native checkout in Gemini with Shopify, Etsy, Wayfair, Target.",
    },
    {
      date: "FEB 2026",
      title: "“Reinventing what an ad is”",
      detail: "Google's ads & commerce VP: rebuilding the ad itself, not placing ads into AI.",
    },
    {
      date: "MAY 2026",
      title: "Ads written by Gemini, per query",
      detail: "Gemini reads your product feed and writes why you fit. Your data quality writes your ad.",
    },
    {
      date: "JUN 2026",
      title: "Cannes: everyone's in",
      detail: "OpenAI pitches advertisers; Google shows the Gemini commerce stack.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <BadgeCheckIcon className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              It's official
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            The answer engine is now a{" "}
            <span className="text-emerald-400">
              revenue channel
            </span>{" "}
, and the platforms are saying so out loud
          </h2>
        </div>

        {/* OpenAI quote */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 md:p-10">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
              <span className="text-zinc-400">"</span>We are clearly in the
              advertising business now.<span className="text-zinc-400">"</span>
            </p>
            <p className="text-sm text-white/50 mt-4">
              OpenAI at Cannes Lions · June 2026, its first appearance on
              advertising's biggest stage
            </p>
          </div>
        </div>

        {/* OpenAI stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-16">
          {openaiStats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6"
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

        {/* Google timeline */}
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-center text-[#B0B0B3] mb-8">
            Google isn't adding ads to AI. It's rebuilding ads{" "}
            <span className="text-white font-semibold">as</span> AI, five
            launches in five months.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
                  <span className="text-xs font-mono text-zinc-400 tracking-wider">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B0B0B3] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm md:text-base text-white/80 mt-10 max-w-2xl mx-auto">
            Performance ads in AI are arriving. But the organic recommendation{" "}
            <span className="text-zinc-400 font-semibold">
              cannot be bought, only earned.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
