import React from "react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FunnelIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon as WarningIcon,
  ClockIcon,
  BeakerIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/badge";

export function ContinuousTestingSection() {
  const testingCapabilities = [
    {
      icon: CheckCircleIcon,
      title: "Persona & tone consistency",
      description:
        "Ensure your AI maintains consistent brand voice, personality, and communication style across all interactions.",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      available: true,
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Hallucination risk index",
      description:
        "Monitor and measure the likelihood of AI generating false or fabricated information in responses.",
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      available: true,
    },
    {
      icon: FunnelIcon,
      title: "Escalation threshold precision",
      description:
        "Fine-tune when conversations should be escalated to human agents for optimal customer experience.",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      available: true,
    },
    {
      icon: CurrencyDollarIcon,
      title: "Content accuracy testing",
      description:
        "Validate that AI responses contain factually correct and up-to-date information relevant to user queries.",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      available: true,
    },
    {
      icon: WarningIcon,
      title: "Improvement insight",
      description:
        "Identify patterns and opportunities to enhance AI performance based on conversation analysis.",
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      available: false,
    },
    {
      icon: ClockIcon,
      title: "Latency & recovery time",
      description:
        "Monitor response times and system recovery capabilities to ensure optimal performance under load.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      available: false,
    },
    {
      icon: BeakerIcon,
      title: "Intent recognition accuracy",
      description:
        "Measure how accurately the AI understands and responds to different user intents and requests.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      available: false,
    },
    {
      icon: LockClosedIcon,
      title: "Context Leakage",
      description:
        "Prevent AI from exposing internal system prompts, configurations, or sensitive information.",
      iconColor: "text-gray-600",
      bgColor: "bg-gray-50",
      available: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Don't just blindly trust your AI Agents{" "}
            <br className="hidden md:block" />
            <span className="text-purple-600">Test and improve them</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Run comprehensive simulations of real-world interactions with our
            combined agent suite. Test your AI before launch and monitor
            performance while live with periodic reports to ensure continuous
            quality and compliance.
          </p>
        </div>

        {/* Testing Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testingCapabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={index}
                className="relative rounded-xl p-6 shadow-sm border transition-all duration-200 bg-white border-slate-200 hover:shadow-md"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${capability.bgColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <IconComponent
                    className={`w-6 h-6 ${capability.iconColor}`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 text-slate-900">
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
