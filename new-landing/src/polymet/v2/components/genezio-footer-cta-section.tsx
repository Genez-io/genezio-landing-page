import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";

export function GenezioFooterCtaSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 items-center justify-center shadow-xl">
            <SparklesIcon className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Don't let AI define your brand{" "}
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                for you
              </span>
              .
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the marketing teams moving beyond SEO.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a href="https://app.genezio.ai/sign-up?coupon=EXPLOREGENEZIO">
            <Button size="lg" className="text-base px-10 h-14 group shadow-xl">
              Get Started Today
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>

          </div>
        </div>
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
    </section>
  );
}

