import React, { useState, useEffect } from "react";
import { ShieldCheckIcon, ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const aiTypes = [
    "AI Customer Service",
    "Conversational AI",
    "Functional AI",
    "AI Assistants",
    "AI-Powered Workflows",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTypeIndex((prevIndex) => (prevIndex + 1) % aiTypes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCtaSection = () => {
    const ctaSection = document.getElementById("vhgjz6");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCtaSectionWithDemo = () => {
    const ctaSection = document.getElementById("vhgjz6");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
      // Find the demo button in the CTA section and click it
      const demoButton = document.getElementById("ep2c5j");
      if (demoButton) {
        demoButton.click();
      }
    }
  };

  return (
    <section
      className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-900"
      id="dropgj"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0" id="5dhvah">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
          id="c0ip8n"
        ></div>
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-purple-300/10 dark:bg-purple-700/10 rounded-full filter blur-3xl"
          id="m0ymok"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-300/10 dark:bg-indigo-700/10 rounded-full filter blur-3xl"
          id="s2zbzp"
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" id="s33n6g">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          id="vuxjpo"
        >
          <div className="flex-1 max-w-2xl" id="cc7u0j">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6"
              id="v2u7bi"
            >
              <ShieldCheckIcon className="w-4 h-4 mr-2" id="jy26m5" />
              Enterprise AI Safety & Compliance
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
              id="02fvfi"
            >
              Building Trust in{" "}
              <span
                className="text-purple-600 dark:text-purple-400 inline-block min-w-[300px] transition-all duration-2000 ease-in-out"
                id="rkykp1"
              >
                {aiTypes[currentTypeIndex]}
              </span>{" "}
              <br id="fg6xn9" />
              <span className="text-slate-900 dark:text-white" id="wuwb7u">
                for Enterprises
              </span>
            </h1>
            <p
              className="text-xl text-slate-600 dark:text-slate-300 mb-8"
              id="ks1ehx"
            >
              Real-world simulation, evaluation, and audit for Gen AI agents.
              Automated testing with complex scenarios for functionality,
              performance, security, and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" id="prta6p">
              <button
                className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                id="sx5xok"
                onClick={scrollToCtaSection}
              >
                Try for free
              </button>
              <button
                className="px-6 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-purple-600 dark:hover:border-purple-500 text-slate-900 dark:text-white font-medium transition-colors flex items-center justify-center"
                id="8gpm26"
                onClick={scrollToCtaSectionWithDemo}
              >
                Schedule a Demo
                <ArrowRightIcon className="ml-2 w-4 h-4" id="ugbjr6" />
              </button>
            </div>
          </div>
          <div className="flex-1 max-w-xl" id="4suht6">
            <div className="relative" id="ogvlvc">
              <img
                src="https://assets.polymet.ai/glamorous-emerald-618258"
                alt="AI Agents Dashboard"
                className="w-full h-auto rounded-lg shadow-xl z-10 relative scale-110 brightness-110 contrast-110"
                id="h2orvv"
              />

              <div
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-purple-600 dark:border-purple-500 rounded-lg z-0"
                id="of0a8r"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
