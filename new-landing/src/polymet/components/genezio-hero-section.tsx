import { Button } from "@/components/ui/button";
import { PlayCircleIcon, ShieldCheckIcon } from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

export function GenezioHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Single, restrained glow */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* Left: headline */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                The enterprise AI visibility platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.03] tracking-[-0.03em] mb-8">
              <span className="block text-white">The world stopped</span>
              <span className="block text-white">searching.</span>
              <span className="block text-emerald-400">It started asking.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Enterprise brands trust Genezio to measure how AI engines
              represent them in every market, and to win the recommendation,
              not just the mention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
                >
                  Book a Demo
                </Button>
              </a>
              <button
                onClick={() =>
                  window.open(
                    "https://app.genezio.ai/brand-report/49/Natwest?demo=account",
                    "_blank"
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-3 text-zinc-300 hover:text-white transition-colors duration-200 text-base font-medium group"
              >
                <PlayCircleIcon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                See the interactive demo
              </button>
            </div>

            {/* Enterprise trust microline */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-white/40">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-white/40" />
                SOC 2 Type II
              </span>
              <span className="hidden sm:inline text-white/15">·</span>
              <span>SSO / SAML</span>
              <span className="hidden sm:inline text-white/15">·</span>
              <span>GDPR &amp; DPA ready</span>
              <span className="hidden sm:inline text-white/15">·</span>
              <span>Dedicated account manager</span>
            </div>
          </div>

          {/* Right: the "prompt → recommendation" visual */}
          <div className="relative">
            <div className="mb-4 flex items-center gap-2 max-w-md ml-auto text-xs uppercase tracking-[0.2em] text-white/35">
              A buyer asks an AI assistant
            </div>

            {/* The question */}
            <div className="relative max-w-md ml-auto">
              <div className="absolute -inset-3 bg-white/[0.03] rounded-3xl blur-2xl" />
              <div className="relative bg-[#0E0E12] border border-white/10 rounded-3xl rounded-bl-md p-7 md:p-8 shadow-2xl shadow-black/40">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                  "What's the best wearable I could get for my husband to help
                  him{" "}
                  <span className="text-emerald-400 font-semibold">
                    monitor his sleep
                  </span>
                  ?"
                </p>
              </div>
            </div>

            {/* The recommendation Genezio measures & moves */}
            <div className="relative max-w-md mr-auto mt-4 pl-1">
              <div className="inline-flex flex-col gap-2 bg-white/[0.03] border border-white/10 rounded-2xl rounded-tl-md p-5 md:p-6 backdrop-blur-sm">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                  The answer engine recommends
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300">
                    1
                  </span>
                  <span className="text-base md:text-lg font-semibold text-white">
                    Your brand
                  </span>
                  <span className="ml-1 text-xs font-medium text-emerald-400">
                    Recommended
                  </span>
                </div>
                <div className="flex items-center gap-2.5 opacity-50">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white/60">
                    2
                  </span>
                  <span className="text-base font-medium text-white/70">
                    A competitor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
