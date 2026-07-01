"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { useLocale } from "@/lib/locale-context";

export default function PainSection() {
  const { t } = useLocale();
  const firstLines = ["line1", "line2", "line3", "line4", "line5", "line6", "line7"];
  const questions = ["question1", "question2", "question3", "question4", "question5"];

  return (
    <Section tone="cream">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="whitespace-pre-line font-display text-2xl italic leading-relaxed text-brown/90 md:text-3xl">
            {t("home.pain.title")}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-1.5 font-body text-lg leading-relaxed text-brown/70 md:text-xl">
          {firstLines.map((key) => <p key={key}>{t(`home.pain.${key}`)}</p>)}
        </Reveal>

        <Reveal delay={0.2} className="mt-10 space-y-1.5 font-body text-lg leading-relaxed text-brown/70 md:text-xl">
          {questions.map((key) => <p key={key}>{t(`home.pain.${key}`)}</p>)}
        </Reveal>

        <Reveal delay={0.3} className="mt-10">
          <p className="font-display text-2xl text-olive md:text-3xl">
            {t("home.pain.close")}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
