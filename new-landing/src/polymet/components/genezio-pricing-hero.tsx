interface GenezioPricingHeroProps {
  selectedAudience: "brands" | "agencies";
  onAudienceChange: (audience: "brands" | "agencies") => void;
}

export function GenezioPricingHero({
  selectedAudience,
  onAudienceChange
}: GenezioPricingHeroProps) {
  return (
    <section className="relative pt-24 md:pt-32 pb-3 md:pb-5 px-4 md:px-6 overflow-hidden bg-[#0A0A0B]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-purple-600/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 mt-8 md:mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Scalable solutions for your AI brand visibility
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
            {selectedAudience === "brands"
              ? "Custom Enterprise pricing that scales with your AI visibility needs."
              : "Custom Enterprise pricing with flexible add-ons"}
          </p>
        </div>

        {/* Audience Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex bg-white/5 rounded-lg p-1 border border-white/10">
            <button
              onClick={() => onAudienceChange("brands")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-md text-xs md:text-sm font-medium transition-all ${
                selectedAudience === "brands"
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => onAudienceChange("agencies")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-md text-xs md:text-sm font-medium transition-all ${
                selectedAudience === "agencies"
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              For Agencies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
