"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=1920&q=80')",
        }}
        role="img"
        aria-label="Cinematic view of the Carpathian Mountains at golden hour, with a countryside manor in the foreground"
      />
      <div className="absolute inset-0 bg-ink/30" />
      <div className="absolute inset-0 bg-fade-ink" />
      <div className="absolute inset-0 bg-fade-ink-top opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-6 text-gold-soft"
        >
          <span className="rule-gold" aria-hidden="true" />
          Rural &amp; Heritage Estates, Romania
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-4xl font-light leading-[1.12] text-cream md:text-6xl"
        >
          {t("hero.headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-cream/75 md:text-lg"
        >
          {t("hero.subheadline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-start gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-gold bg-gold px-8 py-4 font-body text-sm uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-gold-soft"
          >
            {t("common.bookConsultation")}
          </Link>
          <p className="font-body text-xs uppercase tracking-widest2 text-cream/50">
            {t("hero.trustLine")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
