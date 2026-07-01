import type { Metadata } from "next";
import {
  PhoneCall,
  Search,
  FileCheck,
  Scale,
  Plane,
  Handshake,
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
    "Private property guidance, verified documentation and relocation support for international buyers in rural Romania.",
};

const services = [
  {
    icon: PhoneCall,
    title: "Private Buyer Consultation",
    body: "We start with your life, not with a property.\n\nWhy Romania?\nWhy now?\nWhat kind of days do you want?\nWhat does your family need?\nHow much land feels right?\nHow close do you need to be to airports, schools, hospitals or cities?\n\nThis helps us understand if Romania is a real fit - and what kind of property makes sense.",
  },
  {
    icon: Search,
    title: "Curated Property Search",
    body: "We do not send you random listings.\n\nWe look for properties that match your lifestyle: land, privacy, views, condition, access, internet, utilities, farming potential, restoration potential and long-term value.\n\nThe goal is not more options.\n\nThe goal is better options.",
  },
  {
    icon: FileCheck,
    title: "Verified Documentation",
    body: "A beautiful rural home means nothing if the paperwork is not clean.\n\nBefore a property is seriously presented, we check the important documents: ownership, cadastral records, intabulation and legal status.\n\nThis helps protect you from wasted trips, false hope and unsafe decisions.",
  },
  {
    icon: Scale,
    title: "Legal Counsel & Notary Coordination",
    body: "You do not need to figure out the Romanian legal process alone.\n\nWe work with trusted lawyers and notaries who help international buyers understand what they are signing and what comes next.\n\nClear steps.\nClear papers.\nNo guessing.",
  },
  {
    icon: Plane,
    title: "Romania Visit Support",
    body: "When you decide to visit, we can help make the trip simple.\n\nAirport pickup.\nAccommodation support.\nPrivate property tours.\nLocal guidance.\nA clear plan before you arrive.\n\nYou come to see the life.\nWe handle the moving parts.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Purchase Support",
    body: "When the right property appears, we help you move with confidence.\n\nWe support communication, negotiation, document flow and the steps that lead to signing.\n\nYou stay informed.\nYou stay protected.\nYou do not have to chase people alone.",
  },
  {
    icon: Users,
    title: "Post-Purchase Aftercare",
    body: "The work does not stop when you receive the keys.\n\nWe can help you with practical next steps: utilities, internet, local contacts, renovation partners, translation, setup and settling in.\n\nBecause buying the property is only the beginning.",
  },
  {
    icon: Hammer,
    title: "Renovation & Local Partner Introductions",
    body: "Some of the best Romanian rural homes need care.\n\nWe can introduce you to trusted local people for renovation, restoration, repairs, land work, gardens and practical setup.\n\nOld homes can become beautiful again - with the right hands.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Private property guidance for buyers who do not want to do this alone."
        subtitle="Buying rural property in Romania can be simple - when the right people guide the process."
        imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
        imageAlt="Stone courtyard of a Romanian countryside property"
      />

      <Section tone="cream">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Full Concierge Support</Eyebrow>
            <div className="mt-5 space-y-3 font-body text-[15px] leading-relaxed text-brown/65">
              <p>You may not know the language.</p>
              <p>You may not know the villages.</p>
              <p>You may not know which documents matter.</p>
              <p>You may not know who to trust.</p>
              <p>That is normal.</p>
              <p>Our work is to make the path clear before you make a serious move.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.04}>
                <Icon size={22} strokeWidth={1.3} className="text-gold" />
                <h2 className="mt-4 font-display text-lg text-brown">{title}</h2>
                <p className="mt-2 whitespace-pre-line font-body text-sm leading-relaxed text-brown/60">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="olive">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-light text-cream md:text-4xl">
              Every service is part of one guided process.
            </h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-cream/70">
              Tell us what kind of life you want. We will help you understand the safest path.
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
