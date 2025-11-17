import {
  ShieldCheckIcon,
  TrendingDownIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "lucide-react";

export function EscalationReduction() {
  const beforeAfter = [
    {
      phase: "Before Escalation",
      icon: ShieldCheckIcon,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
      improvements: [
        {
          title: "Knowledge Base Integration",
          description:
            "Instant access to relevant articles and solutions during conversations",
          impact: "45% faster resolution",
        },
        {
          title: "Sentiment Detection",
          description:
            "Alert agents when customer frustration rises, enabling proactive intervention",
          impact: "82% improved satisfaction",
        },
      ],
    },
    {
      phase: "After Escalation",
      icon: CheckCircleIcon,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      textColor: "text-emerald-400",
      improvements: [
        {
          title: "Root Cause Analysis",
          description:
            "Identify why escalation occurred and provide coaching opportunities",
          impact: "58% fewer repeat issues",
        },
        {
          title: "Performance Insights",
          description:
            "Track escalation patterns and agent performance for continuous improvement",
          impact: "34% team efficiency gain",
        },
      ],
    },
  ];

  const escalationMetrics = [
    {
      metric: "Escalation Rate",
      before: "28%",
      after: "9%",
      improvement: "-68%",
      icon: TrendingDownIcon,
    },
    {
      metric: "Avg Resolution Time",
      before: "12.4m",
      after: "5.8m",
      improvement: "-53%",
      icon: TrendingDownIcon,
    },
    {
      metric: "First Contact Resolution",
      before: "64%",
      after: "91%",
      improvement: "+42%",
      icon: CheckCircleIcon,
    },
    {
      metric: "Customer Satisfaction",
      before: "3.8/5",
      after: "4.7/5",
      improvement: "+24%",
      icon: CheckCircleIcon,
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#050506] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <ShieldCheckIcon className="w-4 h-4 text-purple-400" />

            <span className="text-purple-400 text-sm font-medium">
              Escalation Management
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Reduce Escalations{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              at Every Stage
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Empower your support team with AI-powered tools that prevent
            escalations before they happen and improve outcomes after they
            occur.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {beforeAfter.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${phase.color} backdrop-blur-sm border ${phase.borderColor} rounded-2xl p-8`}
              >
                {/* Phase Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-white/5 border ${phase.borderColor}`}
                  >
                    <Icon className={`w-6 h-6 ${phase.textColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {phase.phase}
                  </h3>
                </div>

                {/* Improvements */}
                <div className="space-y-4">
                  {phase.improvements.map((improvement, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {improvement.title}
                        </h4>
                        <p className="text-sm text-white/70 mb-3">
                          {improvement.description}
                        </p>
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border ${phase.borderColor}`}
                        >
                          <TrendingDownIcon
                            className={`w-3 h-3 ${phase.textColor}`}
                          />

                          <span
                            className={`text-xs font-semibold ${phase.textColor}`}
                          >
                            {improvement.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics Comparison */}
        <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Impact on Key Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {escalationMetrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/[0.02] border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-4 h-4 text-purple-400" />

                    <p className="text-sm text-white/60">{item.metric}</p>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1">
                      <p className="text-xs text-white/40 mb-1">Before</p>
                      <p className="text-lg font-semibold text-white/60">
                        {item.before}
                      </p>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-white/40" />

                    <div className="flex-1">
                      <p className="text-xs text-white/40 mb-1">After</p>
                      <p className="text-lg font-semibold text-white">
                        {item.after}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                      <span className="text-xs font-semibold text-purple-400">
                        {item.improvement}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
