import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  GlobeIcon,
  MailIcon,
  CheckCircle2Icon,
  Loader2Icon,
} from "lucide-react";

/**
 * Lead capture: enter a domain + email, we email a site AI-readiness analysis.
 * Submits to the Genezio Zoho form via a hidden iframe (same pattern used
 * elsewhere on the site). Update ZOHO_ACTION / field names to the dedicated
 * Website Analyzer form when it's ready.
 */
const ZOHO_ACTION =
  "https://forms.zohopublic.eu/genezio1/form/IndustryReportUK/formperma/qSA39uMeRrOgilhwxH5VK30jDRp58OiflOnixL6yjmE";

export function WebsiteAnalyzerReportCta() {
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
      // Non-blocking: still confirm to the user.
    }

    // Optimistic confirmation (best-effort submit into a hidden iframe).
    setStatus("success");
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="bg-[#0A0A0C] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <HeroEyebrow className="mb-6 mx-auto w-fit">
            Free site analysis
          </HeroEyebrow>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Get your site's AI-readiness analysis by email
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-8">
            Add your domain and we'll email you a full AI-readiness analysis,
            where answer engines can reach you, where they can't, and what to
            fix first.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30">
                <CheckCircle2Icon className="w-6 h-6 text-emerald-400" />
              </span>
              <p className="text-lg font-semibold text-white">
                Your analysis is on its way
              </p>
              <p className="text-sm text-white/60 max-w-sm">
                We'll email{" "}
                <span className="text-white/80 font-medium">{email}</span> the
                report for{" "}
                <span className="text-white/80 font-medium">{domain}</span>{" "}
                shortly.
              </p>
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
                  className="h-12 bg-emerald-400 hover:bg-emerald-300 text-black px-7 font-semibold rounded-xl transition-colors duration-200 disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <Loader2Icon className="w-4 h-4 animate-spin" />
                  ) : (
                    "Email me the analysis"
                  )}
                </Button>
              </div>
              <p className="text-xs text-white/40 pt-1">
                No spam. One report, straight to your inbox.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
