import { StarIcon, QuoteIcon } from "lucide-react";

export function AgencyTestimonialsSection() {
  const testimonials = [
    {
      quote: "Genezio enables our agency to extract AI visibility data we can actually act on, powering sharper strategies and measurable results for our clients.",
      author: "CEO",
      role: "",
      company: "Data Revolt Agency",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-[#0E0E10] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by leading agencies
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto">
            See how agencies scale with Genezio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 max-w-3xl w-full">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <QuoteIcon className="w-8 h-8 text-blue-400/20 absolute -top-2 -left-2" />
                <p className="text-white/90 text-base md:text-lg leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-white font-semibold">
                  {testimonial.author}
                  {testimonial.role && `, ${testimonial.role}`}
                </div>
                <div className="text-white/60 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}