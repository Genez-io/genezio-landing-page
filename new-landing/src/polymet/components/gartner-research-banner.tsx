import React from "react";
import { BookOpenIcon, ExternalLinkIcon } from "lucide-react";

export function GartnerResearchBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 border-y border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start space-x-6 lg:space-x-8">
          {/* Research Icon */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center shadow-sm">
              <BookOpenIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-200 border border-blue-200/50 dark:border-blue-700/50">
                Gartner Research Insight
              </span>
            </div>

            <blockquote className="text-lg lg:text-xl text-slate-800 dark:text-slate-200 leading-relaxed mb-6 font-medium italic border-l-4 border-blue-500 pl-6 bg-white/50 dark:bg-slate-800/30 rounded-r-lg py-4 pr-6">
              "Gartner warns that the main risks to monitor when implementing
              chatbots are{" "}
              <strong>lack of transparency, accuracy and bias</strong>. While
              Gartner's key best practice for increasing trust in AI chatbots is
              <strong> comprehensive testing</strong>, they advise setting up
              processes and guardrails by validating results and continually
              testing for the model going off course."
            </blockquote>

            {/* Source Link */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Source:
              </span>
              <a
                href="https://www.gartner.com/en/information-technology/topics/ai-strategy-for-business?_its=JTdCJTIydmlkJTIyJTNBJTIyMWYxNjUwNTktYTdiMy00MjczLThmOGMtZThjYzc0NmFjMjViJTIyJTJDJTIyc3RhdGUlMjIlM0ElMjJybHR%2BMTcyNTEwOTE1N35sYW5kfjJfMTY0NjZfcmVmXzRjN2Y0ZTA5MGQ2ZmVhMWY1Yjk2NmQwM2EwMGM5Y2RjJTIyJTJDJTIyc2l0ZUlkJTIyJTNBNDAxMzElN0Q%3D&utm_campaign=SM_GB_YOY_GTR_SOC_SF1_SM-SWG-CP-GTS-IT&utm_content=Gartner&utm_medium=social&utm_term=1724180897"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-200 font-semibold hover:underline"
              >
                <span>Gartner Research Report</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
