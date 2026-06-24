import {
  EyeIcon,
  UsersIcon,
  SwordsIcon,
  LinkIcon,
  LightbulbIcon,
  GlobeIcon,
} from "lucide-react";

const capabilities = [
  {
    icon: EyeIcon,
    title: "AI Visibility & Recommendation Tracking",
    description:
      "Track your brand across ChatGPT, Google AI Overviews, Gemini, Perplexity, and Claude — measuring not just mentions, but actual recommendations.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: UsersIcon,
    title: "Persona-Based Conversation Analysis",
    description:
      "See how AI-generated conversations change for developers, B2B buyers, journalists, or consumers — revealing persona-specific recommendation patterns.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: SwordsIcon,
    title: "Competitor Comparisons",
    description:
      "Understand not only whether you are mentioned by topic and scenario, but when AI actively prefers a rival over your brand.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: LinkIcon,
    title: "Citation Intelligence & Monitoring",
    description:
      "See which publishers and URLs shape AI answers and identify where corrective work should happen to strengthen your citations.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: LightbulbIcon,
    title: "Action Recommendations",
    description:
      "Get specific content creation opportunities, website improvements, citation-gap fixes, and strategies to improve AI recommendations.",
    color: "from-blue-400 to-purple-400",
  },
  {
    icon: GlobeIcon,
    title: "Multi-Brand & Global Support",
    description:
      "Manage several brands, countries, languages, or agency relationships from one dashboard — ideal for enterprise and agency teams.",
    color: "from-purple-400 to-blue-400",
  },
];

export function AboutWhatWeDoSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0E0E10] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,132,252,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(77,195,255,0.04),transparent_50%)]" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto leading-relaxed">
            Genezio is an{" "}
            <span className="text-white font-medium">
              AI-driven search visibility and recommendation analytics platform
            </span>{" "}
            designed for marketing leaders, growth teams, PR teams, SEO teams,
            and agencies. We help organizations centralize and optimize both
            in-house digital work and collaborations with external content
            agencies.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#050506] border border-[#1C1C20] rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                {/* Gradient top border on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.color} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${capability.color} p-[1px] mb-5`}
                >
                  <div className="w-full h-full bg-[#050506] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {capability.title}
                </h3>
                <p className="text-[#B0B0B3] text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom context */}
        <p className="text-center text-[#B0B0B3] text-base md:text-lg mt-12 max-w-3xl mx-auto leading-relaxed">
          Instead of fragmenting insights across spreadsheets, prompt lists, and
          separate vendor tools, Genezio creates a{" "}
          <span className="text-white font-medium">
            shared source of truth
          </span>{" "}
          for coordinating SEO, content, brand, and PR activity around AI
          discovery.
        </p>
      </div>
    </section>
  );
}
