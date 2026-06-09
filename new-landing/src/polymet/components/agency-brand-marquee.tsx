import { useEffect, useRef } from "react";

export const AGENCY_BRANDS = [
  { name: "404 Agency", logo: "/images/404-agency-logo.svg", invert: true },
  { name: "Data Revolt", logo: "/images/data-revolt-logo.svg", invert: true },
  { name: "Orange", logo: "/images/orange-logo.svg" },
  { name: "PPC Energy", logo: "/images/ppc-energy-logo.svg" },
  { name: "SCUT", logo: "/images/scut-logo.svg" },
  { name: "ErsteGroup", logo: "/images/erste-logo.svg" },
  { name: "BT", logo: "/images/bt-logo.svg" },
  { name: "CBRE", logo: "/images/cbre-logo.png" },
  { name: "Kaufland", logo: "/images/kaufland-logo.svg" },
  { name: "Pluxee", logo: "/images/pluxee-logo.png" },
  { name: "SmartBill", logo: "/images/smartbill-logo.svg" },
  { name: "DruidAI", logo: "/images/druid-logo.svg" },
  { name: "Decathlon", logo: "/images/decathlon-logo.svg" },
] as const;

type Brand = (typeof AGENCY_BRANDS)[number];

function brandLogoFilter(brand: Brand, hovered: boolean) {
  const opacity = hovered ? 0.9 : 0.5;

  if ("invert" in brand && brand.invert) {
    return `brightness(0) invert(1) opacity(${opacity})`;
  }

  return `grayscale(1) opacity(${opacity})`;
}

const LOGO_ROW_HEIGHT = "h-12 sm:h-16 md:h-20";

function logoImageClass(name: Brand["name"]) {
  switch (name) {
    case "BT":
      return "h-9 w-auto sm:h-12 md:h-16";
    case "404 Agency":
      return "h-9 w-auto sm:h-12 md:h-16 max-w-[6rem] md:max-w-[7.5rem]";
    case "Data Revolt":
      return "h-8 w-auto sm:h-11 md:h-14 max-w-[9rem] md:max-w-[11rem]";
    case "Decathlon":
      return "h-10 w-auto sm:h-14 md:h-[4.5rem]";
    default:
      return "h-10 w-auto sm:h-14 md:h-20";
  }
}

function BrandLogo({ brand }: { brand: Brand }) {
  const { name, logo } = brand;

  return (
    <div
      className={`flex shrink-0 items-center justify-center px-5 md:px-8 group ${LOGO_ROW_HEIGHT}`}
    >
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className={`object-contain object-center transition-transform duration-300 group-hover:scale-110 ${logoImageClass(name)}`}
        style={{ filter: brandLogoFilter(brand, false) }}
        onMouseEnter={(event) => {
          event.currentTarget.style.filter = brandLogoFilter(brand, true);
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.filter = brandLogoFilter(brand, false);
        }}
      />
    </div>
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
