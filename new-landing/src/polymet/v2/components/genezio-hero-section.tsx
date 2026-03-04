import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  TrendingUpIcon,
} from "lucide-react";

export function GenezioHeroSection() {
  return (
    <section
      id="get-started"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20"
    >
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="container px-4 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full border border-border mb-8">
            <TrendingUpIcon className="w-3.5 h-3.5 text-foreground" />
            <span className="text-xs font-medium text-foreground">
              The Future of Search Optimization
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-6 mb-10">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              The AI Search Optimization Tool for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]">
                ChatGPT, Perplexity & Gemini
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor your visibility, audit citations, and optimize your
              brand's perception in AI Search.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="https://app.genezio.ai/sign-up?coupon=EXPLOREGENEZIO">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-foreground text-background hover:bg-foreground/90 group"
            >
              Start Your AI Visibility
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>

          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground">
            Free analysis. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}

