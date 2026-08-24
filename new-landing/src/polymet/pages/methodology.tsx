import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  UsersIcon,
  MessagesSquareIcon,
  GlobeIcon,
  SigmaIcon,
  GitBranchIcon,
  ScaleIcon,
  CheckCircle2Icon,
  type LucideIcon,
} from "lucide-react";

function Hairline() {
  return (
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

interface Method {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HOW_WE_MEASURE: Method[] = [
  {
    icon: UsersIcon,
    title: "Personas, not prompts",
    description:
      "We simulate full conversations as your actual customer personas, not one-off prompts. Volume is driven by how many brands, how many markets, and how many buyer personas.",
  },
  {
    icon: MessagesSquareIcon,
    title: "Multi-turn conversations",
    description:
      "Each scenario runs as a multi-turn dialogue in the persona's own language, because a conversation is a chain of decisions, not a single answer.",
  },
  {
    icon: GlobeIcon,
    title: "In-country IP addresses",
    description:
      "We run from in-country IP addresses, which is what makes it a true local-market analysis rather than a translated one.",
  },
  {
    icon: GitBranchIcon,
    title: "Competitor set per brand",
    description:
      "Even inside the same market, each brand faces a different competitor set, which means genuinely different conversations.",
  },
];

const LIMITS = [
  {
    q: "Are these real customer questions?",
    a: "No. The scenarios are realistically simulated, built as close as we can get to how your customers actually ask. That modelling choice is exactly why the sample can be large enough to be statistically meaningful.",
  },
  {
    q: "Can you prove the revenue came from this?",
    a: "Citation monitoring is correlational, not deterministic. We can show you which sources the models read, how often, and how that moved. We will not claim a causal chain we cannot prove.",
  },
  {
    q: "How fresh are the numbers?",
    a: "Targets are labelled as targets, not guarantees. Baselines under two weeks old are labelled directional until enough data accumulates.",
  },
];

const ENGINES = [
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Google AI Overviews",
  "Copilot",
  "Claude",
  "Grok",
  "DeepSeek",
  "Meta AI",
];

/* ─────────────────────────────  HERO  ───────────────────────────── */
function MethodologyHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-white/[0.03] rounded-full blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-6 mx-auto w-fit">Methodology</HeroEyebrow>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
          Built for the sceptical reader
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          How we run the analysis, what the numbers mean, and where we draw the
          line on what we will and won't claim. The honesty is the credibility.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────  HOW WE MEASURE  ────────────────────────── */
function HowWeMeasure() {
  return (
    <section className="relative bg-[#0E0E10] py-20 md:py-28">
      <Hairline />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-tight">
            How we measure
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            We don't run prompts. We simulate the conversations your customers
            actually have, from inside their market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {HOW_WE_MEASURE.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SAMPLE & SIZING  ───────────────────────── */
function SampleAndSizing() {
  return (
    <section className="relative bg-[#050506] py-20 md:py-28">
      <Hairline />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Sample size */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <SigmaIcon className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight mb-3">
              Math, not vibes
            </h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-5">
              A consulting firm runs 1,000 calls and reports noise. We run
              100,000 and give a recommendation rate with a mathematically
              correct confidence interval.
            </p>
            <div className="inline-flex items-baseline gap-2 bg-[#050506] border border-white/10 rounded-xl px-4 py-3">
              <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 leading-none">
                73.2%
              </span>
              <span className="text-sm text-white/50">± 4.1%</span>
            </div>
          </div>

          {/* Sizing */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <ScaleIcon className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight mb-3">
              How volume is sized
            </h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-5">
              Volume is driven by three things: how many brands, how many
              markets, and how many buyer personas. Roughly 30 scenarios per
              brand produce around 3,000 conversations a month.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <span className="bg-[#050506] border border-white/10 rounded-lg px-3 py-1.5">
                ~30 scenarios / brand
              </span>
              <span className="text-white/30">→</span>
              <span className="bg-[#050506] border border-white/10 rounded-lg px-3 py-1.5">
                ~3,000 conversations / month
              </span>
            </div>
          </div>
        </div>

        {/* Engines covered */}
        <div className="mt-6 bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-4">
            Engines covered
          </div>
          <div className="flex flex-wrap gap-2">
            {ENGINES.map((e) => (
              <span
                key={e}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/70"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  HONEST LIMITS  ─────────────────────────── */
function HonestLimits() {
  return (
    <section className="relative bg-[#0E0E10] py-20 md:py-28">
      <Hairline />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-2xl mb-12">
          <HeroEyebrow className="mb-6 w-fit">What we won't claim</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-white leading-tight">
            Where we draw the line
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            Honesty about limits has consistently built more trust than
            confidence about everything.
          </p>
        </div>

        <div className="space-y-4">
          {LIMITS.map((l) => (
            <div
              key={l.q}
              className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2Icon className="mt-0.5 w-5 h-5 flex-shrink-0 text-emerald-400" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                    {l.q}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white/60 leading-relaxed">
                    {l.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PAGE  ───────────────────────────── */
export function Methodology() {
  return (
    <>
      <PolymetSEO
        title="Methodology | Genezio"
        description="How Genezio measures AI recommendation: simulated multi-turn personas from in-country IPs, confidence intervals over large samples, and correlational, not deterministic, citation analysis."
        canonicalPath="/methodology/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
      />
      <div className="min-h-screen bg-[#050506]">
        <MethodologyHero />
        <HowWeMeasure />
        <SampleAndSizing />
        <HonestLimits />
        <GenezioCtaSection />
      </div>
    </>
  );
}
