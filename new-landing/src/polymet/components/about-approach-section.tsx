import { BarChart3Icon, MessageCircleIcon, ZapIcon } from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const pillars = [
  {
    number: "01",
    icon: BarChart3Icon,
    title: "Measure Real Recommendations",
    subtitle: "A mention is not an endorsement.",
    points: [
      "Track recommendation rate vs. raw mentions",
      "Uncover direct competitor preference",
      "Measure buyer sentiment across AI engines",
    ],
  },
  {
    number: "02",
    icon: MessageCircleIcon,
    title: "Test Multi-Turn Conversations",
    subtitle: "Buyers ask follow-up questions.",
    points: [
      "Simulate complete buyer chat journeys",
      "Test persona-specific buying scenarios",
      "See how AI answers shift as chats deepen",
    ],
  },
  {
    number: "03",
    icon: ZapIcon,
    title: "Prioritize Action Over Data",
    subtitle: "Clear next steps over vanity dashboards.",
    points: [
      "Pinpoint trusted sources AI quotes most",
      "Fix missing comparison and pricing pages",
      "Correct outdated facts and weak narratives",
    ],
  },
];

export function AboutApproachSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">How we work</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our Approach
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Built for action. We measure AI perception clearly, connect it to business
            revenue, and give your team clear tasks to improve.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Number + icon chip */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-white/30">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-emerald-400/90 font-medium mb-4">
                    {pillar.subtitle}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-white/10">
                    {pillar.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
