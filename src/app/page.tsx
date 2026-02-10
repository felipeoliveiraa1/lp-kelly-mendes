import { LandingPageContent } from "@/components/landing-page-content";

export default function Home() {
  return (
    <LandingPageContent
      heroHeadline={
        <>
          A Chave para o Seu{" "}
          <span className="text-gold-gradient">Império</span> na{" "}
          <span className="text-gold-gradient">Estética de Sobrancelhas</span>
        </>
      }
      heroSubheadline={
        <>
          Dê adeus à frustração de trabalhar muito e ganhar pouco: Descubra
          o método Brown Royale que entrega{" "}
          <span className="text-primary font-medium">renda previsível</span>, e te permite
          cobrar pelo menos{" "}
          <span className="text-primary font-medium">R$ 150 a R$ 400 por sessão</span>.
        </>
      }
      heroSubtext="Uma aula exclusiva onde você vai descobrir como se tornar a embaixadora no Brasil desse método — antes que viralize."
    />
  );
}
