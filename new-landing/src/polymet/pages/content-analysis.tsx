import { Button } from "@/components/ui/button";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  ScanSearchIcon,
  FileCheck2Icon,
  ActivityIcon,
  BotIcon,
  FileCodeIcon,
  MapIcon,
  ShieldCheckIcon,
  CodeIcon,
  Heading1Icon,
  TableIcon,
  QuoteIcon,
  GaugeIcon,
  CheckCircle2Icon,
  XCircleIcon,
  ArrowRightIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

/* ─────────────────────────────  HERO  ───────────────────────────── */
function ContentAnalysisHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <ScanSearchIcon className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-400 font-medium">
            Content Analysis
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Your content's most important reader
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            doesn't have eyes.
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Content Analysis checks whether AI engines can reach your content and
          whether they'll keep it once they do — before you publish, and every
          day after. The technical crawlability and the content itself, on one
          score.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/20"
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
    </section>
  );
}

/* ─────────────────────  PRE- VS POST-PUBLISH  ───────────────────── */
function TwoModes() {
  const modes = [
    {
      icon: FileCheck2Icon,
      tag: "BEFORE YOU PUBLISH",
      title: "Pre-publish analysis",
      description:
        "Paste a draft or a URL and see how an answer engine will read it — before it goes live. Catch the crawlability blockers and the content gaps while you can still fix them.",
      points: [
        "Score a draft against the target conversation",
        "See what a crawler would keep vs skip",
        "Fix structure, claims, and schema pre-launch",
      ],
      accent: "blue",
    },
    {
      icon: ActivityIcon,
      tag: "AFTER YOU PUBLISH",
      title: "Post-publish monitoring",
      description:
        "Once it's live, Content Analysis keeps watching: is the page still crawlable, still cited, still winning the answer? Re-checks run continuously as engines re-crawl and re-rank.",
      points: [
        "Continuous crawlability & citation tracking",
        "Alerts when access or structure regresses",
        "Verify that a change actually moved visibility",
      ],
      accent: "emerald",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            Two moments, one system
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Analyze before you ship. Monitor after you do.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            const isBlue = mode.accent === "blue";
            return (
              <div
                key={index}
                className={`bg-[#0A0A0C] border rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                  isBlue
                    ? "border-blue-500/20 hover:border-blue-500/40"
                    : "border-emerald-500/20 hover:border-emerald-500/40"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${
                    isBlue
                      ? "bg-blue-500/10 border-blue-500/30"
                      : "bg-emerald-500/10 border-emerald-500/30"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isBlue ? "text-blue-400" : "text-emerald-400"
                    }`}
                  />
                </div>
                <div
                  className={`text-xs font-mono tracking-widest mb-3 ${
                    isBlue ? "text-blue-400" : "text-emerald-400"
                  }`}
                >
                  {mode.tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {mode.title}
                </h3>
                <p className="text-[#B0B0B3] leading-relaxed mb-6">
                  {mode.description}
                </p>
                <ul className="space-y-3">
                  {mode.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2Icon
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          isBlue ? "text-blue-400" : "text-emerald-400"
                        }`}
                      />
                      <span className="text-white/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────  TECHNICAL / CRAWLABILITY  ─────────────────── */
function TechnicalAnalysis() {
  const checks = [
    {
      icon: BotIcon,
      title: "AI crawler access",
      description:
        "Are GPTBot, ClaudeBot, PerplexityBot and Google-Extended actually allowed — or quietly blocked?",
    },
    {
      icon: FileCodeIcon,
      title: "robots.txt",
      description:
        "The rules that decide whether an engine may fetch the page at all, read line by line.",
    },
    {
      icon: MapIcon,
      title: "Sitemap & discoverability",
      description:
        "Is the page in your sitemap, internally linked, and reachable without dead ends?",
    },
    {
      icon: ShieldCheckIcon,
      title: "llms.txt",
      description:
        "The emerging standard for telling models what matters on your site — present and correct?",
    },
    {
      icon: CodeIcon,
      title: "Structured data & schema",
      description:
        "Product, FAQ, and article schema that let engines extract facts cleanly.",
    },
    {
      icon: FileCheck2Icon,
      title: "Renders without JavaScript",
      description:
        "Many crawlers don't run JS. If your content only exists after hydration, it's invisible.",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-blue-400 uppercase tracking-wider mb-4 font-semibold">
            The technical layer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Can the engine even reach you?
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto">
            The best content in the world earns nothing if a crawler can't fetch
            it, read it, or parse it. Content Analysis audits crawlability end to
            end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checks.map((check, index) => {
            const Icon = check.icon;
            return (
              <div
                key={index}
                className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {check.title}
                </h3>
                <p className="text-[#B0B0B3] text-sm leading-relaxed">
                  {check.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  CONTENT QUALITY  ───────────────────── */
function ContentQuality() {
  const checks = [
    {
      icon: Heading1Icon,
      title: "Structure & headings",
      description:
        "A clean, hierarchical outline the model can navigate and lift answers from.",
    },
    {
      icon: TableIcon,
      title: "Comparison tables",
      description:
        "Structured comparisons — you vs competitors — are what engines quote most.",
    },
    {
      icon: QuoteIcon,
      title: "Claims backed by evidence",
      description:
        "Specific, sourced claims survive. Vague marketing copy gets dropped.",
    },
    {
      icon: GaugeIcon,
      title: "Specificity & facts",
      description:
        "Prices, specs, numbers, dates — stated plainly. The facts a machine keeps.",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text + checks */}
          <div>
            <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
              The content layer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Will the machine{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                keep what it reads?
              </span>
            </h2>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed mb-8">
              "Engaging" and "citable" are now two different disciplines. During
              a fanout the engine skips your ads and hooks and extracts facts,
              comparisons, and evidence. Content Analysis scores your page on
              exactly what survives.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checks.map((check, index) => {
                const Icon = check.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#0A0A0C] border border-[#1C1C20] rounded-xl p-5"
                  >
                    <Icon className="w-5 h-5 text-emerald-400 mb-3" />
                    <h3 className="text-sm font-bold text-white mb-1">
                      {check.title}
                    </h3>
                    <p className="text-[#B0B0B3] text-xs leading-relaxed">
                      {check.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: human vs machine visual */}
          <div className="grid grid-cols-1 gap-4">
            {/* What a human sees */}
            <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 overflow-hidden">
              <div className="text-xs font-mono text-white/40 tracking-widest mb-4">
                WHAT A HUMAN SEES
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-white/40 bg-white/5 rounded-md px-3 py-2 line-through">
                  <XCircleIcon className="w-4 h-4" /> display ad — 728×90
                </div>
                <div className="h-3 w-4/5 bg-white/10 rounded" />
                <div className="flex items-center gap-2 text-xs font-mono text-white/40 bg-white/5 rounded-md px-3 py-2 line-through">
                  <XCircleIcon className="w-4 h-4" /> hero video — autoplay
                </div>
                <div className="h-3 w-3/4 bg-white/10 rounded" />
                <div className="flex items-center gap-2 text-xs font-mono text-white/40 bg-white/5 rounded-md px-3 py-2 line-through">
                  <XCircleIcon className="w-4 h-4" /> newsletter popup
                </div>
              </div>
            </div>

            {/* What the machine keeps */}
            <div className="bg-[#0A0A0C] border border-blue-500/40 rounded-2xl p-6">
              <div className="text-xs font-mono text-blue-400 tracking-widest mb-4">
                WHAT THE MACHINE KEEPS
              </div>
              <div className="space-y-3">
                {[
                  "Battery life: 4–5 days · no screen · strap form factor",
                  "Sleep-stage accuracy vs polysomnography — study data, cited",
                  "Structured comparison: you vs competitors",
                  "Pricing & terms, stated plainly",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 border-l-2 border-blue-400 pl-3"
                  >
                    <span className="text-white/90 text-sm leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FLYWHEEL / DIAGNOSE+VERIFY  ───────────────────────── */
function FlywheelDiagnoseVerify() {
  const loop = [
    { label: "MEASURE", active: false },
    { label: "DIAGNOSE", active: true },
    { label: "PUBLISH", active: false },
    { label: "VERIFY", active: true },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#050506] relative">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
          Where it fits
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
          Content Analysis powers{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Diagnose
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Verify
          </span>
        </h2>
        <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mb-12">
          It finds what's holding a page back before launch, and confirms the
          fix actually moved visibility after. The two checkpoints that keep the
          loop honest.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {loop.map((step, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              <div
                className={`px-5 py-3 rounded-xl border font-mono text-sm tracking-wider ${
                  step.active
                    ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-semibold"
                    : "bg-[#0A0A0C] border-[#1C1C20] text-white/50"
                }`}
              >
                {`0${index + 1} · ${step.label}`}
              </div>
              {index < loop.length - 1 && (
                <ArrowRightIcon className="w-5 h-5 text-emerald-500/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentAnalysis() {
  return (
    <>
      <PolymetSEO
        title="Content Analysis — Crawlability & Citable-Content Audits | Genezio"
        description="Genezio Content Analysis checks whether AI engines can crawl your content and whether they'll keep it — pre-publish and post-publish. robots.txt, llms.txt, AI crawler access, schema, structure, and evidence, on one score. Book a demo!"
        canonicalPath="/content-analysis/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does Genezio Content Analysis check?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Content Analysis audits two layers: the technical crawlability of a page (robots.txt, sitemap, llms.txt, AI crawler access for GPTBot/ClaudeBot/PerplexityBot, structured data, and whether it renders without JavaScript) and the content itself (structure, headings, comparison tables, evidence-backed claims, and specificity) — the facts an answer engine keeps.",
              },
            },
            {
              "@type": "Question",
              name: "Does Content Analysis work before and after publishing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Pre-publish, you can score a draft or URL to catch crawlability blockers and content gaps before launch. Post-publish, Content Analysis monitors the live page continuously as engines re-crawl and re-rank, alerting you when access or structure regresses and verifying that changes moved visibility.",
              },
            },
          ],
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <ContentAnalysisHero />
        <TwoModes />
        <TechnicalAnalysis />
        <ContentQuality />
        <FlywheelDiagnoseVerify />
        <GenezioCtaSection />
      </div>
    </>
  );
}
