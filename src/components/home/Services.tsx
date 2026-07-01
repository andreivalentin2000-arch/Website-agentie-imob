"use client";

import {
  PhoneCall,
  Search,
  FileCheck,
  Scale,
  Stamp,
  Plane,
  Home,
  Users,
  Handshake,
  Languages,
  Compass,
  Hammer,
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
  { icon: Stamp, key: "home.services.item5" },
  { icon: Plane, key: "home.services.item6" },
  { icon: Home, key: "home.services.item7" },
  { icon: Compass, key: "home.services.item8" },
  { icon: Handshake, key: "home.services.item9" },
  { icon: Languages, key: "home.services.item10" },
  { icon: Users, key: "home.services.item11" },
  { icon: Hammer, key: "home.services.item12" },
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
          <p className="mt-5 font-body text-[15px] leading-relaxed text-cream/70">
            {t("home.services.body")}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={i * 0.04} className="flex items-start gap-4">
              <Icon size={20} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold" />
              <span className="font-body text-[15px] text-cream/85">{t(key)}</span>
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
