'use client';

import React from "react";
import { Header } from "./(components)/header";
import { ThemeProvider } from "./(components)/theme-provider";
import "./globals.css";

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
    <html>
        <body>
            <ThemeProvider
      defaultTheme="light"
      storageKey="ai-agents-audit-theme"
    >
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <main>{children}</main>
        <footer
          className="bg-slate-50 dark:bg-slate-800 py-12 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <div className="mb-6 md:mb-0">
                <h3
                  className="text-xl font-bold text-slate-900 dark:text-white"
                >
                  Genezio | Gen AI Testing Platform
                </h3>
                <p
                  className="mt-2 text-slate-600 dark:text-slate-400"
                >
                  Ensuring Trust in Gen AI Adoption for Enterprises
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Contact
                </a>
              </div>
            </div>
            <div
              className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700"
            >
              <p
                className="text-center text-slate-600 dark:text-slate-400"
              >
                © 2025 Gen AI Testing Agents. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
        </body>
    </html>

  );
}
