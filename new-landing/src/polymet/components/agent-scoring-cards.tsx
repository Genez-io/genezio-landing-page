import {
  StarIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  AwardIcon,
  TargetIcon,
  MessageSquareIcon,
  ClockIcon,
  HeartIcon,
} from "lucide-react";

export function AgentScoringCards() {
  const agents = [
    {
      name: "Sarah Johnson",
      team: "Team A",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      overallScore: 94,
      rank: "Top Performer",
      metrics: {
        csat: { score: "4.8/5.0", change: "+0.3", trend: "up" },
        escalation: { score: "8%", change: "-4%", trend: "up" },
        responseTime: { score: "2.3m", change: "-0.5m", trend: "up" },
        resolution: { score: "92%", change: "+5%", trend: "up" },
      },
      strengths: [
        "Excellent empathy",
        "Active listening",
        "Clear communication",
      ],

      improvements: ["Reduce technical jargon", "Faster initial response"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      textColor: "text-emerald-400",
    },
    {
      name: "Michael Chen",
      team: "Team B",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      overallScore: 88,
      rank: "Strong Performer",
      metrics: {
        csat: { score: "4.5/5.0", change: "+0.2", trend: "up" },
        escalation: { score: "12%", change: "-2%", trend: "up" },
        responseTime: { score: "3.1m", change: "+0.2m", trend: "down" },
        resolution: { score: "87%", change: "+3%", trend: "up" },
      },
      strengths: [
        "Technical expertise",
        "Problem-solving",
        "Detailed responses",
      ],

      improvements: ["Improve response speed", "Simplify explanations"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      name: "Emily Rodriguez",
      team: "Team A",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      overallScore: 91,
      rank: "Top Performer",
      metrics: {
        csat: { score: "4.7/5.0", change: "+0.4", trend: "up" },
        escalation: { score: "9%", change: "-3%", trend: "up" },
        responseTime: { score: "2.5m", change: "-0.3m", trend: "up" },
        resolution: { score: "90%", change: "+4%", trend: "up" },
      },
      strengths: ["Quick responses", "Proactive solutions", "Customer rapport"],
      improvements: ["Handle complex technical issues", "Documentation"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-400",
    },
  ];

  const scoringCategories = [
    {
      category: "Customer Satisfaction",
      weight: "30%",
      icon: HeartIcon,
      description: "Based on post-conversation ratings and feedback",
    },
    {
      category: "Resolution Quality",
      weight: "25%",
      icon: TargetIcon,
      description: "First contact resolution and issue closure rate",
    },
    {
      category: "Response Efficiency",
      weight: "20%",
      icon: ClockIcon,
      description: "Average response time and conversation duration",
    },
    {
      category: "Communication Skills",
      weight: "15%",
      icon: MessageSquareIcon,
      description: "Clarity, empathy, and professionalism in responses",
    },
    {
      category: "Escalation Management",
      weight: "10%",
      icon: TrendingUpIcon,
      description: "Ability to resolve issues without escalation",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0E0E10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <StarIcon className="w-4 h-4 text-purple-400 fill-current" />

            <span className="text-purple-400 text-sm font-medium">
              Agent Performance
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Personalized{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Scoring Cards
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Give every agent actionable insights with comprehensive scoring
            cards that highlight strengths, identify improvement areas, and
            track progress over time.
          </p>
        </div>

        {/* Scoring Categories */}
        <div className="mb-12 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            How We Calculate Agent Scores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {scoringCategories.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white/[0.02] border border-white/10 rounded-xl p-4 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold text-white mb-1">
                      {item.category}
                    </p>
                    <p className="text-xs text-purple-400 font-semibold mb-2">
                      {item.weight}
                    </p>
                    <p className="text-xs text-white/60">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${agent.color} backdrop-blur-sm border ${agent.borderColor} rounded-2xl p-6 hover:scale-[1.02] transition-all relative`}
            >
              {/* Rank Badge */}
              {agent.rank === "Top Performer" && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full shadow-lg border border-white/20 text-xs font-semibold flex items-center gap-1">
                  <AwardIcon className="w-3 h-3 fill-current" />

                  {agent.rank}
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-16 h-16 rounded-full border-2 border-white/20"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-white/60">{agent.team}</p>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${agent.textColor}`}>
                    {agent.overallScore}
                  </div>
                  <p className="text-xs text-white/60">Score</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <HeartIcon className="w-3 h-3 text-white/40" />

                    <p className="text-xs text-white/60">CSAT</p>
                  </div>
                  <p className="text-lg font-bold text-white mb-1">
                    {agent.metrics.csat.score}
                  </p>
                  <div className="flex items-center gap-1">
                    {agent.metrics.csat.trend === "up" ? (
                      <TrendingUpIcon className="w-3 h-3 text-purple-400" />
                    ) : (
                      <TrendingDownIcon className="w-3 h-3 text-red-400" />
                    )}
                    <span
                      className={`text-xs font-semibold ${
                        agent.metrics.csat.trend === "up"
                          ? "text-purple-400"
                          : "text-red-400"
                      }`}
                    >
                      {agent.metrics.csat.change}
                    </span>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingDownIcon className="w-3 h-3 text-white/40" />

                    <p className="text-xs text-white/60">Escalation</p>
                  </div>
                  <p className="text-lg font-bold text-white mb-1">
                    {agent.metrics.escalation.score}
                  </p>
                  <div className="flex items-center gap-1">
                    {agent.metrics.escalation.trend === "up" ? (
                      <TrendingUpIcon className="w-3 h-3 text-purple-400" />
                    ) : (
                      <TrendingDownIcon className="w-3 h-3 text-red-400" />
                    )}
                    <span
                      className={`text-xs font-semibold ${
                        agent.metrics.escalation.trend === "up"
                          ? "text-purple-400"
                          : "text-red-400"
                      }`}
                    >
                      {agent.metrics.escalation.change}
                    </span>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <ClockIcon className="w-3 h-3 text-white/40" />

                    <p className="text-xs text-white/60">Response</p>
                  </div>
                  <p className="text-lg font-bold text-white mb-1">
                    {agent.metrics.responseTime.score}
                  </p>
                  <div className="flex items-center gap-1">
                    {agent.metrics.responseTime.trend === "up" ? (
                      <TrendingUpIcon className="w-3 h-3 text-purple-400" />
                    ) : (
                      <TrendingDownIcon className="w-3 h-3 text-red-400" />
                    )}
                    <span
                      className={`text-xs font-semibold ${
                        agent.metrics.responseTime.trend === "up"
                          ? "text-purple-400"
                          : "text-red-400"
                      }`}
                    >
                      {agent.metrics.responseTime.change}
                    </span>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <TargetIcon className="w-3 h-3 text-white/40" />

                    <p className="text-xs text-white/60">Resolution</p>
                  </div>
                  <p className="text-lg font-bold text-white mb-1">
                    {agent.metrics.resolution.score}
                  </p>
                  <div className="flex items-center gap-1">
                    {agent.metrics.resolution.trend === "up" ? (
                      <TrendingUpIcon className="w-3 h-3 text-purple-400" />
                    ) : (
                      <TrendingDownIcon className="w-3 h-3 text-red-400" />
                    )}
                    <span
                      className={`text-xs font-semibold ${
                        agent.metrics.resolution.trend === "up"
                          ? "text-purple-400"
                          : "text-red-400"
                      }`}
                    >
                      {agent.metrics.resolution.change}
                    </span>
                  </div>
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-white/80 mb-2 flex items-center gap-1">
                  <StarIcon className="w-3 h-3 fill-current text-purple-400" />
                  Top Strengths
                </p>
                <div className="flex flex-wrap gap-2">
                  {agent.strengths.map((strength, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              {/* Improvements */}
              <div>
                <p className="text-xs font-semibold text-white/80 mb-2 flex items-center gap-1">
                  <TargetIcon className="w-3 h-3 text-blue-400" />
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {agent.improvements.map((improvement, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                    >
                      {improvement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
