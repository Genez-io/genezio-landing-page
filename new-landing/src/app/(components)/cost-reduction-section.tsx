import React from "react";
import {
  // TrendingDownIcon,
  TargetIcon,
  UsersIcon,
  DollarSignIcon,
  ExternalLinkIcon
  // StarIcon
} from "lucide-react";

export function CostReductionSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800" id="cost">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              {/* <TrendingDownIcon className="w-4 h-4 mr-2" /> */}
              For Customer Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Optimize operations and minimize expenses
            </h2>
          </div>

          {/* Two Strategies Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1: Increase Accuracy */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <TargetIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                    Increase Accuracy
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Generate comprehensive conversation scenarios and fine-tune
                    judges for meaningful reports
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  How it works:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Generate conversation scenarios for all possible customer
                      interactions
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Run scheduled simulations and create meaningful reports
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Monitor progress to ensure good customer outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy 2: Decrease Escalation */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                    Decrease Escalation to Humans
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Use customer service logs to create synthetic conversations
                    and uncover edge cases
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Key Benefits:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Analyze thousands of customer service conversations
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Generate synthetic conversations to uncover edge cases
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Increase deflection rates and reduce human escalation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy 3: LLM Cost Control */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <DollarSignIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  LLM Cost Control
                </h3>
                <p className="font-semibold text-slate-900 dark:text-white mb-2">
                  Are unexpected spikes in your LLM usage causing unpredictable
                  and escalating costs?
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Take control of your LLM costs with smart monitoring, adaptive
                  rate limits, and real-time insights - keeping spending
                  predictable and efficient.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  30%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Cost Reduction
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  24/7
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Monitoring
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  Real-time
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Rate Limiting
                </div>
              </div>
            </div>
          </div>

          {/* Research Citation */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <p className="text-md text-slate-600 dark:text-slate-300 mb-2">
              <strong>Research insight:</strong> "When the conversation is
              finished, the customer has formed an opinion not only about the
              dialogue system itself but often also about the organization that
              the chatbot represents. Customers blame the company more for
              negative outcomes than the chatbot itself."
            </p>
            <a
              href="https://arxiv.org/pdf/2312.13871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Research Paper <ExternalLinkIcon className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
