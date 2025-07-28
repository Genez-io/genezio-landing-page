"use client";

import React from "react";
import { RoiHeroSection } from "./(components)/roi-section-hero";
import { RevenueSection } from "./(components)/revenue-section";
import { CostReductionSection } from "./(components)/cost-reduction-section";
import { RiskManagementSection } from "./(components)/risk-management-section";
import { ServiceDeliverySection } from "./(components)/service-delivery-section";

import { RoiCardsSection } from "./(components)/roi-card-section";

import { CtaSection } from "./(components)/cta-section";
import { NoChatbotSection } from "./(components)/no-chatbot-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <RoiHeroSection />
      <RoiCardsSection />
      <RevenueSection />
      <CostReductionSection />
      <RiskManagementSection />
      <ServiceDeliverySection />
      <NoChatbotSection />
      <CtaSection />
    </div>
  );
}
