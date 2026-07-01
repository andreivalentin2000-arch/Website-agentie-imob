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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-cinematic",
        solid ? "bg-ink/95 backdrop-blur-sm border-b border-cream/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-display text-lg tracking-wide text-cream">
          Romanian Heritage Estates
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "font-body text-[13px] uppercase tracking-widest2 text-cream/75 transition-colors hover:text-gold",
                pathname === item.href && "text-gold"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher dark />
          <Link
            href="/contact"
            className="border border-gold px-5 py-2.5 font-body text-xs uppercase tracking-widest2 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <button
          type="button"
          className="text-cream md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-cream/10 bg-ink px-6 pb-8 pt-4 md:hidden">
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
