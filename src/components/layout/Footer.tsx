"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import Container from "@/components/ui/Container";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-ink text-cream/70">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-xl text-cream">Romanian Heritage Estates</p>
          <p className="mt-3 max-w-xs font-body text-sm text-cream/60">{t("footer.tagline")}</p>
          <p className="mt-6 font-body text-xs uppercase tracking-widest2 text-gold-soft">
            hello@romanianheritageestates.com
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4 text-gold-soft">{t("footer.explore")}</p>
          <ul className="space-y-2 font-body text-sm">
            <li><Link href="/properties" className="hover:text-gold">{t("nav.properties")}</Link></li>
            <li><Link href="/services" className="hover:text-gold">{t("nav.services")}</Link></li>
            <li><Link href="/buying-process" className="hover:text-gold">{t("nav.buyingProcess")}</Link></li>
            <li><Link href="/about" className="hover:text-gold">{t("nav.about")}</Link></li>
            <li><Link href="/contact" className="hover:text-gold">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-gold-soft">{t("footer.legal")}</p>
          <ul className="space-y-2 font-body text-sm">
            <li><Link href="/privacy-policy" className="hover:text-gold">{t("footer.privacy")}</Link></li>
            <li><Link href="/terms" className="hover:text-gold">{t("footer.terms")}</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 font-body text-xs text-cream/40 md:flex-row">
          <p>&copy; {year} Romanian Heritage Estates. {t("footer.rights")}</p>
          <p>{t("footer.bottom")}</p>
        </Container>
      </div>
    </footer>
  );
}
