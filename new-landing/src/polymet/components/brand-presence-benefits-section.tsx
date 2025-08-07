import React, { useState } from "react";
import {
  TrendingUpIcon,
  TargetIcon,
  ShieldIcon,
  ZapIcon,
  UsersIcon,
  BrainIcon,
} from "lucide-react";
import { DemoBookingModal } from "@/polymet/components/demo-booking-modal";

export function BrandPresenceBenefitsSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const benefits = [
    {
      icon: TrendingUpIcon,
      title: "GEO More Brand Mentions",
      description:
        "Get mentioned significantly more often in AI responses about your industry compared to competitors.",
      stat: "300%",
      statLabel: "Increase in mentions",
      color: "blue",
    },
    {
      icon: TargetIcon,
      title: "Higher Conversion Intent",
      description:
        "AI users are 4x more likely to convert when they discover your brand through AI recommendations.",
      stat: "4x",
      statLabel: "Higher conversion rate",
      color: "green",
    },
    {
      icon: UsersIcon,
      title: "Reach New Audiences",
      description:
        "Connect with the 170M+ users across major AI platforms who are actively seeking solutions.",
      stat: "170M+",
      statLabel: "AI platform users",
      color: "purple",
    },
    {
      icon: ShieldIcon,
      title: "Outrank Your Competition",
      description:
        "Prevent competitors from dominating AI search results in your industry vertical.",
      stat: "85%",
      statLabel: "Market share protection",
      color: "orange",
    },
    {
      icon: ZapIcon,
      title: "Future-Proof Strategy",
      description:
        "Position your brand for the AI-first search landscape that's rapidly replacing traditional SEO.",
      stat: "2024+",
      statLabel: "AI search dominance",
      color: "indigo",
    },
    {
      icon: BrainIcon,
      title: "Intelligent Optimization",
      description:
        "Our AI continuously learns and adapts to ensure your brand stays relevant across all platforms.",
      stat: "24/7",
      statLabel: "Continuous optimization",
      color: "pink",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        icon: "text-blue-600",
        stat: "text-blue-600",
        border: "border-blue-200 dark:border-blue-700",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900/30",
        icon: "text-green-600",
        stat: "text-green-600",
        border: "border-green-200 dark:border-green-700",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        icon: "text-purple-600",
        stat: "text-purple-600",
        border: "border-purple-200 dark:border-purple-700",
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900/30",
        icon: "text-orange-600",
        stat: "text-orange-600",
        border: "border-orange-200 dark:border-orange-700",
      },
      indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900/30",
        icon: "text-indigo-600",
        stat: "text-indigo-600",
        border: "border-indigo-200 dark:border-indigo-700",
      },
      pink: {
        bg: "bg-pink-100 dark:bg-pink-900/30",
        icon: "text-pink-600",
        stat: "text-pink-600",
        border: "border-pink-200 dark:border-pink-700",
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
            <ZapIcon className="w-4 h-4 mr-2" />
            Why AI Search Optimization Matters
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Transform Your Brand's
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Digital Presence
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            While your competitors focus on traditional marketing, secure your
            position in the AI-driven future where customers discover and
            evaluate brands.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            const IconComponent = benefit.icon;

            return (
              <div
                key={index}
                className={`bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                {/* Icon and Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${colors.stat}`}>
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-700 p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Dominate AI Search Results?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Join leading brands who are already securing their position in the
              AI-first search landscape. Get your comprehensive AI presence
              audit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
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
                Start Your AI Presence Audit
              </button>
              <button
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-all duration-200 bg-white dark:bg-slate-900"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
}
