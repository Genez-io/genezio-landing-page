import {
  RocketIcon,
  MessageSquareIcon,
  UsersIcon,
  LinkIcon,
  BuildingIcon,
} from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const milestones = [
  {
    icon: RocketIcon,
    title: "AI-Native Launch",
    description:
      "Built from scratch as an AI-native platform, not a retrofitted SEO add-on.",
  },
  {
    icon: MessageSquareIcon,
    title: "Multi-Turn Conversations",
    description:
      "Introduced multi-turn conversation analysis to mirror real buyer journeys.",
  },
  {
    icon: UsersIcon,
    title: "Persona-Based Tracking",
    description:
      "Expanded persona-based tracking so teams see how AI responds to different buyer types.",
  },
  {
    icon: LinkIcon,
    title: "Citation Monitoring",
    description:
      "Added citation monitoring and direct perception analysis for full-funnel visibility.",
  },
  {
    icon: BuildingIcon,
    title: "Enterprise Adoption",
    description:
      "Trusted by Fortune 500 teams and brands including BCR, Bitdefender, Vodafone, CBRE, and Auchan.",
  },
];

export function AboutStorySection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">Our story</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our Story
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Founded by product, marketing and infrastructure experts, Genezio
            grew around a simple insight: in AI search, visibility alone is not
            enough.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story narrative */}
          <div className="space-y-6">
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              As generative search expanded across ChatGPT, Google AI Overviews,
              Gemini, Perplexity, and Claude, our team saw a gap that classic SEO
              suites could not fully solve. Marketers could measure rankings,
              traffic, and backlinks, yet they still lacked a reliable way to
              understand{" "}
              <span className="text-white font-medium">
                AI recommendation intelligence
              </span>{" "}
              for marketing teams that need to win actual AI recommendations, not
              just mentions.
            </p>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              A brand can appear in an answer and still lose the recommendation.
              Since day one, what has stayed constant is our focus on helping
              brands understand how AI engines see them, how buyer personas
              experience them, and what actions most improve the odds of being
              recommended.
            </p>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              The trajectory has been consistent: move from raw visibility
              tracking to a practical{" "}
              <span className="text-white font-medium">
                operating system for AI search visibility
              </span>
             , recommendation optimization, and cross-team execution.
            </p>
          </div>

          {/* Right: Milestones timeline */}
          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
