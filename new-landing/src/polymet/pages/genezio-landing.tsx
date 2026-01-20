import { Helmet } from "react-helmet";
import { GenezioHeroSection } from "@/polymet/components/genezio-hero-section";
import { GenezioTrustSection } from "@/polymet/components/genezio-trust-section";
import { GenezioDashboardSection } from "@/polymet/components/genezio-dashboard-section";
import { GenezioDifferentiatorsSection } from "@/polymet/components/genezio-differentiators-section";
import { GenezioBrandedQuestionsSection } from "@/polymet/components/genezio-branded-questions-section";
import { GenezioInsightsSection } from "@/polymet/components/genezio-insights-section";
import { GenezioEnterpriseSection } from "@/polymet/components/genezio-enterprise-section";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import { GenezioTestimonialSection } from "../components/genezio-testimonial-section";

export function GenezioLanding() {
  return (
    <>
      <Helmet>
        <title>Genezio | Make ChatGPT talk about your brand</title>
        <meta
          name="description"
          content="Genezio is a Generative Engine Optimization (GEO) platform that helps brands understand, monitor, and optimize how AI mentions them across ChatGPT, Perplexity, Gemini, and more."
        />
      </Helmet>
      <div className="min-h-screen bg-[#050506]">
        <GenezioHeroSection />

        <GenezioTrustSection />
        <GenezioTestimonialSection />

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
