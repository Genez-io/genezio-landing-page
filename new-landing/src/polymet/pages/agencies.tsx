import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { AgencyHeroSection } from "@/polymet/components/agency-hero-section";
import { AgencyBrandScanSection } from "@/polymet/components/agency-brand-scan-section";
import { AgencyGeoSection } from "@/polymet/components/agency-geo-section";
import { AgencyContentStrategySection } from "@/polymet/components/agency-content-strategy-section";
import { AgencyScaleSection } from "@/polymet/components/agency-scale-section";
import { AgencyMonitoringSection } from "@/polymet/components/agency-monitoring-section";
import { AgencyTestimonialsSection } from "@/polymet/components/agency-testimonials-section";
import { GenezioEnterprisePlan } from "@/polymet/components/genezio-enterprise-plan";
import { AgencyCtaSection } from "@/polymet/components/agency-cta-section";

export function Agencies() {
  return (
    <>
      <PolymetSEO
        title="Genezio for Agencies | AI Visibility & GEO Solutions"
        description="Empower your agency with Genezio's GEO platform. Monitor brand presence, improve AI recommendations, and deliver results for clients in the age of Gen AI"
        canonicalPath="/agencies/"
      />
      <div className="min-h-screen bg-[#050506]">
        <AgencyHeroSection />
        <AgencyBrandScanSection />
        <AgencyGeoSection />
        <AgencyContentStrategySection />
        <AgencyScaleSection />
        <AgencyMonitoringSection />
        <AgencyTestimonialsSection />
        <GenezioEnterprisePlan variant="agencies" />
        <AgencyCtaSection />
      </div>
    </>
  );
}