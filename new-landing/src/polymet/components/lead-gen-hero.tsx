import { Button } from "@/components/ui/button";
import {
  TrendingUpIcon,
  SparklesIcon,
  UserIcon,
  CalendarIcon,
  MessageSquareIcon,
  SearchIcon,
  LightbulbIcon,
  TargetIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Helmet } from "react-helmet";

export function LeadGenHero() {
  const topics = [
    {
      name: "Cloud Infrastructure",
      chatgpt: 245,
      claude: 189,
      gemini: 167,
      perplexity: 134,
    },
    {
      name: "Serverless Platform",
      chatgpt: 312,
      claude: 278,
      gemini: 234,
      perplexity: 198,
    },
    {
      name: "Backend Development",
      chatgpt: 189,
      claude: 156,
      gemini: 145,
      perplexity: 112,
    },
    {
      name: "API Management",
      chatgpt: 267,
      claude: 223,
      gemini: 201,
      perplexity: 167,
    },
  ];

  const aiEngines = [
    { name: "ChatGPT", color: "emerald", leads: 1013 },
    { name: "Claude", color: "teal", leads: 846 },
    { name: "Gemini", color: "cyan", leads: 747 },
    { name: "Perplexity", color: "blue", leads: 611 },
  ];

  return (
    <>
      {import.meta.env.SSR && (
        <Helmet>
        <title>Turn AI Conversations Into Qualified Leads | Genezio</title>
        <meta
          name="description"
          content="Monitor & optimize your brand's AI presence. Turn AI conversations into qualified leads with Genezio's actionable insights. Book a demo today!"
        />
        </Helmet>
      )}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#050506] pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <TrendingUpIcon className="w-4 h-4 text-emerald-400" />

                <span className="text-emerald-400 text-xs sm:text-sm font-medium">
                  Increase Lead Generation
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Turn{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Conversations
                </span>
                <br />
                Into Qualified Leads
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Monitor how AI platforms perceive and recommend your brand. Get actionable insights
                from AI conversations to optimize your visibility and capture more leads.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a href="/pricing" className="w-full sm:w-auto">
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-6 text-base font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25">
                
                    Start Monitoring
                  </Button>
                </a>
                <a target="_blank" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200"
                  >
                    
                    Book a Demo
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Visual - Lead Generation Flow */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 min-h-[500px] flex items-center justify-center">
              {/* Flow Visualization */}
              <div className="relative w-full max-w-lg space-y-8">
                {/* Step 2: Continuous Analysis Loop */}
                <div className="space-y-3">
                  <div className="relative flex items-center justify-center py-8">
                    {/* Circular Loop Container */}
                    <div className="relative w-48 h-48">
                      {/* Static Circle Border */}
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/30" />

                      {/* Center - Genezio Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500/40 rounded-2xl p-4 backdrop-blur-sm">
                          <div className="absolute inset-0 rounded-2xl bg-emerald-500/10" />

                          <div className="relative z-10 flex flex-col items-center gap-1">
                            <span className="text-base font-bold text-white text-center">
                              Your
                              <br />
                              Brand
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Orbiting Icons - Generate (Top) */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/40 flex items-center justify-center backdrop-blur-sm">
                          <MessageSquareIcon className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="text-center mt-1">
                          <span className="text-[10px] text-emerald-400/80 font-medium">
                            Generate
                          </span>
                        </div>
                      </div>

                      {/* Orbiting Icons - Analyze (Right) */}
                      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/30 to-cyan-500/30 border border-teal-500/40 flex items-center justify-center backdrop-blur-sm">
                          <SearchIcon className="w-5 h-5 text-teal-400" />
                        </div>
                        <div className="text-center mt-1">
                          <span className="text-[10px] text-teal-400/80 font-medium">Analyze</span>
                        </div>
                      </div>

                      {/* Orbiting Icons - Insights (Bottom) */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/40 flex items-center justify-center backdrop-blur-sm">
                          <LightbulbIcon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="text-center mt-1">
                          <span className="text-[10px] text-cyan-400/80 font-medium">Insights</span>
                        </div>
                      </div>

                      {/* Orbiting Icons - Optimize (Left) */}
                      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/40 flex items-center justify-center backdrop-blur-sm">
                          <TargetIcon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-center mt-1">
                          <span className="text-[10px] text-blue-400/80 font-medium">Optimize</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-gradient-to-b from-white/20 to-white/5" />

                    <ArrowRightIcon className="w-4 h-4 text-white/30 rotate-90" />
                  </div>
                </div>

                {/* Step 4: More Qualified Leads */}
                <div className="space-y-3">
                  <div className="grid grid-cols-8 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center"
                        style={{
                          animation: `pulse 2s ease-in-out ${i * 0.1}s infinite`,
                        }}
                      >
                        <UserIcon className="w-3 h-3 text-emerald-400" />
                      </div>
                    ))}
                  </div>
                  <div className="text-center pt-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <TrendingUpIcon className="w-4 h-4 text-emerald-400" />

                      <span className="text-sm font-semibold text-emerald-400">
                        +167% More Leads
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
