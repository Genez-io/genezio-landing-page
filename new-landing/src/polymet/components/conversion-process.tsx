import { MessageSquareIcon, BarChart3Icon, TrendingUpIcon } from "lucide-react";

export function ConversionProcess() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#0E0E10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Three Steps to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Higher Conversions
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our platform helps you understand, improve, and optimize every
            customer interaction
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <MessageSquareIcon className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-white">
                Analyze Conversations
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Classify and categorize real customer interactions to understand
                patterns and behaviors
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <BarChart3Icon className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-white">
                Extract Insights
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Discover patterns and improvement opportunities from your
                conversation data
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <TrendingUpIcon className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-white">
                Test & Optimize
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Generate test scenarios before going live to ensure optimal
                performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
