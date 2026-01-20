import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

interface GenezioPricingHeroProps {
  selectedAudience: "brands" | "agencies";
  onAudienceChange: (audience: "brands" | "agencies") => void;
}

export function GenezioPricingHero({
  selectedAudience,
  onAudienceChange,
}: GenezioPricingHeroProps) {
  const brandPlans = [
    {
      name: "Starter",
      price: "€199",
      description: "For teams exploring AI brand visibility",
      features: [
        "2 AI models monitored",
        "50 scenarios per model",
        "Daily AI visibility insights",
        "Data retention: 1 month",
      ],

      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "€299",
      description: "For marketing teams optimizing AI presence",
      features: [
        "4 AI models monitored",
        "50 scenarios per model",
        "Multi-turn conversations",
        "Daily AI visibility insights",
        "AI content generation: 5 / day",
        "Data retention: 6 months",
      ],

      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For multi-market brands",
      features: [
        "10 AI models monitored",
        "Custom AI conversations tracked",
        "Daily AI visibility insights",
        "AI content generation custom",
        "Unlimited data retention",
        "Dedicated onboarding & Account Manager",
        "Dedicated Slack support",
        "SSO / SAML + SOC2 compliance",
      ],

      cta: "Contact us",
      popular: false,
    },
  ];

  const agencyPlan = {
    name: "Agency Partner",
    price: "Custom",
    description: "For agencies managing multiple client brands",
    features: [
      "Unlimited brands monitored",
      "All AI models included",
      "Unlimited AI conversations tracked",
      "Multi-turn conversations",
      "White-label reporting",
      "Client dashboard access",
      "Priority support & training",
      "Dedicated account manager",
      "Custom integrations",
      "Revenue sharing opportunities",
    ],
    cta: "Contact us",
  };

  const plans = selectedAudience === "brands" ? brandPlans : [agencyPlan];

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden bg-[#0A0A0B]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-purple-600/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 mt-8 md:mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Flexible plans for your brand journey
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
            Start with a free trial and scale as your AI visibility growa.
          </p>
        </div>

        {/* Audience Toggle */}
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="inline-flex bg-white/5 rounded-lg p-1 border border-white/10">
            <button
              onClick={() => onAudienceChange("brands")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-md text-xs md:text-sm font-medium transition-all ${
                selectedAudience === "brands"
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => onAudienceChange("agencies")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-md text-xs md:text-sm font-medium transition-all ${
                selectedAudience === "agencies"
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              For Agencies
            </button>
          </div>
        </div>

        {/* Pricing Cards and Form Layout */}
        <div className="space-y-8 md:space-y-12 max-w-7xl mx-auto">
          {/* Pricing Cards Grid */}
          <div className={`grid gap-6 lg:gap-8 ${
            selectedAudience === "brands"
              ? "md:grid-cols-3"
              : "md:grid-cols-1 max-w-2xl mx-auto"
          }`}>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 border rounded-2xl p-6 md:p-8 flex flex-col ${
                  plan.popular
                    ? "border-blue-500/50 shadow-lg shadow-blue-500/10"
                    : "border-white/10"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      Most popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-white/60 text-sm">/month</span>
                    )}
                  </div>
                  <p className="text-sm text-white/60">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIcon className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 text-base font-semibold rounded-lg transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/20"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/20"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
