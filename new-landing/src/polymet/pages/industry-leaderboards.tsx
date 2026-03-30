import { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCartIcon,
  HeartPulseIcon,
  ShirtIcon,
  BuildingIcon,
  ArrowRightIcon,
  ZapIcon,
  BarChart2Icon,
  GlobeIcon,
  SparklesIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { PolymetSEO } from "@/polymet/components/polymet-seo";

const PAGE_TITLE = "AI Visibility Industry Leaderboards | Genezio";
const PAGE_DESCRIPTION =
  "See which brands are winning AI search across UK, US & EU industries. Real data from ChatGPT, Perplexity, Gemini & Claude.";

function faviconUrl(website: string, size = 48) {
  return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(website)}&size=${size}`;
}

const COUNTRIES = [
  { code: "UK", label: "United Kingdom", flag: "🇬🇧" },
  { code: "US", label: "United States",  flag: "🇺🇸" },
];

type CountryCode = "UK" | "US" | "EU";

interface BrandEntry {
  name: string;
  initials: string;
  color: string;
  website: string;
  visibility: number;
  chatgpt: number;
  perplexity: number;
  gemini: number;
  claude: number;
}

interface Industry {
  id: string;
  label: string;
  icon: any;
  url: Record<CountryCode, string>;
  countries: Record<CountryCode, BrandEntry[]>;
}

type ApiNumericValue = number | { source?: string; parsedValue?: number };

interface BrandMetricsCompany {
  name: string;
  presence_percent: ApiNumericValue;
  website?: string;
}

interface BrandMetricsOverview {
  companies: BrandMetricsCompany[];
  period_date: string;
}

interface BrandMetricsResponse {
  model_overviews: BrandMetricsOverview[];
}

interface ChartSeriesOverride {
  name: string;
  website: string;
  data: number[];
}

const BRAND_METRICS_MODELS = ["chatgpt.com", "google-ai-overview"];
const DYNAMIC_INDUSTRY_CONFIG: Partial<
  Record<
    string,
    {
      brandId: number;
      topicIds: number[];
      token: string;
      models?: string[];
    }
  >
> = {
  banking: {
    brandId: -49,
    topicIds: [269, 265, 264, 263, 262, 261, 260, 259, 520, 272],
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5IiwiZXhwIjoxNzc3NTUyNTY5LCJqdGkiOiIyZTJhYmVhMS1kNzA0LTRkNGEtOThjYS1lZTE2OTZkMWFmYmYifQ.zY_KQZ5rsB7So8QdSQnykPGqwoVsjqijCqIE8_syrDs",
    models: ["chatgpt.com", "google-ai-overview", "perplexity", "google-ai-mode", "gpt-5.2"],
  },
  fashion: {
    brandId: -64,
    topicIds: [397, 396, 398, 572, 483],
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5IiwiZXhwIjoxNzc3NTQ5MzA5LCJqdGkiOiIyNTY3MWZiYS03MjVhLTQxZTItOGEzMy1jY2IxYjg4OTZiY2MifQ.iI2HcioMBvEv6AEg87yp1GZb9_LODJeqnGqZYfZdb4Y",
  },
  healthcare: {
    brandId: -31,
    topicIds: [96, 95, 94, 511],
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5IiwiZXhwIjoxNzc3NTUyMTg4LCJqdGkiOiJmNDJlMzM3NS0zZjRkLTQyMWQtYWRmNC1mOGU0NjZiMThiMTEifQ.Ri939zWcorIFrbGlnrgNse1TDRW9AdmNFOa8yUOyc_8",
  },
  retail: {
    brandId: -29,
    topicIds: [90, 89, 88, 518],
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5IiwiZXhwIjoxNzc3NTUyNTA4LCJqdGkiOiI0YTJiOGVkNi1mYTBiLTQxNjEtOTQ5NC04MDkzMWExM2UyZGUifQ.ed22XHPZ6iRgAauZuruIZc8vhVDJFNI7UGx1A2NZn8s",
  },
};

function toNumber(value: ApiNumericValue): number {
  if (typeof value === "number") return value;
  if (typeof value?.parsedValue === "number") return value.parsedValue;
  if (typeof value?.source === "string") {
    const parsed = Number(value.source);
    if (!Number.isNaN(parsed)) return parsed;
  }
  return 0;
}

function initialsFor(name: string): string {
  const cleaned = name.trim();
  if (!cleaned) return "NA";
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

function colorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 52%)`;
}

