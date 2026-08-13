import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  PlugIcon,
  MessageSquareIcon,
  FileBarChart2Icon,
  BlocksIcon,
  ClockIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  SparklesIcon,
  TerminalIcon,
  BotIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

/* ─────────────────────────────  HERO  ───────────────────────────── */
function McpHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <HeroEyebrow className="mb-8">MCP · Built on Genezio data</HeroEyebrow>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.03em] mb-8 text-white">
              Your AI visibility data,{" "}
              <span className="text-emerald-400">answerable in any assistant.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              The Genezio MCP server connects your favorite AI assistant
              straight to the data we extract from real AI conversations. Ask
              custom questions, build custom reports, run ready-made skills and
              scheduled routines, all grounded in your own answer-engine data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
                >
                  Book a Demo
                </Button>
              </a>
              <a href="/docs/" className="inline-flex items-center gap-2 px-5 py-3 text-zinc-300 hover:text-white transition-colors duration-200 text-base font-medium group">
                <TerminalIcon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                Read the docs
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-white/40">
              <span className="inline-flex items-center gap-1.5">
                <PlugIcon className="w-3.5 h-3.5 text-white/40" />
                Works with any MCP client
              </span>
              <span className="hidden sm:inline text-white/15">·</span>
              <span>Claude, Cursor &amp; more</span>
              <span className="hidden sm:inline text-white/15">·</span>
              <span>Scoped, read-only access</span>
            </div>
          </div>

          {/* Right: MCP chat visual */}
          <div className="relative">
            <div className="relative bg-[#0E0E12] border border-white/10 rounded-3xl p-5 md:p-6 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
                  <PlugIcon className="w-3.5 h-3.5 text-emerald-400" />
                </span>
                <span className="text-xs font-medium text-white/60">
                  Connected to Genezio MCP
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  live
                </span>
              </div>

              {/* user question */}
              <div className="flex justify-end mb-4">
                <div className="max-w-[85%] bg-white/[0.06] border border-white/10 rounded-2xl rounded-br-md px-4 py-2.5 text-sm text-white">
                  How did our recommendation rate change in ChatGPT last week,
                  and which competitor gained the most?
                </div>
              </div>

              {/* assistant answer grounded in data */}
              <div className="flex justify-start">
                <div className="max-w-[92%] bg-white/[0.03] border border-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-2 mb-2 text-[11px] uppercase tracking-[0.2em] text-white/35">
                    <BotIcon className="w-3.5 h-3.5" />
                    Answer · grounded in your data
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed mb-3">
                    Your recommendation rate rose from{" "}
                    <span className="font-semibold text-white">41%</span> to{" "}
                    <span className="font-semibold text-emerald-400">47%</span>{" "}
                    across 1,284 tracked conversations. The biggest competitor
                    gain was <span className="font-semibold text-white">Acme</span>,
                    up 5 pts, mostly on comparison prompts.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/5 border border-white/10 text-white/50">
                      1,284 conversations
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/5 border border-white/10 text-white/50">
                      ChatGPT
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/5 border border-white/10 text-white/50">
                      last 7 days
                    </span>
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

