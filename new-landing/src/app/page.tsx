"use client";

import React from "react";
import { HeroSection } from "./(components)/hero-section";
import { VerticalsSection } from "./(components)/verticals-section";
import { ProblemSection } from "./(components)/problem-section";
import { AgentsSection } from "./(components)/agents-section";
import { ProcessSection } from "./(components)/process-section";
import { CommonMistakesSection } from "./(components)/common-mistakes-section";
import { CtaSection } from "./(components)/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <VerticalsSection />
      <AgentsSection />
      <ProcessSection />
      <CommonMistakesSection />
      <ProblemSection />
      <CtaSection />
    </div>
  );
}
