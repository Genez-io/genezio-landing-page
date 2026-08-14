import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { Link } from "react-router";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { GenezioCtaSection } from "@/polymet/components/genezio-cta-section";
import {
  GlobeIcon,
  BotIcon,
  ListTreeIcon,
  QuoteIcon,
  CodeIcon,
  GaugeIcon,
  SearchIcon,
  ScanLineIcon,
  ClipboardListIcon,
  ArrowRightIcon,
  AlertTriangleIcon,
  MailIcon,
  Loader2Icon,
  CheckCircle2Icon,
} from "lucide-react";

const DEMO_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30EAVu1QPRbggnIoR502OSYQwgn_fnBZYKo6AoZsu8ApjuqBdq59VHOxs3AsynJnOz1_G-kHnC";

/**
 * Zoho lead-capture endpoint (hidden-iframe POST). Update to the dedicated
 * Website Analyzer form + field names when it's ready.
 */
const ZOHO_ACTION =
  "https://forms.zohopublic.eu/genezio1/form/IndustryReportUK/formperma/qSA39uMeRrOgilhwxH5VK30jDRp58OiflOnixL6yjmE";

/* ─────────────────────────────  HERO  ───────────────────────────── */
function WebsiteAnalyzerHero() {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim() || !email.trim() || status === "submitting") return;
    setStatus("submitting");
    try {
      let iframe = document.getElementById(
        "genezio_hidden_iframe"
      ) as HTMLIFrameElement | null;
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "genezio_hidden_iframe";
        iframe.name = "genezio_hidden_iframe";
        iframe.style.cssText =
          "position:absolute;width:0;height:0;border:0;visibility:hidden";
        document.body.appendChild(iframe);
      }
      const form = document.createElement("form");
      form.method = "POST";
      form.action = ZOHO_ACTION;
      form.target = "genezio_hidden_iframe";
      form.style.display = "none";
      form.setAttribute("accept-charset", "UTF-8");
      const fields: Record<string, string> = {
        Email: email.trim(),
        Website: domain.trim(),
      };
      for (const [name, value] of Object.entries(fields)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => {
        if (form.parentNode) form.parentNode.removeChild(form);
      }, 1500);
    } catch {
      /* best-effort */
    }
    setStatus("success");
  };

  return (
    <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <HeroEyebrow className="mb-6 mx-auto w-fit">Website Analyzer</HeroEyebrow>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Is your whole site ready
          <br />
          <span className="text-emerald-400">for AI to recommend?</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Enter your domain and we'll email you an instant, site-wide
          AI-readiness analysis, where answer engines can reach you, where they
          can't, and exactly what to fix first.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-start gap-3 bg-[#0A0A0C] border border-white/10 rounded-2xl p-5 text-left max-w-md mx-auto">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-500/30">
              <CheckCircle2Icon className="w-5 h-5 text-emerald-400" />
            </span>
            <div>
              <p className="text-white font-semibold">
                Your analysis is on its way
              </p>
              <p className="text-sm text-white/60">
                We'll email{" "}
                <span className="text-white/80 font-medium">{email}</span> the
                report for{" "}
                <span className="text-white/80 font-medium">{domain}</span>{" "}
                shortly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-3">
            <div className="relative">
              <GlobeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                inputMode="url"
                placeholder="yourcompany.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                required
                className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-white/20"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-white/20"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="h-12 bg-emerald-400 hover:bg-emerald-300 text-black px-6 font-semibold rounded-xl transition-colors duration-200 disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <Loader2Icon className="w-4 h-4 animate-spin" />
                ) : (
                  "Email me the analysis"
                )}
              </Button>
            </div>
          </form>
        )}

        <p className="text-xs text-white/40 mt-4">
          Free · One report to your inbox · No credit card
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────  SCORE VISUAL  ───────────────────────── */
function ScoreVisual() {
  const categories = [
    { label: "Crawler access", score: 92, good: true },
    { label: "Content structure", score: 74, good: true },
    { label: "Schema & metadata", score: 86, good: true },
    { label: "Page performance", score: 80, good: true },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">One score, every gap</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            A single AI-readiness score for your domain
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
            We roll every check into one number, then break it down so you know
            what is dragging it down and what to fix first.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-6 md:gap-8 items-stretch">
          {/* Overall score card */}
          <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0C] p-8 md:p-10 flex flex-col items-center justify-center text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Overall AI readiness
            </div>
            <div className="relative flex items-center justify-center mb-4">
              <div className="text-7xl md:text-8xl font-extrabold text-emerald-400 leading-none">
                78
              </div>
              <div className="text-2xl font-bold text-white/40 self-end mb-2 ml-1">
                /100
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-white/5 text-zinc-300 border border-white/10">
              <AlertTriangleIcon className="w-3.5 h-3.5" /> Room to improve
            </span>
            <p className="text-sm text-white/50 mt-6 max-w-xs">
              Illustrative score. Your real audit is scoped to your domain and
              the engines you care about.
            </p>
          </div>

          {/* Category breakdown */}
          <div className="rounded-3xl border border-white/10 bg-[#0A0A0C] p-8 md:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Breakdown by area
            </div>
            <div className="space-y-5">
              {categories.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">
                      {c.label}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        c.good ? "text-emerald-400" : "text-zinc-300"
                      }`}
                    >
                      {c.score}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        c.good ? "bg-emerald-500" : "bg-zinc-400"
                      }`}
                      style={{ width: `${c.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  WHAT IT CHECKS  ─────────────────────── */
function WhatItChecks() {
  const checks = [
    {
      icon: BotIcon,
      title: "Crawler access",
      description:
        "robots.txt, llms rules, and server responses, so you know which AI crawlers you let in and which you accidentally block.",
    },
    {
      icon: ListTreeIcon,
      title: "Content structure",
      description:
        "Headings, answers, and semantics across the site, so engines can lift a clean answer from your pages.",
    },
    {
      icon: QuoteIcon,
      title: "Citation coverage",
      description:
        "How often the domain is already cited by answer engines, and which pages are pulling their weight.",
    },
    {
      icon: CodeIcon,
      title: "Schema & metadata",
      description:
        "Structured data, canonical tags, and metadata that help engines understand what each page is about.",
    },
    {
      icon: GaugeIcon,
      title: "Performance & rendering",
      description:
        "Whether content renders without JavaScript and loads fast enough for a crawler to read it fully.",
    },
    {
      icon: SearchIcon,
      title: "Coverage gaps",
      description:
        "The topics people ask AI in your category that your site does not answer well yet.",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">What we check</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            Every signal that decides if AI can use your site
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {checks.map((check) => {
            const Icon = check.icon;
            return (
              <div
                key={check.title}
                className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-7 hover:border-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {check.title}
                </h3>
                <p className="text-sm text-[#B0B0B3] leading-relaxed">
                  {check.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  HOW IT WORKS  ───────────────────────── */
function HowItWorks() {
  const steps = [
    {
      icon: GlobeIcon,
      label: "01",
      title: "Enter a domain",
      description:
        "Point Website Analyzer at your site, or a competitor's, and we start crawling the way an answer engine would.",
    },
    {
      icon: ScanLineIcon,
      label: "02",
      title: "We crawl and score",
      description:
        "Every page is scored on access, structure, citability, and coverage, then rolled into one AI-readiness number.",
    },
    {
      icon: ClipboardListIcon,
      label: "03",
      title: "Get a prioritized plan",
      description:
        "Findings become an ordered fix list, biggest impact first, ready to send straight to your team or to Content Hub.",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#0E0E10] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-4 mx-auto w-fit">How it works</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white max-w-3xl mx-auto">
            From URL to fix list in minutes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative">
                <div className="h-full bg-[#0A0A0C] border border-white/10 rounded-2xl p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-xs font-mono text-white/30">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#B0B0B3] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRightIcon className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-emerald-500/30 z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  NEXT STEP  ──────────────────────────── */
function NextStep() {
  const cards = [
    {
      icon: QuoteIcon,
      name: "Content Analysis",
      description:
        "Go page-deep. Score a single draft or URL on eight checks, pre-publish and post-publish.",
      to: "/content-analysis/",
    },
    {
      icon: ClipboardListIcon,
      name: "Content Hub",
      description:
        "Turn every gap the analyzer finds into a data-backed brief your team can ship.",
      to: "/content-hub/",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-[#050506] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            From audit to action
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Website Analyzer finds the gaps. These take you the rest of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.name}
                to={card.to}
                className="group block bg-[#0A0A0C] border border-white/10 rounded-2xl p-7 md:p-8 hover:border-white/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.name}
                </h3>
                <p className="text-[#B0B0B3] text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PAGE  ───────────────────────────── */
export function WebsiteAnalyzer() {
  return (
    <>
      <PolymetSEO
        title="Website Analyzer, Is Your Site Ready for AI? | Genezio"
        description="Genezio Website Analyzer runs an instant, site-wide AI-readiness audit: crawler access, content structure, citation coverage, schema, and performance, rolled into one score with a prioritized fix list. Book a demo!"
        canonicalPath="/website-analyzer/"
        ogImage="https://genezio.com/images/genezio-black-logo.webp"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does Genezio Website Analyzer check?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website Analyzer audits a whole domain for AI readiness: crawler access (robots.txt and server responses), content structure, how often the domain is already cited by answer engines, schema and metadata, page performance and rendering, and the topic coverage gaps in your category. Every check rolls into one AI-readiness score with a prioritized fix list.",
              },
            },
            {
              "@type": "Question",
              name: "How is Website Analyzer different from Content Analysis?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website Analyzer scores your whole site at once and gives you a single AI-readiness number with the biggest gaps to fix first. Content Analysis goes page-deep on a single draft or URL, before and after you publish. Most teams start with the site-wide audit, then use Content Analysis and Content Hub to fix the pages it flags.",
              },
            },
          ],
        }}
      />
      <div className="min-h-screen bg-[#050506]">
        <WebsiteAnalyzerHero />
        <ScoreVisual />
        <WhatItChecks />
        <HowItWorks />
        <NextStep />
        <GenezioCtaSection />
      </div>
    </>
  );
}

export default WebsiteAnalyzer;
