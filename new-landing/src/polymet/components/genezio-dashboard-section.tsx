import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import {
  BarChart3Icon,
  MessageSquareIcon,
  UsersIcon,
  FileTextIcon,
  MessageCircleIcon,
  TagIcon,
  ThumbsUpIcon,
  ZapIcon,
  SettingsIcon,
  EyeIcon,
  XIcon,
  CalendarIcon,
  CpuIcon,
} from "lucide-react";

export function GenezioDashboardSection() {
  const [viewMode, setViewMode] = useState<"visibility" | "recommendation">("visibility");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("Last 30 days");
  const [selectedModels, setSelectedModels] = useState<string[]>(["ChatGPT", "Claude", "Gemini", "Perplexity"]);

  // Data for Visibility mode
  const visibilityData = [
    {
      topic: "Best project management tools for remote teams",
      yourBrand: "84%",
      compA: "65%",
      compB: "72%",
      compC: "23%",
      compD: "58%",
    },
    {
      topic: "Most affordable collaboration software",
      yourBrand: "78%",
      compA: "51%",
      compB: "78%",
      compC: "12%",
      compD: "67%",
    },
    {
      topic: "Tools with best integrations for developers",
      yourBrand: "81%",
      compA: "82%",
      compB: "61%",
      compC: "90%",
      compD: "38%",
    },
    {
      topic: "Easiest to use for non-technical teams",
      yourBrand: "72%",
      compA: "43%",
      compB: "68%",
      compC: "29%",
      compD: "55%",
    },
    {
      topic: "Best value for growing startups",
      yourBrand: "67%",
      compA: "72%",
      compB: "59%",
      compC: "31%",
      compD: "64%",
    },
  ];

  // Data for Recommendation mode
  const recommendationData = [
    {
      topic: "Best project management tools for remote teams",
      yourBrand: "86%",
      compA: "78%",
      compB: "82%",
      compC: "34%",
      compD: "61%",
    },
    {
      topic: "Most affordable collaboration software",
      yourBrand: "81%",
      compA: "62%",
      compB: "85%",
      compC: "19%",
      compD: "73%",
    },
    {
      topic: "Tools with best integrations for developers",
      yourBrand: "83%",
      compA: "87%",
      compB: "68%",
      compC: "47%",
      compD: "52%",
    },
    {
      topic: "Easiest to use for non-technical teams",
      yourBrand: "75%",
      compA: "56%",
      compB: "74%",
      compC: "38%",
      compD: "63%",
    },
    {
      topic: "Best value for growing startups",
      yourBrand: "69%",
      compA: "81%",
      compB: "67%",
      compC: "42%",
      compD: "71%",
    },
  ];

  // Select data based on view mode
  const tableData = viewMode === "visibility" ? visibilityData : recommendationData;
  return (
    <section className="py-32 bg-[#050506] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,132,252,0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Track AI{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
              visibility & recommendations
            </span>
          </h2>
          <p className="text-lg text-[#B0B0B3] max-w-3xl mx-auto">
            Monitor your brand visibility and how often AI engines recommend you vs competitors. See which platforms, topics, and buyer personas drive the most recommendations and track your competitive position over time.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-6xl mx-auto">
          <div className="transform hover:scale-[1.01] transition-all duration-700 ease-out">
          {/* Browser chrome */}
          <div className="bg-[#1C1C20] rounded-t-xl border border-[#2A2A30] border-b-0 px-4 py-3 sticky top-0 z-20">
            {/* Navigation header - Brand and Menu */}
            <div className="flex items-center justify-between">
              {/* Left side - Brand info */}
              <div className="flex items-center gap-2">
                <div className="text-white font-bold text-sm leading-none whitespace-nowrap">
                  Brand Performance Report
                </div>
              </div>

              {/* Right side - Tab navigation with icons */}
              <div className="max-w-full overflow-x-auto md:overflow-visible">
                <div className="flex items-center gap-0.5 md:flex-nowrap min-w-max">
                  <button className="px-2.5 py-1.5 text-xs font-medium text-[#B0B0B3] hover:text-white hover:bg-[#2A2A30] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap">
                    <BarChart3Icon className="w-3.5 h-3.5" />
                    Overview
                  </button>
                  <button className="px-2.5 py-1.5 text-xs font-medium text-[#B0B0B3] hover:text-white hover:bg-[#2A2A30] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap">
                    <MessageSquareIcon className="w-3.5 h-3.5" />
                    Conversations
                  </button>
                  <button className="px-2.5 py-1.5 text-xs font-medium text-white bg-[#0E0E10] rounded-md flex items-center gap-1.5 whitespace-nowrap">
                    <UsersIcon className="w-3.5 h-3.5" />
                    Competitors
                  </button>
                  <button className="px-2.5 py-1.5 text-xs font-medium text-[#B0B0B3] hover:text-white hover:bg-[#2A2A30] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap">
                    <FileTextIcon className="w-3.5 h-3.5" />
                    Citations
                  </button>
                  <button className="px-2.5 py-1.5 text-xs font-medium text-[#B0B0B3] hover:text-white hover:bg-[#2A2A30] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap">
                    <MessageCircleIcon className="w-3.5 h-3.5" />
                    Statements
                  </button>
                  <button className="px-2.5 py-1.5 text-xs font-medium text-[#B0B0B3] hover:text-white hover:bg-[#2A2A30] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap">
                    <TagIcon className="w-3.5 h-3.5" />
                    Query fanouts
                  </button>
                  <button className="px-2.5 py-1.5 text-xs font-medium text-[#B0B0B3] hover:text-white hover:bg-[#2A2A30] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap">
                    <ZapIcon className="w-3.5 h-3.5" />
                    Actions
                  </button>
                  <button className="px-2.5 py-1.5 text-xs font-medium text-[#B0B0B3] hover:text-white hover:bg-[#2A2A30] rounded-md transition-colors" aria-label="Settings">
                    <SettingsIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="bg-[#0E0E10] border border-[#2A2A30] rounded-b-xl p-4 md:p-8">

            {/* Competitors by Topic Table */}
            <div className="mb-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Competitors by Topic
                  </h3>
                  <p className="text-sm text-[#B0B0B3]">
                    Brand {viewMode === "visibility" ? "visibility" : "recommendations"} across topics
                  </p>
                </div>
                <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-start md:justify-end">
                  {/* View Mode Switch */}
                  <div className="flex items-center bg-[#1C1C20] border border-[#2A2A30] rounded-md p-1">
                    <button
                      onClick={() => setViewMode("visibility")}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors flex items-center gap-1.5 ${
                        viewMode === "visibility"
                          ? "bg-[#0E0E10] text-white"
                          : "text-[#B0B0B3] hover:text-white"
                      }`}
                    >
                      <EyeIcon className="w-3.5 h-3.5" />
                      Visibility
                    </button>
                    <button
                      onClick={() => setViewMode("recommendation")}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors flex items-center gap-1.5 ${
                        viewMode === "recommendation"
                          ? "bg-[#0E0E10] text-white"
                          : "text-[#B0B0B3] hover:text-white"
                      }`}
                    >
                      <ThumbsUpIcon className="w-3.5 h-3.5" />
                      Recommendation
                    </button>
                  </div>

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="border border-[#2A2A30] bg-[#1C1C20] text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-[#2A2A30] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filters
                  </button>
                  <button className="border border-[#2A2A30] bg-[#1C1C20] text-white p-2 rounded-md hover:bg-[#2A2A30] transition-colors" aria-label="More options">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Filters Drawer Overlay */}
              {showFilters && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 bg-black/60 z-40 transition-opacity"
                    onClick={() => setShowFilters(false)}
                  />

                  {/* Drawer */}
                  <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#1C1C20] border-l border-[#2A2A30] z-50 shadow-2xl overflow-y-auto">
                    {/* Drawer Header */}
                    <div className="sticky top-0 bg-[#1C1C20] border-b border-[#2A2A30] px-6 py-4 flex items-center justify-between">
                      <h4 className="text-white font-semibold text-lg">Filters</h4>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-[#B0B0B3] hover:text-white transition-colors p-1 hover:bg-[#2A2A30] rounded"
                      >
                        <XIcon className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Drawer Content */}
                    <div className="p-6 space-y-6">
                      {/* Date Range Filter */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-white mb-3">
                          <CalendarIcon className="w-4 h-4" />
                          Date Range
                        </label>
                        <select
                          value={selectedDateRange}
                          onChange={(e) => setSelectedDateRange(e.target.value)}
                          className="w-full bg-[#0E0E10] border border-[#2A2A30] text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="Last 7 days">Last 7 days</option>
                          <option value="Last 30 days">Last 30 days</option>
                          <option value="Last 90 days">Last 90 days</option>
                          <option value="Last 6 months">Last 6 months</option>
                          <option value="Last year">Last year</option>
                          <option value="Custom range">Custom range</option>
                        </select>
                      </div>

                      {/* AI Models Filter */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-white mb-3">
                          <CpuIcon className="w-4 h-4" />
                          AI Models
                        </label>
                        <div className="space-y-2">
                          {["ChatGPT", "Claude", "Gemini", "Perplexity"].map((model) => (
                            <label key={model} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedModels.includes(model)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedModels([...selectedModels, model]);
                                  } else {
                                    setSelectedModels(selectedModels.filter((m) => m !== model));
                                  }
                                }}
                                className="w-4 h-4 rounded border-[#2A2A30] bg-[#0E0E10] text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                              />
                              <span className="text-sm text-white">{model}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Drawer Footer */}
                    <div className="sticky bottom-0 bg-[#1C1C20] border-t border-[#2A2A30] px-6 py-4 flex items-center gap-3">
                      <Button
                        onClick={() => setShowFilters(false)}
                        className="flex-1 bg-white hover:bg-gray-100 text-black px-6 py-2 text-sm font-medium"
                      >
                        Apply Filters
                      </Button>
                      <Button
                        onClick={() => {
                          setSelectedDateRange("Last 30 days");
                          setSelectedModels(["ChatGPT", "Claude", "Gemini", "Perplexity"]);
                        }}
                        variant="outline"
                        className="border-[#2A2A30] bg-transparent text-white hover:bg-[#2A2A30] px-6 py-2 text-sm"
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {/* Table */}
              <div className="bg-[#050506] border border-[#2A2A30] rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#2A2A30]">
                        <th className="text-left py-4 px-6 text-sm font-semibold text-white bg-[#0E0E10]">
                          Topic
                        </th>
                        <th className="text-center py-4 px-4 text-xs font-medium text-[#B0B0B3] bg-[#0E0E10] min-w-[80px]">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                              <span className="text-purple-400 text-xs font-bold">YB</span>
                            </div>
                            <span className="text-white text-xs">Your Brand</span>
                          </div>
                        </th>
                        <th className="text-center py-4 px-4 text-xs font-medium text-[#B0B0B3] bg-[#0E0E10] min-w-[80px]">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-gray-600/20 flex items-center justify-center">
                              <span className="text-gray-400 text-xs font-bold">CA</span>
                            </div>
                            <span className="text-white text-xs">Comp A</span>
                          </div>
                        </th>
                        <th className="text-center py-4 px-4 text-xs font-medium text-[#B0B0B3] bg-[#0E0E10] min-w-[80px]">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-blue-900/20 flex items-center justify-center">
                              <span className="text-blue-400 text-xs font-bold">CB</span>
                            </div>
                            <span className="text-white text-xs">Comp B</span>
                          </div>
                        </th>
                        <th className="text-center py-4 px-4 text-xs font-medium text-[#B0B0B3] bg-[#0E0E10] min-w-[80px]">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-teal-800/20 flex items-center justify-center">
                              <span className="text-teal-400 text-xs font-bold">CC</span>
                            </div>
                            <span className="text-white text-xs">Comp C</span>
                          </div>
                        </th>
                        <th className="text-center py-4 px-4 text-xs font-medium text-[#B0B0B3] bg-[#0E0E10] min-w-[80px]">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-amber-700/20 flex items-center justify-center">
                              <span className="text-amber-400 text-xs font-bold">CD</span>
                            </div>
                            <span className="text-white text-xs">Comp D</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => {
                        // Determine if cells should be red
                        const isToolsIntegrations = row.topic === "Tools with best integrations for developers";
                        const isBestValue = row.topic === "Best value for growing startups";
                        
                        return (
                          <tr
                            key={index}
                            className={`${
                              index < tableData.length - 1 ? "border-b border-[#2A2A30]" : ""
                            } hover:bg-[#0E0E10]/50 transition-colors`}
                          >
                            <td className="py-4 px-6 text-sm text-white">
                              {row.topic}
                            </td>
                            <td className="py-4 px-4 text-center">
                              <span className="text-sm font-semibold text-white">
                                {row.yourBrand}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <span className={`text-sm font-semibold ${
                                isToolsIntegrations || isBestValue ? "text-red-500" : "text-white"
                              }`}>
                                {row.compA}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <span className="text-sm font-semibold text-white">
                                {row.compB}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <span className={`text-sm font-semibold ${
                                isToolsIntegrations ? "text-red-500" : "text-white"
                              }`}>
                                {row.compC}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <span className="text-sm font-semibold text-white">
                                {row.compD}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect - Mobile responsive */}
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-2xl md:blur-3xl -z-10 opacity-50" />
          
          {/* 3D Shadow - natural depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60 blur-3xl translate-y-6 scale-95 -z-20 rounded-xl" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="https://app.genezio.ai/sign-up?coupon=EXPLOREGENEZIO">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
