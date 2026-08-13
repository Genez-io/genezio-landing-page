import { Link } from "react-router";
import {
  BarChart3Icon,
  ScanSearchIcon,
  FileTextIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
} from "lucide-react";

export function GenezioPricingProducts() {
  const products = [
    {
      icon: BarChart3Icon,
      name: "Monitor & benchmark",
      description:
        "Visibility, recommendation share, sentiment & citations, per engine, persona, and market.",
      to: "/conversational-brand-presence/",
    },
    {
      icon: FileTextIcon,
      name: "Content Hub",
      description:
        "Data-backed content briefs your team can ship, and drafts them when you need speed.",
      to: "/content-hub/",
    },
    {
      icon: ScanSearchIcon,
      name: "Content Analysis",
      description:
        "Check whether AI can read your page and whether it's built to get cited, pre- and post-publish.",
      to: "/content-analysis/",
    },
    {
      icon: ShoppingBagIcon,
      name: "In-Chat Shopping",
      description:
        "AI product intelligence, how AI ranks, prices, sources, and sells your products.",
      to: "/in-chat-shopping/",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#050506] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm text-emerald-400 uppercase tracking-wider mb-4 font-semibold">
            One platform, every product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Every enterprise plan includes the full platform
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mt-5">
            Measure, diagnose, publish, and sell, the complete suite, scoped to
            the engines, markets, and volume you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={i}
                to={p.to}
                className="group flex items-start gap-4 bg-[#0A0A0C] border border-[#1C1C20] rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {p.name}
                    </h3>
                    <ArrowRightIcon className="w-4 h-4 text-white/20 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-[#B0B0B3] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
