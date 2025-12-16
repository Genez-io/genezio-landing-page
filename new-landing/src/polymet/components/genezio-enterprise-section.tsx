import { Button } from "@/components/ui/button";

import {
  BuildingIcon,
  ShieldCheckIcon,
  LayersIcon,
  GlobeIcon,
  CheckCircle2Icon
} from "lucide-react";

export function GenezioEnterpriseSection() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "SOC 2 Type II Certified",
      description: "Enterprise-grade security and compliance"
    },
    {
      icon: LayersIcon,
      title: "Multi-Brand Management",
      description: "Orchestrate multiple brands from one dashboard"
    },
    {
      icon: GlobeIcon,
      title: "Global Scale",
      description: "Regional tracking and language support"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506] border-y border-[#1C1C20]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6">
            <BuildingIcon className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Built for Enterprise
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto px-4">
            Scalable and secure for global marketing, PR, and SEO teams
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-[#1C1C20] bg-[#0E0E10] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#B0B0B3]">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <a href="/pricing">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Talk to Enterprise Sales
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
