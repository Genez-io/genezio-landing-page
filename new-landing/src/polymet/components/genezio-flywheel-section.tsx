import { Link } from "react-router";
import {
  ActivityIcon,
  StethoscopeIcon,
  SendIcon,
  CheckCircle2Icon,
  RefreshCwIcon,
  ArrowRightIcon,
} from "lucide-react";

export function GenezioFlywheelSection() {
  const steps = [
    {
      icon: ActivityIcon,
      label: "MEASURE",
      title: "Conversations, fanouts, citations",
      detail: "Per engine, persona, and market.",
      link: null,
    },
    {
      icon: StethoscopeIcon,
      label: "DIAGNOSE",
      title: "Find the gaps",
      detail: "Where you're absent and why — technical and content.",
      link: { to: "/content-analysis/", label: "Content Analysis" },
    },
    {
      icon: SendIcon,
      label: "PUBLISH",
      title: "Citable content",
      detail: "Data-backed briefs, shipped where engines trust.",
      link: { to: "/content-hub/", label: "Content Hub" },
    },
    {
      icon: CheckCircle2Icon,
      label: "VERIFY",
      title: "Did visibility move?",
      detail: "Confirm the recommendation share actually changed.",
      link: { to: "/content-analysis/", label: "Content Analysis" },
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#050506] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <RefreshCwIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              The operating model
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            From invisible to recommended:{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              the flywheel
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mt-6">
            Not a project — a loop. Engines re-crawl continuously, so every turn
            spins the wheel faster and early movers compound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="h-full bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-xs font-mono text-white/30">
                      {`0${index + 1}`}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-blue-400 tracking-widest mb-2">
                    {step.label}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#B0B0B3] leading-relaxed mb-4">
                    {step.detail}
                  </p>
                  {step.link && (
                    <Link
                      to={step.link.to}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {step.link.label}
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRightIcon className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-blue-500/30 z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
