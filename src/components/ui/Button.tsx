import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-soft border border-gold",
  secondary:
    "bg-transparent text-cream border border-cream/40 hover:border-gold hover:text-gold",
  ghost:
    "bg-transparent text-brown border border-brown/30 hover:border-gold hover:text-gold-dim",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-body text-sm uppercase tracking-widest2 transition-colors duration-300 ease-cinematic";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={clsx(base, variantClasses[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, variantClasses[variant], className)} {...rest}>
      {children}
    </button>
  );
}
