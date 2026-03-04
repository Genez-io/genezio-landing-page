import { ReactNode } from "react";
import { GenezioHeaderV2 } from "@/polymet/v2/components/genezio-header";
import { GenezioFooterV2 } from "@/polymet/v2/components/genezio-footer";

interface GenezioLayoutV2Props {
  children: ReactNode;
}

export function GenezioLayoutV2({ children }: GenezioLayoutV2Props) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <GenezioHeaderV2 />
      <main className="flex-1">{children}</main>
      <GenezioFooterV2 />
    </div>
  );
}

