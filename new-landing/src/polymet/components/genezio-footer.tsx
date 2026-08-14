import { LinkedinIcon, TwitterIcon } from "lucide-react";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Platform",
    links: [
      { label: "AI Agent Analytics", href: "/increase-conversion/" },
      { label: "Website Analyzer", href: "/website-analyzer/" },
      { label: "Content Analysis", href: "/content-analysis/" },
      { label: "Content Hub", href: "/content-hub/" },
      { label: "In-Chat Shopping", href: "/in-chat-shopping/" },
      { label: "MCP", href: "/mcp/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "For Agencies", href: "/agencies/" },
      { label: "Enterprise & Security", href: "/security/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "About Genezio", href: "/about-genezio/" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Research", href: "/research/" },
      { label: "Glossary", href: "/glossary/" },
      { label: "Industry Leaderboards", href: "/industry-leaderboards/" },
      { label: "Docs", href: "/docs/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms-and-conditions/" },
      { label: "Support Terms", href: "/support-terms/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Data Processing Agreement", href: "/data-processing-agreement/" },
      { label: "Trust Center", href: "https://trust.genezio.com/" },
    ],
  },
];

export function GenezioFooter() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2">
            <a
              href="/"
              className="inline-flex items-center gap-2 mb-4"
              aria-label="Genezio Homepage"
            >
              <img
                src="/images/logo-white.svg"
                alt="Genezio Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              The enterprise AI visibility platform. Win the recommendation, not
              just the mention.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com/company/genezio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Genezio on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-emerald-400 hover:border-white/20 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/genezioai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Genezio on X"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-emerald-400 hover:border-white/20 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-[2px] bg-emerald-400" />
                <h3 className="text-white font-semibold text-sm">
                  {col.heading}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-zinc-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Genezio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span className="h-1.5 w-1.5 rounded-[2px] bg-emerald-400" />
            SOC 2 Type II · GDPR &amp; DPA ready
          </div>
        </div>
      </div>
    </footer>
  );
}
