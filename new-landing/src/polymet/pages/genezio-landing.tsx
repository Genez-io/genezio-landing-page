import { GenezioHeroSection } from "@/polymet/components/genezio-hero-section";
import { GenezioTrustSection } from "@/polymet/components/genezio-trust-section";
import { GenezioDashboardSection } from "@/polymet/components/genezio-dashboard-section";
import { GenezioDifferentiatorsSection } from "@/polymet/components/genezio-differentiators-section";
import { GenezioBrandedQuestionsSection } from "@/polymet/components/genezio-branded-questions-section";
import { GenezioInsightsSection } from "@/polymet/components/genezio-insights-section";
import { GenezioEnterpriseSection } from "@/polymet/components/genezio-enterprise-section";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";

export function GenezioLanding() {
  return (
    <div className="min-h-screen bg-[#050506]">
      <GenezioHeroSection />

      <GenezioTrustSection />

      <GenezioDashboardSection />

      <GenezioDifferentiatorsSection />

      <GenezioBrandedQuestionsSection />

      <GenezioInsightsSection />

      <GenezioEnterpriseSection />

      <GenezioCtaSection />
    </div>
  );
}
