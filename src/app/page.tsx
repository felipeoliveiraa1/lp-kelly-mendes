import { LandingPageContent } from "@/components/landing-page-content";

export default function Home() {
  return (
    <LandingPageContent
      heroHeadline={
        <>
          Fature de{" "}
          <span className="text-gold-gradient font-semibold">R$ 150 a R$ 400</span>{" "}
          por sessão com a{" "}
          <span className="text-primary font-semibold">Técnica de Tintura</span>{" "}
          que vira o jogo.
        </>
      }
      heroSubheadline="Participe do Evento Exclusivo e aprenda ao vivo como dominar a naturalidade absoluta e sair da guerra de preços, mesmo que você esteja começando do zero."
    />
  );
}
