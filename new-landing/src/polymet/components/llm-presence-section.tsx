import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SearchIcon, BrainIcon, ZapIcon } from "lucide-react";

export function LlmPresenceSection() {
  const llmLogos = [
    { name: "ChatGPT", color: "text-green-500" },
    { name: "Claude", color: "text-orange-500" },
    { name: "Gemini", color: "text-blue-500" },
    { name: "Perplexity", color: "text-purple-500" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <BrainIcon className="w-4 h-4 mr-2" />
                AI Search Optimization
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Dominate AI Search Results—
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Even Without a Chatbot
                </span>
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Even if you don't have a chatbot, your customers are asking AI
                assistants about your industry every day. Get the share of voice
                you need—our AI presence optimization ensures your brand is
                prominently featured across all major language models.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Brand Visibility Boost
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Get mentioned 3x more often in AI responses about your
                    industry
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Competitive Advantage
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Outrank competitors in AI-generated recommendations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Future-Proof Marketing
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Prepare for the AI-first search landscape
                  </p>
                </div>
              </div>
            </div>

            {/* LLM Logos */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Optimize your presence across:
              </p>
              <div className="flex flex-wrap gap-4">
                {llmLogos.map((llm, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white dark:bg-slate-700 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${llm.color.replace("text-", "bg-")}`}
                    />

                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {llm.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-3 text-lg font-semibold group"
              >
                Get Your AI Presence Audit
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-xl">
              {/* Search Interface Mockup */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <SearchIcon className="h-5 w-5 text-slate-400" />

                  <span className="text-slate-600 dark:text-slate-300">
                    Best enterprise software solutions
                  </span>
                </div>

                {/* AI Response */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <BrainIcon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Based on current market analysis, here are the top
                        enterprise solutions:
                      </p>

                      {/* Highlighted Brand Mention */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

                          <span className="font-semibold text-slate-900 dark:text-white">
                            Your Brand
                          </span>
                          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                            #1 Recommended
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Leading provider of AI-powered enterprise solutions
                          with proven ROI improvements and industry-leading
                          security standards.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                          <span>Other mentions:</span>
                          <span>Competitor A, Competitor B</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">85%</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Mention Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-lg font-bold text-purple-600"
                      style={{ color: "#2563eb" }}
                    >
                      #1
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Ranking
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-lg font-bold text-green-600"
                      style={{ color: "#2563eb" }}
                    >
                      +340%
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Visibility
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              AI Optimized
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              +340% Visibility
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-700 p-8 shadow-xl relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

          {/* Quote icon */}
          <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-10">
            <span className="text-2xl text-white font-bold">"</span>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 relative z-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
                ⭐ Customer Success Story
              </div>

              <blockquote className="text-xl font-medium text-slate-800 dark:text-slate-200 italic mb-4 leading-relaxed">
                "Gen Z increasingly turns to ChatGPT when researching banking
                products. While our offerings were tailored for them, our
                visibility on LLMs lagged behind. Genezio helped us boost our
                presence by 70% and close that gap. It's been key to reaching
                our audience where it matters."
              </blockquote>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  MD
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Marketing Director
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">
                    Leading Bank
                  </div>
                </div>

                {/* Results highlight */}
                <div className="ml-auto hidden md:flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    +70% Visibility Boost
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
