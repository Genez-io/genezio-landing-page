import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  BookOpenIcon,
  BookMarkedIcon,
  FileTextIcon,
  FlaskConicalIcon,
  UsersIcon,
  TrophyIcon,
  ScanSearchIcon,
  BarChart3Icon,
  GlobeIcon,
  PlugIcon,
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
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group" aria-label="Genezio Homepage">
          <span className="text-white text-xl font-semibold">
            <img
              src="/images/logo-white.svg"
              alt="Genezio Logo"
              width={120}
              height={32}
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
              <div className="absolute top-full left-0 mt-6 w-[720px] bg-[#0E0E10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-8 w-4 h-4 bg-[#0E0E10] border-l border-t border-white/10 rotate-45" />

                <div className="relative">
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Products column */}
                    <div>
                      <div className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                        Products
                      </div>
                      <div className="space-y-1">
                        {/* Website Analyzer */}
                        <Link
                          to="/website-analyzer/"
                          onClick={() => setPlatformMenuOpen(false)}
                          className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                              <GlobeIcon className="w-5 h-5 text-white/70" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">
                                Website Analyzer
                              </div>
                              <div className="text-white/60 text-xs leading-relaxed">
                                Instant AI-readiness site audit
                              </div>
                            </div>
                          </div>
                        </Link>

                        {/* Content Hub */}
                        <Link
                          to="/content-hub/"
                          onClick={() => setPlatformMenuOpen(false)}
                          className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                              <FileTextIcon className="w-5 h-5 text-white/70" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">
                                Content Hub
                              </div>
                              <div className="text-white/60 text-xs leading-relaxed">
                                Data-backed content briefs
                              </div>
                            </div>
                          </div>
                        </Link>

                        {/* Content Analysis */}
                        <Link
                          to="/content-analysis/"
                          onClick={() => setPlatformMenuOpen(false)}
                          className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                              <ScanSearchIcon className="w-5 h-5 text-white/70" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">
                                Content Analysis
                              </div>
                              <div className="text-white/60 text-xs leading-relaxed">
                                Crawlability & citable-content audits
                              </div>
                            </div>
                          </div>
                        </Link>

                        {/* Content Analysis (moved below) → AI Agent Analytics */}
                        <Link
                          to="/increase-conversion/"
                          onClick={() => setPlatformMenuOpen(false)}
                          className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                              <BarChart3Icon className="w-5 h-5 text-white/70" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">
                                AI Agent Analytics
                              </div>
                              <div className="text-white/60 text-xs leading-relaxed">
                                Convert more from agent conversations
                              </div>
                            </div>
                          </div>
                        </Link>

                        {/* In-Chat Shopping */}
                        <Link
                          to="/in-chat-shopping/"
                          onClick={() => setPlatformMenuOpen(false)}
                          className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                              <ShoppingBagIcon className="w-5 h-5 text-white/70" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">
                                In-Chat Shopping
                              </div>
                              <div className="text-white/60 text-xs leading-relaxed">
                                AI shopping & agentic commerce
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right column: Build on Genezio + Partners */}
                    <div className="md:border-l md:border-white/10 md:pl-6">
                      <div className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                        Build on Genezio
                      </div>
                      {/* MCP */}
                      <Link
                        to="/mcp/"
                        onClick={() => setPlatformMenuOpen(false)}
                        className="group block p-3 rounded-xl hover:bg-white/5 transition-all mb-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <PlugIcon className="w-5 h-5 text-white/70" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">
                              MCP
                            </div>
                            <div className="text-white/60 text-xs leading-relaxed">
                              Your data in any AI assistant
                            </div>
                          </div>
                        </div>
                      </Link>

                      <div className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                        Partners
                      </div>
                      <Link
                        to="/agencies/"
                        onClick={() => setPlatformMenuOpen(false)}
                        className="group block p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/15 transition-all"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <UsersIcon className="w-5 h-5 text-white/70" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm mb-1 group-hover:text-white transition-colors">
                              For Agencies
                            </div>
                            <div className="text-white/60 text-xs leading-relaxed">
                              Manage multiple brands effortlessly
                            </div>
                          </div>
                        </div>

                        {/* Visual: Multiple Brand Cards */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center px-2 gap-2">
                              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-white/60" />
                              </div>
                              <div className="text-[10px] text-white/70 font-medium">
                                Brand A
                              </div>
                            </div>
                            <div className="text-[10px] text-emerald-400 font-semibold">
                              ↑ 24%
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center px-2 gap-2">
                              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-white/60" />
                              </div>
                              <div className="text-[10px] text-white/70 font-medium">
                                Brand B
                              </div>
                            </div>
                            <div className="text-[10px] text-emerald-400 font-semibold">
                              ↑ 18%
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center px-2 gap-2">
                              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-white/60" />
                              </div>
                              <div className="text-[10px] text-white/70 font-medium">
                                Brand C
                              </div>
                            </div>
                            <div className="text-[10px] text-emerald-400 font-semibold">
                              ↑ 31%
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[560px] bg-[#0E0E10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0E0E10] border-l border-t border-white/10 rotate-45" />

                <div className="relative p-6">
                  <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      heading: "Insights",
                      items: [
                        {
                          href: "/blog/",
                          Icon: FileTextIcon,
                          title: "Blog",
                          desc: "Insights & best practices",
                        },
                        {
                          href: "/research/",
                          Icon: FlaskConicalIcon,
                          title: "Research",
                          desc: "Original AI search studies",
                        },
                        {
                          href: "/industry-leaderboards/",
                          Icon: TrophyIcon,
                          title: "Leaderboards",
                          desc: "Industry AI visibility rankings",
                        },
                      ],
                    },
                    {
                      heading: "Reference",
                      items: [
                        {
                          href: "/glossary/",
                          Icon: BookOpenIcon,
                          title: "Glossary",
                          desc: "AI Search terminology guide",
                        },
                        {
                          href: "/docs/",
                          Icon: BookMarkedIcon,
                          title: "Docs",
                          desc: "Product documentation & guides",
                        },
                      ],
                    },
                  ].map((group, gi) => (
                    <div
                      key={group.heading}
                      className={gi > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""}
                    >
                      <div className="px-3 mb-2 text-white/40 text-[11px] font-semibold uppercase tracking-[0.2em]">
                        {group.heading}
                      </div>
                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const Icon = item.Icon;
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              onClick={() => setResourcesMenuOpen(false)}
                              className="group block p-3 rounded-xl hover:bg-white/5 transition-all"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-5 h-5 text-white/70" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">
                                    {item.title}
                                  </div>
                                  <div className="text-white/60 text-xs leading-relaxed">
                                    {item.desc}
                                  </div>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="/pricing/"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            Pricing
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.genezio.ai/sign-in">
            <Button
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold px-6 rounded-lg transition-all"
            >
              Login
            </Button>
          </a>
          <Button
            className="bg-emerald-400 hover:bg-emerald-300 text-black text-sm font-semibold px-6 rounded-lg transition-all"
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC', '_blank')}
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
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
            <div className="space-y-4">
              <div>
                <div className="text-white/80 text-sm font-medium py-2">
                  Platform
                </div>
                <div className="pl-4 space-y-3 border-l-2 border-white/10">
                  <div className="space-y-2">
                    <a
                      href="/website-analyzer/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">
                        Website Analyzer
                      </div>
                      <div className="text-white/60 text-xs">
                        Instant AI-readiness site audit
                      </div>
                    </a>
                    <a
                      href="/content-hub/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">
                        Content Hub
                      </div>
                      <div className="text-white/60 text-xs">
                        Data-backed content briefs
                      </div>
                    </a>
                    <a
                      href="/content-analysis/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">
                        Content Analysis
                      </div>
                      <div className="text-white/60 text-xs">
                        Crawlability & citable-content audits
                      </div>
                    </a>
                    <a
                      href="/increase-conversion/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">
                        AI Agent Analytics
                      </div>
                      <div className="text-white/60 text-xs">
                        Convert more from agent conversations
                      </div>
                    </a>
                    <a
                      href="/in-chat-shopping/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">
                        In-Chat Shopping
                      </div>
                      <div className="text-white/60 text-xs">
                        AI shopping & agentic commerce
                      </div>
                    </a>
                    <a
                      href="/mcp/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">MCP</div>
                      <div className="text-white/60 text-xs">
                        Your data in any AI assistant
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Partners Mobile Submenu */}
              <div>
                <div className="text-white/80 text-sm font-medium py-2">
                  Partners
                </div>
                <div className="pl-4 space-y-3 border-l-2 border-white/10">
                  <a
                    href="/agencies/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    <div className="text-white text-sm font-medium">
                      For Agencies
                    </div>
                    <div className="text-white/60 text-xs">
                      Manage multiple brands effortlessly
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
              <div className="pl-4 space-y-4 border-l-2 border-white/10">
                <div>
                  <div className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.2em] mb-1">
                    Insights
                  </div>
                  <div className="space-y-2">
                    <a
                      href="/blog/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">Blog</div>
                      <div className="text-white/60 text-xs">
                        Insights & best practices
                      </div>
                    </a>
                    <a
                      href="/research/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">
                        Research
                      </div>
                      <div className="text-white/60 text-xs">
                        Original AI search studies
                      </div>
                    </a>
                    <a
                      href="/industry-leaderboards/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">
                        Leaderboards
                      </div>
                      <div className="text-white/60 text-xs">
                        Industry AI visibility rankings
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.2em] mb-1">
                    Reference
                  </div>
                  <div className="space-y-2">
                    <a
                      href="/glossary/"
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
                      href="/docs/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-white text-sm font-medium">Docs</div>
                      <div className="text-white/60 text-xs">
                        Product documentation &amp; guides
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/pricing/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
            >
              Pricing
            </a>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-emerald-400 hover:bg-emerald-300 text-black text-sm font-semibold px-6 rounded-lg transition-all w-full">
                  Talk to Sales
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
