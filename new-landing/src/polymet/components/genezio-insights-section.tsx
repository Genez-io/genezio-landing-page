import { Button } from "@/components/ui/button";
import { TrendingUpIcon, MegaphoneIcon, SearchIcon } from "lucide-react";

export function GenezioInsightsSection() {
  const insights = [
    {
      icon: TrendingUpIcon,
      team: "For Marketing & Growth Teams",
      title: "Boost Visibility & Conversion",
      description:
        "Track visibility and sentiment across AI engines. Identify prompts and conversations that drive discovery and conversion.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: MegaphoneIcon,
      team: "For PR & Brand Teams",
      title: "Shape Your AI Narrative",
      description:
        "Understand how AI engines perceive your narrative. Monitor sentiment and correct misrepresentations in real time.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: SearchIcon,
      team: "For SEO & AEO Teams",
      title: "Lead with GEO",
      description:
        "Optimize content and citations for generative engines, ensuring accuracy and ranking across AI platforms.",
      color: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,132,252,0.05),transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(77,195,255,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            From conversations to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
              outcomes
            </span>
            .
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto px-4">
            Genezio helps teams go beyond visibility — turning conversational
            data into measurable brand performance.
          </p>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {insights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-[#050506] border border-[#1C1C20] rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2"
              >
                {/* Gradient top border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} p-[1px] mb-6`}
                >
                  <div className="w-full h-full bg-[#050506] rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-blue-400 font-semibold mb-3 uppercase tracking-wide">
                  {item.team}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#B0B0B3] leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/pricing")}
                  className="w-full border-blue-500/30 hover:border-blue-400 bg-transparent text-white hover:bg-blue-500/10 hover:text-white transition-all duration-300"
                >
                  Book a Demo
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
