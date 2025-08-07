import React from "react";
import { RoiHeroSection } from "@/polymet/components/roi-hero-section";
import { ValuePropositionSection } from "@/polymet/components/value-proposition-section";
import { ContinuousTestingSection } from "@/polymet/components/continuous-testing-section";
import { ResultsTestimonialsSection } from "@/polymet/components/results-testimonials-section";
import { ChallengeSelectorSection } from "@/polymet/components/challenge-selector-section";
import { ChatbotOptimizationPricingSection } from "@/polymet/components/chatbot-optimization-pricing-section";
import { RoiSimpleFinalCtaSection } from "@/polymet/components/roi-simple-final-cta-section";
import { GartnerResearchBanner } from "@/polymet/components/gartner-research-banner";

export default function RoiLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <RoiHeroSection />

      {/* Challenge Selector */}
      <ChallengeSelectorSection />

      {/* Value Proposition - 3 Pillars */}
      <ValuePropositionSection />

      {/* Gartner Research Banner */}
      <GartnerResearchBanner />

      {/* Continuous Testing Section */}
      <ContinuousTestingSection />

      {/* Results & Testimonials */}
      <ResultsTestimonialsSection />

      {/* Chatbot Optimization Pricing */}
      <div id="chatbot-optimization-pricing-section">
        <ChatbotOptimizationPricingSection />
      </div>

      {/* Final CTA */}
      <RoiSimpleFinalCtaSection />
    </div>
  );
}
