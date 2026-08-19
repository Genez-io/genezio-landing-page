import { PolymetSEO } from "@/polymet/components/polymet-seo";

export function CookiePolicy() {
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
