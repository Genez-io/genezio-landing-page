import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import { Link } from "react-router";

export function AgencyCtaSection() {
  return (
    <section className="py-12 md:py-24 bg-[#0E0E10] px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 p-8 md:p-12 lg:p-16">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">
                Start today
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Ready to scale your agency?
            </h2>

            <p className="text-base md:text-xl text-white/70 mb-8 md:mb-10 max-w-2xl mx-auto">
              Join leading agencies delivering AI-powered strategies
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg font-medium w-full sm:w-auto"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-white px-8 h-14 text-lg font-medium w-full sm:w-auto backdrop-blur-sm"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}