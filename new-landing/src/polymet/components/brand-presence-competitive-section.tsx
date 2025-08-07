import React, { useState } from "react";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  CrownIcon,
  ShieldIcon,
  ZapIcon,
  TargetIcon,
} from "lucide-react";

export function BrandPresenceCompetitiveSection() {
  const [activeTab, setActiveTab] = useState("before");

  const competitorData = {
    before: {
      title: "Before Optimization",
      subtitle: "Your competitors dominate AI recommendations",
      data: [
        {
          brand: "Competitor A",
          mentions: 85,
          ranking: 1,
          color: "bg-red-500",
        },
        {
          brand: "Competitor B",
          mentions: 72,
          ranking: 2,
          color: "bg-orange-500",
        },
        {
          brand: "Competitor C",
          mentions: 58,
          ranking: 3,
          color: "bg-yellow-500",
        },
        {
          brand: "Your Brand",
          mentions: 23,
          ranking: 7,
          color: "bg-slate-400",
        },
      ],
    },
    after: {
      title: "After Optimization",
      subtitle: "You become the #1 AI recommendation",
      data: [
        {
          brand: "Your Brand",
          mentions: 92,
          ranking: 1,
          color: "bg-green-500",
        },
        {
          brand: "Competitor A",
          mentions: 68,
          ranking: 2,
          color: "bg-red-400",
        },
        {
          brand: "Competitor B",
          mentions: 54,
          ranking: 3,
          color: "bg-orange-400",
        },
        {
          brand: "Competitor C",
          mentions: 41,
          ranking: 4,
          color: "bg-yellow-400",
        },
      ],
    },
  };

  const advantages = [
    {
      icon: CrownIcon,
      title: "Market Leadership",
      description:
        "Become the go-to recommendation across all major AI platforms",
      stat: "#1 Position",
      color: "yellow",
    },
    {
      icon: ShieldIcon,
      title: "Competitive Protection",
      description:
        "Prevent competitors from stealing your market share in AI search",
      stat: "85% Protection",
      color: "blue",
    },
    {
      icon: ZapIcon,
      title: "First-Mover Advantage",
      description:
        "Get ahead while your competitors are still figuring out AI optimization",
      stat: "2-3 Years Ahead",
      color: "purple",
    },
    {
      icon: TargetIcon,
      title: "Precision Targeting",
      description:
        "Reach high-intent customers exactly when they're evaluating solutions",
      stat: "4x Higher Intent",
      color: "green",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      yellow: {
        bg: "bg-yellow-100 dark:bg-yellow-900/30",
        icon: "text-yellow-600",
        border: "border-yellow-200 dark:border-yellow-700",
      },
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        icon: "text-blue-600",
        border: "border-blue-200 dark:border-blue-700",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        icon: "text-purple-600",
        border: "border-purple-200 dark:border-purple-700",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900/30",
        icon: "text-green-600",
        border: "border-green-200 dark:border-green-700",
      },
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <CrownIcon className="w-4 h-4 mr-2" />
            Competitive Advantage
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Outrank Your Competitors in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              AI Search Results
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            While your competitors focus on traditional SEO, secure your
            position as the #1 AI recommendation across ChatGPT, Claude, Gemini,
            and Perplexity.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-20">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setActiveTab("before")}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === "before"
                      ? "bg-red-500 text-white shadow-md"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Before Optimization
                </button>
                <button
                  onClick={() => setActiveTab("after")}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === "after"
                      ? "bg-green-500 text-white shadow-md"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  After Optimization
                </button>
              </div>
            </div>

            {/* Comparison Content */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {competitorData[activeTab].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {competitorData[activeTab].subtitle}
              </p>
            </div>

            {/* Rankings Chart */}
            <div className="space-y-4">
              {competitorData[activeTab].data.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 ${
                    item.brand === "Your Brand"
                      ? "ring-2 ring-blue-500 ring-opacity-50"
                      : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full font-bold text-slate-600 dark:text-slate-300">
                      #{item.ranking}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 ${item.color} rounded-full`} />

                      <span
                        className={`font-medium ${
                          item.brand === "Your Brand"
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {item.brand}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.mentions}%
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Mention Rate
                      </div>
                    </div>

                    {/* Trend Indicator */}
                    {activeTab === "after" && item.brand === "Your Brand" && (
                      <div className="flex items-center text-green-600">
                        <TrendingUpIcon className="w-5 h-5" />

                        <span className="text-sm font-medium ml-1">+300%</span>
                      </div>
                    )}

                    {activeTab === "after" && item.brand !== "Your Brand" && (
                      <div className="flex items-center text-red-500">
                        <TrendingDownIcon className="w-5 h-5" />

                        <span className="text-sm font-medium ml-1">-20%</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Metrics */}
            {activeTab === "after" && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    +300%
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-400">
                    Visibility Increase
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    #1
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-400">
                    Market Position
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    4x
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-400">
                    More Recommendations
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Competitive Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            const IconComponent = advantage.icon;

            return (
              <div
                key={index}
                className={`bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group`}
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                </div>

                <div className="space-y-3">
                  <div className={`text-2xl font-bold ${colors.icon}`}>
                    {advantage.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Don't Let Competitors Dominate AI Search
              </h3>
              <p className="text-slate-300 mb-6 text-lg">
                Every day you wait is another day your competitors gain ground
                in AI recommendations. Start your optimization today and secure
                your market position.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const pricingSection = document.querySelector(
                      '[data-pol-id="1dz73g"]'
                    );
                    if (pricingSection) {
                      pricingSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Claim Your #1 Position
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
