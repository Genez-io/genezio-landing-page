import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  UserPlusIcon,
  ShieldIcon,
  DollarSignIcon,
  BarChart3Icon,
  FileTextIcon,
  TrendingUpIcon,
} from "lucide-react";

export function KeyFeaturesSection() {
  const features = [
    {
      icon: TrendingUpIcon,
      title: "Lead generation",
      description:
        "Capture potential customers through strategic conversation flows and intelligent lead qualification processes.",
      metrics: "+52% lead acquisition rate",
    },
    {
      icon: UserPlusIcon,
      title: "Lead conversion",
      description:
        "Transform conversations into qualified leads with intelligent capture mechanisms and personalized follow-up sequences.",
      metrics: "+47% lead capture rate",
    },
    {
      icon: ShieldIcon,
      title: "Deflection Reduction",
      description:
        "Minimize customer frustration with accurate intent recognition and contextual responses that solve problems on the first try.",
      metrics: "78% deflection rate",
    },
    {
      icon: DollarSignIcon,
      title: "Cost Control",
      description:
        "Reduce operational expenses while improving service quality through intelligent automation and resource optimization.",
      metrics: "-65% support costs",
    },
    {
      icon: BarChart3Icon,
      title: "Compliance Monitoring",
      description:
        "Ensure regulatory compliance with continuous monitoring, risk detection, and automated compliance reporting.",
      metrics: "99.8% compliance score",
    },
    {
      icon: FileTextIcon,
      title: "Customizable Reports",
      description:
        "Get actionable insights with tailored reporting dashboards that track the metrics that matter most to your business.",
      metrics: "Real-time analytics",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Key Features That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive tools and capabilities designed to maximize your
            chatbot's performance and business impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg text-white flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#1C4ED9FF" }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {feature.metrics}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
