import { Button } from "@/components/ui/button";
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
  features: string[];
  note: string;
}

const CONTENT: Record<"brands" | "agencies", EnterprisePlanContent> = {
  brands: {
    eyebrow: "Enterprise",
    titleWord: "brand",
    sectionSubtitle:
      "No fixed tiers. Your plan is shaped by the engines, markets, and volume you actually need.",
    description:
      "Tailored AI visibility for multi-market brands and teams. We scope pricing around the answer engines, markets, and conversation volume that matter to you — so you only pay for what moves the needle.",
    features: [
      "All Answer Engines tracked — ChatGPT, Perplexity, Google AI Mode, Gemini, Copilot, Meta AI, Grok, DeepSeek, Claude, AI Overviews",
      "Custom number of brands, languages & locations",
      "Custom topics, scenarios & AI conversations tracked",
      "Sentiment per conversation, citation & statement",
      "Daily AI visibility insights",
      "Custom AI content generation",
      "Geo Assistant",
      "Unlimited data retention",
      "Unlimited competitor SWOT analysis & seats",
      "Dedicated onboarding & Account Manager",
      "Dedicated Slack support",
      "SSO / SAML + SOC2 compliance",
    ],
    note: "Custom Enterprise pricing, exclusive of any applicable taxes.",
  },
  agencies: {
    eyebrow: "Agency Enterprise",
    titleWord: "agency",
    sectionSubtitle:
      "Scale GEO services across every client. Pay for the brands, engines, and volume you manage — nothing you don't.",
    description:
      "Custom Enterprise pricing for agencies scaling GEO services across multiple clients. Manage every brand from one workspace and expand with flexible add-ons as your roster grows.",
    features: [
      "Multi-client workspace management",
      "Custom number of brands monitored",
      "Up to 5 Answer Engines per brand — ChatGPT, Claude, Gemini, Perplexity, Grok",
      "Custom personas, topics & scenarios per brand",
      "All languages & multi-market monitoring",
      "Daily run frequency",
      "Statements, Keywords & Citations tracking",
      "Sentiment analysis across all conversations",
      "AI content generation",
      "Geo Assistant",
      "White-label & client-ready reporting (add-on)",
      "Unlimited data retention & seats",
      "Daily insights per client",
      "Dedicated onboarding & Account Manager",
      "Email, Slack & dedicated success manager support",
      "Flexible add-ons to scale any limit",
    ],
    note: "Custom Enterprise offer tailored to your agency.",
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
          className="group relative inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent outline-none transition-opacity hover:opacity-90 focus-visible:opacity-90"
        >
          <span className="underline decoration-blue-400/40 decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-purple-400/60">
            {content.titleWord}
          </span>
          <ChevronDownIcon className="h-[0.7em] w-[0.7em] flex-shrink-0 text-blue-400/80 transition-transform group-data-[state=open]:rotate-180" />
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
            className={`cursor-pointer rounded-lg px-3 py-2.5 text-base font-medium focus:bg-white/[0.06] ${
              v === variant ? "text-white" : "text-white/60"
            }`}
          >
            <span className="flex w-full items-center justify-between gap-3">
              your {CONTENT[v].titleWord}
              {v === variant && (
                <CheckIcon className="h-4 w-4 text-blue-400" />
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <section
      className={`relative px-4 md:px-6 bg-[#050506] ${
        isPageHero ? "pt-28 md:pt-36 pb-12 md:pb-20" : "py-12 md:py-20"
      }`}
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 md:mb-14">
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
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-blue-600/[0.1] via-[#0A0A0B] to-purple-600/[0.1] shadow-2xl shadow-blue-500/5">
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-14 p-8 md:p-12 lg:p-14">
            {/* Left: offer summary + CTA */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/70 mb-6">
                {content.eyebrow}
              </span>

              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-5xl md:text-6xl font-bold text-white">
                  Custom
                </span>
                <span className="text-sm text-white/50">pricing</span>
              </div>

              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-md">
                {content.description}
              </p>

              <Button
                onClick={() => window.open(CALENDAR_URL, "_blank")}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/20"
              >
                Contact Sales
              </Button>

              <p className="mt-4 text-xs text-white/40">{content.note}</p>
            </div>

            {/* Right: what's included */}
            <div className="lg:border-l lg:border-white/10 lg:pl-14">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                What's included
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-600/20">
                      <CheckIcon className="h-3 w-3 text-blue-400" />
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
