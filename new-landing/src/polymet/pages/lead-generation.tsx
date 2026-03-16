import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { LeadGenHero } from "@/polymet/components/lead-gen-hero";
import { LeadGenDataSources } from "@/polymet/components/lead-gen-data-sources";
import { LeadGenPersonas } from "@/polymet/components/lead-gen-personas";
import { LeadGenActionableInsights } from "@/polymet/components/lead-gen-actionable-insights";
import { LeadGenIntelligence } from "@/polymet/components/lead-gen-intelligence";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";

export function LeadGeneration() {
  return (
    <>
      <PolymetSEO
        title="Turn AI Conversations Into Qualified Leads | Genezio"
        description="Monitor & optimize your brand's AI presence. Turn AI conversations into qualified leads with Genezio's actionable insights. Book a demo today!"
        canonicalPath="/conversational-brand-presence/"
      />
      <div className="min-h-screen bg-[#050506]">
        <LeadGenHero />

        <LeadGenDataSources />

        <LeadGenPersonas />

        <LeadGenActionableInsights />

        <LeadGenIntelligence />

        <GenezioCtaSection />
      </div>
    </>
  );
}
