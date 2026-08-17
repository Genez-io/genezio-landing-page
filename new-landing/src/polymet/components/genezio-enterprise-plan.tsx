import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

const TITLE_PREFIX = "One plan, built around your ";

interface EnterprisePlanContent {
  eyebrow: string;
  titleWord: string;
  sectionSubtitle: string;
  description: string;
  enginesLabel: string;
  engines: string[];
  features: string[];
  note: string;
}

const CONTENT: Record<"brands" | "agencies", EnterprisePlanContent> = {
  brands: {
    eyebrow: "Enterprise",
    titleWord: "brand",
    sectionSubtitle:
      "Your plan is shaped by the engines, markets, and volume you actually need.",
    description:
      "Tailored AI visibility for multi-market brands and teams. We scope pricing around the answer engines, markets, and conversation volume that matter to you, so you only pay for what moves the needle.",
    enginesLabel: "All answer engines tracked",
    engines: [
      "ChatGPT",
      "Perplexity",
      "Google AI Mode",
      "Gemini",
      "Copilot",
      "Meta AI",
      "Grok",
      "DeepSeek",
      "Claude",
      "AI Overviews",
    ],
    features: [
      "Custom number of brands, languages & locations",
      "Custom topics, scenarios & AI conversations tracked",
      "Sentiment per conversation, citation & statement",
      "Daily AI visibility insights",
      "Content Hub, data-backed content briefs & generation",
      "Content Analysis, crawlability & citable-content audits",
      "In-Chat Shopping, AI product intelligence",
      "Group-level view, roll up multiple brands into one report",
      "Geo Assistant",
      "Custom data retention",
      "Unlimited competitor SWOT analysis & seats",
      "Dedicated onboarding & Account Manager",
      "Dedicated Slack support",
      "SSO / SAML",
    ],
    note: "Custom Enterprise pricing, exclusive of any applicable taxes.",
  },
  agencies: {
    eyebrow: "Agency Enterprise",
    titleWord: "agency",
    sectionSubtitle:
      "Scale GEO services across every client. Pay for the brands, engines, and volume you manage, nothing you don't.",
    description:
      "Custom Enterprise pricing for agencies scaling GEO services across multiple clients. Manage every brand from one workspace and expand with flexible add-ons as your roster grows.",
    enginesLabel: "Up to 5 answer engines per brand",
    engines: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Grok"],
    features: [
      "Multi-client workspace management",
      "Custom number of brands monitored",
      "Custom personas, topics & scenarios per brand",
      "All languages & multi-market monitoring",
      "Daily run frequency",
      "Statements, Keywords & Citations tracking",
      "Sentiment analysis across all conversations",
      "AI content generation",
      "Geo Assistant",
      "White-label & client-ready reporting (add-on)",
      "Custom data retention & seats",
      "Daily insights per client",
      "Dedicated onboarding & Account Manager",
      "Email, Slack & dedicated success manager support",
      "Flexible add-ons to scale any limit",
    ],
    note: "Custom Enterprise pricing, exclusive of any applicable taxes.",
  },
};

interface GenezioEnterprisePlanProps {
  variant: "brands" | "agencies";
  /**
   * When provided, the last word of the title ("brand" / "agency") becomes an
   * inline switch that flips between the two audiences. Used on /pricing.
   */
  onVariantChange?: (variant: "brands" | "agencies") => void;
  /** Adds top spacing so the title clears the fixed navbar when it opens the page. */
  isPageHero?: boolean;
}

export function GenezioEnterprisePlan({
  variant,
  onVariantChange,
  isPageHero = false,
}: GenezioEnterprisePlanProps) {
  const content = CONTENT[variant];
  const interactive = typeof onVariantChange === "function";
  const Heading = isPageHero ? "h1" : "h2";

  const titleWordSwitch = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="group relative inline-flex items-center gap-1.5 text-emerald-400 outline-none transition-opacity hover:opacity-90 focus-visible:opacity-90"
        >
          <span className="underline decoration-zinc-400/40 decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-emerald-400/60">
            {content.titleWord}
          </span>
          <ChevronDownIcon className="h-[0.7em] w-[0.7em] flex-shrink-0 text-zinc-400/80 transition-transform group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={10}
        className="min-w-[180px] rounded-xl border border-white/10 bg-[#0E0E10]/95 p-1.5 backdrop-blur-md"
      >
        {(["brands", "agencies"] as const).map((v) => (
          <DropdownMenuItem
            key={v}
            onSelect={() => onVariantChange?.(v)}
            className={`cursor-pointer rounded-lg px-3 py-2.5 text-base font-medium text-white/60 hover:bg-white/10 focus:bg-white/10 hover:text-white focus:text-white data-[highlighted]:bg-white/10 data-[highlighted]:text-white ${
              v === variant ? "text-white" : ""
            }`}
          >
            <span className="flex w-full items-center justify-between gap-3">
              your {CONTENT[v].titleWord}
              {v === variant && (
                <CheckIcon className="h-4 w-4 text-zinc-400" />
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <section
      className={`relative px-6 md:px-8 lg:px-16 bg-[#050506] ${
        isPageHero ? "pt-28 md:pt-36 pb-12 md:pb-20" : "py-12 md:py-20"
      }`}
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 md:mb-14">
          {isPageHero && (
            <HeroEyebrow className="mb-6 mx-auto w-fit">
              Enterprise pricing
            </HeroEyebrow>
          )}
          <Heading className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {interactive ? (
              <>
                {TITLE_PREFIX}
                {titleWordSwitch}
              </>
            ) : (
              `${TITLE_PREFIX}${content.titleWord}`
            )}
          </Heading>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* Full-width enterprise panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0A0A0B] shadow-2xl shadow-black/20">
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-14 p-8 md:p-12 lg:p-14">
            {/* Left: offer summary + CTA */}
            <div className="flex flex-col justify-center">
              <HeroEyebrow className="w-fit mb-6">
                {content.eyebrow} · Sales-assisted
              </HeroEyebrow>

              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Let's scope your plan together
              </h3>

              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-7 max-w-md">
                {content.description}
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Scoped to the engines, markets & volume you need",
                  "Dedicated onboarding & a named account manager",
                  "Security review, SSO / SAML & DPA available",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
                      <CheckIcon className="h-3 w-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-white/80">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  onClick={() => window.open(CALENDAR_URL, "_blank")}
                  className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-6 text-base font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-black/20"
                >
                  Get a demo
                </Button>
                <button
                  onClick={() => window.open(CALENDAR_URL, "_blank")}
                  className="text-sm font-semibold text-white/70 hover:text-white transition-colors px-2 py-2"
                >
                  Talk to Sales →
                </button>
              </div>

              <p className="mt-5 text-xs text-white/40">
                {content.note}
              </p>
            </div>

            {/* Right: what's included */}
            <div className="lg:border-l lg:border-white/10 lg:pl-14">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                What's included
              </h3>

              {/* Answer engines, full width across both columns */}
              <div className="mb-7 pb-7 border-b border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <CheckIcon className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span className="text-sm font-semibold text-white/90">
                    {content.enginesLabel}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.engines.map((engine) => (
                    <span
                      key={engine}
                      className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/70"
                    >
                      {engine}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <CheckIcon className="h-3 w-3 text-zinc-400" />
                    </div>
                    <span className="text-sm leading-snug text-white/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
