import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import { Link } from "react-router";

export function AgencyHeroSection() {
  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050506] pt-16">
        {/* Simplified background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12 px-2 sm:px-4 md:px-16 py-4 md:py-8 mt-0 md:mt-4">
            {/* Badge above title */}
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <SparklesIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-white/80 font-medium text-xs sm:text-sm">
                  Loved by agencies. Trusted by brands.
                </span>
              </div>
            </div>

            {/* Main heading - simplified and more readable */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 leading-[1.1] tracking-tight text-white">
              Increase <span className="text-blue-400">AI visibility</span>
              <br />
              for every client
            </h1>

            {/* Subheading - clearer and more concise */}
            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Monitor brands, deliver digital strategies, own AI presence.
            </p>

            {/* CTA buttons - Get Started + Contact Us */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4 max-w-md sm:max-w-none mx-auto">
              <Link to="https://app.genezio.ai/sign-up" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-500/30 w-full"
                >
                  Get Started
                </Button>
              </Link>
              <a target="_blank" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="w-full sm:w-auto">
                <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/20 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 w-full sm:w-auto"
              >
                Contact Us
              </Button>
              </a>
            </div>

            {/* Brands Section - Horizontal Scrolling Animation */}
            <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-32 overflow-hidden">
              <div className="relative">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-32 bg-gradient-to-r from-[#050506] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-32 bg-gradient-to-l from-[#050506] to-transparent z-10" />

                {/* Scrolling container */}
                <div className="flex animate-scroll">
                  <div className="flex gap-8 sm:gap-10 md:gap-16 px-2 sm:px-3 md:px-6">
                    {[
                      {
                        name: "Decathlon",
                        logo: "/images/decathlon-logo.svg",
                      },
                      {
                        name: "Orange",
                        logo: "/images/orange-logo.svg",
                      },
                      {
                        name: "PPC Energy",
                        logo: "/images/ppc-energy-logo.svg",
                      },
                      {
                        name: "SCUT",
                        logo: "/images/scut-logo.svg",
                      },
                      {
                        name: "ErsteGroup",
                        logo: "/images/erste-logo.svg",
                      },
                      {
                        name: "BT",
                        logo: "/images/bt-logo.svg",
                      },
                      {
                        name: "CBRE",
                        logo: "/images/cbre-logo.png",
                      },
                      {
                        name: "Kaufland",
                        logo: "/images/kaufland-logo.svg",
                      },
                      {
                        name: "Pluxee",
                        logo: "/images/pluxee-logo.png",
                      },
                      {
                        name: "SmartBill",
                        logo: "/images/smartbill-logo.svg",
                      },
                      {
                        name: "DruidAI",
                        logo: "/images/druid-logo.svg",
                      },
                      {
                        name: "Decathlon",
                        logo: "/images/decathlon-logo.svg",
                      },
                      {
                        name: "Orange",
                        logo: "/images/orange-logo.svg",
                      },
                      {
                        name: "PPC Energy",
                        logo: "/images/ppc-energy-logo.svg",
                      },
                      {
                        name: "SCUT",
                        logo: "/images/scut-logo.svg",
                      },
                      {
                        name: "ErsteGroup",
                        logo: "/images/erste-logo.svg",
                      },
                      {
                        name: "BT",
                        logo: "/images/bt-logo.svg",
                      },
                      {
                        name: "CBRE",
                        logo: "/images/cbre-logo.png",
                      },
                      {
                        name: "Kaufland",
                        logo: "/images/kaufland-logo.svg",
                      },
                      {
                        name: "Pluxee",
                        logo: "/images/pluxee-logo.png",
                      },
                      {
                        name: "SmartBill",
                        logo: "/images/smartbill-logo.svg",
                      },
                      {
                        name: "DruidAI",
                        logo: "/images/druid-logo.svg",
                      },
                    ].map((brand, index) => (
                      <div
                        key={`brand-1-${index}`}
                        className="flex items-center justify-center flex-shrink-0 group"
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className={`w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 grayscale opacity-50 group-hover:opacity-80 transition-all duration-300 object-contain ${
                            brand.name === "BT" ? "scale-75" : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
