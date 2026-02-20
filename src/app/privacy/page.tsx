import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Untapped Revenue.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-h1 text-white mb-4">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: February 2026</p>

        <div className="prose-ur space-y-8">
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you fill out our contact forms,
              book a strategy call, or otherwise communicate with us. This includes your name, email
              address, phone number, business name, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and schedule strategy calls</li>
              <li>Provide and improve our marketing services</li>
              <li>Send you relevant communications about our services (with your consent)</li>
              <li>Analyze how our website is used to improve our content and services</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as described in this policy. We may share information with
              trusted service providers who assist us in operating our website and conducting our
              business (such as GoHighLevel CRM and scheduling tools), provided they agree to keep
              this information confidential.
            </p>
          </section>

          <section>
            <h2>4. Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar tracking technologies (including the Facebook Pixel
              and Google Analytics) to analyze website traffic and improve your experience. You can
              control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services
              and fulfill the purposes described in this policy. You may request deletion of your
              information at any time by contacting us.
            </p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@untapped-revenue.com">info@untapped-revenue.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
