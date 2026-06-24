import {
  UserCheckIcon,
  SwordsIcon,
  LinkIcon,
  FileTextIcon,
  TrendingUpIcon,
} from "lucide-react";

const questions = [
  {
    icon: UserCheckIcon,
    text: "Which personas are most likely to hear our brand recommended?",
  },
  {
    icon: SwordsIcon,
    text: "Which competitors win head-to-head comparisons in AI answers?",
  },
  {
    icon: LinkIcon,
    text: "Which citations are helping or hurting us?",
  },
  {
    icon: FileTextIcon,
    text: "What content should our team or agency create next?",
  },
  {
    icon: TrendingUpIcon,
    text: "Where are the best opportunities to improve AI recommendation rates?",
  },
];

export function AboutCustomersSection() {
  return (
    <section className="py-16 md:py-24 bg-[#050506] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,132,252,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Customers
              </span>
            </h2>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed mb-4">
              Genezio serves marketing professionals and decision-makers who
              need more than prompt monitoring. Our customers include enterprise
              brands, growth-stage companies, and agencies that want a central
              platform for AI-driven search visibility and recommendation
              analytics.
            </p>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed">
              Genezio gives everyone the same operating picture — whether the
              work happens in-house, with a PR partner, or through multiple
              content agencies.
            </p>
          </div>

          {/* Right: Questions list */}
          <div className="space-y-4">
            <p className="text-sm text-blue-400 font-semibold uppercase tracking-wide mb-6">
              Questions our customers answer with Genezio
            </p>
            {questions.map((question, index) => {
              const Icon = question.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-[#0E0E10] border border-[#1C1C20] hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-white/90 font-medium leading-relaxed pt-1.5">
                    {question.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
