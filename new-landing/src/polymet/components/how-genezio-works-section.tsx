import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  PlayIcon,
  BarChart3Icon,
  TargetIcon,
  TrendingUpIcon
} from "lucide-react";

export function HowGenezioWorksSection() {
  const steps = [
    {
      number: "01",
      icon: PlayIcon,
      title: "Evaluate",
      subtitle: "Comprehensive AI Analysis",
      description:
        "Our AI agents simulate thousands of real-world conversations, testing every aspect of your chatbot's performance across multiple scenarios and edge cases.",
      features: [
        "Multi-scenario testing",
        "Edge case detection",
        "Performance benchmarking"
      ],

      color: "blue"
    },
    {
      number: "02",
      icon: TargetIcon,
      title: "Act on Insights",
      subtitle: "Data-Driven Optimization",
      description:
        "Receive actionable recommendations based on deep analysis. Genezio provides clear implementation guidance for your AI chatbot vendors—such as Ada, Cyara, Zowie or Yellow.ai.",
      features: [
        "Actionable recommendations",
        "Priority scoring",
        "Implementation guides"
      ],

      color: "green"
    },
    {
      number: "03",
      icon: TrendingUpIcon,
      title: "Measure Results",
      subtitle: "Continuous Monitoring",
      description:
        "Track your ROI improvements in real-time with comprehensive analytics. Monitor revenue growth, cost savings, and risk mitigation metrics.",
      features: [
        "Real-time analytics",
        "ROI tracking",
        "Performance monitoring"
      ],

      color: "purple"
    },
    {
      number: "04",
      icon: BarChart3Icon,
      title: "Scale Success",
      subtitle: "Continuous Improvement",
      description:
        "Leverage ongoing insights to continuously optimize performance. Our AI learns from your data to provide increasingly accurate recommendations.",
      features: [
        "Continuous learning",
        "Automated optimization",
        "Scalable insights"
      ],

      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-500",
        gradient: "from-blue-500 to-blue-600",
        text: "text-blue-600",
        lightBg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-700"
      },
      green: {
        bg: "bg-green-500",
        gradient: "from-green-500 to-green-600",
        text: "text-green-600",
        lightBg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-700"
      },
      purple: {
        bg: "bg-purple-500",
        gradient: "from-purple-500 to-purple-600",
        text: "text-purple-600",
        lightBg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-700"
      },
      orange: {
        bg: "bg-orange-500",
        gradient: "from-orange-500 to-orange-600",
        text: "text-orange-600",
        lightBg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-700"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Genezio Works
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our proven 4-step methodology transforms your chatbot from a basic
            support tool into a revenue-generating powerhouse.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = getColorClasses(step.color);
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-px h-16 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600 z-0" />
                )}

                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colors.gradient} text-white flex items-center justify-center`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <div
                        className={`text-6xl font-bold ${colors.text} opacity-20`}
                      >
                        {step.number}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className={`text-lg font-medium ${colors.text}`}>
                        {step.subtitle}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <div
                            className={`w-2 h-2 ${colors.bg} rounded-full`}
                          />

                          <span className="text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div
                    className={`relative ${
                      !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div
                      className={`${colors.lightBg} ${colors.border} border rounded-3xl p-8`}
                    >
                      {/* Step-specific mockup */}
                      {index === 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                              AI Testing Dashboard
                            </h4>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />

                              <span className="text-sm text-slate-600 dark:text-slate-400">
                                Running
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Tests Completed
                              </div>
                              <div className="text-2xl font-bold text-blue-600">
                                1,247
                              </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Issues Found
                              </div>
                              <div className="text-2xl font-bold text-orange-600">
                                23
                              </div>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              Test Progress
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full animate-pulse"
                                style={{ width: "73%" }}
                              ></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              73% Complete
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                              Optimization Insights
                            </h4>
                            <div className="text-sm text-green-600 font-medium">
                              23 Actions
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border-l-4 border-red-500">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-slate-900 dark:text-white">
                                    Critical: Response Accuracy
                                  </div>
                                  <div className="text-sm text-slate-500 dark:text-slate-400">
                                    Fix intent recognition for banking queries
                                  </div>
                                </div>
                                <div className="text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-1 rounded">
                                  High
                                </div>
                              </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border-l-4 border-yellow-500">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-slate-900 dark:text-white">
                                    Medium: Lead Capture
                                  </div>
                                  <div className="text-sm text-slate-500 dark:text-slate-400">
                                    Optimize conversion flow timing
                                  </div>
                                </div>
                                <div className="text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded">
                                  Med
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                              Results Tracking
                            </h4>
                            <div className="text-sm text-purple-600 font-medium">
                              Live Data
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                ROI Increase
                              </div>
                              <div className="text-2xl font-bold text-green-600">
                                +127%
                              </div>
                              <div className="text-xs text-green-600">
                                ↗ This month
                              </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Cost Savings
                              </div>
                              <div className="text-2xl font-bold text-blue-600">
                                $45K
                              </div>
                              <div className="text-xs text-blue-600">
                                ↗ This month
                              </div>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              Performance Trend
                            </div>
                            <div className="h-16 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 rounded flex items-end justify-between px-2">
                              {[30, 45, 60, 75, 85, 95].map((height, i) => (
                                <div
                                  key={i}
                                  className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"
                                  style={{ height: `${height}%`, width: "8px" }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                              Scaling Dashboard
                            </h4>
                            <div className="text-sm text-orange-600 font-medium">
                              Auto-Optimizing
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Optimizations
                              </div>
                              <div className="text-2xl font-bold text-orange-600">
                                847
                              </div>
                              <div className="text-xs text-orange-600">
                                Automated
                              </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Learning Rate
                              </div>
                              <div className="text-2xl font-bold text-green-600">
                                94%
                              </div>
                              <div className="text-xs text-green-600">
                                Accuracy
                              </div>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              AI Learning Progress
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span>Pattern Recognition</span>
                                <span>98%</span>
                              </div>
                              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-1">
                                <div
                                  className="bg-orange-500 h-1 rounded-full"
                                  style={{ width: "98%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-12 py-4 text-lg font-semibold group"
            onClick={() => {
              // scroll to id chatbot-optimization-pricing
              const element = document.getElementById(
                "chatbot-optimization-pricing-section"
              );
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Start Your Optimization Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
