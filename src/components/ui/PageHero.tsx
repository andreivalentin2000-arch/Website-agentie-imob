import Container from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageUrl,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[460px] items-end overflow-hidden bg-ink md:min-h-[520px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
        role="img"
        aria-label={imageAlt}
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="absolute inset-0 bg-fade-ink" />

      <Container className="relative z-20 pb-14 pt-[120px] sm:pt-[130px] md:pt-[140px] lg:pt-[150px] xl:pt-[160px]">
        <p className="eyebrow mb-5 text-gold-soft">
          <span className="rule-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-[1.08] text-cream md:text-5xl md:leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-cream/70">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
