"use client";

import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "./theme-provider";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

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

  const scrollToCtaSection = () => {
    const ctaSection = document.getElementById("cta-buttons");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white dark:bg-slate-900 w-full shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center space-x-2"
            >
              <div className="w-32 h-32 flex items-center justify-center">
                {theme === "dark" ? (
                  <Image
                    src="/genezio-logo-white.svg"
                    alt="genezio logo"
                    width={128}
                    height={128}
                  />
                ) : (
                  <Image src="/genezio-logo-dark.svg" alt="genezio logo" width={128} height={128} />
                )}
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white"></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
                onClick={toggleProducts}
              >
                Products
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button
                      onClick={() => (window.location.href = "/")}
                      className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                    >
                      AI Testing Platform
                    </button>
                    <button
                      onClick={() => (window.location.href = "/deployment-platform/")}
                      className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                    >
                      Deployment Platform
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => (window.location.href = "/deployment-platform/blog/")}
              className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Blog
            </button>

            <button
              onClick={scrollToCtaSection}
              className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Contact Us
            </button>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div>
              <button
                onClick={toggleProducts}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Products
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="pl-4">
                  <button
                    onClick={() => (window.location.href = "/")}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    AI Testing Platform
                  </button>
                  <button
                    onClick={() => (window.location.href = "/deployment-platform/")}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Deployment Platform
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={scrollToCtaSection}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
