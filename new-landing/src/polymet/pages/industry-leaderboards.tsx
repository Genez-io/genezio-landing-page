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

const LLM_PLATFORMS = [
  { key: "chatgpt",    label: "ChatGPT",    website: "https://chatgpt.com",         color: "#10A37F" },
  { key: "perplexity", label: "Perplexity", website: "https://perplexity.ai",        color: "#1FB8CD" },
  { key: "gemini",     label: "Gemini",     website: "https://gemini.google.com",    color: "#4285F4" },
  { key: "claude",     label: "Claude",     website: "https://claude.ai",            color: "#D4A373" },
];

const COUNTRIES = [
  { code: "UK", label: "United Kingdom", flag: "🇬🇧" },
  { code: "US", label: "United States",  flag: "🇺🇸" },
  { code: "EU", label: "Europe",         flag: "🇪🇺" },
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

function TopThreeChart({ brands }: { brands: (BrandEntry & { rank: number })[] }) {
  const top3 = brands.slice(0, 3);
  const W = 800;
  const H = 160;
  const PAD = { top: 12, right: 16, bottom: 32, left: 36 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const days = 30;

  const series = top3.map((b, i) => ({
    brand: b,
    color: CHART_COLORS[i],
    data: generateHistory(b.name + b.visibility, b.visibility, days),
  }));

  const allVals = series.flatMap((s) => s.data);
  const minV = Math.max(0, Math.floor(Math.min(...allVals) / 5) * 5 - 5);
  const maxV = Math.min(100, Math.ceil(Math.max(...allVals) / 5) * 5 + 5);

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

  const now = new Date();
  const monthLabels: { label: string; x: number }[] = [];
  for (let i = 0; i < days; i += 7) {
    const d = new Date(now);
    d.setDate(d.getDate() - (days - 1 - i));
    monthLabels.push({
      label: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      x: toX(i),
    });
  }

  const yTicks = [minV, Math.round((minV + maxV) / 2), maxV];

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

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ minWidth: 340, height: H }}
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {yTicks.map((v) => (
            <g key={v}>
              <line
                x1={PAD.left} y1={toY(v)} x2={W - PAD.right} y2={toY(v)}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1"
              />
              <text x={PAD.left - 6} y={toY(v) + 4} textAnchor="end"
                fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace">
                {v}%
              </text>
            </g>
          ))}

          {/* X axis labels */}
          {monthLabels.map(({ label, x }) => (
            <text key={label} x={x} y={H - 4} textAnchor="middle"
              fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="sans-serif">
              {label}
            </text>
          ))}

          {/* Area fills */}
          {series.map((s) => {
            const areaD =
              pathD(s.data) +
              ` L${toX(days - 1).toFixed(1)},${(PAD.top + innerH).toFixed(1)}` +
              ` L${toX(0).toFixed(1)},${(PAD.top + innerH).toFixed(1)} Z`;
            return (
              <path
                key={`area-${s.brand.name}`}
                d={areaD}
                fill={s.color}
                opacity={0.06}
              />
            );
          })}

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
              <circle
                key={`dot-${s.brand.name}`}
                cx={toX(days - 1)}
                cy={toY(last)}
                r="4"
                fill={s.color}
                stroke="#050506"
                strokeWidth="2"
              />
            );
          })}
        </svg>
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
      UK: [
        { name: "Barclays",   initials: "BA", color: "#00AEEF", website: "https://www.barclays.co.uk",    visibility: 87, chatgpt: 91, perplexity: 85, gemini: 88, claude: 84 },
        { name: "HSBC",       initials: "HS", color: "#DB0011", website: "https://www.hsbc.co.uk",        visibility: 83, chatgpt: 88, perplexity: 80, gemini: 82, claude: 82 },
        { name: "Lloyds",     initials: "LL", color: "#006A4D", website: "https://www.lloydsbank.com",    visibility: 79, chatgpt: 82, perplexity: 77, gemini: 80, claude: 77 },
        { name: "NatWest",    initials: "NW", color: "#42145F", website: "https://www.natwest.com",       visibility: 74, chatgpt: 76, perplexity: 72, gemini: 75, claude: 73 },
        { name: "Santander",  initials: "SA", color: "#EC0000", website: "https://www.santander.co.uk",   visibility: 68, chatgpt: 70, perplexity: 66, gemini: 68, claude: 68 },
        { name: "Halifax",    initials: "HA", color: "#0076BE", website: "https://www.halifax.co.uk",     visibility: 61, chatgpt: 63, perplexity: 59, gemini: 62, claude: 60 },
        { name: "Nationwide", initials: "NA", color: "#1B3D6E", website: "https://www.nationwide.co.uk",  visibility: 55, chatgpt: 57, perplexity: 53, gemini: 56, claude: 54 },
      ],
      US: [
        { name: "JPMorgan Chase",  initials: "JP", color: "#003087", website: "https://www.jpmorganchase.com",  visibility: 92, chatgpt: 94, perplexity: 91, gemini: 93, claude: 90 },
        { name: "Bank of America", initials: "BA", color: "#E31837", website: "https://www.bankofamerica.com",  visibility: 88, chatgpt: 90, perplexity: 86, gemini: 89, claude: 87 },
        { name: "Wells Fargo",     initials: "WF", color: "#D71E28", website: "https://www.wellsfargo.com",     visibility: 84, chatgpt: 86, perplexity: 82, gemini: 85, claude: 83 },
        { name: "Citibank",        initials: "CI", color: "#003B8E", website: "https://www.citi.com",           visibility: 79, chatgpt: 81, perplexity: 77, gemini: 80, claude: 78 },
        { name: "Goldman Sachs",   initials: "GS", color: "#6EB2FF", website: "https://www.goldmansachs.com",   visibility: 74, chatgpt: 76, perplexity: 72, gemini: 75, claude: 73 },
        { name: "Morgan Stanley",  initials: "MS", color: "#004B8D", website: "https://www.morganstanley.com",  visibility: 69, chatgpt: 71, perplexity: 67, gemini: 70, claude: 68 },
        { name: "US Bank",         initials: "US", color: "#002F6C", website: "https://www.usbank.com",         visibility: 58, chatgpt: 60, perplexity: 56, gemini: 59, claude: 57 },
      ],
      EU: [
        { name: "BNP Paribas",     initials: "BN", color: "#007B5E", website: "https://www.bnpparibas.com",     visibility: 85, chatgpt: 87, perplexity: 83, gemini: 86, claude: 84 },
        { name: "Deutsche Bank",   initials: "DB", color: "#0018A8", website: "https://www.db.com",             visibility: 81, chatgpt: 83, perplexity: 79, gemini: 82, claude: 80 },
        { name: "ING",             initials: "IN", color: "#FF6200", website: "https://www.ing.com",            visibility: 77, chatgpt: 79, perplexity: 75, gemini: 78, claude: 76 },
        { name: "UniCredit",       initials: "UC", color: "#E2001A", website: "https://www.unicreditgroup.eu",  visibility: 71, chatgpt: 73, perplexity: 69, gemini: 72, claude: 70 },
        { name: "Société Générale",initials: "SG", color: "#E60028", website: "https://www.societegenerale.com",visibility: 66, chatgpt: 68, perplexity: 64, gemini: 67, claude: 65 },
        { name: "ABN AMRO",        initials: "AB", color: "#009A44", website: "https://www.abnamro.com",        visibility: 60, chatgpt: 62, perplexity: 58, gemini: 61, claude: 59 },
        { name: "Rabobank",        initials: "RA", color: "#FF6600", website: "https://www.rabobank.com",       visibility: 54, chatgpt: 56, perplexity: 52, gemini: 55, claude: 53 },
      ],
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
      UK: [
        { name: "Tesco",       initials: "TE", color: "#EE1C25", website: "https://www.tesco.com",           visibility: 91, chatgpt: 93, perplexity: 90, gemini: 91, claude: 90 },
        { name: "Sainsbury's", initials: "SA", color: "#FF7200", website: "https://www.sainsburys.co.uk",    visibility: 84, chatgpt: 86, perplexity: 83, gemini: 84, claude: 83 },
        { name: "Asda",        initials: "AS", color: "#7DC242", website: "https://www.asda.com",            visibility: 80, chatgpt: 83, perplexity: 78, gemini: 80, claude: 79 },
        { name: "Morrisons",   initials: "MO", color: "#FFDC00", website: "https://groceries.morrisons.com", visibility: 72, chatgpt: 74, perplexity: 70, gemini: 73, claude: 71 },
        { name: "Waitrose",    initials: "WA", color: "#5D8233", website: "https://www.waitrose.com",        visibility: 68, chatgpt: 70, perplexity: 66, gemini: 69, claude: 67 },
        { name: "Aldi",        initials: "AL", color: "#002D72", website: "https://www.aldi.co.uk",          visibility: 62, chatgpt: 64, perplexity: 60, gemini: 63, claude: 61 },
        { name: "Lidl",        initials: "LI", color: "#0050AA", website: "https://www.lidl.co.uk",          visibility: 58, chatgpt: 60, perplexity: 56, gemini: 59, claude: 57 },
      ],
      US: [
        { name: "Walmart",      initials: "WA", color: "#0071CE", website: "https://www.walmart.com",          visibility: 95, chatgpt: 97, perplexity: 94, gemini: 96, claude: 93 },
        { name: "Amazon",       initials: "AM", color: "#FF9900", website: "https://www.amazon.com",           visibility: 93, chatgpt: 95, perplexity: 92, gemini: 94, claude: 91 },
        { name: "Target",       initials: "TA", color: "#CC0000", website: "https://www.target.com",           visibility: 86, chatgpt: 88, perplexity: 84, gemini: 87, claude: 85 },
        { name: "Kroger",       initials: "KR", color: "#004990", website: "https://www.kroger.com",           visibility: 78, chatgpt: 80, perplexity: 76, gemini: 79, claude: 77 },
        { name: "Costco",       initials: "CO", color: "#005DAA", website: "https://www.costco.com",           visibility: 74, chatgpt: 76, perplexity: 72, gemini: 75, claude: 73 },
        { name: "Whole Foods",  initials: "WF", color: "#00674B", website: "https://www.wholefoodsmarket.com", visibility: 65, chatgpt: 67, perplexity: 63, gemini: 66, claude: 64 },
        { name: "Trader Joe's", initials: "TJ", color: "#CC0000", website: "https://www.traderjoes.com",       visibility: 59, chatgpt: 61, perplexity: 57, gemini: 60, claude: 58 },
      ],
      EU: [
        { name: "Carrefour", initials: "CA", color: "#003399", website: "https://www.carrefour.com", visibility: 88, chatgpt: 90, perplexity: 86, gemini: 89, claude: 87 },
        { name: "Lidl",      initials: "LI", color: "#0050AA", website: "https://www.lidl.com",      visibility: 84, chatgpt: 86, perplexity: 82, gemini: 85, claude: 83 },
        { name: "Aldi",      initials: "AL", color: "#002D72", website: "https://www.aldi.com",      visibility: 80, chatgpt: 82, perplexity: 78, gemini: 81, claude: 79 },
        { name: "REWE",      initials: "RE", color: "#CC0000", website: "https://www.rewe.de",       visibility: 71, chatgpt: 73, perplexity: 69, gemini: 72, claude: 70 },
        { name: "E.Leclerc", initials: "EL", color: "#003399", website: "https://www.e.leclerc",    visibility: 65, chatgpt: 67, perplexity: 63, gemini: 66, claude: 64 },
        { name: "Jumbo",     initials: "JU", color: "#FFC400", website: "https://www.jumbo.com",     visibility: 57, chatgpt: 59, perplexity: 55, gemini: 58, claude: 56 },
        { name: "Edeka",     initials: "ED", color: "#E30613", website: "https://www.edeka.de",      visibility: 52, chatgpt: 54, perplexity: 50, gemini: 53, claude: 51 },
      ],
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
      UK: [
        { name: "NHS",              initials: "NH", color: "#005EB8", website: "https://www.nhs.uk",               visibility: 95, chatgpt: 97, perplexity: 94, gemini: 95, claude: 94 },
        { name: "Bupa",             initials: "BU", color: "#1E9BD7", website: "https://www.bupa.co.uk",            visibility: 88, chatgpt: 90, perplexity: 87, gemini: 89, claude: 86 },
        { name: "Nuffield Health",  initials: "NU", color: "#00539B", website: "https://www.nuffieldhealth.com",    visibility: 79, chatgpt: 81, perplexity: 78, gemini: 79, claude: 78 },
        { name: "Spire Healthcare", initials: "SP", color: "#E4003A", website: "https://www.spirehealthcare.com",   visibility: 73, chatgpt: 75, perplexity: 72, gemini: 73, claude: 72 },
        { name: "BMI Healthcare",   initials: "BM", color: "#003087", website: "https://www.bmihealthcare.co.uk",   visibility: 65, chatgpt: 67, perplexity: 63, gemini: 66, claude: 64 },
        { name: "Vitality",         initials: "VI", color: "#E8175D", website: "https://www.vitality.co.uk",        visibility: 58, chatgpt: 60, perplexity: 56, gemini: 59, claude: 57 },
        { name: "AXA Health",       initials: "AX", color: "#00008F", website: "https://www.axahealth.co.uk",       visibility: 52, chatgpt: 54, perplexity: 50, gemini: 53, claude: 51 },
      ],
      US: [
        { name: "UnitedHealth", initials: "UH", color: "#196ECF", website: "https://www.unitedhealthgroup.com", visibility: 91, chatgpt: 93, perplexity: 89, gemini: 92, claude: 90 },
        { name: "CVS Health",   initials: "CV", color: "#CC0000", website: "https://www.cvshealth.com",         visibility: 86, chatgpt: 88, perplexity: 84, gemini: 87, claude: 85 },
        { name: "Aetna",        initials: "AE", color: "#7B2D8B", website: "https://www.aetna.com",             visibility: 80, chatgpt: 82, perplexity: 78, gemini: 81, claude: 79 },
        { name: "Blue Cross",   initials: "BC", color: "#00338D", website: "https://www.bcbs.com",              visibility: 76, chatgpt: 78, perplexity: 74, gemini: 77, claude: 75 },
        { name: "Kaiser",       initials: "KA", color: "#003087", website: "https://www.kaiserpermanente.org",  visibility: 71, chatgpt: 73, perplexity: 69, gemini: 72, claude: 70 },
        { name: "Humana",       initials: "HU", color: "#00A651", website: "https://www.humana.com",            visibility: 65, chatgpt: 67, perplexity: 63, gemini: 66, claude: 64 },
        { name: "Cigna",        initials: "CI", color: "#006298", website: "https://www.cigna.com",             visibility: 59, chatgpt: 61, perplexity: 57, gemini: 60, claude: 58 },
      ],
      EU: [
        { name: "Fresenius",    initials: "FR", color: "#005CA9", website: "https://www.fresenius.com",    visibility: 82, chatgpt: 84, perplexity: 80, gemini: 83, claude: 81 },
        { name: "AXA Health",   initials: "AX", color: "#00008F", website: "https://www.axa.com",          visibility: 77, chatgpt: 79, perplexity: 75, gemini: 78, claude: 76 },
        { name: "Allianz Care", initials: "AL", color: "#003781", website: "https://www.allianzcare.com",   visibility: 72, chatgpt: 74, perplexity: 70, gemini: 73, claude: 71 },
        { name: "Generali",     initials: "GE", color: "#C8102E", website: "https://www.generali.com",     visibility: 67, chatgpt: 69, perplexity: 65, gemini: 68, claude: 66 },
        { name: "DKV",          initials: "DK", color: "#006DB7", website: "https://www.dkv.com",          visibility: 61, chatgpt: 63, perplexity: 59, gemini: 62, claude: 60 },
        { name: "Bupa Global",  initials: "BG", color: "#1E9BD7", website: "https://www.bupaglobal.com",   visibility: 55, chatgpt: 57, perplexity: 53, gemini: 56, claude: 54 },
        { name: "VGZ",          initials: "VG", color: "#009640", website: "https://www.vgz.nl",           visibility: 48, chatgpt: 50, perplexity: 46, gemini: 49, claude: 47 },
      ],
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
      UK: [
        { name: "Zara",    initials: "ZA", color: "#888",    website: "https://www.zara.com",    visibility: 90, chatgpt: 92, perplexity: 89, gemini: 91, claude: 88 },
        { name: "H&M",     initials: "HM", color: "#E50010", website: "https://www.hm.com",      visibility: 85, chatgpt: 87, perplexity: 84, gemini: 86, claude: 83 },
        { name: "ASOS",    initials: "AS", color: "#2D2D2D", website: "https://www.asos.com",    visibility: 80, chatgpt: 82, perplexity: 79, gemini: 81, claude: 78 },
        { name: "Primark", initials: "PR", color: "#003087", website: "https://www.primark.com", visibility: 76, chatgpt: 78, perplexity: 74, gemini: 77, claude: 75 },
        { name: "Shein",   initials: "SH", color: "#EE1C25", website: "https://www.shein.com",   visibility: 71, chatgpt: 73, perplexity: 69, gemini: 72, claude: 70 },
        { name: "Boohoo",  initials: "BO", color: "#FF008D", website: "https://www.boohoo.com",  visibility: 60, chatgpt: 62, perplexity: 58, gemini: 61, claude: 59 },
        { name: "Topshop", initials: "TO", color: "#555",    website: "https://www.topshop.com", visibility: 53, chatgpt: 55, perplexity: 51, gemini: 54, claude: 52 },
      ],
      US: [
        { name: "Nike",           initials: "NK", color: "#111",    website: "https://www.nike.com",        visibility: 94, chatgpt: 96, perplexity: 92, gemini: 95, claude: 93 },
        { name: "Gap",            initials: "GA", color: "#003087", website: "https://www.gap.com",         visibility: 82, chatgpt: 84, perplexity: 80, gemini: 83, claude: 81 },
        { name: "Shein",          initials: "SH", color: "#EE1C25", website: "https://www.shein.com",       visibility: 78, chatgpt: 80, perplexity: 76, gemini: 79, claude: 77 },
        { name: "H&M",            initials: "HM", color: "#E50010", website: "https://www.hm.com",          visibility: 74, chatgpt: 76, perplexity: 72, gemini: 75, claude: 73 },
        { name: "Zara",           initials: "ZA", color: "#888",    website: "https://www.zara.com",        visibility: 70, chatgpt: 72, perplexity: 68, gemini: 71, claude: 69 },
        { name: "American Eagle", initials: "AE", color: "#003087", website: "https://www.ae.com",          visibility: 61, chatgpt: 63, perplexity: 59, gemini: 62, claude: 60 },
        { name: "Old Navy",       initials: "ON", color: "#004B8D", website: "https://www.oldnavy.gap.com", visibility: 55, chatgpt: 57, perplexity: 53, gemini: 56, claude: 54 },
      ],
      EU: [
        { name: "Zara",      initials: "ZA", color: "#888",    website: "https://www.zara.com",     visibility: 92, chatgpt: 94, perplexity: 90, gemini: 93, claude: 91 },
        { name: "H&M",       initials: "HM", color: "#E50010", website: "https://www.hm.com",       visibility: 87, chatgpt: 89, perplexity: 85, gemini: 88, claude: 86 },
        { name: "Mango",     initials: "MA", color: "#FF6B35", website: "https://www.mango.com",    visibility: 79, chatgpt: 81, perplexity: 77, gemini: 80, claude: 78 },
        { name: "Shein",     initials: "SH", color: "#EE1C25", website: "https://www.shein.com",    visibility: 75, chatgpt: 77, perplexity: 73, gemini: 76, claude: 74 },
        { name: "Reserved",  initials: "RE", color: "#1A1A1A", website: "https://www.reserved.com", visibility: 64, chatgpt: 66, perplexity: 62, gemini: 65, claude: 63 },
        { name: "C&A",       initials: "CA", color: "#003087", website: "https://www.c-and-a.com",  visibility: 57, chatgpt: 59, perplexity: 55, gemini: 58, claude: 56 },
        { name: "Vero Moda", initials: "VM", color: "#2D2D2D", website: "https://www.veromoda.com", visibility: 50, chatgpt: 52, perplexity: 48, gemini: 51, claude: 49 },
      ],
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

