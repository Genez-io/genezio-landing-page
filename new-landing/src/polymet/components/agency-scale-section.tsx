import {
    LayersIcon,
    UsersIcon,
    TrendingUpIcon,
    ZapIcon,
    BarChart3Icon,
    SearchIcon,
    FileTextIcon,
    BellIcon,
  } from "lucide-react";
  
  export function AgencyScaleSection() {
    const features = [
      {
        icon: TrendingUpIcon,
        title: "Discover brand performance",
        description:
          "Visibility scores, citations, and competitive benchmarking.",
        visual: (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                  <BarChart3Icon className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">
                    Visibility score
                  </div>
                  <div className="text-white/60 text-xs">Overall AI presence</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-emerald-400">87</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-white/60 text-xs mb-1">ChatGPT</div>
                <div className="text-white font-bold text-lg">247</div>
                <div className="text-emerald-400 text-xs">+24%</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-white/60 text-xs mb-1">Perplexity</div>
                <div className="text-white font-bold text-lg">89%</div>
                <div className="text-emerald-400 text-xs">+12%</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        icon: ZapIcon,
        title: "Uncover competitive opportunities",
        description: "Find gaps, untapped keywords, and winning strategies.",
        visual: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <SearchIcon className="w-4 h-4 text-emerald-400" />
                <div className="text-white text-sm font-semibold">
                  34 insights
                </div>
              </div>
              <div className="text-white/70 text-xs">
                Identified gaps in sustainable products
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                <div className="text-white text-xs">eco-friendly sneakers</div>
                <div className="text-emerald-400 text-xs font-medium">High</div>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                <div className="text-white text-xs">sustainable materials</div>
                <div className="text-white/50 text-xs font-medium">Medium</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        icon: LayersIcon,
        title: "Create powerful strategies",
        description: "Data-driven content combining SEO and GEO insights.",
        visual: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <FileTextIcon className="w-4 h-4 text-emerald-400" />
                <div className="text-white text-sm font-medium">
                  Content strategy
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="text-white/70 text-xs">See top keywords</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="text-white/70 text-xs">
                    Identify top citations domain
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="text-white/70 text-xs">
                    Create draft articles
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        icon: UsersIcon,
        title: "Monitor content performance",
        description: "Real-time tracking of LLM citations and references.",
        visual: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <BellIcon className="w-4 h-4 text-emerald-400" />
                <div className="text-emerald-300 text-sm font-semibold">
                  New citation alert
                </div>
              </div>
              <div className="text-white/70 text-xs mb-2">
                Your content was cited by ChatGPT
              </div>
              <div className="text-white/60 text-xs">
                "Best running shoes for beginners"
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                <div className="text-white font-bold text-sm">12</div>
                <div className="text-white/60 text-xs">Citations</div>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                <div className="text-white font-bold text-sm">5</div>
                <div className="text-white/60 text-xs">Platforms</div>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
                <div className="text-white font-bold text-sm">24h</div>
                <div className="text-white/60 text-xs">Tracking</div>
              </div>
            </div>
          </div>
        ),
      },
    ];
  
    return (
      <section className="relative py-24 md:py-32 bg-[#050506] px-6 md:px-8 lg:px-16">
        {/* Top hairline divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Scale your agency effortlessly
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              Manage multiple brands with powerful monitoring, competitive
              intelligence, and automated content strategies. Lead where customers
              ask and search.
            </p>
          </div>
  
          {/* Features grid - 2x2 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-[#0A0A0C] border border-white/10 p-6 md:p-8 hover:border-white/20 transition-colors">
                {/* Icon + Title */}
                <div className="flex items-center gap-2.5 mb-2">
                  <feature.icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Visual Preview */}
                <div className="rounded-xl bg-[#050506] border border-white/10 p-4 md:p-6">
                  {feature.visual}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  