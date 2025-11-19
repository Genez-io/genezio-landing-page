import {
  LinkIcon,
  MessageSquareIcon,
  HashIcon,
  SearchIcon,
  FileTextIcon,
  TrendingUpIcon,
} from "lucide-react";

export function LeadGenIntelligence() {
  const features = [
    {
      icon: LinkIcon,
      title: "Source Tracking",
      description:
        "Identify which sources AI platforms use when discussing your brand",
      benefits: [
        "Track citation frequency",
        "Monitor source credibility",
        "Identify missing authoritative sources",
      ],

      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: MessageSquareIcon,
      title: "Statement Analysis",
      description:
        "Understand what AI platforms say about your brand and products",
      benefits: [
        "Extract key brand statements",
        "Compare with competitor messaging",
        "Identify perception gaps",
      ],

      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: HashIcon,
      title: "Keyword Extraction",
      description:
        "Discover keywords and phrases associated with your brand in AI conversations",
      benefits: [
        "Find high-intent keywords",
        "Optimize content strategy",
        "Improve AI discoverability",
      ],

      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#050506] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <SearchIcon className="w-4 h-4 text-cyan-400" />

            <span className="text-cyan-400 text-xs sm:text-sm font-medium">
              Deep Intelligence
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Understand{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Every Detail
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Go beyond surface-level metrics. Extract sources, statements, and
            keywords to deeply understand how to improve your AI visibility and
            lead generation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${feature.color} border ${feature.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.iconColor}`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white/60 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2" />

                    <span className="text-sm text-white/70">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Example */}
        <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Example Data */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileTextIcon className="w-6 h-6 text-cyan-400" />

                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Example: Keyword Analysis
                </h3>
              </div>

              <div className="space-y-4">
                {/* Keyword Item */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">
                      "enterprise security"
                    </span>
                    <span className="text-emerald-400 text-sm font-semibold">
                      High Intent
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <span>Mentioned: 47 times</span>
                    <span>•</span>
                    <span>Competitors: 3x more</span>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">
                      "easy integration"
                    </span>
                    <span className="text-blue-400 text-sm font-semibold">
                      Medium Intent
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <span>Mentioned: 89 times</span>
                    <span>•</span>
                    <span>Your strength</span>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">
                      "affordable pricing"
                    </span>
                    <span className="text-purple-400 text-sm font-semibold">
                      Low Intent
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <span>Mentioned: 124 times</span>
                    <span>•</span>
                    <span>Opportunity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Impact */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-6 sm:p-8">
                <TrendingUpIcon className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 mb-4" />

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Improve AI Visibility
                </h4>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                  By understanding which keywords drive AI recommendations, you
                  can optimize your content to appear in more relevant
                  conversations and capture high-intent leads.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <TrendingUpIcon className="w-5 h-5" />

                  <span>Average 2.8x increase in qualified leads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
