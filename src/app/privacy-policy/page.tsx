import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Romanian Heritage Estates collects, uses and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="h-24 bg-ink md:h-28" aria-hidden="true" />
      <Section tone="cream">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4 text-gold-dim">
            <span className="rule-gold" aria-hidden="true" />
            Legal
          </p>
          <h1 className="font-display text-3xl text-brown md:text-4xl">Privacy Policy</h1>
          <p className="mt-3 font-body text-sm text-brown/50">Last updated: 1 July 2026</p>

          <div className="prose-none mt-10 space-y-8 font-body text-[15px] leading-relaxed text-brown/70">
            <p>
              This placeholder policy explains, in plain terms, how Romanian Heritage Estates
              intends to handle personal data. It is provided as a starting structure only and
              should be reviewed by qualified legal counsel — including for compliance with the
              EU General Data Protection Regulation (GDPR) and the data protection laws of each
              country our clients reside in — before this site goes live.
            </p>

            <div>
              <h2 className="font-display text-xl text-brown">1. Who we are</h2>
              <p className="mt-3">
                Romanian Heritage Estates (&ldquo;we&rdquo;, &ldquo;us&rdquo;) acts as an
                intermediary connecting international buyers with rural, mountain and heritage
                properties in Romania. Contact details for our data controller will be listed
                here.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">2. What we collect</h2>
              <p className="mt-3">
                When you submit our consultation form, we collect the information you provide,
                which may include your name, email, phone number, country of residence,
                citizenship, budget range, timeline, property preferences and any message you
                include.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">3. How we use your data</h2>
              <p className="mt-3">
                We use your data to respond to your enquiry, match you with relevant properties,
                coordinate consultations and, where you have opted in, send you our buyer&rsquo;s
                guide and related updates. We do not sell personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">4. Legal basis and retention</h2>
              <p className="mt-3">
                We process your data on the basis of your consent and our legitimate interest in
                responding to your enquiry. Data is retained only as long as necessary to provide
                our services and meet legal obligations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">5. Your rights</h2>
              <p className="mt-3">
                Depending on your country of residence, you may have the right to access,
                correct, delete or export your data, and to withdraw consent at any time. Contact
                details for exercising these rights will be listed here.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">6. Third-party services</h2>
              <p className="mt-3">
                We may use third-party tools for scheduling (such as Calendly), email delivery
                and CRM management. Each will be listed here along with links to their own
                privacy policies once configured.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">7. Contact</h2>
              <p className="mt-3">
                Questions about this policy can be sent to hello@romanianheritageestates.com.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
