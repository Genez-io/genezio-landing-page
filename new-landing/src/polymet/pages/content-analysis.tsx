import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { Link } from "react-router";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  ScanSearchIcon,
  FileCheck2Icon,
  ActivityIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  FileTextIcon,
  ServerIcon,
  BarChart3Icon,
  ListChecksIcon,
  BotIcon,
  QuoteIcon,
  ArrowRightIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

/* Status pill shared by the report visuals. All data on this page is illustrative. */
function StatusPill({ good }: { good: boolean }) {
  return good ? (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/[0.06] text-emerald-300 border border-white/15 whitespace-nowrap">
      <CheckCircle2Icon className="w-3.5 h-3.5" /> Looking good
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/5 text-zinc-300 border border-white/10 whitespace-nowrap">
      <AlertTriangleIcon className="w-3.5 h-3.5" /> Room to improve
    </span>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
function ContentAnalysisHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-6">Content Analysis</HeroEyebrow>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Your content's most important reader
          <br />
          <span className="text-emerald-400">doesn't have eyes.</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Content Analysis tells you if AI can read your page, and if it's
          built to get cited. Before you publish, and every day after.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-6 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-black/20"
            >
              Book a Demo
            </Button>
          </a>
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC">
            <Button
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold px-6 py-6 rounded-lg transition-all"
            >
              Talk to Sales
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
        "Paste a draft or a URL and see how an answer engine will read it, before it goes live. Catch what's holding it back while you can still fix it.",
      points: [
        "Score a draft against the topic AI is answering",
        "See what a crawler would keep vs skip",
        "Fix structure, claims, and framing pre-launch",
      ],
    },
    {
      icon: ActivityIcon,
      tag: "AFTER YOU PUBLISH",
      title: "Post-publish monitoring",
      description:
        "Once it's live, Content Analysis keeps watching: is the page still reachable, still cited, still winning the answer? Re-checks run as engines re-crawl.",
      points: [
        "Continuous reachability & citation tracking",
        "Alerts when access or structure regresses",
        "Confirm a change actually moved visibility",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">Two moments, one system</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Analyze before you ship. Monitor after you do.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <div
                key={index}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl border bg-white/5 border-white/15 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-xs font-mono tracking-widest mb-3 text-emerald-400">
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
                      <CheckCircle2Icon className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
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

/* ─────────────  THE REPORT: verdict + 8 checks in 2 groups  ───────────── */
function ReportAnatomy() {
  const content = [
    { name: "Does it cover the questions AI asks?", good: true },
    { name: "Is this the kind of article AI cites here?", good: true },
    { name: "Does it help your brand, without sounding like an ad?", good: false },
    { name: "Is it structured to get cited?", good: false },
    { name: "Is it easy to read?", good: true },
  ];
  const publishing = [
    { name: "Can AI even reach this page?", good: true },
    { name: "Is the page technically AI-readable?", good: true },
    { name: "How often does AI already cite this domain?", good: true },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">What one analysis looks like</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Every page, scored on 8 checks
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto">
            Five checks on the content itself, three on how it's published, one
            clear read on whether AI will cite it.
          </p>
        </div>

        {/* Report card */}
        <div className="max-w-4xl mx-auto bg-[#0A0A0C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-white/10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="min-w-0">
                <div className="font-mono text-xs text-emerald-400/80 truncate">
                  yourbrand.com/blog/best-project-management-tools-2026
                </div>
                <div className="text-white/40 text-xs mt-1">
                  1,620 words · Analyzed Aug 2026 · Topic: Project management
                  tools, Recommender
                </div>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/[0.06] text-emerald-300 border border-white/15 self-start whitespace-nowrap">
                <CheckCircle2Icon className="w-4 h-4" /> Looking good
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-5 mb-2">
              Strong fit for this topic
            </h3>
            <p className="text-sm text-[#B0B0B3] leading-relaxed">
              This article closely answers what people ask AI here, a strong
              candidate to be cited. Two content checks have room to improve
              before it's a lock.
            </p>
          </div>

          {/* Two groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "CONTENT", icon: FileTextIcon, rows: content },
              { label: "PUBLISHING", icon: ServerIcon, rows: publishing },
            ].map((group, gi) => {
              const GIcon = group.icon;
              return (
                <div key={gi} className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <GIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono tracking-widest text-white/50">
                      {group.label}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {group.rows.map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="text-sm text-white/85 leading-snug">
                          {row.name}
                        </span>
                        <StatusPill good={row.good} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center text-xs text-white/30 mt-4">
          Illustrative report, sample data.
        </p>
      </div>
    </section>
  );
}

/* ─────────────  INSIDE A CHECK: concrete detail visuals  ───────────── */
function InsideAnalysis() {
  const citationTypes = [
    { label: "Product / service page", pct: 26, you: false },
    { label: "Listicle / best-of", pct: 24, you: false },
    { label: "Blog / article (you)", pct: 17, you: true },
    { label: "Comparison (vs) page", pct: 12, you: false },
    { label: "News article", pct: 9, you: false },
    { label: "Docs / knowledge base", pct: 6, you: false },
  ];
  const geo = [
    { label: "Statistics & data", value: "6", ok: true },
    { label: "Source citations", value: "14", ok: true },
    { label: "Quotations", value: "0", ok: false },
    { label: "Headings", value: "21", ok: true },
    { label: "Lists", value: "33", ok: true },
    { label: "Tables", value: "0", ok: false },
  ];
  const crawlers = [
    "GPTBot",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-User",
    "Google-Extended",
    "PerplexityBot",
    "CCBot",
    "Applebot-Extended",
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">Inside a check</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Not a score you have to trust, evidence you can act on
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {/* Citation-type fit */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3Icon className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono tracking-widest text-white/50">
                CITATION-TYPE FIT
              </span>
            </div>
            <p className="text-sm text-[#B0B0B3] mb-6">
              What kind of page AI actually cites for this topic, and where
              yours fits.
            </p>
            <div className="space-y-3">
              {citationTypes.map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className={`text-xs w-44 flex-shrink-0 ${
                      row.you ? "text-emerald-300 font-semibold" : "text-white/60"
                    }`}
                  >
                    {row.label}
                  </span>
                  <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        row.you ? "bg-emerald-500" : "bg-white/20"
                      }`}
                      style={{ width: `${row.pct * 3}%` }}
                    />
                  </div>
                  <span
                    className={`text-xs font-mono w-9 text-right flex-shrink-0 ${
                      row.you ? "text-emerald-400" : "text-white/40"
                    }`}
                  >
                    {row.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* GEO structure */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <ListChecksIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono tracking-widest text-white/50">
                STRUCTURED TO GET CITED
              </span>
            </div>
            <p className="text-sm text-[#B0B0B3] mb-6">
              The signals engines look for when they decide what to quote.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {geo.map((m, i) => (
                <div
                  key={i}
                  className="bg-[#050506] border border-white/10 rounded-xl p-4 text-center"
                >
                  <div
                    className={`text-2xl font-extrabold leading-none mb-1 ${
                      m.ok ? "text-white" : "text-zinc-400"
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
            <p className="text-xs text-zinc-300/80 mt-4">
              Add quotations and a comparison table, the fastest GEO wins here.
            </p>
          </div>

          {/* Crawler access */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <BotIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono tracking-widest text-white/50">
                CAN AI REACH THIS PAGE?
              </span>
            </div>
            <p className="text-sm text-[#B0B0B3] mb-6">
              Every major AI crawler, checked against your robots rules.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {crawlers.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#050506] border border-white/10 rounded-lg px-3 py-2"
                >
                  <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-white/70 truncate">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Citation standing */}
          <div className="bg-[#0A0A0C] border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <QuoteIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono tracking-widest text-white/50">
                CITATION STANDING
              </span>
            </div>
            <p className="text-sm text-[#B0B0B3] mb-6">
              How much AI already trusts the domain you're publishing on.
            </p>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl md:text-6xl font-extrabold text-emerald-400 leading-none">
                #1
              </span>
              <span className="text-sm text-white/70">
                of 1,180 domains AI cites for your brand, top 1%
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <div className="bg-[#050506] border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-extrabold text-white leading-none mb-1">
                  7,400
                </div>
                <div className="text-[11px] text-white/50">
                  AI answers it appears in
                </div>
              </div>
              <div className="bg-[#050506] border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-extrabold text-white leading-none mb-1">
                  72%
                </div>
                <div className="text-[11px] text-white/50">
                  actually cited when it appears
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  ACTION PLAN → CONTENT HUB  ───────────── */
function ActionPlan() {
  const actions = [
    {
      impact: "High impact",
      strong: true,
      text: "Add a citable subsection covering the exact feature AI keeps asking about, with specifics and a source link.",
    },
    {
      impact: "High impact",
      strong: true,
      text: "Add a short quotation from an authoritative source, a proven lever for getting cited.",
    },
    {
      impact: "Worth doing",
      strong: false,
      text: "Soften promotional headings toward neutral, evidence-led framing so answer engines quote you.",
    },
    {
      impact: "Nice to have",
      strong: false,
      text: "Add a head-to-head comparison table naming the real alternatives in your category.",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">From findings to fixes</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Every check ends in an action plan
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto">
            No vanity score. Each finding becomes a prioritized recommendation
            you can send straight to Content Hub.
          </p>
        </div>

        <div className="space-y-3 mb-10">
          {actions.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-[#0A0A0C] border border-white/10 rounded-xl p-5 hover:border-white/15 transition-all duration-300"
            >
              <CheckCircle2Icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="flex-1 text-sm text-white/85 leading-relaxed">
                {a.text}
              </span>
              <span
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border whitespace-nowrap flex-shrink-0 ${
                  a.strong
                    ? "bg-white/[0.06] text-emerald-300 border-white/15"
                    : "bg-white/5 text-white/50 border-white/10"
                }`}
              >
                {a.impact}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/content-hub/">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105"
            >
              Continue in Content Hub
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </Link>
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
    <section className="py-16 md:py-28 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-4 mx-auto w-fit">Where it fits</HeroEyebrow>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
          Content Analysis powers{" "}
          <span className="text-white">Diagnose</span> and{" "}
          <span className="text-white">Verify</span>
        </h2>
        <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mb-12">
          It finds what's holding a page back before launch, and confirms the
          fix actually moved visibility after, the two checkpoints that keep
          the loop honest.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {loop.map((step, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              <div
                className={`px-5 py-3 rounded-xl border font-mono text-sm tracking-wider ${
                  step.active
                    ? "bg-white/[0.06] border-white/20 text-emerald-300 font-semibold"
                    : "bg-[#0A0A0C] border-white/10 text-white/50"
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
        title="Content Analysis, Will AI Cite Your Content? | Genezio"
        description="Genezio Content Analysis scores every page on 8 checks, can AI reach it, does it cover what people ask, is it built to get cited, pre-publish and post-publish, then turns findings into an action plan. Book a demo!"
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
                text: "Content Analysis scores every page on eight checks across two groups. Content: does it cover the questions AI asks, is it the kind of article AI cites for the topic, does it help the brand without sounding like an ad, is it structured to get cited, and is it easy to read. Publishing: can AI reach the page, is it technically AI-readable, and how often AI already cites the domain.",
              },
            },
            {
              "@type": "Question",
              name: "Does Content Analysis work before and after publishing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Pre-publish, you can score a draft or URL to catch what's holding it back before launch. Post-publish, Content Analysis monitors the live page as engines re-crawl, alerts you when access or structure regresses, and verifies that changes moved visibility. Every check ends in a prioritized action plan you can send to Content Hub.",
              },
            },
          ],
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <ContentAnalysisHero />
        <TwoModes />
        <ReportAnatomy />
        <InsideAnalysis />
        <ActionPlan />
        <FlywheelDiagnoseVerify />
        <GenezioCtaSection />
      </div>
    </>
  );
}
