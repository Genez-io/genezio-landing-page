import { GenezioHeroSection } from "@/polymet/v2/components/genezio-hero-section";
import { GenezioProblemsSection } from "@/polymet/v2/components/genezio-problem-section";
import { GenezioSocialProofSection } from "@/polymet/v2/components/genezio-social-proof-section";
import { GenezioFeaturesSection } from "@/polymet/v2/components/genezio-features-section";
import { GenezioPricingCtaSection } from "@/polymet/v2/components/genezio-pricing-cta-section";
import { GenezioFaqSection } from "@/polymet/v2/components/genezio-faq-section";
import { GenezioFooterCtaSection } from "@/polymet/v2/components/genezio-footer-cta-section";

export function GenezioLandingV2() {
  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto">
        <GenezioHeroSection />
        <GenezioProblemsSection />
        <GenezioSocialProofSection />
        <GenezioFeaturesSection />
        <GenezioPricingCtaSection />
        <GenezioFaqSection />
        <GenezioFooterCtaSection />
      </div>
    </div>
  );
}

