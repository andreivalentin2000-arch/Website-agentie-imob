/**
 * Calendly integration placeholder.
 *
 * Set NEXT_PUBLIC_CALENDLY_URL in your environment to a real Calendly link
 * (e.g. https://calendly.com/romanian-heritage-estates/private-consultation)
 * and the "Book a Private Consultation" flows will open it directly.
 * Until then, the site falls back to the on-page consultation form.
 */
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

export function hasCalendlyConfigured(): boolean {
  return CALENDLY_URL.length > 0;
}
