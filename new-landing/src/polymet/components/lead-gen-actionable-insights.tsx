import { Button } from "@/components/ui/button";

import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  TrendingUpIcon,
  TargetIcon,
  CheckCircleIcon,
  SparklesIcon
} from "lucide-react";

export function LeadGenActionableInsights() {
  const insights = [
    {
      category: "Visibility Gaps",
      icon: TargetIcon,
      color: "bg-white/10",
      borderColor: "border-white/10",
      iconColor: "text-emerald-400",
      insight: "Your brand isn't mentioned in 73% of relevant AI conversations",
      action: "Optimize content for 12 high-intent keywords",
      impact: "+45% visibility increase",
      impactColor: "text-emerald-400"
    },
    {
      category: "Competitive Positioning",
      icon: TrendingUpIcon,
      color: "bg-white/10",
      borderColor: "border-white/10",
      iconColor: "text-emerald-400",
      insight: "AI platforms favor competitors for 'enterprise' queries",
      action: "Highlight enterprise features and case studies",
      impact: "+67% enterprise lead quality",
      impactColor: "text-emerald-400"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0E0E10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <HeroEyebrow className="mb-6">Actionable Insights</HeroEyebrow>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Don't Just Monitor.{" "}
            <span className="text-white">
              Take Action.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Every insight comes with specific, implementable actions. Know
            exactly what to do to improve your AI visibility and increase lead
            generation.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {insights.map((item, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${item.color} border ${item.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon
                    className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em] mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {item.insight}
                  </h3>
                </div>
              </div>

              {/* Action */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />

                  <div>
                    <div className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-1">
                      Recommended Action
                    </div>
                    <div className="text-sm text-white/80">{item.action}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Get Your First Insights in 48 Hours
              </h3>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Start monitoring your brand's AI visibility today and receive
                actionable recommendations to increase your lead generation.
              </p>
            </div>
            <a href="/pricing/">
              <Button className="w-full lg:w-auto bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-6 text-base font-semibold rounded-xl transition-all shadow-lg shadow-black/20 flex-shrink-0">
                <SparklesIcon className="w-5 h-5 mr-2" />
                Get my Insights
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
