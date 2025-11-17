import { useState } from "react";
import { GenezioPricingHero } from "@/polymet/components/genezio-pricing-hero";

export function GenezioPricing() {
  const [selectedAudience, setSelectedAudience] = useState<
    "brands" | "agencies"
  >("brands");

  return (
    <div className="min-h-screen bg-[#050506]">
      <GenezioPricingHero
        selectedAudience={selectedAudience}
        onAudienceChange={setSelectedAudience}
      />
    </div>
  );
}
