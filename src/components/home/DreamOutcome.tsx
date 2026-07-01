import Reveal from "@/components/ui/Reveal";

export default function DreamOutcome() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')",
        }}
        role="img"
        aria-label="Family garden with mountains in the distance at soft morning light"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-24 md:px-10">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow mb-6 text-gold-soft">
              <span className="rule-gold" aria-hidden="true" />A Different Way to Live
            </p>
            <h2 className="font-display text-3xl font-light leading-tight text-cream md:text-5xl">
              A slower life. A stronger family. A home with land.
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 space-y-2 font-body text-lg leading-relaxed text-cream/80">
            <p>Wake up to hills, forests or mountains.</p>
            <p>Drink coffee in your own garden.</p>
            <p>Grow food your children can pick with their hands.</p>
            <p>Keep animals, if the property and local rules allow it.</p>
            <p>Work online from a quiet home, then step outside into real nature.</p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-display text-xl italic text-gold-soft md:text-2xl">
              This is not about escaping life. It is about choosing a better one.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
