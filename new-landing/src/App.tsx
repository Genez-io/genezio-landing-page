import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GenezioLayout } from "@/polymet/layouts/genezio-layout";
import { GenezioLanding } from "@/polymet/pages/genezio-landing";
import { GenezioPricing } from "@/polymet/pages/genezio-pricing";
import { LeadGeneration } from "@/polymet/pages/lead-generation";
import { IncreaseConversion } from "@/polymet/pages/increase-conversion";
import { IncreaseCsat } from "@/polymet/pages/increase-csat";
import { Glossary } from "@/polymet/pages/glossary";
import { GlossaryTerm } from "@/polymet/pages/glossary-term";
// import { Blog } from "@/polymet/pages/blog";
import { BlogPost } from "@/polymet/pages/blog-post";

export default function GenezioApp() {
  return (
    <Router>
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

        {/* <Route
          path="/blog"
          element={
            <GenezioLayout>
              <Blog />
            </GenezioLayout>
          }
        /> */}

        <Route
          path="/blog/:slug"
          element={
            <GenezioLayout>
              <BlogPost />
            </GenezioLayout>
          }
        />
      </Routes>
    </Router>
  );
}
