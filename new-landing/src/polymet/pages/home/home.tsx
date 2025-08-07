import React, { useState, useEffect } from "react";
import { HeroSection } from "@/polymet/components/hero-section";
import { InteractiveHeroSection } from "@/polymet/components/interactive-hero-section";
import { VerticalsSection } from "@/polymet/components/verticals-section";
import { ProblemSection } from "@/polymet/components/problem-section";
import { AgentsSection } from "@/polymet/components/agents-section";
import { ProcessSection } from "@/polymet/components/process-section";
import { CommonMistakesSection } from "@/polymet/components/common-mistakes-section";
import { CtaSection } from "@/polymet/components/cta-section";

export default function Home() {
  // State to toggle between hero sections with a persisted default value
  const [showInteractiveHero, setShowInteractiveHero] = useState(true);

  // Flag to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts to prevent hydration issues
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50); // Small delay to ensure proper mounting

    return () => clearTimeout(timer);
  }, []);

  // Only render content when component is mounted
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="animate-pulse text-slate-600 dark:text-slate-400">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Toggle */}
      <div className="bg-slate-100 dark:bg-slate-800 py-2 px-4 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setShowInteractiveHero(true)}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              showInteractiveHero
                ? "bg-purple-600 text-white"
                : "bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600"
            }`}
          >
            Interactive Hero
          </button>
          <button
            type="button"
            onClick={() => setShowInteractiveHero(false)}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              !showInteractiveHero
                ? "bg-purple-600 text-white"
                : "bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600"
            }`}
          >
            Original Hero
          </button>
        </div>
      </div>

      {/* Render the selected hero section */}
      {showInteractiveHero ? <InteractiveHeroSection /> : <HeroSection />}

      {/* Rest of the page content */}
      <VerticalsSection />

      <ProblemSection />

      <AgentsSection />

      <ProcessSection />

      <CommonMistakesSection />

      <CtaSection />
    </div>
  );
}
