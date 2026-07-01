"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Property } from "@/lib/types";
import { lifestyleTagLabels } from "@/lib/labels";
import { useLocale } from "@/lib/locale-context";

export default function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  const { t } = useLocale();
  const visibleTags = property.lifestyleTags.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/properties/${property.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-olive-deep">
          <Image
            src={property.coverImage.url}
            alt={property.coverImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          {property.documentsVerified && (
            <span className="absolute right-4 top-4 border border-gold/70 bg-ink/60 px-2.5 py-1 font-body text-[10px] uppercase tracking-widest2 text-gold-soft backdrop-blur-sm">
              {t("common.documentsVerified")}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-body text-[11px] uppercase tracking-widest2 text-cream/70">
              {property.region} · {property.county}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-display text-xl text-brown transition-colors group-hover:text-olive">
            {property.title}
          </h3>
          <p className="mt-1 font-body text-sm text-brown/55">{property.generalArea}</p>

          <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-brown/10 py-3 font-body text-[13px] text-brown/70">
            <div>
              <dt className="text-[10px] uppercase tracking-wide text-brown/40">Land</dt>
              <dd>{(property.landSizeSqm / 10000).toFixed(1)} ha</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wide text-brown/40">House</dt>
              <dd>{property.houseSizeSqm > 0 ? `${property.houseSizeSqm} m²` : "—"}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wide text-brown/40">Rooms</dt>
              <dd>{property.rooms > 0 ? property.rooms : "—"}</dd>
            </div>
          </dl>

          <div className="mt-4 flex flex-wrap gap-2">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="border border-olive/25 px-2.5 py-1 font-body text-[10px] uppercase tracking-wide text-olive"
              >
                {lifestyleTagLabels[tag]}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="font-body text-sm text-brown/60">{t("common.priceOnRequest")}</span>
            <span className="font-body text-xs uppercase tracking-widest2 text-gold-dim transition-colors group-hover:text-gold">
              {t("common.viewProperty")} &rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
