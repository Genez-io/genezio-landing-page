import { useState } from "react";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioEnterprisePlan } from "@/polymet/components/genezio-enterprise-plan";
import { GenezioPricingFaq } from "@/polymet/components/genezio-pricing-faq";
import { AgencyFaqSection } from "@/polymet/components/agency-faq-section";

const PRICING_TITLE = "Flexible plans for your AI brand visibility";
const PRICING_DESCRIPTION =
  "Explore Genezio pricing plans to boost your AI brand visibility. Monitor LLMs, track sentiment, and optimize your presence. Start your free trial.";

export function GenezioPricing() {
  const [selectedAudience, setSelectedAudience] = useState<
    "brands" | "agencies"
  >("brands");

  return (
    <>
      <PolymetSEO
        title={PRICING_TITLE}
        description={PRICING_DESCRIPTION}
        canonicalPath="/pricing/"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Genezio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Genezio is an AI brand visibility platform that helps you monitor, analyze, and optimize how AI models like ChatGPT, Claude, and Perplexity represent your brand in conversations. We track thousands of AI conversations to give you actionable insights."
              }
            },
            {
              "@type": "Question",
              "name": "How does Genezio track AI conversations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Genezio monitors AI models in real-time by analyzing how they respond to queries related to your brand, products, and industry. We track both single and multi-turn conversations to understand the full context of how your brand is being represented."
              }
            },
            {
              "@type": "Question",
              "name": "What AI models does Genezio monitor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We monitor major AI models including ChatGPT, Claude, Perplexity, Gemini, and other leading conversational AI platforms. The number of models you can monitor depends on your plan."
              }
            },
            {
              "@type": "Question",
              "name": "How does Enterprise pricing work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Genezio is offered as a custom Enterprise plan tailored to your needs. Pricing is built around the answer engines, markets, languages, and conversation volume you want to track. Book a demo and our team will put together a quote that fits your brand."
              }
            },
            {
              "@type": "Question",
              "name": "Can I adjust my plan later?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Your Enterprise plan is fully flexible — you can scale engines, markets, personas, and volume up or down at any time. Just talk to your dedicated account manager and we'll adjust your plan."
              }
            },
            {
              "@type": "Question",
              "name": "How do I get started?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Book a demo with our team and we'll set you up with a custom evaluation of the platform. You can also run a free brand scan to instantly see your AI visibility scores, citations, and top AI keywords."
              }
            },
            {
              "@type": "Question",
              "name": "What are multi-turn conversations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Multi-turn conversations are extended dialogues where users ask follow-up questions. Genezio tracks these to understand how your brand is discussed in deeper, more complex interactions with AI models."
              }
            },
            {
              "@type": "Question",
              "name": "What kind of support do you provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All plans include email support with 24-hour response time. Enterprise customers get dedicated Slack support, a dedicated account manager, and priority assistance."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer plans for marketing agencies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We have specialized plans for marketing agencies that manage multiple brands. You can learn more about our agency-specific features on our dedicated agencies page at genezio.com/agencies/."
              }
            },
            {
              "@type": "Question",
              "name": "How many brands can I monitor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The agency plan includes 3 brands. You can add more brands as needed with our flexible add-ons. Each additional brand includes full monitoring, AI tracking, and insights."
              }
            },
            {
              "@type": "Question",
              "name": "Can I manage multiple clients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! The agency plan includes workspace management specifically designed for multi-client operations. You can organize brands by client, set permissions, and generate client-specific reports."
              }
            },
            {
              "@type": "Question",
              "name": "What AI engines do you track?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The agency plan tracks 2 AI engines (e.g., ChatGPT, Perplexity, Google AI Mode). You can add more engines with our enterprise add-ons to get comprehensive coverage across all major LLMs."
              }
            },
            {
              "@type": "Question",
              "name": "How does the free brand scan work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Enter any brand name to instantly see visibility scores, citations, top AI keywords, and actionable recommendations. Free as part of the 7-day trial and takes less than 10 minutes."
              }
            },
            {
              "@type": "Question",
              "name": "Can I white-label reports for clients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Enterprise add-ons include white-label reporting, custom branding, and client-ready dashboards. Perfect for agencies that want to present insights under their own brand."
              }
            },
            {
              "@type": "Question",
              "name": "What support do agencies get?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agency plans include email and Slack support. Enterprise customers get a dedicated success manager, priority support, and regular strategy calls."
              }
            },
            {
              "@type": "Question",
              "name": "Where can I learn more about Genezio for Agencies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can find detailed information about our specialized features, case studies, and solutions for agencies on our dedicated agencies page at genezio.com/agencies/."
              }
            }
          ]
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        {selectedAudience === "brands" ? (
          <>
            <GenezioEnterprisePlan
              variant="brands"
              onVariantChange={setSelectedAudience}
              isPageHero
            />
            <GenezioPricingFaq />
          </>
        ) : (
          <>
            <GenezioEnterprisePlan
              variant="agencies"
              onVariantChange={setSelectedAudience}
              isPageHero
            />
            <AgencyFaqSection />
          </>
        )}
      </div>
    </>
  );
}
