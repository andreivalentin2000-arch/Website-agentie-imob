"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { useLocale } from "@/lib/locale-context";

export default function BuyingProcess() {
  const { t } = useLocale();
  const steps = [1, 2, 3, 4, 5];

  return (
    <Section tone="cream">
      <Container>
        <Reveal>
          <Eyebrow>{t("home.process.eyebrow")}</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight text-brown md:text-4xl">
            {t("home.process.title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-y-10 md:grid-cols-5 md:gap-x-6 md:gap-y-0">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i * 0.08} className="relative pl-6 md:pl-0">
              <div className="flex items-baseline gap-3 md:block">
                <span className="font-display text-3xl text-gold/60 md:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg text-brown md:mt-4">{t(`home.process.step${step}.title`)}</h3>
              </div>
              <p className="mt-2 font-body text-sm leading-relaxed text-brown/60 md:mt-3">
                {t(`home.process.step${step}.body`)}
              </p>
              {i < steps.length - 1 && (
                <span className="absolute left-0 top-0 hidden h-px w-full bg-brown/10 md:hidden" />
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
