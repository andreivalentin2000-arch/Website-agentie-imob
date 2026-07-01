import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ConsultationForm from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Private Consultation",
  description:
    "Tell us what kind of life you want to build in rural Romania and book a private consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start Here"
        title="Tell us what kind of life you want to build."
        subtitle="Not just the number of rooms. Not just the land size. Tell us what you want your days to feel like."
        imageUrl="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1920&q=80"
        imageAlt="Quiet Romanian valley at dawn"
      />

      <Section tone="cream" id="guide">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl text-brown md:text-3xl">
                Book a Private Consultation
              </h2>
              <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-brown/65">
                <p>Do you want your children closer to nature?</p>
                <p>Do you want silence?</p>
                <p>Animals?</p>
                <p>A garden?</p>
                <p>Mountain air?</p>
                <p>A home you can return to?</p>
                <p>Or a life you can fully move into?</p>
                <p>Start with the form.</p>
                <p>We will help you see if rural Romania fits.</p>
              </div>
              <p className="mt-8 font-body text-sm leading-relaxed text-brown/50">
                Share as much as you can. The better we understand your dream, the better we can
                guide you.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1} className="border border-brown/10 bg-cream-paper p-7 md:p-10">
              <ConsultationForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
