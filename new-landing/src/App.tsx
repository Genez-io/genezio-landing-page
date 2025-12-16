// src/GenezioApp.tsx
import { Routes, Route } from "react-router";
import { GenezioLayout } from "@/polymet/layouts/genezio-layout";
import { GenezioLanding } from "@/polymet/pages/genezio-landing";
import { GenezioPricing } from "@/polymet/pages/genezio-pricing";
import { LeadGeneration } from "@/polymet/pages/lead-generation";
import { IncreaseConversion } from "@/polymet/pages/increase-conversion";
import { IncreaseCsat } from "@/polymet/pages/increase-csat";
import { Glossary } from "@/polymet/pages/glossary";
import { GlossaryTerm } from "@/polymet/pages/glossary-term";
import { Blog } from "@/polymet/pages/blog";
import { BlogPost } from "@/polymet/pages/blog-post";
import { TermsAndConditions } from "./polymet/pages/terms-and-conditions";
import { SupportTerms } from "./polymet/pages/support-terms";
import { DataProcessingAgreement } from "./polymet/pages/data-processing-agreement";
import { PrivacyPolicy } from "./polymet/pages/privacy-policy";
import { AboutGenezio } from "./polymet/pages/about-genezio";
import "./index.css";
import BlogAuthor from "./polymet/pages/blog-author";

export default function GenezioApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GenezioLayout>
            <GenezioLanding />
          </GenezioLayout>
        }
      />

      <Route
        path="/pricing"
        element={
          <GenezioLayout>
            <GenezioPricing />
          </GenezioLayout>
        }
      />

      <Route
        path="/conversational-brand-presence"
        element={
          <GenezioLayout>
            <LeadGeneration />
          </GenezioLayout>
        }
      />

      <Route
        path="/increase-conversion"
        element={
          <GenezioLayout>
            <IncreaseConversion />
          </GenezioLayout>
        }
      />

      <Route
        path="/privacy-policy"
        element={
          <GenezioLayout>
            <PrivacyPolicy />
          </GenezioLayout>
        }
      />

      <Route
        path="/policy"
        element={
          <GenezioLayout>
            <PrivacyPolicy />
          </GenezioLayout>
        }
      />

      <Route
        path="/increase-csat"
        element={
          <GenezioLayout>
            <IncreaseCsat />
          </GenezioLayout>
        }
      />

      <Route
        path="/glossary"
        element={
          <GenezioLayout>
            <Glossary />
          </GenezioLayout>
        }
      />

      <Route
        path="/glossary/:slug"
        element={
          <GenezioLayout>
            <GlossaryTerm />
          </GenezioLayout>
        }
      />

      <Route
        path="/blog/"
        element={
          <GenezioLayout>
            <Blog />
          </GenezioLayout>
        }
      />

      <Route
        path="/blog/:slug"
        element={
          <GenezioLayout>
            <BlogPost />
          </GenezioLayout>
        }
      />

      <Route
        path="/blog/author/:name"
        element={
          <GenezioLayout>
            <BlogAuthor />
          </GenezioLayout>
        }
      />

      <Route
        path="/terms-and-conditions"
        element={
          <GenezioLayout>
            <TermsAndConditions />
          </GenezioLayout>
        }
      />

      <Route
        path="/aboutgenezio"
        element={
          <GenezioLayout>
            <AboutGenezio />
          </GenezioLayout>
        }
      />

      <Route
        path="/support-terms"
        element={
          <GenezioLayout>
            <SupportTerms />
          </GenezioLayout>
        }
      />

      <Route
        path="/data-processing-agreement"
        element={
          <GenezioLayout>
            <DataProcessingAgreement />
          </GenezioLayout>
        }
      />


    </Routes>
  );
}
