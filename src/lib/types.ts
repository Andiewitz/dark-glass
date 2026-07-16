export type SectionType = "hero" | "pricing";

export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ProjectPhoto {
  id: string | number;
  image: string;
  title?: string;
}

export interface HeroGallery {
  folderName?: string;
  dragHintText?: string;
  photos?: ProjectPhoto[];
}

export interface HeroData {
  badge?: string;
  name: string;
  tagline: string;
  techTags?: string[];
  primaryCta?: CtaLink;
  ghostCta?: CtaLink;
  gallery?: HeroGallery;
}

export interface PricingTier {
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  description: string;
  isPopular?: boolean;
  features: string[];
}

export interface PricingData {
  title?: string;
  description?: string;
  tiers: PricingTier[];
}

export type SectionDataMap = {
  hero: HeroData;
  pricing: PricingData;
};

export type SectionConfig = {
  [K in SectionType]: {
    type: K;
    id: string;
    data: SectionDataMap[K];
  };
}[SectionType];

export interface SiteConfig {
  name: string;
  description: string;
  nav: NavItem[];
  cta?: CtaLink;
  footerText: string;
  sections: SectionConfig[];
}

export type SectionComponentProps<K extends SectionType> = {
  id: string;
  data: SectionDataMap[K];
};
