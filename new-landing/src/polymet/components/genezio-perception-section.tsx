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
const CX = 160;
const CY = 160;
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
const RINGS = [0.25, 0.5, 0.75, 1].map((f) =>
  AXES.map((_, i) => pt(i, R * f).join(",")).join(" ")
);
const LABELS = AXES.map((name, i) => {
  const [x, y] = pt(i, R + 20);
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
      <svg viewBox="0 0 320 340" className="w-full h-auto" role="img" aria-label="Radar comparing your brand to a competitor across five AI perception dimensions">
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
    { icon: BrainIcon, text: "How AI engines actually perceive your brand" },
    { icon: CompassIcon, text: "How you're positioned within your industry" },
    { icon: GitCompareIcon, text: "How you stack up against your key competitors" },
    { icon: TrophyIcon, text: "What those competitors do well, and where they win" },
    { icon: TargetIcon, text: "What to do to win the recommendation over them" },
    { icon: RefreshCwIcon, text: "How to correct the perceptions AI gets wrong" },
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
              Today, you have to know how AI sees your brand
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
              Answer engines are the new front page. Winning a recommendation
              starts with a clear picture of how AI perceives your brand, how it
              ranks you against competitors, and where it's getting you wrong.
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
      </div>
    </section>
  );
}
