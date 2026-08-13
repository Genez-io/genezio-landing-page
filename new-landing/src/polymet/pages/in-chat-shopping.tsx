import { Button } from "@/components/ui/button";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  ShoppingBagIcon,
  StoreIcon,
  TagIcon,
  PackageIcon,
  CreditCardIcon,
  MessagesSquareIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  ArrowRightIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

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
                In-Chat Shopping · New
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6 text-white">
              Win the sale
              <br />
              <span className="text-emerald-400">inside the chat.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              When shoppers ask AI what to buy, does it recommend your product —
              and can it send them to check out? In-Chat Shopping tracks how
              answer engines rank, price, and route your products, then shows you
              how to win the recommendation.
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

          {/* Right: shopping answer visual */}
          <div className="relative">
            <div className="absolute -inset-3 bg-emerald-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <ShoppingBagIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-white/60 text-xs font-medium">
                  AI shopping answer · live
                </span>
              </div>
              <div className="flex justify-end mb-4">
                <div className="bg-emerald-500/15 border border-emerald-500/25 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[88%]">
                  <p className="text-sm text-emerald-50">
                    "Best noise-cancelling earbuds under $200?"
                  </p>
                </div>
              </div>
              <div className="flex justify-start mb-5">
                <div className="bg-[#1C1C20]/70 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[92%]">
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Top picks:{" "}
                    <span className="text-white font-semibold bg-emerald-500/15 border border-emerald-500/30 rounded px-1.5 py-0.5">
                      Your product
                    </span>
                    , then Competitor A and Competitor B. Best price right now at
                    two retailers.
                  </p>
                </div>
              </div>
              <div className="bg-[#050506]/60 border border-white/10 rounded-xl p-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-white/50 mb-3">
                  Product recommendation share
                </div>
                <div className="space-y-2.5">
                  {[
                    { n: "Your product", v: 34, hl: true },
                    { n: "Competitor A", v: 28, hl: false },
                    { n: "Competitor B", v: 21, hl: false },
                    { n: "Competitor C", v: 17, hl: false },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span
                        className={`text-xs w-24 flex-shrink-0 ${
                          r.hl ? "text-white font-semibold" : "text-white/50"
                        }`}
                      >
                        {r.n}
                      </span>
                      <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            r.hl ? "bg-emerald-500" : "bg-white/20"
                          }`}
                          style={{ width: `${r.v * 2.5}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-mono w-9 text-right flex-shrink-0 ${
                          r.hl ? "text-emerald-400" : "text-white/40"
                        }`}
                      >
                        {r.v}%
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

/* ─────────────────────  THE SHIFT TO AI SHOPPING  ───────────────────── */
function ShoppingShift() {
  const stats = [
    { value: "~20%", label: "of ChatGPT queries carry direct commercial intent" },
    { value: "13×", label: "growth in AI-referred orders, year over year (Shopify, Q1 2026)" },
    { value: "+42%", label: "better conversion, AI-referred vs non-AI retail (Adobe, Q1 2026)" },
  ];
  return (
    <section className="py-16 md:py-28 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            The shift
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Discovery, comparison, and checkout are moving into the chat
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mt-6">
            With agentic commerce — Gemini's native checkout, the Universal
            Commerce Protocol — the whole buying journey can happen without a
            shopper ever visiting your site. Your product data decides whether
            you're in the answer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="border-t border-white/10 pt-6 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-none">
                {s.value}
              </div>
              <div className="text-sm text-[#B0B0B3] leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  WHAT WE TRACK — shopping report preview  ───────────── */
function ShoppingReport() {
  const retailers = [
    { n: "Amazon", v: 41 },
    { n: "Best Buy", v: 19 },
    { n: "yourbrand.com", v: 16, hl: true },
    { n: "Walmart", v: 14 },
    { n: "Other", v: 10 },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            What one shopping analysis looks like
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Down to the product, the query, and the retailer
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
          {/* Retailer share */}
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <StoreIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono tracking-widest text-white/50">
                WHERE AI SENDS BUYERS
              </span>
            </div>
            <p className="text-sm text-[#B0B0B3] mb-6">
              When AI recommends your product, which retailer does it route the
              sale to?
            </p>
            <div className="space-y-3">
              {retailers.map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className={`text-xs w-28 flex-shrink-0 ${
                      r.hl ? "text-emerald-300 font-semibold" : "text-white/60"
                    }`}
                  >
                    {r.n}
                  </span>
                  <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        r.hl ? "bg-emerald-500" : "bg-white/20"
                      }`}
                      style={{ width: `${r.v * 2}%` }}
                    />
                  </div>
                  <span
                    className={`text-xs font-mono w-9 text-right flex-shrink-0 ${
                      r.hl ? "text-emerald-400" : "text-white/40"
                    }`}
                  >
                    {r.v}%
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#B0B0B3] mt-5">
              Only 16% of AI-driven sales route to your own store — a margin
              opportunity if you strengthen direct listings.
            </p>
          </div>

          {/* Offer & price accuracy */}
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <TagIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono tracking-widest text-white/50">
                OFFER & PRICE ACCURACY
              </span>
            </div>
            <p className="text-sm text-[#B0B0B3] mb-6">
              Is AI quoting the right price and availability for your products?
            </p>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-5xl font-extrabold text-emerald-400 leading-none">
                82%
              </span>
              <span className="text-sm text-white/70">
                of AI-quoted prices match your live listing
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 bg-[#050506] border border-white/10 rounded-lg px-3 py-2.5">
                <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-white/70">
                  14 of 17 SKUs priced correctly across engines
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#050506] border border-amber-500/20 rounded-lg px-3 py-2.5">
                <AlertTriangleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-white/70">
                  3 SKUs show a stale price — fix the feed to recover the sale
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  METRICS WE TRACK  ───────────── */
function ShoppingMetrics() {
  const metrics = [
    {
      icon: ShoppingBagIcon,
      title: "Product recommendation share",
      description:
        "How often AI recommends each of your products vs competitors, per shopping query, engine, and market.",
    },
    {
      icon: StoreIcon,
      title: "Retailer share",
      description:
        "Which retailer AI routes the sale to when it recommends you — and how much goes to your own store.",
    },
    {
      icon: PackageIcon,
      title: "Product co-mentions & bundles",
      description:
        "Which products AI pairs with yours, and the bundles it suggests — new placement and attach opportunities.",
    },
    {
      icon: TagIcon,
      title: "Offer & price accuracy",
      description:
        "Whether AI quotes the right price, availability, and promotions — and which SKUs are drifting.",
    },
    {
      icon: MessagesSquareIcon,
      title: "Shopping-intent conversations",
      description:
        "The share of category conversations that show real buying intent, and the questions buyers ask before purchase.",
    },
    {
      icon: CreditCardIcon,
      title: "Agentic-commerce readiness",
      description:
        "Whether your product data and feeds are structured for AI to not just recommend — but transact.",
    },
  ];
  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            What we track
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Everything that decides whether AI sells your product
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                <p className="text-[#B0B0B3] text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-white/30 mt-8">
          Figures shown across this page are illustrative sample data.
        </p>
      </div>
    </section>
  );
}

