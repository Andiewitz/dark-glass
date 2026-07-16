export type SectionType = "hero";

export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroData {
  badge?: string;
  name: string;
  tagline: string;
  techTags?: string[];
  primaryCta?: CtaLink;
  ghostCta?: CtaLink;
}

export type SectionDataMap = {
  hero: HeroData;
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
