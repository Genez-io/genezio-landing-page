import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GenezioPricingComparison() {
  const sections = [
    {
      title: "Coverage & scale",
      rows: [
        { feature: "Brands", starter: "1", growth: "1", enterprise: "Multiple" },
        { feature: "AI models (LLMs)", starter: "2", growth: "4", enterprise: "10" },
        { feature: "Languages / brand", starter: "1", growth: "2", enterprise: "All" },
        { feature: "Locations / brand", starter: "1", growth: "1", enterprise: "Custom" },
        { feature: "Personas / brand", starter: "1", growth: "2", enterprise: "Custom" },
      ],
    },
    {
      title: "Analysis & monitoring",
      rows: [
        { feature: "Topics / brand", starter: "5", growth: "10", enterprise: "Custom" },
        { feature: "Scenarios / brand", starter: "50", growth: "50", enterprise: "Custom", subtext: { starter: "3,000 conversations", growth: "12,000 conversations", enterprise: "Custom" } },
        { feature: "AI Statements", starter: "check", growth: "check", enterprise: "check" },
        { feature: "AI Keywords", starter: "check", growth: "check", enterprise: "check" },
        { feature: "AI Citations", starter: "check", growth: "check", enterprise: "check" },
        { feature: "Sentiment – per conversation", starter: "check", growth: "check", enterprise: "check" },
        { feature: "Sentiment – per citation", starter: "Top 100", growth: "Top 1,000", enterprise: "Top 10,000" },
        { feature: "Sentiment – per statement", starter: "Top 100", growth: "Top 1,000", enterprise: "Top 10,000" },
      ],
    },
    {
      title: "Activation & output",
      rows: [
        { feature: "AI content generation", starter: "1 / day", growth: "5 / day", enterprise: "10 / day", comingSoon: true },
        { feature: "Insights / day", starter: "1", growth: "5", enterprise: "10+" },
        { feature: "Exports", starter: "check", growth: "check", enterprise: "check" },
      ],
    },
    {
      title: "Data & governance",
      rows: [
        { feature: "Data retention", starter: "1 month", growth: "6 months", enterprise: "Unlimited" },
        { feature: "Seats", starter: "2", growth: "5", enterprise: "Unlimited" },
        { feature: "Competitor monitoring", starter: "Up to 3", growth: "Up to 5", enterprise: "Unlimited" },
      ],
    },
    {
      title: "Support",
      rows: [
        { feature: "Support type", starter: "Email", growth: "Email", enterprise: "Slack + Email" },
        { feature: "Account Manager", starter: "–", growth: "–", enterprise: "check" },
        { feature: "Onboarding", starter: "–", growth: "–", enterprise: "check" },
      ],
    },
  ];

  const renderCell = (value: string, subtext?: string) => {
    if (value === "check") {
      return (
        <div className="flex justify-center">
          <div className="w-5 h-5 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
            <CheckIcon className="w-3 h-3 text-blue-400/80" />
          </div>
        </div>
      );
    }
    if (value === "–") {
      return <span className="text-white/20">–</span>;
    }
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="text-white/60 font-medium">{value}</span>
        {subtext && <span className="text-xs text-white/40">{subtext}</span>}
      </div>
    );
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-[#050506]">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Detailed Plan Comparison
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Compare all features across our plans to find the perfect fit
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Sticky Table Header */}
            <div className="sticky top-20 z-20 grid grid-cols-4 bg-[#050506] backdrop-blur-md border-b border-white/[0.08]">
              <div className="px-8 py-6 flex items-center">
                <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
                  Feature
                </span>
              </div>
              <div className="px-6 py-8 border-l border-white/[0.08]">
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-white/60 mb-2">Starter</div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white">€199</span>
                      <span className="text-sm text-white/40 ml-1">/month</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => window.open('https://app.genezio.ai/sign-up', '_blank')}
                    className="w-full bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-white/20 h-11 text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="px-6 py-8 border-l border-white/[0.08] bg-gradient-to-b from-blue-600/[0.08] to-purple-600/[0.08] relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-white/60">Growth</span>
                      <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Popular
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white">€299</span>
                      <span className="text-sm text-white/40 ml-1">/month</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => window.open('https://app.genezio.ai/sign-up', '_blank')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-11 text-sm font-medium rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/20"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="px-6 py-8 border-l border-white/[0.08]">
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-white/60 mb-2">Enterprise</div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-white">Custom</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC', '_blank')}
                    className="w-full bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-white/20 h-11 text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-10"></div>
            <div className="pt-10"></div>


            {/* Table Body */}
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Section Header */}
                <div className="bg-white/[0.03] px-8 py-4 border-b border-white/[0.08]">
                  <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                    {section.title}
                  </h3>
                </div>

                {/* Section Rows */}
                {section.rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-4 border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-150"
                  >
                    <div className="px-8 py-4 flex items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/70">{row.feature}</span>
                        {row.comingSoon && (
                          <span className="inline-block bg-blue-600/20 text-blue-400 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="px-6 py-4 flex items-center justify-center border-l border-white/[0.06] text-sm">
                      {renderCell(row.starter, row.subtext?.starter)}
                    </div>
                    <div className="px-6 py-4 flex items-center justify-center border-l border-white/[0.06] bg-gradient-to-b from-blue-600/[0.03] to-purple-600/[0.03] text-sm">
                      {renderCell(row.growth, row.subtext?.growth)}
                    </div>
                    <div className="px-6 py-4 flex items-center justify-center border-l border-white/[0.06] text-sm">
                      {renderCell(row.enterprise, row.subtext?.enterprise)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {["Starter", "Growth", "Enterprise"].map((plan, planIndex) => (
            <div
              key={planIndex}
              className={`border rounded-2xl overflow-hidden backdrop-blur-sm ${
                plan === "Growth"
                  ? "border-blue-500/20 bg-gradient-to-b from-blue-600/[0.08] to-purple-600/[0.08]"
                  : "border-white/[0.08]"
              }`}
            >
              {/* Plan Header */}
              <div className="bg-white/[0.03] p-6 text-center border-b border-white/[0.08]">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h3 className="text-lg font-medium text-white/80">{plan}</h3>
                  {plan === "Growth" && (
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-white">
                    {plan === "Starter" ? "€199" : plan === "Growth" ? "€299" : "Custom"}
                  </span>
                  {plan !== "Enterprise" && <span className="text-sm text-white/40 ml-1">/month</span>}
                </div>
                {plan === "Enterprise" && (
                  <div className="text-xs text-white/40 mb-4">Tailored pricing</div>
                )}
                <Button
                  onClick={() => plan === "Enterprise" ? window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC', '_blank') : window.open('https://app.genezio.ai/sign-up', '_blank')}
                  className={`w-full h-11 text-sm font-medium rounded-lg transition-all duration-200 mt-4 ${
                    plan === "Growth"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/20"
                      : "bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-white/20"
                  }`}
                >
                  {plan === "Enterprise" ? "Book a Demo" : "Start Free Trial"}
                </Button>
              </div>

              {/* Plan Features */}
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="border-b border-white/[0.06] last:border-b-0">
                  <div className="bg-white/[0.03] px-6 py-3">
                    <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                      {section.title}
                    </h4>
                  </div>
                  <div className="p-6 space-y-3">
                    {section.rows.map((row, rowIndex) => (
                      <div key={rowIndex} className="flex justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-white/70">{row.feature}</span>
                          {row.comingSoon && (
                            <span className="inline-block bg-blue-600/20 text-blue-400 text-[10px] font-semibold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                              Soon
                            </span>
                          )}
                        </div>
                        <div className="text-sm flex-shrink-0">
                          {renderCell(
                            plan === "Starter"
                              ? row.starter
                              : plan === "Growth"
                              ? row.growth
                              : row.enterprise,
                            plan === "Starter"
                              ? row.subtext?.starter
                              : plan === "Growth"
                              ? row.subtext?.growth
                              : row.subtext?.enterprise
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-white/30">
            All plans include Statements, Keywords, and Citations tracking by default
          </p>
        </div>
      </div>
    </section>
  );
}