import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  MessageCircleIcon,
  UsersIcon,
  TargetIcon,
  FileTextIcon,
  SettingsIcon,
  CheckCircle2Icon,
  TrendingUpIcon,
  BarChart3Icon,
  FileIcon,
  ShieldIcon,
  BriefcaseIcon,
  CodeIcon,
  NewspaperIcon,
  ShoppingBagIcon,
  LightbulbIcon,
  PenToolIcon,
  Share2Icon,
  StarIcon
} from "lucide-react";

// Static Persona Scenario Component - Young Professional Only
function PersonaScenarioSelector() {
  const personas = [
    {
      name: "Young Professional",
      icon: BriefcaseIcon,
      question: "Where should I open a bank account with the best mobile app?",
      isSelected: true
    },
    {
      name: "B2B Buyer",
      icon: ShoppingBagIcon,
      question: "Where should I open a bank account with the best mobile app?",
      isSelected: false
    },
    {
      name: "Developer",
      icon: CodeIcon,
      question: "Where should I open a bank account with the best mobile app?",
      isSelected: false
    },
    {
      name: "Journalist",
      icon: NewspaperIcon,
      question: "Where should I open a bank account with the best mobile app?",
      isSelected: false
    }
  ];

  // Always show Young Professional (first persona)
  const selectedPersona = personas[0];
  const PersonaIcon = selectedPersona.icon;

  return (
    <div className="w-full space-y-6">
      {/* Persona Selector Pills - Static Display */}
      <div className="flex gap-2 flex-wrap">
        {personas.map((persona, index) => {
          const Icon = persona.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${persona.isSelected
                  ? "bg-blue-500/20 border-blue-500/50 text-blue-300"
                  : "bg-[#1C1C20]/50 border-blue-500/20 text-gray-400"
                }`}
            >
              <Icon className="w-4 h-4" />

              <span className="text-sm font-medium">{persona.name}</span>
            </div>
          );
        })}
      </div>

      {/* Selected Persona Card */}
      <div className="relative bg-[#0A0A0C]/80 border border-blue-500/20 rounded-2xl p-8">
        <div className="space-y-4">
          {/* Persona Icon and Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <PersonaIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h5 className="text-lg font-bold text-white">
              {selectedPersona.name}
            </h5>
          </div>

          {/* User Query - Static */}
          <div className="space-y-2">
            <p className="text-sm text-gray-400">
              User Query:{" "}
              <span className="text-white font-medium">
                Where should I open a bank account with the best mobile app?
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GenezioDifferentiatorsSection() {
  const differentiators = [
    {
      icon: MessageCircleIcon,
      title: "Multi-Turn Conversation Simulation",
      description:
        "Go beyond one-shot prompts. Genezio runs full, realistic multi-turn dialogues to evaluate how AI engines represent your brand in real user scenarios.",
      visual: "conversation"
    },
    {
      icon: UsersIcon,
      title: "Persona-Based Scenarios",
      description:
        "Each conversation adapts to real customer personas — B2B buyer, developer, journalist, consumer — revealing how perception changes by audience and intent.",
      visual: "personas"
    },
    {
      icon: SettingsIcon,
      title: "Platform-Adaptive Query Intelligence",
      description:
        "Different AI platforms require different query approaches. Genezio automatically adapts — using search queries for AI Overview, conversational questions for AI Mode and ChatGPT-like interfaces.",
      visual: "platform"
    },
    {
      icon: LightbulbIcon,
      title: "Actionable Insights with Measurable Impact",
      description:
        "Transform AI visibility data into concrete actions. Get specific recommendations for website improvements, blog posts, social media threads, and review strategies to boost your AI visibility.",
      visual: "actionable"
    },
    {
      icon: FileTextIcon,
      title: "AI Citation Intelligence",
      description:
        "Identify which content sources are cited by AI engines and which are missing. Correct outdated references and boost trustworthiness in AI-generated answers.",
      visual: "citations"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#050506] relative">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-sm text-blue-400 uppercase tracking-wider mb-4 font-semibold">
            Visibility, Accuracy, and Trust
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            <span className="text-white">The only platform built for</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
              Generative Search & Conversational Optimization.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto px-4">
            Genezio goes beyond AEO (Answer Engine Optimization) and SEO —
            combining simulation, analytics, and optimization in one intelligent
            ecosystem.
          </p>
        </div>

        {/* Grid of differentiators - Two Column Layout */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative border border-[#1C1C20] rounded-2xl bg-[#0A0A0C] overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Vertical divider line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1C1C20] to-transparent" />

                <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[300px] md:min-h-[400px]">
                  {/* Alternate layout: even index = text left, odd index = text right */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Left Column - Text Content */}
                      <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center order-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight">
                          {item.title}
                        </h3>
                        <div>
                          {index === 4 ? (
                            <p className="text-[#B0B0B3] text-base md:text-lg leading-relaxed">
                              Identify which sources AI engines cite or miss,
                              update outdated content to improve accuracy, and
                              analyze citation sentiment to understand how your
                              brand is perceived.
                            </p>
                          ) : (
                            <p className="text-[#B0B0B3] text-base md:text-lg leading-relaxed mb-4">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Right Column - Visual */}
                      <div className="p-6 md:p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent order-2">
                        {/* Render different visuals based on card type */}
                        {item.visual === "conversation" ? (
                          // Multi-turn conversation visual with real conversation
                          <div className="w-full space-y-3">
                            {/* Message 1 - User */}
                            <div className="flex justify-end">
                              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm text-blue-100">
                                  Where can I buy organic products?
                                </p>
                              </div>
                            </div>
                            {/* Message 2 - AI */}
                            <div className="flex justify-start">
                              <div className="bg-[#1C1C20]/80 border border-blue-500/20 rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm text-gray-200">
                                  You can find organic products at Whole Foods,
                                  local farmers markets, or online stores like
                                  Thrive Market.
                                </p>
                              </div>
                            </div>
                            {/* Message 3 - User */}
                            <div className="flex justify-end">
                              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm text-blue-100">
                                  What about organic vegetables?
                                </p>
                              </div>
                            </div>
                            {/* Message 4 - AI */}
                            <div className="flex justify-start">
                              <div className="bg-[#1C1C20]/80 border border-blue-500/20 rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm text-gray-200">
                                  For organic vegetables, try your local farmers
                                  market or subscribe to a CSA box delivery
                                  service.
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : item.visual === "personas" ? (
                          // Animated persona selector visual
                          <PersonaScenarioSelector />
                        ) : item.visual === "platform" ? (
                          // Platform query comparison visual
                          <div className="w-full space-y-6">
                            {/* AI Overview - Search Query */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                                  <SettingsIcon className="w-4 h-4 text-blue-400" />
                                </div>
                                <span className="text-sm font-semibold text-white">
                                  AI Overview
                                </span>
                                <span className="text-xs text-gray-400 px-2 py-1 rounded bg-[#1C1C20] border border-blue-500/20">
                                  Search Query
                                </span>
                              </div>
                              <div className="bg-[#1C1C20]/80 border border-blue-500/20 rounded-lg p-4">
                                <p className="text-blue-300 text-sm font-medium">
                                  best laptop for travel
                                </p>
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="relative">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-blue-500/20"></div>
                              </div>
                              <div className="relative flex justify-center text-xs">
                                <span className="bg-[#050506] px-2 text-gray-500">
                                  vs
                                </span>
                              </div>
                            </div>

                            {/* ChatGPT/Claude - Conversational */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                                  <MessageCircleIcon className="w-4 h-4 text-purple-400" />
                                </div>
                                <span className="text-sm font-semibold text-white">
                                  ChatGPT / Claude
                                </span>
                                <span className="text-xs text-gray-400 px-2 py-1 rounded bg-[#1C1C20] border border-purple-500/20">
                                  Conversational
                                </span>
                              </div>
                              <div className="bg-[#1C1C20]/80 border border-purple-500/20 rounded-lg p-4">
                                <p className="text-purple-300 text-sm font-medium">
                                  What's the best lightweight laptop for travel?
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : item.visual === "actionable" ? (
                          // Actionable insights visual with action cards
                          <div className="w-full space-y-3">
                            {[
                              {
                                icon: PenToolIcon,
                                title: "Website Improvements",
                                description:
                                  "Update product pages with AI-friendly content"
                              },
                              {
                                icon: FileTextIcon,
                                title: "Blog Post",
                                description:
                                  "Create comprehensive guide on key topics"
                              },
                              {
                                icon: Share2Icon,
                                title: "Social Media Threads",
                                description:
                                  "Share insights to boost brand authority"
                              },
                              {
                                icon: StarIcon,
                                title: "Reviews",
                                description: "Encourage customer testimonials"
                              }
                            ].map((action, idx) => {
                              const ActionIcon = action.icon;
                              return (
                                <div
                                  key={idx}
                                  className="bg-[#1C1C20]/60 border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300 hover:bg-[#1C1C20]/80"
                                >
                                  <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                                      <ActionIcon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                      <h6 className="text-sm font-bold text-white mb-1">
                                        {action.title}
                                      </h6>
                                      <p className="text-xs text-gray-400 leading-relaxed">
                                        {action.description}
                                      </p>
                                    </div>
                                    <CheckCircle2Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : item.visual === "citations" ? (
                          // Citations table visual with mock data
                          <div className="w-full space-y-3">
                            <div className="grid grid-cols-[auto_1fr_auto] gap-4 pb-3 border-b border-blue-500/20">
                              <span className="text-xs font-semibold text-gray-400">
                                #
                              </span>
                              <span className="text-xs font-semibold text-gray-400">
                                Source
                              </span>
                              <span className="text-xs font-semibold text-gray-400">
                                Citations
                              </span>
                            </div>
                            {[
                              { source: "techcrunch.com", citations: 847 },
                              { source: "forbes.com", citations: 623 },
                              { source: "wired.com", citations: 512 },
                              { source: "theverge.com", citations: 389 },
                              { source: "...", citations: null }
                            ].map((item, idx) => (
                              <div
                                key={idx}
                                className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-2 hover:bg-blue-500/5 rounded transition-colors duration-200"
                              >
                                <div className="text-sm text-[#B0B0B3] font-mono">
                                  {idx + 1}.
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                                    <FileTextIcon className="w-3 h-3 text-blue-400" />
                                  </div>
                                  <span className="text-sm text-white font-medium">
                                    {item.source}
                                  </span>
                                </div>
                                {item.citations !== null ? (
                                  <div className="px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30">
                                    <span className="text-xs font-bold text-blue-400">
                                      {item.citations}
                                    </span>
                                  </div>
                                ) : (
                                  <div className="text-sm text-[#B0B0B3]"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left Column - Visual */}
                      <div className="p-6 md:p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent order-2 lg:order-1">
                        {/* Same visual content */}
                        {item.visual === "conversation" ? (
                          // Multi-turn conversation visual with real conversation
                          <div className="w-full space-y-3">
                            {/* Message 1 - User */}
                            <div className="flex justify-end">
                              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm text-blue-100">
                                  Where can I buy organic products?
                                </p>
                              </div>
                            </div>
                            {/* Message 2 - AI */}
                            <div className="flex justify-start">
                              <div className="bg-[#1C1C20]/80 border border-blue-500/20 rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm text-gray-200">
                                  You can find organic products at Whole Foods,
                                  local farmers markets, or online stores like
                                  Thrive Market.
                                </p>
                              </div>
                            </div>
                            {/* Message 3 - User */}
                            <div className="flex justify-end">
                              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm text-blue-100">
                                  What about organic vegetables?
                                </p>
                              </div>
                            </div>
                            {/* Message 4 - AI */}
                            <div className="flex justify-start">
                              <div className="bg-[#1C1C20]/80 border border-blue-500/20 rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm text-gray-200">
                                  For organic vegetables, try your local farmers
                                  market or subscribe to a CSA box delivery
                                  service.
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : item.visual === "personas" ? (
                          // Animated persona selector visual
                          <PersonaScenarioSelector />
                        ) : item.visual === "platform" ? (
                          // Platform query comparison visual
                          <div className="w-full space-y-6">
                            {/* AI Overview - Search Query */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                                  <SettingsIcon className="w-4 h-4 text-blue-400" />
                                </div>
                                <span className="text-sm font-semibold text-white">
                                  AI Overview
                                </span>
                                <span className="text-xs text-gray-400 px-2 py-1 rounded bg-[#1C1C20] border border-blue-500/20">
                                  Search Query
                                </span>
                              </div>
                              <div className="bg-[#1C1C20]/80 border border-blue-500/20 rounded-lg p-4">
                                <p className="text-blue-300 text-sm font-medium">
                                  best laptop for travel
                                </p>
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="relative">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-blue-500/20"></div>
                              </div>
                              <div className="relative flex justify-center text-xs">
                                <span className="bg-[#050506] px-2 text-gray-500">
                                  vs
                                </span>
                              </div>
                            </div>

                            {/* ChatGPT/Claude - Conversational */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                                  <MessageCircleIcon className="w-4 h-4 text-purple-400" />
                                </div>
                                <span className="text-sm font-semibold text-white">
                                  ChatGPT / Claude
                                </span>
                                <span className="text-xs text-gray-400 px-2 py-1 rounded bg-[#1C1C20] border border-purple-500/20">
                                  Conversational
                                </span>
                              </div>
                              <div className="bg-[#1C1C20]/80 border border-purple-500/20 rounded-lg p-4">
                                <p className="text-purple-300 text-sm font-medium">
                                  What's the best lightweight laptop for travel?
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : item.visual === "actionable" ? (
                          // Actionable insights visual with action cards
                          <div className="w-full space-y-3">
                            {[
                              {
                                icon: PenToolIcon,
                                title: "Website Improvements",
                                description:
                                  "Update product pages with AI-friendly content"
                              },
                              {
                                icon: FileTextIcon,
                                title: "Blog Post",
                                description:
                                  "Create comprehensive guide on key topics"
                              },
                              {
                                icon: Share2Icon,
                                title: "Social Media Threads",
                                description:
                                  "Share insights to boost brand authority"
                              },
                              {
                                icon: StarIcon,
                                title: "Reviews",
                                description: "Encourage customer testimonials"
                              }
                            ].map((action, idx) => {
                              const ActionIcon = action.icon;
                              return (
                                <div
                                  key={idx}
                                  className="bg-[#1C1C20]/60 border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300 hover:bg-[#1C1C20]/80"
                                >
                                  <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                                      <ActionIcon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                      <h6 className="text-sm font-bold text-white mb-1">
                                        {action.title}
                                      </h6>
                                      <p className="text-xs text-gray-400 leading-relaxed">
                                        {action.description}
                                      </p>
                                    </div>
                                    <CheckCircle2Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : item.visual === "citations" ? (
                          // Citations table visual with mock data
                          <div className="w-full space-y-3">
                            <div className="grid grid-cols-[auto_1fr_auto] gap-4 pb-3 border-b border-blue-500/20">
                              <span className="text-xs font-semibold text-gray-400">
                                #
                              </span>
                              <span className="text-xs font-semibold text-gray-400">
                                Source
                              </span>
                              <span className="text-xs font-semibold text-gray-400">
                                Citations
                              </span>
                            </div>
                            {[
                              { source: "techcrunch.com", citations: 847 },
                              { source: "forbes.com", citations: 623 },
                              { source: "wired.com", citations: 512 },
                              { source: "theverge.com", citations: 389 },
                              { source: "...", citations: null }
                            ].map((item, idx) => (
                              <div
                                key={idx}
                                className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-2 hover:bg-blue-500/5 rounded transition-colors duration-200"
                              >
                                <div className="text-sm text-[#B0B0B3] font-mono">
                                  {idx + 1}.
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                                    <FileTextIcon className="w-3 h-3 text-blue-400" />
                                  </div>
                                  <span className="text-sm text-white font-medium">
                                    {item.source}
                                  </span>
                                </div>
                                {item.citations !== null ? (
                                  <div className="px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30">
                                    <span className="text-xs font-bold text-blue-400">
                                      {item.citations}
                                    </span>
                                  </div>
                                ) : (
                                  <div className="text-sm text-[#B0B0B3]"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      {/* Right Column - Text Content */}
                      <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight">
                          {item.title}
                        </h3>
                        <div>
                          {index === 4 ? (
                            <p className="text-[#B0B0B3] text-base md:text-lg leading-relaxed">
                              Identify which sources AI engines cite or miss,
                              update outdated content to improve accuracy, and
                              analyze citation sentiment to understand how your
                              brand is perceived.
                            </p>
                          ) : (
                            <p className="text-[#B0B0B3] text-base md:text-lg leading-relaxed mb-4">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://app.genezio.ai/sign-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Your AI Visibility Audit
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
