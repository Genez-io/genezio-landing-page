import React from "react";
import {
  CrownIcon,
  ShieldIcon,
  ZapIcon,
  SearchIcon,
  ArrowRightIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";

export function BrandPresenceDifferentiatorSection() {
  const comparisons = [
    {
      category: "Focus on Control & Strategy",
      genezioTitle: "Focus on Control & Strategy",
      genezio:
        "We connect every insight and action to controlling your brand narrative.",
      othersTitle: "A Fragmented Action Gap",
      others:
        "They show you mentions, leaving you to figure out how to influence them.",
      icon: CrownIcon,
      color: "blue",
    },
    {
      category: "Integrated Insight-to-Action Workflow",
      genezioTitle: "Integrated Insight-to-Action Workflow",
      genezio:
        "Our platform provides a seamless system from discovery to execution to measurement.",
      othersTitle: "Surface-Level Data",
      others:
        "They provide data but force your team into inefficient workflows across multiple tools to act on it.",
      icon: ZapIcon,
      color: "purple",
    },
    {
      category: "Deep Source & Narrative Intelligence",
      genezioTitle: "Deep Source & Narrative Intelligence",
      genezio:
        "We show you why you're winning or losing by mapping your entire information ecosystem.",
      othersTitle: "Surface-Level Data",
      others:
        "They offer broad analysis that often misses the crucial third-party sources influencing your presence.",
      icon: SearchIcon,
      color: "green",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        icon: "text-blue-600",
        border: "border-blue-200 dark:border-blue-700",
        gradient: "from-blue-500 to-blue-600",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        icon: "text-purple-600",
        border: "border-purple-200 dark:border-purple-700",
        gradient: "from-purple-500 to-purple-600",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900/30",
        icon: "text-green-600",
        border: "border-green-200 dark:border-green-700",
        gradient: "from-green-500 to-green-600",
      },
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <ShieldIcon className="w-4 h-4 mr-2" />
            The Differentiator Stack
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How We're{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Different
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            While others provide passive monitoring, we deliver active control
            over your brand narrative across AI platforms.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <th className="px-8 py-6 text-left text-xl font-bold">
                    <div className="flex items-center">
                      <CheckIcon className="w-6 h-6 mr-3" />
                      Genezio's Feature
                    </div>
                  </th>
                  <th className="px-8 py-6 text-left text-xl font-bold">
                    <div className="flex items-center">
                      <XIcon className="w-6 h-6 mr-3" />
                      Standard Tools
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => {
                  const colors = getColorClasses(comparison.color);
                  const IconComponent = comparison.icon;

                  return (
                    <tr
                      key={index}
                      className={`border-b border-slate-200 dark:border-slate-700 ${
                        index % 2 === 0
                          ? "bg-slate-50/50 dark:bg-slate-800/30"
                          : "bg-white dark:bg-slate-900"
                      } hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors duration-200`}
                    >
                      {/* Our Approach Column */}
                      <td className="px-8 py-8 align-top">
                        <div className="flex items-start mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                              {comparison.genezioTitle}
                            </h4>
                          </div>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {comparison.genezio}
                        </p>
                      </td>

                      {/* Standard Tools Column */}
                      <td className="px-8 py-8 align-top bg-slate-50/50 dark:bg-slate-800/30">
                        <div className="flex items-start mb-4">
                          <div className="w-8 h-8 bg-slate-400 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <XIcon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">
                              {comparison.othersTitle}
                            </h4>
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {comparison.others}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Take Control of Your AI Narrative?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Stop settling for passive monitoring. Start actively controlling
              how AI platforms represent your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
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
                Start Your Control Journey
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
