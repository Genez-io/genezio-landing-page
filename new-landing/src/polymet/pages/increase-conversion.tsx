import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { ConversionHero } from "@/polymet/components/conversion-hero";
import { BtTestimonialSection } from "@/polymet/components/bt-testimonial-section";
import { ConversionProcess } from "@/polymet/components/conversion-process";
import { ConversationAnalysis } from "@/polymet/components/conversation-analysis";
import { ConversionTestimonials } from "@/polymet/components/conversion-testimonials";
import { MultiTurnTesting } from "@/polymet/components/multi-turn-testing";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";

export function IncreaseConversion() {
  return (
    <>
      <PolymetSEO
        title="AI Agent Analytics | Genezio"
        description="Analyze the real conversations your AI agent has with customers. Genezio classifies intent, surfaces drop-off points, and tests improvements before deployment."
        canonicalPath="/ai-agent-analytics/"
      />
      <div className="min-h-screen bg-[#050506]">
        <ConversionHero />

        <BtTestimonialSection />

        <ConversionProcess />

        <ConversationAnalysis />

        <ConversionTestimonials />

        <MultiTurnTesting />

        <GenezioCtaSection />
      </div>
    </>
  );
}
