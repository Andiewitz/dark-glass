import React from "react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export function GridCard({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group bg-white/[0.03] relative isolate z-0 flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 px-5 py-4 backdrop-blur-xl transition-colors duration-150 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0">
        <div className="absolute -inset-[25%] -skew-y-12 [mask-image:linear-gradient(225deg,black,transparent)]">
          <GridPattern
            width={30}
            height={30}
            x={0}
            y={0}
            squares={getRandomPattern(5)}
            className="fill-white/5 stroke-white/10 absolute inset-0 size-full translate-y-2 transition-transform duration-150 ease-out group-hover:translate-y-0"
          />
        </div>
        <div
          className={cn(
            "absolute -inset-[10%] opacity-0 blur-[50px] transition-opacity duration-150 group-hover:opacity-10",
            "bg-[conic-gradient(#F35066_0deg,#F35066_117deg,#9071F9_180deg,#5182FC_240deg,#F35066_360deg)]",
          )}
        />
      </div>
      {children}
    </div>
  );
}

function getRandomPattern(length = 5): [x: number, y: number][] {
  // Deterministic pseudo-random so SSR and client render identically (no hydration mismatch).
  let seed = 1337;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  return Array.from({ length }, () => [
    Math.floor(rand() * 4) + 7,
    Math.floor(rand() * 6) + 1,
  ]);
}
