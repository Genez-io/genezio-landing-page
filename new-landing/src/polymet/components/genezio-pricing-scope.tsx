import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

const LEVERS = [
  "The answer engines you track",
  "The markets and languages you cover",
  "The personas, topics and scenarios you monitor",
  "Your monthly conversation volume",
];

/**
 * Visible, machine-readable pricing answer near the top of the page, so engines
 * (and buyers) get the same correct sentence instead of guessing from €0.
 */
export function GenezioPricingScope() {
  return (
    <section className="relative bg-[#050506] py-16 md:py-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-16">
        <HeroEyebrow className="mb-6">How pricing is scoped</HeroEyebrow>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-white leading-tight mb-5">
          Custom, scoped to your footprint
        </h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
          Genezio is a custom Enterprise plan, priced around four levers: the
          answer engines you track, the markets and languages you cover, the
          personas, topics and scenarios you monitor, and your monthly
          conversation volume. Engagements typically start around{" "}
          <span className="font-semibold text-white">€20,000 a year</span> for a
          single brand in one market, and scale to{" "}
          <span className="font-semibold text-white">€100,000+</span> for large,
          multi-brand, multi-market programs. You scope the volume, and we put
          together a quote that fits.
        </p>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-white/10">
          {LEVERS.map((l) => (
            <li
              key={l}
              className="flex items-start gap-2.5 py-3.5 border-b border-white/10 text-sm md:text-base text-white/70"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-[2px] bg-emerald-400" />
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
