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
    type: "projects",
    id: "projects",
    data: {
      title: "Selected Work",
      description: "A selection of recent projects I've built.",
      projects: [
        {
          id: 1,
          title: "Meshwork Studio",
          description: "A system design tool.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
          href: "#",
        },
        {
          id: 2,
          title: "Skwetch",
          description: "Open-source alternative to design applications using Tauri and TypeScript.",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
          href: "#",
        },
        {
          id: 3,
          title: "Kern",
          description: "Client and digital marketing agency management platform.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          href: "#",
        },
        {
          id: 4,
          title: "Attendra",
          description: "A React Native mobile app for attendance tracking using small BLE packets.",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
          href: "#",
        },
      ],
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