export function InChatShopping() {
  return (
    <>
      <PolymetSEO
        title="In-Chat Shopping — Win AI Product Recommendations | Genezio"
        description="When shoppers ask AI what to buy, does it recommend your product? Genezio In-Chat Shopping tracks product recommendation share, retailer routing, price accuracy, and agentic-commerce readiness across ChatGPT, Gemini, Perplexity & AI Overviews. Book a demo!"
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
                text: "In-Chat Shopping tracks how AI answer engines recommend, price, and route your products in shopping conversations — product recommendation share vs competitors, which retailer AI sends the sale to, price and offer accuracy, product co-mentions, shopping-intent conversations, and agentic-commerce readiness across ChatGPT, Gemini, Perplexity, and AI Overviews.",
              },
            },
            {
              "@type": "Question",
              name: "Why does in-chat shopping matter?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "With agentic commerce such as Gemini's native checkout and the Universal Commerce Protocol, discovery, comparison, and checkout increasingly happen inside the AI conversation. If AI doesn't recommend your product — or quotes the wrong price — you lose the sale before a shopper ever reaches your site.",
              },
            },
          ],
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <ShoppingHero />
        <ShoppingShift />
        <ShoppingReport />
        <ShoppingMetrics />
        <GenezioCtaSection />
      </div>
    </>
  );
}
