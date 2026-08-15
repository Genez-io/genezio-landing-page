import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  StoreIcon,
  PackageIcon,
  BookOpenIcon,
  MessageSquareIcon,
  BarChart3Icon,
  TrophyIcon,
  MapPinIcon,
  CopyIcon,
  TagIcon,
  QuoteIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

function Bar({
  label,
  pct,
  scale = 2.2,
  hl = false,
}: {
  label: string;
  pct: number;
  scale?: number;
  hl?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-xs w-32 flex-shrink-0 truncate ${
          hl ? "text-emerald-300 font-semibold" : "text-white/70"
        }`}
      >
        {label}
      </span>
      <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full ${hl ? "bg-emerald-500" : "bg-white/20"}`}
          style={{ width: `${Math.min(pct * scale, 100)}%` }}
        />
      </div>
      <span
        className={`text-xs font-mono w-10 text-right flex-shrink-0 ${
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
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <HeroEyebrow className="mb-6">In-Chat Shopping · AI Product Intelligence</HeroEyebrow>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6 text-white">
              AI recommends your brand.
              <br />
              <span className="text-emerald-400">
                Then it has to pick a product.
              </span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              When shoppers ask an assistant what to buy, winning the brand isn't
              the same as winning the sale. In-Chat Shopping shows how AI ranks,
              prices, sources, and sells your products, so you know exactly where
              the recommendation converts, and where it slips.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-6 text-base font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-black/20"
                >
                  Get a demo
                </Button>
              </a>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC">
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold px-6 py-6 rounded-xl transition-all"
                >
                  Talk to Sales
                </Button>
              </a>
            </div>
          </div>

          {/* concept visual: brand vs product */}
          <div className="relative">
            <div className="absolute -inset-3 bg-white/[0.04] rounded-3xl blur-2xl" />
            <div className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex justify-end mb-4">
                <div className="bg-white/[0.06] border border-white/10 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[88%]">
                  <p className="text-sm text-emerald-50">
                    "Which one should I actually buy?"
                  </p>
                </div>
              </div>
              <div className="flex justify-start mb-6">
                <div className="bg-[#1C1C20]/70 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[92%]">
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    Your brand is a great choice, for this use case, consider{" "}
                    <span className="text-white font-semibold bg-white/[0.06] border border-white/15 rounded px-1.5 py-0.5">
                      one of these models…
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#050506] border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-extrabold text-white leading-none mb-1.5">
                    Brand
                  </div>
                  <div className="text-[11px] text-white/50">
                    recommended with confidence
                  </div>
                </div>
                <div className="bg-[#050506] border border-white/15 rounded-xl p-4 text-center">
                  <div className="text-3xl font-extrabold text-emerald-400 leading-none mb-1.5">
                    Product?
                  </div>
                  <div className="text-[11px] text-white/50">
                    the moment the win is decided
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  WHAT WE ANALYZE, 4 dimensions  ───────────── */
function WhatWeAnalyze() {
  const dims = [
    {
      icon: MessageSquareIcon,
      name: "Conversations",
      description:
        "Every shopping conversation buyers have with AI, the intent behind them, the questions they ask, and how your category gets compared before a decision.",
    },
    {
      icon: PackageIcon,
      name: "Products",
      description:
        "How AI ranks and recommends each of your products, visibility, recommendation share, and the duplicate listings that quietly compete with themselves.",
    },
    {
      icon: StoreIcon,
      name: "Retailers",
      description:
        "Where AI routes the sale, which marketplace wins your product, how your own store performs, and who frames the price shoppers are shown.",
    },
    {
      icon: BookOpenIcon,
      name: "Sources",
      description:
        "What AI reads before it recommends, the reviews and pages it trusts, how much is first-party, and the sentiment shaping the answer.",
    },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">What we analyze</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Four layers behind every AI shopping answer
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mt-6">
            In-Chat Shopping reads the whole buying moment, not just whether
            you're mentioned, but everything that decides whether AI sells your
            product.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {dims.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-7 hover:border-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{d.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {d.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  WHAT IT REVEALS, general insights  ───────────── */
function WhatItReveals() {
  const insights = [
    {
      icon: TrophyIcon,
      title: "Brand vs product gap",
      description:
        "See where AI recommends your brand but never names your product, the win that stops converting.",
    },
    {
      icon: CopyIcon,
      title: "Self-competition",
      description:
        "Spot duplicate feed listings of the same product that split its visibility and show inconsistent prices.",
    },
    {
      icon: StoreIcon,
      title: "Winning marketplace",
      description:
        "Find which marketplace AI recommends your product from most, and how your own store stacks up.",
    },
    {
      icon: TagIcon,
      title: "Price & source authorship",
      description:
        "Learn who frames your price and who writes your product story, third-party reviews or your own pages.",
    },
    {
      icon: QuoteIcon,
      title: "Repeated objections",
      description:
        "Surface the complaints AI converges on across engines, and the sources they come from.",
    },
    {
      icon: PackageIcon,
      title: "SKU-level drill-down",
      description:
        "Take every signal down to a single product, so you know exactly what to fix and where.",
    },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">What it reveals</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            The answers that move product sales
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{it.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {it.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  PRODUCT-LEVEL VIEW (illustrative UI)  ───────────── */
function ProductLevelView() {
  const metrics = [
    { label: "Recommendation share", value: "6%", tone: "amber" },
    { label: "Carousel visibility", value: "31%", tone: "emerald" },
    { label: "Feed entries (duplicates)", value: "12", tone: "amber" },
    { label: "First-party source share", value: "18%", tone: "amber" },
    { label: "Price accuracy", value: "82%", tone: "emerald" },
    { label: "Best marketplace", value: "Amazon", tone: "emerald" },
  ];
  const others = [
    { name: "Product B", cat: "wireless earbuds", rec: 4 },
    { name: "Product C", cat: "headset", rec: 3 },
    { name: "Product D", cat: "wireless earbuds", rec: 2 },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">Product-level view</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Zoom in to a single product
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mt-6">
            Every metric drills down to the SKU. Pick any product and see how AI
            ranks, prices, sources, and sells it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 md:gap-6 max-w-6xl mx-auto">
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0">
                <PackageIcon className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="text-white font-bold text-lg leading-tight">
                  Product A
                </div>
                <div className="text-white/50 text-sm">
                  wireless earbuds · ★ 4.4
                </div>
              </div>
              <span className="ml-auto text-[10px] font-semibold px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/10 whitespace-nowrap self-start">
                SELECTED
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="bg-[#050506] border border-white/10 rounded-xl p-4"
                >
                  <div
                    className={`text-2xl font-extrabold leading-none mb-1 ${
                      m.tone === "amber" ? "text-zinc-400" : "text-white"
                    }`}
                  >
                    {m.value}
                  </div>
                  <div className="text-[11px] text-white/50 leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-5">
              Switch product
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 bg-white/5 border border-white/15 rounded-xl px-4 py-3">
                <PackageIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white font-medium truncate">
                    Product A
                  </div>
                  <div className="text-[11px] text-white/50">wireless earbuds</div>
                </div>
                <span className="text-xs font-mono text-emerald-400">6%</span>
              </div>
              {others.map((o, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#050506] border border-white/10 rounded-xl px-4 py-3 hover:border-white/15 transition-colors"
                >
                  <PackageIcon className="w-4 h-4 text-white/40 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white/80 font-medium truncate">
                      {o.name}
                    </div>
                    <div className="text-[11px] text-white/40">{o.cat}</div>
                  </div>
                  <span className="text-xs font-mono text-white/40">
                    {o.rec}%
                  </span>
                </div>
              ))}
              <div className="text-[11px] text-white/30 pt-2 text-center">
                … and the rest of your catalogue
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-white/30 mt-8">
          Illustrative view, every brand's numbers are different.
        </p>
      </div>
    </section>
  );
}

/* ─────────────  MARKETPLACE PERFORMANCE (illustrative UI)  ───────────── */
function MarketplacePerformance() {
  const rows = [
    { label: "Amazon", pct: 38, hl: true },
    { label: "Best Buy", pct: 22 },
    { label: "Walmart", pct: 15 },
    { label: "Newegg", pct: 10 },
    { label: "Your store", pct: 9 },
    { label: "Other", pct: 6 },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <HeroEyebrow className="mb-4 mx-auto w-fit">Marketplace performance</HeroEyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Where your product{" "}
              <span className="text-white">actually wins</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-6">
              When your product is sold through marketplaces, In-Chat Shopping
              shows which one AI recommends it from most, so you know where the
              sale really happens, and where to double down on stock, reviews,
              and merchandising, or push your own store.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-[#0A0A0C] border border-white/10 rounded-xl p-5">
                <TrophyIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Know your best-performing shelf, where AI sends the most
                  buyers.
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#0A0A0C] border border-white/10 rounded-xl p-5">
                <MapPinIcon className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Spot where your own store is underrepresented, a
                  direct-margin opportunity.
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3Icon className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                Recommendations by marketplace
              </span>
            </div>
            <div className="space-y-4">
              {rows.map((r, i) => (
                <Bar key={i} label={r.label} pct={r.pct} scale={2.2} hl={r.hl} />
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6">
              Illustrative, share of a product's AI recommendations by
              marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InChatShopping() {
  return (
    <>
      <PolymetSEO
        title="In-Chat Shopping, AI Product Intelligence | Genezio"
        description="See how AI ranks, prices, and sells your products across ChatGPT and Google AI Overviews. Genezio In-Chat Shopping analyzes conversations, products, retailers, and sources."
        canonicalPath="/in-chat-shopping/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does Genezio In-Chat Shopping analyze?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In-Chat Shopping analyzes AI shopping across four layers: conversations (the shopping questions buyers ask AI), products (how AI ranks and recommends each SKU, including duplicate listings), retailers (which marketplace AI routes the sale to and who frames your price), and sources (what AI reads before recommending and the sentiment it carries), across ChatGPT and Google AI Overview.",
              },
            },
            {
              "@type": "Question",
              name: "Why does AI recommend a brand but not its product?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Product recommendation is decided by the shopping catalogue, not brand equity. When one product reaches the AI as many differently-named entries from different retailer feeds, its visibility splits and no single entry looks like the obvious answer. Combined with third-party price authorship and low first-party source authority, a strong brand can still fail to get its product named.",
              },
            },
          ],
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <ShoppingHero />
        <WhatWeAnalyze />
        <WhatItReveals />
        <ProductLevelView />
        <MarketplacePerformance />
        <GenezioCtaSection />
      </div>
    </>
  );
}
