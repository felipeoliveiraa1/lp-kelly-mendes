"use client";

export function ScarcityBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-60 bg-amber-500 text-black py-2.5 px-4 shadow-lg border-b-2 border-amber-600">
      <p className="text-center text-sm font-bold uppercase tracking-wide">
        ⚠️ ATENÇÃO: O Lote 1 de R$ 19,90 está se esgotando.{" "}
        <a
          href="#pricing"
          className="underline font-extrabold hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
        >
          Garanta sua vaga agora!
        </a>
      </p>
    </div>
  );
}
