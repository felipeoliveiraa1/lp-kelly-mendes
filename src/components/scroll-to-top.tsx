"use client";

import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors group cursor-pointer"
      onClick={handleClick}
    >
      <ChevronUp className="size-5 text-white group-hover:-translate-y-1 transition-transform shrink-0" />
    </button>
  );
}
