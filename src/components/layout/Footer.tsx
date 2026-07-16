import { Container } from "@/components/layout/Container";

type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <p className="text-sm text-white/40">{text}</p>
      </Container>
    </footer>
  );
}
