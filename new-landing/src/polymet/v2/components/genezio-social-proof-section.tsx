import { QuoteIcon, SparklesIcon } from "lucide-react";

export function GenezioSocialProofSection() {
  const logos = [
    { name: "Erste Group", width: "w-32" },
    { name: "BCR", width: "w-24" },
    { name: "Raiffeisen", width: "w-32" },
    { name: "UniCredit", width: "w-28" },
    { name: "ING", width: "w-20" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Trusted by teams at{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Erste Group
              </span>
              , and more.
            </h2>

            {/* Trust logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    className={`${logo.width} h-8 rounded bg-muted flex items-center justify-center`}
                  >
                    <span className="text-xs font-semibold text-muted-foreground">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial card - Centered, single card */}
          <div className="relative group">
            <div className="relative rounded-2xl border border-border bg-card backdrop-blur-sm p-8 md:p-12 shadow-xl overflow-hidden">
              {/* Subtle decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 blur-2xl" />

              {/* Quote icon */}
              <div className="relative mb-6">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 items-center justify-center shadow-lg">
                  <QuoteIcon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Testimonial content */}
              <div className="relative space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-foreground">
                  "Creating powerful brands that customers trust is changing.
                  With Genezio, brand presence in AI conversations on key topics
                  grew for BCR by{" "}
                  <span className="font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    double digits in just a few weeks
                  </span>
                  . That visibility matters because it ensures clients receive
                  accurate answers."
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      IS
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-purple-500 border-2 border-card flex items-center justify-center">
                      <SparklesIcon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      I. Stanimir
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Director of Marketing & Communication
                    </div>
                    <div className="text-xs text-purple-500 font-medium mt-1">
                      BCR • Erste Group
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

