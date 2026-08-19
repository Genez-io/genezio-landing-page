import { useEffect } from "react";
import { PolymetSEO } from "@/polymet/components/polymet-seo";

const COOKIEYES_POLICY_SCRIPT_URL =
  "https://cdn-cookieyes.com/client_data/7f0138f89a561e3e38e64c98/cookie-policy/script.js";

export function CookiePolicy() {
  useEffect(() => {
    const container = document.getElementById("cky-auto-cookie-policy");
    if (!container) return;

    // Remove any existing script tag to allow clean re-execution on SPA route transitions
    const oldScript = document.getElementById("cky-cookie-policy");
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement("script");
    script.src = COOKIEYES_POLICY_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.id = "cky-cookie-policy";

    container.appendChild(script);
  }, []);

  return (
    <>
      <PolymetSEO
        title="Genezio Cookie Policy - How We Use Cookies"
        description="Learn how Genezio uses cookies and similar technologies to enhance your browsing experience, analyze traffic, and personalize content."
        canonicalPath="/cookie-policy/"
      />
      <div className="min-h-screen bg-[#050506]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-none">
            <div id="cky-auto-cookie-policy" />
          </div>
        </div>
      </div>
    </>
  );
}
