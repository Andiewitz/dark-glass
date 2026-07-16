import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PricingGlass } from "@/components/ui/pricing-glass";
import type { SectionComponentProps } from "@/lib/types";

export function PricingSection({ id, data }: SectionComponentProps<"pricing">) {
  return (
    <SectionWrapper id={id} className="py-24 sm:py-32">
      <PricingGlass
        title={data.title}
        description={data.description}
        tiers={data.tiers}
      />
    </SectionWrapper>
  );
}
