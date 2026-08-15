import { Button } from "@/components/ui/button";

export function GenezioCtaSection() {
  return (
    <section className="relative py-16 md:py-32 bg-[#050506] overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      {/* Particle effect background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-zinc-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-zinc-300 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Ready to win</span>
          <br />

          <span className="text-white font-extrabold">
            AI recommendations?
          </span>
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
          Join leading brands using Genezio to understand, influence, and win AI driven purchase decisions.
          <br />
          Move beyond visibility, optimize for recommendations that drive conversions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-xl shadow-lg transition-all duration-300 w-full"
            >
              Get a demo
            </Button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-xl transition-all duration-200 w-full"
            >
              Talk to Sales
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}


          // <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="w-full sm:w-auto">
          //   <Button
          //     size="lg"
          //     className="bg-emerald-400 hover:bg-emerald-300 text-black px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-xl shadow-lg transition-all duration-300 w-full"
          //   >
          //     Analyze Your AI Brand Visibility
          //   </Button>
          // </a>
          // <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC" className="w-full sm:w-auto">
          //   <Button
          //     size="lg"
          //     variant="outline"
          //     className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold rounded-xl transition-all duration-200 w-full"
          //   >
          //     Get a demo
          //   </Button>
          // </a>