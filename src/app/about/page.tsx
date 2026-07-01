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
    "A new Romanian rural property agency with old roots, created for international buyers who want verified countryside and heritage properties.",
};

const values = [
  {
    title: "Trust before speed",
    body: "We would rather lose a deal than push a buyer toward the wrong property.",
  },
  {
    title: "Verified before presented",
    body: "A property should not be shown seriously until its key documents and ownership status are understood.",
  },
  {
    title: "Lifestyle, not just real estate",
    body: "We care about how the property will feel to live in, not only how it looks in photos.",
  },
  {
    title: "Discretion",
    body: "We protect buyer privacy, seller privacy and exact property locations.",
  },
  {
    title: "Guidance after purchase",
    body: "The real journey starts after the keys. We stay close when practical help is needed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A new agency with old roots."
        subtitle="Romanian Heritage Estates was created for international buyers who want rural Romania, but do not want to face the process alone."
        imageUrl="https://images.unsplash.com/photo-1523419409543-8c1a91125174?w=1920&q=80"
        imageAlt="Romanian countryside orchard at golden hour"
      />

      <Section tone="cream">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-5 font-display text-2xl text-brown md:text-3xl">
                Romanian Heritage Estates is a new name.
              </h2>
              <div className="mt-6 space-y-5 font-body text-[15px] leading-relaxed text-brown/70">
                <p>But the knowledge behind it is not new.</p>
                <p>
                  Our family worked in Romanian real estate from 1998 to 2010, closing
                  transactions, working with property owners and building strong relationships
                  with notaries, legal professionals and local market insiders.
                </p>
                <p>That experience matters.</p>
                <p>
                  In Romania, the right property is not always easy to find online. The right
                  people are not always easy to reach. And the right documents are not always easy
                  to understand.
                </p>
                <p>We created Romanian Heritage Estates to solve that problem for international buyers.</p>
                <p>
                  Our role is simple: to help you find verified rural and heritage properties,
                  understand the process and move safely from curiosity to ownership.
                </p>
                <p>
                  We combine old local relationships with modern buyer education, international
                  marketing and a premium concierge process.
                </p>
                <p>For you, that means fewer unknowns. Fewer wasted trips. Fewer unsafe decisions.</p>
                <p>And a clearer path to the life you came looking for.</p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-14">
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="mt-5 font-display text-2xl text-brown md:text-3xl">
                Our mission
              </h2>
              <p className="mt-6 max-w-xl font-body text-[15px] leading-relaxed text-brown/70">
                To help international families discover, understand and safely buy rural
                properties in Romania - while protecting the beauty, dignity and heritage of the
                places we represent.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-14">
              <Eyebrow>Values</Eyebrow>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="border-t border-brown/10 pt-5">
                    <h3 className="font-display text-xl text-brown">{value.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-brown/65">
                      {value.body}
                    </p>
                  </div>
                ))}
              </div>
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
              We help you move from curiosity to ownership with fewer unknowns.
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
