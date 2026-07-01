"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PropertyImage } from "@/lib/types";
import { galleryCategoryLabels } from "@/lib/labels";

export default function PropertyGallery({ images }: { images: PropertyImage[] }) {
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = ["all"];
    images.forEach((img) => {
      if (!seen.has(img.category)) {
        seen.add(img.category);
        list.push(img.category);
      }
    });
    return list;
  }, [images]);

  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-brown/10 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border px-4 py-2 font-body text-xs uppercase tracking-widest2 transition-colors ${
              active === cat
                ? "border-gold bg-gold text-ink"
                : "border-brown/20 text-brown/60 hover:border-gold hover:text-gold-dim"
            }`}
          >
            {cat === "all" ? "All Photos" : galleryCategoryLabels[cat] ?? cat}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {visible.map((img, i) => (
          <button
            key={img.url + i}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className={`relative overflow-hidden bg-olive-deep ${
              i === 0 ? "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-cinematic hover:scale-105"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Property photo viewer"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-6 top-6 font-body text-sm uppercase tracking-widest2 text-cream/70 hover:text-gold"
            aria-label="Close photo viewer"
          >
            Close &times;
          </button>
          <div className="relative h-[75vh] w-full max-w-4xl">
            <Image
              src={visible[lightboxIndex].url}
              alt={visible[lightboxIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
