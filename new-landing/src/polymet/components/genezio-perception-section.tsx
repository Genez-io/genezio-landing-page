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
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

/* ── Radar geometry (SSR-safe, deterministic) ─────────────────────── */
const AXES = ["Perception", "Visibility", "Recommendation", "Sentiment", "Accuracy"];
const VBW = 440;
const VBH = 360;
const CX = 220;
const CY = 175;
const R = 118;
const N = AXES.length;

function pt(i: number, radius: number): [number, number] {
  const a = ((-90 + (i * 360) / N) * Math.PI) / 180;
  return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)];
}
function poly(vals: number[]): string {
  return vals.map((v, i) => pt(i, R * v).join(",")).join(" ");
}

const YOU = [0.86, 0.62, 0.55, 0.8, 0.7];
const COMPETITOR = [0.6, 0.9, 0.83, 0.5, 0.74];

/* Association (known-for) vs recommendation (recommended-for), illustrative */
const ATTRIBUTES = [
  { name: "Digital experience", known: 84, rec: 76 },
  { name: "Trust & security", known: 88, rec: 81 },
  { name: "Low fees", known: 73, rec: 44 },
  { name: "Mortgages", known: 66, rec: 38 },
];
const RINGS = [0.25, 0.5, 0.75, 1].map((f) =>
  AXES.map((_, i) => pt(i, R * f).join(",")).join(" ")
);
const LABELS = AXES.map((name, i) => {
  const [x, y] = pt(i, R + 16);
  const anchor = x < CX - 6 ? "end" : x > CX + 6 ? "start" : "middle";
  return { name, x, y, anchor };
});

function RadarCard() {
  return (
    <div className="relative bg-[#0A0A0C] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/40">
      {/* header + legend */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-1">
            AI perception index
          </div>
          <div className="text-white font-semibold">Your brand vs the category</div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1.5 text-white/70">
            <span className="h-2 w-2 rounded-[2px] bg-emerald-400" /> You
          </span>
          <span className="inline-flex items-center gap-1.5 text-white/50">
            <span className="h-2 w-2 rounded-[2px] bg-white/40" /> Top competitor
          </span>
        </div>
      </div>

      {/* radar */}
      <svg viewBox={`0 0 ${VBW} ${VBH}`} className="w-full h-auto" role="img" aria-label="Radar comparing your brand to a competitor across five AI perception dimensions">
        {/* grid rings */}
        {RINGS.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        ))}
        {/* axis spokes */}
        {AXES.map((_, i) => {
          const [x, y] = pt(i, R);
          return (
            <line
              key={i}
              x1={CX}
              y1={CY}
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          );
        })}
        {/* competitor polygon */}
        <polygon
          points={poly(COMPETITOR)}
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
        {/* your polygon */}
        <polygon
          points={poly(YOU)}
          fill="rgba(2,248,162,0.16)"
          stroke="#02F8A2"
          strokeWidth="2"
        />
        {YOU.map((v, i) => {
          const [x, y] = pt(i, R * v);
          return <circle key={i} cx={x} cy={y} r="3" fill="#02F8A2" />;
        })}
        {/* axis labels */}
        {LABELS.map((l) => (
          <text
            key={l.name}
            x={l.x}
            y={l.y}
            textAnchor={l.anchor as "start" | "middle" | "end"}
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize="11"
            fontWeight="600"
          >
            {l.name}
          </text>
        ))}
      </svg>

      {/* misperception → corrected callout */}
      <div className="mt-4 flex items-center gap-3 bg-[#050506] border border-white/10 rounded-xl px-4 py-3">
        <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        <span className="text-sm text-white/80">
          <span className="font-semibold text-white">1 misperception</span>{" "}
          detected on “pricing” — corrected across engines
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
              Know why AI recommends someone else — and what changes that
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

          {/* Right: competitive radar */}
          <div className="relative">
            <RadarCard />
          </div>
        </div>

        {/* Perception ≠ recommendation gap */}
        <div className="mt-16 md:mt-20">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight">
              Being known for something isn't being recommended for it
            </h3>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              AI can strongly associate your brand with an attribute and still
              send the customer to a competitor. We show the gap attribute by
              attribute, so you fix the ones that actually decide the pick.
            </p>
          </div>

          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="hidden sm:grid grid-cols-[160px_1fr_120px] gap-4 pb-4 mb-4 border-b border-white/10 text-[11px] uppercase tracking-[0.2em] text-white/35">
              <span>Attribute</span>
              <span>Known for vs recommended for</span>
              <span className="text-right">Gap</span>
            </div>
            <div className="space-y-5">
              {ATTRIBUTES.map((a) => {
                const gap = a.known - a.rec;
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
                        <span className="w-16 text-[10px] uppercase tracking-wider text-white/35">
                          Known
                        </span>
                        <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-white/40"
                            style={{ width: `${a.known}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-16 text-[10px] uppercase tracking-wider text-white/35">
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
              Illustrative. A wide gap means AI knows you for it, but recommends
              someone else, exactly where an intervention moves the needle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