/* ───────────────────────  GROUNDED IN DATA BAND  ─────────────────── */
function GroundedBand() {
  return (
    <section className="py-16 md:py-24 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-6">
          <DatabaseIcon className="w-6 h-6 text-emerald-400" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Every answer is anchored in your real conversation data
        </h2>
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
          The MCP server doesn't guess. It reads from the same data Genezio
          extracts every day, millions of real answer-engine conversations,
          citations, sentiment, competitor mentions and market coverage, so
          whatever you ask, the response is traceable back to the source.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────  CAPABILITIES  ───────────────────────── */
function Capabilities() {
  const caps = [
    {
      icon: MessageSquareIcon,
      title: "Custom questions",
      description:
        "Ask anything in plain language, from visibility trends to why a specific prompt lost the recommendation. The MCP resolves it against your live data.",
    },
    {
      icon: FileBarChart2Icon,
      title: "Custom reporting",
      description:
        "Turn any question into a report, exec summary, competitor breakdown, market-by-market view, then export or share it wherever your team works.",
    },
    {
      icon: BlocksIcon,
      title: "Predefined skills",
      description:
        "Ready-made workflows for the questions teams ask most, executive briefs, citation analysis, competitor SWOT, sentiment deep-dives, one command each.",
    },
    {
      icon: ClockIcon,
      title: "Routines",
      description:
        "Schedule skills to run on their own, a daily visibility brief or a weekly competitor digest, delivered automatically the moment the data updates.",
    },
    {
      icon: SparklesIcon,
      title: "Agentic workflows",
      description:
        "Let your assistant chain skills together, pull the data, analyze it, draft the recommendation, all in one grounded conversation.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Governed access",
      description:
        "Scoped, read-only access to the brands and workspaces you allow, with every call auditable. Your data stays yours.",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <HeroEyebrow className="mb-6 mx-auto w-fit">What you can do</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            One protocol, the whole Genezio toolbox
          </h2>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            Everything you'd do inside the Genezio dashboard, now available
            wherever your team already works with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  HOW IT WORKS  ───────────────────────── */
function HowItWorks() {
  const steps = [
    {
      icon: PlugIcon,
      title: "Connect the server",
      description:
        "Add the Genezio MCP server to Claude, Cursor, or any MCP-compatible client with a scoped access token, no data leaves your control.",
    },
    {
      icon: MessageSquareIcon,
      title: "Ask, or run a skill",
      description:
        "Type a question in natural language or invoke a predefined skill. The MCP translates it into the right queries over your conversation data.",
    },
    {
      icon: ArrowRightIcon,
      title: "Get grounded answers",
      description:
        "Receive answers, reports, and next steps traceable to the source conversations, then schedule it as a routine to keep coming back.",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">How it works</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            From connection to insight in three steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-sm font-bold text-emerald-400">
                    {i + 1}
                  </span>
                  <Icon className="w-5 h-5 text-white/50" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────  SKILLS & ROUTINES  ────────────────────── */
function SkillsAndRoutines() {
  const skills = [
    "Executive visibility brief",
    "Competitor SWOT analysis",
    "Citation & source analysis",
    "Sentiment deep-dive",
    "Topic & scenario performance",
    "Market-by-market coverage",
  ];
  const routines = [
    { label: "Daily visibility brief", cadence: "Every morning" },
    { label: "Weekly competitor digest", cadence: "Every Monday" },
    { label: "Citation change alerts", cadence: "On change" },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#050506] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-7 md:p-9">
            <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <BlocksIcon className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Skills that already know the questions
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
              Ship faster with predefined skills built by the Genezio team,
              each one a battle-tested workflow over your conversation data.
            </p>
            <ul className="space-y-2.5">
              {skills.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-white/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Routines */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-7 md:p-9">
            <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <ClockIcon className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Routines that run without you
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
              Turn any skill into a schedule. The MCP runs it on cadence and
              delivers the result where your team already reads it.
            </p>
            <div className="space-y-3">
              {routines.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-3 bg-[#050506] border border-white/10 rounded-xl px-4 py-3"
                >
                  <ClockIcon className="w-4 h-4 text-white/40 flex-shrink-0" />
                  <span className="flex-1 text-sm text-white/80 font-medium">
                    {r.label}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-medium whitespace-nowrap">
                    {r.cadence}
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

/* ─────────────────────────────  PAGE  ───────────────────────────── */
export function Mcp() {
  return (
    <>
      <PolymetSEO
        title="Genezio MCP, Your AI Visibility Data in Any Assistant | Genezio"
        description="The Genezio MCP server connects any AI assistant to the data extracted from real AI conversations. Custom questions, custom reporting, predefined skills and scheduled routines, all grounded in your answer-engine data. Book a demo!"
        canonicalPath="/mcp/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the Genezio MCP server?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The Genezio MCP (Model Context Protocol) server lets any MCP-compatible AI assistant, such as Claude or Cursor, query the data Genezio extracts from real AI conversations. You can ask custom questions, generate custom reports, run predefined skills, and schedule routines, all grounded in your own answer-engine data.",
              },
            },
            {
              "@type": "Question",
              name: "What can I do with the Genezio MCP?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ask natural-language questions about your AI visibility, build custom reports, run predefined skills like executive briefs, competitor SWOT and citation analysis, and set up routines that run on a schedule. Every answer is traceable back to the source conversations, citations and sentiment in your Genezio workspace.",
              },
            },
            {
              "@type": "Question",
              name: "Is my data secure with the MCP server?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The MCP server provides scoped, read-only access to only the brands and workspaces you allow, and every call is auditable. Your data stays in your control.",
              },
            },
          ],
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <McpHero />
        <GroundedBand />
        <Capabilities />
        <HowItWorks />
        <SkillsAndRoutines />
        <GenezioCtaSection />
      </div>
    </>
  );
}
