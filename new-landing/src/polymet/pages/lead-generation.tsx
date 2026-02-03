import { Helmet } from "react-helmet";
import { LeadGenHero } from "@/polymet/components/lead-gen-hero";
import { LeadGenDataSources } from "@/polymet/components/lead-gen-data-sources";
import { LeadGenPersonas } from "@/polymet/components/lead-gen-personas";
import { LeadGenActionableInsights } from "@/polymet/components/lead-gen-actionable-insights";
import { LeadGenIntelligence } from "@/polymet/components/lead-gen-intelligence";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";

export function LeadGeneration() {
  return (
    <>
      {import.meta.env.SSR && (
        <Helmet>
        <title>Conversational Brand Presence | Lead Generation with Genezio</title>
        <meta
          name="description"
          content="Use Genezio to understand and expand your conversational brand presence. Simulate AI conversations, analyze personas, and turn AI visibility into qualified leads."
        />
        </Helmet>
      )}
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
