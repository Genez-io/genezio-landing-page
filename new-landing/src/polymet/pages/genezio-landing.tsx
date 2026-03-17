import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioHeroSection } from "@/polymet/components/genezio-hero-section";
import { GenezioTrustSection } from "@/polymet/components/genezio-trust-section";
import { GenezioDashboardSection } from "@/polymet/components/genezio-dashboard-section";
import { GenezioDifferentiatorsSection } from "@/polymet/components/genezio-differentiators-section";
import { GenezioBrandedQuestionsSection } from "@/polymet/components/genezio-branded-questions-section";
import { GenezioInsightsSection } from "@/polymet/components/genezio-insights-section";
import { GenezioEnterpriseSection } from "@/polymet/components/genezio-enterprise-section";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import { GenezioTestimonialSection } from "../components/genezio-testimonial-section";
import { IndustryLeaderboardBanner } from "@/polymet/components/industry-leaderboard-banner";
import { GenezioAiTrafficSection } from "@/polymet/components/genezio-ai-traffic-section";

export function GenezioLanding() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://genezio.com/#organization",
        "name": "Genezio",
        "url": "https://genezio.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://genezio.com/images/logo-dark.svg"
        },
        "description": "Genezio is a Generative Engine Optimization (GEO) platform that helps brands understand, monitor, and optimize how AI engines mention and recommend them.",
        "sameAs": [
          "https://www.linkedin.com/company/genezioai",
          "https://x.com/genaboroiba"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://genezio.com/#website",
        "url": "https://genezio.com",
        "name": "Genezio",
        "publisher": { "@id": "https://genezio.com/#organization" }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Genezio",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://genezio.com",
        "description": "Discover how AI engines see your brand. Optimize your presence to win more AI recommendations.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free 7-day trial, no credit card required"
        },
        "provider": { "@id": "https://genezio.com/#organization" }
      }
    ]
  };

  return (
    <>
      <PolymetSEO
        title="Genezio | Optimize Your AI Presence to Win Recommendations"
        description="Discover how AI engines see your brand. Optimize your presence to win more AI recommendations. Start your free 7-day trial today, no credit card required!"
        canonicalPath="/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={homepageSchema}
      />
      <div className="min-h-screen bg-[#050506]">
        <IndustryLeaderboardBanner />

        <GenezioHeroSection />

        <GenezioTrustSection />
        <GenezioTestimonialSection />
        <GenezioAiTrafficSection />
        <GenezioDashboardSection />

        <GenezioDifferentiatorsSection />

        <GenezioBrandedQuestionsSection />

        <GenezioInsightsSection />

        <GenezioEnterpriseSection />

        <GenezioCtaSection />
      </div>
    </>
  );
}
