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

export function GenezioLanding() {
  return (
    <>
      <PolymetSEO
        title="Genezio | Optimize Your AI Presence to Win Recommendations"
        description="AI market intelligence for enterprise brands. See how AI engines represent and recommend your brand, and win more AI recommendations. Get a demo."
        canonicalPath="/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Genezio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Genezio is a Generative Engine Optimization (GEO) platform that helps brands understand, monitor, and optimize how Large Language Models and AI search engines mention their brand."
              }
            },
            {
              "@type": "Question",
              "name": "How does Genezio work with AI search engines?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Genezio runs full, realistic multi-turn dialogues to evaluate how AI engines represent a brand in real-world scenarios across platforms like ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini."
              }
            }
          ]
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
      </div>
    </>
  );
}
