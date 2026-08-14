import {
  UserCheckIcon,
  SwordsIcon,
  LinkIcon,
  FileTextIcon,
  TrendingUpIcon,
} from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const questions = [
  {
    icon: UserCheckIcon,
    text: "Which personas are most likely to hear our brand recommended?",
  },
  {
    icon: SwordsIcon,
    text: "Which competitors win head-to-head comparisons in AI answers?",
  },
  {
    icon: LinkIcon,
    text: "Which citations are helping or hurting us?",
  },
  {
    icon: FileTextIcon,
    text: "What content should our team or agency create next?",
  },
  {
    icon: TrendingUpIcon,
    text: "Where are the best opportunities to improve AI recommendation rates?",
  },
];

export function AboutCustomersSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <HeroEyebrow className="mb-6 w-fit">Our customers</HeroEyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Teams that need more than prompt monitoring
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-4">
              Genezio serves marketing professionals and decision-makers who
              need more than prompt monitoring. Our customers include enterprise
              brands, growth-stage companies, and agencies that want a central
              AI recommendation intelligence platform.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              Genezio gives everyone the same operating picture, whether the
              work happens in-house, with a PR partner, or through multiple
              content agencies.
            </p>
          </div>

          {/* Right: Questions list */}
          <div className="space-y-4">
            <HeroEyebrow className="mb-4 mx-auto w-fit">
              Questions our customers answer with Genezio
            </HeroEyebrow>
            {questions.map((question, index) => {
              const Icon = question.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-white/80 font-medium leading-relaxed pt-2">
                    {question.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
