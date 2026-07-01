import type { Metadata } from "next";
import {
  PhoneCall,
  Search,
  FileCheck,
  Scale,
  Stamp,
  Plane,
  Home,
  Compass,
  Handshake,
  Languages,
  Users,
  Hammer,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Private consultation, curated property search, verified documentation, legal and notary coordination, and full relocation support for international buyers in Romania.",
};

const services = [
  {
    icon: PhoneCall,
    title: "Private buyer consultation",
    body: "A confidential first conversation to understand your goals, budget, timeline and the kind of life you want to build in Romania.",
  },
  {
    icon: Search,
    title: "Curated property search",
    body: "We match your criteria against properties we have personally reviewed, not an open database of unverified listings.",
  },
  {
    icon: FileCheck,
    title: "Document verification",
    body: "Cadastral records, ownership history and legal status are checked before a property is ever presented to you.",
  },
  {
    icon: Scale,
    title: "Legal counsel through trusted partners",
    body: "Independent Romanian lawyers, chosen for their experience with international buyers, review every transaction.",
  },
  {
    icon: Stamp,
    title: "Notary coordination",
    body: "We schedule and coordinate the notary process, translating and explaining each step as it happens.",
  },
  {
    icon: Plane,
    title: "Airport pickup and travel planning",
    body: "Arrive without logistics to worry about. We plan your visit door to door.",
  },
  {
    icon: Home,
    title: "Accommodation support",
    body: "Recommendations and bookings for comfortable stays near the properties you are visiting.",
  },
  {
    icon: Compass,
    title: "Private property tours",
    body: "Unhurried, one-on-one visits — never a group showing.",
  },
  {
    icon: Handshake,
    title: "Negotiation support",
    body: "We represent your interests directly with sellers, informed by local market knowledge.",
  },
  {
    icon: Languages,
    title: "Translation and paperwork assistance",
    body: "Every document is explained in plain English before you sign anything.",
  },
  {
    icon: Users,
    title: "Post-purchase relocation support",
    body: "Help with utilities, registration, local contacts and the practical side of settling in.",
  },
  {
    icon: Hammer,
    title: "Renovation and local partner introductions",
    body: "Trusted local builders, architects and craftspeople, introduced when you are ready.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="From first call to keys in hand — we stay with you."
        subtitle="Buying in another country can feel risky. Different language. Different rules. Unknown people. Unknown paperwork. That is why our role is simple: we make the process feel clear, safe and guided."
        imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
        imageAlt="Stone courtyard of a Romanian countryside property"
      />

      <Section tone="cream">
        <Container>
          <Reveal>
            <Eyebrow>Full Concierge Support</Eyebrow>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.04}>
                <Icon size={22} strokeWidth={1.3} className="text-gold" />
                <h2 className="mt-4 font-display text-lg text-brown">{title}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-brown/60">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="olive">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-light text-cream md:text-4xl">
              Every service is included in one guided process.
            </h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-cream/70">
              We do not publish prices for individual services here — the right level of support
              depends entirely on your situation. Let&rsquo;s talk about what you need.
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
