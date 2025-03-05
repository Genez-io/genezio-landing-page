'use client';

import React, { useState } from "react";
import {
  RocketIcon,
  CalendarIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  GlobeIcon,
  ServerIcon,
} from "lucide-react";

export function CtaSection() {
  const [formType, setFormType] = useState<"scan" | "demo">("scan");

  const handleScanClick = () => {
    setFormType("scan");
  };

  const handleDemoClick = () => {
    setFormType("demo");
  };

  // Additional information moved from verticals section
  const additionalInfo = [
    {
      title: "Enterprise-Grade Security",
      description:
        "Our platform is built with security-first architecture, ensuring your data and AI systems are protected at every level.",
      icon: (
        <ServerIcon
          className="w-6 h-6 text-purple-600 dark:text-purple-400"
        />
      ),
    },
    {
      title: "Global Compliance Framework",
      description:
        "Stay compliant with regional and industry-specific regulations with our comprehensive compliance testing suite.",
      icon: (
        <GlobeIcon
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
        />
      ),
    },
    {
      title: "Enterprise Integration",
      description:
        "Seamlessly integrate with your existing enterprise systems and workflows for efficient AI deployment and monitoring.",
      icon: (
        <BriefcaseIcon
          className="w-6 h-6 text-green-600 dark:text-green-400"
        />
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900"
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full"
            ></div>
            <div
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full"
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-500/5 to-transparent"
            ></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                  Ensure your AI Chat is Secure & Compliant - Get a Free Scan in
                  24 Hours!
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Our free AI scan tests your chat directly on your website. For
                  internal AI applications, book a demo to learn more about our
                  comprehensive testing solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className={`px-6 py-3 rounded-lg ${
                      formType === "scan"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600"
                    } text-white font-medium transition-colors flex items-center justify-center`}
                    onClick={handleScanClick}
                  >
                    <RocketIcon className="mr-2 w-5 h-5" />
                    Scan for Free
                  </button>
                  <button
                    className={`px-6 py-3 rounded-lg ${
                      formType === "demo"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600"
                    } text-white font-medium transition-colors flex items-center justify-center`}
                    onClick={handleDemoClick}
                  >
                    <CalendarIcon className="mr-2 w-5 h-5" />
                    Schedule a Demo
                  </button>
                </div>
              </div>

              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold text-white mb-6"
                >
                  {formType === "scan"
                    ? "Scan Your AI for Free"
                    : "Book a Comprehensive Demo"}
                </h3>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      {formType === "scan" ? "Company Website" : "Company Name"}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder={
                        formType === "scan"
                          ? "https://your-website.com"
                          : "Your company name"
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors flex items-center justify-center"
                  >
                    {formType === "scan"
                      ? "Get My Free AI Scan"
                      : "Book a Demo"}
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3
            className="text-2xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Trusted by Forward-Thinking Enterprises
          </h3>

          {/* Additional information moved from verticals section */}
          <div className="grid md:grid-cols-3 gap-8 mt-10 mb-12">
            {additionalInfo.map((info, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-lg"
                id={`02zv0q_${index}`}
              >
                <div
                  className="flex flex-col items-center text-center"
                  id={`6te8dl_${index}`}
                >
                  <div
                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 mb-4"
                    id={`f4hdr9_${index}`}
                  >
                    {info.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold text-slate-900 dark:text-white mb-3"
                    id={`ap2pw7_${index}`}
                  >
                    {info.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-300"
                    id={`lzw5og_${index}`}
                  >
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
