import type { CtaLink, NavItem } from "@/lib/types";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

type NavbarProps = {
  brand: string;
  items: NavItem[];
  cta?: CtaLink;
};

export function Navbar({ brand, items, cta }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b-[0.5px] border-border bg-surface">
      <Container className="flex h-12 items-center justify-between px-6">
        <a href="#hero" className="font-heading text-sm font-semibold text-primary">
          {brand}
        </a>
        <nav className="flex items-center gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[13px] font-medium text-secondary transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          {cta ? (
            <Button href={cta.href} variant="primary" className="h-7 px-3 text-[12px]">
              {cta.label}
            </Button>
          ) : null}
        </nav>
      </Container>
    </header>
  );
}
