import { SearchXIcon } from "lucide-react";

import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
export function GenezioShiftSection() {
  const stats = [
    {
      value: "12–15%",
      label:
        "of global searches now run through AI tools, up from 5–6% a year earlier",
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

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <HeroEyebrow className="mb-6">The shift</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            This isn't the future.{" "}
            <span className="text-white">
              It's already happening.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mt-6">
            Buying questions that used to be keywords are now conversations, 
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
