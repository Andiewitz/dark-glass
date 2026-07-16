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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 backdrop-brightness-125 shadow-[inset_0_-1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.4)]">
      <Container className="flex h-14 items-center justify-between px-6">
        <a href="#hero" className="font-heading text-sm font-semibold text-white/90">
          {brand}
        </a>
        <nav className="flex items-center gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[13px] font-medium text-white/50 transition-colors hover:text-white/90"
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
