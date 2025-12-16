export function ConversionTestimonials() {
  const testimonials = [
    {
      role: "Marketing Director",
      company: "Leading Bank",
      initials: "MD",
      bgColor: "bg-blue-500",
      quote:
        '"We launched a Q&A chatbot but soon realized it wasn\'t meeting customer expectations—some answers were inaccurate, causing frustration and churn. Genezio helped us identify gaps across key personas and gave our vendors the feedback they needed to improve fast. Now, the chatbot performs better and is generating leads."',
      industry: "Technology",
      metric: "+340% leads",
      metricColor: "text-emerald-400",
    },
    {
      role: "E-commerce Manager",
      company: "Online Retailer",
      initials: "EM",
      bgColor: "bg-emerald-500",
      quote:
        "\"Our e-commerce chatbot was missing critical sales opportunities and providing inconsistent product information. Genezio's testing identified where customers were dropping off and helped us optimize our conversation flows. We've seen a significant boost in conversion rates and customer satisfaction.\"",
      industry: "E-commerce",
      metric: "+180% conversions",
      metricColor: "text-emerald-400",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#0E0E10] overflow-hidden">
      {/* Background gradient - Banner style */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Testimonials Banner - Full Width Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full">
              {/* Header with avatar and role */}
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {testimonial.role}
                  </h3>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 italic leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>

              {/* Footer with industry and metric */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-white/60 text-sm">
                  {testimonial.industry}
                </span>
                <span
                  className={`${testimonial.metricColor} font-semibold text-sm`}
                >
                  {testimonial.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
