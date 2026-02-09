"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEPOIMENTOS = [
  { src: "/dep1.jpg", alt: "Antes e Depois 1" },
  { src: "/dep2.jpg", alt: "Antes e Depois 2" },
  { src: "/dep3.jpg", alt: "Antes e Depois 3" },
  { src: "/dep4.jpg", alt: "Antes e Depois 4" },
  { src: "/dep5.jpg", alt: "Antes e Depois 5" },
];

const SWIPE_THRESHOLD = 50;

export function DepoimentosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? DEPOIMENTOS.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === DEPOIMENTOS.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
  }, [goToNext, goToPrevious]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {DEPOIMENTOS.map((dep) => (
            <div
              key={dep.src}
              className="relative w-full shrink-0 aspect-[4/3] sm:aspect-video"
            >
              <Image
                src={dep.src}
                alt={dep.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 896px"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
        >
          <ChevronLeft className="size-6 sm:size-8" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Próximo"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
        >
          <ChevronRight className="size-6 sm:size-8" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {DEPOIMENTOS.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-6 bg-primary"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
