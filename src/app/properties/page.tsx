import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import PropertiesExplorer from "@/components/properties/PropertiesExplorer";
import { getAllProperties, getAllRegions } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Curated rural, mountain and heritage properties in Romania — verified paperwork, real lifestyle potential, selected for international buyers.",
};

export default async function PropertiesPage() {
  const [properties, regions] = await Promise.all([getAllProperties(), Promise.resolve(getAllRegions())]);

  return (
    <>
      <PageHero
        eyebrow="The Collection"
        title="Curated rural properties. Not endless listings."
        subtitle="We do not list every house we find. We select properties with real lifestyle potential, strong character and verified paperwork."
        imageUrl="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=1920&q=80"
        imageAlt="Rolling Romanian countryside with scattered farmhouses"
      />

      <Section tone="cream" className="pt-16">
        <Container>
          <PropertiesExplorer properties={properties} regions={regions} />
        </Container>
      </Section>
    </>
  );
}
