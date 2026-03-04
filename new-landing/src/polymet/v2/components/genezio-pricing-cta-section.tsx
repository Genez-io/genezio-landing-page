import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon, SparklesIcon } from "lucide-react";
export function GenezioPricingCtaSection() {
  const benefits = [
    "Track your brand across all major AI engines",
    "Get actionable insights in minutes",
    "Monitor competitor positioning",
    "Identify citation opportunities",
    "Prove content marketing ROI",
  ];

  return (
    <section id="book-call" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with subtle color */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
      <div className="absolute inset-0 bg-muted/20" />

      <div className="px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main card */}
          <div className="relative rounded-2xl border-2 border-border bg-card/80 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>

            <div className="text-center space-y-6 mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                You're{" "}
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  10 Minutes Away
                </span>{" "}
                from Your First Insights.
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Start monitoring your brand's AI visibility today and get recommendations to
                increase your lead generation.
              </p>
            </div>

            {/* Benefits list */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3 h-3 text-purple-500" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-base px-10 h-14 group shadow-lg"
                >
                  <a href="https://app.genezio.ai/sign-up?coupon=EXPLOREGENEZIO">
                    Get Started Now
                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-purple-500" />
                  <span>Free analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-purple-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-purple-500" />
                  <span>Setup in minutes</span>
                </div>
              </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          {/* Floating elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}

