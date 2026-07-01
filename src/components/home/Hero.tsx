"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-[100svh] w-full items-start overflow-hidden bg-ink">
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

      <div className="relative z-20 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-[120px] sm:px-8 sm:pt-[130px] md:pt-[140px] lg:px-12 lg:pt-[150px] xl:px-20 xl:pt-[160px] 2xl:pt-[170px]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-5 text-gold-soft sm:mb-6"
        >
          <span className="rule-gold" aria-hidden="true" />
          {t("hero.eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-[clamp(2.65rem,10.5vw,4.4rem)] font-light leading-[1.05] text-cream sm:text-[clamp(3.1rem,9vw,5rem)] md:text-[clamp(3.8rem,7vw,6rem)] md:leading-[1] lg:text-[clamp(4.1rem,5.8vw,7rem)] lg:leading-[0.98] xl:text-[clamp(4.8rem,5.3vw,7.75rem)]"
        >
          {t("hero.headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-3xl font-display text-xl font-light leading-tight text-gold-soft sm:text-2xl md:text-3xl"
        >
          {t("hero.supportingHeadline")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl font-body text-base leading-relaxed text-cream/75 md:mt-6 md:text-lg"
        >
          {t("hero.subheadline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex max-w-full flex-col items-start gap-4 sm:mt-10 sm:gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex w-full max-w-full items-center justify-center border border-gold bg-gold px-6 py-4 text-center font-body text-xs uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-gold-soft sm:w-auto sm:px-10 sm:text-sm sm:tracking-widest2"
          >
            {t("common.bookConsultation")}
          </Link>
          <p className="font-body text-xs uppercase tracking-widest2 text-cream/50">
            {t("hero.trustLine")}
          </p>
          <p className="max-w-xl font-body text-sm leading-relaxed text-cream/60">
            {t("hero.smallLine")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
