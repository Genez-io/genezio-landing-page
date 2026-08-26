import { useState } from "react";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioEnterprisePlan } from "@/polymet/components/genezio-enterprise-plan";
import { GenezioExpertServices } from "@/polymet/components/genezio-expert-services";
import { GenezioPricingProducts } from "@/polymet/components/genezio-pricing-products";
import { GenezioGroupLevelView } from "@/polymet/components/genezio-group-level-view";
import { GenezioPricingFaq, PRICING_FAQ_SCHEMA } from "@/polymet/components/genezio-pricing-faq";
import { AgencyFaqSection, AGENCY_FAQ_SCHEMA } from "@/polymet/components/agency-faq-section";
import { GenezioRoiBand } from "@/polymet/components/genezio-roi-band";
import { GenezioQuotesCarousel } from "@/polymet/components/genezio-quotes-carousel";

const PRICING_TITLE = "Enterprise Pricing for AI Brand Visibility | Genezio";
const PRICING_DESCRIPTION =
  "Genezio Enterprise pricing is scoped to the engines, markets and volume you need, with optional AI-SEO and GEO experts. Book a demo for a quote.";

export function GenezioPricing() {
  const [selectedAudience, setSelectedAudience] = useState<
    "brands" | "agencies"
  >("brands");

  const faqSource =
    selectedAudience === "agencies" ? AGENCY_FAQ_SCHEMA : PRICING_FAQ_SCHEMA;

  return (
    <>
      <PolymetSEO
        title={PRICING_TITLE}
        description={PRICING_DESCRIPTION}
        canonicalPath="/pricing/"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqSource.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        {selectedAudience === "brands" ? (
          <>
            <GenezioEnterprisePlan
              variant="brands"
              onVariantChange={setSelectedAudience}
              isPageHero
            />
            <GenezioRoiBand />
            <GenezioExpertServices />
            <GenezioPricingProducts />
            <GenezioGroupLevelView />
            <GenezioQuotesCarousel />
            <GenezioPricingFaq />
          </>
        ) : (
          <>
            <GenezioEnterprisePlan
              variant="agencies"
              onVariantChange={setSelectedAudience}
              isPageHero
            />
            <GenezioRoiBand />
            <GenezioExpertServices />
            <GenezioPricingProducts />
            <GenezioGroupLevelView />
            <GenezioQuotesCarousel />
            <AgencyFaqSection />
          </>
        )}
      </div>
    </>
  );
}
