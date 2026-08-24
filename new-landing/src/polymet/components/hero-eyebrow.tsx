import type { ReactNode } from "react";

interface HeroEyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * The standard hero/section eyebrow (kicker) used across the site:
 * a small green square marker + an uppercase, wide-tracked label. No pill,
 * to match the section labels elsewhere and read editorial rather than templated.
 */
export function HeroEyebrow({ children, className = "" }: HeroEyebrowProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Small green square: mirrors the dot on the "i" in the Genezio logo */}
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-[2px] bg-emerald-400" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        {children}
      </span>
    </div>
  );
}
