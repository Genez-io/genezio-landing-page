import { Button } from "@/components/ui/button";
import {
  MessageSquareIcon,
  TrendingUpIcon,
  AlertTriangleIcon,
  ShieldCheckIcon,
  ZapIcon,
  TargetIcon,
  SparklesIcon
} from "lucide-react";

export function GenezioBrandedQuestionsSection() {
  const brandedQuestions = [
    "What makes [Your Brand] different from competitors?",
    "Is [Your Brand] reliable for enterprise use?",
    "What are the main benefits of [Your Brand]?",
    "How does [Your Brand] compare to [Competitor]?"
  ];

  const swotData = {
    strengths: [
      "Innovative technology",
      "Strong customer support",
      "Competitive pricing",
      "Fast deployment"
    ],

    weaknesses: [
      "Limited market presence",
      "Fewer integrations",
      "Smaller team size"
    ],

    opportunities: [
      "Growing market demand",
      "Enterprise expansion",
      "International markets"
    ],

    threats: ["Strong competition", "Market saturation", "Rapid tech changes"]
  };

  const extractedValues = [
    {
      icon: SparklesIcon,
      label: "Innovation",
      value: "Cutting-edge",
      color: "blue"
    },
    {
      icon: ShieldCheckIcon,
      label: "Reliability",
      value: "Enterprise-grade",
      color: "blue"
    },
    {
      icon: ZapIcon,
      label: "Performance",
      value: "High-speed",
      color: "blue"
    },
    {
      icon: TargetIcon,
      label: "Value for Money",
      value: "Cost-effective",
      color: "blue"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0E0E10] relative">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-sm text-blue-400 uppercase tracking-wider mb-4 font-semibold">
            Direct AI Perception Analysis
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            <span className="text-white">Discover What AI Engines</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
              Really Think About Your Brand
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto px-4">
            Ask AI engines branded questions directly and extract deep insights
            — from perceived values to comprehensive SWOT analysis.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Branded Questions Examples */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                <MessageSquareIcon className="w-6 h-6 inline-block mr-3 text-blue-400" />
                Branded Questions
              </h3>
              <div className="space-y-3">
                {brandedQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="bg-[#1C1C20]/60 border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <p className="text-sm text-[#B0B0B3] leading-relaxed">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracted Values */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                <SparklesIcon className="w-6 h-6 inline-block mr-3 text-blue-400" />
                Extracted Brand Values
              </h3>
              <div className="space-y-3">
                {extractedValues.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-[#B0B0B3]"
                    >
                      <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />

                      <span className="text-sm font-medium text-gray-400">
                        {value.label}:
                      </span>
                      <span className="text-sm text-white font-semibold">
                        {value.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/pricing")}
                className="bg-transparent border-blue-500/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 px-6 py-5 text-base font-semibold w-full"
              >
                Analyze Your Brand Perception
              </Button>
            </div>
          </div>

          {/* Right Column - SWOT Analysis Visual */}
          <div className="bg-gradient-to-br from-blue-500/5 via-blue-600/5 to-transparent border border-blue-500/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
              SWOT Analysis
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {/* Strengths */}
              <div className="bg-[#0A0A0C]/80 border border-[#2A2A30] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUpIcon className="w-5 h-5 text-gray-400" />

                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Strengths
                  </h4>
                </div>
                <div className="space-y-2">
                  {swotData.strengths.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />

                      <p className="text-xs text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weaknesses */}
              <div className="bg-[#0A0A0C]/80 border border-[#2A2A30] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangleIcon className="w-5 h-5 text-gray-400" />

                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Weaknesses
                  </h4>
                </div>
                <div className="space-y-2">
                  {swotData.weaknesses.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />

                      <p className="text-xs text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opportunities */}
              <div className="bg-[#0A0A0C]/80 border border-[#2A2A30] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TargetIcon className="w-5 h-5 text-gray-400" />

                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Opportunities
                  </h4>
                </div>
                <div className="space-y-2">
                  {swotData.opportunities.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />

                      <p className="text-xs text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Threats */}
              <div className="bg-[#0A0A0C]/80 border border-[#2A2A30] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheckIcon className="w-5 h-5 text-gray-400" />

                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Threats
                  </h4>
                </div>
                <div className="space-y-2">
                  {swotData.threats.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />

                      <p className="text-xs text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Confidence Score */}
            <div className="mt-6 bg-[#0A0A0C]/80 border border-blue-500/30 rounded-xl p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Overall AI Confidence</p>
                <p className="text-xl font-bold text-blue-400">
                  High Confidence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center bg-[#1C1C20]/40 border border-blue-500/20 rounded-2xl p-6 md:p-8">
          <p className="text-[#B0B0B3] text-base leading-relaxed">
            <span className="text-blue-400 font-semibold">
              Branded questions
            </span>{" "}
            reveal how AI engines perceive your brand's core attributes. Genezio
            extracts sentiment, values, and competitive positioning directly
            from AI responses — giving you actionable intelligence to shape your
            brand narrative.
          </p>
        </div>
      </div>
    </section>
  );
}
