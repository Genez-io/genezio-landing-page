'use client';

import React from "react";
import { AlertTriangleIcon, AlertCircleIcon, BotIcon } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      title: "Stochastic Behavior & Control Issues",
      description:
        "Enterprises fear AI adoption due to stochastic behavior and lack of control over AI outputs.",
      icon: (
        <AlertTriangleIcon className="w-10 h-10 text-amber-500" />
      ),

      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
    },
    {
      title: "Data Governance & Hallucinations",
      description:
        "Inaccuracy is a top concern—70% of enterprises highlight data governance issues and AI hallucinations.",
      icon: <AlertCircleIcon className="w-10 h-10 text-red-500" />,
      color: "bg-white dark:bg-slate-800",
      borderColor: "border-slate-200 dark:border-slate-700",
    },
  ];

  const failures = [
    {
      company: "Air Canada",
      logo: "https://assets.polymet.ai/novel-blue-840736",
      description: "Fined for chatbot misinformation about refund policies",
      icon: (
        <img
          src="https://assets.polymet.ai/novel-blue-840736"
          alt="Air Canada"
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      company: "NYC Business Bot",
      logo: "https://unsplash.com/photos/the-empire-state-building-in-new-york-city-_EcnwVrVZ0w",
      description:
        "Advised users to break the law with incorrect permit information",
      icon: (
        <img
          src="https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=2624&auto=format&fit=crop"
          alt="NYC"
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      company: "McDonald's",
      logo: "https://assets.polymet.ai/sound-copper-253472",
      description: "AI kept adding 260+ orders of nuggets without validation",
      icon: (
        <img
          src="https://assets.polymet.ai/sound-copper-253472"
          alt="McDonald's"
          className="w-8 h-8 object-contain"
        />
      ),
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Why AI Systems Need Comprehensive Testing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Real-world AI failures demonstrate the critical need for thorough
            testing before and especially after each new release.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`rounded-xl ${problem.color} border ${problem.borderColor} p-6 shadow-md transition-all hover:shadow-lg`}
              id={`8yuqoc_${index}`}
            >
              <div className="flex items-start" id={`77q84u_${index}`}>
                <div
                  className="mr-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-700 shadow-sm"
                  id={`vtlqjq_${index}`}
                >
                  {problem.icon}
                </div>
                <div id={`m11fo3_${index}`}>
                  <h3
                    className="text-xl font-semibold text-slate-900 dark:text-white mb-2"
                    id={`qsqlqi_${index}`}
                  >
                    {problem.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-300"
                    id={`qcol1b_${index}`}
                  >
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
        >
          <div className="p-6 md:p-8">
            <h3
              className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center"
            >
              <BotIcon className="w-6 h-6 mr-2 text-purple-600" />
              Real-world AI Failures
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {failures.map((failure, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md"
                  id={`ngg1pm_${index}`}
                >
                  <div
                    className="flex items-center mb-4"
                    id={`uf7750_${index}`}
                  >
                    <div
                      className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden mr-3"
                      id={`q9ujiy_${index}`}
                    >
                      {failure.icon}
                    </div>
                    <h4
                      className="text-lg font-semibold text-slate-900 dark:text-white"
                      id={`ze6i3a_${index}`}
                    >
                      {failure.company}
                    </h4>
                  </div>
                  <p
                    className="text-slate-600 dark:text-slate-300"
                    id={`lbwdl0_${index}`}
                  >
                    {failure.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
