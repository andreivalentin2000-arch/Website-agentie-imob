"use client";

import Reveal from "@/components/ui/Reveal";
import { useLocale } from "@/lib/locale-context";

export default function DreamOutcome() {
  const { t } = useLocale();
  const lines = ["line1", "line2", "line3", "line4", "line5"];

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')",
        }}
        role="img"
        aria-label="Family garden with mountains in the distance at soft morning light"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-24 md:px-10">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow mb-6 text-gold-soft">
              <span className="rule-gold" aria-hidden="true" />{t("home.dream.eyebrow")}
            </p>
            <h2 className="font-display text-3xl font-light leading-tight text-cream md:text-5xl">
              {t("home.dream.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 space-y-2 font-body text-lg leading-relaxed text-cream/80">
            {lines.map((key) => <p key={key}>{t(`home.dream.${key}`)}</p>)}
          </Reveal>

          <Reveal delay={0.3} className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-display text-xl italic text-gold-soft md:text-2xl">
              {t("home.dream.quote")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
