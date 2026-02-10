import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AlertTriangle, Check, ArrowRight } from "lucide-react";
import { WHATSAPP_GROUP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Obrigado | Brown Royale",
  description:
    "Falta apenas um passo: entre no grupo do WhatsApp para garantir sua vaga e todo o material.",
};

const PROGRESS_PERCENT = 87;

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-background-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <Link
          href="/"
          className="inline-block mb-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <Image
            src="/logo.svg"
            alt="Brown Royale"
            width={220}
            height={66}
            className="h-12 w-auto sm:h-14 mx-auto"
            priority
          />
        </Link>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <AlertTriangle className="size-10 sm:size-12 text-primary shrink-0" />
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary">
            IMPORTANTE
          </h1>
        </div>
        <p className="text-white text-lg sm:text-xl mb-6 max-w-xl mx-auto">
          Falta apenas <span className="text-primary font-semibold">um passo</span> para{" "}
          <span className="text-gold-gradient font-semibold">garantir a sua vaga</span> no{" "}
          <span className="text-primary font-semibold">Método Brown Royale</span>.
        </p>
        <div className="w-full max-w-md mx-auto mb-10">
          <div className="h-4 sm:h-5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${PROGRESS_PERCENT}%` }}
            >
              <span className="text-xs font-bold text-black">
                {PROGRESS_PERCENT}%
              </span>
            </div>
          </div>
        </div>
        <p className="text-white/90 text-sm sm:text-base mb-8 max-w-xl mx-auto">
          Pressione o botão abaixo e{" "}
          <span className="text-primary font-semibold">entre no grupo do WhatsApp</span>{" "}
          para confirmar sua participação na aula e{" "}
          <span className="text-primary font-semibold">garantir todo o material</span>{" "}
          abaixo:
        </p>
        <ul className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 mb-10 text-left space-y-4">
          <li className="flex items-start gap-3 text-white">
            <Check className="size-5 shrink-0 mt-0.5 text-primary" />
            <span><span className="text-primary font-medium">Link da aula ao vivo</span></span>
          </li>
          <li className="flex items-start gap-3 text-white">
            <Check className="size-5 shrink-0 mt-0.5 text-primary" />
            <span><span className="text-primary font-medium">Materiais de apoio</span></span>
          </li>
          <li className="flex items-start gap-3 text-white">
            <Check className="size-5 shrink-0 mt-0.5 text-primary" />
            <span><span className="text-primary font-medium">Avisos e lembretes</span></span>
          </li>
          <li className="flex items-start gap-3 text-white">
            <Check className="size-5 shrink-0 mt-0.5 text-primary" />
            <span>
              <span className="text-gold-gradient font-medium">Bônus surpresa</span> para quem estiver ao vivo até o final
            </span>
          </li>
        </ul>
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg uppercase tracking-wide"
        >
          Entrar no grupo agora
          <ArrowRight className="size-5 shrink-0" />
        </a>
        <p className="mt-12 text-gray-400 text-sm">
          Obrigado por se inscrever. Nos vemos na{" "}
          <span className="text-primary font-medium">aula ao vivo</span>!
        </p>
      </div>
    </div>
  );
}
