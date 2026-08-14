import {
  ShieldCheckIcon,
  KeyRoundIcon,
  LockIcon,
  HeadsetIcon,
  DatabaseIcon,
} from "lucide-react";

export function GenezioEnterpriseTrustBand() {
  const items = [
    { icon: ShieldCheckIcon, label: "SOC 2 compliant" },
    { icon: KeyRoundIcon, label: "SSO / SAML" },
    { icon: LockIcon, label: "GDPR & DPA" },
    { icon: HeadsetIcon, label: "Dedicated account manager" },
    { icon: DatabaseIcon, label: "Custom data retention" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <p className="text-center text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-medium mb-8">
          Built for the enterprise
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0A0A0C] border border-white/10"
              >
                <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-white/80 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
