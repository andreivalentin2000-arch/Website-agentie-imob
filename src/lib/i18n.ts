import en from "@/data/translations/en.json";
import ro from "@/data/translations/ro.json";
import { Locale, TranslationDictionary } from "@/lib/types";

const dictionaries: Record<Locale, TranslationDictionary> = { en, ro };

export const locales: Locale[] = ["en", "ro"];
export const defaultLocale: Locale = "en";

/**
 * Structural note: this covers shared chrome (nav, footer, CTAs, common labels).
 * Long-form marketing copy on each page currently lives directly in the English
 * components. To fully localize, move each section's copy into en.json / ro.json
 * under a page-scoped key (e.g. "home.pain.title") and read it through translate().
 */
export function translate(locale: Locale, key: string): string {
  return dictionaries[locale]?.[key] ?? dictionaries[defaultLocale][key] ?? key;
}

export function getDictionary(locale: Locale): TranslationDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
