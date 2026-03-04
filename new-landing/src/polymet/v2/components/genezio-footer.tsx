import { Link } from "react-router";

export function GenezioFooterV2() {
  const productLinks = [
    { label: "Increase Lead Generation", href: "/conversational-brand-presence" },
    { label: "Increase Conversion", href: "/increase-conversion" },
    { label: "Increase In-Chat Shopping (soon)", href: "#" },
  ];

  const supportLinks = [
    { label: "Terms And Conditions", href: "/terms-and-conditions" },
    { label: "Support Terms", href: "/support-terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Data Processing Agreement", href: "/data-processing-agreement" },
  ];

  return (
    <footer className="relative bg-background border-t border-border py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Brand section */}
          <div className="space-y-4">
            <Link to="/landing-v2" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"
                    fill="hsl(var(--background))"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-foreground">genezio</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The platform built for Generative Search and Answer Engine Optimization.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Genezio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

