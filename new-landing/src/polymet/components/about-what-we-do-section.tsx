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
    title: "AI Recommendation Tracking",
    description:
      "Track your brand across ChatGPT, Google AI Overviews, Perplexity, Gemini, and Claude. Measure true recommendations, not just mentions.",
  },
  {
    icon: UsersIcon,
    title: "Persona-Based Chat Analysis",
    description:
      "See how AI answers change for B2B buyers, developers, or consumers. Win recommendations across every target audience.",
  },
  {
    icon: SwordsIcon,
    title: "Competitor Benchmarking",
    description:
      "Analyze head-to-head showdowns. Know when AI prefers a competitor over your brand, and uncover why.",
  },
  {
    icon: LinkIcon,
    title: "Citation Intelligence",
    description:
      "Discover which websites, blogs, and reviews feed AI answers. Find citation gaps and correct outdated information.",
  },
  {
    icon: LightbulbIcon,
    title: "Actionable Recommendations",
    description:
      "Get clear steps to improve your visibility. Know what content to publish, which pages to update, and where to build trust.",
  },
  {
    icon: GlobeIcon,
    title: "Multi-Brand & Global Support",
    description:
      "Manage multiple brands, markets, and languages from one central place. Built for enterprise teams and agencies.",
  },
];

export function AboutWhatWeDoSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
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
            for marketing, SEO, and PR teams. We reveal how AI engines pick and
            describe brands—and give you clear steps to win the recommendation.
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
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                    {capability.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom context */}
        <p className="text-center text-white/60 text-base md:text-lg mt-12 max-w-3xl mx-auto leading-relaxed">
          Stop juggling messy spreadsheets and separate prompt lists. Genezio gives your
          marketing team a{" "}
          <span className="text-white font-medium">
            single command center
          </span>{" "}
          to coordinate SEO, PR, and content for AI search.
        </p>
      </div>
    </section>
  );
}
