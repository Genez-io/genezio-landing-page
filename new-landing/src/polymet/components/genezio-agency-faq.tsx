import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function AgencyFaqSection() {
    const faqs = [
      {
        question: "How many brands can I monitor?",
        answer:
          "The agency plan includes 3 brands. You can add more brands as needed with our flexible add-ons. Each additional brand includes full monitoring, AI tracking, and insights.",
      },
      {
        question: "Can I manage multiple clients?",
        answer:
          "Yes! The agency plan includes workspace management specifically designed for multi-client operations. You can organize brands by client, set permissions, and generate client-specific reports.",
      },
      {
        question: "What AI engines do you track?",
        answer:
          "The agency plan tracks 2 AI engines (e.g., ChatGPT, Perplexity, Google AI Mode). You can add more engines with our enterprise add-ons to get comprehensive coverage across all major LLMs.",
      },
      {
        question: "How does the free brand scan work?",
        answer:
          "Enter any brand name to instantly see visibility scores, citations, top AI keywords, and actionable recommendations. Free as part of the 7-day trial and takes less than 10 minutes.",
      },
      {
        question: "Can I white-label reports for clients?",
        answer:
          "Yes! Enterprise add-ons include white-label reporting, custom branding, and client-ready dashboards. Perfect for agencies that want to present insights under their own brand.",
      },
      {
        question: "What support do you offer?",
        answer:
          "Agency plans include email and Slack support. Enterprise customers get a dedicated success manager, priority support, and regular strategy calls.",
      },
    ];
  
    return (
      <section className="py-12 md:py-24 bg-[#050506] px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-base md:text-xl text-white/60">
              Everything you need to know
            </p>
          </div>
  
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-xl px-6 hover:border-white/20 transition-colors"
              >
                <AccordionTrigger className="text-left text-white hover:text-white/80 py-4 md:py-6 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }