"use client";

import { Property } from "@/lib/types";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import PropertyCard from "@/components/properties/PropertyCard";
import { ButtonLink } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";

export default function PropertiesPreview({ properties }: { properties: Property[] }) {
  const { t } = useLocale();

  return (
    <Section tone="cream">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>{t("home.properties.eyebrow")}</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-tight text-brown md:text-4xl">
              {t("home.properties.title")}
            </h2>
            <p className="mt-4 max-w-lg whitespace-pre-line font-body text-[15px] leading-relaxed text-brown/60">
              {t("home.properties.body")}
            </p>
          </div>
          <ButtonLink href="/properties" variant="ghost" className="shrink-0">
            {t("common.viewAllProperties")}
          </ButtonLink>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {properties.map((property, i) => (
            <PropertyCard key={property.slug} property={property} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
