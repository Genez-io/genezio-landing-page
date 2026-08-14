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
  DatabaseIcon,
  LockIcon,
  ClockIcon,
  FileCheck2Icon,
  PlugIcon,
  ServerIcon,
  GaugeIcon,
  LayersIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
  FingerprintIcon,
  BadgeCheckIcon,
  ClipboardCheckIcon,
  type LucideIcon,
} from "lucide-react";

const SALES_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";
const TRUST_CENTER_URL = "https://trust.genezio.com/";
const CSA_STAR_URL = "https://cloudsecurityalliance.org/star/registry/genezio";

/* ─────────────────────────────  DATA  ───────────────────────────── */
interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  salesAssisted?: boolean;
  /** Optional internal link rendered under the description */
  href?: string;
  linkLabel?: string;
}

interface CapabilityGroup {
  label: string;
  items: Capability[];
}

const GROUPS: CapabilityGroup[] = [
  {
    label: "Access & identity",
    items: [
      {
        icon: KeyRoundIcon,
        title: "SSO / SAML",
        description:
          "Sign in through your identity provider with SAML 2.0. Centralize authentication and enforce your own login policies.",
      },
      {
        icon: UsersIcon,
        title: "SCIM provisioning",
        description:
          "Automate user onboarding and offboarding so access follows your directory of record.",
        salesAssisted: true,
      },
      {
        icon: FingerprintIcon,
        title: "Role-based access control",
        description:
          "Grant least-privilege permissions per workspace and role, from admin to read-only analyst.",
      },
      {
        icon: ScrollTextIcon,
        title: "Audit logs",
        description:
          "Track who accessed what and when across your workspaces for review and accountability.",
      },
    ],
  },
  {
    label: "Data & privacy",
    items: [
      {
        icon: DatabaseIcon,
        title: "Data residency & regionality",
        description:
          "Keep processing and storage aligned to your region to meet local data-handling requirements.",
        salesAssisted: true,
      },
      {
        icon: LockIcon,
        title: "Encryption in transit & at rest",
        description:
          "All data is encrypted with TLS in transit and AES-256 at rest, end to end.",
      },
      {
        icon: ClockIcon,
        title: "Configurable data retention",
        description:
          "Set retention windows that match your policy, and remove data when you no longer need it.",
      },
      {
        icon: FileCheck2Icon,
        title: "GDPR compliant",
        description:
          "Compliant with GDPR for the data we process, with a Data Processing Agreement (DPA) available on request.",
      },
    ],
  },
  {
    label: "Platform & integration",
    items: [
      {
        icon: PlugIcon,
        title: "REST API",
        description:
          "Pull visibility and conversation data into your own systems with a documented REST API.",
      },
      {
        icon: ServerIcon,
        title: "MCP server",
        description:
          "Query your answer-engine data from any MCP-compatible assistant with scoped, read-only access.",
        href: "/mcp/",
        linkLabel: "Explore the MCP server",
      },
      {
        icon: LayersIcon,
        title: "Portfolio & multi-brand workspaces",
        description:
          "Organize brands, regions, and business units into separate workspaces under one account.",
      },
      {
        icon: GaugeIcon,
        title: "99.9% uptime target",
        description:
          "Operated on resilient cloud infrastructure with a 99.9% uptime target and proactive monitoring.",
      },
    ],
  },
  {
    label: "Certifications & attestations",
    items: [
      {
        icon: ShieldCheckIcon,
        title: "SOC 2 Type II",
        description:
          "Security controls independently examined against SOC 2 Type II criteria. Report available under NDA.",
        salesAssisted: true,
      },
      {
        icon: BadgeCheckIcon,
        title: "ISO/IEC 27001",
        description:
          "Information security managed under an ISO/IEC 27001-certified management system.",
      },
      {
        icon: FileCheck2Icon,
        title: "CSA STAR Level 1",
        description:
          "Listed in the Cloud Security Alliance STAR registry for cloud security assurance.",
        href: "https://cloudsecurityalliance.org/star/registry/genezio",
        linkLabel: "View our STAR registry entry",
      },
      {
        icon: ClipboardCheckIcon,
        title: "Vendor security reviews supported",
        description:
          "We complete security questionnaires and assessments to move your procurement process forward.",
        salesAssisted: true,
      },
    ],
  },
];

/* ─────────────────────────  SHARED PIECES  ─────────────────────── */
function Hairline() {
  return (
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

function SalesAssistedPill() {
  return (
    <span className="ml-2 inline-block align-middle text-[10px] font-medium uppercase tracking-wider text-white/40 border border-white/10 rounded-md px-1.5 py-0.5 bg-white/5">
      Sales-assisted
    </span>
  );
}

function GroupLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="h-1.5 w-1.5 rounded-[2px] bg-emerald-400" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        {children}
      </span>
    </div>
  );
}

function CapabilityCard({ item }: { item: Capability }) {
  const Icon = item.icon;
  return (
    <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors">
      <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-emerald-400" />
      </div>
      <h3 className="text-base font-semibold text-white leading-snug">
        {item.title}
        {item.salesAssisted && <SalesAssistedPill />}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        {item.description}
      </p>
      {item.href &&
        (item.href.startsWith("http") ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            {item.linkLabel ?? "Learn more"}
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        ) : (
          <Link
            to={item.href}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            {item.linkLabel ?? "Learn more"}
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
    </div>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-6 mx-auto w-fit">
          Enterprise & security
        </HeroEyebrow>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
          Enterprise-grade from the first conversation.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Genezio is built for the way large organizations buy and operate:
          SSO and SCIM, regional data handling, encryption everywhere, and a
          documented path through your security review. Everything you need to
          clear procurement with confidence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={SALES_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-7 py-6 text-base font-semibold rounded-xl transition-colors duration-200"
            >
              Talk to Enterprise Sales
            </Button>
          </a>
          <a
            href={SALES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-zinc-300 hover:text-white transition-colors duration-200 text-base font-medium group"
          >
            Get a demo
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
    },
    {
      icon: LockIcon,
      name: "GDPR compliant",
      desc: "DPA available on request.",
    },
  ];

  return (
    <section className="relative bg-[#050506] py-16 md:py-20">
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
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-base font-semibold text-white">
                  {c.name}
                </div>
                <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                  {c.desc}
                </p>
                {c.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    View registry entry
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

/* ───────────────────────  CAPABILITY SECTIONS  ─────────────────── */
function CapabilitySections() {
  return (
    <section className="relative bg-[#0E0E10] py-20 md:py-28">
      <Hairline />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-tight">
            Everything your security team asks for
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
            Controls and documentation mapped to how enterprise buyers evaluate
            vendors, across identity, data handling, platform, and compliance.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <GroupLabel>{group.label}</GroupLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {group.items.map((item) => (
                  <CapabilityCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  TRUST BAND  ────────────────────────── */
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
    <section className="relative bg-[#050506] py-20 md:py-28">
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
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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

        <CapabilitySections />

        <TrustBand />

        <GenezioGroupLevelView />

        <GenezioCtaSection />
      </div>
    </>
  );
}
