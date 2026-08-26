import { LinkedinIcon, QuoteIcon } from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import bcrLogo from "../../assets/bcr.svg";

/**
 * Testimonials carousel.
 *
 * Implemented as a pure CSS scroll-snap row: every quote is rendered as static
 * HTML in the prerendered page, so AI crawlers and search engines read the full
 * text. There is no JavaScript driving the content — the "carousel" is just
 * native horizontal scroll/swipe with snap points.
 */
const TESTIMONIALS = [
  {
    quote:
      "With Genezio, BCR's brand presence in AI conversations on key topics grew by double digits in just a few weeks. That visibility matters because it ensures BCR clients receive accurate, consistent answers — and that consistency builds trust when it truly counts.",
    name: "Ionuț Stanimir",
    role: "Director of Marketing and Communication",
    company: "BCR — Banca Comercială Română",
    linkedin: "https://www.linkedin.com/in/ionutstanimir/",
    logo: bcrLogo,
    logoAlt: "BCR — Banca Comercială Română",
    tag: "2× growth in weeks",
  },
  {
    quote:
      "Every cycle we get analysis, not an export — what moved, why, what to do next, and a timeframe. We track recommendation rate rather than visibility alone, and every discussion turns into a short, prioritized list of actions. A dashboard alone would not have got us here.",
    name: "Laura Dumea-Bencze",
    role: "Head of Research & Director, Investment Properties",
    company: "CBRE Romania",
    linkedin: null,
    logo: "/images/cbre-logo.png",
    logoAlt: "CBRE",
    tag: "Fortune 500 · Commercial real estate",
  },
  {
    quote:
      "Genezio gives us a straightforward view of where we stand against competitors — it helps us spot gaps, follow changes in visibility and citations, and decide where to focus next. The team is easy to reach, quick to respond and consistently helpful.",
    name: "Tamás Várfi",
    role: "Senior Digital Marketing Specialist",
    company: "Erste Bank Hungary",
    linkedin: null,
    logo: "/images/erste-logo.svg",
    logoAlt: "Erste Bank Hungary",
    tag: "Banking",
  },
];

export function GenezioQuotesCarousel() {
  return (
    <section className="relative py-20 md:py-28 bg-[#050506]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-3xl mb-10 md:mb-14">
          <HeroEyebrow className="mb-5">In their words</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Enterprise teams on Genezio
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            From Fortune 500 real estate to European banking, the teams that
            measure AI answer engines trust Genezio to turn visibility into
            recommendations.
          </p>
        </div>

        {/* CSS-only scroll-snap carousel — all cards are static, crawlable HTML */}
        <div
          className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Customer testimonials"
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="snap-start shrink-0 w-[86%] sm:w-[420px] md:w-[440px] bg-[#0A0A0C] border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col"
            >
              <QuoteIcon className="w-9 h-9 text-emerald-400/25 mb-5" />

              <blockquote className="text-base md:text-lg text-white/90 leading-relaxed font-light flex-1">
                “{t.quote}”
              </blockquote>

              {t.tag && (
                <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                  {t.tag}
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.logo}
                  alt={t.logoAlt}
                  loading="lazy"
                  className="h-8 w-auto max-w-[120px] object-contain opacity-90"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white truncate">
                      {t.name}
                    </p>
                    {t.linkedin && (
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.name} on LinkedIn`}
                        className="text-white/40 hover:text-emerald-400 transition-colors flex-shrink-0"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-white/50 leading-snug">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
