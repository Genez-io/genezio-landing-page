import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
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
      color: "bg-white/10",
      borderColor: "border-white/10",
      iconColor: "text-zinc-400",
    },
    {
      icon: TargetIcon,
      title: "Marketing Campaigns",
      description: "Active campaigns, messaging, and positioning strategies",
      color: "bg-white/10",
      borderColor: "border-white/10",
      iconColor: "text-emerald-400",
    },
    {
      icon: GlobeIcon,
      title: "Public Data",
      description:
        "Website content, social media, press releases, and public statements",
      color: "bg-white/10",
      borderColor: "border-white/10",
      iconColor: "text-emerald-400",
    },
    {
      icon: FileTextIcon,
      title: "Brand Documentation",
      description:
        "Product specs, case studies, whitepapers, and technical docs",
      color: "bg-white/10",
      borderColor: "border-white/10",
      iconColor: "text-zinc-400",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0E0E10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <HeroEyebrow className="mb-6">Powered by Your Data</HeroEyebrow>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Generate{" "}
            <span className="text-white">
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
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${source.color} border ${source.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
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
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
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
