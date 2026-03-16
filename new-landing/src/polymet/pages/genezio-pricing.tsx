import { useState } from "react";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioPricingHero } from "@/polymet/components/genezio-pricing-hero";
import { GenezioPricingComparison } from "@/polymet/components/genezio-pricing-comparison";
import { GenezioPricingFaq } from "@/polymet/components/genezio-pricing-faq";
import { GenezioAgencyPlans } from "@/polymet/components/genezio-agency-plans";
import { AgencyFaqSection } from "@/polymet/components/agency-faq-section";

const PRICING_TITLE = "Flexible plans for your AI brand visibility";
const PRICING_DESCRIPTION =
  "Explore Genezio pricing plans to boost your AI brand visibility. Monitor LLMs, track sentiment, and optimize your presence. Start your free trial.";

export function GenezioPricing() {
  const [selectedAudience, setSelectedAudience] = useState<
    "brands" | "agencies"
  >("brands");

  return (
    <>
      <PolymetSEO
        title={PRICING_TITLE}
        description={PRICING_DESCRIPTION}
        canonicalPath="/pricing/"
      />
      <div className="min-h-screen bg-[#050506]">
        <GenezioPricingHero
          selectedAudience={selectedAudience}
          onAudienceChange={setSelectedAudience}
        />
        {selectedAudience === "brands" ? (
          <>
            <GenezioPricingComparison />
            <GenezioPricingFaq />
          </>
        ) : (
          <>
            <GenezioAgencyPlans />
            <AgencyFaqSection />
          </>
        )}
      </div>
    </>
  );
}
