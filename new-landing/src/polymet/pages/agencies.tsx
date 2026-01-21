import { AgencyHeroSection } from "../components/agency-hero-section";
import { AgencyBrandScanSection } from "../components/agency-brand-scan-section";
import { AgencyGeoSection } from "../components/agency-geo-section";
import { AgencyContentStrategySection } from "../components/agency-content-strategy-section";
import { AgencyScaleSection } from "../components/agency-scale-section";
import { AgencyMonitoringSection } from "../components/agency-monitoring-section";
import { AgencyTestimonialsSection } from "../components/agency-testimonials-section";
import { GenezioAgencyPlans } from "../components/genezio-agency-plans";
import { AgencyCtaSection } from "../components/agency-cta-section";

export function Agencies() {
  return (
    <div className="min-h-screen bg-[#050506]">
      <AgencyHeroSection />
      <AgencyBrandScanSection />
      <AgencyGeoSection />
      <AgencyContentStrategySection />
      <AgencyScaleSection />
      <AgencyMonitoringSection />
      <AgencyTestimonialsSection />
      <GenezioAgencyPlans />
      <AgencyCtaSection />
    </div>
  );
}