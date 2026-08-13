import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioHeroSection } from "@/polymet/components/genezio-hero-section";
import { GenezioTrustSection } from "@/polymet/components/genezio-trust-section";
import { GenezioEnterpriseTrustBand } from "@/polymet/components/genezio-enterprise-trust-band";
import { GenezioAiTrafficSection } from "@/polymet/components/genezio-ai-traffic-section";
import { GenezioProductPillarsSection } from "@/polymet/components/genezio-product-pillars-section";
import { GenezioFlywheelSection } from "@/polymet/components/genezio-flywheel-section";
import { GenezioProofSection } from "@/polymet/components/genezio-proof-section";
import { GenezioHomeComparison } from "@/polymet/components/genezio-home-comparison";
import { GenezioHomeFaq, HOME_FAQS } from "@/polymet/components/genezio-home-faq";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";

export function GenezioLanding() {
  return (
    <>
      <PolymetSEO
        title="Genezio | Get Your Brand Recommended by AI"
        description="Genezio is the enterprise AI visibility platform. See how ChatGPT, Gemini, Perplexity and Google AI Overviews represent your brand across every market, then win more recommendations. Book a demo."
        canonicalPath="/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        {/* Hero: H1 question + answer, subheadline, answer block, byline, CTA */}
        <GenezioHeroSection />

        {/* Social proof + enterprise credibility */}
        <GenezioTrustSection />
        <GenezioEnterpriseTrustBand />

        {/* Problem, in the buyer's words, and what it costs */}
        <GenezioAiTrafficSection />

        {/* Solution: the value we bring, with links to each product */}
        <GenezioProductPillarsSection />
        <GenezioFlywheelSection />

        {/* Proof: outcomes + our own original data */}
        <GenezioProofSection />

        {/* Comparison table */}
        <GenezioHomeComparison />

        {/* FAQ (matches the FAQ schema above) */}
        <GenezioHomeFaq />

        {/* Pricing CTA */}
        <GenezioCtaSection />
      </div>
    </>
  );
}
