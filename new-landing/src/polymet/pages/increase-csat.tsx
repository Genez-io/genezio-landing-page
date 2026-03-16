import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { CsatHero } from "@/polymet/components/csat-hero";
import { ConversationClassification } from "@/polymet/components/conversation-classification";
import { CsatTestimonialBanner } from "@/polymet/components/csat-testimonial-banner";
import { EscalationReduction } from "@/polymet/components/escalation-reduction";
import { AgentScoringCards } from "@/polymet/components/agent-scoring-cards";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";

export function IncreaseCsat() {
  return (
    <>
      <PolymetSEO
        title="Increase CSAT with AI Conversation Intelligence | Genezio"
        description="Improve customer satisfaction by analyzing AI and human conversations. Genezio helps you classify intent, reduce escalations, and measure agent performance across channels."
        canonicalPath="/increase-csat/"
      />
      <div className="min-h-screen bg-[#050506]">
        <CsatHero />

        <ConversationClassification />

        <CsatTestimonialBanner />

        <EscalationReduction />

        <AgentScoringCards />

        <GenezioCtaSection />
      </div>
    </>
  );
}
