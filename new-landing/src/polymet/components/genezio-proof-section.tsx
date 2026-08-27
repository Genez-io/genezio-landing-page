import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { Link } from "react-router";

/* Real client findings, anonymized. The six numbers that do the persuading. */
const PROOFS = [
  {
    fig: "100×",
    title: "The GA4 illusion",
    desc: "Analytics showed 1,500 AI visits. The server logs showed 150,000 conversations. Up to 99% of it never reaches your dashboard.",
    who: "Flagship finding",
  },
  {
    fig: "36%",
    title: "One question, one quarter",
    desc: "A client added a single question to onboarding. AI-attributed signups went from single digits to 36% in a quarter.",
    who: "Financial services",
  },
  {
    fig: "73.2% ±4.1%",
    title: "Math, not vibes",
    desc: "A consultancy runs 1,000 calls and reports noise. We run 100,000 and return a recommendation rate with a real confidence interval.",
    who: "Global intelligence firm",
  },
  {
    fig: "97.65%",
    title: "Someone else's citations",
    desc: "Almost every source the models read about the category was controlled by a competitor. The fix isn't more content, it's owning the surface you can.",
    who: "Commercial real estate",
  },
  {
    fig: "13%",
    title: "Not even your own brand",
    desc: "Only 13% of what the models read about the brand was actually about it. The rest was unrelated companies sharing the name.",
    who: "B2B technology group",
  },
  {
    fig: "83 / 75 / 29",
    title: "Three brands to the machine",
    desc: "One insurer, 11 million customers, three separate reputations, recommended most where it has least to gain and last on its biggest line.",
    who: "Multinational insurer",
  },
];

export function GenezioProofSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <HeroEyebrow className="mb-6 mx-auto w-fit">The proof</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Six numbers that change the conversation
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            Enterprise teams don't move on positioning, they move on a number
            they can't explain away. These are the ones that landed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROOFS.map((p) => (
            <div
              key={p.title}
              className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 leading-none tracking-[-0.02em] mb-4">
                {p.fig}
              </div>
              <h3 className="text-lg font-semibold text-white leading-snug mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
              <div className="mt-5 pt-4 border-t border-white/10 text-[11px] font-mono uppercase tracking-[0.1em] text-white/40">
                {p.who}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Real client findings, anonymized.{" "}
          <Link
            to="/methodology/"
            className="text-white/50 hover:text-emerald-400 transition-colors underline decoration-white/15 underline-offset-2"
          >
            See our methodology
          </Link>
        </p>
      </div>
    </section>
  );
}
