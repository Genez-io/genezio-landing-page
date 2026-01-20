import { Button } from "@/components/ui/button";
import { MessageCircleIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function GenezioPricingFaq() {
  const faqs = [
    {
      question: "What is Genezio?",
      answer:
        "Genezio is an AI brand visibility platform that helps you monitor, analyze, and optimize how AI models like ChatGPT, Claude, and Perplexity represent your brand in conversations. We track thousands of AI conversations to give you actionable insights.",
    },
    {
      question: "How does Genezio track AI conversations?",
      answer:
        "Genezio monitors AI models in real-time by analyzing how they respond to queries related to your brand, products, and industry. We track both single and multi-turn conversations to understand the full context of how your brand is being represented.",
    },
    {
      question: "What AI models does Genezio monitor?",
      answer:
        "We monitor major AI models including ChatGPT, Claude, Perplexity, Gemini, and other leading conversational AI platforms. The number of models you can monitor depends on your plan.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for all plans. No credit card required to start. You'll get full access to all features in your chosen plan.",
    },
    {
      question: "What are multi-turn conversations?",
      answer:
        "Multi-turn conversations are extended dialogues where users ask follow-up questions. Genezio tracks these to understand how your brand is discussed in deeper, more complex interactions with AI models.",
    },
    {
      question: "How does AI content generation work?",
      answer:
        "Genezio helps you generate optimized content that improves how AI models represent your brand. Based on our analysis, we suggest content improvements and generate brand-aligned responses that AI models can reference.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "All plans include email support with 24-hour response time. Enterprise customers get dedicated Slack support, a dedicated account manager, and priority assistance.",
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
                  <span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">
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
        <div className="text-center bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-12">
          <MessageCircleIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />

          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <a target="_blank" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="w-full sm:w-auto">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium">
              Contact Sales
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
