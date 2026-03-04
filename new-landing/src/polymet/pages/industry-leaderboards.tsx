import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ShoppingCartIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  ShirtIcon,
  BuildingIcon,
  TrendingUpIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Link } from "react-router";

export function IndustryLeaderboards() {
  const industries = [
    {
      id: "retail-supermarkets",
      name: "Retail & Supermarkets",
      location: "UK",
      icon: ShoppingCartIcon,
      description:
        "Discover how major UK retailers and supermarkets rank in AI-driven search visibility. See which brands dominate ChatGPT, Perplexity, and Google AI Overviews.",
      topBrands: ["Tesco", "Sainsbury's", "Asda", "Morrisons", "Waitrose"],
      gradient: "from-gray-700 to-gray-600",
      url: "https://app.genezio.ai/brand-report/-29/Retail%20&%20Supermarkets?demo=account",
    },
    {
      id: "universities-education",
      name: "Universities & Education Platforms",
      location: "UK",
      icon: GraduationCapIcon,
      description:
        "Compare AI visibility across UK universities and education platforms. Understand which institutions are winning in AI-powered student searches.",
      topBrands: [
        "Oxford",
        "Cambridge",
        "Imperial College",
        "UCL",
        "Edinburgh",
      ],
      gradient: "from-gray-700 to-gray-600",
      url: "https://app.genezio.ai/brand-report/-35/Universities%20&%20Education%20Platforms?demo=account",
    },
    {
      id: "healthcare-providers",
      name: "Healthcare Providers & Clinics",
      location: "UK",
      icon: HeartPulseIcon,
      description:
        "Analyze how UK healthcare providers and private clinics perform in AI recommendations for medical services and patient care.",
      topBrands: ["Bupa", "Nuffield Health", "Spire Healthcare", "BMI", "NHS"],
      gradient: "from-gray-700 to-gray-600",
      url: "https://app.genezio.ai/brand-report/-31/Healthcare%20Providers%20&%20Clinics?demo=account",
    },
    {
      id: "fast-fashion",
      name: "Fast-Fashion",
      location: "UK",
      icon: ShirtIcon,
      description:
        "Track AI visibility rankings for UK fast-fashion brands. See which retailers are capturing AI-driven shopping recommendations.",
      topBrands: ["Zara", "H&M", "Primark", "ASOS", "Boohoo"],
      gradient: "from-gray-700 to-gray-600",
      url: "https://app.genezio.ai/brand-report/-64/Fast%20Fashion?demo=account",
    },
    {
      id: "banking",
      name: "Banking",
      location: "UK",
      icon: BuildingIcon,
      description:
        "Benchmark UK banks' performance in AI-powered financial service recommendations. Understand which institutions lead in AI visibility.",
      topBrands: ["Barclays", "HSBC", "Lloyds", "NatWest", "Santander"],
      gradient: "from-gray-700 to-gray-600",
      url: "https://app.genezio.ai/brand-report/-49/Banking?demo=account",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050506]">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-8 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <TrendingUpIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-semibold text-gray-400">
              Free Industry Reports
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">AI Visibility Industry </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Leaderboards
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mb-8">
            See how top competitors perform in AI visibility across 5 UK
            industries. Discover which brands dominate ChatGPT, Perplexity,
            Google AI Overviews, and other AI engines.
          </p>


        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="pb-20 md:pb-32 px-8 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/[0.04] border-white/[0.15] hover:bg-white/[0.07] hover:border-white/30 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6 space-y-4">
                    {/* Icon and Title */}
                    <div className="space-y-3">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {industry.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#B0B0B3] leading-relaxed">
                      {industry.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-white hover:bg-gray-200 text-black font-semibold rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2"
                      onClick={() => window.open(industry.url, "_blank")}
                    >
                      View Leaderboard
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="pb-20 md:pb-32 px-8 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-[#0A0A0C] border-[#1C1C20] overflow-hidden">
            <div className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Want to see your brand's AI visibility?
              </h2>
              <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto">
                Get a comprehensive analysis of how your brand performs across
                all AI engines. Discover opportunities to increase your AI
                visibility and drive more conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="https://app.genezio.ai/sign-up">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Free Analysis
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 hover:border-white hover:bg-white bg-white/5 text-white hover:text-black px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
                  onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC', '_blank')}
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}