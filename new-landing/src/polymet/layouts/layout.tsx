import React, { useEffect } from "react";
import { Header } from "@/polymet/components/header";
import { ThemeProvider } from "@/polymet/components/theme-provider";
import { useLocation, Link } from "react-router-dom";
import BrandPopup from "../components/brandPopup";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Layout({ children, currentPage, setCurrentPage }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="ai-agents-audit-theme">
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {location.pathname === "/" && <BrandPopup />}
        <main>{children}</main>
        <footer className="bg-slate-50 dark:bg-slate-800 py-12 border-t border-slate-200 dark:border-slate-700">
          <div className="container mx-auto px-4 md:px-6" id="jrk11b">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" id="qvm33w">
              {/* Company Info */}
              <div className="md:col-span-1" id="gm92qi">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2" id="tzwr5n">
                  Genezio
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4" id="at0z8m">
                  Maximize your Chatbot's ROI with enterprise-grade AI testing and optimization.
                </p>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
                  Solutions
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/chatbot-optimization"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      Chatbot Optimization Platform
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brand-presence"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      Brand Analysis Tool
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
                  Contact
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:hello@genezio.ai"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      hello@genezio.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
                  Support
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/dpa"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      Data Processing Agreement
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      Term And Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/support-terms"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      Support Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-700" id="b1vx56">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-0" id="g6j7lr">
                  © 2025 AI Evaluation Platform. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
