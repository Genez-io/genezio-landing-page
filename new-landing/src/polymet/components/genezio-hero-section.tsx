import { Button } from "@/components/ui/button";
import { PlayCircleIcon } from "lucide-react";
import { useState, useEffect } from "react";
import chatgptLogo from "@/assets/chatgpt-icon.svg";
import claudeLogo from "@/assets/claude-icon.svg";
import geminiLogo from "@/assets/gemini-icon.svg";
import perplexityLogo from "@/assets/perplexity-icon.svg";

export function GenezioHeroSection() {
  const platforms = [
    {
      name: "ChatGPT",
      logo: chatgptLogo,
    },
    {
      name: "Perplexity",
      logo: perplexityLogo,
    },
    {
      name: "Claude",
      logo: claudeLogo,
    },
    {
      name: "Gemini",
      logo: geminiLogo,
    },
  ];

  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Wait for fade out, then change platform and fade in
      setTimeout(() => {
        setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
        setIsVisible(true);
      }, 500);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [platforms.length]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#050506] pt-32 pb-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight flex flex-col items-center md:block">
          <span className="text-white block md:inline">Get recommended by </span>
          <span
            className="text-white transition-all duration-500 inline-flex items-center justify-center gap-3 min-w-[200px] md:min-w-[260px] mt-2 md:mt-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            <img
              src={platforms[currentPlatformIndex].logo}
              alt={platforms[currentPlatformIndex].name}
              className="h-8 w-8 object-contain"
            />
            <span>{platforms[currentPlatformIndex].name}</span>
          </span>
        </div>

        <h1 className="text-base md:text-lg text-gray-400 max-w-2xl mx-6 md:mx-[180px] mb-10 leading-relaxed">
          Track how AI engines see your brand and optimize your presence to win
          more recommendations.
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
            window.open("https://app.genezio.ai/brand-report/49/Natwest?demo=account", "_blank")
          }
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium group"
        >
          <PlayCircleIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
          Try Interactive Demo
        </button>
      </div>
    </section>
  );
}
