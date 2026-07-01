"use client";

import { useMemo, useState } from "react";
import { Property, LifestyleTag, PropertyCondition, PropertyType } from "@/lib/types";
import { conditionLabels, lifestyleTagLabels, propertyTypeLabels } from "@/lib/labels";
import PropertyCard from "@/components/properties/PropertyCard";

const landSizeOptions = [
  { label: "Any land size", value: "" },
  { label: "0.5 ha+", value: "5000" },
  { label: "1 ha+", value: "10000" },
  { label: "2 ha+", value: "20000" },
  { label: "5 ha+", value: "50000" },
];

interface Props {
  properties: Property[];
  regions: string[];
}

export default function PropertiesExplorer({ properties, regions }: Props) {
  const [region, setRegion] = useState("");
  const [minLandSize, setMinLandSize] = useState("");
  const [condition, setCondition] = useState<PropertyCondition | "">("");
  const [lifestyleTag, setLifestyleTag] = useState<LifestyleTag | "">("");
  const [propertyType, setPropertyType] = useState<PropertyType | "">("");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (region && p.region !== region) return false;
      if (minLandSize && p.landSizeSqm < Number(minLandSize)) return false;
      if (condition && p.condition !== condition) return false;
      if (lifestyleTag && !p.lifestyleTags.includes(lifestyleTag)) return false;
      if (propertyType && p.propertyType !== propertyType) return false;
      return true;
    });
  }, [properties, region, minLandSize, condition, lifestyleTag, propertyType]);

  const selectClass =
    "w-full appearance-none border border-brown/20 bg-cream-paper px-4 py-3 font-body text-sm text-brown focus:border-gold";

  const resetFilters = () => {
    setRegion("");
    setMinLandSize("");
    setCondition("");
    setLifestyleTag("");
    setPropertyType("");
  };

  const hasFilters = region || minLandSize || condition || lifestyleTag || propertyType;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 border border-brown/10 bg-cream-paper p-6 sm:grid-cols-2 lg:grid-cols-5">
        <label className="block">
          <span className="mb-1.5 block font-body text-[11px] uppercase tracking-widest2 text-brown/50">
            Region
          </span>
          <select className={selectClass} value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="">All regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block font-body text-[11px] uppercase tracking-widest2 text-brown/50">
            Land size
          </span>
          <select className={selectClass} value={minLandSize} onChange={(e) => setMinLandSize(e.target.value)}>
            {landSizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block font-body text-[11px] uppercase tracking-widest2 text-brown/50">
            Condition
          </span>
          <select
            className={selectClass}
            value={condition}
            onChange={(e) => setCondition(e.target.value as PropertyCondition | "")}
          >
            <option value="">Any condition</option>
            {Object.entries(conditionLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block font-body text-[11px] uppercase tracking-widest2 text-brown/50">
            Lifestyle
          </span>
          <select
            className={selectClass}
            value={lifestyleTag}
            onChange={(e) => setLifestyleTag(e.target.value as LifestyleTag | "")}
          >
            <option value="">Any lifestyle</option>
            {Object.entries(lifestyleTagLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block font-body text-[11px] uppercase tracking-widest2 text-brown/50">
            Property type
          </span>
          <select
            className={selectClass}
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value as PropertyType | "")}
          >
            <option value="">Any type</option>
            {Object.entries(propertyTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="font-body text-sm text-brown/50">
          {filtered.length} {filtered.length === 1 ? "property" : "properties"}
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="font-body text-xs uppercase tracking-widest2 text-gold-dim hover:text-gold"
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property, i) => (
            <PropertyCard key={property.slug} property={property} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-16 border border-dashed border-brown/20 py-16 text-center">
          <p className="font-display text-xl text-brown">No properties match those filters yet.</p>
          <p className="mt-2 font-body text-sm text-brown/55">
            New estates are added regularly. Try widening your search, or tell us what you are
            looking for directly.
          </p>
        </div>
      )}
    </div>
  );
}
