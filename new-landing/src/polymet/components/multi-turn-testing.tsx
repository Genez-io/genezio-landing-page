import { Button } from "@/components/ui/button";

import {
  FlaskConicalIcon,
  UserIcon,
  MessageSquareIcon,
  PlayIcon,
  CheckCircleIcon,
  XCircleIcon,
  SparklesIcon
} from "lucide-react";
import { useState } from "react";

export function MultiTurnTesting() {
  const [selectedPersona, setSelectedPersona] = useState(0);

  const personas = [
    {
      name: "Enterprise Buyer",
      description: "Technical decision maker, budget-conscious",
      scenarios: 8
    },
    {
      name: "Startup Founder",
      description: "Fast-moving, looking for quick wins",
      scenarios: 6
    },
    {
      name: "Product Manager",
      description: "Feature-focused, integration needs",
      scenarios: 7
    }
  ];

  const testScenarios = [
    {
      title: "New Campaign Awareness Test",
      description:
        "Test if agent knows about your latest product launch campaign",
      turns: 5,
      status: "ready",
      expectedOutcome: "Agent mentions new features and pricing"
    },
    {
      title: "Competitor Comparison",
      description: "How agent handles direct comparison with competitors",
      turns: 7,
      status: "ready",
      expectedOutcome: "Highlights unique differentiators"
    },
    {
      title: "Objection Handling",
      description: "Test responses to common customer objections",
      turns: 6,
      status: "ready",
      expectedOutcome: "Addresses concerns with evidence"
    }
  ];

  const conversationExample = [
    {
      role: "user",
      message: "I'm looking for an enterprise solution for my team of 50.",
      timestamp: "0:00"
    },
    {
      role: "agent",
      message:
        "Great! Our Enterprise plan is perfect for teams of 50+. It includes advanced analytics, priority support, and custom integrations.",
      timestamp: "0:02",
      status: "pass"
    },
    {
      role: "user",
      message: "How does your pricing compare to Competitor X?",
      timestamp: "0:15"
    },
    {
      role: "agent",
      message:
        "While Competitor X focuses on basic features, we provide AI-powered insights and real-time optimization at a similar price point. Our customers see 2.3x better ROI.",
      timestamp: "0:17",
      status: "pass"
    },
    {
      role: "user",
      message: "Do you support the new Q1 2024 campaign features?",
      timestamp: "0:35"
    },
    {
      role: "agent",
      message:
        "Yes! Our Q1 2024 release includes advanced campaign tracking, multi-channel attribution, and predictive analytics.",
      timestamp: "0:37",
      status: "pass"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0E0E10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <FlaskConicalIcon className="w-4 h-4 text-blue-400" />

            <span className="text-blue-400 text-sm font-medium">
              Multi-Turn Testing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Test Before You{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Deploy
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Generate realistic multi-turn conversations for different personas
            and scenarios. Validate updates before they go live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Personas & Scenarios */}
          <div className="lg:col-span-5 space-y-6">
            {/* Personas */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-blue-400" />
                Select Persona
              </h3>
              <div className="space-y-3">
                {personas.map((persona, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPersona(index)}
                    className={`w-full text-left bg-white/[0.02] backdrop-blur-sm border rounded-xl p-4 transition-all ${
                      selectedPersona === index
                        ? "border-blue-500/50 bg-white/[0.04]"
                        : "border-white/10 hover:border-blue-500/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white mb-1">
                          {persona.name}
                        </div>
                        <div className="text-xs text-white/60">
                          {persona.description}
                        </div>
                      </div>
                      <div className="text-xs text-blue-400 font-semibold">
                        {persona.scenarios} scenarios
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Test Scenarios */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FlaskConicalIcon className="w-5 h-5 text-blue-400" />
                Test Scenarios
              </h3>
              <div className="space-y-3">
                {testScenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm">
                        {scenario.title}
                      </h4>
                      <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                        <span className="text-xs text-blue-400 font-medium">
                          {scenario.turns} turns
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-white/60 mb-3">
                      {scenario.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/40">
                        Expected: {scenario.expectedOutcome}
                      </div>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-500 text-white h-7 px-3 text-xs"
                      >
                        <PlayIcon className="w-3 h-3 mr-1" />
                        Run
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Conversation Preview */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquareIcon className="w-5 h-5 text-blue-400" />
                  Conversation Preview
                </h3>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-xs text-emerald-400 font-semibold">
                      3/3 Passed
                    </span>
                  </div>
                </div>
              </div>

              {/* Conversation Thread */}
              <div className="space-y-4 mb-6">
                {conversationExample.map((message, index) => (
                  <div key={index}>
                    {message.role === "user" ? (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <UserIcon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-white">
                              Enterprise Buyer
                            </span>
                            <span className="text-xs text-white/40">
                              {message.timestamp}
                            </span>
                          </div>
                          <div className="bg-white/[0.02] border border-white/10 rounded-lg rounded-tl-none px-4 py-3">
                            <p className="text-sm text-white/80">
                              {message.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <SparklesIcon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-white">
                              AI Agent
                            </span>
                            <span className="text-xs text-white/40">
                              {message.timestamp}
                            </span>
                            {message.status === "pass" && (
                              <CheckCircleIcon className="w-3 h-3 text-emerald-400" />
                            )}
                            {message.status === "fail" && (
                              <XCircleIcon className="w-3 h-3 text-red-400" />
                            )}
                          </div>
                          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg rounded-tl-none px-4 py-3">
                            <p className="text-sm text-white/80">
                              {message.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Test Results */}
              <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />

                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-1">
                      All Tests Passed
                    </div>
                    <div className="text-xs text-white/60">
                      Agent successfully handled campaign awareness, competitor
                      comparison, and feature questions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Generate Custom Test Scenarios
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Create unlimited test conversations for any persona, scenario, or
              campaign update. Ensure quality before deployment.
            </p>
            <a href="/pricing">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-6 text-base font-semibold rounded-xl">
                <FlaskConicalIcon className="w-5 h-5 mr-2" />
                Start Testing
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
