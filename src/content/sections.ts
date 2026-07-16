import type { SectionConfig } from "@/lib/types";

export const sections: SectionConfig[] = [
  {
    type: "hero",
    id: "hero",
    data: {
      badge: "Available for work",
      name: "Andrei",
      tagline:
        "Full-stack developer building fast, accessible products with React, Next.js, and TypeScript.",
      techTags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
      primaryCta: { label: "View work", href: "#projects" },
      ghostCta: { label: "Get in touch", href: "#contact" },
    },
  },
];
