export function CsatTestimonialBanner() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#0E0E10] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-purple-500/10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Testimonial Quote */}
        <blockquote className="text-white/90 italic text-lg sm:text-xl md:text-2xl leading-relaxed text-center">
          "Our customer service chatbot was struggling with complex energy
          billing inquiries and regulatory compliance questions. Genezio's
          testing revealed critical gaps in our knowledge base and helped us
          optimize responses for peak demand periods. We've reduced call center
          volume by 40% while maintaining compliance standards."
          <footer className="mt-6 text-white/70 text-base not-italic">
            — Operations Lead from Energy Corporation
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
