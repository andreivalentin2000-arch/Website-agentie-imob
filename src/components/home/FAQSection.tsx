"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { useLocale } from "@/lib/locale-context";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLocale();
  const faqItems = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Section tone="cream">
      <Container className="max-w-3xl">
        <Reveal>
          <Eyebrow>{t("home.faq.eyebrow")}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brown md:text-4xl">
            {t("home.faq.title")}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-brown/10 border-y border-brown/10">
          {faqItems.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg text-brown md:text-xl">
                    {t(`home.faq.q${item}`)}
                  </span>
                  <Plus
                    size={20}
                    strokeWidth={1.4}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-cinematic ${
                    open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl font-body text-[15px] leading-relaxed text-brown/65">
                      {t(`home.faq.a${item}`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
