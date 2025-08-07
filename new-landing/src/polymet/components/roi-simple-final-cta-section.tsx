import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { DemoBookingModal } from "@/polymet/components/demo-booking-modal";

export function RoiSimpleFinalCtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.2),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Ready to Maximize Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Chatbot ROI?
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of companies already optimizing their AI chatbots
              with Genezio's independent testing platform.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 px-12 py-4 text-xl font-semibold group shadow-2xl shadow-blue-500/25"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Book a Demo
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-4 text-xl font-semibold group bg-transparent"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Data Privacy & Compliance */}
          <div className="mt-16 pt-12 border-t-2 border-slate-600/70 max-w-4xl mx-auto bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-base font-semibold">
                  Your data is our priority
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-base font-semibold">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-base font-semibold">
                  SOC 2 Type II Certified
                </span>
              </div>
            </div>
            <p className="text-center text-slate-300 text-base mt-6 font-medium">
              Enterprise-grade security and privacy protection for your
              sensitive data
            </p>
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
