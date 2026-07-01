export type Locale = "en" | "ro";

export type LifestyleTag =
  | "mountain-view"
  | "large-garden"
  | "orchard"
  | "suitable-for-farming"
  | "renovation-potential"
  | "move-in-ready"
  | "verified-documents"
  | "remote-work-potential"
  | "heritage-character"
  | "near-forest"
  | "submontane-area"
  | "estate-potential";

export type PropertyCondition =
  | "move-in-ready"
  | "lightly-renovated"
  | "renovation-potential"
  | "restoration-project";

export type PropertyType =
  | "manor-estate"
  | "farmhouse"
  | "mountain-chalet"
  | "village-house"
  | "land-with-structures"
  | "heritage-property";

export interface PropertyImage {
  url: string;
  alt: string;
  category:
    | "exterior"
    | "interior"
    | "courtyard"
    | "garden"
    | "air-view"
    | "rooms"
    | "outbuildings";
}

export interface Property {
  slug: string;
  title: string;
  region: string;
  generalArea: string; // village / area name only — never an exact address
  county: string;
  landSizeSqm: number;
  houseSizeSqm: number;
  rooms: number;
  utilities: string[];
  condition: PropertyCondition;
  propertyType: PropertyType;
  lifestyleTags: LifestyleTag[];
  documentsVerified: boolean;
  summary: string;
  story: string;
  landDetails: string;
  coverImage: PropertyImage;
  gallery: PropertyImage[];
  mapArea: {
    lat: number;
    lng: number;
    zoomLevel: number; // deliberately kept low — general area only
  };
  featured: boolean;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  citizenship: string;
  budgetRange: string;
  timeline: string;
  purchaseIntent: "permanent-move" | "holiday-home" | "investment";
  preferredRegions: string;
  desiredLandSize: string;
  desiredPropertyType: string;
  wantsAnimalsGardenFarming: boolean;
  needsRemoteWorkInternet: boolean;
  needsLegalRelocationSupport: boolean;
  visitTimeframe: string;
  message: string;
  gdprConsent: boolean;
  guideConsent: boolean;
}

export type TranslationDictionary = Record<string, string>;
