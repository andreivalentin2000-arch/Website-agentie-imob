import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PropertyGallery from "@/components/properties/PropertyGallery";
import GeneralAreaMap from "@/components/properties/GeneralAreaMap";
import PropertyCard from "@/components/properties/PropertyCard";
import VerifiedBadge from "@/components/ui/VerifiedBadge";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { conditionLabels, lifestyleTagLabels } from "@/lib/labels";
import {
  getAllSlugs,
  getPropertyBySlug,
  getRelatedProperties,
} from "@/lib/properties";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const property = await getPropertyBySlug(params.slug);
  if (!property) return {};
  return {
    title: property.title,
    description: property.summary,
    openGraph: {
      title: property.title,
      description: property.summary,
      images: [{ url: property.coverImage.url }],
    },
  };
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = await getPropertyBySlug(params.slug);
  if (!property) notFound();

  const related = await getRelatedProperties(params.slug, 3);

  return (
    <>
      <div className="h-24 bg-ink md:h-28" aria-hidden="true" />

      <Section tone="cream" className="pt-8 md:pt-10">
        <Container>
          <p className="font-body text-xs uppercase tracking-widest2 text-gold-dim">
            <Link href="/properties" className="hover:text-gold">Properties</Link>
            <span className="mx-2">/</span>
            {property.region}
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="max-w-2xl font-display text-3xl font-light leading-tight text-brown md:text-5xl">
                {property.title}
              </h1>
              <p className="mt-3 font-body text-sm text-brown/55">
                {property.generalArea} &middot; {property.region}, {property.county}
              </p>
            </div>
            {property.documentsVerified && <VerifiedBadge size={60} />}
          </div>

          <div className="mt-10">
            <h2 className="mb-5 font-display text-2xl text-brown">Gallery</h2>
            <PropertyGallery images={property.gallery} />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-brown">Property Overview</h2>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-brown/70">
                {property.story}
              </p>

              <h3 className="mt-10 font-display text-xl text-brown">Why This Property Matters</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-brown/70">
                This property is presented for its lifestyle potential, rural character and general
                area appeal. Full details are shared through the private buyer process.
              </p>

              <h3 className="mt-10 font-display text-xl text-brown">Land &amp; Lifestyle</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-brown/70">
                {property.landDetails}
              </p>

              <h3 className="mt-10 font-display text-xl text-brown">House &amp; Buildings</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-brown/70">
                {property.houseSizeSqm > 0
                  ? "The house and buildings should be reviewed during a private consultation and site visit, with condition, use and restoration needs discussed before any decision."
                  : "This is primarily a land-led opportunity. Any existing structures, access and future use should be reviewed during the private buyer process."}
              </p>

              <h3 className="mt-10 font-display text-xl text-brown">Lifestyle Markers</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {property.lifestyleTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-olive/25 px-3 py-1.5 font-body text-xs uppercase tracking-wide text-olive"
                  >
                    {lifestyleTagLabels[tag]}
                  </span>
                ))}
              </div>

              <h3 className="mt-10 font-display text-xl text-brown">Utilities &amp; Access</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {property.utilities.map((u) => (
                  <li key={u} className="flex items-center gap-2 font-body text-sm text-brown/70">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {u}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-xl text-brown">Document Status</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-brown/70">
                Key property documents pre-checked before presentation. Private consultation
                required for full details.
              </p>

              <div className="mt-10">
                <h3 className="mb-4 font-display text-xl text-brown">General Area</h3>
                <GeneralAreaMap
                  region={property.region}
                  county={property.county}
                  generalArea={property.generalArea}
                />
              </div>
            </div>

            <aside>
              <div className="sticky top-28 border border-brown/10 bg-cream-paper p-7">
                <dl className="space-y-4 font-body text-sm">
                  <div className="flex items-center justify-between border-b border-brown/10 pb-3">
                    <dt className="text-brown/50">Land size</dt>
                    <dd className="text-brown">{(property.landSizeSqm / 10000).toFixed(1)} ha</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-brown/10 pb-3">
                    <dt className="text-brown/50">House size</dt>
                    <dd className="text-brown">
                      {property.houseSizeSqm > 0 ? `${property.houseSizeSqm} m²` : "Unbuilt land"}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-brown/10 pb-3">
                    <dt className="text-brown/50">Rooms</dt>
                    <dd className="text-brown">{property.rooms > 0 ? property.rooms : "—"}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-brown/10 pb-3">
                    <dt className="text-brown/50">Condition</dt>
                    <dd className="text-brown">{conditionLabels[property.condition]}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-brown/50">Price</dt>
                    <dd className="text-brown">Price on request</dd>
                  </div>
                </dl>
                <Link
                  href="#consultation"
                  className="mt-7 inline-flex w-full items-center justify-center border border-gold bg-gold px-6 py-3.5 font-body text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-soft"
                >
                  Book a Private Consultation
                </Link>
                <p className="mt-4 font-body text-xs leading-relaxed text-brown/45">
                  Private consultation required for full details. Exact address and full
                  documentation are shared only with qualified buyers.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="cream" className="border-t border-brown/10 pt-16">
          <Container>
            <h2 className="font-display text-2xl text-brown md:text-3xl">
              Related Properties
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
              {related.map((p, i) => (
                <PropertyCard key={p.slug} property={p} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section tone="olive" id="consultation">
        <Container className="max-w-2xl">
          <p className="eyebrow mb-5 text-gold-soft">
            <span className="rule-gold" aria-hidden="true" />
            Book a Private Consultation
          </p>
          <h2 className="font-display text-3xl font-light text-cream md:text-4xl">
            Interested in this property?
          </h2>
          <p className="mt-4 font-body text-[15px] text-cream/70">
            We do not publish exact addresses online. Book a private consultation to receive more
            details, understand the area and see if this property matches your goals.
          </p>
          <div className="mt-10 bg-cream p-7 md:p-10">
            <ConsultationForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
