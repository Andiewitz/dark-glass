import { Container } from "@/components/layout/Container";

type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t-[0.5px] border-border py-10">
      <Container>
        <p className="text-sm text-muted">{text}</p>
      </Container>
    </footer>
  );
}
