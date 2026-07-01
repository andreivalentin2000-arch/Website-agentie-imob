"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";

export default function FinalCTA() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1920&q=80')",
        }}
        role="img"
        aria-label="Aerial view of Romanian countryside at dusk"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <Container className="relative z-10 max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-light leading-tight text-cream md:text-4xl">
            {t("home.final.title")}
          </h2>
          <p className="mt-6 whitespace-pre-line font-body text-[15px] leading-relaxed text-cream/70">
            {t("home.final.body")}
          </p>
          <ButtonLink href="/contact" className="mt-9">
            {t("common.bookConsultation")}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
