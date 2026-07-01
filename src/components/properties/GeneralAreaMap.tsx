import { MapPin } from "lucide-react";

export default function GeneralAreaMap({
  region,
  county,
  generalArea,
}: {
  region: string;
  county: string;
  generalArea: string;
}) {
  return (
    <div className="border border-brown/10 bg-olive-deep p-8 text-cream md:p-10">
      <div className="flex items-start gap-4">
        <div className="relative mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40">
          <div className="absolute inset-0 animate-pulse rounded-full border border-gold/20" />
          <MapPin size={22} strokeWidth={1.4} className="text-gold" />
        </div>
        <div>
          <p className="font-display text-lg text-cream">{generalArea}</p>
          <p className="mt-1 font-body text-sm text-cream/60">
            {region} &middot; {county}
          </p>
        </div>
      </div>
      <p className="mt-6 font-body text-[13px] leading-relaxed text-cream/50">
        For privacy, the map shows only the general area, not the exact address. The exact
        address, cadastral plan and site visit scheduling are shared once you begin the qualified
        buyer process with our team.
      </p>
    </div>
  );
}
