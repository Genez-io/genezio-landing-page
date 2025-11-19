export function GenezioTrustSection() {
  const companies = [
    {
      name: "ERSTE BCR",
      logo: "images/erste-logo.svg",
    },
    {
      name: "Banca Transilvania",
      logo: "images/bt-logo.svg",
    },
    {
      name: "Pluxee",
      logo: "images/pluxee-logo.png",
    },
    {
      name: "Druid",
      logo: "images/druid-logo.svg",
    },
    {
      name: "FlowX",
      logo: "images/flowx-logo.png",
    },
    {
      name: "CBRE",
      logo: "images/cbre-logo.png",
    },
  ];

  return (
    <section className="py-12 md:py-20 pb-20 md:pb-32 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506] border-t border-[#1C1C20] -mb-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-center text-xs md:text-sm text-[#B0B0B3] uppercase tracking-wider mb-8 md:mb-12 font-medium">
          Trusted by teams at
        </p>

        <div className="relative overflow-hidden">
          {/* Infinite scrolling carousel */}
          <div
            className="flex"
            style={{
              animation: "scroll 15s linear infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
              >
                <div className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    style={{
                      filter: "brightness(0) invert(1) opacity(0.6)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter =
                        "brightness(0) invert(1) opacity(1) drop-shadow(0 0 20px rgba(192, 132, 252, 0.6))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "brightness(0) invert(1) opacity(0.6)";
                    }}
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
              >
                <div className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    style={{
                      filter: "brightness(0) invert(1) opacity(0.6)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter =
                        "brightness(0) invert(1) opacity(1) drop-shadow(0 0 20px rgba(192, 132, 252, 0.6))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "brightness(0) invert(1) opacity(0.6)";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `,
            }}
          />
        </div>
      </div>
    </section>
  );
}
