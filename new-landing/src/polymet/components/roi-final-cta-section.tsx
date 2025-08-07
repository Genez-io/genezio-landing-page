import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  PlayIcon,
  TrendingUpIcon,
  DollarSignIcon,
  ShieldCheckIcon
} from "lucide-react";
import { DemoBookingModal } from "@/polymet/components/demo-booking-modal";

export function RoiFinalCtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const stats = [
    {
      icon: TrendingUpIcon,
      value: "+25%",
      label: "Average Lead Increase",
      color: "text-green-400"
    },
    {
      icon: DollarSignIcon,
      value: "$2.3M",
      label: "Revenue Generated",
      color: "text-blue-400"
    },
    {
      icon: ShieldCheckIcon,
      value: "99.8%",
      label: "Compliance Rate",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.2),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse" />

      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/10 rounded-full animate-pulse" />

      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              The Future is Conversational.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Lead the Dialogue.
              </span>
            </h2>

            <div className="mb-8">
              <p className="text-xl lg:text-xl text-slate-300 max-w-5xl mx-auto leading-relaxed mb-6">
                The relationship between brands and customers is undergoing a
                fundamental shift. Every interaction, from initial discovery to
                final purchase, is becoming a conversation mediated by AI.
                Winning in this new era means ensuring every single one of these
                dialogues—whether on public platforms or your own channels—is
                accurate, on-brand, and drives results.
              </p>
              <p className="text-xl lg:text-xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
                For leaders ready to own the entire conversational journey, our
                core platform offers the next level of command. We provide the
                independent testing and analytics to transform any LLM powered
                chatbots from simple tools into high-performance assets that
                maximize conversions and ROI.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-semibold text-slate-200 mb-4">
                Ready to Perfect Your Owned AI?
              </h3>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6">
                If you have a chatbot, our core platform provides the
                independent testing and evaluation to turn it into a
                revenue-driving machine.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 px-12 py-4 text-xl font-semibold group shadow-2xl shadow-blue-500/25"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Book a Demo
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-4 text-xl font-semibold group bg-transparent"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Explore the Genezio ROI Platform
            </Button>
          </div>
        </div>

        {/* Bottom Visual Element */}
        <div className="mt-16 relative">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400">Week 1</div>
                <div className="text-slate-300">
                  Initial optimization insights
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">Month 1</div>
                <div className="text-slate-300">
                  Measurable ROI improvements
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">
                  Month 3
                </div>
                <div className="text-slate-300">
                  Optimization potential unlocked
                </div>
              </div>
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
