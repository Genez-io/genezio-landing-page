import { Button } from "@/components/ui/button";
import { PlayCircleIcon, SparklesIcon, LinkIcon } from "lucide-react";
import { useState, useEffect } from "react";
import chatgptLogo from "@/assets/chatgpt-icon.svg";
import claudeLogo from "@/assets/claude-icon.svg";
import geminiLogo from "@/assets/gemini-icon.svg";
import perplexityLogo from "@/assets/perplexity-icon.svg";

export function GenezioHeroSection() {
  const platforms = [
    { name: "ChatGPT", logo: chatgptLogo },
    { name: "Perplexity", logo: perplexityLogo },
    { name: "Claude", logo: claudeLogo },
    { name: "Gemini", logo: geminiLogo },
  ];

  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [platforms.length]);

  const shareOfRecommendation = [
    { name: "Your brand", value: 38, highlight: true },
    { name: "Competitor A", value: 31, highlight: false },
    { name: "Competitor B", value: 19, highlight: false },
    { name: "Competitor C", value: 12, highlight: false },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-36 md:pb-28">
      {/* Background gradient + glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <SparklesIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                The GEO / AEO intelligence platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] text-white">
              Win the recommendation,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                not just the mention.
              </span>
            </h1>

            {/* Rotating engine line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-lg md:text-xl text-gray-300 mb-6">
              <span className="text-gray-400">Across</span>
              <span
                className="inline-flex items-center gap-2 font-semibold text-white transition-all duration-500 min-w-[130px] justify-center lg:justify-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(-8px)",
                }}
              >
                <img
                  src={platforms[currentPlatformIndex].logo}
                  alt={platforms[currentPlatformIndex].name}
                  className="h-6 w-6 object-contain"
                />
                {platforms[currentPlatformIndex].name}
              </span>
            </div>

            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Genezio runs thousands of realistic AI conversations to show how
              engines really see your brand — then gives you the content to win
              more recommendations. Because being mentioned isn't the same as
              being chosen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="default"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20"
                >
                  Book a Demo
                </Button>
              </a>
              <a href="https://app.genezio.ai/sign-up">
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold px-6 rounded-lg transition-all"
                >
                  Get Started
                </Button>
              </a>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://app.genezio.ai/brand-report/49/Natwest?demo=account",
                  "_blank"
                )
              }
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium group"
            >
              <PlayCircleIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              Try Interactive Demo
            </button>
          </div>

          {/* Right: product visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />

            {/* AI answer card */}
            <div className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl shadow-blue-500/5">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
                <img
                  src={platforms[currentPlatformIndex].logo}
                  alt={platforms[currentPlatformIndex].name}
                  className="h-5 w-5 object-contain transition-opacity duration-500"
                  style={{ opacity: isVisible ? 1 : 0.3 }}
                />
                <span className="text-white/60 text-xs font-medium">
                  AI answer · live monitoring
                </span>
              </div>

              {/* User question */}
              <div className="flex justify-end mb-4">
                <div className="bg-blue-500/15 border border-blue-500/25 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                  <p className="text-sm text-blue-100">
                    What's the best option for me?
                  </p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start mb-5">
                <div className="bg-[#1C1C20]/70 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[92%]">
                  <p className="text-sm text-gray-200 leading-relaxed">
                    A few strong choices stand out —{" "}
                    <span className="text-white font-semibold bg-emerald-500/15 border border-emerald-500/30 rounded px-1.5 py-0.5">
                      Your brand
                    </span>{" "}
                    leads for most buyers, with Competitor A and Competitor B as
                    alternatives.
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-[11px] text-white/40">
                    <LinkIcon className="w-3 h-3" />
                    <span>3 sources cited · yourbrand.com</span>
                  </div>
                </div>
              </div>

              {/* Share of recommendation */}
              <div className="bg-[#050506]/60 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                    Share of recommendation
                  </span>
                  <span className="text-[11px] text-white/40">this month</span>
                </div>
                <div className="space-y-2.5">
                  {shareOfRecommendation.map((row, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span
                        className={`text-xs w-24 flex-shrink-0 ${
                          row.highlight
                            ? "text-white font-semibold"
                            : "text-white/50"
                        }`}
                      >
                        {row.name}
                      </span>
                      <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            row.highlight
                              ? "bg-gradient-to-r from-blue-500 to-purple-500"
                              : "bg-white/20"
                          }`}
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-mono w-9 text-right flex-shrink-0 ${
                          row.highlight ? "text-blue-400" : "text-white/40"
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
