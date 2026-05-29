import { clsx } from "../../lib/utils";

type BadgeVariant = "default" | "secondary" | "outline" | "accent";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variant === "default" &&
          "border-cyan-400/30 bg-cyan-400/12 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.06)]",
        variant === "secondary" && "border-white/10 bg-white/6 text-slate-200",
        variant === "outline" &&
          "border-white/10 bg-transparent text-slate-200",
        variant === "accent" &&
          "border-amber-400/30 bg-amber-400/12 text-amber-100 shadow-[0_0_0_1px_rgba(251,191,36,0.06)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
