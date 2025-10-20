import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlayIcon, CheckIcon } from "lucide-react";
import { ConversationSimulation } from "@/polymet/components/conversation-simulation";

export function ChatbotOptimizationHeroSection() {
  const benefits = [
    "Increase lead generation by 52%",
    "Reduce support costs by 65%",
    "Achieve 99.8% compliance score",
    "Performance analytics",
  ];

  document.title = "Chatbot Testing for Performance, ROI & Compliance | Genezio";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Turn your chatbot into a revenue engine. Our AI testing platform provides actionable insights to boost lead gen, cut costs, and ensure compliance. Book a demo!"
    );

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />

      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Chatbot Optimization Platform
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                The Future is{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Conversational.
                </span>{" "}
                Lead the Dialogue.
              </h1>
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  The relationship between brands and customers is undergoing a fundamental shift.
                  Every interaction, from initial discovery to final purchase, is becoming a
                  conversation mediated by AI.
                </p>
                <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Winning in this new era means ensuring every single one of these dialogues—whether
                  on public platforms or your own channels—is accurate, on-brand, and drives
                  results.
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold group"
                onClick={() => {
                  // scroll to id chatbot-optimization-pricing
                  const element = document.getElementById("chatbot-optimization-pricing-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start Optimizing Today
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 text-lg font-semibold group"
              >
                <PlayIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button> */}
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  98%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Success Rate
                </div>
              </div>
              <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />

              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  99.8%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Compliance Rate
                </div>
              </div>
              <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />

              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  24/7
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Monitoring
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Conversation Simulation */}
          <div className="relative">
            <div className="transform hover:scale-105 transition-transform duration-500">
              <ConversationSimulation />
            </div>

            {/* Floating Enhancement Cards */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse shadow-lg">
              AI Powered
            </div>

            <div className="absolute -bottom-4 -right-16 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 p-3 transform rotate-2 hover:rotate-0 transition-transform">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                Real-time Optimization
              </div>
              <div className="text-sm font-medium text-slate-900 dark:text-white flex items-center space-x-1">
                <CheckIcon className="w-3 h-3 text-green-500" />

                <span>Every conversation enhanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
