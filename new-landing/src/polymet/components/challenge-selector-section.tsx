import React, { useState } from "react";
import { TrendingUpIcon, HeadphonesIcon, CodeIcon } from "lucide-react";

export function ChallengeSelectorSection() {
  const [selectedPerspective, setSelectedPerspective] = useState("cx");

  const handleCardClick = (key) => {
    setSelectedPerspective(key);
  };

  const perspectives = {
    cmo: {
      title: "CMO / Head of Marketing",
      icon: TrendingUpIcon,
      description:
        "Your brand is invisible when customers ask AI assistants for recommendations. Competitors are getting mentioned while you're not. Your messaging is inconsistent across platforms, and you're losing potential customers to brands that show up better in AI-driven searches. Genezio solves this by monitoring your brand presence across ChatGPT, Claude, and other LLMs, ensuring consistent messaging, and optimizing for AI-driven discovery—like SEO, but for the AI era.",
      angle: "Brand invisibility, inconsistent messaging, lost conversions",
    },
    cx: {
      title: "Head of Customer Service / CX Lead",
      icon: HeadphonesIcon,
      description:
        "Your chatbot is frustrating customers instead of helping them. Support tickets are increasing because the bot can't handle common requests properly. Customers are getting wrong information, leading to complaints and damaged trust. You're spending more on support, not less. Genezio acts like an independent QA team for your chatbot, simulating real conversations, catching problems before customers do, and showing you exactly where your bot helps versus where it's costing you money and reputation.",
      angle: "Frustrated customers, wasted support costs, damaged reputation",
    },
    engineering: {
      title: "VP Engineering / AI Product Owner",
      icon: CodeIcon,
      description:
        "Your AI agents behave unpredictably in production. You're dealing with hallucinations, edge cases breaking the system, and performance issues under load. Different LLM providers give different results, making it hard to choose. You need systematic validation but lack the tools for rigorous testing. Genezio provides a comprehensive testbench for AI agents—not to build them, but to validate they work as expected. We test behavior, measure hallucinations, stress-test performance, and compare LLM providers so you can deploy with confidence.",
      angle: "Unpredictable AI behavior, technical debt, deployment risks",
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Which challenge sounds most{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              familiar?
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Whether you're losing customers to poor chatbot experiences or
            missing opportunities in AI-driven discovery, we have the solution
            that fits your specific challenges.
          </p>

          {/* Perspective Selector */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {Object.entries(perspectives).map(([key, perspective]) => {
                const IconComponent = perspective.icon;
                return (
                  <button
                    key={key}
                    onClick={() => handleCardClick(key)}
                    className={`p-6 lg:p-8 rounded-xl border-2 transition-all duration-300 text-left min-h-[160px] flex flex-col justify-between relative overflow-hidden ${
                      selectedPerspective === key
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg transform scale-105"
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 hover:shadow-md"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            selectedPerspective === key
                              ? "bg-blue-500 text-white"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`font-semibold text-base lg:text-lg leading-tight ${
                              selectedPerspective === key
                                ? "text-blue-900 dark:text-blue-100"
                                : "text-slate-900 dark:text-white"
                            }`}
                          >
                            {perspective.angle}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <p
                        className={`text-sm font-medium ${
                          selectedPerspective === key
                            ? "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-800/30 px-3 py-2 rounded-lg"
                            : "text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        {perspective.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Perspective Description */}
          <div
            className="max-w-5xl mx-auto p-8 lg:p-10 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300"
            key={selectedPerspective}
          >
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 rounded-lg bg-blue-500 text-white flex items-center justify-center flex-shrink-0">
                {React.createElement(perspectives[selectedPerspective].icon, {
                  className: "h-7 w-7",
                })}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl lg:text-2xl text-slate-900 dark:text-white mb-4">
                  If you're a {perspectives[selectedPerspective].title} and ...
                </h3>
                <p className="text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {perspectives[selectedPerspective].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
