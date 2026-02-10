import Image from "next/image";
import type { ReactNode } from "react";
import {
  Calendar,
  ArrowRight,
  CheckCircle,
  BadgeCheck,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Hourglass,
  ChevronDown,
} from "lucide-react";
import { StickyCta } from "@/components/sticky-cta";
import { ScrollToTop } from "@/components/scroll-to-top";
import { DepoimentosCarousel } from "@/components/depoimentos-carousel";
import { CHECKOUT_URL } from "@/constants";

export interface LandingPageContentProps {
  /** Título principal do hero (pode ser JSX com destaques). */
  heroHeadline: ReactNode;
  /** Parágrafo principal do hero. */
  heroSubheadline: ReactNode;
  /** Parágrafo secundário do hero (opcional). */
  heroSubtext?: ReactNode;
}

export function LandingPageContent({
  heroHeadline,
  heroSubheadline,
  heroSubtext,
}: LandingPageContentProps) {
  return (
    <>
      <StickyCta />
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
          style={{
            backgroundImage: "url('/hero-mobile.png')",
            backgroundPosition: "85% top",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-no-repeat hidden md:block"
          style={{
            backgroundImage: "url('/hero.png')",
            backgroundPosition: "85% top",
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 pb-24 sm:pt-24 lg:pt-28 lg:pb-32">
          <div className="max-w-xl">
            <div className="space-y-4 sm:space-y-6 z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-black/40 backdrop-blur-sm">
                <Calendar className="text-primary size-3 sm:size-4 shrink-0" />
                <span className="text-gray-300 text-[10px] sm:text-xs tracking-wide uppercase">
                  LOTE ZERO LIBERADO • 10/02 às 19h | Ao vivo no Zoom
                </span>
              </div>
              <h1 className="font-display font-bold leading-tight text-white">
                <Image
                  src="/logo.svg"
                  alt="Brown Royale"
                  width={240}
                  height={72}
                  className="h-12 w-auto sm:h-14 lg:h-16 mx-auto lg:mx-0"
                  priority
                />
                <span className="block mt-3 text-2xl sm:text-4xl lg:text-5xl text-white italic">
                  {heroHeadline}
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white max-w-lg mx-auto lg:mx-0 font-light">
                {heroSubheadline}
              </p>
              {heroSubtext ? (
                <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto lg:mx-0">
                  {heroSubtext}
                </p>
              ) : null}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:justify-start justify-center pt-2 sm:pt-3">
                <div className="flex items-baseline gap-2 text-left">
                  <span className="text-xs sm:text-sm text-gray-500 line-through">
                    De: R$297,00
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    Por: <span className="text-green-500">R$ 19,90</span>
                  </span>
                </div>
              </div>
              <div className="pt-2 sm:pt-3 mb-8 sm:mb-10 lg:mb-12">
                <a
                  className="group inline-flex items-center justify-center bg-gold-gradient hover:brightness-110 text-black font-bold py-3 sm:py-3.5 px-5 sm:px-7 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 text-xs sm:text-base w-full sm:w-auto uppercase tracking-wider"
                  href="#pricing"
                >
                  Sim! Eu Quero Ser Uma Brown Royale
                  <ArrowRight className="ml-2 size-4 sm:size-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="relative py-20 bg-background-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-surface-dark dark:bg-black p-10 rounded-2xl shadow-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-transform group-hover:scale-110" />
              <h3 className="font-display text-3xl text-primary mb-8">
                PARA QUEM <span className="text-white italic">É ESSA AULA</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-300">
                    Profissionais da estética que buscam previsibilidade
                    financeira.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-300">
                    Iniciantes que querem se posicionar como referência.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-300">
                    Quem está cansada de brigar por preço e copiar Instagram.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-300">
                    Quem quer cobrar mais com um método que funciona.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-surface-dark p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-50 dark:bg-white/5 rounded-tr-full transition-transform group-hover:scale-110" />
              <h3 className="font-display text-3xl text-gray-900 dark:text-white mb-2">
                POR QUE SUAS CLIENTES
              </h3>
              <h4 className="font-display text-3xl text-primary mb-8 italic">
                VÃO AMAR & PAGAR MAIS
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">
                      Método sem trauma:
                    </strong>{" "}
                    Para a sua carreira e para o seu bolso.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">
                      Aplicação simples e rápida:
                    </strong>{" "}
                    Do método no seu negócio.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">
                      Valor por sessão:
                    </strong>{" "}
                    Pelo menos R$300-R$400.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">
                      Resultados imediatos:
                    </strong>{" "}
                    Com menos retoques na sua estratégia.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-primary size-5 mt-1 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">
                      Não precisa ser famosa:
                    </strong>{" "}
                    Nem ter mil clientes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded shadow-lg transition-colors uppercase tracking-wider text-sm"
              href="#pricing"
            >
              Sim! Quero Ser Pioneira
              <ArrowUpRight className="ml-2 size-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-10">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Antes e Depois
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Veja o resultado de quem aplicou o Método Brown Royale
            </p>
            <DepoimentosCarousel />
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mt-12">
            <p className="text-white italic font-display text-xl text-center">
              &quot;Com o método Brown Royale, você aprende a cobrar o que merece e
              atrair clientes que valorizam seu trabalho.&quot;
            </p>
          </div>
          <div className="mt-12">
            <a
              className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 font-bold py-3 px-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105 uppercase tracking-wide text-sm"
              href="#pricing"
            >
              Quero Aplicar o Brown Royale Antes de Todo Mundo
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>
      <section
        className="relative py-24 bg-surface-dark overflow-hidden"
        id="pricing"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-4xl lg:text-5xl text-primary mb-6">
                Investimento
              </h2>
              <p className="text-white text-lg mb-10 max-w-xl">
                Certo, mas quanto custará para{" "}
                <span className="text-primary font-semibold">garantir</span> a minha vaga
                nessa aula exclusiva?
              </p>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3 text-white">
                  <Check className="text-primary size-5 shrink-0 mt-0.5" />
                  <span>
                    Como cobrar pelo menos{" "}
                    <span className="text-primary font-medium">R$300-R$400 por sessão</span>{" "}
                    com o Brown Royale.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="text-primary size-5 shrink-0 mt-0.5" />
                  <span>
                    Estratégias para atrair clientes premium e{" "}
                    <span className="text-primary font-medium">valorizar seu serviço.</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="text-primary size-5 shrink-0 mt-0.5" />
                  <span>
                    Seja <span className="text-primary font-medium">pioneira na sua cidade</span> com um método
                    inédito no Brasil.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex justify-center md:hidden mb-4">
                <span
                  className="inline-block bg-gold-gradient text-black text-xs font-bold py-2 px-5 rounded-full uppercase tracking-wider animate-blink"
                  style={{
                    boxShadow:
                      "0 2px 12px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                  }}
                >
                  Preço de lançamento
                </span>
              </div>
              <div className="absolute top-0 -right-5 hidden md:block md:top-10 md:-right-8 z-10">
                <div
                  className="bg-gold-gradient text-black text-[11px] font-bold py-2 px-8 uppercase tracking-[0.2em] whitespace-nowrap"
                  style={{
                    transform: "rotate(30deg)",
                    transformOrigin: "center center",
                    boxShadow:
                      "0 2px 12px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                  }}
                >
                  Preço de lançamento
                </div>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Lote 01
                </span>
                <span className="text-gray-500 text-xs">
                  — vagas limitadas
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-white mb-2 text-center">
                Método Brown Royale
              </h3>
              <p className="text-gray-400 text-sm mb-8 text-center">
                de posicionamento e vendas
              </p>
              <div className="mb-8 text-center">
                <span className="text-gray-400 line-through text-lg">
                  De R$ 297,00
                </span>
                <p className="text-primary text-5xl font-bold tracking-tight">
                  R$ 19,90
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  O preço sobe para R$ 39,90 no próximo lote
                </p>
              </div>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold-gradient hover:brightness-110 text-black font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-95 uppercase tracking-wide text-sm flex items-center justify-center gap-2"
              >
                Quero Me Inscrever Agora
                <ArrowUpRight className="size-5 shrink-0" />
              </a>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 px-4 py-2 rounded-lg">
                  <ShieldCheck className="size-4 shrink-0 text-primary" />
                  Compra segura
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 px-4 py-2 rounded-lg">
                  <Calendar className="size-4 shrink-0 text-primary" />
                  Encontro ao vivo
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 px-4 py-2 rounded-lg">
                  <Hourglass className="size-4 shrink-0 text-primary" />
                  Vagas limitadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-dark dark:bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 rounded-lg" />
              <Image
                alt="Kelly Mendes - Especialista em sobrancelhas e brow lamination"
                className="relative rounded-lg shadow-2xl transition-all duration-700"
                src="/bio.jpg"
                width={600}
                height={750}
              />
            </div>
            <div className="order-2 lg:order-2">
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-8">
                Quem é <span className="text-primary italic">Kelly Mendes</span>
              </h2>
              <div className="prose prose-invert prose-lg text-gray-400 max-w-none">
                <p className="font-serif italic text-2xl text-white mb-6">
                  &quot;Talvez hoje você veja meu trabalho com sobrancelhas e
                  cursos e pense que tudo sempre foi fácil. Mas antes da beleza,
                  eu já fui frentista e, na pandemia, trabalhei com entregas porque
                  estava desempregada e sem perspectiva.&quot;
                </p>
                <p>
                  Mesmo assim, decidi apostar no design de sobrancelhas. No
                  começo, eu tinha vontade, mas não tinha clientes, estrutura nem
                  direção. Com estudo e prática, desenvolvi um método que une
                  técnica, visagismo e posicionamento profissional, focado em
                  resultado real e agenda cheia.
                </p>
                <p>
                  Hoje sou fundadora do <strong>Studio Kelly Mendes</strong> e da{" "}
                  <strong>ROYÀLE</strong>, especialista em sobrancelhas e brow
                  lamination, e formo profissionais do zero ao avançado. Minha
                  missão é mostrar que você não precisa nascer pronta, só precisa
                  do método certo para transformar sua história através da beleza.
                </p>
              </div>
              <div className="mt-10">
                <a
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-black font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 uppercase tracking-wider text-sm"
                  href="#pricing"
                >
                  Garantir minha vaga por R$ 19,90
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background-light dark:bg-surface-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Ainda está com dúvidas que o Método Brown Royale é o melhor para você?
          </p>
          <div className="space-y-4">
            <details className="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <span>Precisa ter experiência?</span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="size-5 shrink-0" />
                </span>
              </summary>
              <div className="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                Não. Qualquer profissional da estética pode aplicar o método, mesmo
                que esteja começando agora. Não precisa ser famosa nem ter mil
                clientes — o método é simples, seguro e acessível.
              </div>
            </details>
            <details className="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <span>É seguro?</span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="size-5 shrink-0" />
                </span>
              </summary>
              <div className="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                Sim. O método Brown Royale usa estratégias comprovadas de
                posicionamento e vendas, sem agulhas invasivas na sua carreira. Já
                foi testado por diversas profissionais com total segurança e
                resultados consistentes.
              </div>
            </details>
            <details className="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <span>É definitivo?</span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="size-5 shrink-0" />
                </span>
              </summary>
              <div className="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                Sim. Os pilares do método são fixados na sua mente e duram muito
                mais do que técnicas passageiras. O resultado é imediato e
                praticamente sem necessidade de retoques na sua estratégia.
              </div>
            </details>
            <details className="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <span>É dolorido?</span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="size-5 shrink-0" />
                </span>
              </summary>
              <div className="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                Não. A maioria das profissionais não sente nada. A aplicação do
                método é suave, sem anestesia e sem causar trauma na sua conta
                bancária.
              </div>
            </details>
            <details className="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <span>Quanto posso cobrar?</span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="size-5 shrink-0" />
                </span>
              </summary>
              <div className="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                No mínimo R$300-R$400 por sessão. Mesmo quem está começando
                consegue cobrar bem, porque o resultado é premium e muito valorizado
                porque suas clientes não vão encontrar em outro lugar. E pode
                chegar a R$500, R$600 ou até R$1.000 por sessão.
              </div>
            </details>
          </div>
          <div className="mt-12 text-center">
            <a
              className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-90 font-bold py-3 px-8 rounded shadow transition-all uppercase tracking-wider text-xs"
              href="#pricing"
            >
              Liberar Minha Vaga por R$ 19,90 Agora
              <ArrowUpRight className="ml-2 size-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black text-gray-500 py-12 border-t border-white/10 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-primary transition-colors text-sm" href="#">
              Termos de Uso
            </a>
            <a className="hover:text-primary transition-colors text-sm" href="#">
              Política de Privacidade
            </a>
          </div>
          <ScrollToTop />
        </div>
      </footer>
    </>
  );
}