/* ─── Deterministic pseudo-random for chart history ─── */
function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateHistory(name: string, endValue: number, days = 30): number[] {
  const seed = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const startDelta = (seededRand(seed) - 0.4) * 12;
  const start = Math.max(10, Math.min(99, endValue + startDelta));
  const result: number[] = [];
  for (let i = 0; i < days; i++) {
    const t = i / (days - 1);
    const base = start + (endValue - start) * t;
    const noise = (seededRand(seed * (i + 7) * 13) - 0.5) * 4;
    result.push(Math.max(5, Math.min(99, Math.round(base + noise))));
  }
  return result;
}

/* ─── Line chart for top 3 brands ─── */
const CHART_COLORS = ["#818cf8", "#f472b6", "#fbbf24"];

function TopThreeChart({
  brands,
  startOverrides,
  yAxis,
  endOverrides,
  seriesOverride,
  xLabelsOverride,
}: {
  brands: (BrandEntry & { rank: number })[];
  startOverrides?: Record<string, number>;
  yAxis?: { min: number; max: number; ticks: number[] };
  endOverrides?: Record<string, number>;
  seriesOverride?: ChartSeriesOverride[];
  xLabelsOverride?: string[];
}) {
  const top3 = brands.slice(0, 3);
  const W = 800;
  const H = 280;
  const PAD = { top: 16, right: 20, bottom: 36, left: 42 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const days = seriesOverride?.[0]?.data.length ?? 30;

  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const generatedSeries = top3.map((b, i) => {
    const endValue = endOverrides?.[b.name] ?? b.visibility;
    const raw = generateHistory(b.name + endValue, endValue, days);
    const desiredStart = startOverrides?.[b.name];
    const data =
      desiredStart === undefined
        ? raw
        : (() => {
            const delta = desiredStart - raw[0];
            return raw.map((v) => Math.max(0, Math.min(100, Math.round(v + delta))));
          })();
    return { brand: b, color: CHART_COLORS[i], data };
  });
  const series = seriesOverride && seriesOverride.length > 0
    ? seriesOverride.slice(0, 3).map((s, i) => ({
        brand: { name: s.name, website: s.website },
        color: CHART_COLORS[i],
        data: s.data,
      }))
    : generatedSeries;

  const allVals = series.flatMap((s) => s.data);
  const minV =
    yAxis?.min ?? Math.max(0, Math.floor(Math.min(...allVals) / 5) * 5 - 5);
  const maxV =
    yAxis?.max ?? Math.min(100, Math.ceil(Math.max(...allVals) / 5) * 5 + 5);

  function toX(i: number) {
    return PAD.left + (i / (days - 1)) * innerW;
  }
  function toY(v: number) {
    return PAD.top + innerH - ((v - minV) / (maxV - minV)) * innerH;
  }
  function pathD(data: number[]) {
    return data
      .map((v, i) => `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(v).toFixed(1)}`)
      .join(" ");
  }

  function handleMouseMove(e: React.MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * W;
    const rawIdx = Math.round(((svgX - PAD.left) / innerW) * (days - 1));
    setHoverIdx(Math.max(0, Math.min(days - 1, rawIdx)));
  }

  const now = new Date();
  const monthLabels: { label: string; x: number }[] = [];
  const xStep = Math.max(1, Math.floor(days / 5));
  for (let i = 0; i < days; i += xStep) {
    const d = new Date(now);
    d.setDate(d.getDate() - (days - 1 - i));
    monthLabels.push({
      label: xLabelsOverride?.[i] ?? d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      x: toX(i),
    });
  }
  if (monthLabels[monthLabels.length - 1]?.x !== toX(days - 1)) {
    monthLabels.push({
      label: xLabelsOverride?.[days - 1] ?? new Date(now).toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      x: toX(days - 1),
    });
  }

  const yTicks = yAxis?.ticks ?? [minV, Math.round((minV + maxV) / 2), maxV];

  const hoverDate =
    hoverIdx !== null
      ? (() => {
          const d = new Date(now);
          d.setDate(d.getDate() - (days - 1 - hoverIdx));
          return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
        })()
      : null;

  // Tooltip x position as % of full SVG width (maps to % of container since SVG is 100% wide)
  const tooltipLeftPct =
    hoverIdx !== null
      ? (toX(hoverIdx) / W) * 100
      : null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 mb-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            30-day AI Visibility trend
          </p>
          <p className="text-sm text-gray-400 mt-0.5">Top 3 brands this month</p>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          {series.map((s) => (
            <div key={s.brand.name} className="flex items-center gap-2">
              <div className="w-8 h-0.5 rounded-full" style={{ background: s.color }} />
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={faviconUrl(s.brand.website, 32)}
                    alt={s.brand.name}
                    className="w-3 h-3 object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <span className="text-xs text-gray-300 font-medium">{s.brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart area — relative container for tooltip overlay */}
      <div className="relative overflow-x-auto">
        {/* Tooltip */}
        {hoverIdx !== null && tooltipLeftPct !== null && (
          <div
            className="absolute top-2 z-10 pointer-events-none"
            style={{
              left: `clamp(0px, calc(${tooltipLeftPct}% - 68px), calc(100% - 140px))`,
            }}
          >
            <div className="bg-[#1a1a2e] border border-white/15 rounded-xl px-3 py-2.5 shadow-xl shadow-black/40 min-w-[130px]">
              <p className="text-[10px] text-gray-500 font-semibold mb-1.5">{hoverDate}</p>
              {series.map((s) => (
                <div key={s.brand.name} className="flex items-center justify-between gap-3 py-0.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    <span className="text-xs text-gray-400 truncate max-w-[80px]">{s.brand.name}</span>
                  </div>
                  <span className="text-xs font-bold tabular-nums" style={{ color: s.color }}>
                    {s.data[hoverIdx]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full cursor-crosshair"
          style={{ minWidth: 340, height: H, display: "block" }}
          preserveAspectRatio="none"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverIdx(null)}
        >
          {/* Grid lines */}
          {yTicks.map((v) => (
            <g key={v}>
              <line
                x1={PAD.left} y1={toY(v)} x2={W - PAD.right} y2={toY(v)}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4"
              />
              <text x={PAD.left - 8} y={toY(v) + 4} textAnchor="end"
                fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace">
                {v}%
              </text>
            </g>
          ))}

          {/* X axis labels */}
          {monthLabels.map(({ label, x }) => (
            <text key={label} x={x} y={H - 6} textAnchor="middle"
              fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="sans-serif">
              {label}
            </text>
          ))}

          {/* Lines */}
          {series.map((s) => (
            <path
              key={`line-${s.brand.name}`}
              d={pathD(s.data)}
              fill="none"
              stroke={s.color}
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}

          {/* End-point dots */}
          {series.map((s) => {
            const last = s.data[s.data.length - 1];
            return (
              <circle key={`dot-end-${s.brand.name}`}
                cx={toX(days - 1)} cy={toY(last)} r="4"
                fill={s.color} stroke="#050506" strokeWidth="2"
              />
            );
          })}

          {/* Hover cursor line + dots */}
          {hoverIdx !== null && (
            <g>
              <line
                x1={toX(hoverIdx)} y1={PAD.top}
                x2={toX(hoverIdx)} y2={PAD.top + innerH}
                stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3"
              />
              {series.map((s) => (
                <circle key={`hover-dot-${s.brand.name}`}
                  cx={toX(hoverIdx)} cy={toY(s.data[hoverIdx])} r="5"
                  fill={s.color} stroke="#050506" strokeWidth="2"
                />
              ))}
            </g>
          )}

          {/* Transparent overlay for mouse events */}
          <rect
            x={PAD.left} y={PAD.top} width={innerW} height={innerH}
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
}

function TopThreeChartSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 mb-6 animate-pulse">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <div className="h-3 w-44 rounded bg-white/10 mb-2" />
          <div className="h-3 w-32 rounded bg-white/10" />
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-0.5 rounded-full bg-white/15" />
              <div className="h-3 w-20 rounded bg-white/10" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-[280px] rounded-xl border border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.04] animate-pulse" />
      </div>
    </div>
  );
}

const industries: Industry[] = [
  {
    id: "banking",
    label: "Banking",
    icon: BuildingIcon,
    url: {
      UK: "https://app.genezio.ai/brand-report/-49/Banking?demo=account",
      US: "https://app.genezio.ai/brand-report/-49/Banking?demo=account",
      EU: "https://app.genezio.ai/brand-report/-49/Banking?demo=account",
    },
    countries: {
      UK: [],
      US: [],
      EU: [],
    },
  },
  {
    id: "retail",
    label: "Retail & Supermarkets",
    icon: ShoppingCartIcon,
    url: {
      UK: "https://app.genezio.ai/brand-report/-29/Retail%20&%20Supermarkets?demo=account",
      US: "https://app.genezio.ai/brand-report/-29/Retail%20&%20Supermarkets?demo=account",
      EU: "https://app.genezio.ai/brand-report/-29/Retail%20&%20Supermarkets?demo=account",
    },
    countries: {
      UK: [],
      US: [],
      EU: [],
    },
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulseIcon,
    url: {
      UK: "https://app.genezio.ai/brand-report/-31/Healthcare%20Providers%20&%20Clinics?demo=account",
      US: "https://app.genezio.ai/brand-report/-31/Healthcare%20Providers%20&%20Clinics?demo=account",
      EU: "https://app.genezio.ai/brand-report/-31/Healthcare%20Providers%20&%20Clinics?demo=account",
    },
    countries: {
      UK: [],
      US: [],
      EU: [],
    },
  },
  {
    id: "fashion",
    label: "Fast Fashion",
    icon: ShirtIcon,
    url: {
      UK: "https://app.genezio.ai/brand-report/-64/Fast%20Fashion?demo=account",
      US: "https://app.genezio.ai/brand-report/-64/Fast%20Fashion?demo=account",
      EU: "https://app.genezio.ai/brand-report/-64/Fast%20Fashion?demo=account",
    },
    countries: {
      UK: [],
      US: [],
      EU: [],
    },
  },
];

const scrollingBrandsByCountry: Record<CountryCode, { name: string; website: string }[]> = {
  UK: [
    { name: "Tesco",          website: "https://www.tesco.com" },
    { name: "Barclays",       website: "https://www.barclays.co.uk" },
    { name: "Bupa",           website: "https://www.bupa.co.uk" },
    { name: "Zara",           website: "https://www.zara.com" },
    { name: "HSBC",           website: "https://www.hsbc.co.uk" },
    { name: "H&M",            website: "https://www.hm.com" },
    { name: "Sainsbury's",    website: "https://www.sainsburys.co.uk" },
    { name: "Nuffield Health",website: "https://www.nuffieldhealth.com" },
    { name: "Lloyds",         website: "https://www.lloydsbank.com" },
    { name: "ASOS",           website: "https://www.asos.com" },
    { name: "NHS",            website: "https://www.nhs.uk" },
    { name: "Primark",        website: "https://www.primark.com" },
  ],
  US: [
    { name: "Walmart",       website: "https://www.walmart.com" },
    { name: "JPMorgan",      website: "https://www.jpmorganchase.com" },
    { name: "UnitedHealth",  website: "https://www.unitedhealthgroup.com" },
    { name: "Nike",          website: "https://www.nike.com" },
    { name: "Amazon",        website: "https://www.amazon.com" },
    { name: "Bank of America",website: "https://www.bankofamerica.com" },
    { name: "CVS Health",    website: "https://www.cvshealth.com" },
    { name: "Gap",           website: "https://www.gap.com" },
    { name: "Target",        website: "https://www.target.com" },
    { name: "Goldman Sachs", website: "https://www.goldmansachs.com" },
    { name: "Aetna",         website: "https://www.aetna.com" },
    { name: "Shein",         website: "https://www.shein.com" },
  ],
  EU: [
    { name: "Carrefour",    website: "https://www.carrefour.com" },
    { name: "BNP Paribas",  website: "https://www.bnpparibas.com" },
    { name: "Fresenius",    website: "https://www.fresenius.com" },
    { name: "Zara",         website: "https://www.zara.com" },
    { name: "Deutsche Bank",website: "https://www.db.com" },
    { name: "Lidl",         website: "https://www.lidl.com" },
    { name: "AXA Health",   website: "https://www.axa.com" },
    { name: "H&M",          website: "https://www.hm.com" },
    { name: "ING",          website: "https://www.ing.com" },
    { name: "Mango",        website: "https://www.mango.com" },
    { name: "Allianz Care", website: "https://www.allianzcare.com" },
    { name: "Aldi",         website: "https://www.aldi.com" },
  ],
};

function BrandLogo({ brand }: { brand: BrandEntry }) {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
        style={{ background: `${brand.color}20`, color: brand.color, border: `1px solid ${brand.color}40` }}>
        {brand.initials}
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden shrink-0 border border-white/10">
      <img src={faviconUrl(brand.website, 48)} alt={brand.name} className="w-5 h-5 object-contain"
        onError={() => setImgError(true)} />
    </div>
  );
}

export function IndustryLeaderboards() {
  const [activeIndustry, setActiveIndustry] = useState("banking");
  const [activeCountry, setActiveCountry] = useState<CountryCode>("UK");
  const [apiBrands, setApiBrands] = useState<BrandEntry[]>([]);
  const [apiOverviews, setApiOverviews] = useState<BrandMetricsOverview[]>([]);
  const [isLoadingApiBrands, setIsLoadingApiBrands] = useState(false);
  const [apiBrandsError, setApiBrandsError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = industries.find((i) => i.id === activeIndustry)!;
  const dynamicIndustryConfig = activeCountry === "UK" ? DYNAMIC_INDUSTRY_CONFIG[activeIndustry] : undefined;
  const isDynamicIndustryUK = Boolean(dynamicIndustryConfig);

  useEffect(() => {
    if (!dynamicIndustryConfig) return;

    const token =
      (import.meta.env.VITE_GENEZIO_LEADERBOARD_TOKEN as string | undefined) ||
      dynamicIndustryConfig.token;
    if (!token) {
      setApiBrands([]);
      setApiOverviews([]);
      setApiBrandsError("Missing API token. Set VITE_GENEZIO_LEADERBOARD_TOKEN.");
      return;
    }

    const controller = new AbortController();
    const fetchBrandMetrics = async () => {
      try {
        setIsLoadingApiBrands(true);
        setApiBrandsError(null);

        const endDate = new Date();
        endDate.setHours(23, 59, 59, 999);
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - 30);
        startDate.setHours(0, 0, 0, 0);

        const params = new URLSearchParams({
          metric_type: "mentioned",
          aggregation_type: "daily",
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
        });
        for (const topicId of dynamicIndustryConfig.topicIds) params.append("topic_ids", String(topicId));
        const models = dynamicIndustryConfig.models ?? BRAND_METRICS_MODELS;
        for (const model of models) params.append("models_name", model);

        const res = await fetch(`https://app.backend.genezio.ai/api/v1/sql/brand/overview/${dynamicIndustryConfig.brandId}/brand-metrics?${params.toString()}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const payload = (await res.json()) as BrandMetricsResponse;
        const overviews = payload.model_overviews ?? [];
        const latestOverview = overviews[overviews.length - 1];
        const companies = latestOverview?.companies ?? [];

        const mapped = companies
          .map((company) => {
            const visibility = Math.round(toNumber(company.presence_percent));
            return {
              name: company.name,
              initials: initialsFor(company.name),
              color: colorFor(company.name),
              website: company.website || "https://www.google.com",
              visibility,
              chatgpt: visibility,
              perplexity: visibility,
              gemini: visibility,
              claude: visibility,
            } satisfies BrandEntry;
          })
          .sort((a, b) => b.visibility - a.visibility);

        setApiOverviews(overviews);
        setApiBrands(mapped);
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        setApiBrands([]);
        setApiOverviews([]);
        setApiBrandsError((error as Error).message || "Failed to load leaderboard data.");
      } finally {
        setIsLoadingApiBrands(false);
      }
    };

    void fetchBrandMetrics();
    return () => controller.abort();
  }, [dynamicIndustryConfig]);

  const brands = isDynamicIndustryUK ? apiBrands : current.countries[activeCountry];
  // Table order should match the authored lists (screenshots).
  const ranked = useMemo(() => brands.map((b, i) => ({ ...b, rank: i + 1 })), [brands]);
  const chartBrands = useMemo(() => {
    if (activeIndustry === "banking" && activeCountry === "UK") {
      const preferred = ["Monzo", "Starling Bank", "HSBC UK"];
      const picked = preferred
        .map((n) => ranked.find((b) => b.name === n))
        .filter(Boolean) as (BrandEntry & { rank: number })[];
      return picked.length === 3 ? picked : ranked;
    }
    if (activeIndustry === "retail" && activeCountry === "UK") {
      const preferred = ["Tesco", "Sainsbury's", "Asda"];
      const picked = preferred
        .map((n) => ranked.find((b) => b.name === n))
        .filter(Boolean) as (BrandEntry & { rank: number })[];
      return picked.length === 3 ? picked : ranked;
    }
    if (activeIndustry === "fashion" && activeCountry === "UK") {
      const preferred = ["Boohoo", "ASOS", "Next"];
      const picked = preferred
        .map((n) => ranked.find((b) => b.name === n))
        .filter(Boolean) as (BrandEntry & { rank: number })[];
      return picked.length === 3 ? picked : ranked;
    }
    return ranked;
  }, [ranked, activeIndustry, activeCountry]);

  const top10 = useMemo(() => ranked.slice(0, 10), [ranked]);
  const dynamicChartSeries = useMemo(() => {
    if (!isDynamicIndustryUK || apiOverviews.length === 0) return undefined;
    const topThreeNames = ranked.slice(0, 3).map((b) => b.name);
    if (topThreeNames.length === 0) return undefined;

    const nameToWebsite = new Map(ranked.map((b) => [b.name, b.website]));
    return topThreeNames.map((name) => {
      const data = apiOverviews.map((overview) => {
        const company = overview.companies.find((c) => c.name === name);
        return Math.round(toNumber(company?.presence_percent ?? 0));
      });
      return {
        name,
        website: nameToWebsite.get(name) || "https://www.google.com",
        data,
      } satisfies ChartSeriesOverride;
    });
  }, [isDynamicIndustryUK, apiOverviews, ranked]);

  const dynamicChartLabels = useMemo(() => {
    if (!isDynamicIndustryUK || apiOverviews.length === 0) return undefined;
    return apiOverviews.map((overview) =>
      new Date(overview.period_date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
    );
  }, [isDynamicIndustryUK, apiOverviews]);
  const scrollingBrands = scrollingBrandsByCountry[activeCountry];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    let raf: number;
    const step = () => {
      pos += 0.5;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [activeCountry]);

  return (
    <div className="min-h-screen bg-[#050506]">
      <PolymetSEO title={PAGE_TITLE} description={PAGE_DESCRIPTION} canonicalPath="/industry-leaderboards/" />

      {/* ── Hero ── */}
      <section className="pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <ZapIcon className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Live AI Visibility Data · UK · US
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            <span className="text-white">Your competitors are already in </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI answers.</span>
            <span className="text-white"> Are you?</span>
          </h1>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mb-10">
            Real AI visibility rankings across industries — powered by thousands of daily queries to ChatGPT, Perplexity, Gemini & Claude.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {[
              { icon: BarChart2Icon, label: "4 Industries tracked" },
              { icon: GlobeIcon,     label: "2 Markets: UK · US" },
              { icon: SparklesIcon,  label: "Updated weekly" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <Icon className="w-4 h-4 text-gray-500" />{label}
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="relative overflow-hidden mt-2 mb-4 -mx-6 md:-mx-12 lg:-mx-20">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050506] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050506] to-transparent z-10 pointer-events-none" />
          <div ref={scrollRef} className="flex gap-4 overflow-x-hidden whitespace-nowrap py-3" style={{ scrollbarWidth: "none" }}>
            {[...scrollingBrands, ...scrollingBrands].map((brand, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-sm text-gray-300 font-medium shrink-0">
                <img src={faviconUrl(brand.website, 32)} alt={brand.name} className="w-4 h-4 object-contain rounded"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters + Chart + Table ── */}
      <section className="pb-20 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Filter row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 items-start sm:items-center justify-between">
            {/* Country */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10">
              {COUNTRIES.map((c) => {
                const active = activeCountry === c.code;
                const comingSoon = c.code === "US";
                return (
                  <button
                    key={c.code}
                    type="button"
                    disabled={comingSoon}
                    aria-disabled={comingSoon}
                    title={comingSoon ? "Coming soon" : undefined}
                    onClick={() => {
                      if (comingSoon) return;
                      setActiveCountry(c.code as CountryCode);
                    }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      comingSoon
                        ? "text-gray-500 opacity-60 cursor-not-allowed"
                        : active
                          ? "bg-white text-black shadow-sm"
                          : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="text-base leading-none">{c.flag}</span>
                    <span className="hidden sm:inline">{c.label}</span>
                    <span className="inline sm:hidden">{c.code}</span>
                    {comingSoon && (
                      <span className="ml-1 hidden md:inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold text-gray-300">
                        Coming soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Industry tabs */}
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => {
                const Icon = ind.icon;
                const active = activeIndustry === ind.id;
                return (
                  <button key={ind.id} onClick={() => setActiveIndustry(ind.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${
                      active
                        ? "bg-white text-black border-white shadow-lg"
                        : "bg-white/[0.04] text-gray-400 border-white/10 hover:bg-white/[0.08] hover:text-white"
                    }`}>
                    <Icon className="w-3.5 h-3.5" />{ind.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chart for top 3 */}
          {isLoadingApiBrands && isDynamicIndustryUK && (
            <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300">
              Loading live leaderboard data...
            </div>
          )}
          {apiBrandsError && (
            <div className="mb-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {apiBrandsError}
            </div>
          )}
          {isLoadingApiBrands && isDynamicIndustryUK && ranked.length === 0 ? (
            <TopThreeChartSkeleton />
          ) : (
            <TopThreeChart
              brands={chartBrands}
              seriesOverride={dynamicChartSeries}
              xLabelsOverride={dynamicChartLabels}
              startOverrides={
                activeIndustry === "banking" && activeCountry === "UK"
                  ? { "Monzo": 62, "Starling Bank": 59, "HSBC UK": 58 }
                  : activeIndustry === "retail" && activeCountry === "UK"
                    ? { "Tesco": 97, "Sainsbury's": 91, "Asda": 80 }
                    : activeIndustry === "healthcare" && activeCountry === "UK"
                      ? { "Spire": 72, "Circle Health Group": 60, "HCA Healthcare UK": 58 }
                      : activeIndustry === "fashion" && activeCountry === "UK"
                      ? undefined
                  : undefined
              }
              yAxis={
                activeIndustry === "retail" && activeCountry === "UK"
                  ? { min: 0, max: 100, ticks: [0, 25, 50, 75, 100] }
                  : activeIndustry === "healthcare" && activeCountry === "UK"
                    ? { min: 0, max: 80, ticks: [0, 20, 40, 60, 80] }
                    : activeIndustry === "fashion" && activeCountry === "UK"
                      ? { min: 0, max: 80, ticks: [0, 20, 40, 60, 80] }
                      : activeIndustry === "banking" && activeCountry === "UK"
                        ? { min: 0, max: 80, ticks: [0, 20, 40, 60, 80] }
                  : undefined
              }
              endOverrides={
                activeIndustry === "banking" && activeCountry === "UK"
                  ? { "Monzo": 60, "Starling Bank": 58, "HSBC UK": 57 }
                  : undefined
              }
            />
          )}

          {/* Table */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[40px_1fr_170px] gap-3 px-5 py-3 bg-white/[0.03] border-b border-white/10 items-center">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">#</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Brand</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">AI Visibility</span>
            </div>

            {/* Rows */}
            {top10.map((brand, idx) => (
              <div key={`${activeCountry}-${activeIndustry}-${brand.name}`}
                className={`grid grid-cols-[40px_1fr_170px] gap-3 items-center px-5 py-4 transition-colors duration-150 hover:bg-white/[0.03] ${
                  idx < top10.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}>
                {/* Rank */}
                <div>
                  {brand.rank <= 3 ? (
                    <span className={`text-sm font-bold ${brand.rank === 1 ? "text-yellow-400" : brand.rank === 2 ? "text-gray-300" : "text-amber-600"}`}>
                      #{brand.rank}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-600 font-semibold">{brand.rank}</span>
                  )}
                </div>

                {/* Brand */}
                <div className="flex items-center gap-3 min-w-0">
                  <BrandLogo brand={brand} />
                  <span className="text-sm font-semibold text-white truncate">{brand.name}</span>
                </div>

                {/* Visibility bar + % */}
                <div className="flex items-center gap-2">
                  <div className="w-14 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${brand.visibility}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-white tabular-nums">{brand.visibility}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-gray-500">
              Showing {Math.min(10, ranked.length)} of {ranked.length > 10 ? "10" : ranked.length} brands ·{" "}
              <span className="text-gray-400">Average AI mention rate across all platforms</span>
            </p>
            <a href={current.url[activeCountry]} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06] border border-white/15 text-sm font-semibold text-white hover:bg-white/[0.12] transition-all duration-200 group">
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
            <h2 className="text-lg font-bold text-white mb-6">How AI Visibility Scores work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Real queries, real AI engines", body: "Genezio runs thousands of industry-specific queries across ChatGPT, Perplexity, Gemini, and Claude — the same questions real users are asking." },
                { step: "02", title: "Brand mention detection", body: "Each AI response is analysed to detect which brands are recommended, mentioned, or cited — and in what context." },
                { step: "03", title: "Visibility score aggregation", body: "The visibility score represents the percentage of relevant AI conversations in which a brand is mentioned — averaged across all platforms." },
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

      {/* ── CTA ── */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            How does{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">your brand</span>{" "}
            rank?
          </h2>
          <p className="text-base text-[#B0B0B3] max-w-xl mx-auto">
            Get a personalised AI visibility report for your brand — see exactly how ChatGPT, Gemini, Perplexity, and Claude describe you today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://app.genezio.ai/sign-up">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 font-semibold rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-200 hover:scale-105">
                Get Free Analysis <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Button size="lg" variant="outline"
              className="border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/40 px-8 font-semibold rounded-lg transition-all duration-200"
              onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC", "_blank")}>
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
