import { ReactNode } from "react";
import { GenezioHeader } from "@/polymet/components/genezio-header";
import { GenezioFooter } from "@/polymet/components/genezio-footer";

interface GenezioLayoutProps {
  children: ReactNode;
}

export function GenezioLayout({ children }: GenezioLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-foreground flex flex-col">
      <GenezioHeader />

      <main className="flex-1">{children}</main>
      <GenezioFooter />
    </div>
  );
}
