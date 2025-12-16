import { Button } from "@/components/ui/button";
import { SparklesIcon, CalendarIcon } from "lucide-react";

export function GenezioCtaSection() {
  return (
    <section className="relative py-16 md:py-32 bg-[#050506] overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30 animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      {/* Particle effect background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />

        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Master every AI conversation</span>
          <br />

          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-[#C084FC] bg-clip-text text-transparent font-extrabold">
            that shapes your brand.
          </span>
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-[#B0B0B3] max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
          Genezio unifies brand presence, perception, and performance across AI
          platforms.
          <br />
          It's not just about being found — it's about being understood,
          trusted, and chosen in every AI-powered interaction.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <a href="/pricing" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 w-full"
            >
              <SparklesIcon className="w-5 h-5 mr-2" />
              Analyze Your AI Brand Visibility
            </Button>
          </a>
          <a href="/pricing" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 w-full"
            >
              <CalendarIcon className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
}
