import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { buyingProcessSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Buying Process",
  description:
    "A simple, guided path to buying rural property in Romania with clarity before travel, signing and life after purchase.",
};

export default function BuyingProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A simple path to buying rural property in Romania."
        subtitle="You bring the dream. We help make the process clear."
        imageUrl="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1920&q=80"
        imageAlt="Wooden path through Romanian countryside"
      />

      <Section tone="cream">
        <Container className="max-w-3xl">
          <Reveal className="mb-16">
            <div className="space-y-3 font-body text-[15px] leading-relaxed text-brown/65">
              <p>Buying abroad can feel heavy.</p>
              <p>The language is different.</p>
              <p>The paperwork is different.</p>
              <p>The people are new.</p>
              <p>The risks feel hard to see.</p>
              <p>That is why we do not leave buyers to figure it out alone.</p>
              <p>
                Our process is built to give you clarity before you travel, confidence before you
                sign and support after you buy.
              </p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {buyingProcessSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06} className="flex gap-8">
                <span className="font-display text-4xl text-gold/50 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="border-l border-brown/10 pl-8">
                  <h2 className="font-display text-2xl text-brown">{step.title}</h2>
                  <p className="mt-3 max-w-lg whitespace-pre-line font-body text-[15px] leading-relaxed text-brown/65">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-light text-cream md:text-4xl">
              Ready to see what step one looks like?
            </h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-cream/70">
              Start with a private conversation about the life you want to build.
            </p>
            <ButtonLink href="/contact" className="mt-8">
              Book a Private Consultation
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
