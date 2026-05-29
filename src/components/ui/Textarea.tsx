import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function Textarea({ label, id, className, ...props }: TextareaProps) {
  const textareaId =
    id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}-textarea`;

  return (
    <label className="grid gap-1.5" htmlFor={textareaId}>
      <span className="text-sm font-semibold text-current">{label}</span>
      <textarea
        id={textareaId}
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
