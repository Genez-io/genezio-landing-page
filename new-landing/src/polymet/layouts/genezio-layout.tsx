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

  return (
    <div className="min-h-screen bg-black text-foreground flex flex-col">
      <GenezioHeader />

      <main className="flex-1">{children}</main>
      <GenezioFooter />
    </div>
  );
}
