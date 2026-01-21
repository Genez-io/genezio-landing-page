import { GlobeIcon, MapPinIcon, LanguagesIcon, SearchIcon } from "lucide-react";

export function AgencyGeoSection() {
  return (
    <section className="relative py-12 md:py-24 bg-[#050506] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Turn AI into <br />
              <span className="text-blue-400">
                competitive edge
              </span>
            </h2>
            <p className="text-base md:text-xl text-white/60 mb-8 leading-relaxed">
              Deliver GEO strategies across all AI platforms.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <SearchIcon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    AI search optimization
                  </h3>
                  <p className="text-white/60">
                    Optimize for ChatGPT, Perplexity, and Google SGE.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <GlobeIcon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Multi-platform coverage
                  </h3>
                  <p className="text-white/60">
                    Track mentions across all major AI platforms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <LanguagesIcon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Content strategy automation
                  </h3>
                  <p className="text-white/60">
                    Generate strategies and identify gaps automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl bg-blue-500/10 border border-white/10 p-6 md:p-8">
              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <SearchIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        ChatGPT mentions
                      </div>
                      <div className="text-xs text-white/60">
                        Last 30 days
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">
                    +247%
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <GlobeIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        Perplexity coverage
                      </div>
                      <div className="text-xs text-white/60">
                        Across 50+ queries
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">89%</div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <MapPinIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        Content opportunities
                      </div>
                      <div className="text-xs text-white/60">
                        Identified gaps
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">34</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-400 blur-2xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-blue-400 blur-2xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}