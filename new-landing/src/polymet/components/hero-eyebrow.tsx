import type { ReactNode } from "react";

interface HeroEyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * The standard hero/section eyebrow (kicker) used across the site:
 * a plain uppercase, wide-tracked label. No pill, no marker, so it reads
 * editorial rather than templated.
 */
export function HeroEyebrow({ children, className = "" }: HeroEyebrowProps) {
  return (
    <div
      className={`text-xs font-semibold uppercase tracking-[0.2em] text-white/50 ${className}`}
    >
      {children}
    </div>
  );
}
