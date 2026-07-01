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
    "A simple 5-step path to owning rural property in Romania — private consultation, curated shortlist, Romania visit, legal and notary process, keys and aftercare.",
};

export default function BuyingProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A simple 5-step path to owning rural property in Romania."
        imageUrl="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1920&q=80"
        imageAlt="Wooden path through Romanian countryside"
      />

      <Section tone="cream">
        <Container className="max-w-3xl">
          <div className="space-y-16">
            {buyingProcessSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06} className="flex gap-8">
                <span className="font-display text-4xl text-gold/50 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="border-l border-brown/10 pl-8">
                  <h2 className="font-display text-2xl text-brown">{step.title}</h2>
                  <p className="mt-3 max-w-lg font-body text-[15px] leading-relaxed text-brown/65">
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
              A private consultation costs you nothing but a conversation.
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
