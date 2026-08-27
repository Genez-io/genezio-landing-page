import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioEnterprisePlan } from "@/polymet/components/genezio-enterprise-plan";
import { GenezioExpertServices } from "@/polymet/components/genezio-expert-services";
import { GenezioPricingProducts } from "@/polymet/components/genezio-pricing-products";
import { GenezioGroupLevelView } from "@/polymet/components/genezio-group-level-view";
import { GenezioPricingFaq, PRICING_FAQ_SCHEMA } from "@/polymet/components/genezio-pricing-faq";
import { AgencyFaqSection, AGENCY_FAQ_SCHEMA } from "@/polymet/components/agency-faq-section";
import { GenezioRoiBand } from "@/polymet/components/genezio-roi-band";
import { GenezioQuotesCarousel } from "@/polymet/components/genezio-quotes-carousel";

const BRAND_PRICING_TITLE = "Enterprise Pricing for AI Brand Visibility | Genezio";
const BRAND_PRICING_DESCRIPTION =
  "Genezio Enterprise pricing is scoped to the engines, markets and volume you need, with optional AI-SEO and GEO experts. Book a demo for a quote.";

const AGENCY_PRICING_TITLE = "Enterprise Pricing for Agencies | AI Brand Visibility | Genezio";
const AGENCY_PRICING_DESCRIPTION =
  "Custom Enterprise pricing for agencies scaling GEO services across multiple clients. Manage every brand from one workspace with white-label reporting.";

// Combine all FAQ items for complete schema coverage in static HTML
const ALL_PRICING_FAQS = [
  ...PRICING_FAQ_SCHEMA,
  ...AGENCY_FAQ_SCHEMA,
];

export function GenezioPricing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isAgencyView = searchParams.get("view") === "agency";
  const selectedAudience: "brands" | "agencies" = isAgencyView ? "agencies" : "brands";

  useEffect(() => {
    if (isAgencyView) {
      document.documentElement.classList.add("pricing-view-agency");
    } else {
      document.documentElement.classList.remove("pricing-view-agency");
    }
    return () => {
      document.documentElement.classList.remove("pricing-view-agency");
    };
  }, [isAgencyView]);

  const handleVariantChange = (variant: "brands" | "agencies") => {
    if (variant === "agencies") {
      document.documentElement.classList.add("pricing-view-agency");
      setSearchParams({ view: "agency" }, { replace: true });
    } else {
      document.documentElement.classList.remove("pricing-view-agency");
      setSearchParams({}, { replace: true });
    }
  };

  const title = isAgencyView ? AGENCY_PRICING_TITLE : BRAND_PRICING_TITLE;
  const description = isAgencyView ? AGENCY_PRICING_DESCRIPTION : BRAND_PRICING_DESCRIPTION;
  const canonicalPath = isAgencyView ? "/pricing/?view=agency" : "/pricing/";

  return (
    <>
      <PolymetSEO
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": ALL_PRICING_FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        {/* Single hero plan component with internal dual-panel SSR */}
        <GenezioEnterprisePlan
          variant={selectedAudience}
          onVariantChange={handleVariantChange}
          isPageHero
        />

        {/* Shared sections */}
        <GenezioRoiBand />
        <GenezioExpertServices />
        <GenezioPricingProducts />
        <GenezioGroupLevelView />
        <GenezioTestimonialSection />

        {/* Render both FAQ variants with data-pricing-faq attributes */}
        <div data-pricing-faq="brands">
          <GenezioPricingFaq />
        </div>
        <div data-pricing-faq="agencies">
          <AgencyFaqSection />
        </div>
      </div>
    </>
  );
}
