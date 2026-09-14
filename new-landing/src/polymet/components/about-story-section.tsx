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
      "Built from scratch for AI discovery, not adapted from old SEO tools.",
  },
  {
    icon: MessageSquareIcon,
    title: "Multi-Turn Chats",
    description:
      "Tests multi-step chats to match real buyer habits.",
  },
  {
    icon: UsersIcon,
    title: "Persona-Based Tracking",
    description:
      "Shows how AI answers vary by buyer role and industry.",
  },
  {
    icon: LinkIcon,
    title: "Citation Monitoring",
    description:
      "Tracks web sources that shape AI answers and brand mentions.",
  },
  {
    icon: BuildingIcon,
    title: "Enterprise Adoption",
    description:
      "Trusted by leaders like BCR, Bitdefender, Vodafone, and Auchan.",
  },
];

export function AboutStorySection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">Our story</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            From tracking visibility to winning the recommendation
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
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                The shift from keywords to AI answers
              </h3>
              <p className="text-white/70 leading-relaxed text-base md:text-lg mb-4">
                Search has changed forever. Buyers now rely on ChatGPT, Google AI
                Overviews, Perplexity, and Claude for advice. Traditional SEO
                tools track ranks and backlinks, but they cannot tell you which
                brand AI recommends.
              </p>
              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                Your brand can appear in an answer and still lose the sale. An AI
                might list three products, yet advise the buyer to pick your
                competitor.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 text-emerald-400">
                What marketing teams need today
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Recommendations over mentions:</strong> Win
                    the preferred pick, not just a passing name-drop.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Real buyer dialogues:</strong> Test full
                    conversations, because buyers ask follow-up questions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Clear action steps:</strong> Learn which
                    pages and citations to fix first.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              Genezio gives teams an{" "}
              <span className="text-white font-medium">
                operating system for AI visibility
              </span>
              . We show how AI perceives you, who it prefers, and how to improve
              your win rate.
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
