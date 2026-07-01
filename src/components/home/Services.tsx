"use client";

import {
  PhoneCall,
  Search,
  FileCheck,
  Scale,
  Plane,
  Home,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";

const services = [
  { icon: PhoneCall, key: "home.services.item1" },
  { icon: Search, key: "home.services.item2" },
  { icon: FileCheck, key: "home.services.item3" },
  { icon: Scale, key: "home.services.item4" },
  { icon: Plane, key: "home.services.item5" },
  { icon: Home, key: "home.services.item6" },
];

export default function Services() {
  const { t } = useLocale();

  return (
    <Section tone="olive">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow dark>{t("home.services.eyebrow")}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-cream md:text-4xl">
            {t("home.services.title")}
          </h2>
          <p className="mt-5 whitespace-pre-line font-body text-[15px] leading-relaxed text-cream/70">
            {t("home.services.body")}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={i * 0.04} className="bg-olive p-7 md:p-8">
              <Icon size={20} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold" />
              <h3 className="mt-4 font-display text-xl text-cream">{t(key)}</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-cream/70">
                {t(`${key}.body`)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <ButtonLink href="/services" variant="secondary">
            {t("home.services.cta")}
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}
