import { SearchXIcon } from "lucide-react";

export function GenezioShiftSection() {
  const stats = [
    {
      value: "12–15%",
      label:
        "of global searches now run through AI tools — up from 5–6% a year earlier",
    },
    {
      value: "~900M",
      label: "weekly active users on ChatGPT alone",
    },
    {
      value: "−25%",
      label: "projected drop in traditional search volume by 2026 (Gartner)",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <SearchXIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              The shift
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            This isn't the future.{" "}
            <span className="text-emerald-400">
              It's already happening.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mt-6">
            Buying questions that used to be keywords are now conversations —
            and they're moving to AI at scale.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-t border-white/10 pt-6 text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-none">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-[#B0B0B3] leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
