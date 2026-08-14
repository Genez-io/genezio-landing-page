import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  AlertTriangleIcon,
  TrophyIcon,
  TrendingUpIcon,
  SparklesIcon,
} from "lucide-react";

/* Status pill: emerald for good states, neutral for at-risk */
function StatusPill({
  tone,
  icon: Icon,
  children,
}: {
  tone: "good" | "risk";
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
        tone === "good"
          ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
          : "bg-white/5 text-white/70 border-white/10"
      }`}
    >
      <Icon className="w-3 h-3" />
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] text-white/50 border border-white/10 bg-white/5 rounded-md px-2 py-0.5">
      {children}
    </span>
  );
}

export function GenezioBusinessGoalsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <HeroEyebrow className="mb-6 mx-auto w-fit">Business goals</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Set the goal. Genezio tracks it and hands you the plan
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-6 leading-relaxed">
            Define the outcomes that matter, a recommendation rate, a ranking, a
            corrected fact, marketplace share. Genezio tracks each one daily
            against the AI answer engines, then gives you a clear plan to follow
            right in the platform.
          </p>
        </div>

        {/* Scorecard: three goal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {/* Goal 1: at risk, recommendation */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <StatusPill tone="risk" icon={AlertTriangleIcon}>
                At risk
              </StatusPill>
              <Tag>Recommendation</Tag>
            </div>
            <h3 className="text-base font-semibold text-white leading-snug mb-4">
              85% recommendation on Perplexity
            </h3>
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-4xl font-extrabold text-white leading-none">
                77%
              </span>
              <span className="text-xs text-white/40">target 85%</span>
            </div>
            <div className="relative h-2 rounded-full bg-white/[0.06] overflow-hidden mb-3">
              <div
                className="h-full rounded-full bg-emerald-500"
                style={{ width: "77%" }}
              />
              <div
                className="absolute top-0 bottom-0 w-px bg-white/50"
                style={{ left: "85%" }}
              />
            </div>
            <div className="text-xs font-medium text-emerald-400">
              ↑ 1.8 pts this week
            </div>
          </div>

          {/* Goal 2: achieved, ranking */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <StatusPill tone="good" icon={TrophyIcon}>
                Achieved
              </StatusPill>
              <Tag>Ranking</Tag>
            </div>
            <h3 className="text-base font-semibold text-white leading-snug mb-4">
              #1 telecom for 5G coverage, all engines
            </h3>
            <div className="text-4xl font-extrabold text-emerald-400 leading-none mb-3">
              #1
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Holding the top spot. Lock the win by keeping it 30 days.
            </p>
          </div>

          {/* Goal 3: on track, fact-checking */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <StatusPill tone="good" icon={TrendingUpIcon}>
                On track
              </StatusPill>
              <Tag>Fact-checking</Tag>
            </div>
            <h3 className="text-base font-semibold text-white leading-snug mb-4">
              New price known by engines: €9.99 → €8.99
            </h3>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-4xl font-extrabold text-white leading-none">
                2
              </span>
              <span className="text-lg font-bold text-white/40">/5</span>
              <span className="ml-2 text-xs text-white/40 self-center">
                engines updated
              </span>
            </div>
            <div className="flex gap-1.5 mb-3">
              {["good", "good", "bad", "bad", "idle"].map((s, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${
                    s === "good"
                      ? "bg-emerald-500"
                      : s === "bad"
                        ? "bg-white/15"
                        : "bg-white/[0.06]"
                  }`}
                />
              ))}
            </div>
            <div className="text-xs font-medium text-emerald-400">
              ↑ 2 this week
            </div>
          </div>
        </div>

        {/* The plan: recommended action you follow in-platform */}
        <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <SparklesIcon className="w-3 h-3" />
                  Recommended action
                </span>
                <Tag>Content gap</Tag>
                <Tag>Medium impact</Tag>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3">
                A question your buyers keep asking, and you have no page for
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                “Can I add my kids' numbers and set limits?” came up in 38
                conversations this month. Perplexity answered from a parenting
                blog and a 2023 forum post every time, and your brand wasn't
                mentioned once.
              </p>
            </div>

            {/* steps */}
            <div className="lg:border-l lg:border-white/10 lg:pl-10">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-4">
                The plan · 0 of 3 steps
              </div>
              <ul className="space-y-3">
                {[
                  "Publish one canonical answer page with FAQPage schema",
                  "Link it from the main plan page so crawlers reach it",
                  "Watch the blog and forum citations get displaced",
                ].map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border border-white/25" />
                    <span className="text-sm text-white/80 leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-white/40">
                One new action arrives each week, and you run it right in the
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
