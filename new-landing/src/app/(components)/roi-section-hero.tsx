import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
// import { LineChart, Line, BarChart, Bar, XAxis } from "recharts";
// import { ChartContainer } from "./chart";

export function RoiHeroSection() {
  const [activeTab, setActiveTab] = useState("revenue");

  const scrollToCtaSection = () => {
    const ctaSection = document.getElementById("cta-buttons");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCtaSectionWithDemo = () => {
    const ctaSection = document.getElementById("cta-buttons");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-change charts every 3 seconds
  useEffect(() => {
    const tabs = ["revenue", "cost", "risk"];
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Chart data for different categories
  const chartData = {
    revenue: {
      title: "Revenue Growth Over Time",
      data: [
        { month: "Jan", value: 100 },
        { month: "Feb", value: 105 },
        { month: "Mar", value: 112 },
        { month: "Apr", value: 118 },
        { month: "May", value: 124 },
        { month: "Jun", value: 124 }
      ],

      color: "hsl(var(--chart-1))",
      metric: "+24%",
      description: "Revenue Impact"
    },
    cost: {
      title: "Cost Reduction Analysis",
      data: [
        { month: "Jan", value: 100 },
        { month: "Feb", value: 95 },
        { month: "Mar", value: 88 },
        { month: "Apr", value: 85 },
        { month: "May", value: 82 },
        { month: "Jun", value: 82 }
      ],

      color: "hsl(var(--chart-2))",
      metric: "-18%",
      description: "Cost Reduction"
    },
    risk: {
      title: "Risk Score Monitoring",
      data: [
        { month: "Jan", value: 85 },
        { month: "Feb", value: 75 },
        { month: "Mar", value: 60 },
        { month: "Apr", value: 45 },
        { month: "May", value: 30 },
        { month: "Jun", value: 25 }
      ],

      color: "hsl(var(--chart-3))",
      metric: "Low",
      description: "Risk Score"
    }
  };

  const currentChart = chartData[activeTab];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Maximize your
                <br />
                chatbot's{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ROI
                </span>
              </h1>
              <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Boost Your AI performance while minimizing risk and cost.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                onClick={scrollToCtaSection}
              >
                Try for free
              </button>
              <button
                className="px-6 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-purple-600 dark:hover:border-purple-500 text-slate-900 dark:text-white font-medium transition-colors flex items-center justify-center"
                onClick={scrollToCtaSectionWithDemo}
              >
                Schedule a Demo
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dashboard Visualization */}
          <div className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {currentChart.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
              </div>

              {/* Interactive Chart */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {currentChart.description}
                  </span>
                  <span
                    className={`text-lg font-bold ${
                      activeTab === "revenue"
                        ? "text-green-600"
                        : activeTab === "cost"
                        ? "text-blue-600"
                        : "text-purple-600"
                    }`}
                  >
                    {currentChart.metric}
                  </span>
                </div>

                <div className="h-32">
                  {/* <ChartContainer
                    className="aspect-[none] w-full h-full"
                    config={{}}
                  >

                    {activeTab === "risk" ? (
                      <BarChart data={currentChart.data}>
                        <XAxis dataKey="month" hide />

                        <Bar
                          dataKey="value"
                          fill={currentChart.color}
                          radius={2}
                        />
                      </BarChart>
                    ) : (
                      <LineChart data={currentChart.data}>
                        <XAxis dataKey="month" hide />

                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={currentChart.color}
                          strokeWidth={3}
                          dot={{
                            fill: currentChart.color,
                            strokeWidth: 2,
                            r: 4
                          }}
                          radius={4}
                        />
                      </LineChart>
                    )}
                  </ChartContainer> */}
                </div>
              </div>

              {/* Dynamic Agent Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {activeTab === "revenue"
                      ? "Conversion Rate"
                      : activeTab === "cost"
                      ? "Cost Savings"
                      : "Risk Incidents"}
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {activeTab === "revenue"
                      ? "12.4%"
                      : activeTab === "cost"
                      ? "$45K"
                      : "3"}
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {activeTab === "revenue"
                      ? "Lead Quality"
                      : activeTab === "cost"
                      ? "Efficiency Gain"
                      : "Compliance Score"}
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {activeTab === "revenue"
                      ? "8.7/10"
                      : activeTab === "cost"
                      ? "32%"
                      : "98%"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
