import { Button } from "@/components/ui/button";
import {
  TrendingUpIcon,
  SparklesIcon,
  MessageSquareIcon,
  BarChart3Icon,
  CalendarIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export function ConversionHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#050506] pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <TrendingUpIcon className="w-4 h-4 text-blue-400" />

              <span className="text-blue-400 text-xs sm:text-sm font-medium">
                Increase Conversion
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Optimize Your AI Agent's{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Conversations
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Analyze real conversations your AI agent has with customers.
              Classify, extract insights, and test improvements before
              deployment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-6 text-base font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25">
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Analyze My Conversations
                </Button>
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200"
                >
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual - Homepage AI Agent Simulation */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[500px] flex flex-col">
            {/* Browser Chrome */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />

                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />

                <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <p className="text-xs text-white/60">acmecompany.com</p>
              </div>
            </div>

            {/* Homepage Content */}
            <div className="flex-1 bg-white/[0.02] border border-white/10 rounded-xl p-4 sm:p-6 mb-4 relative overflow-visible">
              {/* Simulated Homepage */}
              <div className="space-y-4">
                <div className="h-8 w-48 bg-white/10 rounded" />

                <div className="h-4 w-full bg-white/5 rounded" />

                <div className="h-4 w-3/4 bg-white/5 rounded" />

                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="h-20 bg-white/5 rounded" />

                  <div className="h-20 bg-white/5 rounded" />

                  <div className="h-20 bg-white/5 rounded" />
                </div>
              </div>

              {/* AI Agent Chat Widget */}
              <div className="absolute bottom-4 right-4 w-[280px] sm:w-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm px-4 py-3 border-b border-blue-500/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <SparklesIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        AI Assistant
                      </div>
                      <div className="text-xs text-white/70">Online</div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                  {/* Agent Message */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-3 h-3 text-blue-400" />
                    </div>
                    <div className="bg-white/10 border border-white/20 rounded-lg rounded-tl-sm px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-white">
                        Hi! How can I help you today?
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start gap-2 flex-row-reverse">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquareIcon className="w-3 h-3 text-white/60" />
                    </div>
                    <div className="bg-blue-600/40 border border-blue-500/30 rounded-lg rounded-tr-sm px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-white">
                        What pricing plans do you offer?
                      </p>
                    </div>
                  </div>

                  {/* Agent Response with Analysis */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-3 h-3 text-blue-400" />
                    </div>
                    <div className="bg-white/10 border border-white/20 rounded-lg rounded-tl-sm px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-white">
                        We have three plans: Starter, Pro, and Enterprise...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="px-4 pb-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent text-xs text-white placeholder:text-white/40 outline-none"
                      disabled
                    />

                    <MessageSquareIcon className="w-4 h-4 text-white/40" />
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