function LlmLogo({ platform }: { platform: typeof LLM_PLATFORMS[number] }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="flex justify-center">
      {imgError ? (
        <span className="text-xs font-bold" style={{ color: platform.color }}>
          {platform.label.slice(0, 3).toUpperCase()}
        </span>
      ) : (
        <img src={faviconUrl(platform.website, 32)} alt={platform.label} title={platform.label}
          className="w-5 h-5 object-contain rounded" onError={() => setImgError(true)} />
      )}
    </div>
  );
}

export function IndustryLeaderboards() {
  const [activeIndustry, setActiveIndustry] = useState("banking");
  const [activeCountry, setActiveCountry] = useState<CountryCode>("UK");
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = industries.find((i) => i.id === activeIndustry)!;
  const brands = current.countries[activeCountry];
  const sorted = useMemo(
    () => [...brands].sort((a, b) => b.visibility - a.visibility).map((b, i) => ({ ...b, rank: i + 1 })),
    [brands]
  );
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
            <ZapIcon className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Live AI Visibility Data · UK · US · EU
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            <span className="text-white">See who's winning </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI search</span>
          </h1>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mb-10">
            Real AI visibility rankings across industries — powered by thousands of daily queries to ChatGPT, Perplexity, Gemini & Claude.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {[
              { icon: BarChart2Icon, label: "4 Industries tracked" },
              { icon: GlobeIcon,     label: "3 Markets: UK · US · EU" },
              { icon: SparklesIcon,  label: "Updated weekly" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <Icon className="w-4 h-4 text-purple-400" />{label}
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
                return (
                  <button key={c.code} onClick={() => setActiveCountry(c.code as CountryCode)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      active ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-white"
                    }`}>
                    <span className="text-base leading-none">{c.flag}</span>
                    <span className="hidden sm:inline">{c.label}</span>
                    <span className="inline sm:hidden">{c.code}</span>
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
          <TopThreeChart brands={sorted} />

          {/* Table */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[40px_1fr_150px_repeat(4,60px)] gap-3 px-5 py-3 bg-white/[0.03] border-b border-white/10 items-center">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">#</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Brand</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">AI Visibility</span>
              {LLM_PLATFORMS.map((p) => (
                <LlmLogo key={p.key} platform={p} />
              ))}
            </div>

            {/* Rows */}
            {sorted.map((brand, idx) => (
              <div key={`${activeCountry}-${activeIndustry}-${brand.name}`}
                className={`grid grid-cols-[40px_1fr_150px_repeat(4,60px)] gap-3 items-center px-5 py-4 transition-colors duration-150 hover:bg-white/[0.03] ${
                  idx < sorted.length - 1 ? "border-b border-white/[0.06]" : ""
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

                {/* Platform scores */}
                {LLM_PLATFORMS.map((p) => (
                  <div key={p.key} className="flex justify-center">
                    <span className="text-sm font-bold tabular-nums" style={{ color: p.color }}>
                      {brand[p.key as keyof typeof brand] as number}%
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-gray-500">
              Showing {sorted.length} brands ·{" "}
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
