import React from "react";
import { Header } from "@/polymet/components/header";
import { ThemeProvider } from "@/polymet/components/theme-provider";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Layout({
  children,
  currentPage,
  setCurrentPage,
}: LayoutProps) {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="ai-agents-audit-theme"
      id="miw7ii"
    >
      <div className="min-h-screen bg-white dark:bg-slate-900" id="tm1kgv">
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          id="byk5e4"
        />

        <main id="jhjvw0">{children}</main>
        <footer
          className="bg-slate-50 dark:bg-slate-800 py-12 border-t border-slate-200 dark:border-slate-700"
          id="nz4xd3"
        >
          <div className="container mx-auto px-4 md:px-6" id="jrk11b">
            <div
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
              id="qvm33w"
            >
              {/* Company Info */}
              <div className="md:col-span-2" id="gm92qi">
                <h3
                  className="text-xl font-bold text-slate-900 dark:text-white mb-2"
                  id="tzwr5n"
                >
                  Genezio
                </h3>
                <p
                  className="text-slate-600 dark:text-slate-400 mb-4"
                  id="at0z8m"
                >
                  Maximize your Chatbot's ROI with enterprise-grade AI testing
                  and optimization.
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
                  <li>
                    <a
                      href="tel:+40-754-365-465"
                      className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                    >
                      +40 (754) 365 465
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="pt-8 border-t border-slate-200 dark:border-slate-700"
              id="b1vx56"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p
                  className="text-slate-600 dark:text-slate-400 mb-4 md:mb-0"
                  id="g6j7lr"
                >
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
