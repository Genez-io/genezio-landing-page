import {
  TagIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  MessageSquareIcon,
  TrendingUpIcon,
} from "lucide-react";

export function ConversationClassification() {
  const categories = [
    {
      name: "Technical Issues",
      count: 1247,
      percentage: 34,
      trend: "+12%",
      color: "from-white/[0.03] to-white/[0.05]",
      borderColor: "border-white/10",
      textColor: "text-blue-400",
      icon: AlertCircleIcon,
      avgResolutionTime: "8.5m",
      escalationRate: "15%",
    },
    {
      name: "Billing Questions",
      count: 892,
      percentage: 24,
      trend: "-5%",
      color: "from-white/[0.03] to-white/[0.05]",
      borderColor: "border-white/10",
      textColor: "text-blue-400",
      icon: TagIcon,
      avgResolutionTime: "4.2m",
      escalationRate: "8%",
    },
    {
      name: "Feature Requests",
      count: 654,
      percentage: 18,
      trend: "+8%",
      color: "from-white/[0.03] to-white/[0.05]",
      borderColor: "border-white/10",
      textColor: "text-blue-400",
      icon: MessageSquareIcon,
      avgResolutionTime: "6.1m",
      escalationRate: "5%",
    },
    {
      name: "Account Management",
      count: 543,
      percentage: 15,
      trend: "+3%",
      color: "from-white/[0.03] to-white/[0.05]",
      borderColor: "border-white/10",
      textColor: "text-blue-400",
      icon: CheckCircleIcon,
      avgResolutionTime: "5.3m",
      escalationRate: "12%",
    },
    {
      name: "General Inquiries",
      count: 321,
      percentage: 9,
      trend: "-2%",
      color: "from-white/[0.03] to-white/[0.05]",
      borderColor: "border-white/10",
      textColor: "text-blue-400",
      icon: MessageSquareIcon,
      avgResolutionTime: "3.8m",
      escalationRate: "3%",
    },
    {
      name: "Product Feedback",
      count: 287,
      percentage: 8,
      trend: "+6%",
      color: "from-white/[0.03] to-white/[0.05]",
      borderColor: "border-white/10",
      textColor: "text-blue-400",
      icon: MessageSquareIcon,
      avgResolutionTime: "4.5m",
      escalationRate: "4%",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0E0E10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <TagIcon className="w-4 h-4 text-purple-400" />

            <span className="text-purple-400 text-sm font-medium">
              Smart Classification
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Understand{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
              Every Conversation
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Automatically classify and categorize support conversations to
            identify patterns, measure performance, and optimize your team's
            response strategy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.borderColor} rounded-xl p-6 hover:scale-[1.02] transition-all`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg bg-white/5 border ${category.borderColor}`}
                    >
                      <Icon className={`w-5 h-5 ${category.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60">
                        {category.count.toLocaleString()} conversations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Percentage Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/60">
                      Volume Distribution
                    </span>
                    <span
                      className={`text-sm font-semibold ${category.textColor}`}
                    >
                      {category.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${category.color.replace("/20", "/60")}`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <ClockIcon className="w-3 h-3 text-white/40" />

                      <p className="text-xs text-white/60">Avg Time</p>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {category.avgResolutionTime}
                    </p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUpIcon className="w-3 h-3 text-white/40" />

                      <p className="text-xs text-white/60">Escalation</p>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {category.escalationRate}
                    </p>
                  </div>
                </div>

                {/* Trend Badge */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">vs last month</span>
                    <span
                      className={`text-xs font-semibold ${
                        category.trend.startsWith("+")
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      {category.trend}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">3,657</div>
              <div className="text-sm text-white/60">
                Total conversations analyzed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">94%</div>
              <div className="text-sm text-white/60">
                Classification accuracy
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">5.8m</div>
              <div className="text-sm text-white/60">
                Average resolution time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
