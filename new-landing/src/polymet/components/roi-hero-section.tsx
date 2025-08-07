import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlayIcon } from "lucide-react";
import { DemoBookingModal } from "@/polymet/components/demo-booking-modal";

export function RoiHeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                Enterprise AI Optimization
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Maximize Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Chatbot's ROI
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Genezio is an independent testing and evaluation platform that
                helps you optimize your chatbot and enhance the customer
                experience for your clients.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div
                  className="text-2xl font-bold text-green-400"
                  style={{ color: "#ffffff" }}
                >
                  +25%
                </div>
                <div className="text-sm text-slate-400">Lead Capture</div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl font-bold text-blue-400"
                  style={{ color: "#ffffff" }}
                >
                  10%
                </div>
                <div className="text-sm text-slate-400">Churn Reduction</div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl font-bold text-purple-400"
                  style={{ color: "#ffffff" }}
                >
                  85%
                </div>
                <div className="text-sm text-slate-400">
                  Accuracy in 3 Months
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 px-8 py-3 text-lg font-semibold group"
                onClick={() => {
                  const element = document.getElementById(
                    "chatbot-optimization-pricing-section"
                  );
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start Optimizing Today
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg font-semibold group bg-transparent"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Visual */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">
                  ROI Dashboard
                </h3>
              </div>

              {/* Metrics Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-sm text-slate-400 mb-1">
                    Revenue Generated
                  </div>
                  <div
                    className="text-2xl font-bold text-green-400"
                    style={{ color: "#f8fafc" }}
                  >
                    $127,450
                  </div>
                  <div className="text-xs text-green-400">
                    ↗ +18% this month
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-sm text-slate-400 mb-1">
                    Cost Savings
                  </div>
                  <div
                    className="text-2xl font-bold text-blue-400"
                    style={{ color: "#ffffff" }}
                  >
                    $89,230
                  </div>
                  <div
                    className="text-xs text-blue-400"
                    style={{ color: "#4ade80" }}
                  >
                    ↗ +12% this month
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-sm text-slate-400 mb-1">
                    Lead Conversion
                  </div>
                  <div
                    className="text-2xl font-bold text-purple-400"
                    style={{ color: "#ffffff" }}
                  >
                    34.2%
                  </div>
                  <div
                    className="text-xs text-purple-400"
                    style={{ color: "#4ade80" }}
                  >
                    ↗ +8.5% this month
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-sm text-slate-400 mb-1">
                    Deflection Rate
                  </div>
                  <div
                    className="text-2xl font-bold text-yellow-400"
                    style={{ color: "#ffffff" }}
                  >
                    78.9%
                  </div>
                  <div
                    className="text-xs text-yellow-400"
                    style={{ color: "#4ade80" }}
                  >
                    ↗ +5.2% this month
                  </div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <div className="text-sm text-slate-400 mb-3">
                  ROI Trend (Last 6 Months)
                </div>
                <div className="h-20 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded flex items-end justify-between px-2">
                  {[40, 55, 48, 70, 85, 92].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-blue-500 to-green-400 rounded-t"
                      style={{ height: `${height}%`, width: "12px" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              +$50K ROI
            </div>
          </div>
        </div>
      </div>

      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
}
