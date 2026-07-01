import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    title: "Land still means something",
    body: "In many parts of rural Romania, homes come with gardens, orchards, barns, fields or forest edges. Space is not a luxury fantasy. It is real.",
  },
  {
    title: "Old-world beauty, modern connection",
    body: "Romania has some of Europe's fastest fixed broadband speeds, making many areas attractive for remote work and digital entrepreneurs.",
  },
  {
    title: "Nature you can feel every day",
    body: "The Carpathians, submontane villages, forests, rivers, mineral springs and open countryside create a way of life that feels healthier and more grounded.",
  },
  {
    title: "An undervalued rural market",
    body: "Compared to many Western European regions, rural Romania still offers rare properties, large plots and long-term upside.",
  },
  {
    title: "A life closer to the land",
    body: "Gardens, animals, orchards, firewood, wells, barns and seasonal food are still part of everyday rural life in many Romanian villages.",
  },
  {
    title: "A guided path, not a blind leap",
    body: "You do not need to understand Romania alone. We guide the search, paperwork, travel, legal steps and post-purchase transition.",
  },
];

export default function WhyRomania() {
  return (
    <Section tone="cream">
      <Container>
        <Reveal>
          <Eyebrow>Why Romania</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight text-brown md:text-4xl">
            Because Europe still has places that feel alive.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-brown/10 bg-brown/10 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06} className="bg-cream-paper p-8 md:p-10">
              <span className="font-body text-xs uppercase tracking-widest2 text-gold-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-brown">{card.title}</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-brown/65">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
