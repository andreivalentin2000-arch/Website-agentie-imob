"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { useLocale } from "@/lib/locale-context";

export default function WhyRomania() {
  const { t } = useLocale();
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <Section tone="cream">
      <Container>
        <Reveal>
          <Eyebrow>{t("home.why.eyebrow")}</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight text-brown md:text-4xl">
            {t("home.why.title")}
          </h2>
          <p className="mt-5 max-w-2xl whitespace-pre-line font-body text-[15px] leading-relaxed text-brown/65">
            {t("home.why.intro")}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-brown/10 bg-brown/10 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card} delay={i * 0.06} className="bg-cream-paper p-8 md:p-10">
              <span className="font-body text-xs uppercase tracking-widest2 text-gold-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-brown">{t(`home.why.card${card}.title`)}</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-brown/65">{t(`home.why.card${card}.body`)}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
