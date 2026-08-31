// src/GenezioApp.tsx
import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router";
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
import { Research } from "@/polymet/pages/research";
import { TermsAndConditions } from "./polymet/pages/terms-and-conditions";
import { SupportTerms } from "./polymet/pages/support-terms";
import { DataProcessingAgreement } from "./polymet/pages/data-processing-agreement";
import { PrivacyPolicy } from "./polymet/pages/privacy-policy";
import { CookiePolicy } from "./polymet/pages/cookie-policy";
import { AboutGenezio } from "./polymet/pages/about-genezio";
import "./index.css";
import BlogAuthor from "./polymet/pages/blog-author";
import { Agencies } from "./polymet/pages/agencies";
import { IndustryLeaderboards } from "./polymet/pages/industry-leaderboards";
import { ContentHub } from "./polymet/pages/content-hub";
import { ContentAnalysis } from "./polymet/pages/content-analysis";
import { WebsiteAnalyzer } from "./polymet/pages/website-analyzer";
import { ContactSales } from "./polymet/pages/contact-sales";
import { InChatShopping } from "./polymet/pages/in-chat-shopping";
import { Mcp } from "./polymet/pages/mcp";
import { Security } from "./polymet/pages/security";
import { Methodology } from "./polymet/pages/methodology";
import { Academy } from "./polymet/pages/academy";


const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
};

const LEGACY_REDIRECTS = [
  { from: "/blog/affordable-cloud-hosting/", to: "/blog/" },
  { from: "/blog/ai-agent-examples/", to: "/blog/" },
  { from: "/blog/ai-agent-tools/", to: "/blog/" },
  { from: "/blog/aws-lambda-alternatives/", to: "/blog/" },
  { from: "/blog/common-mistakes-ai-agents-make/", to: "/blog/" },
  { from: "/blog/create-your-first-app-using-chatgpt/", to: "/blog/" },
  { from: "/blog/create-your-first-web3-app/", to: "/blog/" },
  { from: "/blog/implement-a-shopping-cart-using-typescript-redis-and-react/", to: "/blog/" },
  { from: "/blog/integrate-stripe-payments/", to: "/blog/" },
  { from: "/blog/now-available-neon-postgres/", to: "/blog/" },
  { from: "/blog/retrieval-augmented-generation-is-fixing-llm/", to: "/blog/rag-is-fixing-llms/" },
  { from: "/blog/understanding-ai-agents-101/", to: "/blog/ai-agents-101-understanding-their-role-and-functionality/" },
  { from: "/deploy-nextjs-apps/", to: "https://deployapps.dev/docs/" },
  { from: "/deploy-nodejs-express-on-genezio-serverless/", to: "https://deployapps.dev/docs/" },
  { from: "/deployment-platform/deploy-django-on-genezio-serverless/", to: "https://deployapps.dev/docs/" },
  { from: "/deployment-platform/deploy-nextjs-apps/", to: "https://deployapps.dev/docs/" },
  { from: "/tags/tutorials/", to: "/blog/" },
  { from: "/ai-search-optimization-tool/", to: "/" },
  { from: "/blog/chatgpt-fanout-brand-injection/", to: "/research/chatgpt-fanout-brand-injection/" },
  { from: "/blog/zero-query-overlaps/", to: "/research/zero-query-overlaps/" },
  { from: "/blog/decision-grade-geo-aeo-intelligence/", to: "/blog/best-accurate-data-platform-for-ai-search-optimization/" },
  { from: "/increase-conversion/", to: "/ai-agent-analytics/" },

  // Drafted authors who no longer contribute to the current platform
  { from: "/blog/author/andra-pitis/", to: "/blog/" },
  { from: "/blog/author/andreia-ocanoaia/", to: "/blog/" },
  { from: "/blog/author/bogdan-ciobanu/", to: "/blog/" },
  { from: "/blog/author/costin-sin/", to: "/blog/" },
  { from: "/blog/author/cristi-miloiu/", to: "/blog/" },
  { from: "/blog/author/kristopher-sandoval/", to: "/blog/" },
  { from: "/blog/author/radu-dumitrescu/", to: "/blog/" },
  { from: "/blog/author/rares-istoc/", to: "/blog/" },
  { from: "/blog/author/stefan-iordache/", to: "/blog/" },
  { from: "/blog/author/tudor-anghelescu/", to: "/blog/" },
  { from: "/blog/author/virgil-turcu/", to: "/blog/" },
];

/** Reset scroll to top on route change (SPA navigations don't by default). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // let in-page anchors keep their behavior
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function GenezioApp() {
  return (
    <>
      <ScrollToTop />
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
        path="/ai-agent-analytics"
        element={
          <GenezioLayout>
            <IncreaseConversion />
          </GenezioLayout>
        }
      />

      <Route
        path="/content-hub"
        element={
          <GenezioLayout>
            <ContentHub />
          </GenezioLayout>
        }
      />

      <Route
        path="/content-analysis"
        element={
          <GenezioLayout>
            <ContentAnalysis />
          </GenezioLayout>
        }
      />

      <Route
        path="/website-analyzer"
        element={
          <GenezioLayout>
            <WebsiteAnalyzer />
          </GenezioLayout>
        }
      />

      <Route
        path="/contact-sales"
        element={
          <GenezioLayout>
            <ContactSales />
          </GenezioLayout>
        }
      />
      <Route
        path="/contact-sales/"
        element={
          <GenezioLayout>
            <ContactSales />
          </GenezioLayout>
        }
      />

      <Route
        path="/in-chat-shopping"
        element={
          <GenezioLayout>
            <InChatShopping />
          </GenezioLayout>
        }
      />

      <Route
        path="/mcp"
        element={
          <GenezioLayout>
            <Mcp />
          </GenezioLayout>
        }
      />

      <Route
        path="/security"
        element={
          <GenezioLayout>
            <Security />
          </GenezioLayout>
        }
      />

      <Route
        path="/methodology"
        element={
          <GenezioLayout>
            <Methodology />
          </GenezioLayout>
        }
      />

      <Route
        path="/academy"
        element={
          <GenezioLayout>
            <Academy />
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

      {LEGACY_REDIRECTS.flatMap((r) => {
        const paths = [r.from];
        if (r.from.endsWith("/")) {
          paths.push(r.from.slice(0, -1));
        }
        return paths.map((path) => (
          <Route
            key={path}
            path={path}
            element={
              r.to.startsWith("http") ? (
                <ExternalRedirect to={r.to} />
              ) : (
                <Navigate to={r.to} replace />
              )
            }
          />
        ));
      })}

      <Route
        path="/research/"
        element={
          <GenezioLayout>
            <Research />
          </GenezioLayout>
        }
      />

      <Route
        path="/research/:slug"
        element={
          <GenezioLayout>
            <BlogPost />
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
        path="/about-genezio"
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

      <Route
        path="/cookie-policy"
        element={
          <GenezioLayout>
            <CookiePolicy />
          </GenezioLayout>
        }
      />

      <Route
        path="/agencies"
        element={
          <GenezioLayout>
            <Agencies />
          </GenezioLayout>
        }
      />

      <Route
        path="/industry-leaderboards"
        element={
          <GenezioLayout>
            <IndustryLeaderboards />
          </GenezioLayout>
        }
      />

    </Routes>
    </>
  );
}
