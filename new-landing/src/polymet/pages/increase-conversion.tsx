import { ConversionHero } from "@/polymet/components/conversion-hero";
import { ConversionProcess } from "@/polymet/components/conversion-process";
import { ConversationAnalysis } from "@/polymet/components/conversation-analysis";
import { ConversionTestimonials } from "@/polymet/components/conversion-testimonials";
import { CrossAnalysis } from "@/polymet/components/cross-analysis";
import { MultiTurnTesting } from "@/polymet/components/multi-turn-testing";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";

export function IncreaseConversion() {
  return (
    <div className="min-h-screen bg-[#050506]">
      <ConversionHero />

      <ConversionProcess />

      <ConversationAnalysis />

      <ConversionTestimonials />

      <CrossAnalysis />

      <MultiTurnTesting />

      <GenezioCtaSection />
    </div>
  );
}
