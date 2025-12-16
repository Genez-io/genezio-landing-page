import {
  UsersIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  ShoppingBagIcon,
  BuildingIcon,
  SparklesIcon,
} from "lucide-react";

export function LeadGenPersonas() {
  const personas = [
    {
      icon: BriefcaseIcon,
      title: "Enterprise Decision Makers",
      description: "C-suite executives looking for scalable solutions",
      queries: "ROI, integration, security, compliance",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: GraduationCapIcon,
      title: "Technical Evaluators",
      description: "Engineers and architects assessing capabilities",
      queries: "API, performance, architecture, documentation",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: ShoppingBagIcon,
      title: "SMB Owners",
      description: "Small business owners seeking quick wins",
      queries: "Pricing, ease of use, support, quick setup",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: BuildingIcon,
      title: "Agency Partners",
      description: "Marketing agencies managing multiple clients",
      queries: "White-label, multi-tenant, reporting, automation",
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/20",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#050506] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <UsersIcon className="w-4 h-4 text-teal-400" />

            <span className="text-teal-400 text-xs sm:text-sm font-medium">
              Persona-Based Analysis
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Every{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Conversation
            </span>{" "}
            Is Unique
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            We generate and analyze thousands of conversations based on your
            custom personas, understanding that a CTO asks different questions
            than a CMO. Get insights tailored to each audience segment.
          </p>
        </div>

        {/* Conversation Simulator Visual */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-6">
            {/* Left: Selectors */}
            <div className="space-y-4">
              {/* Persona Selector */}
              <div>
                <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 block">
                  Select Persona
                </label>
                <div className="space-y-2">
                  <div className="bg-teal-500/20 border-2 border-teal-500/50 rounded-xl p-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <BriefcaseIcon className="w-5 h-5 text-teal-400" />

                      <span className="text-white font-medium text-sm">
                        Small Business Owner
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <GraduationCapIcon className="w-5 h-5 text-white/60" />

                      <span className="text-white/60 font-medium text-sm">
                        Financial Advisor
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <BuildingIcon className="w-5 h-5 text-white/60" />

                      <span className="text-white/60 font-medium text-sm">
                        Enterprise CFO
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topic Selector */}
              <div>
                <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 block">
                  Select Topic
                </label>
                <div className="space-y-2">
                  <div className="bg-emerald-500/20 border-2 border-emerald-500/50 rounded-xl p-3 cursor-pointer">
                    <span className="text-white font-medium text-sm">
                      Business Banking
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <span className="text-white/60 font-medium text-sm">
                      Digital Payments
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <span className="text-white/60 font-medium text-sm">
                      Loan Management
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Engine Selector */}
              <div>
                <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 block">
                  Select AI Engine
                </label>
                <div className="space-y-2">
                  <div className="bg-cyan-500/20 border-2 border-cyan-500/50 rounded-xl p-3 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />

                      <span className="text-white font-medium text-sm">
                        ChatGPT
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/40" />

                      <span className="text-white/60 font-medium text-sm">
                        Claude
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/40" />

                      <span className="text-white/60 font-medium text-sm">
                        Gemini
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Conversation */}
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 min-h-[500px] flex flex-col">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-white/70 text-sm font-medium">
                  Multi-turn Conversation
                </span>
              </div>

              <div className="space-y-4 flex-1">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-teal-500/20 border border-teal-500/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <p className="text-white/90 text-sm leading-relaxed">
                      Where can I find LEGO sets on sale?
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                    <div className="text-white/80 text-sm leading-relaxed space-y-2">
                      <p>
                        You can usually find LEGO sets on sale at a few
                        different places:
                      </p>
                      <div className="space-y-1 pl-2">
                        <p>
                          -{" "}
                          <span className="text-emerald-400 font-semibold">
                            Amazon
                          </span>{" "}
                          – they often have discounts, especially on older or
                          seasonal sets.
                        </p>
                        <p>
                          - Walmart and Target – both run frequent promotions in
                          the toys section.
                        </p>
                        <p>
                          - LEGO's official website – check the "Sales & Deals"
                          section; they update it monthly.
                        </p>
                        <p>
                          - Best Buy and Barnes & Noble sometimes carry
                          discounted LEGO sets, too.
                        </p>
                      </div>
                      <p className="pt-1">
                        Would you like me to find current deals or recommend
                        specific sets under a certain price?
                      </p>
                    </div>
                  </div>
                </div>

                {/* User Follow-up */}
                <div className="flex justify-end">
                  <div className="bg-teal-500/20 border border-teal-500/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <p className="text-white/90 text-sm leading-relaxed">
                      Yes, I'm looking for sets under $50. Preferably something
                      for adults, not kids.
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                    <div className="text-white/80 text-sm leading-relaxed space-y-2">
                      <p>
                        Got it! Here are a few LEGO sets for adults under $50
                        that are currently on sale:
                      </p>
                      <div className="space-y-1 pl-2">
                        <p>
                          -{" "}
                          <span className="text-emerald-400 font-semibold">
                            LEGO Botanical Collection – Mini Succulents
                          </span>{" "}
                          → ~$39 on Amazon
                        </p>
                        <p>
                          - LEGO Star Wars Microfighters Set → around $15–25
                          depending on the retailer
                        </p>
                        <p>- LEGO Archit.....</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                  <span>Brand mentioned 2 times in this conversation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl px-6 sm:px-8 py-4 sm:py-5">
            <SparklesIcon className="w-6 h-6 text-teal-400" />

            <div className="text-sm sm:text-base text-white/70 text-center sm:text-left">
              You can design your personas to match your target audience and
              business goals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
