import { BarChart3Icon, MessageCircleIcon, ZapIcon } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: BarChart3Icon,
    title: "Measure What Matters",
    description:
      "Many platforms stop at mention counts or share of voice. Genezio distinguishes between visibility and recommendation because a mention does not guarantee preference. That difference matters in real buying journeys, especially where the asker's role, intent, and follow-up questions reshape the result.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: MessageCircleIcon,
    title: "Analyze Real Conversations",
    description:
      "Instead of relying only on static prompt snapshots, Genezio emphasizes multi-turn interactions and scenario logic. This reveals how recommendations shift between discovery, comparison, and decision stages — critical for teams evaluating AI-generated conversation visibility by persona.",
    color: "from-cyan-500 to-purple-500",
  },
  {
    number: "03",
    icon: ZapIcon,
    title: "Prioritize Action Over Dashboards",
    description:
      "Genezio surfaces concrete next steps: publish on sources AI already trusts, create missing comparison content, strengthen product-page clarity, monitor cited URLs, and correct weak or outdated narratives. Practical orientation over another analytics layer.",
    color: "from-purple-500 to-blue-500",
  },
];

export function AboutApproachSection() {
  return (
    <section className="py-16 md:py-24 bg-[#050506] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto leading-relaxed">
            AI-native, recommendation-focused, and operational by design.
            Measure AI perception clearly, connect it to business outcomes, and
            give teams enough specificity to move quickly.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#0E0E10] border border-[#1C1C20] rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
              >
                {/* Gradient top border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Number badge */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${pillar.color} text-white text-sm font-bold mb-5`}
                >
                  {pillar.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} p-[1px] mb-5`}
                >
                  <div className="w-full h-full bg-[#0E0E10] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-[#B0B0B3] leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
