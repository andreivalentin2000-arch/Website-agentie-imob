import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(6, "Please enter a phone or WhatsApp number."),
  countryOfResidence: z.string().trim().min(2, "Please tell us your country of residence."),
  citizenship: z.string().trim().min(2, "Please tell us your citizenship."),
  budgetRange: z.string().trim().min(1, "Please select a budget range."),
  timeline: z.string().trim().min(1, "Please select a timeline."),
  purchaseIntent: z.enum(["permanent-move", "holiday-home", "investment"], {
    errorMap: () => ({ message: "Please select an option." }),
  }),
  preferredRegions: z.string().trim().optional().default(""),
  desiredLandSize: z.string().trim().optional().default(""),
  desiredPropertyType: z.string().trim().optional().default(""),
  wantsAnimalsGardenFarming: z.boolean().default(false),
  needsRemoteWorkInternet: z.boolean().default(false),
  needsLegalRelocationSupport: z.boolean().default(false),
  visitTimeframe: z.string().trim().optional().default(""),
  message: z.string().trim().optional().default(""),
  gdprConsent: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy policy to continue." }),
  }),
  guideConsent: z.boolean().default(false),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

export function validateLeadForm(values: unknown):
  | { success: true; data: LeadFormValues }
  | { success: false; errors: LeadFormErrors } {
  const result = leadFormSchema.safeParse(values);
  if (result.success) {
    return { success: true, data: result.data };
  }
  const errors: LeadFormErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof LeadFormValues;
    if (!errors[key]) errors[key] = issue.message;
  }
  return { success: false, errors };
}
