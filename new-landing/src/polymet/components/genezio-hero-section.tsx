import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, TrendingUpIcon, SearchIcon } from "lucide-react";

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export function GenezioHeroSection() {
  const platforms = ["ChatGPT", "Perplexity", "Claude", "Gemini"];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [brandUrl, setBrandUrl] = useState<string>("")

  useEffect(() => {
    const currentPlatform = platforms[currentPlatformIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentPlatform.length) {
          setDisplayedText(currentPlatform.slice(0, displayedText.length + 1));
          setTypingSpeed(150);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
          setTypingSpeed(75);
        } else {
          // Finished deleting, move to next platform
          setIsDeleting(false);
          setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPlatformIndex, typingSpeed, platforms]);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();

    const rawInput = brandUrl.trim();
    if (!rawInput) return;

    
    let parsed: URL;
    try {
      parsed = new URL(rawInput);
    } catch {
      try {
        parsed = new URL(`http://${rawInput}`);
      } catch {
        return;
      }
    }

    const hostname = parsed.hostname.replace(/^www\./i, "");
    const brandName = hostname.split(".")[0] || hostname;

    const redirectUrl = new URL("https://app.genezio.ai/sign-up");
    redirectUrl.searchParams.set("brandUrl", rawInput);
    redirectUrl.searchParams.set("brandName", brandName);

    window.location.assign(redirectUrl.toString());
  };

  return (
    <>
      <Helmet>
        <title>Make ChatGPT Talk About Your Brand in AI | Genezio</title>
        <meta
          name="description"
          content="Genezio helps you understand, monitor & optimize your brand's presence in AI. Analyze visibility, track competitors & shape your narrative. Book a demo!"
        />
      </Helmet>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Floating particles in background */}
        <div className="absolute inset-0 overflow-hidden pb-20">
          {/* Purple/orange particles scattered */}
          <div
            className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-[#C084FC] rounded-full animate-pulse"
            style={{ animationDuration: "3s" }}
          />

          <div
            className="absolute top-[25%] right-[15%] w-1 h-1 bg-[#C084FC]/60 rounded-full animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "0.5s" }}
          />

          <div
            className="absolute top-[35%] left-[20%] w-1 h-1 bg-[#C084FC]/40 rounded-full animate-pulse"
            style={{ animationDuration: "5s", animationDelay: "1s" }}
          />

          <div
            className="absolute top-[45%] right-[25%] w-1.5 h-1.5 bg-[#C084FC]/50 rounded-full animate-pulse"
            style={{ animationDuration: "3.5s", animationDelay: "1.5s" }}
          />

          <div
            className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-[#C084FC]/30 rounded-full animate-pulse"
            style={{ animationDuration: "4.5s", animationDelay: "2s" }}
          />

          <div
            className="absolute bottom-[20%] right-[20%] w-1.5 h-1.5 bg-[#C084FC]/70 rounded-full animate-pulse"
            style={{ animationDuration: "3s", animationDelay: "0.8s" }}
          />

          <div
            className="absolute top-[50%] left-[50%] w-1 h-1 bg-[#C084FC]/50 rounded-full animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1.2s" }}
          />

          <div
            className="absolute top-[60%] right-[35%] w-1 h-1 bg-[#C084FC]/40 rounded-full animate-pulse"
            style={{ animationDuration: "5s", animationDelay: "0.3s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight">
            <span className="text-white">
              Make{" "}
              <span className="inline-block text-center">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
            <br />

            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-[#C084FC] bg-clip-text text-transparent font-extrabold">
              talk about your brand.
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Genezio helps you understand, monitor,
            and optimize <br /> how AI mentions your brand.
          </p>

          <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4">
          <form
            onSubmit={handleAnalyze}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                inputMode="url"
                autoCapitalize="none"
                autoCorrect="off"
                placeholder="Enter your website URL (e.g., example.com)"
                value={brandUrl}
                onChange={(e) => setBrandUrl(e.target.value)}
                className="w-full pl-12 pr-4 py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl focus:bg-white/15 focus:border-blue-400/50 transition-all"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!brandUrl.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-6 font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap sm:w-auto w-full"
            >
                <>
                  <TrendingUpIcon className="w-5 h-5 mr-2" />
                  Get Free Analysis
                </>
            </Button>
          </form>
        </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
            <a target="_blank" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/20 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 w-full"
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </a>
          </div>

          <p className="text-sm text-gray-500 font-medium">
            The Future is Conversational —{" "}
            <span className="text-blue-400 font-semibold">Lead it.</span>
          </p>
        </div>
      </section>
    </>
  );
}
