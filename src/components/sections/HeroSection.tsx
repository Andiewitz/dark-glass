import { Button } from "@/components/ui/Button";
import { AsciiArt } from "@/components/ui/ascii-art";
import { Container } from "@/components/layout/Container";
import type { SectionComponentProps } from "@/lib/types";

export function HeroSection({ id, data }: SectionComponentProps<"hero">) {
  return (
    <section id={id} className="relative h-screen w-full scroll-mt-0 overflow-hidden">
      <AsciiArt className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-48 bg-gradient-to-b from-transparent to-background" />

      <Container className="relative z-10 flex h-full flex-col items-start justify-center">
        {data.badge ? (
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-body text-[11px] uppercase tracking-[0.04em] text-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-md">
            {data.badge}
          </span>
        ) : null}

        <h1 className="mt-6 font-heading text-[48px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[72px]">
          {data.name}
        </h1>

        <p className="mt-6 max-w-[520px] font-body text-[16px] leading-relaxed text-white/60">
          {data.tagline}
        </p>

        {data.techTags?.length ? (
          <ul className="mt-8 flex flex-wrap gap-2">
            {data.techTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {(data.primaryCta || data.ghostCta) && (
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {data.primaryCta ? (
              <Button href={data.primaryCta.href} variant="primary">
                {data.primaryCta.label}
              </Button>
            ) : null}
            {data.ghostCta ? (
              <Button href={data.ghostCta.href} variant="ghost">
                {data.ghostCta.label}
              </Button>
            ) : null}
          </div>
        )}
      </Container>
    </section>
  );
}

