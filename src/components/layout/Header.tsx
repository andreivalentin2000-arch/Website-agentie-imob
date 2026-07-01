"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLocale } from "@/lib/locale-context";

const navItems = [
  { href: "/properties", key: "nav.properties" },
  { href: "/services", key: "nav.services" },
  { href: "/buying-process", key: "nav.buyingProcess" },
  { href: "/about", key: "nav.about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLocale();

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 h-20 transition-colors duration-500 ease-cinematic lg:h-24",
        solid ? "bg-ink/95 backdrop-blur-sm border-b border-cream/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-6 px-6 sm:px-8 lg:gap-8 lg:px-12 xl:px-20">
        <Link
          href="/"
          className="max-w-[220px] flex-shrink-0 font-display text-lg leading-tight tracking-wide text-cream sm:max-w-none xl:text-xl"
        >
          Romanian Heritage Estates
        </Link>

        <nav className="hidden min-w-0 items-center gap-5 lg:flex xl:gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "whitespace-nowrap font-body text-[11px] uppercase tracking-[0.22em] text-cream/75 transition-colors hover:text-gold xl:text-xs",
                pathname === item.href && "text-gold"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-shrink-0 items-center gap-5 lg:flex xl:gap-6">
          <LanguageSwitcher dark />
          <Link
            href="/contact"
            className="whitespace-nowrap border border-gold px-4 py-2.5 font-body text-[11px] uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink xl:px-5 xl:text-xs"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <button
          type="button"
          className="z-50 flex-shrink-0 text-cream lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="z-[60] border-t border-cream/10 bg-ink px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm uppercase tracking-widest2 text-cream/80 hover:text-gold"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit border border-gold px-5 py-3 font-body text-xs uppercase tracking-widest2 text-gold"
            >
              {t("nav.cta")}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher dark />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
