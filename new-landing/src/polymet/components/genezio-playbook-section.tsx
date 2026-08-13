import { SearchIcon, LayersIcon, TargetIcon } from "lucide-react";

export function GenezioPlaybookSection() {
  const questions = [
    {
      icon: SearchIcon,
      label: "ASK",
      title: "What do your customers actually ask?",
      description: "Real conversational prompts, not keywords.",
    },
    {
      icon: LayersIcon,
      label: "RETRIEVE",
      title: "What do the engines pull to answer?",
      description: "Query fanouts, cited sources, trusted domains.",
    },
    {
      icon: TargetIcon,
      label: "APPEAR",
      title: "Do you show up, and how are you framed?",
      description: "Presence, share of recommendation, sentiment vs competitors.",
    },
  ];

  const media = [
    { label: "WHAT", detail: "to publish, citable, machine-readable" },
    { label: "WHERE", detail: "your domain vs the third parties LLMs actually cite" },
    { label: "WHO", detail: "which persona is asking" },
    { label: "WHICH MARKET", detail: "answers change by geography and language" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-zinc-400 uppercase tracking-wider mb-4 font-semibold">
            The playbook
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            You can't buy the recommendation.{" "}
            <span className="text-emerald-400">
              You can earn it.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto mt-6">
            Today there's exactly one lever for the organic answer: content. But
            you build the strategy on three questions, then plan it like media.
          </p>
        </div>

        {/* Three questions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 md:mb-12">
          {questions.map((q, i) => {
            const Icon = q.icon;
            return (
              <div
                key={i}
                className="bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-7 hover:border-zinc-500/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-zinc-500/10 border border-zinc-500/30 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="text-xs font-mono text-zinc-400 tracking-widest mb-3">
                  {q.label}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {q.title}
                </h3>
                <p className="text-sm text-[#B0B0B3] leading-relaxed">
                  {q.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Then plan like media */}
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-white/40 mb-6">
            → Then plan content like media
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {media.map((m, i) => (
              <div
                key={i}
                className="border border-zinc-500/25 rounded-xl p-5 bg-zinc-500/[0.03]"
              >
                <div className="text-lg md:text-xl font-extrabold text-white mb-1 tracking-tight">
                  {m.label}
                </div>
                <div className="text-xs text-[#B0B0B3] leading-relaxed">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
