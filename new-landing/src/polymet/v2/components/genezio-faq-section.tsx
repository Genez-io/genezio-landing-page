import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircleIcon } from "lucide-react";

export function GenezioFaqSection() {
  const faqs = [
    {
      question: "Is this an SEO tool?",
      answer:
        "This is a GEO (Generative Engine Optimization) tool. It works alongside your SEO strategy to capture traffic from AI engines, which traditional SEO tools miss.",
    },
    {
      question: "Which engines do you support?",
      answer:
        "We support ChatGPT (OpenAI), Perplexity, Google Gemini, Claude (Anthropic), Google AI Mode and Google AI Overviews.",
    },
    {
      question: "Can I track my competitors?",
      answer:
        "Yes. You can track exactly how AI positions you against specific competitors and see where they are winning.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32">
      <div className="px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-sm">
              <HelpCircleIcon className="w-4 h-4 text-chart-1" />
              <span className="text-muted-foreground">Frequently Asked Questions</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Got questions? We've got answers.
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-chart-1/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional help */}
          <div className="mt-12 text-center p-6 rounded-xl border border-border bg-muted/30">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="text-chart-1 font-semibold hover:underline">
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

