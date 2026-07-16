import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost";
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-[12px] px-[18px] text-[13px] font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
        variant === "primary" &&
          "bg-white font-heading text-black hover:bg-white/90",
        variant === "ghost" &&
          "border border-white/10 bg-white/10 font-heading text-white/80 hover:bg-white/20",
        className,
      )}
      {...props}
    />
  );
}
