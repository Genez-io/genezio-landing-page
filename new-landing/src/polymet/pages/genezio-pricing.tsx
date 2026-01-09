import { useState } from "react";
import { Helmet } from "react-helmet";
import { GenezioPricingHero } from "@/polymet/components/genezio-pricing-hero";

export function GenezioPricing() {
  const [selectedAudience, setSelectedAudience] = useState<
    "brands" | "agencies"
  >("brands");

  return (
    <>
      <Helmet>
        <title>Genezio Pricing | Plans for Brands & Agencies</title>
        <meta
          name="description"
          content="View Genezio pricing for brands and agencies. Explore plans for measuring AI visibility, optimizing conversational brand presence, and scaling GEO workflows."
        />
      </Helmet>
      <div className="min-h-screen bg-[#050506]">
        <GenezioPricingHero
          selectedAudience={selectedAudience}
          onAudienceChange={setSelectedAudience}
        />
      </div>
    </>
  );
}
