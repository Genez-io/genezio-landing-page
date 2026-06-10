import { useEffect, useRef } from "react";

export const AGENCY_BRANDS = [
  {
    name: "404 Agency",
    logo: "/images/404-agency-logo.svg",
    url: "https://www.404.agency/en/",
    invert: true,
  },
  {
    name: "Data Revolt",
    logo: "/images/data-revolt-logo.svg",
    url: "https://datarevolt.agency/",
    invert: true,
  },
  {
    name: "Orange",
    logo: "/images/orange-logo.svg",
    url: "https://www.orange.ro",
  },
  {
    name: "PPC Energy",
    logo: "/images/ppc-energy-logo.svg",
    url: "https://www.ppcenergy.ro",
  },
  {
    name: "SCUT",
    logo: "/images/scut-logo.svg",
    url: "https://www.scut.com",
  },
  {
    name: "ErsteGroup",
    logo: "/images/erste-logo.svg",
    url: "https://www.erstegroup.com",
  },
  {
    name: "BT",
    logo: "/images/bt-logo.svg",
    url: "https://www.bancatransilvania.ro",
  },
  {
    name: "CBRE",
    logo: "/images/cbre-logo.png",
    url: "https://www.cbre.com",
  },
  {
    name: "Kaufland",
    logo: "/images/kaufland-logo.svg",
    url: "https://www.kaufland.ro",
  },
  {
    name: "Pluxee",
    logo: "/images/pluxee-logo.png",
    url: "https://www.pluxee.ro",
  },
  {
    name: "SmartBill",
    logo: "/images/smartbill-logo.svg",
    url: "https://www.smartbill.ro",
  },
  {
    name: "DruidAI",
    logo: "/images/druid-logo.svg",
    url: "https://www.druidai.com",
  },
  {
    name: "Decathlon",
    logo: "/images/decathlon-logo.svg",
    url: "https://www.decathlon.ro",
  },
] as const;

type Brand = (typeof AGENCY_BRANDS)[number];

function brandLogoFilter(brand: Brand, hovered: boolean) {
  const opacity = hovered ? 0.9 : 0.5;

  if ("invert" in brand && brand.invert) {
    return `brightness(0) invert(1) opacity(${opacity})`;
  }

  return `grayscale(1) opacity(${opacity})`;
}

const LOGO_SLOT =
  "h-12 w-28 sm:h-14 sm:w-32 md:h-16 md:w-36 flex shrink-0 items-center justify-center px-4 md:px-6";

function BrandLogo({ brand }: { brand: Brand }) {
  const { name, logo, url } = brand;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} website`}
      className={`group ${LOGO_SLOT} cursor-pointer`}
    >
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-full max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
        style={{ filter: brandLogoFilter(brand, false) }}
        onMouseEnter={(event) => {
          event.currentTarget.style.filter = brandLogoFilter(brand, true);
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.filter = brandLogoFilter(brand, false);
        }}
      />
    </a>
  );
}

function BrandTrack() {
  return (
    <div className="flex items-center">
      {AGENCY_BRANDS.map((brand) => (
        <BrandLogo key={brand.name} brand={brand} />
      ))}
    </div>
  );
}

export function AgencyBrandMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    let frameId: number;

    const step = () => {
      const el = trackRef.current;

      if (el && !pausedRef.current) {
        offsetRef.current -= 0.55;

        const resetPoint = el.scrollWidth / 2;
        if (-offsetRef.current >= resetPoint) {
          offsetRef.current = 0;
        }

        el.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-16 md:w-32 bg-gradient-to-r from-[#050506] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-16 md:w-32 bg-gradient-to-l from-[#050506] to-transparent" />

      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        aria-label="Trusted agency and brand logos"
      >
        <BrandTrack />
        <BrandTrack />
      </div>
    </div>
  );
}
