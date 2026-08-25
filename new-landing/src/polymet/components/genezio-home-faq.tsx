import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

export const HOME_FAQ_SCHEMA = [
  {
    question: "What is Genezio and how is it different from traditional SEO tools?",
    answer:
      "Traditional SEO monitors keyword rankings on Google SERPs. Genezio is an Enterprise AI Visibility (GEO) platform that tracks multi-turn conversations across LLMs (ChatGPT, Gemini, Perplexity, Claude, Copilot, AI Overviews) to measure brand perception, recommendation share, and the exact sources AI cites.",
  },
  {
    question: "Which AI engines and markets does Genezio monitor?",
    answer:
      "Genezio monitors all major generative engines, including ChatGPT, Google Gemini, Perplexity, Claude, Microsoft Copilot, DeepSeek, Grok, and Google AI Overviews, simulating realistic multi-turn persona prompts across global markets and languages.",
  },
  {
    question: "How does Genezio help our brand win more AI recommendations?",
    answer:
      "Genezio identifies citation blackout zones, competitor sentiment, and information gaps influencing model responses. With actionable insights, Content Hub briefs, and crawler readiness audits, your team can optimize the exact content AI engines rely on to recommend your brand.",
  },
];

export function GenezioHomeFaq() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050506]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4">FAQ</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base md:text-lg text-white/60">
            Everything you need to know about AI visibility and Generative Engine Optimization.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {HOME_FAQ_SCHEMA.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#0A0A0C] border border-white/10 rounded-2xl px-6 md:px-8 hover:border-white/20 transition-colors"
            >
              <AccordionTrigger className="text-left text-white hover:text-white/90 py-5 md:py-6 text-base md:text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-6 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
