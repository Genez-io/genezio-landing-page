import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* Shared so the page can emit matching FAQ schema. */
export const HOME_FAQS: { question: string; answer: string }[] = [
  {
    question: "How does AI decide which brands to recommend?",
    answer:
      "When someone asks an assistant for advice, it runs several searches, reads dozens of pages, and names only two or three brands. Whether you are one of them depends on how often trusted sources cite you, how clearly your content answers the question, and how you are framed against competitors, not on ad spend.",
  },
  {
    question: "Why can't we see AI-driven demand in our analytics?",
    answer:
      "The answer engine visits your site on the buyer's behalf, so the research happens inside the chat. In GA4 it shows up as nothing, or as untraceable direct traffic. Genezio instruments that channel directly, so you can finally see how AI represents and recommends your brand.",
  },
  {
    question: "How is this different from SEO?",
    answer:
      "SEO optimizes for ranking links on the old web. Genezio optimizes for being the recommendation inside AI answers, measuring recommendation share, citations, and sentiment across engines, then giving you the content and fixes to win, not just a keyword position.",
  },
  {
    question: "Which answer engines and markets does Genezio cover?",
    answer:
      "All the major engines, ChatGPT, Google AI Overviews and AI Mode, Gemini, Perplexity, Copilot, Claude, Grok and more, across any market and language you operate in, with results broken down per persona and per market.",
  },
  {
    question: "How does Genezio help us actually win more recommendations?",
    answer:
      "It runs the full loop: measure how AI sees you, diagnose what's holding you back with Content Analysis, publish citable content with Content Hub, and verify that recommendation share actually moved. For commerce, In-Chat Shopping shows how AI ranks and sells your products.",
  },
  {
    question: "Is Genezio enterprise-ready?",
    answer:
      "Yes. Genezio is built for enterprise: SOC 2, SSO / SAML, role-based access, a signed DPA for GDPR, group-level reporting across a portfolio of brands, dedicated onboarding, and a named account manager.",
  },
  {
    question: "How fast do we see results?",
    answer:
      "Most brands are live within days and get their first visibility report and action plan in the first week. Because engines re-crawl continuously, the improvements you publish compound over the following weeks.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a demo and our team will run a custom evaluation for your brand, scope a plan around the engines, markets and volume you need, and complete any security review as part of the process.",
  },
];

export function GenezioHomeFaq() {
  return (
    <section className="py-16 md:py-28 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            Questions, answered
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            What enterprise teams ask before they start
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {HOME_FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-emerald-500/30 transition-colors"
            >
              <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                <span className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-white/60 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
