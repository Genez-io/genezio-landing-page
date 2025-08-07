import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  TrendingUpIcon,
  DollarSignIcon,
  ShieldCheckIcon,
} from "lucide-react";

export function ValuePropositionSection() {
  const pillars = [
    {
      icon: TrendingUpIcon,
      title: "Increase Revenue",
      subtitle: "Reduce risks today",
      description:
        "Turn every chat interaction intorevenue opportunity. Our AI-powered optimization identifies high-intent users, personalizes responses, and guides them through your sales funnel with precision.",
      metrics: [
        { label: "Lead Generation", value: "+47%" },
        { label: "Conversion Rate", value: "+23%" },
        { label: "Average Order Value", value: "+18%" },
      ],

      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "from-green-900/20 to-emerald-900/20",
      ctaText: "Boost Revenue Now",
    },
    {
      icon: DollarSignIcon,
      title: "Reduce Costs",
      subtitle: "Maximize efficiency, minimize expenses",
      description:
        "Slash operational costs while improving service quality. Our intelligent deflection system handles routine inquiries automatically, freeing your team to focus on high-value interactions.",
      metrics: [
        { label: "Support Cost Reduction", value: "-65%" },
        { label: "Response Time", value: "-80%" },
        { label: "Agent Workload", value: "-45%" },
      ],

      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "from-blue-900/20 to-cyan-900/20",
      ctaText: "Cut Costs Today",
    },
    {
      icon: ShieldCheckIcon,
      title: "Mitigate Risks",
      subtitle: "Protect your brand and ensure compliance",
      description:
        "Safeguard your business with enterprise-grade security and compliance monitoring. Our AI continuously scans for potential risks, ensuring your chatbot stays within regulatory boundaries.",
      metrics: [
        { label: "Compliance Score", value: "99.8%" },
        { label: "Risk Detection", value: "+90%" },
        { label: "Brand Safety", value: "100%" },
      ],

      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      darkBgGradient: "from-purple-900/20 to-violet-900/20",
      ctaText: "Secure Your Brand",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            The future runs on conversations
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let us guide you there
            </span>
          </h2>
          <p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
              border: "0px solid rgb(228, 228, 231)",
            }}
          >
            Transform your chatbot into voice for your brand, delivering
            exceptional customer experiences at every interaction.
          </p>
        </div>

        {/* Pillars */}
        <div className="space-y-24">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.gradient} text-white flex-shrink-0`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                      {index === 0
                        ? "Transform conversations into conversions"
                        : index === 2
                          ? "Reduce risks today"
                          : pillar.subtitle}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {index === 0 &&
                        "Genezio helps marketing leaders turn every chat into a revenue opportunity. Once we define your user personas, we simulate thousands of realistic conversations aligned with your business goals. From there, we deliver actionable insights to optimize your chatbots and boost conversions—while you track progress effortlessly in your dashboard."}
                      {index === 1 &&
                        "Genezio helps customer service teams cut costs by improving chatbot accuracy and boosting deflection. Large-scale simulations and real interaction analysis uncover gaps, prevent escalations, and drive continuous optimization, while smart controls like rate limiting and input management keep LLM costs predictable."}
                      {index === 2 &&
                        "Genezio keeps you compliant, protects sensitive data, and defends your brand from AI risks. It ensures alignment with global standards, flags harmful outputs, and catches issues before they escalate—so every AI interaction remains safe and trustworthy—reducing legal exposure and protecting your reputation."}
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${pillar.gradient} hover:opacity-90 text-white border-0 px-8 py-3 font-semibold group`}
                    onClick={() => {
                      const element = document.getElementById(
                        "chatbot-optimization-pricing-section"
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {pillar.ctaText}
                  </Button>
                </div>

                {/* Visual */}
                <div
                  className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div
                    className={`bg-gradient-to-br ${pillar.bgGradient} dark:bg-gradient-to-br dark:${pillar.darkBgGradient} rounded-3xl p-8 border border-slate-200 dark:border-slate-700`}
                  >
                    {/* Dashboard mockup specific to each pillar */}
                    {index === 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-slate-900 dark:text-white">
                            Revenue Analytics
                          </h4>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              Leads Generated
                            </div>
                            <div className="text-xl font-bold text-green-600">
                              45,230
                            </div>
                            <div className="text-xs text-green-600">↑ 23%</div>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              Brand Presence across LLM
                            </div>
                            <div
                              className="text-xl font-bold text-blue-600"
                              style={{ color: "#16a34a" }}
                            >
                              1,247
                            </div>
                            <div
                              className="text-xs text-blue-600"
                              style={{ color: "#16a34a" }}
                            >
                              ↑ 77%
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                            Conversion Funnel
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                                <div
                                  className="bg-green-500 h-2 rounded-full"
                                  style={{ width: "85%" }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                                85%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-slate-900 dark:text-white">
                            Cost Optimization
                          </h4>
                          <div className="text-sm text-blue-600 font-medium">
                             
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              Accuracy
                            </div>
                            <div className="text-xl font-bold text-blue-600">
                              78%
                            </div>
                            <div className="text-xs text-blue-600">
                              This month
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              LLM Cost Control
                            </div>
                            <div
                              className="text-xl font-bold text-cyan-600"
                              style={{ color: "#2563eb" }}
                            >
                              $1,200
                            </div>
                            <div
                              className="text-xs text-cyan-600"
                              style={{ color: "#2563eb" }}
                            >
                              ↓ 80%
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                            Deflection Rate
                          </div>
                          <div className="flex items-center">
                            <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: "78%" }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                              78%
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-slate-900 dark:text-white">
                            Risk Management
                          </h4>
                          <div className="flex items-center space-x-1">
                            <ShieldCheckIcon className="h-4 w-4 text-green-500" />

                            <span className="text-sm text-green-600 font-medium">
                              Secure
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              Compliance Score
                            </div>
                            <div className="text-xl font-bold text-purple-600">
                              99.8%
                            </div>
                            <div
                              className="text-xs text-green-600"
                              style={{ color: "#7c3aed" }}
                            >
                              ✓ Compliant
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              Threats Blocked
                            </div>
                            <div
                              className="text-xl font-bold text-violet-600"
                              style={{ color: "#a855f7" }}
                            >
                              247
                            </div>
                            <div className="text-xs text-violet-600">
                              This month
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                            Brand Safety Score
                          </div>
                          <div className="flex items-center">
                            <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                              <div
                                className="bg-purple-500 h-2 rounded-full"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                              100%
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
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
