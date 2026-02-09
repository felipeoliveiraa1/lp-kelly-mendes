"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const HERO_SCROLL_THRESHOLD = 600;

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > HERO_SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-t border-primary/20 py-4 px-4 shadow-2xl transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 hidden sm:flex">
          <span className="text-white font-medium">
            LOTE ZERO <span className="text-primary font-bold">LIBERADO</span>
          </span>
          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-red-600 w-[85%] animate-pulse" />
          </div>
          <span className="text-xs text-gray-400">85% Vendido</span>
        </div>
        <a
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 text-center text-sm uppercase tracking-wide"
          href="#pricing"
        >
          Quero Comprar Meu Ingresso
          <ArrowUpRight className="size-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}
