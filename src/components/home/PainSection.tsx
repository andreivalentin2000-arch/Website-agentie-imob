import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function PainSection() {
  return (
    <Section tone="cream">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="font-display text-2xl italic leading-relaxed text-brown/90 md:text-3xl">
            Maybe life in the city still works. But does it still feel right?
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-1.5 font-body text-lg leading-relaxed text-brown/70 md:text-xl">
          <p>You have the house. The job. The routine.</p>
          <p>But the noise gets louder.</p>
          <p>The air feels heavier.</p>
          <p>Your children grow up indoors.</p>
          <p>And every year, real freedom feels further away.</p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 space-y-1.5 font-body text-lg leading-relaxed text-brown/70 md:text-xl">
          <p>What would life look like with more land?</p>
          <p>More clean food?</p>
          <p>More silence?</p>
          <p>More sky?</p>
          <p>More time together?</p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10">
          <p className="font-display text-2xl text-olive md:text-3xl">
            In rural Romania, that life still exists.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
