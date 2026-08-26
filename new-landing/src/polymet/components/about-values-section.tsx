import {
  CrosshairIcon,
  TrophyIcon,
  UsersRoundIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const values = [
  {
    icon: CrosshairIcon,
    title: "Actionable Clarity",
    description:
      "We turn complex AI search signals into specific next steps. Instead of merely showing that a competitor is cited more often, Genezio helps identify which content gap or source relationship should be fixed first.",
  },
  {
    icon: TrophyIcon,
    title: "Recommendation Over Vanity Metrics",
    description:
      "We focus on whether AI systems actually choose and endorse a brand, not just whether it appears in a long list of options. That distinction drives every feature we build.",
  },
  {
    icon: UsersRoundIcon,
    title: "Collaboration at Scale",
    description:
      "Modern AI search optimization spans in-house marketers, SEO specialists, PR teams, and outside agencies. Genezio is built to centralize that work in one workflow.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trust Through Evidence",
    description:
      "Our real-world impact comes from citation monitoring, source analysis, and persona-based testing that show why AI says what it says, giving teams evidence they can use in strategy and reporting.",
  },
];

export function AboutValuesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">Our values</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our Values
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            The principles that drive how we build, measure, and deliver.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-5">
                  {/* Icon chip */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {value.description}
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
