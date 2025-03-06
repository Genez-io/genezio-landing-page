'use client';

import React, { useState } from "react";
import { ClipboardListIcon, PlayIcon, FileTextIcon } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Define",
      description:
        "Choose the required agents to participate as actors in the simulated environments.",
      icon: <ClipboardListIcon className="w-6 h-6" />,
      content: (
        <div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
        >
          <h4
            className="text-lg font-semibold text-slate-900 dark:text-white mb-4"
          >
            Ingest Data & Optimize AI Agents
          </h4>
          <div className="space-y-4">
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
              >
                1
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Seamlessly integrate text, files, and URLs into a structured
                  Knowledge Base.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
              >
                2
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Select from a suite of pre-trained validation agents tailored
                  for enterprise needs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
              >
                3
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Fine-tune agents by customizing their Knowledge Base, accuracy
                  thresholds, and validation parameters for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Simulate",
      description:
        "Launch simulations with multiple agents operating across different countries simultaneously.",
      icon: <PlayIcon className="w-6 h-6" />,
      content: (
        <div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
        >
          <h4
            className="text-lg font-semibold text-slate-900 dark:text-white mb-4"
          >
            Simulation in Action
          </h4>
          <div className="space-y-4">
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5"
              >
                1
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Choose the validation agents you want to include in your
                  simulation.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5"
              >
                2
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Design the simulated world by configuring the language, number
                  of parallel conversations, etc.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5"
              >
                3
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Run the simulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Monitor",
      description:
        "Receive one-time or periodic reports to identify and address emerging issues with each new release.",
      icon: <FileTextIcon className="w-6 h-6" />,
      content: (
        <div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
        >
          <h4
            className="text-lg font-semibold text-slate-900 dark:text-white mb-4"
          >
            Comprehensive Audit Reports
          </h4>
          <div className="space-y-4">
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
              >
                1
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Analyze detailed performance metrics and compliance scores.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
              >
                2
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Review identified vulnerabilities and failure points.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
              >
                3
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300">
                  Get actionable recommendations for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
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
            How does it work?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            A simple three-step process to ensure your AI agents are
            enterprise-ready
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-6 rounded-xl border transition-all ${
                activeStep === step.id
                  ? "bg-purple-50 border-purple-200 dark:bg-purple-900/30 dark:border-purple-800"
                  : "bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
              id={`pqm8w4_${index}`}
            >
              <div
                className="flex flex-col items-center text-center"
                id={`9gqyld_${index}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    activeStep === step.id
                      ? "bg-purple-100 text-purple-600 dark:bg-purple-800 dark:text-purple-300"
                      : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                  }`}
                  id={`ditv4m_${index}`}
                >
                  {step.icon}
                </div>
                <h3
                  className="text-xl font-semibold text-slate-900 dark:text-white mb-2"
                  id={`kh5rv9_${index}`}
                >
                  {step.title}
                </h3>
                <p
                  className="text-slate-600 dark:text-slate-300"
                  id={`zxt4t4_${index}`}
                >
                  {step.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="transition-all duration-300 ease-in-out">
          {steps[activeStep].content}
        </div>
      </div>
    </section>
  );
}
