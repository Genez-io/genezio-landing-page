import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  BarChart3Icon,
  TrendingUpIcon,
  TargetIcon,
  LightbulbIcon,
} from "lucide-react";
import { useState } from "react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

export function AgencyBrandScanSection() {
  const [brandUrl, setBrandUrl] = useState("");
  const [highlightInput, setHighlightInput] = useState(false);

//   const handleScan = () => {
//     if (brandName.trim()) {
//       setIsScanning(true);
//       // Simulate scanning
//       setTimeout(() => {
//         setIsScanning(false);
//         // In real implementation, this would trigger the scan
//       }, 2000);
//     }
//   };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();

    if (!brandUrl.trim()) {
      setHighlightInput(true);
      setTimeout(() => setHighlightInput(false), 2000);
      return;
    }

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

    const redirectUrl = new URL("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC");
    // redirectUrl.searchParams.set("brandUrl", rawInput);
    redirectUrl.searchParams.set("brandName", brandName);

    window.location.assign(redirectUrl.toString());
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] px-6 md:px-8 lg:px-16">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <HeroEyebrow className="mb-6 w-fit">Free brand scan</HeroEyebrow>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start with a free
              <br />
              AI visibility scan
              <br />
              for one client
            </h2>

            <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed">
              Insights into visibility, citations, and recommendations.
            </p>



            {/* Scan Input */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Input
                type="text"
                placeholder="Enter brand name (e.g., Nike, Tesla, Starbucks)"
                value={brandUrl}
                onChange={(e) => {
                  setBrandUrl(e.target.value);
                  if (highlightInput) setHighlightInput(false);
                }}
                className={`flex-1 h-12 bg-white/5 text-white placeholder:text-white/40 rounded-xl transition-all ${
                  highlightInput
                    ? "border-2 border-emerald-400 ring-4 ring-emerald-400/30 animate-pulse"
                    : "border border-white/10 focus:border-white/20"
                }`}
              />

              <Button
                size="lg"
                onClick={handleAnalyze}
                className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 h-12 font-semibold rounded-xl transition-colors duration-200 w-full sm:w-auto"
              >
                    <SearchIcon className="w-4 h-4 mr-2" />
                    Scan Now
              </Button>
            </div>

            {/* What You'll Get */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0C] border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    Visibility score
                  </div>
                  <div className="text-white/60 text-xs">
                    AI presence metrics
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0C] border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUpIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    Citations
                  </div>
                  <div className="text-white/60 text-xs">Source analysis</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0C] border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <TargetIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    Top keywords
                  </div>
                  <div className="text-white/60 text-xs">Top performing</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0C] border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <LightbulbIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    Action plan
                  </div>
                  <div className="text-white/60 text-xs">Next steps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0C] p-6 md:p-8">
              {/* Mock Dashboard Preview */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="text-white/60 text-sm mb-1">
                      Brand Analysis
                    </div>
                    <div className="text-white font-bold text-xl">Nike</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 text-sm mb-1">
                      Visibility score
                    </div>
                    <div className="text-3xl font-bold text-emerald-400">87</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                      <div className="text-white/60 text-xs">
                        ChatGPT mentions
                      </div>
                    </div>
                    <div className="text-white font-bold text-2xl">247</div>
                    <div className="text-emerald-400 text-xs mt-1">
                      +24% vs last month
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div className="text-white/60 text-xs">
                        Perplexity coverage
                      </div>
                    </div>
                    <div className="text-white font-bold text-2xl">89%</div>
                    <div className="text-emerald-400 text-xs mt-1">
                      Across 50+ queries
                    </div>
                  </div>
                </div>

                {/* Top Keywords */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white/60 text-xs mb-3">Top keywords</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                      best running shoes online under 300$
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                      lightweight athletic sneakers for winter 2026
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                      premium sportswear brands
                    </span>
                  </div>
                </div>

                {/* Insights */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <LightbulbIcon className="w-4 h-4 text-emerald-400" />
                    <div className="text-white text-sm font-semibold">
                      34 insights found
                    </div>
                  </div>
                  <div className="text-white/70 text-xs">
                    Identified gaps in AI visibility for sustainable products
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-white/[0.04] blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
