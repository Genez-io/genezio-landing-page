import { Button } from "@/components/ui/button";
import { MessageCircleIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Plain-text FAQ for the JSON-LD FAQPage schema, mirroring the visible content. */
export const PRICING_FAQ_SCHEMA = [
  {
    question: "How much does Genezio cost?",
    answer:
      "Genezio is a custom Enterprise plan, priced around four levers: the answer engines you track, the markets and languages you cover, the personas, topics and scenarios you monitor, and your monthly conversation volume. Book a demo and we'll scope a tailored quote to your footprint.",
  },
  {
    question: "Why is Genezio enterprise-only, with no self-serve tiers?",
    answer:
      "AI visibility is different for every brand, the engines that matter, the markets and languages you sell in, the personas who buy, and the volume of conversations worth tracking all vary. Fixed tiers would either overcharge or under-serve. Instead, our team scopes a plan with you so you only pay for what moves the needle. Every engagement is sales-assisted and starts with a demo.",
  },
  {
    question: "How does pricing actually work?",
    answer:
      "Pricing is built around four levers: the answer engines you track (ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, Claude and more), the markets and languages you cover, the personas, topics and scenarios you monitor, and your conversation volume. Book a demo and we'll put together a quote scoped to your footprint, no fixed tiers, no per-seat surprises.",
  },
  {
    question: "What's included in the platform?",
    answer:
      "The Genezio platform spans Monitor & benchmark (visibility, recommendation share, sentiment & citations), Content Hub (data-backed briefs & generation), Content Analysis (crawlability & citable-content audits), and In-Chat Shopping (AI product intelligence). Your plan is scoped to the modules, engines, markets, and volume you actually need.",
  },
  {
    question: "Which answer engines and markets do you cover?",
    answer:
      "We track all the major answer engines, ChatGPT, Google AI Overviews & AI Mode, Gemini, Perplexity, Copilot, Claude, Grok, DeepSeek and Meta AI, across any market and language you operate in. We run realistic, multi-turn conversations per persona and per market, because the same question gets a different answer in London than in New York.",
  },
  {
    question: "How fast can we get live, and what does onboarding look like?",
    answer:
      "Most brands are live within days. You get dedicated onboarding and a named account manager who helps set up your personas, topics, scenarios and competitive set, then walks your team through the first results and the action plan.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Genezio is built for enterprise security: SOC 2 Type II, ISO 27001, CSA STAR Level 1, SSO / SAML, role-based access, and a signed DPA for GDPR compliance. Our team is happy to complete your security review and answer vendor-assessment questionnaires as part of the evaluation.",
  },
  {
    question: "Can we scale the plan up or down later?",
    answer:
      "Yes. Your plan is fully flexible, add engines, markets, personas, brands or volume as you grow, or adjust down between cycles. Your account manager handles the change; there are no rigid tiers to jump between.",
  },
  {
    question: "What support do enterprise customers get?",
    answer:
      "A named account manager, dedicated Slack support, priority assistance, and regular strategy reviews, so AI visibility becomes an ongoing program, not a one-off report.",
  },
  {
    question: "Do you offer plans for marketing agencies?",
    answer:
      "Yes, we have a dedicated Agency Enterprise offer for teams managing GEO across multiple clients, with multi-client workspaces and white-label reporting. Switch to our Agency pricing view at genezio.com/pricing/?view=agency or explore our agencies page at genezio.com/agencies/.",
  },
];

export function GenezioPricingFaq() {
  const faqs = [
    {
      question: "How much does Genezio cost?",
      answer:
        "Genezio is a custom Enterprise plan, priced around four levers: the answer engines you track, the markets and languages you cover, the personas, topics and scenarios you monitor, and your monthly conversation volume. Book a demo and we'll scope a tailored quote to your footprint.",
    },
    {
      question: "Why is Genezio enterprise-only, with no self-serve tiers?",
      answer:
        "AI visibility is different for every brand, the engines that matter, the markets and languages you sell in, the personas who buy, and the volume of conversations worth tracking all vary. Fixed tiers would either overcharge or under-serve. Instead, our team scopes a plan with you so you only pay for what moves the needle. Every engagement is sales-assisted and starts with a demo.",
    },
    {
      question: "How does pricing actually work?",
      answer:
        "Pricing is built around four levers: the answer engines you track (ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, Claude and more), the markets and languages you cover, the personas, topics and scenarios you monitor, and your conversation volume. Book a demo and we'll put together a quote scoped to your footprint, no fixed tiers, no per-seat surprises.",
    },
    {
      question: "What's included in the platform?",
      answer: (
        <>
          The Genezio platform spans:{" "}
          <a href="/conversational-brand-presence/" className="text-emerald-400 hover:underline">
            Monitor &amp; benchmark
          </a>{" "}
          (visibility, recommendation share, sentiment &amp; citations),{" "}
          <a href="/content-hub/" className="text-emerald-400 hover:underline">
            Content Hub
          </a>{" "}
          (data-backed briefs &amp; generation),{" "}
          <a href="/content-analysis/" className="text-emerald-400 hover:underline">
            Content Analysis
          </a>{" "}
          (crawlability &amp; citable-content audits), and{" "}
          <a href="/in-chat-shopping/" className="text-emerald-400 hover:underline">
            In-Chat Shopping
          </a>{" "}
          (AI product intelligence). Your plan is scoped to the modules,
          engines, markets, and volume you actually need.
        </>
      ),
    },
    {
      question: "Which answer engines and markets do you cover?",
      answer:
        "We track all the major answer engines, ChatGPT, Google AI Overviews & AI Mode, Gemini, Perplexity, Copilot, Claude, Grok, DeepSeek and Meta AI, across any market and language you operate in. We run realistic, multi-turn conversations per persona and per market, because the same question gets a different answer in London than in New York.",
    },
    {
      question: "How fast can we get live, and what does onboarding look like?",
      answer:
        "Most brands are live within days. You get dedicated onboarding and a named account manager who helps set up your personas, topics, scenarios and competitive set, then walks your team through the first results and the action plan.",
    },
    {
      question: "How do you handle security and compliance?",
      answer:
        "Genezio is built for enterprise security: SOC 2 Type II, ISO 27001, CSA STAR Level 1, SSO / SAML, role-based access, and a signed DPA for GDPR compliance. Our team is happy to complete your security review and answer vendor-assessment questionnaires as part of the evaluation.",
    },
    {
      question: "Can we scale the plan up or down later?",
      answer:
        "Yes. Your plan is fully flexible, add engines, markets, personas, brands or volume as you grow, or adjust down between cycles. Your account manager handles the change; there are no rigid tiers to jump between.",
    },
    {
      question: "What support do enterprise customers get?",
      answer:
        "A named account manager, dedicated Slack support, priority assistance, and regular strategy reviews, so AI visibility becomes an ongoing program, not a one-off report.",
    },
    {
      question: "Do you offer plans for marketing agencies?",
      answer: (
        <>
          Yes, we have a dedicated Agency Enterprise offer for teams managing GEO across multiple clients, with multi-client workspaces and white-label reporting. Switch to our{" "}
          <a href="/pricing/?view=agency" className="text-emerald-400 hover:underline">
            Agency pricing view
          </a>{" "}
          or explore our{" "}
          <a href="/agencies/" className="text-emerald-400 hover:underline">
            agencies page
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0E0E10]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/60">
            Have questions? We're here to help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/20 transition-colors"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                  <span className="text-base font-medium text-white group-hover:text-zinc-400 transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-white/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/5 border border-white/15 rounded-2xl p-12">
          <MessageCircleIcon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />

          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            Talk to our team and we'll scope a plan around your brand.
          </p>
          <a href="/contact-sales" className="w-full sm:w-auto">
            <Button className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-6 text-base font-medium">
              Talk to the team
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
