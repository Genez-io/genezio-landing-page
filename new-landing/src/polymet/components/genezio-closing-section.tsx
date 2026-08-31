import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

const DEMO_URL =
  "/contact-sales";
const REPORT_URL =
  "https://app.genezio.ai/brand-report/49/Natwest?demo=account";

/**
 * Closing bookend for the homepage: restates the hero thesis, resolves it into
 * the primary CTA, and carries the single strongest first-party proof number.
 */
export function GenezioClosingSection() {
  return (
    <section className="relative py-28 md:py-40 bg-[#050506] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        {/* Strongest single proof, first-party */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-10 text-sm md:text-base text-white/55">
          <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 leading-none">
            37%
          </span>
          <span>
            of one customer's new signups already arrive recommended by answer
            engines.
          </span>
        </div>

        {/* Thesis bookend */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
          <span className="block text-white">The world stopped searching.</span>
          <span className="block text-white">It started asking.</span>
          <span className="block text-emerald-400 mt-2">
            Make sure the answer is you.
          </span>
        </h2>

        <p className="mt-7 text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
          See how AI engines represent your brand in every market, and win the
          recommendation, not just the mention.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
            >
              Get a demo
            </Button>
          </a>
          <a
            href={REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-zinc-300 hover:text-white transition-colors duration-200 text-base font-medium group"
          >
            Explore a live brand report
            <ArrowUpRightIcon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
