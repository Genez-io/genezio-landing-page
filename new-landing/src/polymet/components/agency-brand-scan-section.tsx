import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  SparklesIcon,
  BarChart3Icon,
  TrendingUpIcon,
  TargetIcon,
  LightbulbIcon,
} from "lucide-react";
import { useState } from "react";

export function AgencyBrandScanSection() {
  const [brandName, setBrandName] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    if (brandName.trim()) {
      setIsScanning(true);
      // Simulate scanning
      setTimeout(() => {
        setIsScanning(false);
        // In real implementation, this would trigger the scan
      }, 2000);
    }
  };

  return (
    <section className="relative py-12 md:py-24 bg-[#0E0E10] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">
                Free Brand Scan
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start with a free
              <br />
              <span className="text-blue-400">AI visibility scan</span>
              <br />
              for one client
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Insights into visibility, citations, and recommendations.
            </p>

            {/* Scan Input */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Input
                type="text"
                placeholder="Enter domain (e.g., nike.com, tesla.com, starbucks.com)"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleScan()}
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500"
              />

              <Button
                size="lg"
                onClick={handleScan}
                disabled={!brandName.trim() || isScanning}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 font-medium w-full sm:w-auto"
              >
                {isScanning ? (
                  <>
                    <SparklesIcon className="w-4 h-4 mr-2 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <SearchIcon className="w-4 h-4 mr-2" />
                    Scan Now
                  </>
                )}
              </Button>
            </div>

            {/* What You'll Get */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <BarChart3Icon className="w-5 h-5 text-blue-400" />
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

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUpIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    Citations
                  </div>
                  <div className="text-white/60 text-xs">Source analysis</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <TargetIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    Top keywords
                  </div>
                  <div className="text-white/60 text-xs">Top performing</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <LightbulbIcon className="w-5 h-5 text-blue-400" />
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
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 md:p-8">
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
                    <div className="text-3xl font-bold text-blue-400">87</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
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
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
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
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium">
                      best running shoes online under 300$
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium">
                      lightweight athletic sneakers for winter 2026
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium">
                      premium sportswear brands
                    </span>
                  </div>
                </div>

                {/* Insights */}
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <LightbulbIcon className="w-4 h-4 text-blue-400" />
                    <div className="text-blue-300 text-sm font-semibold">
                      34 insights found
                    </div>
                  </div>
                  <div className="text-white/70 text-xs">
                    Identified gaps in AI visibility for sustainable products
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
