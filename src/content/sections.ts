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
  {
    type: "pricing",
    id: "pricing",
    data: {
      title: "Simple, transparent pricing.",
      description:
        "Choose the perfect plan for your needs. Switch to annual billing and save up to 20%.",
      tiers: [
        {
          name: "Basic",
          priceMonthly: "9",
          priceAnnual: "7",
          description: "Perfect for individuals and side projects.",
          features: ["1 Workspace", "Basic Analytics", "Community Support"],
        },
        {
          name: "Pro",
          priceMonthly: "29",
          priceAnnual: "24",
          description: "For professionals and growing teams.",
          isPopular: true,
          features: [
            "Unlimited Workspaces",
            "Advanced Analytics",
            "Priority Support",
            "Custom Domains",
          ],
        },
        {
          name: "Ultra",
          priceMonthly: "99",
          priceAnnual: "79",
          description: "Maximum power for massive scale.",
          features: [
            "Unlimited Everything",
            "Predictive AI Insights",
            "24/7 Dedicated Support",
            "Custom Domains",
            "Biometric Security",
          ],
        },
      ],
    },
  },
];
