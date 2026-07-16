import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import type { SectionComponentProps } from "@/lib/types";

export function HeroSection({ id, data }: SectionComponentProps<"hero">) {
  return (
    <SectionWrapper id={id} className="py-24 sm:py-32">
      <div className="flex flex-col items-start">
        {data.badge ? (
          <span className="rounded-sm border-[0.5px] border-accent-ring bg-accent-tint px-2.5 py-1 font-body text-[11px] uppercase tracking-[0.04em] text-accent">
            {data.badge}
          </span>
        ) : null}

        <h1 className="mt-5 font-heading text-[48px] font-semibold leading-[1.05] tracking-tight text-primary sm:text-[64px]">
          {data.name}
        </h1>

        <p className="mt-5 max-w-[520px] font-body text-[15px] leading-relaxed text-secondary">
          {data.tagline}
        </p>

        {data.techTags?.length ? (
          <ul className="mt-8 flex flex-wrap gap-2">
            {data.techTags.map((tag) => (
              <li
                key={tag}
                className="rounded-sm border-[0.5px] border-border-soft bg-elevated px-2 py-1 font-mono text-[11px] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {(data.primaryCta || data.ghostCta) && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
      </div>
    </SectionWrapper>
  );
}
