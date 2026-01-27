import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Genezio for Agencies | AI Visibility & GEO Solutions</title>
        <meta
          name="description"
          content="Empower your agency with Genezio's GEO platform. Monitor brand presence, optimize AI mentions, and deliver measurable results for your clients in the age of Generative AI."
        />
      </Helmet>
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
    </>
  );
}