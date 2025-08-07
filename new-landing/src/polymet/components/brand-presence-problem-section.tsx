import React from "react";
import {
  AlertTriangleIcon,
  TrendingDownIcon,
  UsersIcon,
  EyeOffIcon,
} from "lucide-react";

export function BrandPresenceProblemSection() {
  const problems = [
    {
      icon: TrendingDownIcon,
      title: "A Market in Transition",
      description:
        "Traditional search engine volume is predicted by Gartner to drop by 25% by 2026, replaced by traffic originating from generative AI.",
      accent: "from-red-500 to-orange-500",
    },
    {
      icon: UsersIcon,
      title: "A New User Behavior",
      description:
        "With 700M weekly active users on ChatGPT, your brand must appear in these new environments to stay relevant.",
      accent: "from-blue-500 to-purple-500",
    },
    {
      icon: EyeOffIcon,
      title: "An Unseen Influence",
      description:
        "AI models form their opinions based on a vast ecosystem of content. If you don't know what they're citing, you can't influence the answers they give.",
      accent: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-800/50">
            <AlertTriangleIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />

            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Defining the Problem & The Cost of Inaction
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            style={{ paddingRight: "75px", paddingLeft: "75px" }}
          >
            If You're Not Controlling Your{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 bg-clip-text text-transparent">
              AI Narrative
            </span>
            , Someone Else Is.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The way customers discover, evaluate, and choose brands has
            fundamentally changed. Traditional search is no longer the only
            front door to your business. Millions of your potential customers
            are now asking AI for recommendations, comparisons, and solutions.
            If your brand isn't accurately represented, you're not just losing
            clicks—you're losing control of your brand.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${problem.accent} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${problem.accent} mb-6`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
