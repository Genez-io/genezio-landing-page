import React, { useState } from "react";
import {
  RocketIcon,
  CalendarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "lucide-react";

export function CtaSection() {
  const [formType, setFormType] = useState<"scan" | "demo">("scan");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleScanClick = () => {
    setFormType("scan");
    setIsSubmitted(false);
  };

  const handleDemoClick = () => {
    setFormType("demo");
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20" id="vhgjz6">
      <div className="container mx-auto px-4 md:px-6" id="0l1ulv">
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900"
          id="irnsb1"
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden" id="3h8edl">
            <div
              className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full"
              id="xtwyqw"
            ></div>
            <div
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full"
              id="5kwa0n"
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-500/5 to-transparent"
              id="ng5g7i"
            ></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16" id="j0w4qc">
            <div
              className="grid md:grid-cols-2 gap-12 items-center"
              id="6sedgj"
            >
              <div id="67n889">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  id="waimvo"
                >
                  Make your AI Agent trustworthy. Get a free report in 24 hours!
                </h2>
                <p className="text-xl text-slate-300 mb-8" id="o110ww">
                  Our AI simulations evaluate your agent directly from your
                  website. For internal AI applications, book a demo to explore
                  our comprehensive testing solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4" id="yxr91i">
                  <button
                    className={`px-6 py-3 rounded-lg ${
                      formType === "scan"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600"
                    } text-white font-medium transition-colors flex items-center justify-center`}
                    id="mxclmj"
                    onClick={handleScanClick}
                  >
                    <RocketIcon className="mr-2 w-5 h-5" id="t09k5d" />
                    Try for Free
                  </button>
                  <button
                    className={`px-6 py-3 rounded-lg ${
                      formType === "demo"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600"
                    } text-white font-medium transition-colors flex items-center justify-center`}
                    id="ep2c5j"
                    onClick={handleDemoClick}
                  >
                    <CalendarIcon className="mr-2 w-5 h-5" id="zdepg7" />
                    Schedule a Demo
                  </button>
                </div>
              </div>

              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300"
                id="qmyxl9"
              >
                {!isSubmitted ? (
                  <>
                    <h3
                      className="text-xl font-semibold text-white mb-6"
                      id="t7d9bl"
                    >
                      {formType === "scan"
                        ? "Test Your AI for Free"
                        : "Book a Comprehensive Demo"}
                    </h3>

                    <form
                      className="space-y-4"
                      id="vqiiyl"
                      onSubmit={handleSubmit}
                    >
                      <div id="s8erhu">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-300 mb-1"
                          id="vpvrof"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div id="h5htvf">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-300 mb-1"
                          id="gnoxdf"
                        >
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                          placeholder="you@company.com"
                          required
                        />
                      </div>

                      <div id="6q9djl">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-slate-300 mb-1"
                          id="cdkd3i"
                        >
                          {formType === "scan"
                            ? "AI Agent URL"
                            : "Company Name"}
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                          placeholder={
                            formType === "scan"
                              ? "https://your-ai-url.com"
                              : "Your company name"
                          }
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors flex items-center justify-center"
                        id="gvvccq"
                      >
                        {formType === "scan"
                          ? "Get My Free AI Report"
                          : "Book a Demo"}
                        <ArrowRightIcon className="ml-2 w-4 h-4" id="xvq3o4" />
                      </button>
                    </form>
                  </>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center text-center py-8"
                    id="9b4xz2"
                  >
                    <div
                      className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                      id="vmtv3w"
                    >
                      <CheckCircleIcon
                        className="w-10 h-10 text-green-500"
                        id="s0rxu3"
                      />
                    </div>
                    <h3
                      className="text-2xl font-bold text-white mb-4"
                      id="pcyet4"
                    >
                      {formType === "scan"
                        ? "Test Request Submitted!"
                        : "Demo Request Received!"}
                    </h3>
                    <p className="text-slate-300 mb-6" id="os94du">
                      {formType === "scan"
                        ? "Thank you for your submission. We'll analyze your AI chat and send you a detailed report within 24 hours."
                        : "Thank you for your interest. Our team will contact you shortly to schedule your personalized demo."}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                      id="q6nkgc"
                    >
                      Submit another request
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
