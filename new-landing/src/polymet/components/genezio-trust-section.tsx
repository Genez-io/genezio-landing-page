import React, { useEffect, useRef } from "react";

const TRUSTED_COMPANIES = [
  {
    name: "ERSTE BCR",
    logo: "images/erste-logo.svg",
    url: "https://www.bcr.ro",
  },
  {
    name: "slsp",
    logo: "images/logo-slsp.svg",
    url: "https://www.slsp.sk",
  },
  {
    name: "Banca Transilvania",
    logo: "images/bt-logo.svg",
    url: "https://www.bancatransilvania.ro",
  },
  {
    name: "Pluxee",
    logo: "images/pluxee-logo.png",
    url: "https://www.pluxee.ro",
  },
  {
    name: "Druid",
    logo: "images/druid-logo.svg",
    url: "https://www.druidai.com",
  },
  {
    name: "FlowX",
    logo: "images/flowx-logo.png",
    url: "https://www.flowx.ai",
  },
  {
    name: "CBRE",
    logo: "images/cbre-logo.png",
    url: "https://www.cbre.com",
  },
  {
    name: "Bitdefender",
    logo: "images/bitdefender.png",
    url: "https://www.bitdefender.com",
  },
  {
    name: "Lexters",
    logo: "images/lexters-logo.svg",
    url: "https://lexters.com",
  },
  {
    name: "Auchan",
    logo: "images/auchan-logo.svg",
    url: "https://www.auchan.ro",
    slot: "wide",
  },
  {
    name: "Vodafone",
    logo: "images/vodafone-logo.svg",
    url: "https://www.vodafone.com",
    slot: "compact",
  },
] as const;

type TrustedCompany = (typeof TRUSTED_COMPANIES)[number];

function logoSlotClass(company: TrustedCompany) {
  const slot = "slot" in company ? company.slot : undefined;

  switch (slot) {
    case "wide":
      return "w-36 h-16 md:w-44 md:h-20";
    case "compact":
      return "w-14 h-14 md:w-16 md:h-16";
    default:
      return "w-32 h-16 md:w-40 md:h-20";
  }
}

function logoFilter(hovered: boolean) {
  const opacity = hovered ? 1 : 0.6;

  return hovered
    ? `brightness(0) invert(1) opacity(${opacity}) drop-shadow(0 0 20px rgba(192, 132, 252, 0.6))`
    : `brightness(0) invert(1) opacity(${opacity})`;
}

export function GenezioTrustSection() {
  const companies = TRUSTED_COMPANIES;

  return (
    <section className="py-12 md:py-20 pb-20 md:pb-32 bg-gradient-to-b from-[#050506] via-[#0A0A0F] to-[#050506] border-t border-[#1C1C20] -mb-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-center text-xs md:text-sm text-[#B0B0B3] uppercase tracking-wider mb-8 md:mb-12 font-medium">
          Trusted by teams at
        </p>

        <div className="relative overflow-hidden">
          {/* Infinite scrolling carousel */}
          <Marquee>
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
              >
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${company.name} website`}
                  className={`relative flex items-center justify-center transition-all duration-300 group-hover:scale-110 cursor-pointer ${logoSlotClass(company)}`}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    width={160}
                    height={80}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain object-center transition-all duration-300"
                    style={{ filter: logoFilter(false) }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = logoFilter(true);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = logoFilter(false);
                    }}
                  />
                </a>
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
