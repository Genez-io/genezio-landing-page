import { Button } from "@/components/ui/button";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import { GenezioGroupLevelView } from "@/polymet/components/genezio-group-level-view";
import { Link } from "react-router";
import {
  ShieldCheckIcon,
  KeyRoundIcon,
  UsersIcon,
  ScrollTextIcon,
  LockIcon,
  FileCheck2Icon,
  ServerIcon,
  CodeIcon,
  ActivityIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
  BadgeCheckIcon,
  AlertTriangleIcon,
  type LucideIcon,
} from "lucide-react";

const SALES_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";
const TRUST_CENTER_URL = "https://trust.genezio.com/";
const CSA_STAR_URL = "https://cloudsecurityalliance.org/star/registry/genezio";

/* ─────────────────────────────  DATA  ───────────────────────────── */
interface SecurityDomain {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

const DOMAINS: SecurityDomain[] = [
  {
    icon: CodeIcon,
    title: "Application security",
    description:
      "Security is part of how we build, not a step at the end.",
    points: [
      "Secure development lifecycle with peer code review",
      "Dependency and vulnerability scanning in CI",
      "Regular security testing and tracked remediation",
    ],
  },
  {
    icon: ServerIcon,
    title: "Infrastructure & cloud",
    description:
      "Operated on hardened, reputable cloud infrastructure.",
    points: [
      "Network isolation and least-privilege service access",
      "Encrypted storage and managed key handling",
      "99.9% uptime target with proactive monitoring",
    ],
  },
  {
    icon: LockIcon,
    title: "Data protection",
    description:
      "Your data is encrypted, contained, and never used to train models.",
    points: [
      "TLS in transit and AES-256 at rest, end to end",
      "Regional data residency options",
      "Configurable retention and deletion on request",
      "We never train AI models on your data",
    ],
  },
  {
    icon: KeyRoundIcon,
    title: "Identity & access",
    description:
      "Authentication and permissions that fit your organization.",
    points: [
      "SSO / SAML 2.0 and SCIM provisioning",
      "Role-based access control, least privilege by default",
      "Audit logs across every workspace",
    ],
  },
  {
    icon: UsersIcon,
    title: "Organizational security",
    description:
      "The people and processes behind the platform are governed too.",
    points: [
      "Security awareness training for staff",
      "Periodic access reviews and offboarding controls",
      "Sub-processor and vendor risk management",
    ],
  },
  {
    icon: ActivityIcon,
    title: "Monitoring & resilience",
    description:
      "We watch production continuously and plan for the worst day.",
    points: [
      "Logging and monitoring of production systems",
      "A documented incident response process",
      "Backups and business continuity planning",
    ],
  },
];

/* ─────────────────────────  SHARED PIECES  ─────────────────────── */
function Hairline() {
  return (
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
      {children}
    </div>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-44 md:pb-28">

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-6 mx-auto w-fit">
          Security & trust
        </HeroEyebrow>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
          Enterprise-grade from the first conversation.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Genezio is built for the way large organizations buy and operate:
          independent certifications, encryption everywhere, regional data
          handling, and a documented path through your security review.
          Everything you need to clear procurement with confidence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={TRUST_CENTER_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
            >
              Visit our Trust Center
            </Button>
          </a>
          <a
            href={SALES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-zinc-300 hover:text-white transition-colors duration-200 text-base font-medium group"
          >
            Talk to Enterprise Sales
            <ArrowRightIcon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-white/40" />
            SOC 2 Type II
          </span>
          <span className="hidden sm:inline text-white/15">·</span>
          <span>ISO 27001</span>
          <span className="hidden sm:inline text-white/15">·</span>
          <span>CSA STAR Level 1</span>
          <span className="hidden sm:inline text-white/15">·</span>
          <span>GDPR compliant</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────  CERTIFICATIONS & TRUST CENTER  ──────────────── */
function CertificationsBand() {
  const certs = [
    {
      icon: ShieldCheckIcon,
      name: "SOC 2 Type II",
      desc: "Independently audited security controls.",
      href: TRUST_CENTER_URL,
      cta: "View in Trust Center",
    },
    {
      icon: BadgeCheckIcon,
      name: "ISO/IEC 27001",
      desc: "Certified information security management.",
    },
    {
      icon: FileCheck2Icon,
      name: "CSA STAR Level 1",
      desc: "Listed in the CSA STAR registry.",
      href: CSA_STAR_URL,
      cta: "View registry entry",
    },
    {
      icon: LockIcon,
      name: "GDPR compliant",
      desc: "DPA available on request.",
    },
  ];

  return (
    <section className="relative bg-[#0E0E10] py-16 md:py-20">
      <Hairline />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10 md:mb-12">
          <div>
            <GroupLabel>Certifications &amp; compliance</GroupLabel>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-white leading-tight">
              Audited, certified, and documented
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-white/60 leading-relaxed">
              Independent attestations and a public Trust Center, so your
              security team can verify us without waiting on an email.
            </p>
          </div>
          <a href={TRUST_CENTER_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-xl px-6 py-6 text-base font-semibold group"
            >
              Visit our Trust Center
              <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {certs.map((c) => {
            const Icon = c.icon;
            const body = (
              <>
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div className="text-base font-semibold text-white">
                    {c.name}
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {c.desc}
                </p>
                {c.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {c.cta ?? "Learn more"}
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                )}
              </>
            );
            return c.href ? (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors"
              >
                {body}
              </a>
            ) : (
              <div
                key={c.name}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7"
              >
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECURITY DOMAINS  ──────────────────────── */
function DomainsSection() {
  return (
    <section className="relative bg-[#050506] py-20 md:py-28">
      <Hairline />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-2xl mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-tight">
            Security built into every layer
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            The controls behind our certifications, spanning the application,
            the infrastructure it runs on, your data, and the people who
            operate it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {DOMAINS.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {d.title}
                  </h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  {d.description}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle2Icon className="mt-0.5 w-4 h-4 flex-shrink-0 text-emerald-400" />
                      <span className="text-sm text-white/70 leading-snug">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  DATA OWNERSHIP  ────────────────────── */
function TrustBand() {
  const points = [
    {
      icon: LockIcon,
      title: "Read-only by design",
      description:
        "Integrations and MCP access are scoped to read the data you connect, nothing more.",
    },
    {
      icon: BadgeCheckIcon,
      title: "Least privilege, always",
      description:
        "Access is granted to the minimum needed, reviewed regularly, and revoked on offboarding.",
    },
    {
      icon: ScrollTextIcon,
      title: "Auditable and yours",
      description:
        "Every access is logged, and you can export or delete your data on your terms.",
    },
  ];

  return (
    <section className="relative bg-[#0E0E10] py-20 md:py-28">
      <Hairline />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-tight">
            Your data stays yours
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            We hold your data under the narrowest permissions that make the
            product work, and we keep it accountable to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/50">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
            No training on your data
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
            Signable DPA
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
            Delete on request
          </span>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────  DOCUMENTATION & DISCLOSURE  ────────────────── */
function ResourcesSection() {
  const resources = [
    {
      icon: ShieldCheckIcon,
      title: "Trust Center",
      desc: "Live security posture, certifications, and documents on request.",
      href: TRUST_CENTER_URL,
      external: true,
      cta: "Open Trust Center",
    },
    {
      icon: FileCheck2Icon,
      title: "Data Processing Agreement",
      desc: "Roles, safeguards, and responsibilities for the data we process.",
      href: "/data-processing-agreement/",
      external: false,
      cta: "Read the DPA",
    },
    {
      icon: ScrollTextIcon,
      title: "Privacy Policy",
      desc: "How we collect, use, and protect personal data across the platform.",
      href: "/privacy-policy/",
      external: false,
      cta: "Read the policy",
    },
  ];

  return (
    <section className="relative bg-[#050506] py-20 md:py-28">
      <Hairline />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-2xl mb-12 md:mb-14">
          <GroupLabel>Documentation</GroupLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-white leading-tight">
            Everything your reviewers need
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            Self-serve the documents that move procurement forward, and reach us
            directly for anything scoped to your review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {resources.map((r) => {
            const Icon = r.icon;
            const body = (
              <>
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-white">
                    {r.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                  {r.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {r.cta}
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </>
            );
            const className =
              "group block bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors";
            return r.external ? (
              <a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {body}
              </a>
            ) : (
              <Link key={r.title} to={r.href} className={className}>
                {body}
              </Link>
            );
          })}
        </div>

        {/* Responsible disclosure */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7">
          <div className="flex items-start gap-3 flex-1">
            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <AlertTriangleIcon className="w-4 h-4 text-emerald-400" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-white">
                Report a vulnerability
              </h3>
              <p className="mt-1 text-sm text-white/60 leading-relaxed">
                We support responsible disclosure. If you believe you've found a
                security issue, tell us through our Trust Center and we'll
                respond quickly.
              </p>
            </div>
          </div>
          <a
            href={TRUST_CENTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex-shrink-0"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-xl px-5 py-5 text-sm font-semibold"
            >
              Report an issue
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PAGE  ───────────────────────────── */
export function Security() {
  return (
    <>
      <PolymetSEO
        title="Enterprise & Security | Genezio"
        description="Genezio is enterprise-ready: SOC 2 Type II, ISO/IEC 27001, CSA STAR Level 1, GDPR compliant, plus SSO/SAML, SCIM, RBAC, encryption in transit and at rest, and a public Trust Center."
        canonicalPath="/security/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
      />
      <div className="min-h-screen bg-[#050506]">
        <SecurityHero />

        <CertificationsBand />

        <DomainsSection />

        <TrustBand />

        <GenezioGroupLevelView />

        <ResourcesSection />

        <GenezioCtaSection />
      </div>
    </>
  );
}
