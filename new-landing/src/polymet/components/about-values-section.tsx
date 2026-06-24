import {
  CrosshairIcon,
  TrophyIcon,
  UsersRoundIcon,
  ShieldCheckIcon,
} from "lucide-react";

const values = [
  {
    icon: CrosshairIcon,
    title: "Actionable Clarity",
    description:
      "We turn complex AI search signals into specific next steps. Instead of merely showing that a competitor is cited more often, Genezio helps identify which content gap or source relationship should be fixed first.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrophyIcon,
    title: "Recommendation Over Vanity Metrics",
    description:
      "We focus on whether AI systems actually choose and endorse a brand, not just whether it appears in a long list of options. That distinction drives every feature we build.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: UsersRoundIcon,
    title: "Collaboration at Scale",
    description:
      "Modern AI search optimization spans in-house marketers, SEO specialists, PR teams, and outside agencies. Genezio is built to centralize that work in one workflow.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trust Through Evidence",
    description:
      "Our real-world impact comes from citation monitoring, source analysis, and persona-based testing that show why AI says what it says — giving teams evidence they can use in strategy and reporting.",
    color: "from-purple-500 to-blue-500",
  },
];

export function AboutValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0E0E10] relative overflow-hidden border-t border-[#1C1C20]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,132,252,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(77,195,255,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto leading-relaxed">
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
                className="group relative bg-[#050506] border border-[#1C1C20] rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                {/* Gradient top border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${value.color} p-[1px]`}
                  >
                    <div className="w-full h-full bg-[#050506] rounded-lg flex items-center justify-center group-hover:bg-[#0A0A0F] transition-colors">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#B0B0B3] leading-relaxed">
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
