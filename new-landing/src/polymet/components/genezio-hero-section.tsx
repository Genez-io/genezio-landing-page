import { Button } from "@/components/ui/button";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

export function GenezioHeroSection() {
  const share = [
    { name: "Your brand", value: 38, hl: true },
    { name: "Competitor A", value: 31, hl: false },
    { name: "Competitor B", value: 19, hl: false },
    { name: "Competitor C", value: 12, hl: false },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="text-sm text-emerald-400 font-medium">
                The enterprise AI visibility platform
              </span>
            </div>

            {/* H1: the buyer's question, answered in the same line */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-5 text-white">
              How do enterprise brands get recommended by AI?{" "}
              <span className="text-emerald-400">
                They measure it, fix it, and win it.
              </span>
            </h1>

            {/* Subheadline: the outcome */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-5 leading-snug">
              See how ChatGPT, Gemini, Perplexity and Google AI Overviews
              represent your brand across every market, then win more
              recommendations.
            </p>

            {/* Answer block: 40-60 word answer, above the fold */}
            <p className="text-base text-gray-400 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Genezio runs thousands of realistic buyer conversations across
              every major answer engine, shows exactly where you win or lose the
              recommendation, and gives your team the fixes and content to close
              the gap. Measured, diagnosed, and verified in one enterprise
              platform.
            </p>

            {/* Byline + last-updated stamp */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <img
                src="/authors/bogdan-ripa.webp"
                alt="Bogdan Ripa"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover border border-white/10"
              />
              <div className="text-left text-xs text-white/50 leading-tight">
                <a
                  href="/blog/author/bogdan-ripa/"
                  className="text-white/80 font-medium hover:text-emerald-400 transition-colors"
                >
                  Bogdan Ripa, Co-Founder &amp; CPO
                </a>
                <div>Last updated August 2026</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20"
                >
                  Book a Demo
                </Button>
              </a>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold px-6 py-6 rounded-lg transition-all"
                >
                  Talk to Sales
                </Button>
              </a>
            </div>
          </div>

          {/* Right: recommendation visual */}
          <div className="relative">
            <div className="absolute -inset-3 bg-emerald-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl">
              <div className="flex justify-end mb-4">
                <div className="bg-emerald-500/15 border border-emerald-500/25 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[88%]">
                  <p className="text-sm text-emerald-50">
                    "Which platform should we trust for this?"
                  </p>
                </div>
              </div>
              <div className="flex justify-start mb-5">
                <div className="bg-[#1C1C20]/70 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[92%]">
                  <p className="text-sm text-gray-200 leading-relaxed">
                    A few strong options stand out, with{" "}
                    <span className="text-white font-semibold bg-emerald-500/15 border border-emerald-500/30 rounded px-1.5 py-0.5">
                      Your brand
                    </span>{" "}
                    leading for most enterprise buyers.
                  </p>
                </div>
              </div>
              <div className="bg-[#050506]/60 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                    Share of recommendation
                  </span>
                  <span className="text-[11px] text-white/40">this month</span>
                </div>
                <div className="space-y-2.5">
                  {share.map((row, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span
                        className={`text-xs w-24 flex-shrink-0 ${
                          row.hl ? "text-white font-semibold" : "text-white/50"
                        }`}
                      >
                        {row.name}
                      </span>
                      <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            row.hl ? "bg-emerald-500" : "bg-white/20"
                          }`}
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-mono w-9 text-right flex-shrink-0 ${
                          row.hl ? "text-emerald-400" : "text-white/40"
                        }`}
                      >
                        {row.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
