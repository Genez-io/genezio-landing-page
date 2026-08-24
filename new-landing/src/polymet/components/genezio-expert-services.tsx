import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  UserCogIcon,
  PenLineIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
} from "lucide-react";

const SALES_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

export function GenezioExpertServices() {
  const services = [
    {
      icon: UserCogIcon,
      title: "Managed platform operation",
      description:
        "A dedicated AI-SEO and GEO strategist runs Genezio for you, standing up personas, topics and markets, monitoring every answer engine, and turning the data into a prioritized plan your team can act on.",
      points: [
        "Dedicated GEO strategist & account team",
        "Setup, monitoring and reporting handled for you",
        "Quarterly strategy reviews and roadmap",
      ],
    },
    {
      icon: PenLineIcon,
      title: "Expert content generation",
      description:
        "Our GEO content specialists produce the citable, data-backed content that actually moves recommendation rates, from briefs and comparison pages to publish-ready drafts aligned to how answer engines cite.",
      points: [
        "Data-backed briefs from your own conversations",
        "Publish-ready drafts and comparison pages",
        "Written to earn citations, not just rank",
      ],
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">
            Dedicated expert services
          </HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Add a dedicated GEO team to your plan
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            Enterprise plans can be paired with dedicated AI-SEO and GEO
            experts, to operate the platform on your behalf and to generate the
            content that wins recommendations. Your team stays focused; the
            outcomes still land.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-7 md:p-9 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={SALES_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
            >
              Talk to Enterprise Sales
            </Button>
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-white/50">
            <ArrowRightIcon className="w-4 h-4 text-white/40" />
            Scoped and priced to your engagement
          </span>
        </div>
      </div>
    </section>
  );
}
