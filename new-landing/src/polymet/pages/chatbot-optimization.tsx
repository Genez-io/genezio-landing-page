import { ChatbotOptimizationHeroSection } from "@/polymet/components/chatbot-optimization-hero-section";
import { KeyFeaturesSection } from "@/polymet/components/key-features-section";
import { HowGenezioWorksSection } from "@/polymet/components/how-genezio-works-section";
import { BrandSafetySection } from "@/polymet/components/brand-safety-section";
import { ChatbotOptimizationPricingSection } from "@/polymet/components/chatbot-optimization-pricing-section";
import { RoiFinalCtaSectionChatbotOptimization } from "../components/roi-final-cta-section-chatbot-optimization";

export default function ChatbotOptimization() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ChatbotOptimizationHeroSection />

      {/* Key Features */}
      <KeyFeaturesSection />

      {/* How Genezio Works */}
      <HowGenezioWorksSection />

      {/* Brand Safety & Compliance */}
      <BrandSafetySection />

      {/* Chatbot Optimization Pricing */}
      <ChatbotOptimizationPricingSection />

      {/* Final CTA */}
      <RoiFinalCtaSectionChatbotOptimization />
    </div>
  );
}
