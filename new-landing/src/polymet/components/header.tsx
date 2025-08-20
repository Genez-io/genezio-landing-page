import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "@/polymet/components/theme-provider";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    // navigate(`/${page}`);
    window.location.href = `/${page}`; // Use location.href to navigate
  };

  const scrollToPricingSection = () => {
    const pricingSection = document.getElementById("chatbot-optimization-pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 bg-white dark:bg-slate-900 w-full shadow-sm"
      id="863gu5"
    >
      <div className="container mx-auto px-4 md:px-6" id="356od7">
        <div className="flex items-center justify-between h-16" id="38ihk2">
          <div className="flex items-center" id="1odzvo">
            <button
              onClick={() => {
                setCurrentPage("");
                window.location.href = "/";
              }}
              className="flex items-center space-x-2"
              id="vzsnm1"
            >
              <div className="w-32 h-32 flex items-center justify-center" id="wf9atr">
                {theme === "dark" ? (
                  <img
                    src="https://genezio.com/images/logo-white.svg"
                    alt="genezio logo"
                    className="w-full h-full object-contain"
                    id="gw71gi"
                  />
                ) : (
                  <img
                    src="https://genezio.com/images/logo-black.svg"
                    alt="genezio logo"
                    className="w-full h-full object-contain"
                    id="gw71gi"
                  />
                )}
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white" id="etfpa6"></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="fjcq9d">
            <button
              onClick={() => navigateTo("brand-presence")}
              className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
              id="xns7bm"
            >
              Generative Search
            </button>
            <button
              onClick={() => navigateTo("chatbot-optimization")}
              className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
              id="xns7bm"
            >
              Optimization Platform
            </button>
            <button
              onClick={scrollToPricingSection}
              className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
              id="xns7bm"
            >
              Contact Us
            </button>

            <a
              href="http://genezio.com/blog"
              className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
              id="1q4j5k"
            >
              Blog
            </a>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              id="9dfv6f"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" id="080v9h" />
              ) : (
                <MoonIcon className="h-5 w-5" id="ve1j4x" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2" id="ovcsni">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              id="idyllc"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" id="lwmzb2" />
              ) : (
                <MoonIcon className="h-5 w-5" id="c36ers" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
              id="3zyvt2"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" id="5yqoyz" />
              ) : (
                <MenuIcon className="h-6 w-6" id="sqhqcc" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          id="d53o3c"
        >
          <div className="px-2 pt-2 pb-3 space-y-1" id="o4ycmc">
            <button
              onClick={() => navigateTo("brand-presence")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              id="9hv9zj"
            >
              Generative Search
            </button>
            <button
              onClick={() => navigateTo("chatbot-optimization")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Optimization Platform
            </button>

            <button
              onClick={scrollToPricingSection}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              id="0qqvgp"
            >
              Contact Us
            </button>

            {/* blog  */}
            <button
              onClick={() => (window.location.href = "/blog")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              id="1q4j5k"
            >
              Blog
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
