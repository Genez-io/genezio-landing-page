import React, { useEffect, useRef } from "react";

export function GenezioTrustSection() {
  const companies = [
    {
      name: "ERSTE BCR",
      logo: "images/erste-logo.svg",
    },
    {
      name: "slsp",
      logo: "images/logo-slsp.svg",
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
    {
      name: "Bitdefender",
      logo: "images/bitdefender.png",
    },
    {
      name: "ERSTE BCR",
      logo: "images/erste-logo.svg",
    },
    {
      name: "slsp",
      logo: "images/logo-slsp.svg",
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
    {
      name: "Bitdefender",
      logo: "images/bitdefender.png",
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
          <Marquee>
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
              >
                <div className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <img
                    src={company.logo}
                    alt={company.name}
                    width={160}
                    height={80}
                    loading="lazy"
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
          </Marquee>
        </div>
      </div>
    </section>
  );
}

type MarqueeProps = {
  children: React.ReactNode;
};

function Marquee({ children }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    let frameId: number;

    const step = () => {
      const el = containerRef.current;

      if (el && !pausedRef.current) {
        const speed = 0.6; // pixels per frame
        offsetRef.current -= speed;

        const contentWidth = el.scrollWidth;
        const resetPoint = contentWidth / 2;

        if (-offsetRef.current >= resetPoint) {
          offsetRef.current = 0;
        }

        el.style.transform = `translateX(${offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex will-change-transform"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      {children}
      {children}
    </div>
  );
}
