import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import { CheckCircle2Icon } from "lucide-react";

interface Course {
  n: string;
  rail: string;
  title: string;
  hook: string;
  modules: string[];
  outcome: string;
}

const COURSES: Course[] = [
  {
    n: "01",
    rail: "Foundations · no prior platform access needed",
    title: "Ground Truth",
    hook: "The keyword is the same. The answer is not.",
    modules: [
      "Why you, and not them",
      "Mentioned is not chosen",
      "The 100× blindspot",
      "Noise, or a real move",
    ],
    outcome:
      "A baseline, and the assumption that GEO is just SEO permanently dead. The room writes one of your own personas, then we run the same question twice, generic and as that persona, side by side.",
  },
  {
    n: "02",
    rail: "Content and first-party structure",
    title: "Becoming the Answer",
    hook: "Two readers, one page. Write for one and you fail the other.",
    modules: [
      "Two readers, one page",
      "Quotable, or invisible",
      "Bad habits, inherited",
      "The surface you actually own",
      "The rooms you do not control",
    ],
    outcome:
      "A written standard for what a citable page looks like in your category, and a structure for your site, not a list of gaps. The exercise is a prediction game played against your real citation data.",
  },
  {
    n: "03",
    rail: "Applied analytics and operations · runs on your live environment",
    title: "Closing the Loop",
    hook: "Where the analysis stops being a report.",
    modules: [
      "Personas, properly",
      "Who is beating you, and where",
      "What the number is worth",
      "From finding to brief",
      "The question in the funnel",
      "Ninety days, named and dated",
    ],
    outcome:
      "A 90-day plan with names and dates, and briefs that specify which page, which format, which claim, on which domain, and what it should move.",
  },
];

/* ─────────────────────────────  HERO  ───────────────────────────── */
function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-44 md:pb-24">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-6 mx-auto w-fit">Genezio Academy</HeroEyebrow>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
          Your team, in a room with your own recommendation data
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Free video teaches the category in the abstract. Vendor certifications
          test whether you can drive someone's dashboard. Neither one puts your
          marketing team in a room with your own recommendation data.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────  COURSES  ───────────────────────────── */
function Courses() {
  return (
    <section className="relative bg-[#0E0E10] py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="space-y-6">
          {COURSES.map((c) => (
            <div
              key={c.n}
              className="bg-[#0A0A0C] border border-white/10 border-l-2 border-l-emerald-400 rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                <span className="text-sm font-mono text-emerald-400">{c.n}</span>
                <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-white/40">
                  {c.rail}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                {c.title}
              </h2>
              <p className="text-base md:text-lg text-emerald-400/90 font-medium mb-6">
                {c.hook}
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
                {c.modules.map((m) => (
                  <div key={m} className="flex items-start gap-2.5">
                    <span className="mt-[9px] h-px w-3 flex-shrink-0 bg-emerald-400/60" />
                    <span className="text-sm text-white/70 leading-snug">{m}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#050506] border border-white/10 rounded-xl p-4 md:p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-emerald-400 mb-2">
                  You walk out with
                </div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {c.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  HOW IT RUNS  ───────────────────────── */
function HowItRuns() {
  const facts = [
    "A full day each, instructor-led",
    "Run against your own live environment",
    "Two facilitators: a customer success lead and a consultant",
    "In person or remote",
    "Priced per workshop, not per seat",
    "Ten to fifteen is comfortable, any group size can be accommodated",
  ];
  return (
    <section className="relative bg-[#050506] py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-2xl mb-10">
          <HeroEyebrow className="mb-6 w-fit">How it runs</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-white leading-tight">
            Bring the whole team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-white/10">
          {facts.map((f) => (
            <div
              key={f}
              className="flex items-start gap-3 py-4 border-b border-white/10"
            >
              <CheckCircle2Icon className="mt-0.5 w-4 h-4 flex-shrink-0 text-emerald-400" />
              <span className="text-sm md:text-base text-white/70 leading-snug">
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PAGE  ───────────────────────────── */
export function Academy() {
  return (
    <>
      <PolymetSEO
        title="Genezio Academy | Workshops on AI Recommendation"
        description="Three standalone workshops that put your marketing team in a room with your own recommendation data: Ground Truth, Becoming the Answer, and Closing the Loop."
        canonicalPath="/academy/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
      />
      <div className="min-h-screen bg-[#050506]">
        <AcademyHero />
        <Courses />
        <HowItRuns />
        <GenezioCtaSection />
      </div>
    </>
  );
}
