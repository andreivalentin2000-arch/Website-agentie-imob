import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the Romanian Heritage Estates website and services.",
};

export default function TermsPage() {
  return (
    <>
      <div className="h-24 bg-ink md:h-28" aria-hidden="true" />
      <Section tone="cream">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4 text-gold-dim">
            <span className="rule-gold" aria-hidden="true" />
            Legal
          </p>
          <h1 className="font-display text-3xl text-brown md:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-3 font-body text-sm text-brown/50">Last updated: 1 July 2026</p>

          <div className="mt-10 space-y-8 font-body text-[15px] leading-relaxed text-brown/70">
            <p>
              This placeholder is a structural starting point and should be reviewed by
              qualified legal counsel before publication, particularly regarding real estate
              intermediary regulations in Romania and consumer protection rules in each buyer&rsquo;s
              home country.
            </p>

            <div>
              <h2 className="font-display text-xl text-brown">1. Our role</h2>
              <p className="mt-3">
                Romanian Heritage Estates acts as an intermediary and concierge service
                connecting prospective buyers with rural and heritage properties in Romania. We
                are not a law firm, notary or financial advisor, and nothing on this site
                constitutes legal, tax or investment advice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">2. Property information</h2>
              <p className="mt-3">
                Property details are provided for general guidance. While we take care to verify
                key documentation before presenting a property, all information should be
                independently confirmed by your legal counsel before any purchase agreement is
                signed. &ldquo;Price on request&rdquo; listings do not constitute a binding
                offer.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">3. Use of this website</h2>
              <p className="mt-3">
                You agree to use this site only for lawful purposes and to provide accurate
                information when submitting enquiry forms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">4. No guarantee of outcome</h2>
              <p className="mt-3">
                We guide the buying process but cannot guarantee the outcome of any negotiation,
                legal review or notary proceeding, all of which depend on independent third
                parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">5. Limitation of liability</h2>
              <p className="mt-3">
                To the fullest extent permitted by law, Romanian Heritage Estates is not liable
                for indirect or consequential losses arising from use of this website or our
                services. This section requires review by qualified legal counsel.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">6. Governing law</h2>
              <p className="mt-3">
                These terms will be governed by the laws of Romania, without prejudice to any
                mandatory consumer protections applicable in your country of residence.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-brown">7. Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to hello@romanianheritageestates.com.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
