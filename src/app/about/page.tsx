import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import VerifiedBadge from "@/components/ui/VerifiedBadge";
import { trustBullets } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "A family-led Romanian real estate and relocation company, built on real estate experience since the late 1990s and trusted relationships with notaries and legal professionals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Local knowledge. Old relationships. Modern standards."
        imageUrl="https://images.unsplash.com/photo-1523419409543-8c1a91125174?w=1920&q=80"
        imageAlt="Romanian countryside orchard at golden hour"
      />

      <Section tone="cream">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-5 font-display text-2xl text-brown md:text-3xl">
                Built by a family with deep roots in Romanian real estate.
              </h2>
              <div className="mt-6 space-y-5 font-body text-[15px] leading-relaxed text-brown/70">
                <p>
                  Romanian Heritage Estates is built by a family with deep real estate
                  experience in Romania.
                </p>
                <p>
                  Our founding team includes people who worked in Romanian real estate from the
                  late 1990s to 2010, closing many transactions and building long-standing
                  relationships with notaries, legal professionals and local property owners.
                </p>
                <p>
                  Today, we combine that local knowledge with modern international marketing,
                  buyer education and a premium concierge process for foreign clients.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-14">
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="mt-5 font-display text-2xl text-brown md:text-3xl">
                Helping international families discover a healthier, quieter life.
              </h2>
              <p className="mt-6 max-w-xl font-body text-[15px] leading-relaxed text-brown/70">
                We believe rural Romania is one of Europe&rsquo;s last authentic countryside
                opportunities — a place where families can breathe, grow food and live closer to
                nature, without giving up modern connection. Our mission is to make that move
                simple, informed and fully guided, so buyers are never navigating it alone.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="border border-brown/10 bg-cream-paper p-8 md:p-10">
              <VerifiedBadge size={60} className="mb-8" />
              <p className="eyebrow mb-4 text-gold-dim">What We Stand For</p>
              <ul className="space-y-4">
                {trustBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 font-body text-sm text-brown/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="olive">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-light text-cream md:text-4xl">
              Discretion, verified properties and full guidance.
            </h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-cream/70">
              Every family we work with deserves a private, unhurried process — and a team that
              stays with them long after the notary appointment.
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
