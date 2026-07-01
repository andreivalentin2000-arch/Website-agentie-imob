import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ConsultationForm from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Private Consultation",
  description:
    "Tell us what kind of life you want. We will help you understand if Romania is the right place to build it — book a private consultation today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start Here"
        title="Your rural life in Romania does not have to start with confusion."
        subtitle="Tell us what kind of life you want. We will help you understand if Romania is the right place to build it."
        imageUrl="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1920&q=80"
        imageAlt="Quiet Romanian valley at dawn"
      />

      <Section tone="cream" id="guide">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl text-brown md:text-3xl">
                What happens after you submit this form
              </h2>
              <ol className="mt-6 space-y-5 font-body text-[15px] leading-relaxed text-brown/65">
                <li>
                  <span className="mr-2 font-display text-gold">01</span>
                  We review your answers and match them against properties and regions that fit.
                </li>
                <li>
                  <span className="mr-2 font-display text-gold">02</span>
                  A member of our team reaches out within one business day to schedule a private
                  consultation call.
                </li>
                <li>
                  <span className="mr-2 font-display text-gold">03</span>
                  If you opted in, we email you The International Buyer&rsquo;s Guide to Rural
                  Property in Romania right away.
                </li>
              </ol>
              <p className="mt-8 font-body text-sm text-brown/50">
                Prefer to talk first? Once configured, this page can also open our calendar
                directly for same-week booking.
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
