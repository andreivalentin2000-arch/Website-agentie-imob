"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import VerifiedBadge from "@/components/ui/VerifiedBadge";
import { ButtonLink } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";

export default function TrustSection() {
  const { t } = useLocale();
  const bullets = [1, 2, 3, 4, 5, 6];

  return (
    <Section tone="ink">
      <Container className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <Eyebrow dark>{t("home.trust.eyebrow")}</Eyebrow>
          <h2 className="mt-5 whitespace-pre-line font-display text-3xl font-light leading-tight text-cream md:text-4xl">
            {t("home.trust.title")}
          </h2>
          <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-cream/70">
            <p>{t("home.trust.p1")}</p>
            <p>{t("home.trust.p2")}</p>
            <p>{t("home.trust.p3")}</p>
          </div>
          <ButtonLink href="/about" variant="secondary" className="mt-8">
            {t("home.trust.cta")}
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border border-cream/15 p-8 md:p-10">
            <VerifiedBadge size={64} className="mb-8" />
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 font-body text-sm text-cream/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {t(`home.trust.bullet${bullet}`)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
