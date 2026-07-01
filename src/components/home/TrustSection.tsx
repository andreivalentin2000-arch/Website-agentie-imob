import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import VerifiedBadge from "@/components/ui/VerifiedBadge";
import { trustBullets } from "@/lib/content";

export default function TrustSection() {
  return (
    <Section tone="ink">
      <Container className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <Eyebrow dark>Local Knowledge, Modern Standards</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-cream md:text-4xl">
            Local knowledge. Old relationships. Modern standards.
          </h2>
          <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-cream/70">
            <p>
              Romanian Heritage Estates is built by a family with deep real estate experience
              in Romania.
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

        <Reveal delay={0.15}>
          <div className="border border-cream/15 p-8 md:p-10">
            <VerifiedBadge size={64} className="mb-8" />
            <ul className="space-y-4">
              {trustBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 font-body text-sm text-cream/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
