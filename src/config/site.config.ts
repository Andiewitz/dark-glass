import type { SiteConfig } from "@/lib/types";
import { sections } from "@/content/sections";

export const siteConfig: SiteConfig = {
  name: "Andrei",
  description:
    "Personal portfolio of Andrei — developer and designer building clean, modern web experiences.",
  nav: [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Resume", href: "#" },
  footerText: `© ${new Date().getFullYear()} Andrei. All rights reserved.`,
  sections,
};
