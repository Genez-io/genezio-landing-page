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
      "We turn complex AI signals into clear steps. We show exactly which content gap or source to fix first.",
  },
  {
    icon: TrophyIcon,
    title: "Recommendations First",
    description:
      "We focus on whether AI engines recommend your brand. Appearing in a long list is not enough.",
  },
  {
    icon: UsersRoundIcon,
    title: "Team Collaboration",
    description:
      "AI search touches SEO, PR, and content. Genezio brings in-house teams and agencies into one shared workflow.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trust Through Evidence",
    description:
      "We back every insight with clear proof. See the exact citations, reviews, and test chats behind each score.",
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
