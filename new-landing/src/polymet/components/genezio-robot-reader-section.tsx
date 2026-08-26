import { EyeOffIcon, XCircleIcon } from "lucide-react";

import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
export function GenezioRobotReaderSection() {
  const kept = [
    "Battery life, specs, and form factor, stated plainly",
    "Accuracy backed by study data, cited",
    "Structured comparison: you vs competitors",
    "Pricing & terms, clear and machine-readable",
    "Claims with evidence, schema, structure",
  ];

  const points = [
    "Ad-funded readership economics collapse when the reader is a crawler.",
    "“Engaging” and “citable” are now two different disciplines.",
    "Structure and specificity decide whether you exist in the answer.",
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">The twist</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Your content's most important reader{" "}
            <span className="text-white">
              doesn't have eyes.
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto mt-6">
            During an AI answer, the reader on your page skips your ads, ignores
            your hooks, and extracts only facts, comparisons, and evidence.
            Everything else is dropped, including the ads that paid for the
            page.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          {/* What a human sees */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="text-xs font-mono text-white/40 tracking-widest mb-5">
              WHAT A HUMAN SEES
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 bg-white/5 rounded-md px-3 py-2.5 line-through">
                <XCircleIcon className="w-4 h-4" /> display ad, 728×90
              </div>
              <div className="h-3 w-4/5 bg-white/10 rounded" />
              <div className="h-3 w-3/5 bg-white/5 rounded" />
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 bg-white/5 rounded-md px-3 py-2.5 line-through">
                <XCircleIcon className="w-4 h-4" /> hero video, autoplay
              </div>
              <div className="h-3 w-3/4 bg-white/10 rounded" />
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 bg-white/5 rounded-md px-3 py-2.5 line-through">
                <XCircleIcon className="w-4 h-4" /> newsletter popup
              </div>
              <div className="h-3 w-2/3 bg-white/5 rounded" />
            </div>
          </div>

          {/* What the machine keeps */}
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="text-xs font-mono text-white/40 tracking-widest mb-5">
              WHAT THE MACHINE KEEPS
            </div>
            <div className="space-y-3">
              {kept.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-zinc-400 pl-4 py-1 text-sm text-white/90 leading-snug"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono text-sm mt-0.5">
                {`0${i + 1}`}
              </span>
              <span className="text-sm text-white/90 leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
