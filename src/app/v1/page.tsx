import type { Metadata } from "next";
import { LandingPageContent } from "@/components/landing-page-content";

export const metadata: Metadata = {
  title: "Saia dos R$ 50 e fature R$ 150 a R$ 400 por sessão | Brown Royale",
  description:
    "Descubra o evento exclusivo onde vou revelar a técnica de tintura que gera renda previsível e transforma sobrancelhas comuns em resultados de luxo.",
};

export default function V1Page() {
  return (
    <LandingPageContent
      heroHeadline={
        <>
          Saia dos <span className="text-primary font-semibold">R$ 50</span> e fature de{" "}
          <span className="text-gold-gradient font-semibold">R$ 150 a R$ 400</span> por sessão com o{" "}
          <span className="text-primary font-semibold">Método Brown Royale</span>.
        </>
      }
      heroSubheadline={
        <>
          Descubra o <span className="text-primary font-medium">evento exclusivo</span> onde vou revelar a{" "}
          <span className="text-primary font-medium">técnica de tintura</span> que gera{" "}
          <span className="text-gold-gradient font-medium">renda previsível</span> e transforma sobrancelhas comuns em{" "}
          <span className="text-primary font-medium">resultados de luxo</span>.
        </>
      }
    />
  );
}
