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
  return (
    <>
      <PolymetSEO
        title="Genezio | Make AI Scream Your Name From the Rooftops 🚀"
        description="Discover how AI engines see your brand. Optimize your presence to win more AI recommendations. Start your free 7-day trial today, no credit card required!"
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
