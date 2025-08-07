import React from "react";
import {
  SearchIcon,
  BarChart3Icon,
  SettingsIcon,
  TrendingUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  EyeIcon,
  ZapIcon,
  TargetIcon,
} from "lucide-react";

export function BrandPresenceProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <SettingsIcon className="w-4 h-4 mr-2" />
            Our Proven Process
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How We Optimize Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              AI Presence
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Success in GEO isn't just about data. It's about a disciplined
            process that turns insight into action, and action into control.
            Genezio orchestrates this entire workflow, providing the clarity and
            confidence you need to master AI search.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          <div className="space-y-8 mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <EyeIcon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Identify Lost Control Points
                  </h3>
                </div>

                {/* Visual Element */}
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">
                        ChatGPT Visibility
                      </span>
                      <span className="text-red-500 font-medium">32%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "32%" }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">
                        Claude Mentions
                      </span>
                      <span className="text-orange-500 font-medium">18%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: "18%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our platform monitors conversations across ChatGPT, Gemini,
                  Google AI Overview, and more. We pinpoint the exact prompts,
                  topics, and user intents where your brand is misrepresented,
                  invisible, or being outmaneuvered by competitors.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ZapIcon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Execute with Precision
                  </h3>
                </div>

                {/* Visual Element */}
                <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Content Strategy
                      </span>
                      <div className="ml-auto text-xs text-green-600 font-medium">
                        Ready
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Authority Mapping
                      </span>
                      <div className="ml-auto text-xs text-blue-600 font-medium">
                        Active
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Platform Targeting
                      </span>
                      <div className="ml-auto text-xs text-orange-600 font-medium">
                        Queue
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Genezio delivers a prioritized list of actionable
                  recommendations. Your team receives a clear roadmap, enabling
                  them to create and optimize the content needed to take back
                  control of your narrative.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TargetIcon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Measure Your Control
                  </h3>
                </div>

                {/* Visual Element */}
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-green-600">
                      +340%
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Visibility Increase
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          #1
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Ranking
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">
                          3x
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Mentions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our analytics dashboards close the loop. We track the metrics
                  that signal control: share of voice against your key rivals,
                  rank improvement for target prompts, and measurable shifts in
                  brand sentiment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your AI Optimization Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the brands already dominating AI search results. Get your
              comprehensive AI presence audit and start seeing results in weeks,
              not months.
            </p>
            <button
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
              onClick={() => {
                // Try multiple selectors to find the pricing section
                const pricingSection =
                  document.querySelector('[data-pol-id="1dz73g"]') ||
                  document.querySelector('[data-pol-id="cc9ldy"]') ||
                  document.querySelector(
                    'section:has(h2:contains("Brand Presence"))'
                  );
                if (pricingSection) {
                  pricingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Get Started Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
