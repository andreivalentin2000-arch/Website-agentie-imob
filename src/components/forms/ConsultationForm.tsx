"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { TextField, SelectField, TextAreaField, CheckboxField } from "@/components/forms/FormField";
import { LeadFormValues, LeadFormErrors, validateLeadForm } from "@/lib/validation";
import { Button } from "@/components/ui/Button";

const budgetRanges = [
  "Under €150,000",
  "€150,000 – €300,000",
  "€300,000 – €600,000",
  "€600,000 – €1,000,000",
  "€1,000,000+",
  "Prefer to discuss",
];

const timelines = ["Within 3 months", "3–6 months", "6–12 months", "12 months+", "Just exploring"];

// gdprConsent is typed as a literal `true` (it must be checked to submit),
// so the initial unchecked state is cast through `unknown` deliberately.
const initialValues: LeadFormValues = {
  fullName: "",
  email: "",
  phone: "",
  countryOfResidence: "",
  citizenship: "",
  budgetRange: "",
  timeline: "",
  purchaseIntent: "permanent-move",
  preferredRegions: "",
  desiredLandSize: "",
  desiredPropertyType: "",
  wantsAnimalsGardenFarming: false,
  needsRemoteWorkInternet: false,
  needsLegalRelocationSupport: false,
  visitTimeframe: "",
  message: "",
  gdprConsent: false as unknown as true,
  guideConsent: false,
};

export default function ConsultationForm() {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "/api/lead";

  const update = <K extends keyof LeadFormValues>(key: K, value: LeadFormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateLeadForm(values);
    if (!result.success) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-gold/30 bg-cream-paper p-10 text-center">
        <CheckCircle2 size={36} strokeWidth={1.3} className="mx-auto text-gold" />
        <h3 className="mt-5 font-display text-2xl text-brown">Thank you. Your request has been received.</h3>
        <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-brown/60">
          We will review your answers and contact you to schedule a private consultation.
          {values.guideConsent &&
            " You will also receive The International Buyer's Guide to Rural Property in Romania by email."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Full name"
          value={values.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          error={errors.fullName}
          required
        />
        <TextField
          label="Email"
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Phone / WhatsApp"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={errors.phone}
          required
        />
        <TextField
          label="Country of residence"
          value={values.countryOfResidence}
          onChange={(e) => update("countryOfResidence", e.target.value)}
          error={errors.countryOfResidence}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Citizenship"
          value={values.citizenship}
          onChange={(e) => update("citizenship", e.target.value)}
          error={errors.citizenship}
          required
        />
        <SelectField
          label="Budget range"
          value={values.budgetRange}
          onChange={(e) => update("budgetRange", e.target.value)}
          error={errors.budgetRange}
          required
        >
          <option value="">Select a range</option>
          {budgetRanges.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </SelectField>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <SelectField
          label="Timeline to buy"
          value={values.timeline}
          onChange={(e) => update("timeline", e.target.value)}
          error={errors.timeline}
          required
        >
          <option value="">Select a timeline</option>
          {timelines.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </SelectField>
        <SelectField
          label="Permanent move, holiday home, or investment?"
          value={values.purchaseIntent}
          onChange={(e) => update("purchaseIntent", e.target.value as LeadFormValues["purchaseIntent"])}
        >
          <option value="permanent-move">Permanent move</option>
          <option value="holiday-home">Holiday home</option>
          <option value="investment">Investment</option>
        </SelectField>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Preferred regions, if any"
          placeholder="e.g. Transylvania, Maramureș"
          value={values.preferredRegions}
          onChange={(e) => update("preferredRegions", e.target.value)}
        />
        <TextField
          label="Desired land size"
          placeholder="e.g. 1–2 hectares"
          value={values.desiredLandSize}
          onChange={(e) => update("desiredLandSize", e.target.value)}
        />
      </div>

      <TextField
        label="Desired property type"
        placeholder="e.g. farmhouse, manor, mountain chalet"
        value={values.desiredPropertyType}
        onChange={(e) => update("desiredPropertyType", e.target.value)}
      />

      <div className="grid grid-cols-1 gap-4 border-y border-brown/10 py-6 sm:grid-cols-1">
        <CheckboxField
          label="I want animals, a garden or farming potential"
          checked={values.wantsAnimalsGardenFarming}
          onChange={(v) => update("wantsAnimalsGardenFarming", v)}
        />
        <CheckboxField
          label="I need reliable remote work internet"
          checked={values.needsRemoteWorkInternet}
          onChange={(v) => update("needsRemoteWorkInternet", v)}
        />
        <CheckboxField
          label="I will need legal or relocation support"
          checked={values.needsLegalRelocationSupport}
          onChange={(v) => update("needsLegalRelocationSupport", v)}
        />
      </div>

      <TextField
        label="When would you like to visit Romania?"
        placeholder="e.g. Autumn 2026, flexible"
        value={values.visitTimeframe}
        onChange={(e) => update("visitTimeframe", e.target.value)}
      />

      <TextAreaField
        label="Message"
        rows={4}
        value={values.message}
        onChange={(e) => update("message", e.target.value)}
        placeholder="Tell us anything else that matters to your search."
      />

      <div className="space-y-4">
        <CheckboxField
          label="I consent to my data being processed in accordance with the Privacy Policy."
          checked={!!values.gdprConsent}
          onChange={(v) => update("gdprConsent", v as unknown as true)}
          error={errors.gdprConsent}
        />
        <CheckboxField
          label="Send me The International Buyer's Guide to Rural Property in Romania and occasional updates."
          checked={values.guideConsent}
          onChange={(v) => update("guideConsent", v)}
        />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-[#9C4B3F]">
          Something went wrong sending your request. Please try again, or email us directly.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Book a Private Consultation"}
      </Button>
    </form>
  );
}
