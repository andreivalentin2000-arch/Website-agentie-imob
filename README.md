# Romanian Heritage Estates

A premium relocation and property concierge website for international buyers of rural, mountain
and heritage properties in Romania. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS
and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site needs internet access on first build/dev run so
`next/font` can fetch **Fraunces** and **Inter** from Google Fonts (this happens once and is
then self-hosted/cached by Next.js — no runtime calls to Google after that).

```bash
npm run build   # production build + static generation
npm run start   # serve the production build
npm run lint    # eslint
```

## Design system

All design tokens live in `tailwind.config.ts`:

- **Colors** — `ink` (near-black olive, dark sections), `olive` (primary brand green),
  `cream` (warm background), `brown` (primary text), `gold` (accent/CTAs).
- **Type** — `font-display` (Fraunces, serif, headings) and `font-body` (Inter, sans, body/UI).
- **Signature element** — `src/components/ui/VerifiedBadge.tsx`, a cadastral-seal-style mark
  used everywhere the site makes its "verified paperwork" promise concrete (property cards,
  the Trust section, the About page).

## File structure

```
src/
  app/                        Next.js App Router pages
    page.tsx                  Home
    properties/page.tsx       Properties listing (with filters)
    properties/[slug]/page.tsx  Individual property page
    services/page.tsx
    buying-process/page.tsx
    about/page.tsx
    contact/page.tsx
    privacy-policy/page.tsx
    terms/page.tsx
    api/lead/route.ts         Lead form submission endpoint
    layout.tsx                Root layout: fonts, metadata, Header/Footer, LocaleProvider
    globals.css

  components/
    ui/            Design-system primitives (Button, Section, Container, Reveal, VerifiedBadge…)
    layout/        Header, Footer, LanguageSwitcher
    home/          Homepage sections (Hero, PainSection, WhyRomania, Services, FAQ, …)
    properties/    PropertyCard, PropertyGallery, PropertyFilters/Explorer, GeneralAreaMap
    forms/         ConsultationForm + reusable field primitives

  lib/
    types.ts             Shared TypeScript types (Property, LeadFormData, …)
    properties.ts        Data service — see "Connecting Supabase" below
    i18n.ts               Translation dictionary loader
    locale-context.tsx    EN/RO language switcher state (client context + hook)
    validation.ts         Zod schema for the consultation form
    crm.ts                CRM webhook placeholder
    calendly.ts           Calendly link placeholder
    content.ts            Shared static content (buying process steps, FAQ, trust bullets)
    labels.ts             Human-readable labels for tags/conditions/types

  data/
    properties.json        Mock property dataset (6 curated properties)
    translations/en.json   English strings (default, full coverage of shared UI chrome)
    translations/ro.json   Romanian strings (example/placeholder structure, same keys)
```

## Connecting Supabase

`src/lib/properties.ts` is the single place all property data flows through. Every page
imports from here, never from `data/properties.json` directly. To go live with Supabase:

1. Create a `properties` table matching the `Property` type in `src/lib/types.ts`.
2. Install `@supabase/supabase-js` and create a client (e.g. `src/lib/supabase.ts`).
3. Replace each function body in `src/lib/properties.ts` with a Supabase query, e.g.:

```ts
export async function getAllProperties(): Promise<Property[]> {
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw error;
  return data as Property[];
}
```

No component code needs to change — they already call these functions as `async`.

For leads, `src/app/api/lead/route.ts` is the single intake point. Add a `leads` insert there
alongside (or instead of) the CRM webhook call.

## Connecting Calendly

Set `NEXT_PUBLIC_CALENDLY_URL` in your environment (see `.env.example`) to your real Calendly
link. `src/lib/calendly.ts` exposes `CALENDLY_URL` and `hasCalendlyConfigured()` for any
component that should switch from the on-page form to an embedded/linked Calendly widget.

## Connecting your CRM

Set `CRM_WEBHOOK_URL` in your environment. `src/lib/crm.ts` will push every validated lead to
that endpoint. Until it's set, leads are only logged to the server console — nothing is lost,
but nothing is sent externally either, so this is safe to leave unset in staging.

## Email delivery

`src/app/api/lead/route.ts` contains a `sendLeadEmails()` placeholder. Wire this to a
transactional email provider (Resend, Postmark, SendGrid, …) to (1) notify your team of new
leads and (2) deliver "The International Buyer's Guide to Rural Property in Romania" to anyone
who checked the guide-consent box.

## Language switcher

The site is English-first. `src/lib/locale-context.tsx` provides a `useLocale()` hook (`locale`,
`setLocale`, `t`) wired to `src/data/translations/{en,ro}.json`. Today these dictionaries cover
shared chrome (nav, footer, common CTAs, hero). To fully localize a page's long-form copy, move
that copy into both JSON files under a page-scoped key (e.g. `"home.pain.title"`) and read it
through `t("home.pain.title")` instead of hardcoding English text in the component.

## Content notes

- Property `mapArea` coordinates and `generalArea` names are deliberately imprecise — exact
  addresses are never shown on the public site, per the brief.
- All property prices are "Price on request" by design; there is no budget filter on the
  properties page.
- Mock data lives in `src/data/properties.json`. Images are placeholder Unsplash photography —
  replace with real property photography before launch, keeping the `gallery` category system
  (`exterior`, `interior`, `courtyard`, `garden`, `air-view`, `rooms`, `outbuildings`) intact.
