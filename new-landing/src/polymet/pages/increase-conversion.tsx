import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { ConversionHero } from "@/polymet/components/conversion-hero";
import { BtTestimonialSection } from "@/polymet/components/bt-testimonial-section";
import { ConversionProcess } from "@/polymet/components/conversion-process";
import { ConversationAnalysis } from "@/polymet/components/conversation-analysis";
import { ConversionTestimonials } from "@/polymet/components/conversion-testimonials";
import { CrossAnalysis } from "@/polymet/components/cross-analysis";
import { MultiTurnTesting } from "@/polymet/components/multi-turn-testing";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";

export function IncreaseConversion() {
  return (
    <>
      <PolymetSEO
        title="Increase Conversion from AI Conversations | Genezio"
        description="Turn AI-powered conversations into revenue. Genezio analyzes multi-turn chats, surfaces drop-off points, and helps you optimize conversational funnels."
        canonicalPath="/increase-conversion/"
      />
      <div className="min-h-screen bg-[#050506]">
        <ConversionHero />

        <BtTestimonialSection />

        <ConversionProcess />

        <ConversationAnalysis />

        <ConversionTestimonials />

        <CrossAnalysis />

        <MultiTurnTesting />

        <GenezioCtaSection />
      </div>
    </>
  );
}
