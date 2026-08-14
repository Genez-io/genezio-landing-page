import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  KeyRoundIcon,
  UsersIcon,
  ShieldCheckIcon,
  ScrollTextIcon,
  DatabaseIcon,
  FileCheck2Icon,
  PlugIcon,
  HeadsetIcon,
  ArrowRightIcon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

export function GenezioEnterpriseSection() {
  const capabilities = [
    { icon: KeyRoundIcon, title: "SSO / SAML", detail: "Self-service single sign-on" },
    { icon: UsersIcon, title: "SCIM provisioning", detail: "Automated user lifecycle" },
    { icon: ShieldCheckIcon, title: "Role-based access", detail: "Granular roles & permissions" },
    { icon: ScrollTextIcon, title: "Audit logs", detail: "Every action, traceable" },
    { icon: DatabaseIcon, title: "Data residency", detail: "Regional controls & retention" },
    { icon: FileCheck2Icon, title: "SOC 2 Type II", detail: "Independently audited" },
    { icon: PlugIcon, title: "API + MCP", detail: "Your data in any workflow" },
    { icon: HeadsetIcon, title: "Dedicated support", detail: "Named account manager" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#050506]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">Built for enterprise</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Enterprise-ready, from procurement to production
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            Built for banks, telecom groups, agencies and multinationals — the
            security, controls and multi-brand reporting your teams and vendors
            expect. Some capabilities are sales-assisted at rollout.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-5 md:p-6 hover:border-white/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-base font-semibold text-white mb-1 leading-tight">
                  {c.title}
                </div>
                <div className="text-sm text-white/50 leading-snug">
                  {c.detail}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
            >
              Talk to Enterprise Sales
            </Button>
          </a>
          <Link
            to="/security/"
            className="inline-flex items-center gap-2 px-5 py-3 text-white/70 hover:text-white transition-colors text-base font-medium group"
          >
            See security &amp; compliance
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
