import type { ComponentType } from "react";
import type { SectionComponentProps, SectionType } from "@/lib/types";
import { HeroSection } from "./HeroSection";
import { PricingSection } from "./PricingSection";

type SectionComponentMap = {
  [K in SectionType]: ComponentType<SectionComponentProps<K>>;
};

export const sectionRegistry: SectionComponentMap = {
  hero: HeroSection,
  pricing: PricingSection,
};
