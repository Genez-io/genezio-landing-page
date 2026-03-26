import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCartIcon,
  HeartPulseIcon,
  ShirtIcon,
  BuildingIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  MinusIcon,
  ArrowRightIcon,
  ZapIcon,
  BarChart2Icon,
  GlobeIcon,
  SparklesIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Link } from "react-router";
import { PolymetSEO } from "@/polymet/components/polymet-seo";

const PAGE_TITLE = "AI Visibility Industry Leaderboards | Genezio";
const PAGE_DESCRIPTION =
  "See which brands are winning AI search across UK industries. Real data from ChatGPT, Perplexity, Gemini & Claude.";

type Trend = "up" | "down" | "stable";

interface BrandEntry {
  rank: number;
  name: string;
  initials: string;
  color: string;
  visibility: number;
  chatgpt: number;
  perplexity: number;
  gemini: number;
  claude: number;
  trend: Trend;
  trendValue: number;
}

interface Industry {
  id: string;
  label: string;
  icon: any;
  location: string;
  url: string;
  brands: BrandEntry[];
}

const industries: Industry[] = [
  {
    id: "banking",
    label: "Banking",
    icon: BuildingIcon,
    location: "UK",
    url: "https://app.genezio.ai/brand-report/-49/Banking?demo=account",
    brands: [
      {
        rank: 1,
        name: "Barclays",
        initials: "BA",
        color: "#00AEEF",
        visibility: 87,
        chatgpt: 91,
        perplexity: 85,
        gemini: 88,
        claude: 84,
        trend: "up",
        trendValue: 4,
      },
      {
        rank: 2,
        name: "HSBC",
        initials: "HS",
        color: "#DB0011",
        visibility: 83,
        chatgpt: 88,
        perplexity: 80,
        gemini: 82,
        claude: 82,
        trend: "stable",
        trendValue: 0,
      },
      {
        rank: 3,
        name: "Lloyds",
        initials: "LL",
        color: "#006A4D",
        visibility: 79,
        chatgpt: 82,
        perplexity: 77,
        gemini: 80,
        claude: 77,
        trend: "up",
        trendValue: 2,
      },
      {
        rank: 4,
        name: "NatWest",
        initials: "NW",
        color: "#42145F",
        visibility: 74,
        chatgpt: 76,
        perplexity: 72,
        gemini: 75,
        claude: 73,
        trend: "down",
        trendValue: 3,
      },
      {
        rank: 5,
        name: "Santander",
        initials: "SA",
        color: "#EC0000",
        visibility: 68,
        chatgpt: 70,
        perplexity: 66,
        gemini: 68,
        claude: 68,
        trend: "up",
        trendValue: 1,
      },
      {
        rank: 6,
        name: "Halifax",
        initials: "HA",
        color: "#0076BE",
        visibility: 61,
        chatgpt: 63,
        perplexity: 59,
        gemini: 62,
        claude: 60,
        trend: "down",
        trendValue: 2,
      },
      {
        rank: 7,
        name: "Nationwide",
        initials: "NA",
        color: "#1B3D6E",
        visibility: 55,
        chatgpt: 57,
        perplexity: 53,
        gemini: 56,
        claude: 54,
        trend: "stable",
        trendValue: 0,
      },
    ],
  },
  {
    id: "retail",
    label: "Retail & Supermarkets",
    icon: ShoppingCartIcon,
    location: "UK",
    url: "https://app.genezio.ai/brand-report/-29/Retail%20&%20Supermarkets?demo=account",
    brands: [
      {
        rank: 1,
        name: "Tesco",
        initials: "TE",
        color: "#EE1C25",
        visibility: 91,
        chatgpt: 93,
        perplexity: 90,
        gemini: 91,
        claude: 90,
        trend: "up",
        trendValue: 3,
      },
      {
        rank: 2,
        name: "Sainsbury's",
        initials: "SA",
        color: "#FF7200",
        visibility: 84,
        chatgpt: 86,
        perplexity: 83,
        gemini: 84,
        claude: 83,
        trend: "stable",
        trendValue: 0,
      },
      {
        rank: 3,
        name: "Asda",
        initials: "AS",
        color: "#7DC242",
        visibility: 80,
        chatgpt: 83,
        perplexity: 78,
        gemini: 80,
        claude: 79,
        trend: "up",
        trendValue: 5,
      },
      {
        rank: 4,
        name: "Morrisons",
        initials: "MO",
        color: "#FFDC00",
        visibility: 72,
        chatgpt: 74,
        perplexity: 70,
        gemini: 73,
        claude: 71,
        trend: "down",
        trendValue: 2,
      },
      {
        rank: 5,
        name: "Waitrose",
        initials: "WA",
        color: "#5D8233",
        visibility: 68,
        chatgpt: 70,
        perplexity: 66,
        gemini: 69,
        claude: 67,
        trend: "up",
        trendValue: 1,
      },
      {
        rank: 6,
        name: "Aldi",
        initials: "AL",
        color: "#002D72",
        visibility: 62,
        chatgpt: 64,
        perplexity: 60,
        gemini: 63,
        claude: 61,
        trend: "up",
        trendValue: 6,
      },
      {
        rank: 7,
        name: "Lidl",
        initials: "LI",
        color: "#0050AA",
        visibility: 58,
        chatgpt: 60,
        perplexity: 56,
        gemini: 59,
        claude: 57,
        trend: "stable",
        trendValue: 0,
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulseIcon,
    location: "UK",
    url: "https://app.genezio.ai/brand-report/-31/Healthcare%20Providers%20&%20Clinics?demo=account",
    brands: [
      {
        rank: 1,
        name: "Bupa",
        initials: "BU",
        color: "#1E9BD7",
        visibility: 88,
        chatgpt: 90,
        perplexity: 87,
        gemini: 89,
        claude: 86,
        trend: "up",
        trendValue: 2,
      },
      {
        rank: 2,
        name: "Nuffield Health",
        initials: "NU",
        color: "#00539B",
        visibility: 79,
        chatgpt: 81,
        perplexity: 78,
        gemini: 79,
        claude: 78,
        trend: "up",
        trendValue: 4,
      },
      {
        rank: 3,
        name: "Spire Healthcare",
        initials: "SP",
        color: "#E4003A",
        visibility: 73,
        chatgpt: 75,
        perplexity: 72,
        gemini: 73,
        claude: 72,
        trend: "stable",
        trendValue: 0,
      },
      {
        rank: 4,
        name: "BMI Healthcare",
        initials: "BM",
        color: "#003087",
        visibility: 65,
        chatgpt: 67,
        perplexity: 63,
        gemini: 66,
        claude: 64,
        trend: "down",
        trendValue: 3,
      },
      {
        rank: 5,
        name: "NHS",
        initials: "NH",
        color: "#005EB8",
        visibility: 95,
        chatgpt: 97,
        perplexity: 94,
        gemini: 95,
        claude: 94,
        trend: "stable",
        trendValue: 0,
      },
      {
        rank: 6,
        name: "Vitality",
        initials: "VI",
        color: "#E8175D",
        visibility: 58,
        chatgpt: 60,
        perplexity: 56,
        gemini: 59,
        claude: 57,
        trend: "up",
        trendValue: 5,
      },
      {
        rank: 7,
        name: "AXA Health",
        initials: "AX",
        color: "#00008F",
        visibility: 52,
        chatgpt: 54,
        perplexity: 50,
        gemini: 53,
        claude: 51,
        trend: "down",
        trendValue: 1,
      },
    ],
  },
  {
    id: "fashion",
    label: "Fast Fashion",
    icon: ShirtIcon,
    location: "UK",
    url: "https://app.genezio.ai/brand-report/-64/Fast%20Fashion?demo=account",
    brands: [
      {
        rank: 1,
        name: "Zara",
        initials: "ZA",
        color: "#FFFFFF",
        visibility: 90,
        chatgpt: 92,
        perplexity: 89,
        gemini: 91,
        claude: 88,
        trend: "up",
        trendValue: 2,
      },
      {
        rank: 2,
        name: "H&M",
        initials: "HM",
        color: "#E50010",
        visibility: 85,
        chatgpt: 87,
        perplexity: 84,
        gemini: 86,
        claude: 83,
        trend: "stable",
        trendValue: 0,
      },
      {
        rank: 3,
        name: "ASOS",
        initials: "AS",
        color: "#2D2D2D",
        visibility: 80,
        chatgpt: 82,
        perplexity: 79,
        gemini: 81,
        claude: 78,
        trend: "up",
        trendValue: 3,
      },
      {
        rank: 4,
        name: "Primark",
        initials: "PR",
        color: "#003087",
        visibility: 76,
        chatgpt: 78,
        perplexity: 74,
        gemini: 77,
        claude: 75,
        trend: "up",
        trendValue: 7,
      },
      {
        rank: 5,
        name: "Boohoo",
        initials: "BO",
        color: "#FF008D",
        visibility: 60,
        chatgpt: 62,
        perplexity: 58,
        gemini: 61,
        claude: 59,
        trend: "down",
        trendValue: 4,
      },
      {
        rank: 6,
        name: "Topshop",
        initials: "TO",
        color: "#1A1A1A",
        visibility: 53,
        chatgpt: 55,
        perplexity: 51,
        gemini: 54,
        claude: 52,
        trend: "down",
        trendValue: 2,
      },
      {
        rank: 7,
        name: "Shein",
        initials: "SH",
        color: "#EE1C25",
        visibility: 71,
        chatgpt: 73,
        perplexity: 69,
        gemini: 72,
        claude: 70,
        trend: "up",
        trendValue: 9,
      },
    ],
  },
];

const platformColors: Record<string, string> = {
  chatgpt: "#10A37F",
  perplexity: "#1FB8CD",
  gemini: "#4285F4",
  claude: "#D4A373",
};

const scrollingBrands = [
  "Tesco", "Barclays", "Bupa", "Zara", "HSBC", "H&M", "Sainsbury's",
  "Nuffield Health", "Lloyds", "ASOS", "Asda", "Spire Healthcare",
  "Primark", "NatWest", "Waitrose", "Vitality", "Boohoo", "Santander",
  "Morrisons", "AXA Health", "Aldi", "Lidl", "NHS",
];

function TrendBadge({ trend, value }: { trend: Trend; value: number }) {
  if (trend === "up") {
    return (
      <span className="inline-flex items-center gap-0.5 text-emerald-400 text-xs font-semibold">
        <TrendingUpIcon className="w-3 h-3" />+{value}%
      </span>
    );
  }
  if (trend === "down") {
    return (
      <span className="inline-flex items-center gap-0.5 text-red-400 text-xs font-semibold">
        <TrendingDownIcon className="w-3 h-3" />-{value}%
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 text-gray-500 text-xs font-semibold">
      <MinusIcon className="w-3 h-3" />—
    </span>
  );
}

function ScoreBar({ value, max = 100 }: { value: number; max?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-white tabular-nums w-8">
        {value}
      </span>
    </div>
  );
}

function PlatformDot({ score, platform }: { score: number; platform: string }) {
  const color = platformColors[platform] ?? "#888";
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-xs font-bold tabular-nums"
        style={{ color }}
      >
        {score}
      </span>
    </div>
  );
}

export function IndustryLeaderboards() {
  const [activeIndustry, setActiveIndustry] = useState("banking");
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = industries.find((i) => i.id === activeIndustry)!;
  const sorted = [...current.brands].sort((a, b) => b.visibility - a.visibility).map((b, i) => ({ ...b, rank: i + 1 }));

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 0.5;
    const half = el.scrollWidth / 2;
    const raf = requestAnimationFrame(function step() {
      pos += speed;
      if (pos >= half) pos = 0;
      el.scrollLeft = pos;
      requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-[#050506]">
      <PolymetSEO
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonicalPath="/industry-leaderboards/"
      />

      {/* ── Hero ── */}
      <section className="pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <ZapIcon className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Live AI Visibility Data · UK Markets
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            <span className="text-white">See who's winning </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI search
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mb-10">
            Real AI visibility rankings across UK industries — powered by
            thousands of daily queries to ChatGPT, Perplexity, Gemini & Claude.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {[
              { icon: BarChart2Icon, label: "4 UK Industries tracked" },
              { icon: GlobeIcon, label: "4 AI Platforms monitored" },
              { icon: SparklesIcon, label: "Updated weekly" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <Icon className="w-4 h-4 text-purple-400" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling brand ticker */}
        <div className="relative overflow-hidden mt-2 mb-4 -mx-6 md:-mx-12 lg:-mx-20">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050506] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050506] to-transparent z-10 pointer-events-none" />
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden whitespace-nowrap py-3"
            style={{ scrollbarWidth: "none" }}
          >
            {[...scrollingBrands, ...scrollingBrands].map((brand, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-sm text-gray-400 font-medium shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Tabs + Table ── */}
      <section className="pb-20 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const active = activeIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${
                    active
                      ? "bg-white text-black border-white shadow-lg shadow-white/10"
                      : "bg-white/[0.04] text-gray-400 border-white/10 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {ind.label}
                </button>
              );
            })}
          </div>

          {/* Table header */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[40px_1fr_120px_repeat(4,60px)_80px] gap-4 px-5 py-3 bg-white/[0.03] border-b border-white/10">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">#</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Brand</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">AI Visibility</span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: platformColors.chatgpt }}>GPT</span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: platformColors.perplexity }}>PPX</span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: platformColors.gemini }}>GEM</span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: platformColors.claude }}>CLD</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">30d</span>
            </div>

            {sorted.map((brand, idx) => (
              <div
                key={brand.name}
                className={`grid grid-cols-[40px_1fr_120px_repeat(4,60px)_80px] gap-4 items-center px-5 py-4 transition-colors duration-150 hover:bg-white/[0.03] ${
                  idx < sorted.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                {/* Rank */}
                <div className="flex items-center">
                  {brand.rank <= 3 ? (
                    <span
                      className={`text-sm font-bold ${
                        brand.rank === 1
                          ? "text-yellow-400"
                          : brand.rank === 2
                          ? "text-gray-300"
                          : "text-amber-600"
                      }`}
                    >
                      #{brand.rank}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-600 font-semibold">
                      {brand.rank}
                    </span>
                  )}
                </div>

                {/* Brand */}
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: `${brand.color}20`,
                      color: brand.color === "#FFFFFF" ? "#aaa" : brand.color,
                      border: `1px solid ${brand.color}40`,
                    }}
                  >
                    {brand.initials}
                  </div>
                  <span className="text-sm font-semibold text-white truncate">
                    {brand.name}
                  </span>
                </div>

                {/* Visibility bar */}
                <ScoreBar value={brand.visibility} />

                {/* Platform scores */}
                <PlatformDot score={brand.chatgpt} platform="chatgpt" />
                <PlatformDot score={brand.perplexity} platform="perplexity" />
                <PlatformDot score={brand.gemini} platform="gemini" />
                <PlatformDot score={brand.claude} platform="claude" />

                {/* Trend */}
                <TrendBadge trend={brand.trend} value={brand.trendValue} />
              </div>
            ))}
          </div>

          {/* View full report CTA */}
          <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-gray-500">
              Showing {sorted.length} brands ·{" "}
              <span className="text-gray-400">
                Scores reflect average AI mention rate across all platforms
              </span>
            </p>
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06] border border-white/15 text-sm font-semibold text-white hover:bg-white/[0.12] transition-all duration-200 group"
            >
              View Full Report
              <ExternalLinkIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── How scores work ── */}
      <section className="pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <h2 className="text-lg font-bold text-white mb-6">
              How AI Visibility Scores work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Real queries, real AI engines",
                  body: "Genezio runs thousands of industry-specific queries across ChatGPT, Perplexity, Gemini, and Claude — the same questions real users are asking.",
                },
                {
                  step: "02",
                  title: "Brand mention detection",
                  body: "Each AI response is analysed to detect which brands are recommended, mentioned, or cited — and in what context.",
                },
                {
                  step: "03",
                  title: "Visibility score aggregation",
                  body: "The visibility score represents the percentage of relevant AI conversations in which a brand is mentioned — averaged across all platforms.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="space-y-2">
                  <div className="text-3xl font-black text-white/10 font-mono">{step}</div>
                  <h3 className="text-sm font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            How does <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">your brand</span> rank?
          </h2>
          <p className="text-base text-[#B0B0B3] max-w-xl mx-auto">
            Get a personalised AI visibility report for your brand — see exactly
            how ChatGPT, Gemini, Perplexity, and Claude describe you today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://app.genezio.ai/sign-up">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 font-semibold rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-200 hover:scale-105"
              >
                Get Free Analysis
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/40 px-8 font-semibold rounded-lg transition-all duration-200"
              onClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC",
                  "_blank"
                )
              }
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
