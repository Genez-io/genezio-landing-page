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
      icon: <ClipboardListIcon className="w-6 h-6" id="u6bt0t" />,

      content: (
        <div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
          id="lifnin"
        >
          <h4
            className="text-lg font-semibold text-slate-900 dark:text-white mb-4"
            id="t4kjmk"
          >
            Ingest Data & Optimize AI Agents
          </h4>
          <div className="space-y-4" id="n73cgv">
            <div className="flex items-start" id="a9gbgu">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
                id="ke1zvx"
              >
                1
              </div>
              <div id="wfpab9">
                <p className="text-slate-700 dark:text-slate-300" id="kentnn">
                  Seamlessly integrate text, files, and URLs into a structured
                  Knowledge Base.
                </p>
              </div>
            </div>
            <div className="flex items-start" id="97uo4b">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
                id="l2v2pf"
              >
                2
              </div>
              <div id="54mtgz">
                <p className="text-slate-700 dark:text-slate-300" id="hj4pav">
                  Select from a suite of pre-trained validation agents tailored
                  for enterprise needs.
                </p>
              </div>
            </div>
            <div className="flex items-start" id="hufsi0">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
                id="va7bdi"
              >
                3
              </div>
              <div id="3cnhpc">
                <p className="text-slate-700 dark:text-slate-300" id="5vb1uj">
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
      icon: <PlayIcon className="w-6 h-6" id="r8lt52" />,

      content: (
        <div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
          id="rnzbjh"
        >
          <h4
            className="text-lg font-semibold text-slate-900 dark:text-white mb-4"
            id="r1r244"
          >
            Simulation in Action
          </h4>
          <div className="space-y-4" id="knbk1t">
            <div className="flex items-start" id="wdqwch">
              <div
                className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5"
                id="lbuvkr"
              >
                1
              </div>
              <div id="12gqx2">
                <p className="text-slate-700 dark:text-slate-300" id="51z0j9">
                  Choose the validation agents you want to include in your
                  simulation.
                </p>
              </div>
            </div>
            <div className="flex items-start" id="ymo5np">
              <div
                className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5"
                id="pqdssq"
              >
                2
              </div>
              <div id="qoexgo">
                <p className="text-slate-700 dark:text-slate-300" id="vkeehp">
                  Design the simulated world by configuring the language, number
                  of parallel conversations, etc.
                </p>
              </div>
            </div>
            <div className="flex items-start" id="9m79h1">
              <div
                className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5"
                id="kwxmtn"
              >
                3
              </div>
              <div id="z0dcju">
                <p className="text-slate-700 dark:text-slate-300" id="bo8lxa">
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
      icon: <FileTextIcon className="w-6 h-6" id="b52axl" />,

      content: (
        <div
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
          id="r9llds"
        >
          <h4
            className="text-lg font-semibold text-slate-900 dark:text-white mb-4"
            id="w6t65c"
          >
            Comprehensive Audit Reports
          </h4>
          <div className="space-y-4" id="b4w8vt">
            <div className="flex items-start" id="zl5sdk">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
                id="61fb4w"
              >
                1
              </div>
              <div id="a5kr3j">
                <p className="text-slate-700 dark:text-slate-300" id="hycmeu">
                  Analyze detailed performance metrics and compliance scores.
                </p>
              </div>
            </div>
            <div className="flex items-start" id="6clfd5">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
                id="aqdqt4"
              >
                2
              </div>
              <div id="kw2zj7">
                <p className="text-slate-700 dark:text-slate-300" id="na92sm">
                  Review identified vulnerabilities and failure points.
                </p>
              </div>
            </div>
            <div className="flex items-start" id="6bwkcu">
              <div
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3 mt-0.5"
                id="12j9u8"
              >
                3
              </div>
              <div id="4925z1">
                <p className="text-slate-700 dark:text-slate-300" id="k0v915">
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
    <section className="py-20 bg-white dark:bg-slate-900" id="9ad0b3">
      <div className="container mx-auto px-4 md:px-6" id="zqr657">
        <div className="max-w-3xl mx-auto text-center mb-16" id="iuhazz">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            id="ztjm9p"
          >
            How does it work?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300" id="wnliim">
            A simple three-step process to ensure your AI agents are
            enterprise-ready
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12" id="hc1j9l">
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

        <div className="transition-all duration-300 ease-in-out" id="yl5u0d">
          {steps[activeStep].content}
        </div>
      </div>
    </section>
  );
}
