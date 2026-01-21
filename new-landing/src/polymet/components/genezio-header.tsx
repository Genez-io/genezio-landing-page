import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  TrendingUpIcon,
  TargetIcon,
  ShoppingBagIcon,
  BookOpenIcon,
  FileTextIcon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";


export function GenezioHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformMenuOpen, setPlatformMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const platformMenuRef = useRef<HTMLDivElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);

  // Close platform menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        platformMenuRef.current &&
        !platformMenuRef.current.contains(event.target as Node)
      ) {
        setPlatformMenuOpen(false);
      }
    }

    if (platformMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [platformMenuOpen]);

  // Close resources menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesMenuRef.current &&
        !resourcesMenuRef.current.contains(event.target as Node)
      ) {
        setResourcesMenuOpen(false);
      }
    }

    if (resourcesMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [resourcesMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-white text-xl font-semibold">
            <img
              src="/images/logo-white.svg"
              alt="Genezio Logo"
              className="h-8 w-auto"
            />
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Platform Dropdown */}
          <div className="relative" ref={platformMenuRef}>
            <button
              onClick={() => setPlatformMenuOpen(!platformMenuOpen)}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
            >
              Platform
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${platformMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Mega Menu Dropdown */}
            {platformMenuOpen && (
              <div className="absolute top-full left-0 mt-6 w-[400px] bg-[#0E0E10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-8 w-4 h-4 bg-[#0E0E10] border-l border-t border-white/10 rotate-45" />

                <div className="relative">
                  <div className="p-6">
                      <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">For Teams</div>
                      <div className="space-y-1">
                      {/* Increase Lead Generation */}
                      <Link
                        to="/conversational-brand-presence"
                        onClick={() => setPlatformMenuOpen(false)}
                        className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                            <TrendingUpIcon className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-emerald-400 transition-colors">
                              Increase Lead Generation
                            </div>
                            <div className="text-white/60 text-xs leading-relaxed">
                              Conversational Brand Presence
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Increase Conversion */}
                      <Link
                        to="/increase-conversion"
                        onClick={() => setPlatformMenuOpen(false)}
                        className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <TargetIcon className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-blue-400 transition-colors">
                              Increase Conversion
                            </div>
                            <div className="text-white/60 text-xs leading-relaxed">
                              Marketing Agent Performance
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Increase In-Chat Shopping */}
                      <Link
                        // to="/increase-in-chat-shopping"
                        to="#"
                        onClick={() => setPlatformMenuOpen(false)}
                        className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                            <ShoppingBagIcon className="w-5 h-5 text-purple-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                              <div className="text-white font-semibold text-sm group-hover:text-purple-400 transition-colors">
                                Increase In-Chat Shopping
                              </div>
                              <span className="px-2.5 py-1 text-[10px] font-semibold bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30 whitespace-nowrap flex-shrink-0">
                                COMING SOON
                              </span>
                            </div>
                            <div className="text-white/60 text-xs leading-relaxed">
                              E-commerce Performance
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesMenuRef}>
            <button
              onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
            >
              Resources
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${resourcesMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Resources Dropdown Menu */}
            {resourcesMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[280px] bg-[#0E0E10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0E0E10] border-l border-t border-white/10 rotate-45" />

                <div className="relative p-4">
                  <div className="space-y-1">
                    {/* Glossary */}
                    <a
                      href="/glossary"
                      onClick={() => setResourcesMenuOpen(false)}
                      className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <BookOpenIcon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-blue-400 transition-colors">
                            Glossary
                          </div>
                          <div className="text-white/60 text-xs leading-relaxed">
                            AI Search terminology guide
                          </div>
                        </div>
                      </div>
                    </a>

                    {/* Blog */}
                    <a
                      href="/blog/"
                      onClick={() => setResourcesMenuOpen(false)}
                      className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <FileTextIcon className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <div className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors">
                              Blog
                            </div>
                          </div>
                          <div className="text-white/60 text-xs leading-relaxed">
                            Insights & best practices
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="/pricing"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            Pricing
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
        <Button
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold px-6 rounded-lg transition-all"
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC', '_blank')}
          >
            Book a Demo
          </Button>
          <a href="https://app.genezio.ai/sign-up">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold px-6 rounded-lg transition-all">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {/* Platform Mobile Submenu */}
            <div className="space-y-2">
              <div className="text-white/80 text-sm font-medium py-2">
                Platform
              </div>
              <div className="pl-4 space-y-3 border-l-2 border-white/10">
                <div className="space-y-2">
                  <a
                    href="/conversational-brand-presence"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    <div className="text-white text-sm font-medium">
                      Increase Lead Generation
                    </div>
                    <div className="text-white/60 text-xs">
                      Conversational Brand Presence
                    </div>
                  </a>
                  <a
                    href="/increase-conversion"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    <div className="text-white text-sm font-medium">
                      Increase Conversion
                    </div>
                    <div className="text-white/60 text-xs">
                      Marketing Agent Performance
                    </div>
                  </a>
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="text-white text-sm font-medium">
                        Increase In-Chat Shopping
                      </div>
                      <span className="px-2.5 py-1 text-[10px] font-semibold bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30 whitespace-nowrap flex-shrink-0">
                        COMING SOON
                      </span>
                    </div>
                    <div className="text-white/60 text-xs">
                      E-commerce Performance
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources Mobile Submenu */}
            <div className="space-y-2">
              <div className="text-white/80 text-sm font-medium py-2">
                Resources
              </div>
              <div className="pl-4 space-y-3 border-l-2 border-white/10">
                <div className="space-y-2">
                  <a
                    href="/glossary"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    <div className="text-white text-sm font-medium">
                      Glossary
                    </div>
                    <div className="text-white/60 text-xs">
                      AI Search terminology guide
                    </div>
                  </a>
                  <a
                    href="/blog/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-white text-sm font-medium">Blog</div>
                    </div>
                    <div className="text-white/60 text-xs">
                      Insights & best practices
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
            >
              Pricing
            </a>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <a href="https://app.genezio.ai/sign-up" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold px-6 rounded-lg transition-all w-full">
                  Get Started
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
