import React from "react";
import { BrandPresenceHeroSection } from "@/polymet/components/brand-presence-hero-section";
import { BrandPresenceProblemSection } from "@/polymet/components/brand-presence-problem-section";
import { BrandPresenceBenefitsSection } from "@/polymet/components/brand-presence-benefits-section";
import { BrandPresenceProcessSection } from "@/polymet/components/brand-presence-process-section";
import { BrandPresenceCompetitiveSection } from "@/polymet/components/brand-presence-competitive-section";
import { BrandPresenceDifferentiatorSection } from "@/polymet/components/brand-presence-differentiator-section";
import { BrandPresenceCaseStudySection } from "@/polymet/components/brand-presence-case-study-section";
import { BrandPresencePricingSection } from "@/polymet/components/brand-presence-pricing-section";
import { RoiFinalCtaSection } from "@/polymet/components/roi-final-cta-section";

export default function BrandPresence() {
  document.title = "AI Search Optimization: Control Your Brand in ChatGPT | Genezio";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Control your brand's presence in AI search results. Genezio helps you outrank competitors, and drive high-intent traffic from LLMs. Book a free demo now!"
    );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
      <BrandPresenceHeroSection />

      {/* Problem Definition Section */}
      <BrandPresenceProblemSection />

      {/* Benefits Section */}
      <BrandPresenceBenefitsSection />

      {/* How It Works Process */}
      <BrandPresenceProcessSection />

      {/* Competitive Advantage */}
      <BrandPresenceCompetitiveSection />

      {/* Differentiator Stack */}
      <BrandPresenceDifferentiatorSection />

      {/* Case Study */}
      <BrandPresenceCaseStudySection />

      {/* Brand Presence Pricing */}
      <BrandPresencePricingSection />

      {/* Final CTA */}
      <RoiFinalCtaSection />
    </div>
  );
}
