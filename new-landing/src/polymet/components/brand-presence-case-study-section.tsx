import React from "react";
import {
  TrendingUpIcon,
  CheckCircleIcon,
  QuoteIcon,
  StarIcon,
  BarChart3Icon,
  TargetIcon,
} from "lucide-react";

export function BrandPresenceCaseStudySection() {
  const results = [
    {
      metric: "47%",
      label: "Increase in Brand Presence",
      icon: TrendingUpIcon,
      color: "text-green-600",
    },
    {
      metric: "Top 3",
      label: "Mention for Target Prompts",
      icon: TargetIcon,
      color: "text-blue-600",
    },
    {
      metric: "60 Days",
      label: "Time to Results",
      icon: CheckCircleIcon,
      color: "text-purple-600",
    },
  ];

  const steps = [
    {
      title: "The Challenge",
      description:
        "A leading financial institution realized it had lost control of its brand narrative with the next generation of customers. Their target GenZ audience was starting its financial journey on conversational AI platforms like ChatGPT, and the bank's voice was being drowned out by competitors.",
      color: "from-red-500 to-red-600",
    },
    {
      title: "The Insight",
      description:
        'The Genezio platform analyzed thousands of relevant prompts and discovered that queries for "first credit card for students" and "best mobile banking app" were dominated by outdated blog posts and content from newer, fintech competitors, leaving the bank\'s message unheard.',
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "The Action",
      description:
        "Guided by Genezio's prioritized recommendations, the bank's marketing team executed a targeted content strategy to take back control. They developed a series of authoritative articles and updated key product pages to directly address the specific questions and concerns uncovered in the AI conversations.",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "The Result",
      description:
        "Within 60 days, the bank achieved a top-3 mention for their most critical target prompts. This strategic repositioning allowed them to regain control of their presence, leading to a XX% increase in brand visibility and a dominant share of voice for high-intent queries from the GenZ demographic.",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4 mr-2" />
            The Centerpiece Case Study
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How a Global Bank Took Control of its{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GenZ Presence
            </span>{" "}
            on ChatGPT
          </h2>
        </div>

        {/* Case Study Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mr-4`}
                >
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Results Metrics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Measurable Results
            </h3>
            <p className="text-blue-100 text-lg">
              The transformation in numbers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {result.metric}
                  </div>
                  <div className="text-blue-100 text-sm">{result.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <QuoteIcon className="w-8 h-8 text-white" />
            </div>

            <blockquote className="text-xl lg:text-2xl text-slate-900 dark:text-white font-medium leading-relaxed mb-6 max-w-4xl mx-auto">
              "From our studies, GenZ starts looking for their first banking
              products through LLM platforms like ChatGPT. Our products are
              tailored to GenZ and we were looking for a tool to understand why
              our relevance on ChatGPT was not as good as on regular search.
              Genezio helped us increase our presence by 47% and we got where we
              were supposed to be. Thank Genezio for your support in solving
              this important issue for us."
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900 dark:text-white">
                  Marketing Director
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">
                  Global Financial Institution
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
