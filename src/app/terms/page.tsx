import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Untapped Revenue.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-h1 text-white mb-4">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: February 2026</p>

        <div className="prose-ur space-y-8">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Untapped Revenue website and services, you accept and agree
              to be bound by these Terms of Service. If you do not agree to these terms, please do
              not use our services.
            </p>
          </section>

          <section>
            <h2>2. Services</h2>
            <p>
              Untapped Revenue provides done-for-you marketing services for class-based fitness
              studios, including website builds, CRM management, Facebook and Instagram advertising,
              Google advertising, and AI-powered lead follow-up systems. Specific service details,
              pricing, and scope are outlined in individual service agreements.
            </p>
          </section>

          <section>
            <h2>3. Service Terms</h2>
            <p>
              Monthly services operate on a month-to-month basis with no long-term contract required.
              The one-time website build fee is non-refundable once build work has commenced.
              Services may be added or removed with 30 days written notice.
            </p>
          </section>

          <section>
            <h2>4. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate business information and timely approvals</li>
              <li>Maintaining their advertising account access and payment methods</li>
              <li>Managing relationships with their members and trialers</li>
              <li>Updating their CRM pipelines with accurate conversion data for reporting</li>
            </ul>
          </section>

          <section>
            <h2>5. Results Disclaimer</h2>
            <p>
              While Untapped Revenue has generated significant results for many clients, individual
              results vary based on market conditions, studio quality, offer relevance, and other
              factors outside our control. Past results are not guarantees of future performance.
              Stated case study results are documented from specific client accounts and may not be
              typical.
            </p>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, and system methodologies,
              is the property of Untapped Revenue. Client websites and ad creatives created for
              clients remain the client&apos;s property upon full payment of services.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              Untapped Revenue&apos;s liability is limited to the amount paid for services in the
              preceding 30-day period. We are not liable for indirect, incidental, or consequential
              damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2>8. Governing Law</h2>
            <p>
              These terms are governed by applicable law. Any disputes shall be resolved through
              binding arbitration.
            </p>
          </section>

          <section>
            <h2>9. Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a href="mailto:info@untapped-revenue.com">info@untapped-revenue.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
