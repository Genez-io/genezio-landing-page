import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import { GenezioHeader } from "@/polymet/components/genezio-header";
import { GenezioFooter } from "@/polymet/components/genezio-footer";

interface GenezioLayoutProps {
  children: ReactNode;
}

export function GenezioLayout({ children }: GenezioLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top or handle path changes if needed, but SEO is now handled by PolymetSEO per-page.
  }, [location.pathname]);

  // Blog/research article pages use a narrower reading container; align the
  // header and footer to the same width so all three share the same edges.
  const isArticle =
    /^\/(blog|research)\/[^/]+\/?$/.test(location.pathname) &&
    !location.pathname.startsWith("/blog/author");
  const containerWidth = isArticle ? "max-w-5xl" : "max-w-7xl";

  return (
    <div className="min-h-screen bg-[#050506] text-foreground flex flex-col">
      <GenezioHeader maxWidthClass={containerWidth} />

      <main className="flex-1">{children}</main>
      <GenezioFooter maxWidthClass={containerWidth} />
    </div>
  );
}
