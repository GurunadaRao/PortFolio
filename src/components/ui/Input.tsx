import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <label className="grid gap-1.5" htmlFor={inputId}>
      <span className="text-sm font-semibold text-current">{label}</span>
      <input
        id={inputId}
        className={cn(
          "rounded-2xl border border-[#BFC9D1] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none",
          "focus:border-[#FF9B51] focus:ring-2 focus:ring-[#FF9B51]/25",
          className,
        )}
        {...props}
      />
    </label>
  );
}
