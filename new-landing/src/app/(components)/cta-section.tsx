"use client";

import React, { useState } from "react";
import { RocketIcon, CalendarIcon, CheckCircleIcon } from "lucide-react";
import ZohoTestForFreeForm from "./ZohoTestForFreeForm";
import ZohoDemoForm from "./ZohoDemoForm";

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

  return (
    <section className="py-20" id="contact-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-500/5 to-transparent"></div>
          </div>
          <div className="relative z-10 p-8 md:p-12 lg:p-16" id="cta-buttons">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Make your AI Agent trustworthy. Get a free report in 24 hours!
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Our AI simulations evaluate your agent directly from your
                  website. For internal AI applications, book a demo to explore
                  our comprehensive testing solutions.
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
                    Try for Free
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

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-xl font-semibold text-white mb-6">
                      {formType === "scan"
                        ? "Test Your AI for Free"
                        : "Book a Comprehensive Demo"}
                    </h3>
                    {formType === "scan" ? (
                      <ZohoTestForFreeForm />
                    ) : (
                      <ZohoDemoForm />
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircleIcon className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {formType === "scan"
                        ? "Test Request Submitted!"
                        : "Demo Request Received!"}
                    </h3>
                    <p className="text-slate-300 mb-6">
                      {formType === "scan"
                        ? "Thank you for your submission. We'll analyze your AI chat and send you a detailed report within 24 hours."
                        : "Thank you for your interest. Our team will contact you shortly to schedule your personalized demo."}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
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
