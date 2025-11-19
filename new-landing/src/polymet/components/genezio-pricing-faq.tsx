import { Button } from "@/components/ui/button";
import { MessageCircleIcon } from "lucide-react";

export function GenezioPricingFaq() {
  const faqs = [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for all plans. No credit card required to start.",
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer:
        "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase add-ons as needed.",
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

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-white/60">{faq.answer}</p>
            </div>
          ))}
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
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
