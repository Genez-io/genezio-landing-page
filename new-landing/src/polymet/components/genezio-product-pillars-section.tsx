import { Link } from "react-router";
import {
  BarChart3Icon,
  MessagesSquareIcon,
  ScanSearchIcon,
  FileTextIcon,
  ArrowRightIcon,
} from "lucide-react";

export function GenezioProductPillarsSection() {
  const pillars = [
    {
      icon: BarChart3Icon,
      name: "Monitor & benchmark",
      description:
        "See how AI represents your brand in every conversation — visibility, recommendation share, and sentiment vs competitors, per engine, persona, and market.",
      href: "https://app.genezio.ai/brand-report/49/Natwest?demo=account",
      cta: "See it live",
      external: true,
      accent: "blue",
    },
    {
      icon: MessagesSquareIcon,
      name: "Conversation & fanout intelligence",
      description:
        "Understand what your customers actually ask AI — the real multi-turn conversations, query fanouts, and the sources engines pull to answer.",
      href: "/conversational-brand-presence/",
      cta: "Learn more",
      external: false,
      accent: "blue",
    },
    {
      icon: ScanSearchIcon,
      name: "Content Analysis",
      description:
        "Check whether engines can crawl your content and whether they'll keep it — crawlability, robots.txt, llms.txt, schema, structure and evidence, pre- and post-publish.",
      href: "/content-analysis/",
      cta: "Learn more",
      external: false,
      accent: "emerald",
    },
    {
      icon: FileTextIcon,
      name: "Content Hub",
      description:
        "Turn every gap into a data-backed content brief your team can ship — and generate the draft directly when you need speed.",
      href: "/content-hub/",
      cta: "Learn more",
      external: false,
      accent: "emerald",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-blue-400 uppercase tracking-wider mb-4 font-semibold">
            The platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            One platform to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              win the recommendation
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-2xl mx-auto mt-6">
            Measure how AI sees your brand, diagnose what's holding you back, and
            ship the content that moves it — end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isBlue = pillar.accent === "blue";

            const inner = (
              <>
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center ${
                      isBlue
                        ? "bg-blue-500/10 border-blue-500/30"
                        : "bg-emerald-500/10 border-emerald-500/30"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isBlue ? "text-blue-400" : "text-emerald-400"
                      }`}
                    />
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.name}
                </h3>
                <p className="text-[#B0B0B3] text-sm md:text-base leading-relaxed mb-5">
                  {pillar.description}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                    isBlue ? "text-blue-400" : "text-emerald-400"
                  }`}
                >
                  {pillar.cta}
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </>
            );

            const cardClass =
              "group block h-full bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-7 md:p-8 hover:border-blue-500/30 transition-all duration-300";

            return pillar.external ? (
              <a
                key={index}
                href={pillar.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <Link key={index} to={pillar.href} className={cardClass}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
