import {
    SparklesIcon,
    TrendingUpIcon,
    EyeIcon,
    ThumbsUpIcon,
  } from "lucide-react";
  
  export function GenezioAiTrafficSection() {
    return (
      <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0E0E10] to-[#0E0E10]" />
  
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <SparklesIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                The Hidden Traffic
              </span>
            </div>
  
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI traffic is already{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                double-digit percentage
              </span>{" "}
              of your total traffic
            </h2>
  
            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
              But it rarely shows up in analytics.
            </p>
          </div>
  
          {/* Conversation-style Content */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="space-y-6">
              {/* User Question - Left */}
              <div className="flex justify-start animate-in fade-in slide-in-from-left duration-700">
                <div className="max-w-[85%] bg-[#1C1C20]/60 border border-white/10 rounded-2xl rounded-tl-sm p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <span className="text-blue-400 text-sm font-semibold">Q</span>
                    </div>
                    <span className="text-white/50 text-sm">Marketing Team</span>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    Why don't we see AI traffic in Google Analytics?
                  </p>
                </div>
              </div>
  
              {/* AI Response - Right */}
              <div className="flex justify-end animate-in fade-in slide-in-from-right duration-700" style={{ animationDelay: "0.3s" }}>
                <div className="max-w-[85%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl rounded-tr-sm p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <SparklesIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-sm font-medium">AI Discovery Reality</span>
                  </div>
                  <div className="space-y-3 text-white/80 leading-relaxed">
                    <p>
                      When people ask an AI assistant for advice, they often receive a full answer and <span className="text-white font-medium">never click a link</span>.
                    </p>
                    <p>
                      Traditional analytics only capture a tiny fraction of interactions where your brand is discussed.
                    </p>
                    <p className="text-white/90 font-medium">
                      Many companies discover that conversations about their category inside AI systems are far larger than the visits they see in analytics.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* User Question - Left */}
              <div className="flex justify-start animate-in fade-in slide-in-from-left duration-700" style={{ animationDelay: "0.6s" }}>
                <div className="max-w-[85%] bg-[#1C1C20]/60 border border-white/10 rounded-2xl rounded-tl-sm p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <span className="text-blue-400 text-sm font-semibold">Q</span>
                    </div>
                    <span className="text-white/50 text-sm">Marketing Team</span>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    So if we're being mentioned, that's good, right?
                  </p>
                </div>
              </div>
  
              {/* AI Response - Right */}
              <div className="flex justify-end animate-in fade-in slide-in-from-right duration-700" style={{ animationDelay: "0.9s" }}>
                <div className="max-w-[85%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl rounded-tr-sm p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <ThumbsUpIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-sm font-medium">The Critical Difference</span>
                  </div>
                  <div className="space-y-3 text-white/80 leading-relaxed">
                    <p>
                      <span className="text-white font-medium">Visibility ≠ Recommendation</span>
                    </p>
                    <p>
                      A brand might be mentioned frequently but <span className="text-white font-medium">rarely recommended</span> when a user asks for the best option.
                    </p>
                    <div className="bg-[#0E0E10]/60 border border-white/10 rounded-xl p-4 mt-4">
                      <p className="text-white/90 font-semibold mb-2">
                        ⚠️ The worst position:
                      </p>
                      <p className="text-white/80">
                        High visibility but low recommendation means AI knows your brand exists but <span className="font-medium">prefers competitors</span>.
                      </p>
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
  