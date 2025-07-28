import React from "react";
import { SearchIcon } from "lucide-react";

export function NoChatbotSection() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              No chatbot yet? No worries. Lets improve your brand presence
              across LLMs with conversational AI
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover how different teams can leverage AI testing to drive
              measurable business outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {/* Strategy 1: LLM Optimization */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-200 dark:border-blue-700">
                  <SearchIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                    LLM Presence Optimization
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Think SEO for LLMs - monitor and optimize your brand
                    presence across public language models
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  How it works:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-600 mt-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>We</strong> Monitor public LLMs and get tailored
                      insights on optimizing your brand presence
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-600 mt-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>You</strong> Implement required changes, generate
                      relevant content, use dashboards to monitor progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
