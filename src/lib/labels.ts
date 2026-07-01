import { LifestyleTag, PropertyCondition, PropertyType } from "@/lib/types";

export const lifestyleTagLabels: Record<LifestyleTag, string> = {
  "mountain-view": "Mountain View",
  "large-garden": "Large Garden",
  orchard: "Orchard",
  "suitable-for-farming": "Suitable for Farming",
  "renovation-potential": "Renovation Potential",
  "move-in-ready": "Move-in Ready",
  "verified-documents": "Verified Documents",
  "remote-work-potential": "Remote Work Potential",
  "heritage-character": "Heritage Character",
  "near-forest": "Near Forest",
  "submontane-area": "Submontane Area",
  "estate-potential": "Estate Potential",
};

export const conditionLabels: Record<PropertyCondition, string> = {
  "move-in-ready": "Move-in Ready",
  "lightly-renovated": "Lightly Renovated",
  "renovation-potential": "Renovation Potential",
  "restoration-project": "Restoration Project",
};

export const propertyTypeLabels: Record<PropertyType, string> = {
  "manor-estate": "Manor Estate",
  farmhouse: "Farmhouse",
  "mountain-chalet": "Mountain Chalet",
  "village-house": "Village House",
  "land-with-structures": "Land",
  "heritage-property": "Heritage Property",
};

export const galleryCategoryLabels: Record<string, string> = {
  exterior: "Exterior",
  interior: "Interior",
  courtyard: "Courtyard",
  garden: "Garden",
  "air-view": "Air View",
  rooms: "Rooms",
  outbuildings: "Outbuildings",
};
