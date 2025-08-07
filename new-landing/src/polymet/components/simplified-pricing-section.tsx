import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRightIcon, BarChart3Icon, StarIcon } from "lucide-react";

export function SimplifiedPricingSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Whether you need brand presence optimization or complete chatbot
            optimization, we have the right solution for you
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Brand Presence Tool */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-blue-300 dark:hover:border-blue-600">
            <div className="p-8">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center">
                  <BarChart3Icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Brand Presence Tool
                </h3>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    $499
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">
                    per month
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400">
                  Perfect for companies looking to boost their brand presence
                  across AI platforms
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3 mb-8">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ Monitor ChatGPT, Claude, and Gemini
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ Brand consistency optimization
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ Monthly comprehensive reports
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ Real-time brand mention tracking
                </div>
              </div>

              {/* CTA */}
              <Link to="/brand-presence">
                <Button className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0">
                  Learn More
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Full Platform */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl border-2 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>

            <div className="p-8">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center">
                  <StarIcon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Complete Chatbot Optimization
                </h3>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    Custom
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">
                    pricing
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400">
                  Enterprise-grade solution for maximizing chatbot performance
                  and ROI
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3 mb-8">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ Advanced AI testing scenarios
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ Real-time monitoring & alerts
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ Custom compliance monitoring
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ Priority support & training
                </div>
              </div>

              {/* CTA */}
              <Link to="/chatbot-optimization">
                <Button className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0">
                  Learn More
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Not sure which solution is right for you?
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
