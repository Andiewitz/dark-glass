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
        "inline-flex h-9 items-center justify-center rounded-md px-[18px] text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring",
        variant === "primary" &&
          "border-[0.5px] border-accent bg-transparent font-heading text-accent hover:bg-accent-tint",
        variant === "ghost" &&
          "border-[0.5px] border-border bg-transparent font-heading text-muted hover:bg-elevated",
        className,
      )}
      {...props}
    />
  );
}
