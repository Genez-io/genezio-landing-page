import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";

export function GenezioBrandPlans() {
  const features = [
    { name: "Price", professional: "$499/month", enterprise: "Custom" },
    {
      name: "LLM Platforms",
      professional: "ChatGPT, Perplexity, Google AI Overviews",
      enterprise: "All platforms + more",
    },
    { name: "Scenarios", professional: "20", enterprise: "Unlimited" },
    { name: "Monthly Runs", professional: "2,000", enterprise: "Unlimited" },
    {
      name: "Daily Runs per Scenario",
      professional: "3",
      enterprise: "Unlimited",
    },
    { name: "Prompt Frequency", professional: "Daily", enterprise: "Custom" },
    { name: "Regions", professional: "1", enterprise: "Multiple" },
    { name: "Domains", professional: "Unlimited", enterprise: "Unlimited" },
    { name: "Integrations", professional: true, enterprise: true },
    {
      name: "Prompt Volumes - Searches",
      professional: false,
      enterprise: true,
    },
    { name: "Content Generation", professional: false, enterprise: true },
    { name: "History", professional: true, enterprise: true },
    { name: "Exports", professional: false, enterprise: true },
    { name: "Seats", professional: "10", enterprise: "Unlimited" },
    { name: "Personas", professional: "2", enterprise: "Unlimited" },
    { name: "SSO", professional: false, enterprise: true },
    { name: "Confidence Range", professional: true, enterprise: true },
  ];

  return (
    <section className="py-20 px-6 bg-[#0E0E10]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plans for Brands
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Monitor and optimize your brand's presence across AI platforms
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Professional Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <div className="mb-8">
              <div className="text-sm text-blue-400 font-semibold mb-2">
                PROFESSIONAL
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">$499</span>
                <span className="text-white/60">/month</span>
              </div>
              <p className="text-white/60">
                Perfect for growing brands looking to monitor and optimize their
                AI presence
              </p>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-medium">
              Get Started
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-2 border-blue-500/50 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full">
              MOST POPULAR
            </div>
            <div className="mb-8">
              <div className="text-sm text-blue-400 font-semibold mb-2">
                ENTERPRISE
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <p className="text-white/60">
                Advanced features and unlimited resources for enterprise-scale
                brands
              </p>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-base font-medium">
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white font-semibold">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 text-white font-semibold">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 text-white font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6 text-white/80">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.professional === "boolean" ? (
                        feature.professional ? (
                          <CheckIcon className="w-5 h-5 text-blue-500 mx-auto" />
                        ) : (
                          <XIcon className="w-5 h-5 text-white/20 mx-auto" />
                        )
                      ) : (
                        <span className="text-white/80">
                          {feature.professional}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <CheckIcon className="w-5 h-5 text-purple-500 mx-auto" />
                        ) : (
                          <XIcon className="w-5 h-5 text-white/20 mx-auto" />
                        )
                      ) : (
                        <span className="text-white/80">
                          {feature.enterprise}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
