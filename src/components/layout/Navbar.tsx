"use client";

import type { CtaLink, NavItem } from "@/lib/types";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  type NavItemType,
  NavGridCard,
  NavSmallItem,
  NavLargeItem,
  NavItemMobile,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuIcon, XIcon } from "lucide-react";

type NavbarProps = {
  brand: string;
  items: NavItem[];
  cta?: CtaLink;
};

const workLinks: NavItemType[] = [
  {
    title: "Web Apps",
    href: "#projects",
    description: "Production apps built with Next.js & TypeScript",
    icon: GlobeIcon,
  },
  {
    title: "Design Systems",
    href: "#projects",
    description: "Reusable component libraries and tokens",
    icon: LayersIcon,
  },
  {
    title: "APIs",
    href: "#projects",
    description: "Typed backends with Node and PostgreSQL",
    icon: CodeIcon,
  },
  {
    title: "Integrations",
    href: "#projects",
    description: "Glue your tools together seamlessly",
    icon: PlugIcon,
  },
  {
    title: "E-Commerce",
    href: "#projects",
    description: "Storefronts that convert",
    icon: DollarSign,
  },
  {
    title: "Open Source",
    href: "#projects",
    description: "Things I share with the community",
    icon: Star,
  },
];

const aboutLinks: NavItemType[] = [
  {
    title: "About Me",
    href: "#about",
    description: "My story, stack, and how I work",
    icon: UserIcon,
  },
  {
    title: "Experience",
    href: "#about",
    description: "Teams and products I've shipped with",
    icon: BriefcaseIcon,
  },
  {
    title: "Writing",
    href: "#about",
    description: "Notes on engineering and design",
    icon: FileText,
  },
  {
    title: "Contact",
    href: "#contact",
    description: "Let's build something together",
    icon: MailIcon,
  },
];

export function Navbar({ brand, items, cta }: NavbarProps) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 backdrop-brightness-125 shadow-[inset_0_-1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.4)]">
      <Container className="flex h-14 items-center justify-between px-6">
        <a href="#hero" className="font-heading text-sm font-semibold text-white/90">
          {brand}
        </a>

        <DesktopMenu items={items} />

        <div className="flex items-center gap-2">
          {cta ? (
            <Button asChild variant="default" size="sm" className="hidden sm:inline-flex">
              <a href={cta.href}>{cta.label}</a>
            </Button>
          ) : null}
          <MobileNav items={items} cta={cta} />
        </div>
      </Container>
    </header>
  );
}

function DesktopMenu({ items }: { items: NavItem[] }) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr]">
              <ul className="grid grow gap-4 p-4 md:grid-cols-3 md:border-r md:border-white/10">
                {workLinks.slice(0, 3).map((link) => (
                  <li key={link.href + link.title}>
                    <NavGridCard link={link} />
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 p-4">
                {workLinks.slice(3).map((link) => (
                  <li key={link.href + link.title}>
                    <NavSmallItem item={link} href={link.href} className="gap-x-1" />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-3xl md:grid-cols-[1fr_.40fr]">
              <ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r md:border-white/10">
                {aboutLinks.slice(0, 2).map((link) => (
                  <li key={link.href + link.title}>
                    <NavGridCard link={link} className="min-h-36" />
                  </li>
                ))}
                <div className="col-span-2 grid grid-cols-2 gap-x-4">
                  {aboutLinks.slice(2, 4).map((link) => (
                    <li key={link.href + link.title}>
                      <NavLargeItem href={link.href} link={link} />
                    </li>
                  ))}
                </div>
              </ul>
              <ul className="space-y-2 p-4">
                {aboutLinks.slice(4, 8).map((link) => (
                  <li key={link.href + link.title}>
                    <NavLargeItem href={link.href} link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {items
          .filter((item) => !["Work", "About"].includes(item.label))
          .map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                className="cursor-pointer px-4 py-2 text-sm font-medium text-white/60 hover:text-white/90"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav({ items, cta }: { items: NavItem[]; cta?: CtaLink }) {
  const sections = [
    { id: "work", name: "Work", list: workLinks },
    { id: "about", name: "About", list: aboutLinks },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full md:hidden">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-white/[0.03] backdrop-blur-2xl w-full gap-0"
        showClose={false}
      >
        <div className="flex h-14 items-center justify-end border-b border-white/10 px-4">
          <SheetClose asChild>
            <Button size="icon" variant="ghost" className="rounded-full">
              <XIcon className="size-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </div>
        <div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
          <Accordion type="single" collapsible>
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="capitalize hover:no-underline">
                  {section.id}
                </AccordionTrigger>
                <AccordionContent className="space-y-1">
                  <ul className="grid gap-1">
                    {section.list.map((link) => (
                      <li key={link.href + link.title}>
                        <SheetClose asChild>
                          <NavItemMobile item={link} href={link.href} />
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
            {items
              .filter((item) => !["Work", "About"].includes(item.label))
              .map((item) => (
                <SheetClose asChild key={item.href}>
                  <NavItemMobile
                    item={{ title: item.label, href: item.href }}
                    href={item.href}
                  />
                </SheetClose>
              ))}
            {cta ? (
              <SheetClose asChild>
                <Button asChild variant="default" className="mt-4 w-full">
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              </SheetClose>
            ) : null}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* icons */
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}
function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}
function PlugIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 22v-5M9 8V2M15 8V2M6 8h12v2a6 6 0 0 1-12 0Z" />
    </svg>
  );
}
function DollarSign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M11.5 2.6a.5.5 0 0 1 .9 0l2 4.4 4.6.5a.5.5 0 0 1 .3.9l-3.4 3.2.9 4.6a.5.5 0 0 1-.7.5L12 14l-4.1 2.1a.5.5 0 0 1-.7-.5l.9-4.6-3.4-3.2a.5.5 0 0 1 .3-.9l4.6-.5Z" />
    </svg>
  );
}
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </svg>
  );
}
function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
