import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  TrendingUpIcon,
  DollarSignIcon,
  UsersIcon,
  ShieldCheckIcon,
} from "lucide-react";

export function ResultsTestimonialsSection() {
  const metrics = [
    {
      icon: TrendingUpIcon,
      value: "+25%",
      label: "Lead Capture Rate",
      description: "Average improvement across all clients",
      color: "green",
    },
    {
      icon: DollarSignIcon,
      value: "$2.3M",
      label: "Revenue Generated",
      description: "Total additional revenue for clients",
      color: "blue",
    },
    {
      icon: UsersIcon,
      value: "10x",
      label: "Faster Optimization",
      description: "Compared to manual testing methods",
      color: "purple",
    },
    {
      icon: ShieldCheckIcon,
      value: "85%",
      label: "Accuracy in 3 Months",
      description: "Average chatbot accuracy improvement",
      color: "orange",
    },
  ];

  const testimonials = [
    {
      quote:
        "We launched a Q&A chatbot but soon realized it wasn't meeting customer expectations—some answers were inaccurate, causing frustration and churn. Genezio helped us identify gaps across key personas and gave our vendors the feedback they needed to improve fast. Now, the chatbot performs better and is generating leads.",
      author: "Marketing Director",
      title: "Marketing Director",
      company: "Leading Bank",
      industry: "Technology",
      avatar: "",
      results: "+340% leads",
      logo: "MD",
      logoColor: "bg-blue-500",
    },
    {
      quote:
        "Our e-commerce chatbot was missing critical sales opportunities and providing inconsistent product information. Genezio's testing identified where customers were dropping off and helped us optimize our conversation flows. We've seen a significant boost in conversion rates and customer satisfaction.",
      author: "E-commerce Manager",
      title: "E-commerce Manager",
      company: "Online Retailer",
      industry: "E-commerce",
      avatar: "",
      results: "+180% conversions",
      logo: "EM",
      logoColor: "bg-green-500",
    },
    {
      quote:
        "Our customer service chatbot was struggling with complex energy billing inquiries and regulatory compliance questions. Genezio's testing revealed critical gaps in our knowledge base and helped us optimize responses for peak demand periods. We've reduced call center volume by 40% while maintaining compliance standards.",
      author: "Operations Lead",
      title: "Operations Lead",
      company: "Energy Corporation",
      industry: "Energy & Utilities",
      avatar: "",
      results: "-40% call volume",
      logo: "OL",
      logoColor: "bg-orange-500",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: "bg-green-500",
        gradient: "from-green-500 to-emerald-600",
        text: "text-green-600",
        lightBg: "bg-green-50 dark:bg-green-900/20",
      },
      blue: {
        bg: "bg-blue-500",
        gradient: "from-blue-500 to-blue-600",
        text: "text-blue-600",
        lightBg: "bg-blue-50 dark:bg-blue-900/20",
      },
      purple: {
        bg: "bg-purple-500",
        gradient: "from-purple-500 to-purple-600",
        text: "text-purple-600",
        lightBg: "bg-purple-50 dark:bg-purple-900/20",
      },
      orange: {
        bg: "bg-orange-500",
        gradient: "from-orange-500 to-orange-600",
        text: "text-orange-600",
        lightBg: "bg-orange-50 dark:bg-orange-900/20",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Sector-Specific{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Risk & Performance Testbeds
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Tailored conversational AI testing for your industry's unique risks
            and compliance requirements.
          </p>
        </div>

        {/* Industry-Specific Use Cases */}
        <div className="space-y-8 mb-16">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Banks/Fintech */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    🏦
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-lg">
                      Banks & Fintech
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      High-Risk Compliance Testing
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ShieldCheckIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        Compliance Violations
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Automated detection of regulatory breaches and policy
                        violations
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        Hallucination Prevention
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Stop AI from providing incorrect financial advice or
                        data
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <UsersIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        Customer Churn Reduction
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Identify poor bot behavior causing customer frustration
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    🛒
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-lg">
                      E-commerce
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                      Revenue Impact Testing
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSignIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        Missed Conversions
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Detect when bots fail to guide customers to purchase
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRightIcon className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        Wrong Returns/Refunds
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Prevent incorrect policy information that costs money
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        SLA Breaches
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Monitor response times and service level commitments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telcos/Utilities */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    📡
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-lg">
                      Telcos & Utilities
                    </div>
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      Scale & Satisfaction Testing
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        High Volume Handling
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Test bot performance under massive conversation loads
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ShieldCheckIcon className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        Regulatory Oversight
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Ensure compliance with utility and telecom regulations
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <UsersIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        NPS Impact
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Monitor how bot interactions affect customer
                        satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <div className="w-full max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                What Our Customers Say
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Real results from industry leaders who trust Genezio
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 ${testimonial.logoColor === "bg-orange-500" ? "bg-purple-500" : testimonial.logoColor || "bg-gradient-to-r from-blue-500 to-purple-500"} rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4`}
                    >
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">
                        {testimonial.title}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-slate-700 dark:text-slate-300 text-sm mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonial.industry}
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      {testimonial.results}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Test Your Industry's Specific Risks?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Move beyond generic chatbot evaluation to sector-specific testbeds
              designed for your industry's unique conversational risks and
              performance requirements.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const element = document.getElementById(
                  "chatbot-optimization-pricing-section"
                );
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Start Industry-Specific Testing
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
