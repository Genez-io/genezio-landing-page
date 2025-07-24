import React from "react";
import { TrendingUpIcon, TrendingDownIcon, ShieldIcon } from "lucide-react";

export function RoiCardsSection() {
  const cards = [
    {
      id: "revenue",
      title: "For Marketers<br>Increase Revenue",
      icon: TrendingUpIcon,
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-slate-50 dark:bg-slate-800/50",
      borderColor: "border-slate-200 dark:border-slate-700",
      description:
        "Monitor brand presence across LLMs and dominate AI search results. Turn your AI assets into a powerful lead generation and conversion channel.",
      stats: [{ label: "Revenue Increase", value: "+35%" }],

      testimonial: {
        quote:
          "From our studies, GenZ starts looking for their first banking products through LLM platforms like ChatGPT. Genezio helped us increase our presence by 35%.",
        author: "Marketing Director",
        company: "Large Bank"
      },
      anchor: "#revenue"
    },
    {
      id: "cost",
      title: "For Customer Support<br>Reduce Cost",
      icon: TrendingDownIcon,
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-slate-50 dark:bg-slate-800/50",
      borderColor: "border-slate-200 dark:border-slate-700",
      description:
        "Optimize operations through increased accuracy, reduced escalations, and controlled LLM costs. Generate comprehensive scenarios for meaningful insights.",
      stats: [{ label: "Cost Reduction", value: "-18%" }],

      testimonial: {
        quote:
          "Using Genezio we were able to increase accuracy from 75% to 85% in less than three months. The process was too slow and our students were confused using the chatbot.",
        author: "Customer Service Director",
        company: "Educational Institution"
      },
      anchor: "#cost"
    },
    {
      id: "risk",
      title: "For IT<br>Manage Risk",
      icon: ShieldIcon,
      iconColor: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-slate-50 dark:bg-slate-800/50",
      borderColor: "border-slate-200 dark:border-slate-700",
      description:
        "Ensure compliance and manage regulatory risks with comprehensive monitoring. Detect potential issues before they impact your business operations.",
      stats: [{ label: "Compliance Rate", value: "98%" }],

      testimonial: {
        quote:
          "Genezio's risk management capabilities helped us maintain compliance across all our AI interactions while reducing manual oversight by 60%.",
        author: "Chief Compliance Officer",
        company: "Financial Services"
      },
      anchor: "#risk"
    }
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              No Chatbot? No Problem.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover how different teams can leverage AI testing to drive
              measurable business outcomes
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {cards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className={`${card.bgColor} rounded-2xl p-8 border-2 ${card.borderColor} hover:shadow-lg transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-600">
                      <IconComponent className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-2xl font-bold text-slate-900 dark:text-white"
                        dangerouslySetInnerHTML={{ __html: card.title }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {card.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white dark:bg-slate-800 rounded-lg p-3"
                      >
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {stat.label}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 mb-6 border border-slate-200 dark:border-slate-600">
                    <blockquote className="text-sm text-slate-600 dark:text-slate-300 italic mb-3">
                      "{card.testimonial.quote}"
                    </blockquote>
                    <cite className="text-xs text-slate-500 dark:text-slate-400">
                      — {card.testimonial.author}, {card.testimonial.company}
                    </cite>
                  </div>

                  {/* Read More Button */}
                  <a
                    href={card.anchor}
                    className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900"
                  >
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
