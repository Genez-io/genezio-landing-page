import {
  DatabaseIcon,
  TrendingUpIcon,
  FileTextIcon,
  GlobeIcon,
  TargetIcon,
  SparklesIcon,
} from "lucide-react";

export function LeadGenDataSources() {
  const sources = [
    {
      icon: TrendingUpIcon,
      title: "SEO Data",
      description:
        "Your search rankings, keywords, and organic performance metrics",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: TargetIcon,
      title: "Marketing Campaigns",
      description: "Active campaigns, messaging, and positioning strategies",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: GlobeIcon,
      title: "Public Data",
      description:
        "Website content, social media, press releases, and public statements",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: FileTextIcon,
      title: "Brand Documentation",
      description:
        "Product specs, case studies, whitepapers, and technical docs",
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/20",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0E0E10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <DatabaseIcon className="w-4 h-4 text-emerald-400" />

            <span className="text-emerald-400 text-xs sm:text-sm font-medium">
              Powered by Your Data
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Generate{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Realistic Conversations
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            We analyze all your public data to create authentic conversation
            scenarios that mirror how AI platforms actually perceive and discuss
            your brand.
          </p>
        </div>

        {/* Data Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {sources.map((source, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${source.color} border ${source.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <source.icon
                    className={`w-7 h-7 sm:w-8 sm:h-8 ${source.iconColor}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {source.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                    {source.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <SparklesIcon className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Adaptive Query Platform
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Our platform dynamically adapts queries based on your industry,
                target audience, and competitive landscape to generate the most
                relevant conversation scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
