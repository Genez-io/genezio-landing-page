import type { ReactNode } from "react";

interface HeroEyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * The standard hero/section eyebrow tag used across the site:
 * a subtle pill with a live green dot and an uppercase, wide-tracked label.
 */
export function HeroEyebrow({ children, className = "" }: HeroEyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 ${className}`}
    >
      {/* Small green square: mirrors the dot on the "i" in the Genezio logo */}
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-[2px] bg-emerald-400" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
        {children}
      </span>
    </div>
  );
}
