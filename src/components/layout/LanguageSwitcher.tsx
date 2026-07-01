"use client";

import { useLocale } from "@/lib/locale-context";
import { locales } from "@/lib/i18n";
import clsx from "clsx";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={clsx(
        "flex items-center gap-1 font-body text-xs uppercase tracking-widest2",
        dark ? "text-cream/70" : "text-brown/60"
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLocale(loc)}
            aria-pressed={locale === loc}
            className={clsx(
              "px-1 transition-colors duration-200",
              locale === loc
                ? "text-gold"
                : dark
                ? "hover:text-cream"
                : "hover:text-brown"
            )}
          >
            {loc.toUpperCase()}
          </button>
          {i < locales.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </div>
  );
}
