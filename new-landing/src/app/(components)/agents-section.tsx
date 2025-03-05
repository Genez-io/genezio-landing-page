"use client";

import React from "react";
import {
  CheckCircleIcon,
  TestTubeIcon,
  FilterIcon,
  ClockIcon,
  AlertTriangleIcon,
  BriefcaseIcon,
  LockIcon,
  DollarSignIcon
} from "lucide-react";

export function AgentsSection() {
  const agents = [
    {
      title: "Fact Checking",
      description:
        "Verify AI-generated claims against trusted knowledge bases to ensure accuracy and reliability.",
      icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
      tag: "Coming Soon",
      tagColor: "bg-amber-500 text-white"
    },
    {
      title: "Offensive Language",
      description:
        "Detect and flag inappropriate, offensive, or harmful content in AI-generated responses.",
      icon: <AlertTriangleIcon className="w-8 h-8 text-red-500" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
      tag: "Coming Soon",
      tagColor: "bg-amber-500 text-white"
    },
    {
      title: "Off Topic",
      description:
        "Identify hallucinations or irrelevant responses that could mislead users or damage brand reputation.",
      icon: <FilterIcon className="w-8 h-8 text-amber-500" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
      tag: "Coming Soon",
      tagColor: "bg-amber-500 text-white"
    },
    {
      title: "Cost Control",
      description:
        "Monitor and optimize token usage to prevent excessive costs from verbose responses or inefficient prompts.",
      icon: <DollarSignIcon className="w-8 h-8 text-green-600" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
      tag: "Coming Soon",
      tagColor: "bg-amber-500 text-white"
    },
    {
      title: "Fake News",
      description:
        "Detect and flag misinformation, disinformation, and fabricated content in AI responses.",
      icon: <AlertTriangleIcon className="w-8 h-8 text-red-500" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
      tag: "Coming Soon",
      tagColor: "bg-amber-500 text-white"
    },
    {
      title: "Competitor Mentions",
      description:
        "Identify and analyze when AI agents reference competitors or competitive products inappropriately.",
      icon: <BriefcaseIcon className="w-8 h-8 text-blue-500" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
      tag: "Coming Soon",
      tagColor: "bg-amber-500 text-white"
    },
    {
      title: "Functional Testing",
      description:
        "Validate AI's responses across various business cases and scenarios to ensure consistent performance.",
      icon: <TestTubeIcon className="w-8 h-8 text-purple-600" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
      tag: "Coming Soon",
      tagColor: "bg-amber-500 text-white"
    },
    {
      title: "Context Leakage",
      description:
        "Prevent AI from exposing internal system prompts, configurations, or sensitive information.",
      icon: <LockIcon className="w-8 h-8 text-slate-600" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
      tag: "Coming Soon",
      tagColor: "bg-amber-500 text-white"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-4">
            <ClockIcon className="w-4 h-4 mr-2" />
            Continuous Testing Validation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Test in a Controlled, Real-World Simulation
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Run comprehensive simulations of real-world interactions with our
            combined agent suite. Test your AI before launch and monitor
            performance while live with periodic reports to ensure continuous
            quality and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className={`rounded-xl ${agent.color} border ${agent.borderColor} p-6 transition-all hover:shadow-lg relative overflow-hidden group`}
              id={`pi51ci_${index}`}
            >
              <div className="absolute top-0 right-0" id={`fj8syn_${index}`}>
                <div
                  className={`px-3 py-1 text-xs font-medium ${agent.tagColor} rounded-bl-lg`}
                  id={`ugzsid_${index}`}
                >
                  {agent.tag}
                </div>
              </div>

              <div
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700 shadow-sm inline-block mb-4"
                id={`a7qx59_${index}`}
              >
                {agent.icon}
              </div>

              <h3
                className="text-xl font-semibold text-slate-900 dark:text-white mb-3"
                id={`cv04cd_${index}`}
              >
                {agent.title}
              </h3>
              <p
                className="text-slate-600 dark:text-slate-300"
                id={`zd99qk_${index}`}
              >
                {agent.description}
              </p>

              <div
                className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                id={`qzsjir_${index}`}
              >
                <button
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 flex items-center"
                  id={`j9hx9j_${index}`}
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id={`l80pwz_${index}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                      id={`s91mt8_${index}`}
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
