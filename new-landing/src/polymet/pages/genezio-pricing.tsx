import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { GenezioPricingHero } from "@/polymet/components/genezio-pricing-hero";
import { GenezioPricingComparison } from "@/polymet/components/genezio-pricing-comparison";
import { GenezioPricingFaq } from "@/polymet/components/genezio-pricing-faq";
import { GenezioAgencyPlans } from "@/polymet/components/genezio-agency-plans";
import { AgencyFaqSection } from "@/polymet/components/agency-faq-section";

const PRICING_TITLE = "Flexible plans for your AI brand visibility";
const PRICING_DESCRIPTION =
  "Explore Genezio pricing plans to boost your AI brand visibility. Monitor LLMs, track sentiment, and optimize your presence. Start your free trial.";

function setMeta(attr: "name" | "property", key: string, content: string) {
  const el =
    document.querySelector(`meta[${attr}="${key}"]`) ||
    document.createElement("meta");
  el.setAttribute(attr, key);
  el.setAttribute("content", content);
  if (!el.parentNode) document.head.appendChild(el);
}

export function GenezioPricing() {
  const [selectedAudience, setSelectedAudience] = useState<
    "brands" | "agencies"
  >("brands");

  useEffect(() => {
    document.title = PRICING_TITLE;
    setMeta("name", "description", PRICING_DESCRIPTION);
    setMeta("property", "og:title", PRICING_TITLE);
    setMeta("property", "og:description", PRICING_DESCRIPTION);
    setMeta("name", "twitter:title", PRICING_TITLE);
    setMeta("name", "twitter:description", PRICING_DESCRIPTION);
  }, []);

  return (
    <>
      <Helmet>
        <title>{PRICING_TITLE}</title>
        <meta name="description" content={PRICING_DESCRIPTION} />
        <meta property="og:title" content={PRICING_TITLE} />
        <meta property="og:description" content={PRICING_DESCRIPTION} />
        <meta name="twitter:title" content={PRICING_TITLE} />
        <meta name="twitter:description" content={PRICING_DESCRIPTION} />
      </Helmet>
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
