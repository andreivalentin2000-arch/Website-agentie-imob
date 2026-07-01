"use client";

import { BookOpen } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";

export default function LeadMagnet() {
  const { t } = useLocale();
  const contents = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Section tone="olive">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <Reveal>
          <BookOpen size={28} strokeWidth={1.3} className="text-gold" />
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-cream md:text-4xl">
            {t("home.guide.title")}
          </h2>
          <p className="mt-5 whitespace-pre-line font-body text-[15px] leading-relaxed text-cream/70">
            {t("home.guide.body")}
          </p>
          <ButtonLink href="/contact#guide" className="mt-8">
            {t("home.guide.cta")}
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.15} className="border border-cream/15 bg-ink/40 p-8 md:p-10">
          <p className="eyebrow mb-1 text-gold-soft">{t("home.guide.eyebrow")}</p>
          <p className="font-display text-xl text-cream">{t("home.guide.name")}</p>
          <ul className="mt-6 space-y-3">
            {contents.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-cream/75">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {t(`home.guide.item${item}`)}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
