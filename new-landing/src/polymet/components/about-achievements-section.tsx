import {
  BuildingIcon,
  TrendingUpIcon,
  BrainIcon,
  ShieldCheckIcon,
} from "lucide-react";

const achievements = [
  {
    icon: BuildingIcon,
    title: "Enterprise Trust & Adoption",
    description:
      "Trusted by brands including BCR, Bitdefender, Vodafone, CBRE, FlowX, and Auchan — demonstrating traction with both enterprise and high-growth teams.",
    metric: "Fortune 500",
    metricLabel: "Clients",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUpIcon,
    title: "Measured Customer Impact",
    description:
      "In Genezio's BCR customer story, brand presence in AI conversations on key topics grew by double digits in just a few weeks — practical lift, not theoretical potential.",
    metric: "2x+",
    metricLabel: "Growth",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: BrainIcon,
    title: "AI Recommendation Innovation",
    description:
      "Genezio differentiates through multi-turn, persona-led conversational analysis and direct brand-perception workflows — going beyond standard mention tracking.",
    metric: "AI-Native",
    metricLabel: "Platform",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure, Scalable Operations",
    description:
      "SOC 2 Type II certified, supporting enterprise-grade deployment for organizations that need secure multi-brand collaboration across regions.",
    metric: "SOC 2",
    metricLabel: "Type II",
    color: "from-purple-500 to-blue-500",
  },
];

export function AboutAchievementsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#050506] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Key{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto">
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
                className="group relative bg-[#0E0E10] border border-[#1C1C20] rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  {/* Metric badge */}
                  <div className="flex-shrink-0 text-center">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} p-[1px] mb-2`}
                    >
                      <div className="w-full h-full bg-[#0E0E10] rounded-xl flex flex-col items-center justify-center group-hover:bg-[#131316] transition-colors">
                        <span className="text-white text-xs font-bold leading-none">
                          {achievement.metric}
                        </span>
                        <span className="text-white/50 text-[10px] mt-0.5">
                          {achievement.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-blue-400" />
                      <h3 className="text-lg font-bold text-white">
                        {achievement.title}
                      </h3>
                    </div>
                    <p className="text-[#B0B0B3] leading-relaxed text-sm">
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
