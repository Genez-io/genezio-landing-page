import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const SOURCE_URL =
  "https://adage.com/events-awards/cannes-lions/aa-openai-chatgpt-ads-business-david-dugan/";

/**
 * Context band: the number that opens the argument. Not our number, which is
 * exactly why it lands. OpenAI's own figure, stated at Cannes Lions 2026.
 */
export function GenezioCommercialIntentBand() {
  return (
    <section className="relative bg-[#0E0E10] py-16 md:py-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          {/* The figure */}
          <div className="flex-shrink-0 text-center md:text-left">
            <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-emerald-400 leading-none tracking-[-0.03em]">
              ~20%
            </div>
          </div>

          {/* The claim */}
          <div className="md:border-l md:border-white/10 md:pl-12">
            <HeroEyebrow className="mb-4 w-fit mx-auto md:mx-0">
              The context
            </HeroEyebrow>
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-snug font-medium text-center md:text-left">
              of queries into ChatGPT carry direct commercial intent. Not
              research, not curiosity, someone deciding what to buy.
            </p>
            <p className="mt-3 text-sm md:text-base text-white/50 leading-relaxed text-center md:text-left">
              Everything that matters commercially happens inside that fifth,
              and it is OpenAI's own number.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs font-mono uppercase tracking-[0.1em] text-white/40 hover:text-emerald-400 transition-colors underline decoration-white/15 underline-offset-2"
            >
              OpenAI · David Dugan · Cannes Lions 2026
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
