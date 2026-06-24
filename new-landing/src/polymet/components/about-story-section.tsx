import {
  RocketIcon,
  MessageSquareIcon,
  UsersIcon,
  LinkIcon,
  BuildingIcon,
} from "lucide-react";

const milestones = [
  {
    icon: RocketIcon,
    title: "AI-Native Launch",
    description:
      "Built from scratch as an AI-native platform, not a retrofitted SEO add-on.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquareIcon,
    title: "Multi-Turn Conversations",
    description:
      "Introduced multi-turn conversation analysis to mirror real buyer journeys.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: UsersIcon,
    title: "Persona-Based Tracking",
    description:
      "Expanded persona-based tracking so teams see how AI responds to different buyer types.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: LinkIcon,
    title: "Citation Monitoring",
    description:
      "Added citation monitoring and direct perception analysis for full-funnel visibility.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: BuildingIcon,
    title: "Enterprise Adoption",
    description:
      "Trusted by Fortune 500 teams and brands including BCR, Bitdefender, Vodafone, CBRE, and Auchan.",
    color: "from-blue-400 to-purple-400",
  },
];

export function AboutStorySection() {
  return (
    <section className="py-16 md:py-24 bg-[#0E0E10] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.06),transparent_50%)]" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto leading-relaxed">
            Founded by product and cloud experts — including co-founders Bogdan
            Ripa and Paula Cionca — Genezio grew around a simple insight: in AI
            search, visibility alone is not enough.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story narrative */}
          <div className="space-y-6">
            <p className="text-[#B0B0B3] leading-relaxed text-base md:text-lg">
              As generative search expanded across ChatGPT, Google AI Overviews,
              Gemini, Perplexity, and Claude, our team saw a gap that classic SEO
              suites could not fully solve. Marketers could measure rankings,
              traffic, and backlinks, yet they still lacked a reliable way to
              understand{" "}
              <span className="text-white font-medium">
                AI-driven search visibility and recommendation analytics
              </span>{" "}
              for marketing teams that need to win actual AI recommendations, not
              just mentions.
            </p>
            <p className="text-[#B0B0B3] leading-relaxed text-base md:text-lg">
              A brand can appear in an answer and still lose the recommendation.
              Since day one, what has stayed constant is our focus on helping
              brands understand how AI engines see them, how buyer personas
              experience them, and what actions most improve the odds of being
              recommended.
            </p>
            <p className="text-[#B0B0B3] leading-relaxed text-base md:text-lg">
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
                  className="group flex items-start gap-4 p-4 rounded-xl bg-[#050506] border border-[#1C1C20] hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${milestone.color} p-[1px]`}
                  >
                    <div className="w-full h-full bg-[#050506] rounded-lg flex items-center justify-center group-hover:bg-[#0A0A0F] transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#B0B0B3] leading-relaxed">
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
