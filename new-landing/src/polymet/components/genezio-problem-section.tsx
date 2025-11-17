import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import { useState } from "react";

export function GenezioProblemsSection() {
  const [hoveredCard, setHoveredCard] = useState<
    "mentioned" | "missing" | null
  >(null);

  return (
    <section className="py-32 bg-[#0E0E10] relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">
                AI conversations are the new search results.
              </span>
              <br />

              <span className="text-blue-400 font-extrabold">
                Are you part of them?
              </span>
            </h2>
            <p className="text-lg text-[#B0B0B3] leading-relaxed">
              Every day, millions of product searches, comparisons, and buying
              decisions now start inside ChatGPT, Claude, Gemini, Perplexity,
              Grok, Meta AI, Copilot, and many others.
              <br />
              <br />
              If AI doesn't mention your brand — or gets your story wrong —
              you're losing visibility, trust, and revenue without realizing it.
            </p>
          </div>

          {/* Right: Visual comparison */}
          <div className="relative">
            <div className="space-y-6 relative">
              {/* Brand A - Mentioned */}
              <div
                className="bg-[#050506] border border-[#1C1C20] rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
                onMouseEnter={() => setHoveredCard("mentioned")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <CheckCircle2Icon className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Brand A</h3>
                    <p className="text-sm text-[#B0B0B3]">
                      "Brand A offers comprehensive solutions with strong
                      customer support and competitive pricing..."
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-green-500 font-medium">
                        ✓ Mentioned
                      </span>
                      <span className="text-xs text-[#B0B0B3]">
                        • Cited 3 times
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand B - Missing */}
              <div
                className="bg-[#050506] border border-[#1C1C20] rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 group opacity-60 hover:opacity-100 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
                onMouseEnter={() => setHoveredCard("missing")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <XCircleIcon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Brand B</h3>
                    <p className="text-sm text-[#B0B0B3] line-through">
                      Your brand could be here...
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-red-500 font-medium">
                        ✗ Not mentioned
                      </span>
                      <span className="text-xs text-[#B0B0B3]">
                        • 0 citations
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating indicator */}
              <div
                className={`absolute -right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/50 transition-all duration-300 ${
                  hoveredCard === "mentioned"
                    ? "scale-110 shadow-green-500/50"
                    : hoveredCard === "missing"
                      ? "scale-110 shadow-red-500/50"
                      : ""
                }`}
              >
                {hoveredCard === "mentioned"
                  ? "✓ Visible"
                  : hoveredCard === "missing"
                    ? "✗ Invisible"
                    : "AI Result"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
