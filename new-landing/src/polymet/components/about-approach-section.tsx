import { BarChart3Icon, MessageCircleIcon, ZapIcon } from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const pillars = [
  {
    number: "01",
    icon: BarChart3Icon,
    title: "Measure What Matters",
    description:
      "Many platforms stop at mention counts or share of voice. Genezio distinguishes between visibility and recommendation because a mention does not guarantee preference. That difference matters in real buying journeys, especially where the asker's role, intent, and follow-up questions reshape the result.",
  },
  {
    number: "02",
    icon: MessageCircleIcon,
    title: "Analyze Real Conversations",
    description:
      "Instead of relying only on static prompt snapshots, Genezio emphasizes multi-turn interactions and scenario logic. This reveals how recommendations shift between discovery, comparison, and decision stages, critical for teams evaluating AI-generated conversation visibility by persona.",
  },
  {
    number: "03",
    icon: ZapIcon,
    title: "Prioritize Action Over Dashboards",
    description:
      "Genezio surfaces concrete next steps: publish on sources AI already trusts, create missing comparison content, strengthen product-page clarity, monitor cited URLs, and correct weak or outdated narratives. Practical orientation over another analytics layer.",
  },
];

export function AboutApproachSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">How we work</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our Approach
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            AI-native, recommendation-focused, and operational by design.
            Measure AI perception clearly, connect it to business outcomes, and
            give teams enough specificity to move quickly.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors"
              >
                {/* Number + icon chip */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-white/30">
                    {pillar.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
