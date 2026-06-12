import { FlaskConicalIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPostType } from "@/lib/posts";

const badgeConfig: Record<
  BlogPostType,
  { label: string; icon: typeof FlaskConicalIcon }
> = {
  research: { label: "Research", icon: FlaskConicalIcon },
};

const sizeClasses = {
  sm: "gap-1 px-2 py-0.5 text-[10px] [&_svg]:w-3 [&_svg]:h-3",
  md: "gap-1.5 px-3 py-1 text-xs [&_svg]:w-3.5 [&_svg]:h-3.5",
  lg: "gap-2 px-4 py-2 text-sm [&_svg]:w-4 [&_svg]:h-4",
};

export function BlogPostTypeBadge({
  type,
  size = "md",
  className,
}: {
  type: BlogPostType;
  size?: keyof typeof sizeClasses;
  className?: string;
}) {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-semibold uppercase tracking-wide",
        "bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-fuchsia-500/15",
        "border border-violet-400/25 shadow-[0_0_20px_rgba(139,92,246,0.08)]",
        sizeClasses[size],
        className
      )}
    >
      <Icon className="text-violet-400 shrink-0" />
      <span className="bg-gradient-to-r from-violet-200 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
        {config.label}
      </span>
    </div>
  );
}
