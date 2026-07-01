import { LeadFormValues } from "@/lib/validation";

/**
 * CRM integration placeholder.
 *
 * Replace this with a real call to your CRM's inbound webhook or API
 * (e.g. HubSpot forms API, Pipedrive, a custom Supabase edge function, etc).
 * The env var below is read but not required for the site to build or run.
 *
 * Example real implementation:
 *
 *   const response = await fetch(process.env.CRM_WEBHOOK_URL!, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ source: "romanian-heritage-estates", lead }),
 *   });
 *   if (!response.ok) throw new Error(`CRM webhook failed: ${response.status}`);
 */
export async function sendLeadToCrm(lead: LeadFormValues): Promise<{ ok: boolean }> {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("[crm.ts] CRM_WEBHOOK_URL not configured — skipping CRM push. Lead:", {
      fullName: lead.fullName,
      email: lead.email,
      purchaseIntent: lead.purchaseIntent,
    });
    return { ok: true };
  }

  // Real call would go here once CRM_WEBHOOK_URL is set:
  // const response = await fetch(webhookUrl, { ... });
  return { ok: true };
}
