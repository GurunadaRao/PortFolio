import { clsx } from "../../lib/utils";

export function Separator({ className }: { className?: string }) {
  return <div className={clsx("h-px w-full bg-white/10", className)} />;
}
