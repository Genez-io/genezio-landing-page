import { FileTextIcon, TargetIcon, TrendingUpIcon, ZapIcon, PenToolIcon, EyeIcon, RocketIcon } from "lucide-react";

export function AgencyContentStrategySection() {
  return (
    <section className="relative py-12 md:py-24 bg-[#050506] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Upgrade your{" "}
            <span className="text-blue-400">
              content strategy
            </span>
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-3xl mx-auto">
            Create, publish, and monitor content that performs.
          </p>
        </div>

        {/* Content Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-16">
          {/* Step 1: Create */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-[#0E0E10] border border-white/10">
            <div className="absolute -top-4 left-8 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
              Step 1
            </div>
            <div className="mb-6 mt-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                <PenToolIcon className="w-6 h-6 text-blue-400" />
              </div>
              {/* Visual Preview */}
              <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="space-y-2">
                  <div className="h-2 bg-blue-400/30 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-400/20 rounded w-1/2"></div>
                  <div className="h-2 bg-blue-400/20 rounded w-2/3"></div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Create content
              </h3>
              <p className="text-white/70 mb-4">
                Generate strategies with GEO insights.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>See top keywords</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>Identify best domains from citations</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>Use built-in generation tool</span>
              </li>
            </ul>
          </div>

          {/* Step 2: Publish */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-[#0E0E10] border border-white/10">
            <div className="absolute -top-4 left-8 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
              Step 2
            </div>
            <div className="mb-6 mt-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                <RocketIcon className="w-6 h-6 text-blue-400" />
              </div>
              {/* Visual Preview */}
              <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded bg-blue-400/30"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-blue-400/30 rounded w-full"></div>
                    <div className="h-2 bg-blue-400/20 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Publish & optimize
              </h3>
              <p className="text-white/70 mb-4">
                Deploy content for search and AI.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>SEO-optimized structure</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>GEO-ready formatting</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>Citation-friendly content</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>Multi-platform distribution</span>
              </li>
            </ul>
          </div>

          {/* Step 3: Monitor */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-[#0E0E10] border border-white/10">
            <div className="absolute -top-4 left-8 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
              Step 3
            </div>
            <div className="mb-6 mt-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                <EyeIcon className="w-6 h-6 text-blue-400" />
              </div>
              {/* Visual Preview */}
              <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-2 bg-blue-400/30 rounded w-1/3"></div>
                  <div className="h-2 bg-blue-400/40 rounded w-1/4"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 bg-blue-400/20 rounded"></div>
                  <div className="h-8 bg-blue-400/20 rounded"></div>
                  <div className="h-8 bg-blue-400/20 rounded"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Monitor performance
              </h3>
              <p className="text-white/70 mb-4">
                Track citations and measure impact.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>Real-time citation alerts</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                <span>LLM reference tracking</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                <span>Performance analytics</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                <span>Visibility score trends</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Citation Monitoring Highlight */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <ZapIcon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300">Citation monitoring</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Track content citations
              </h3>
              <p className="text-base md:text-lg text-white/70 mb-8">
                When a URL is used as a source by GPT, it appears in the list.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <ZapIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Citation tracking</div>
                    <div className="text-white/60 text-sm">Track when your URLs are used as sources by AI</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <TrendingUpIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Multi-LLM tracking</div>
                    <div className="text-white/60 text-sm">Track citations across all major AI platforms</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <TargetIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Performance analytics</div>
                    <div className="text-white/60 text-sm">Measure impact and optimize your strategy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Preview */}
            <div>
              <div className="rounded-2xl bg-[#0E0E10] border border-white/10 p-6 md:p-8 mt-8 lg:mt-0">
                <div className="space-y-4">
                  {/* Article Card */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <FileTextIcon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm mb-1">Best running shoes for beginners</div>
                        <div className="text-white/60 text-xs">Published 2 days ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <span className="text-white/60 text-xs">Cited</span>
                    </div>
                  </div>

                  {/* Citation Alert */}
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <ZapIcon className="w-4 h-4 text-blue-400" />
                      <div className="text-blue-300 text-sm font-semibold">New citation alert</div>
                    </div>
                    <div className="text-white/70 text-xs mb-3">Your article was cited by ChatGPT</div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs">ChatGPT</div>
                      <div className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs">2 hours ago</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                      <div className="text-white font-bold text-lg">12</div>
                      <div className="text-white/60 text-xs">Citations</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                      <div className="text-white font-bold text-lg">5</div>
                      <div className="text-white/60 text-xs">Platforms</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                      <div className="text-white font-bold text-lg">24h</div>
                      <div className="text-white/60 text-xs">Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}