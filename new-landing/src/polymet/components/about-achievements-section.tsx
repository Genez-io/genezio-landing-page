import {
  BuildingIcon,
  TrendingUpIcon,
  BrainIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const achievements = [
  {
    icon: BuildingIcon,
    title: "Enterprise Trust & Adoption",
    description:
      "Trusted by brands including BCR, Bitdefender, Vodafone, CBRE, FlowX, and Auchan, demonstrating traction with both enterprise and high-growth teams.",
    metric: "Fortune 500",
    metricLabel: "Clients",
  },
  {
    icon: TrendingUpIcon,
    title: "Measured Customer Impact",
    description:
      "In Genezio's BCR customer story, brand presence in AI conversations on key topics grew by double digits in just a few weeks, practical lift, not theoretical potential.",
    metric: "2x+",
    metricLabel: "Growth",
  },
  {
    icon: BrainIcon,
    title: "AI Recommendation Innovation",
    description:
      "Genezio differentiates through multi-turn, persona-led conversational analysis and direct brand-perception workflows, going beyond standard mention tracking.",
    metric: "AI-Native",
    metricLabel: "Platform",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure, Scalable Operations",
    description:
      "SOC 2 Type II certified, supporting enterprise-grade deployment for organizations that need secure multi-brand collaboration across regions.",
    metric: "SOC 2",
    metricLabel: "Type II",
  },
];

export function AboutAchievementsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">Milestones</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Key Achievements
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Milestones that reflect our commitment to real impact.
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-5">
                  {/* Metric badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                    <span className="text-emerald-400 text-xs font-bold leading-none">
                      {achievement.metric}
                    </span>
                    <span className="text-white/50 text-[10px] mt-0.5">
                      {achievement.metricLabel}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-emerald-400" />
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {achievement.title}
                      </h3>
                    </div>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
