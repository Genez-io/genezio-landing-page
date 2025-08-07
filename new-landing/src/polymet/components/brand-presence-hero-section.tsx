import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  SearchIcon,
  BrainIcon,
  TrendingUpIcon,
  ZapIcon,
  CheckCircleIcon,
} from "lucide-react";

export function BrandPresenceHeroSection() {
  const [currentQuery, setCurrentQuery] = useState(0);
  const [animatedText, setAnimatedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const searchQueries = [
    "Best enterprise software solutions",
    "Top AI platforms for business",
    "Leading cybersecurity companies",
    "Best fintech solutions 2024",
  ];

  const brandMetrics = [
    { label: "Mention Rate", value: "85%", color: "text-blue-600" },
    { label: "Ranking", value: "#1", color: "text-purple-600" },
    { label: "Visibility", value: "+340%", color: "text-green-600" },
  ];

  const llmPlatforms = [
    { name: "ChatGPT", color: "bg-green-500", users: "100M+" },
    { name: "Claude", color: "bg-orange-500", users: "10M+" },
    { name: "Gemini", color: "bg-blue-500", users: "50M+" },
    { name: "Perplexity", color: "bg-purple-500", users: "10M+" },
  ];

  useEffect(() => {
    const query = searchQueries[currentQuery];
    let index = 0;
    setAnimatedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < query.length) {
        setAnimatedText(query.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentQuery((prev) => (prev + 1) % searchQueries.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentQuery]);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-purple-900/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <BrainIcon className="w-4 h-4 mr-2" />
              AI Search Optimization
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Control AI Search
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Without a Chatbot
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Your customers are asking AI assistants about your industry
                every day. Ensure your brand is the first recommendation across
                ChatGPT, Claude, Gemini, and Perplexity—even without having your
                own chatbot.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  3x more brand mentions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <TrendingUpIcon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  Outrank competitors
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <ZapIcon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  Future-proof marketing
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <BrainIcon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  AI-first optimization
                </span>
              </div>
            </div>

            {/* LLM Platform Stats */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Optimize across platforms with 170M+ combined users:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {llmPlatforms.map((platform, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      {platform.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {platform.users}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold group shadow-lg"
                onClick={() => {
                  // Try multiple selectors to find the pricing section
                  const pricingSection =
                    document.querySelector('[data-pol-id="1dz73g"]') ||
                    document.querySelector('[data-pol-id="cc9ldy"]') ||
                    document.querySelector(
                      'section:has(h2:contains("Brand Presence"))'
                    ) ||
                    document.querySelector("section:last-of-type");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Get Your AI Presence Audit
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 text-lg font-semibold bg-white dark:bg-slate-900"
                onClick={() => {
                  // Try multiple selectors to find the process section
                  const processSection =
                    document.querySelector('[data-pol-id="2ez0go"]') ||
                    document.querySelector('[data-pol-id="zjykqz"]') ||
                    document.querySelector(
                      'section:has(h2:contains("How We Optimize"))'
                    );
                  if (processSection) {
                    processSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className="relative">
            {/* Main Demo Container */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-2xl">
              {/* Search Interface */}
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <SearchIcon className="h-5 w-5 text-slate-400" />

                  <div className="flex-1">
                    <span className="text-slate-600 dark:text-slate-300">
                      {animatedText}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </span>
                  </div>
                </div>

                {/* AI Response */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <BrainIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Based on current market analysis, here are the top
                        solutions:
                      </p>

                      {/* Your Brand Highlight */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-500 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                            <span className="font-bold text-slate-900 dark:text-white">
                              Your Brand
                            </span>
                          </div>
                          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full font-medium">
                            #1 Recommended
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Leading provider of enterprise solutions with proven
                          ROI improvements and industry-leading security
                          standards.
                        </p>
                      </div>

                      {/* Competitors */}
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                          <span>Other mentions:</span>
                          <span>Competitor A, Competitor B</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Dashboard */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {brandMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce shadow-lg">
              AI Optimized
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse shadow-lg">
              +340% Visibility
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl -z-10 scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
}
