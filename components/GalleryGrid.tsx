"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 3 | 4;
}

export default function GalleryGrid({ images, columns = 4 }: GalleryGridProps) {
  const gridClass = columns === 3
    ? "grid grid-cols-2 md:grid-cols-3 gap-4"
    : "grid grid-cols-2 md:grid-cols-4 gap-4";
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  const close = useCallback(() => { setLightboxIndex(null); setLoaded(false); }, []);
  const prev = useCallback(() => { setLoaded(false); setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)); }, [images.length]);
  const next = useCallback(() => { setLoaded(false); setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)); }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, close, prev, next]);

  // Preload adjacent images when lightbox is open
  useEffect(() => {
    if (lightboxIndex === null || images.length <= 1) return;
    const preloadIndexes = [
      (lightboxIndex + 1) % images.length,
      (lightboxIndex - 1 + images.length) % images.length,
    ];
    preloadIndexes.forEach((idx) => {
      const img = new window.Image();
      img.src = images[idx].src;
    });
  }, [lightboxIndex, images]);

  return (
    <>
      <div className={gridClass}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setLoaded(false); setLightboxIndex(i); }}
            className="relative aspect-[3/2] rounded-card overflow-hidden group cursor-pointer"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes={columns === 3 ? "(max-width:768px) 50vw, 33vw" : "(max-width:768px) 50vw, 25vw"} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">{img.label}</p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>

          {/* Loading spinner */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <svg className="w-8 h-8 animate-spin text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" /></svg>
            </div>
          )}

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightboxIndex}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className={`object-contain transition-opacity duration-200 ${loaded ? "opacity-100" : "opacity-0"}`}
              sizes="90vw"
              priority
              onLoad={() => setLoaded(true)}
            />
          </div>

          {/* Caption */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {images[lightboxIndex].label}
          </p>
        </div>
      )}
    </>
  );
}
