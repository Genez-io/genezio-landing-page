import { Button } from "@/components/ui/button";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  ShoppingBagIcon,
  StoreIcon,
  TagIcon,
  CopyIcon,
  LayersIcon,
  BookOpenIcon,
  MessageSquareIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

function Bar({
  label,
  pct,
  scale = 2.6,
  hl = false,
  sub,
}: {
  label: string;
  pct: number;
  scale?: number;
  hl?: boolean;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-40 flex-shrink-0 min-w-0">
        <div
          className={`text-xs truncate ${
            hl ? "text-emerald-300 font-semibold" : "text-white/70"
          }`}
        >
          {label}
        </div>
        {sub && <div className="text-[10px] text-white/40 truncate">{sub}</div>}
      </div>
      <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full ${hl ? "bg-emerald-500" : "bg-white/20"}`}
          style={{ width: `${Math.min(pct * scale, 100)}%` }}
        />
      </div>
      <span
        className={`text-xs font-mono w-12 text-right flex-shrink-0 ${
          hl ? "text-emerald-400" : "text-white/40"
        }`}
      >
        {pct}%
      </span>
    </div>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
function ShoppingHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <ShoppingBagIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">
                In-Chat Shopping · AI Product Intelligence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6 text-white">
              AI recommends your brand.
              <br />
              <span className="text-emerald-400">
                Then it has to pick a product.
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              When shoppers ask an assistant what to buy, you win the brand
              argument — but the win stops converting the moment it names a
              single product. In-Chat Shopping shows you exactly where, and why.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20"
                >
                  Book a Demo
                </Button>
              </a>
              <a href="https://app.genezio.ai/sign-up">
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold px-6 py-6 rounded-lg transition-all"
                >
                  Get Started
                </Button>
              </a>
            </div>
          </div>

          {/* The gap visual */}
          <div className="relative">
            <div className="absolute -inset-3 bg-emerald-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-6">
                Brand vs product recommendation
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm text-white/70">
                      Brand recommended
                    </span>
                    <span className="text-3xl font-extrabold text-white">
                      100%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-full rounded-full bg-white/40" />
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm text-white/70">
                      Best single product
                    </span>
                    <span className="text-3xl font-extrabold text-emerald-400">
                      6%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: "6%" }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#B0B0B3] mt-6 leading-relaxed">
                The brand argument is already won. The product argument is never
                made — a structural gap, not a quality one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  GAP STATS BAND  ───────────── */
function GapStats() {
  const stats = [
    { value: "180", label: "AI shopping conversations observed" },
    { value: "64", label: "separate entries for your brand in the AI catalogue" },
    { value: "190", label: "products competing for the same carousels" },
    { value: "540", label: "retail price offers the AI read out" },
  ];
  return (
    <section className="py-16 md:py-24 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="border-t border-white/10 pt-5">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-none">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-[#B0B0B3] leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-white/30 mt-10">
          A five-day window on ChatGPT and Google AI Overview. Figures on this
          page are illustrative sample data.
        </p>
      </div>
    </section>
  );
}

/* ─────────────  PRODUCT PERFORMANCE  ───────────── */
function ProductPerformance() {
  const rows = [
    { label: "Your flagship", pct: 31, hl: true, sub: "wireless earbuds" },
    { label: "Competitor A", pct: 16, sub: "headset" },
    { label: "Competitor B", pct: 9, sub: "headset" },
    { label: "Competitor C", pct: 7, sub: "wireless earbuds" },
    { label: "Competitor D", pct: 6, sub: "wireless earbuds" },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
              Product performance
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Your best product{" "}
              <span className="text-emerald-400">beats the field</span>
            </h2>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed">
              On raw carousel visibility your flagship is out in front — nearly
              double the strongest rival. So the recommendation gap isn't about
              product quality. It's about everything that happens to your
              catalogue before the assistant answers.
            </p>
          </div>
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-6">
              Carousel visibility
            </div>
            <div className="space-y-4">
              {rows.map((r, i) => (
                <Bar key={i} {...r} />
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6">
              Visibility = share of shopping conversations whose carousel
              included the product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  SELF-COMPETITION / DUPLICATION  ───────────── */
function SelfCompetition() {
  const entries = [
    { label: "Flagship Pro", pct: 21 },
    { label: "Flagship Pro Wireless", pct: 16 },
    { label: "Flagship Pro UC Stereo", pct: 7 },
    { label: "Flagship Pro Wireless Stereo", pct: 5 },
    { label: "Flagship Pro USB-C Headset", pct: 3 },
    { label: "Flagship Pro Link Stereo", pct: 2 },
    { label: "+ 6 more feed variants", pct: 2 },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            The mechanism
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            One product.{" "}
            <span className="text-emerald-400">Twelve front doors.</span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto mt-6">
            A single product reaches the AI as a dozen differently-named entries,
            pulled from a dozen retailer feeds. Every appearance is credited to
            whichever name surfaced — so the product never accumulates the weight
            it has earned, and no entry ever looks like the obvious answer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-center">
          {/* price spread callout */}
          <div className="bg-[#0A0A0C] border border-amber-500/25 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <CopyIcon className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono tracking-widest text-white/50">
                SAME PRODUCT · SAME PHOTO
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 text-center bg-[#050506] border border-white/10 rounded-xl p-5">
                <div className="text-3xl font-extrabold text-white leading-none">
                  $219
                </div>
                <div className="text-[11px] text-white/40 mt-2">Entry A</div>
              </div>
              <div className="text-white/40 font-mono text-sm">vs</div>
              <div className="flex-1 text-center bg-[#050506] border border-white/10 rounded-xl p-5">
                <div className="text-3xl font-extrabold text-white leading-none">
                  $313
                </div>
                <div className="text-[11px] text-white/40 mt-2">Entry B</div>
              </div>
            </div>
            <p className="text-sm text-amber-300/90 mt-6">
              A 43% price spread for the same product, inside the same answer
              engine.
            </p>
          </div>

          {/* split visibility */}
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2">
              100 appearances, split 12 ways
            </div>
            <p className="text-xs text-white/40 mb-5">
              No single entry clears 21% — so none looks like the category's
              answer.
            </p>
            <div className="space-y-3">
              {entries.map((e, i) => (
                <Bar key={i} label={e.label} pct={e.pct} scale={4} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  CATALOGUE SURFACE + SELF-COMPETITION SUMMARY  ───────────── */
function CatalogueSurface() {
  const rows = [
    { label: "Your brand", pct: 64, hl: true },
    { label: "Competitor A", pct: 34 },
    { label: "Competitor B", pct: 15 },
    { label: "Competitor C", pct: 12 },
    { label: "Competitor D", pct: 10 },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8 order-2 lg:order-1">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-6">
              Distinct entries put in front of the AI
            </div>
            <div className="space-y-4">
              {rows.map((r, i) => (
                <Bar key={i} label={r.label} pct={r.pct} scale={1.4} hl={r.hl} />
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6">
              Counted as distinct products appearing in at least one carousel in
              the window.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
              Catalogue surface
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              You present 64 products.{" "}
              <span className="text-emerald-400">A rival gets by on 12.</span>
            </h2>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed mb-6">
              Your range is genuinely broader — but not five times broader. Most
              of the difference is duplication, not portfolio. And in a five-slot
              carousel, your own duplicate listings become the most frequent
              thing standing between a buyer and a decision.
            </p>
            <div className="bg-[#0A0A0C] border border-emerald-500/25 rounded-xl p-5">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">
                6 of 12
              </div>
              <div className="text-sm text-white/70">
                products shown beside your flagship are also your own listings —
                you're competing with yourself.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  SOURCE AUTHORITY  ───────────── */
function SourceAuthority() {
  const sources = [
    { host: "review-site.com", note: "Flagship review — marks down on noise cancellation", tag: "MIXED", reads: 28 },
    { host: "yourbrand.com", note: "Flagship product page", tag: "FIRST-PARTY", reads: 22 },
    { host: "ratings-site.com", note: "Poor isolation, audio leakage", tag: "NEUTRAL", reads: 17 },
    { host: "tech-mag.com", note: "Named best overall for calls", tag: "POSITIVE", reads: 15 },
    { host: "review-site.com", note: "Explicit do-not-buy verdict on a sibling model", tag: "NEGATIVE", reads: 13 },
  ];
  const tagColor: Record<string, string> = {
    "FIRST-PARTY": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    POSITIVE: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    NEGATIVE: "bg-red-500/10 text-red-300 border-red-500/25",
    MIXED: "bg-amber-500/10 text-amber-300 border-amber-500/25",
    NEUTRAL: "bg-white/5 text-white/50 border-white/15",
  };
  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
              Source authority
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              You wrote{" "}
              <span className="text-emerald-400">18%</span> of what the AI read
              before recommending you
            </h2>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed mb-8">
              Before naming a product, the assistant reads. The other 82% is
              where the objections originate — and the single most-read page is a
              third-party review that marks your flagship down. When your own
              pages are split across regional domains, your authority splits with
              them.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "1,900", l: "source reads behind one product decision" },
                { v: "980", l: "distinct sources consulted" },
                { v: "18%", l: "first-party share of the evidence" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="bg-[#0A0A0C] border border-white/10 rounded-xl p-4"
                >
                  <div className="text-xl font-extrabold text-white leading-none mb-1">
                    {m.v}
                  </div>
                  <div className="text-[11px] text-white/50 leading-tight">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <BookOpenIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono tracking-widest text-white/50">
                MOST-READ SOURCES
              </span>
            </div>
            <div className="space-y-3">
              {sources.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#050506] border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white font-medium truncate">
                      {s.host}
                    </div>
                    <div className="text-[11px] text-white/50 truncate">
                      {s.note}
                    </div>
                  </div>
                  <span
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded border whitespace-nowrap ${tagColor[s.tag]}`}
                  >
                    {s.tag}
                  </span>
                  <span className="text-xs font-mono text-white/40 w-14 text-right flex-shrink-0">
                    {s.reads} reads
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  PRICE AUTHORSHIP  ───────────── */
function PriceAuthorship() {
  const retailers = [
    { label: "Amazon", pct: 52 },
    { label: "Newegg", pct: 34 },
    { label: "Best Buy", pct: 28 },
    { label: "Walmart", pct: 19 },
    { label: "Target", pct: 15 },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
              Price authorship
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Every price the AI quoted came from{" "}
              <span className="text-emerald-400">someone else</span>
            </h2>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed mb-6">
              540 offers across your shopping conversations. A single retailer
              framed the price in more than half of them. Your own store doesn't
              appear in the offer layer at all — even though your domain is the
              single most-read source everywhere else.
            </p>
            <div className="flex items-center gap-3 bg-[#0A0A0C] border border-amber-500/25 rounded-xl p-5">
              <TagIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-sm text-white/80">
                yourbrand.com — not present in the offer layer.
              </span>
            </div>
          </div>
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <StoreIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                Who frames your price
              </span>
            </div>
            <div className="space-y-4">
              {retailers.map((r, i) => (
                <Bar key={i} label={r.label} pct={r.pct} scale={1.7} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  PERCEPTION  ───────────── */
function Perception() {
  const objections = [
    "Noise cancellation isn't strong in loud rooms",
    "Microphone struggles in noisy offices",
    "Call clarity drops in busy environments",
  ];
  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            Flagship perception
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            The complaints are all{" "}
            <span className="text-emerald-400">one complaint</span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto mt-6">
            Sentiment runs strongly positive. What makes the negatives worth
            acting on isn't their volume — it's their uniformity. They converge
            on a single, answerable claim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-6">
              Statement clusters · last 30 days
            </div>
            <div className="flex h-4 rounded-full overflow-hidden mb-4">
              <div className="bg-emerald-500" style={{ width: "80%" }} />
              <div className="bg-red-500" style={{ width: "14%" }} />
              <div className="bg-white/20" style={{ width: "6%" }} />
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-emerald-300">210 positive</span>
              <span className="text-red-300">38 negative</span>
              <span className="text-white/50">14 neutral</span>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <AlertTriangleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/70 leading-relaxed">
                  A live cross-engine contradiction: one engine calls your noise
                  cancellation "modest," another calls it "advanced." Both are
                  answering buyers today — one of them is wrong.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquareIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                Five clusters · one objection
              </span>
            </div>
            <div className="space-y-3">
              {objections.map((o, i) => (
                <div
                  key={i}
                  className="border-l-2 border-red-400/60 pl-4 py-1 text-sm text-white/80"
                >
                  {o}
                </div>
              ))}
              <div className="border-l-2 border-white/15 pl-4 py-1 text-sm text-white/40">
                + 2 more, same theme
              </div>
            </div>
            <p className="text-sm text-emerald-300/90 mt-6">
              One objection — answerable with published measurement data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  THE THREE FINDINGS  ───────────── */
function ThreeFindings() {
  const findings = [
    {
      big: "100% → 6%",
      title: "Brand equity isn't reaching the shelf",
      detail:
        "AI recommends your brand in every buying conversation — but names your best product in only a fraction of them. The brand argument is won; the product argument is never made.",
    },
    {
      big: "64 vs 12",
      title: "The range competes against itself",
      detail:
        "You reach the AI as dozens of entries where a rival manages with a handful. One product alone exists as 12 differently-named listings — so your own duplicates crowd your flagship out.",
    },
    {
      big: "18% of the reads",
      title: "Someone else writes the product story",
      detail:
        "You wrote a fraction of what the assistant read before recommending you, and none of the prices it quoted. The most-read page is a third-party review that marks you down.",
    },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            The three findings that matter
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Everything reduces to three things
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {findings.map((f, i) => (
            <div
              key={i}
              className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-7 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-4 leading-none">
                {f.big}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-[#B0B0B3] leading-relaxed">
                {f.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-8">
            You've already won the recommendation. What's missing is a product
            the AI can name{" "}
            <span className="text-emerald-400">without hesitating.</span>
          </p>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
            >
              See your product intelligence report
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export function InChatShopping() {
  return (
    <>
      <PolymetSEO
        title="In-Chat Shopping — AI Product Intelligence | Genezio"
        description="AI recommends your brand — but does it name your product? Genezio In-Chat Shopping reveals the gap between brand and product recommendation, catalogue duplication, price authorship, source authority, and perception across ChatGPT and Google AI Overview. Book a demo!"
        canonicalPath="/in-chat-shopping/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Genezio In-Chat Shopping?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In-Chat Shopping is AI product intelligence: it measures how answer engines recommend, price, and route your products in shopping conversations — the gap between brand and product recommendation, catalogue duplication and self-competition, which retailers author your prices, how much of the evidence AI reads is first-party, and how your flagship is perceived — across ChatGPT and Google AI Overview.",
              },
            },
            {
              "@type": "Question",
              name: "Why does AI recommend a brand but not its product?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Because product recommendation is decided by the shopping catalogue, not brand equity. When one product reaches the AI as many differently-named entries from different retailer feeds, its visibility splits and no single entry looks like the obvious answer. Combined with third-party price authorship and low first-party source authority, a strong brand can still fail to get its product named.",
              },
            },
          ],
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <ShoppingHero />
        <GapStats />
        <ProductPerformance />
        <SelfCompetition />
        <CatalogueSurface />
        <SourceAuthority />
        <PriceAuthorship />
        <Perception />
        <ThreeFindings />
        <GenezioCtaSection />
      </div>
    </>
  );
}
