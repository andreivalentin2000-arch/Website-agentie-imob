import {
  PhoneCall,
  Search,
  FileCheck,
  Scale,
  Stamp,
  Plane,
  Home,
  Users,
  Handshake,
  Languages,
  Compass,
  Hammer,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const services = [
  { icon: PhoneCall, label: "Private buyer consultation" },
  { icon: Search, label: "Curated property search" },
  { icon: FileCheck, label: "Verified documentation" },
  { icon: Scale, label: "Legal counsel through trusted partners" },
  { icon: Stamp, label: "Notary coordination" },
  { icon: Plane, label: "Airport pickup and travel planning" },
  { icon: Home, label: "Accommodation support" },
  { icon: Compass, label: "Private property tours" },
  { icon: Handshake, label: "Negotiation support" },
  { icon: Languages, label: "Translation and paperwork assistance" },
  { icon: Users, label: "Post-purchase relocation support" },
  { icon: Hammer, label: "Renovation and local partner introductions" },
];

export default function Services() {
  return (
    <Section tone="olive">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow dark>Full Concierge Support</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-cream md:text-4xl">
            From first call to keys in hand — we stay with you.
          </h2>
          <p className="mt-5 font-body text-[15px] leading-relaxed text-cream/70">
            Buying in another country can feel risky. Different language. Different rules.
            Unknown people. Unknown paperwork. That is why our role is simple: we make the
            process feel clear, safe and guided.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.04} className="flex items-start gap-4">
              <Icon size={20} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold" />
              <span className="font-body text-[15px] text-cream/85">{label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <ButtonLink href="/services" variant="secondary">
            Explore Our Services
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}
