import propertiesData from "@/data/properties.json";
import { LifestyleTag, Property, PropertyCondition, PropertyType } from "@/lib/types";

/**
 * Supabase-ready data service.
 *
 * Every function below reads from the local mock JSON file today. To move to
 * Supabase, replace the body of each function with a query against a
 * `properties` table shaped like the `Property` type in lib/types.ts, e.g.:
 *
 *   export async function getAllProperties(): Promise<Property[]> {
 *     const { data, error } = await supabase.from("properties").select("*");
 *     if (error) throw error;
 *     return data as Property[];
 *   }
 *
 * Keeping these functions async now (even though the mock read is
 * synchronous) means call sites do not need to change when the real
 * database is wired up.
 */

const properties = propertiesData as unknown as Property[];

export async function getAllProperties(): Promise<Property[]> {
  return properties;
}

export async function getFeaturedProperties(limit = 3): Promise<Property[]> {
  return properties.filter((p) => p.featured).slice(0, limit);
}

export async function getPropertyBySlug(slug: string): Promise<Property | undefined> {
  return properties.find((p) => p.slug === slug);
}

export async function getRelatedProperties(slug: string, limit = 3): Promise<Property[]> {
  const current = properties.find((p) => p.slug === slug);
  if (!current) return properties.slice(0, limit);
  return properties
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aScore = a.region === current.region ? 1 : 0;
      const bScore = b.region === current.region ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export interface PropertyFilters {
  region?: string;
  minLandSize?: number;
  condition?: PropertyCondition;
  lifestyleTag?: LifestyleTag;
  propertyType?: PropertyType;
}

export async function filterProperties(filters: PropertyFilters): Promise<Property[]> {
  return properties.filter((p) => {
    if (filters.region && p.region !== filters.region) return false;
    if (filters.minLandSize && p.landSizeSqm < filters.minLandSize) return false;
    if (filters.condition && p.condition !== filters.condition) return false;
    if (filters.lifestyleTag && !p.lifestyleTags.includes(filters.lifestyleTag)) return false;
    if (filters.propertyType && p.propertyType !== filters.propertyType) return false;
    return true;
  });
}

export function getAllRegions(): string[] {
  return Array.from(new Set(properties.map((p) => p.region))).sort();
}

export function getAllSlugs(): string[] {
  return properties.map((p) => p.slug);
}
