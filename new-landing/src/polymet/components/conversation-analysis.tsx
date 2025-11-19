import {
  MessageSquareIcon,
  TagIcon,
  TrendingUpIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from "lucide-react";

export function ConversationAnalysis() {
  const categories = [
    {
      name: "Product Questions",
      count: 1247,
      percentage: 34,
      trend: "+12%",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      name: "Pricing Inquiries",
      count: 892,
      percentage: 24,
      trend: "+8%",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      name: "Technical Support",
      count: 654,
      percentage: 18,
      trend: "-5%",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      name: "Feature Requests",
      count: 445,
      percentage: 12,
      trend: "+18%",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      name: "General Info",
      count: 432,
      percentage: 12,
      trend: "+3%",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
  ];

  const insights = [
    {
      type: "success",
      icon: CheckCircleIcon,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      title: "High Conversion Topics",
      description:
        "Conversations about 'enterprise features' have 67% higher conversion rate",
      metric: "67% higher",
    },
    {
      type: "warning",
      icon: AlertCircleIcon,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      title: "Drop-off Points",
      description:
        "Users asking about 'integration complexity' abandon 43% more often",
      metric: "43% abandon",
    },
    {
      type: "error",
      icon: XCircleIcon,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      title: "Knowledge Gaps",
      description:
        "Agent fails to answer questions about 'API rate limits' in 78% of cases",
      metric: "78% failure",
    },
    {
      type: "info",
      icon: ClockIcon,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      title: "Response Time Impact",
      description: "Conversations with <2s response time convert 2.3x better",
      metric: "2.3x better",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0E0E10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <TagIcon className="w-4 h-4 text-blue-400" />

            <span className="text-blue-400 text-sm font-medium">
              Conversation Classification
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Understand What{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Customers Ask
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Automatically classify thousands of conversations into actionable
            categories. Discover patterns, trends, and opportunities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all"
            >
              <div className="mb-4" />

              <div className="text-2xl font-bold text-white mb-1">
                {category.count.toLocaleString()}
              </div>
              <div className="text-sm text-white/60 mb-3">{category.name}</div>

              <div className="flex items-center justify-between">
                <div className="text-xs text-white/40">
                  {category.percentage}%
                </div>
                <div className={`text-xs font-semibold ${category.textColor}`}>
                  {category.trend}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insights Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center">
              <TrendingUpIcon className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Extracted Insights
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className={`bg-white/[0.02] backdrop-blur-sm border ${insight.borderColor} rounded-xl p-6 hover:bg-white/[0.04] transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-sm text-white/70 mb-3">
                      {insight.description}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${insight.bgColor} border ${insight.borderColor}`}
                    >
                      <span
                        className={`text-sm font-semibold ${insight.color}`}
                      >
                        {insight.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                3,670
              </div>
              <div className="text-sm text-white/60">
                Conversations Analyzed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                24
              </div>
              <div className="text-sm text-white/60">Categories Identified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                156
              </div>
              <div className="text-sm text-white/60">Insights Extracted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
