import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PainSection from "@/components/home/PainSection";
import DreamOutcome from "@/components/home/DreamOutcome";
import WhyRomania from "@/components/home/WhyRomania";
import PropertiesPreview from "@/components/home/PropertiesPreview";
import Services from "@/components/home/Services";
import BuyingProcess from "@/components/home/BuyingProcess";
import TrustSection from "@/components/home/TrustSection";
import FAQSection from "@/components/home/FAQSection";
import LeadMagnet from "@/components/home/LeadMagnet";
import FinalCTA from "@/components/home/FinalCTA";
import { getFeaturedProperties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Own Land. Live Well. Start in Romania.",
  description:
    "Premium rural properties in Romania, fully guided for international buyers. Verified estates, trusted legal partners, and a concierge process from first call to keys.",
};

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties(3);

  return (
    <>
      <Hero />
      <PainSection />
      <DreamOutcome />
      <WhyRomania />
      <PropertiesPreview properties={featuredProperties} />
      <Services />
      <BuyingProcess />
      <TrustSection />
      <FAQSection />
      <LeadMagnet />
      <FinalCTA />
    </>
  );
}
