import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

type SectionWrapperProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-28", className)}>
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}
