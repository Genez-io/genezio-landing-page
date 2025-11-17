import { Button } from "@/components/ui/button";
import {
  SparklesIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  StarIcon,
  CalendarIcon
} from "lucide-react";

export function CsatHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#050506] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <TrendingUpIcon className="w-4 h-4 text-purple-400" />

              <span className="text-purple-400 text-sm font-medium">
                Increase CSAT
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Support Team
              </span>{" "}
              Performance
            </h1>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Analyze customer support conversations, reduce escalations, and
              empower your agents with actionable scoring cards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/pricing" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25"
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Analyze Support Conversations
                </Button>
              </a>
              <a href="/pricing" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200"
                >
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
              </a>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Reduce Escalations
                  </h3>
                  <p className="text-sm text-white/60">
                    Improve first-contact resolution
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <StarIcon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Agent Scoring Cards
                  </h3>
                  <p className="text-sm text-white/60">
                    Personalized performance insights
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual - Scoring Card Preview */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />

            {/* Main Scoring Card */}
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Sarah Johnson
                  </h3>
                  <p className="text-sm text-white/60">
                    Support Agent • Team A
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-purple-400 mb-1">
                    94
                  </div>
                  <p className="text-xs text-white/60">Overall Score</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />

                    <p className="text-xs text-white/60">CSAT Score</p>
                  </div>
                  <p className="text-2xl font-bold text-white">4.8/5.0</p>
                  <p className="text-xs text-purple-400 mt-1">+0.3 this week</p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />

                    <p className="text-xs text-white/60">Escalation Rate</p>
                  </div>
                  <p className="text-2xl font-bold text-white">8%</p>
                  <p className="text-xs text-purple-400 mt-1">-4% this week</p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />

                    <p className="text-xs text-white/60">Avg Response Time</p>
                  </div>
                  <p className="text-2xl font-bold text-white">2.3m</p>
                  <p className="text-xs text-purple-400 mt-1">-0.5m faster</p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />

                    <p className="text-xs text-white/60">Resolution Rate</p>
                  </div>
                  <p className="text-2xl font-bold text-white">92%</p>
                  <p className="text-xs text-purple-400 mt-1">+5% this week</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg border border-white/20">
              <div className="flex items-center gap-2">
                <StarIcon className="w-4 h-4 fill-current" />

                <span className="text-sm font-semibold">Top Performer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
