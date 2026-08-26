import { Link } from "react-router";
import {
  ShieldCheckIcon,
  BadgeCheckIcon,
  FileCheck2Icon,
  KeyRoundIcon,
  LockIcon,
} from "lucide-react";

const TRUST_CENTER_URL = "https://trust.genezio.com/";

export function GenezioEnterpriseTrustBand() {
  const items = [
    { icon: ShieldCheckIcon, label: "SOC 2 Type II", href: TRUST_CENTER_URL, external: true },
    { icon: BadgeCheckIcon, label: "ISO 27001", href: "/security/" },
    { icon: FileCheck2Icon, label: "CSA STAR Level 1", href: "/security/" },
    { icon: LockIcon, label: "GDPR compliant", href: "/security/" },
    { icon: KeyRoundIcon, label: "SSO / SAML", href: "/security/" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#050506] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <p className="text-center text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-medium mb-8">
          Built for the enterprise
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const className =
              "inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0A0A0C] border border-white/10 hover:border-white/20 transition-colors";
            const inner = (
              <>
                <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-white/80 whitespace-nowrap">
                  {item.label}
                </span>
              </>
            );
            return item.external ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={i} to={item.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
