export default function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${dark ? "text-gold-soft" : "text-gold-dim"}`}
    >
      <span className="rule-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
