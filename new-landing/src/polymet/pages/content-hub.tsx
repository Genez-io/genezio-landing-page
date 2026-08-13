import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  FileTextIcon,
  TargetIcon,
  UsersIcon,
  GlobeIcon,
  LinkIcon,
  ListChecksIcon,
  SparklesIcon,
  PenLineIcon,
  SearchIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  MapPinIcon,
  LayersIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

/* ─────────────────────────────  HERO  ───────────────────────────── */
function ContentHubHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-6">Content Hub</HeroEyebrow>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          You can't buy the recommendation.
          <br />
          <span className="text-emerald-400">
            You earn it with content.
          </span>
        </h1>

        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Content Hub turns what AI engines say about your brand into
          data-backed content briefs your team can ship, and drafts them for
          you when you need speed. Every brief is built from the real
          conversations, fanouts, and sources driving the answers today.
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

/* ────────────────────  FROM MEASUREMENT TO BRIEF  ──────────────────── */
function MeasurementToBrief() {
  const steps = [
    {
      icon: SearchIcon,
      label: "ASK",
      title: "What people ask AI in your category",
      description:
        "The real conversational prompts buyers use, not keywords, across every persona and market.",
    },
    {
      icon: LayersIcon,
      label: "RETRIEVE",
      title: "What the engines pull to answer",
      description:
        "The query fanouts, cited sources, and trusted domains behind each answer.",
    },
    {
      icon: TargetIcon,
      label: "APPEAR",
      title: "Where you're missing, and why",
      description:
        "The gaps: sources engines trust where your brand is absent, per engine and region.",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-20">
          <HeroEyebrow className="mb-4 mx-auto w-fit">From measurement to action</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            A brief is only as good as the data behind it
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto">
            Content Hub doesn't guess what to write. It starts from what AI
            engines are already doing with your category, then turns every gap
            into a brief you can hand to a writer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="text-xs font-mono text-zinc-400 tracking-widest mb-3">
                  {step.label}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#B0B0B3] leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRightIcon className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6 text-zinc-500/40 z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────  BRIEF ANATOMY  ──────────────────────── */
function BriefAnatomy() {
  const briefFields = [
    {
      icon: SearchIcon,
      label: "Target conversation",
      value: '"Best sleep tracker without a screen for my husband?"',
    },
    {
      icon: LayersIcon,
      label: "Query fanout to cover",
      value: "sleep-stage accuracy · comfort · battery · WHOOP vs Oura",
    },
    {
      icon: UsersIcon,
      label: "Persona",
      value: "Sleep-focused buyer",
    },
    {
      icon: MapPinIcon,
      label: "Market",
      value: "UK · English",
    },
    {
      icon: LinkIcon,
      label: "Sources to earn or cite",
      value: "3 trusted domains where you're currently absent",
    },
    {
      icon: ListChecksIcon,
      label: "Must-answer questions & claims",
      value: "Battery life · study-backed accuracy · pricing, stated plainly",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <HeroEyebrow className="mb-4 mx-auto w-fit">The brief is the product</HeroEyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Every brief is a{" "}
              <span className="text-white">
                blueprint for a citable answer
              </span>
            </h2>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed mb-6">
              Not a title and a word count. A Content Hub brief tells your
              writer exactly which conversation to win, which sub-questions the
              engines fan out, which facts and comparisons the machine keeps,
              and which trusted sources you need to show up in.
            </p>
            <p className="text-base md:text-lg text-[#B0B0B3] leading-relaxed">
              Hand it to your in-house team or your agency, the strategy is
              already done.
            </p>
          </div>

          {/* Brief card visual */}
          <div className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-zinc-500/5">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <FileTextIcon className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    Content Brief
                  </div>
                  <div className="text-white/40 text-xs">
                    Generated from live AI data
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 text-[10px] font-semibold bg-white/[0.06] text-emerald-300 rounded-md border border-white/15">
                READY
              </span>
            </div>

            <div className="space-y-4">
              {briefFields.map((field, index) => {
                const Icon = field.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-semibold mb-0.5">
                        {field.label}
                      </div>
                      <div className="text-white/90 text-sm leading-snug">
                        {field.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  BRIEFS VS DIRECT GENERATION  ───────────────────── */
function BriefsVsDirect() {
  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">Two ways to ship</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Brief it, or generate it
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto">
            Most teams want the strategy and their own voice on the page. Some
            want a running start. Content Hub does both.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Briefs - primary */}
          <div className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.04] rounded-full blur-3xl" />
            <span className="inline-block px-3 py-1 text-[10px] font-semibold bg-white/5 text-zinc-300 rounded-md border border-white/10 mb-6">
              MOST POPULAR
            </span>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <FileTextIcon className="w-6 h-6 text-zinc-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Data-backed briefs
            </h3>
            <p className="text-[#B0B0B3] leading-relaxed mb-6">
              The strategic layer. Genezio decides what to write, for whom,
              where, and why it will get cited, then your writers do what they
              do best. You keep full editorial control and brand voice.
            </p>
            <ul className="space-y-3">
              {[
                "Prioritized by visibility impact",
                "Fanout coverage & source targets included",
                "Persona- and market-specific",
                "Drop straight into your workflow or agency",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct generation - secondary */}
          <div className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 md:p-10">
            <span className="inline-block px-3 py-1 text-[10px] font-semibold bg-white/5 text-white/50 rounded-md border border-white/10 mb-6">
              WHEN YOU NEED SPEED
            </span>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center mb-6">
              <PenLineIcon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Direct content generation
            </h3>
            <p className="text-[#B0B0B3] leading-relaxed mb-6">
              Need a first draft now? Content Hub can generate the full piece
              from the same brief, machine-readable, structured, and citable
              from line one, ready for your team to review and refine.
            </p>
            <ul className="space-y-3">
              {[
                "Built on the exact brief, not a blank prompt",
                "Structured for how engines actually read",
                "A starting draft, not a black box",
                "Edit, approve, publish",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  PLAN CONTENT LIKE MEDIA  ───────────────────── */
function PlanLikeMedia() {
  const dimensions = [
    {
      icon: FileTextIcon,
      label: "WHAT",
      description: "to publish, citable, machine-readable, evidence-backed",
    },
    {
      icon: GlobeIcon,
      label: "WHERE",
      description: "your own domain vs the third parties the LLMs actually cite",
    },
    {
      icon: UsersIcon,
      label: "WHO",
      description: "which persona is asking, and how they frame the question",
    },
    {
      icon: MapPinIcon,
      label: "WHICH MARKET",
      description: "answers change by geography and language, plan per market",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">The playbook</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Plan content like you plan media
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto">
            Content Hub structures every brief across the four decisions that
            decide whether you show up in the answer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dimensions.map((dim, index) => {
            const Icon = dim.icon;
            return (
              <div
                key={index}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                  {dim.label}
                </div>
                <p className="text-[#B0B0B3] text-sm leading-relaxed">
                  {dim.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FLYWHEEL / PUBLISH  ───────────────────────── */
function FlywheelPublish() {
  const loop = [
    { label: "MEASURE", active: false },
    { label: "DIAGNOSE", active: false },
    { label: "PUBLISH", active: true },
    { label: "VERIFY", active: false },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-4 mx-auto w-fit">Where it fits</HeroEyebrow>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
          Content Hub is the{" "}
          <span className="text-white">
            Publish
          </span>{" "}
          step of the loop
        </h2>
        <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mb-12">
          Measure the conversations, diagnose the gaps, publish citable content
          where engines trust it, then verify that visibility moved. Every turn
          spins the wheel faster.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {loop.map((step, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              <div
                className={`px-5 py-3 rounded-xl border font-mono text-sm tracking-wider ${
                  step.active
                    ? "bg-white/5 border-white/10 text-zinc-300 font-semibold"
                    : "bg-[#0A0A0C] border-white/10 text-white/50"
                }`}
              >
                {`0${index + 1} · ${step.label}`}
              </div>
              {index < loop.length - 1 && (
                <ArrowRightIcon className="w-5 h-5 text-zinc-500/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentHub() {
  return (
    <>
      <PolymetSEO
        title="Content Hub, Data-Backed Content Briefs for AI Search | Genezio"
        description="Genezio Content Hub turns AI-engine data into prioritized content briefs your team can ship, and generates the drafts too. Win recommendations in ChatGPT, Gemini, Perplexity & AI Overviews. Book a demo!"
        canonicalPath="/content-hub/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does Genezio Content Hub generate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Content Hub generates data-backed content briefs from real AI-engine data, the conversations, query fanouts, and sources driving answers about your category. Briefs are the primary output so your writers keep full editorial control, and Content Hub can also generate the full draft directly when you need speed.",
              },
            },
            {
              "@type": "Question",
              name: "What is inside a Content Hub brief?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Each brief includes the target conversation, the query fanout to cover, the persona and market, the trusted sources to earn or cite, and the must-answer questions, facts, and comparisons the AI engines keep, structured so the resulting content is citable.",
              },
            },
          ],
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <ContentHubHero />
        <MeasurementToBrief />
        <BriefAnatomy />
        <BriefsVsDirect />
        <PlanLikeMedia />
        <FlywheelPublish />
        <GenezioCtaSection />
      </div>
    </>
  );
}
