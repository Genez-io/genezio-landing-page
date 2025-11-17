import {
  LayersIcon,
  ArrowRightIcon,
  SparklesIcon,
  TrendingUpIcon,
  AlertTriangleIcon,
} from "lucide-react";

export function CrossAnalysis() {
  const overlaps = [
    {
      category: "Product Features",
      agentMentions: 847,
      aiEngineMentions: 234,
      gap: "72% gap",
      insight:
        "Customers ask about features that AI engines don't mention about your brand",
      action: "Optimize content to bridge this gap",
      impact: "high",
      icon: AlertTriangleIcon,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      category: "Pricing Questions",
      agentMentions: 654,
      aiEngineMentions: 512,
      gap: "22% gap",
      insight:
        "Good alignment - AI engines mention your pricing when customers ask",
      action: "Maintain current content strategy",
      impact: "low",
      icon: SparklesIcon,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      textColor: "text-emerald-400",
    },
    {
      category: "Integration Capabilities",
      agentMentions: 432,
      aiEngineMentions: 89,
      gap: "79% gap",
      insight:
        "Major disconnect - customers need integration info that's missing from AI",
      action: "Create detailed integration documentation",
      impact: "critical",
      icon: AlertTriangleIcon,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/20",
      textColor: "text-red-400",
    },
    {
      category: "Use Cases",
      agentMentions: 389,
      aiEngineMentions: 445,
      gap: "14% surplus",
      insight:
        "AI engines mention use cases more than customers ask - good coverage",
      action: "Leverage this strength in marketing",
      impact: "opportunity",
      icon: TrendingUpIcon,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-400",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#050506] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <LayersIcon className="w-4 h-4 text-blue-400" />

            <span className="text-blue-400 text-sm font-medium">
              Cross-Analysis
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Connect the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Full Picture
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Overlay insights from your AI agent conversations with your
            Conversational Brand Presence. Discover gaps and opportunities.
          </p>
        </div>

        {/* Overlap Analysis - Topics & Scenarios */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {overlaps.map((overlap, index) => {
              const Icon = overlap.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/[0.02] backdrop-blur-sm border ${overlap.borderColor} rounded-xl p-6 hover:scale-[1.02] transition-all`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div
                        className={`p-2 rounded-lg bg-white/5 border ${overlap.borderColor}`}
                      >
                        <Icon className={`w-5 h-5 ${overlap.textColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {overlap.category}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <div>
                            <span className="text-white/40">Agent: </span>
                            <span className="text-white font-medium">
                              {overlap.agentMentions.toLocaleString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-white/40">AI: </span>
                            <span className="text-white font-medium">
                              {overlap.aiEngineMentions.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-lg bg-white/5 border ${overlap.borderColor}`}
                    >
                      <span
                        className={`text-sm font-semibold ${overlap.textColor}`}
                      >
                        {overlap.gap}
                      </span>
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <ArrowRightIcon
                        className={`w-4 h-4 ${overlap.textColor} mt-0.5 flex-shrink-0`}
                      />

                      <p className="text-sm text-white/70">{overlap.insight}</p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-start gap-2">
                    <SparklesIcon
                      className={`w-4 h-4 ${overlap.textColor} mt-0.5 flex-shrink-0`}
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium text-white mb-1">
                        Recommended Action
                      </p>
                      <p className="text-xs text-white/60">{overlap.action}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Cross-Analysis Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">47%</div>
                <div className="text-sm text-white/60">
                  Average content gap identified
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">12</div>
                <div className="text-sm text-white/60">
                  Critical gaps requiring action
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  +34%
                </div>
                <div className="text-sm text-white/60">
                  Potential conversion increase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
