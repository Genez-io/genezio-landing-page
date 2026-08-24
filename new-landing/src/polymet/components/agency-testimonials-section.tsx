import { StarIcon, QuoteIcon } from "lucide-react";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

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
    <section className="relative py-24 md:py-32 bg-[#050506] px-6 md:px-8 lg:px-16">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">Loved by agencies</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Trusted by leading agencies
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            See how agencies scale with Genezio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors max-w-3xl w-full">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 fill-emerald-400 text-emerald-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <QuoteIcon className="w-8 h-8 text-white/10 absolute -top-2 -left-2" />
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