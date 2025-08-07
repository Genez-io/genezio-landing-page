import React from "react";
import {
  AlertCircleIcon,
  ClockIcon,
  DollarSignIcon,
  AlertTriangleIcon,
  MessageCircleIcon,
  GlobeIcon,
} from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <ClockIcon className="h-5 w-5 text-red-500" />,

      text: "Burned employee hours on repetitive tests",
    },
    {
      icon: <AlertCircleIcon className="h-5 w-5 text-red-500" />,

      text: "Delays in moving to the bug-fixing phase",
    },
    {
      icon: <AlertTriangleIcon className="h-5 w-5 text-red-500" />,

      text: "Risk of launching bots that fail in real conversations",
    },
    {
      icon: <MessageCircleIcon className="h-5 w-5 text-red-500" />,

      text: "Painful feedback loops with external contractors",
    },
    {
      icon: <GlobeIcon className="h-5 w-5 text-red-500" />,

      text: "Gaps in multilingual and omnichannel coverage",
    },
    {
      icon: <DollarSignIcon className="h-5 w-5 text-red-500" />,

      text: "Missed compliance risks (GDPR, brand tone, etc.)",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
            The UAT Challenge
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-white dark:to-slate-200 mb-6">
            Accelerate AI UAT Testing without Sacrificing Compliance or CX
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            For most enterprises and mid-market teams, AI agents enter a 2–3
            month bottleneck right before launch: user acceptance testing (UAT).
            It's manual, inefficient, and often incomplete.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-8 text-center">
            The Hidden Costs of Manual Testing:
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start p-5 bg-white dark:bg-slate-700 rounded-lg shadow-sm border-l-4 border-red-400 dark:border-red-500 hover:shadow-md transition-shadow duration-200"
              >
                <div className="mr-4 mt-1 bg-red-50 dark:bg-red-900/20 p-2 rounded-full">
                  {problem.icon}
                </div>
                <p className="text-slate-700 dark:text-slate-200 font-medium">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-red-50 to-red-50/50 dark:from-slate-700/80 dark:to-slate-700/50 border-l-4 border-red-500 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-slate-900 dark:text-white">
              Result: Weeks of delay, rising costs, and uncertain customer
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
