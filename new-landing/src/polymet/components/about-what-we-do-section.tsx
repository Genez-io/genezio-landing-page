import {
  EyeIcon,
  UsersIcon,
  SwordsIcon,
  LinkIcon,
  LightbulbIcon,
  GlobeIcon,
} from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const capabilities = [
  {
    icon: EyeIcon,
    title: "AI Visibility & Recommendation Tracking",
    description:
      "Track your brand across ChatGPT, Google AI Overviews, Gemini, Perplexity, and Claude, measuring not just mentions, but actual recommendations.",
  },
  {
    icon: UsersIcon,
    title: "Persona-Based Conversation Analysis",
    description:
      "See how AI-generated conversations change for developers, B2B buyers, journalists, or consumers, revealing persona-specific recommendation patterns.",
  },
  {
    icon: SwordsIcon,
    title: "Competitor Comparisons",
    description:
      "Understand not only whether you are mentioned by topic and scenario, but when AI actively prefers a rival over your brand.",
  },
  {
    icon: LinkIcon,
    title: "Citation Intelligence & Monitoring",
    description:
      "See which publishers and URLs shape AI answers and identify where corrective work should happen to strengthen your citations.",
  },
  {
    icon: LightbulbIcon,
    title: "Action Recommendations",
    description:
      "Get specific content creation opportunities, website improvements, citation-gap fixes, and strategies to improve AI recommendations.",
  },
  {
    icon: GlobeIcon,
    title: "Multi-Brand & Global Support",
    description:
      "Manage several brands, countries, languages, or agency relationships from one dashboard, ideal for enterprise and agency teams.",
  },
];

export function AboutWhatWeDoSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">What we do</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            See how AI recommends you, and change it
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Genezio is an{" "}
            <span className="text-white font-medium">
              AI recommendation intelligence platform
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
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors"
              >
                {/* Icon chip */}
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                  {capability.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom context */}
        <p className="text-center text-white/60 text-base md:text-lg mt-12 max-w-3xl mx-auto leading-relaxed">
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
