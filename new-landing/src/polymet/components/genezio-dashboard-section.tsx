import { Button } from "@/components/ui/button";

import {
  CalendarIcon,
  ChevronDownIcon,
  SettingsIcon,
  ExternalLinkIcon
} from "lucide-react";

export function GenezioDashboardSection() {
  return (
    <section className="py-32 bg-[#050506] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,132,252,0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Understand your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
              AI presence
            </span>{" "}
            and competitive position
          </h2>
          <p className="text-lg text-[#B0B0B3] max-w-3xl mx-auto">
            Track visibility, monitor competitors, and optimize your presence
            across all conversations, buyer personas, and platforms.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Browser chrome */}
          <div className="bg-[#1C1C20] rounded-t-xl border border-[#2A2A30] border-b-0 p-2 md:p-4">
            {/* Navigation header - Brand and Menu */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#2A2A30] gap-2 md:gap-0">
              {/* Left side - Brand info */}
              <div className="flex items-center gap-3 py-3">
                <div className="text-white font-semibold text-lg">
                  Your Brand
                </div>
              </div>

              {/* Right side - Tab navigation */}
              <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <div className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-white bg-[#0E0E10] rounded-t-lg border-b-2 border-blue-500 whitespace-nowrap">
                  Overview
                </div>
                <div className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-[#B0B0B3] rounded-t-lg whitespace-nowrap">
                  Insights
                </div>
                <div className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-[#B0B0B3] rounded-t-lg whitespace-nowrap">
                  Performance
                </div>
                <div className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-[#B0B0B3] rounded-t-lg whitespace-nowrap">
                  Citations
                </div>
                <div className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-[#B0B0B3] rounded-t-lg whitespace-nowrap">
                  Statements
                </div>
                <div className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-[#B0B0B3] rounded-t-lg whitespace-nowrap">
                  Keywords
                </div>
                <div className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-[#B0B0B3] rounded-t-lg whitespace-nowrap">
                  LLM Platforms
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="bg-[#0E0E10] border border-[#2A2A30] rounded-b-xl p-4 md:p-8">
            {/* Filters bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2A2A30]">
              {/* Left side - Time period buttons */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <div className="border border-[#2A2A30] bg-[#1C1C20] text-white/60 px-3 py-1.5 rounded-md text-sm">
                  Last 24 hours
                </div>
                <div className="border border-[#2A2A30] bg-[#1C1C20] text-white/60 px-3 py-1.5 rounded-md text-sm">
                  Last 7 days
                </div>
                <div className="border border-blue-500/50 bg-[#2A2A30] text-white px-3 py-1.5 rounded-md text-sm">
                  Last 30 days
                </div>
                <div className="border border-[#2A2A30] bg-[#1C1C20] text-white/60 px-3 py-1.5 rounded-md text-sm flex items-center gap-2">
                  Custom range
                  <ChevronDownIcon className="w-3 h-3" />
                </div>
              </div>

              {/* Right side - Dropdown filters */}
              <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto">
                <div className="border border-[#2A2A30] bg-[#1C1C20] text-white px-3 py-1.5 rounded-md text-sm flex items-center">
                  All Topics
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </div>
                <div className="border border-[#2A2A30] bg-[#1C1C20] text-white px-3 py-1.5 rounded-md text-sm flex items-center">
                  All Platforms
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </div>
                <div className="border border-[#2A2A30] bg-[#1C1C20] text-white px-3 py-1.5 rounded-md text-sm flex items-center">
                  All Personas
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Brand Presence Card */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-white text-xl font-bold">
                    Brand Presence
                  </h3>
                  <div className="flex items-center gap-2 bg-[#1C1C20] border border-[#2A2A30] rounded-lg px-3 py-1">
                    {/* text sm mobile */}
                    <span className="text-md font-bold text-white">63%</span>
                    <div className="w-5 h-5 rounded-full border-2 border-[#B0B0B3] flex items-center justify-center">
                      <span className="text-[#B0B0B3] text-xs">i</span>
                    </div>
                  </div>
                </div>
                {/* <div className="border border-blue-500/30 bg-blue-500/5 text-white px-3 py-1.5 rounded-md text-sm flex items-center">
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  Competitors List
                </div> */}
              </div>

              <p className="text-sm text-[#B0B0B3] mb-6">
                based on{" "}
                <span className="text-white font-semibold">
                  45k conversations
                </span>{" "}
                that we ran over the last{" "}
                <span className="text-white font-semibold">9 days</span>
              </p>

              {/* Competitor selection */}
              <div className="mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border border-[#2A2A30] bg-purple-600/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-purple-500" />

                    <span className="text-white text-sm font-medium">
                      Your Brand
                    </span>
                    <span className="text-[#B0B0B3] text-xs">You</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border border-[#2A2A30] bg-gray-600/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-[#1F2937]" />

                    <span className="text-white text-sm">Competitor A</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border border-[#2A2A30] bg-blue-900/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-blue-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />

                    <span className="text-white text-sm">Competitor B</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border border-[#2A2A30] bg-teal-800/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-teal-800"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-[#0F766E]" />

                    <span className="text-white text-sm">Competitor C</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border border-[#2A2A30] bg-amber-700/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-amber-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-[#D97706]" />

                    <span className="text-white text-sm">Competitor D</span>
                  </div>

                  <div className="flex items-center gap-2 opacity-50">
                    <div className="w-4 h-4 rounded border border-[#2A2A30]" />

                    <div className="w-2 h-2 rounded-full bg-gray-400" />

                    <span className="text-[#B0B0B3] text-sm">Competitor E</span>
                  </div>

                  <div className="flex items-center gap-2 opacity-50">
                    <div className="w-4 h-4 rounded border border-[#2A2A30]" />

                    <div className="w-2 h-2 rounded-full bg-gray-400" />

                    <span className="text-[#B0B0B3] text-sm">Competitor F</span>
                  </div>
                </div>
              </div>

              {/* Chart area */}
              <div className="relative bg-[#050506] border border-[#2A2A30] rounded-lg p-3 md:p-6 h-64 md:h-80 overflow-hidden">
                {/* Y-axis labels */}
                <div className="absolute left-2 top-6 bottom-12 flex flex-col justify-between text-xs text-[#B0B0B3]">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                {/* Chart grid */}
                <div className="ml-8 h-full relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-px bg-[#2A2A30]" />
                    ))}
                  </div>

                  {/* Simulated chart lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 1000 250"
                  >
                    {/* Main line - Your Brand (solid purple line with dots) - starts at 50, dips at Nov 4, rises at Nov 7 - NOW ON TOP */}
                    <path
                      d="M 0 125 L 50 122 L 100 118 L 150 114 L 200 110 L 250 105 L 300 100 L 350 95 L 400 90 L 450 85 L 500 80 L 550 77 L 600 74 L 650 78 L 700 75 L 750 68 L 800 63 L 850 62 L 900 61 L 950 60 L 1000 59"
                      stroke="#8B5CF6"
                      strokeWidth="2.5"
                      fill="none"
                    />

                    {/* Dots on Your Brand line - dips at Nov 4 (650), rises at Nov 7 (800) */}
                    <circle cx="0" cy="125" r="3" fill="#8B5CF6" />

                    <circle cx="50" cy="122" r="3" fill="#8B5CF6" />

                    <circle cx="100" cy="118" r="3" fill="#8B5CF6" />

                    <circle cx="150" cy="114" r="3" fill="#8B5CF6" />

                    <circle cx="200" cy="110" r="3" fill="#8B5CF6" />

                    <circle cx="250" cy="105" r="3" fill="#8B5CF6" />

                    <circle cx="300" cy="100" r="3" fill="#8B5CF6" />

                    <circle cx="350" cy="95" r="3" fill="#8B5CF6" />

                    <circle cx="400" cy="90" r="3" fill="#8B5CF6" />

                    <circle cx="450" cy="85" r="3" fill="#8B5CF6" />

                    <circle cx="500" cy="80" r="3" fill="#8B5CF6" />

                    <circle cx="550" cy="77" r="3" fill="#8B5CF6" />

                    <circle cx="600" cy="74" r="3" fill="#8B5CF6" />

                    <circle cx="650" cy="78" r="3" fill="#8B5CF6" />

                    <circle cx="700" cy="75" r="3" fill="#8B5CF6" />

                    <circle cx="750" cy="68" r="3" fill="#8B5CF6" />

                    <circle cx="800" cy="63" r="3" fill="#8B5CF6" />

                    <circle cx="850" cy="62" r="3" fill="#8B5CF6" />

                    <circle cx="900" cy="61" r="3" fill="#8B5CF6" />

                    <circle cx="950" cy="60" r="3" fill="#8B5CF6" />

                    <circle cx="1000" cy="59" r="3" fill="#8B5CF6" />

                    {/* Competitor A - dashed line (top, black) - linear until Oct 30 (position 450) */}
                    <path
                      d="M 0 50 L 50 50 L 100 50 L 150 50 L 200 50 L 250 50 L 300 50 L 350 50 L 400 50 L 450 50 L 500 54 L 600 49 L 700 56 L 800 51 L 900 54 L 1000 50"
                      stroke="#1F2937"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6,4"
                    />

                    {/* Dots on Competitor A line - linear until Oct 30 (450) */}
                    <circle cx="0" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="50" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="100" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="150" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="200" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="250" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="300" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="350" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="400" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="450" cy="50" r="2.5" fill="#1F2937" />

                    <circle cx="500" cy="54" r="2.5" fill="#1F2937" />

                    <circle cx="600" cy="49" r="2.5" fill="#1F2937" />

                    <circle cx="700" cy="56" r="2.5" fill="#1F2937" />

                    <circle cx="800" cy="51" r="2.5" fill="#1F2937" />

                    <circle cx="900" cy="54" r="2.5" fill="#1F2937" />

                    <circle cx="1000" cy="50" r="2.5" fill="#1F2937" />

                    {/* Competitor B - dashed line (middle-top, dark blue) - oscillates more */}
                    <path
                      d="M 0 75 L 100 80 L 200 72 L 300 78 L 400 70 L 500 82 L 600 74 L 700 81 L 800 73 L 900 79 L 1000 75"
                      stroke="#1E3A8A"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6,4"
                    />

                    {/* Dots on Competitor B line */}
                    <circle cx="0" cy="75" r="2.5" fill="#1E3A8A" />

                    <circle cx="100" cy="80" r="2.5" fill="#1E3A8A" />

                    <circle cx="200" cy="72" r="2.5" fill="#1E3A8A" />

                    <circle cx="300" cy="78" r="2.5" fill="#1E3A8A" />

                    <circle cx="400" cy="70" r="2.5" fill="#1E3A8A" />

                    <circle cx="500" cy="82" r="2.5" fill="#1E3A8A" />

                    <circle cx="600" cy="74" r="2.5" fill="#1E3A8A" />

                    <circle cx="700" cy="81" r="2.5" fill="#1E3A8A" />

                    <circle cx="800" cy="73" r="2.5" fill="#1E3A8A" />

                    <circle cx="900" cy="79" r="2.5" fill="#1E3A8A" />

                    <circle cx="1000" cy="75" r="2.5" fill="#1E3A8A" />

                    {/* Competitor C - dashed line (bottom, teal) - oscillates more */}
                    <path
                      d="M 0 195 L 100 200 L 200 190 L 300 198 L 400 188 L 500 202 L 600 192 L 700 201 L 800 191 L 900 199 L 1000 195"
                      stroke="#0F766E"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6,4"
                    />

                    {/* Dots on Competitor C line */}
                    <circle cx="0" cy="195" r="2.5" fill="#0F766E" />

                    <circle cx="100" cy="200" r="2.5" fill="#0F766E" />

                    <circle cx="200" cy="190" r="2.5" fill="#0F766E" />

                    <circle cx="300" cy="198" r="2.5" fill="#0F766E" />

                    <circle cx="400" cy="188" r="2.5" fill="#0F766E" />

                    <circle cx="500" cy="202" r="2.5" fill="#0F766E" />

                    <circle cx="600" cy="192" r="2.5" fill="#0F766E" />

                    <circle cx="700" cy="201" r="2.5" fill="#0F766E" />

                    <circle cx="800" cy="191" r="2.5" fill="#0F766E" />

                    <circle cx="900" cy="199" r="2.5" fill="#0F766E" />

                    <circle cx="1000" cy="195" r="2.5" fill="#0F766E" />

                    {/* Competitor D - dashed line (middle-bottom, orange/amber) - oscillates more */}
                    <path
                      d="M 0 125 L 100 130 L 200 120 L 300 128 L 400 118 L 500 132 L 600 122 L 700 131 L 800 121 L 900 129 L 1000 125"
                      stroke="#D97706"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6,4"
                    />

                    {/* Dots on Competitor D line */}
                    <circle cx="0" cy="125" r="2.5" fill="#D97706" />

                    <circle cx="100" cy="130" r="2.5" fill="#D97706" />

                    <circle cx="200" cy="120" r="2.5" fill="#D97706" />

                    <circle cx="300" cy="128" r="2.5" fill="#D97706" />

                    <circle cx="400" cy="118" r="2.5" fill="#D97706" />

                    <circle cx="500" cy="132" r="2.5" fill="#D97706" />

                    <circle cx="600" cy="122" r="2.5" fill="#D97706" />

                    <circle cx="700" cy="131" r="2.5" fill="#D97706" />

                    <circle cx="800" cy="121" r="2.5" fill="#D97706" />

                    <circle cx="900" cy="129" r="2.5" fill="#D97706" />

                    <circle cx="1000" cy="125" r="2.5" fill="#D97706" />
                  </svg>

                  {/* X-axis dates - all dates visible */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-[#B0B0B3] pt-2 overflow-x-auto">
                    <span className="whitespace-nowrap">Oct 15</span>
                    <span className="whitespace-nowrap">Oct 22</span>
                    <span className="whitespace-nowrap">Oct 24</span>
                    <span className="whitespace-nowrap">Oct 25</span>
                    <span className="whitespace-nowrap">Oct 26</span>
                    <span className="whitespace-nowrap">Oct 27</span>
                    <span className="whitespace-nowrap">Oct 28</span>
                    <span className="whitespace-nowrap">Oct 29</span>
                    <span className="whitespace-nowrap">Oct 30</span>
                    <span className="whitespace-nowrap">Oct 31</span>
                    <span className="whitespace-nowrap">Nov 01</span>
                    <span className="whitespace-nowrap">Nov 02</span>
                    <span className="whitespace-nowrap">Nov 03</span>
                    <span className="whitespace-nowrap">Nov 04</span>
                    <span className="whitespace-nowrap">Nov 05</span>
                    <span className="whitespace-nowrap">Nov 06</span>
                    <span className="whitespace-nowrap">Nov 07</span>
                    <span className="whitespace-nowrap">Nov 08</span>
                    <span className="whitespace-nowrap">Nov 09</span>
                    <span className="whitespace-nowrap">Nov 11</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect - Mobile responsive */}
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-2xl md:blur-3xl -z-10 opacity-50" />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="/pricing">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
