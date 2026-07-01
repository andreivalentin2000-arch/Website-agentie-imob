import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "cream" | "ink" | "olive";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream text-brown",
  ink: "bg-ink text-cream",
  olive: "bg-olive-deep text-cream",
};

export default function Section({
  children,
  tone = "cream",
  className,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("relative py-20 md:py-28", toneClasses[tone], className)}>
      {children}
    </section>
  );
}
