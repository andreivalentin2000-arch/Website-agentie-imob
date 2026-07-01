import { NextRequest, NextResponse } from "next/server";
import { validateLeadForm } from "@/lib/validation";
import { sendLeadToCrm } from "@/lib/crm";

/**
 * Email sending placeholder.
 *
 * Replace this with a real transactional email call (Resend, Postmark,
 * SendGrid, etc.) to:
 *   1. notify the internal team of a new lead, and
 *   2. deliver "The International Buyer's Guide to Rural Property in
 *      Romania" to the submitter if they checked the guide-consent box.
 */
async function sendLeadEmails(lead: { fullName: string; email: string; guideConsent: boolean }) {
  console.log("[api/lead] Would send internal notification + (maybe) guide email to:", lead.email);
  return { ok: true };
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = validateLeadForm(body);
  if (!result.success) {
    return NextResponse.json({ error: "Validation failed.", fields: result.errors }, { status: 422 });
  }

  await Promise.all([sendLeadEmails(result.data), sendLeadToCrm(result.data)]);

  return NextResponse.json({ ok: true });
}
