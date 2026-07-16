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
          title: "Aurora UI",
          description: "A modern design system built with React and Tailwind CSS for building accessible web applications.",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
          href: "#",
        },
        {
          id: 2,
          title: "Neon Dashboard",
          description: "Real-time analytics dashboard with interactive charts, data visualization, and dark mode support.",
          image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop",
          href: "#",
        },
        {
          id: 3,
          title: "Studio Site",
          description: "A creative agency website with smooth animations, responsive design, and CMS integration.",
          image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
          href: "#",
        },
        {
          id: 4,
          title: "Commerce App",
          description: "Full-stack e-commerce platform with payment processing, inventory management, and admin panel.",
          image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
          href: "#",
        },
        {
          id: 5,
          title: "Motion Lab",
          description: "Interactive physics simulation showcasing advanced animation techniques and WebGL rendering.",
          image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop",
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
