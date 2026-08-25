import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioHeroSection } from "@/polymet/components/genezio-hero-section";
import { GenezioTrustSection } from "@/polymet/components/genezio-trust-section";
import { GenezioEnterpriseSection } from "@/polymet/components/genezio-enterprise-section";
import { GenezioTestimonialSection } from "../components/genezio-testimonial-section";
import { GenezioAiTrafficSection } from "@/polymet/components/genezio-ai-traffic-section";
import { GenezioPerceptionSection } from "@/polymet/components/genezio-perception-section";
import { GenezioProductPillarsSection } from "@/polymet/components/genezio-product-pillars-section";
import { GenezioRobotReaderSection } from "@/polymet/components/genezio-robot-reader-section";
import { GenezioBusinessGoalsSection } from "@/polymet/components/genezio-flywheel-section";
import { GenezioEnterpriseTrustBand } from "@/polymet/components/genezio-enterprise-trust-band";
import { GenezioCommercialIntentBand } from "@/polymet/components/genezio-commercial-intent-band";
import { GenezioProofSection } from "@/polymet/components/genezio-proof-section";
import { GenezioClosingSection } from "@/polymet/components/genezio-closing-section";
import { GenezioHomeFaq, HOME_FAQ_SCHEMA } from "@/polymet/components/genezio-home-faq";

export function GenezioLanding() {
  return (
    <>
      <PolymetSEO
        title="Genezio | Enterprise AI Visibility Platform"
        description="AI market intelligence for enterprise brands. See how AI engines represent and recommend your brand, and win more AI recommendations. Get a demo."
        canonicalPath="/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": HOME_FAQ_SCHEMA.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <GenezioHeroSection />

        <GenezioCommercialIntentBand />

        <GenezioTrustSection />
        <GenezioEnterpriseTrustBand />

        {/* Why it matters → the blackout → proof → the product → how you win */}
        <GenezioPerceptionSection />
        <GenezioRobotReaderSection />
        <GenezioAiTrafficSection />
        <GenezioProductPillarsSection />
        <GenezioBusinessGoalsSection />

        {/* Proof, real client findings anonymized */}
        <GenezioProofSection />

        {/* Social proof */}
        <GenezioTestimonialSection />

        {/* Enterprise readiness */}
        <GenezioEnterpriseSection />

        {/* FAQ Section */}
        <GenezioHomeFaq />

        {/* Closing bookend */}
        <GenezioClosingSection />
      </div>
    </>
  );
}
