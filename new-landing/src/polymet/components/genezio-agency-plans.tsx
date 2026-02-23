import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  SparklesIcon,
  UsersIcon,
  HeadphonesIcon,
} from "lucide-react";

export function GenezioAgencyPlans() {
  return (
    <section className="pb-12 md:pb-20 px-4 md:px-6 bg-[#050506]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Agency Pricing
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Scale your GEO services with our comprehensive agency plan
          </p>
        </div>
        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="relative bg-white/5 border border-blue-500/50 rounded-2xl p-6 md:p-8 shadow-lg shadow-blue-500/10">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <SparklesIcon className="w-3.5 h-3.5" />
                Agency Plan
              </div>
            </div>

            {/* Plan Header */}
            <div className="mb-6">
              <div className="flex items-baseline justify-center gap-1 mb-3">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  €999
                </span>
                <span className="text-white/60 text-sm">/month</span>
              </div>
              <p className="text-sm text-white/60 text-center">
                Perfect for agencies scaling GEO services
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Feature 1 */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">3</div>
                <div className="text-white/70 text-xs">Brands to Monitor</div>
              </div>
              {/* Feature 2 */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">5</div>
                <div className="text-white/70 text-xs">LLMs to Track per brand</div>
              </div>
              {/* Feature 3 */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  7,500
                </div>
                <div className="text-white/70 text-xs">
                  Conversations to Analyze per brand
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button onClick={() => window.open('https://app.genezio.ai/sign-up', '_blank')} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-base font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/20">
                Start Free Trial
              </Button>
              <Button onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC', '_blank')} className="w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 py-6 text-base font-semibold rounded-lg transition-all duration-200">
                Book a Demo
              </Button>
              <p className="text-center text-white/50 text-sm">
                Cancel anytime. 7 days free trial
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Features Table with Add-ons Column */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
            What's included
          </h3>

          {/* Mobile: Card Layout */}
          <div className="md:hidden space-y-4">
            {[
              {
                feature: "Personas per brand",
                included: "3",
                addon: "Additional personas",
              },
              { feature: "Languages", included: "All", addon: "-" },
              {
                feature: "Monitoring locations per brand",
                included: "3",
                addon: "Multi-market tracking",
              },
              { feature: "Topics per brand", included: "10", addon: "-" },
              {
                feature: "Scenarios per brand",
                included: "50",
                addon: "Additional scenarios",
              },
              {
                feature: "AI models (LLM)",
                included: "5 LLMs",
                addon: "Additional AI engines",
              },
              { feature: "Run frequency", included: "Daily", addon: "-" },
              {
                feature: "Statements",
                included: "Yes",
                addon: "-",
              },
              {
                feature: "Keywords",
                included: "Yes",
                addon: "-",
              },
              {
                feature: "Citations",
                included: "Yes",
                addon: "-",
              },
              {
                feature: "Sentiment analysis",
                included: "All conversations\nTop 2000 citations",
                addon: "-",
              },
              {
                feature: "Content generation",
                included: "10 per day",
                addon: "-",
                comingSoon: true,
              },
              { feature: "Data retention", included: "Unlimited", addon: "-" },
              { feature: "Seats", included: "Unlimited", addon: "-" },
              { feature: "Insights", included: "10/day/customer", addon: "Additional insights" },

              { feature: "Exports", included: "Yes", addon: "-" },
              {
                feature: "Onboarding & Account Manager",
                included: "Yes",
                addon: "-",
              },
              {
                feature: "Support",
                included: "Email & Account Manager",
                addon: "Dedicated success manager",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 rounded-2xl p-4 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <div className="text-white font-semibold text-sm">
                    {item.feature}
                  </div>
                  {item.comingSoon && (
                    <span className="text-xs px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-white/60 text-xs">Included:</div>
                  <div className="text-white font-medium text-sm text-right">
                    {item.included.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
                {item.addon !== "-" && (
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="text-white/60 text-xs">Add-on:</div>
                    <div className="text-white/60 text-xs text-right">
                      {item.addon}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: Table Layout */}
          <div className="hidden md:block bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-white/20">
              <div className="text-white font-semibold text-sm uppercase tracking-wider">
                Feature
              </div>
              <div className="text-white font-semibold text-sm uppercase tracking-wider text-center">
                Included
              </div>
              <div className="text-white font-semibold text-sm uppercase tracking-wider text-center">
                Available Add-ons
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {/* Table Rows */}
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Personas per brand
                </div>
                <div className="text-white font-semibold text-center">3</div>
                <div className="text-white/60 text-center text-sm">
                  Additional personas
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">Languages</div>
                <div className="text-white font-semibold text-center">All</div>
                <div className="text-white/60 text-center text-sm">
                  Additional languages
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Monitoring locations per brand
                </div>
                <div className="text-white font-semibold text-center">3</div>
                <div className="text-white/60 text-center text-sm">
                  Multi-market tracking
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Topics per brand
                </div>
                <div className="text-white font-semibold text-center">10</div>
                <div className="text-white/60 text-center text-sm">
                  Additional topics
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Scenarios per brand
                </div>
                <div className="text-white font-semibold text-center">50</div>
                <div className="text-white/60 text-center text-sm">
                  Additional scenarios
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  AI models (LLM)
                  <div className="text-xs text-white/50 mt-1">
                    e.g., ChatGPT, Claude, Gemini, Perplexity, Grok
                  </div>
                </div>
                <div className="text-white font-semibold text-center">
                  5 LLMs
                </div>
                <div className="text-white/60 text-center text-sm">
                  Additional AI engines
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">Run frequency</div>
                <div className="text-white font-semibold text-center">
                  Daily
                </div>
                <div className="text-white/60 text-center text-sm">-</div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Statements
                </div>
                <div className="text-white font-semibold text-center">Yes</div>
                <div className="text-white/60 text-center text-sm">-</div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Keywords
                </div>
                <div className="text-white font-semibold text-center">Yes</div>
                <div className="text-white/60 text-center text-sm">-</div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Citations
                </div>
                <div className="text-white font-semibold text-center">Yes</div>
                <div className="text-white/60 text-center text-sm">-</div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Sentiment analysis
                </div>
                <div className="text-white font-semibold text-center">
                  <div>All conversations</div>
                  <div className="text-sm text-white/60 font-normal">
                    Top 2000 citations
                  </div>
                </div>
                <div className="text-white/60 text-center text-sm">
                  Additional citations
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="flex items-center gap-2">
                  <div className="text-white/70 font-medium">
                    Content generation
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                    Coming soon
                  </span>
                </div>
                <div className="text-white font-semibold text-center">
                  10 per day
                </div>
                <div className="text-white/60 text-center text-sm">
                  Additional content
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">Data retention</div>
                <div className="text-white font-semibold text-center">
                  Unlimited
                </div>
                <div className="text-white/60 text-center text-sm">-</div>
              </div>
             
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">Seats</div>
                <div className="text-white font-semibold text-center">
                  Unlimited
                </div>
                <div className="text-white/60 text-center text-sm">-</div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">Insights</div>
                <div className="text-white font-semibold text-center">
                  10/day/customer
                </div>
                <div className="text-white/60 text-center text-sm">Additional insights</div>
              </div>

              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">Exports</div>
                <div className="text-white font-semibold text-center">Yes</div>
                <div className="text-white/60 text-center text-sm">-</div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">
                  Onboarding & Account Manager
                </div>
                <div className="text-white font-semibold text-center">Yes</div>
                <div className="text-white/60 text-center text-sm">-</div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-5 hover:bg-white/5 transition-all duration-200">
                <div className="text-white/70 font-medium">Support</div>
                <div className="text-white font-semibold text-center">
                  Email & Account Manager
                </div>
                <div className="text-white/60 text-center text-sm">
                  Dedicated success manager
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
