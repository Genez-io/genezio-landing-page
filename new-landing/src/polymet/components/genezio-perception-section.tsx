import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  BrainIcon,
  CompassIcon,
  GitCompareIcon,
  TrophyIcon,
  TargetIcon,
  RefreshCwIcon,
  CheckCircle2Icon,
  SparklesIcon,
  BriefcaseIcon,
  Building2Icon,
  CodeIcon,
  NewspaperIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

/* Competitive SWOT vs a top competitor, illustrative */
const SWOT = [
  {
    key: "Strengths",
    positive: true,
    items: ["Cited by authoritative sources", "Positive sentiment on reliability"],
  },
  {
    key: "Weaknesses",
    positive: false,
    items: ["Absent from comparison prompts", "Thin coverage on pricing"],
  },
  {
    key: "Opportunities",
    positive: true,
    items: ["Unanswered “best for…” queries", "Winnable mortgage-intent prompts"],
  },
  {
    key: "Threats",
    positive: false,
    items: ["A competitor is gaining on ChatGPT", "Outdated facts still cited"],
  },
];

/* Mentioned-for vs recommended-for, by topic, illustrative */
const TOPICS = [
  { name: "Digital experience", mentioned: 84, rec: 76 },
  { name: "Trust & security", mentioned: 88, rec: 81 },
  { name: "Low fees", mentioned: 73, rec: 44 },
  { name: "Mortgages", mentioned: 66, rec: 38 },
];

/* Different buyer personas asking in their own words, illustrative */
const PERSONAS = [
  {
    icon: BriefcaseIcon,
    name: "Young Professional",
    question: "Best bank account with a great mobile app?",
    status: "Recommended #1",
    won: true,
  },
  {
    icon: Building2Icon,
    name: "B2B Buyer",
    question: "Which bank for business fiber and payments?",
    status: "2nd, not yet",
    won: false,
  },
  {
    icon: CodeIcon,
    name: "Developer",
    question: "Bank with the best API and sandbox?",
    status: "Not mentioned",
    won: false,
  },
  {
    icon: NewspaperIcon,
    name: "Journalist",
    question: "Most trusted bank on security?",
    status: "Recommended",
    won: true,
  },
];
function SwotCard() {
  return (
    <div className="relative bg-[#0A0A0C] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/40">
      {/* header */}
      <div className="mb-5">
        <div className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-1">
          Competitive SWOT
        </div>
        <div className="text-white font-semibold">
          Your brand vs a top competitor
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SWOT.map((q) => (
          <div
            key={q.key}
            className="bg-[#050506] border border-white/10 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`h-1.5 w-1.5 rounded-[2px] ${
                  q.positive ? "bg-emerald-400" : "bg-white/30"
                }`}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                {q.key}
              </span>
            </div>
            <ul className="space-y-2">
              {q.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2 text-xs text-white/60 leading-snug"
                >
                  <span
                    className={`mt-1 h-1 w-1 flex-shrink-0 rounded-full ${
                      q.positive ? "bg-emerald-400/70" : "bg-white/25"
                    }`}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Recommended action to outperform the competitor */}
      <div className="mt-4 flex items-start gap-3 bg-[#050506] border border-white/10 rounded-xl px-4 py-3">
        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-500/15 border border-emerald-500/30">
          <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
        </span>
        <span className="text-sm text-white/80 leading-snug">
          <span className="font-semibold text-white">Recommended action:</span>{" "}
          publish a head-to-head comparison page. You're missing from the “vs”
          prompts this competitor keeps winning.
        </span>
      </div>
    </div>
  );
}

export function GenezioPerceptionSection() {
  const points = [
    { icon: BrainIcon, text: "How AI engines perceive your brand" },
    { icon: CompassIcon, text: "Where you sit in your industry" },
    { icon: GitCompareIcon, text: "How you compare to key competitors" },
    { icon: TrophyIcon, text: "What competitors do well" },
    { icon: TargetIcon, text: "How to win the recommendation" },
    { icon: RefreshCwIcon, text: "How to fix what AI gets wrong" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: the questions you must answer today */}
          <div>
            <HeroEyebrow className="mb-6 w-fit">Know where you stand</HeroEyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Know why AI recommends someone else
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
              Being seen isn't the same as being chosen. Genezio shows why an
              answer engine picks a competitor over you, and the exact move that
              flips the recommendation in your favor.
            </p>

            <ul className="space-y-3.5 mb-10">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.text} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </span>
                    <span className="text-[15px] md:text-base text-white/80 leading-relaxed pt-1">
                      {p.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
              >
                See where you stand
              </Button>
            </a>
          </div>

          {/* Right: competitive SWOT */}
          <div className="relative">
            <SwotCard />
          </div>
        </div>

        {/* Perception ≠ recommendation gap */}
        <div className="mt-16 md:mt-20">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight">
              Being visible for a topic isn't being recommended for it
            </h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              AI can strongly associate your brand with a topic and still send
              the customer to a competitor. We show the gap topic by topic, so
              you fix the ones that actually decide the pick.
            </p>
          </div>

          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="hidden sm:grid grid-cols-[160px_1fr_120px] gap-4 pb-4 mb-4 border-b border-white/10 text-[11px] uppercase tracking-[0.2em] text-white/35">
              <span>Topic</span>
              <span>Mentioned for vs recommended for</span>
              <span className="text-right">Gap</span>
            </div>
            <div className="space-y-5">
              {TOPICS.map((a) => {
                const gap = a.mentioned - a.rec;
                const wins = gap >= 20;
                return (
                  <div
                    key={a.name}
                    className="grid grid-cols-1 sm:grid-cols-[160px_1fr_120px] gap-3 sm:gap-4 sm:items-center"
                  >
                    <span className="text-sm font-medium text-white/80">
                      {a.name}
                    </span>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-20 text-[10px] uppercase tracking-wider text-white/35">
                          Mentioned
                        </span>
                        <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-white/40"
                            style={{ width: `${a.known}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-20 text-[10px] uppercase tracking-wider text-white/35">
                          Rec.
                        </span>
                        <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-emerald-500"
                            style={{ width: `${a.rec}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:text-right">
                      {wins ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70">
                          <span className="h-1.5 w-1.5 rounded-[2px] bg-emerald-400" />
                          −{gap} pts
                        </span>
                      ) : (
                        <span className="text-xs text-white/35">Aligned</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 pt-5 border-t border-white/10 text-xs text-white/40">
              Illustrative. A wide gap means AI mentions you for it, but
              recommends someone else, exactly where an intervention moves the
              needle.
            </p>
          </div>
        </div>

        {/* Win every buyer persona */}
        <div className="mt-16 md:mt-20">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight">
              Win every buyer persona
            </h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Different buyers ask differently. See how AI answers each persona,
              and win the recommendation with all of them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERSONAS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </span>
                    <span className="text-sm font-semibold text-white leading-tight">
                      {p.name}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed mb-4 min-h-[48px]">
                    “{p.question}”
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-[2px] ${
                        p.won ? "bg-emerald-400" : "bg-white/25"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-medium ${
                        p.won ? "text-emerald-400" : "text-white/40"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
