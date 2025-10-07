// app/terms/page.js
export const metadata = {
  title: "Terms of Service | Light Travel 100",
  description: "Terms of Service for Light Travel 100",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-slate-500 mb-8">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <section className="prose prose-slate max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Light Travel 100 (the “Service”), you agree to
          these Terms. If you do not agree, do not use the Service.
        </p>

        <h2>2. Use of the Service</h2>
        <ul>
          <li>Do not misuse, disrupt, or attempt unauthorized access.</li>
          <li>
            You are responsible for your use and for complying with applicable
            laws and regulations.
          </li>
        </ul>

        <h2>3. Content &amp; Intellectual Property</h2>
        <ul>
          <li>
            The content on this site (text, UI, design) is owned by us or our
            licensors and is protected by intellectual property laws.
          </li>
          <li>
            You may not copy, scrape, or redistribute substantial portions
            without permission.
          </li>
        </ul>

        <h2>4. Ads &amp; Third-Party Links</h2>
        <p>
          The Service may display third-party ads (e.g., Google AdSense) and
          links to third-party sites. We are not responsible for their content
          or practices.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          The Service is provided “as is” without warranties of any kind. We do
          not guarantee accuracy, availability, or fitness for a particular
          purpose.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          any loss of profits or revenues, arising out of or related to your use
          of the Service.
        </p>

        <h2>7. Changes to the Terms</h2>
        <p>
          We may modify these Terms from time to time. Continued use after
          changes constitutes acceptance of the updated Terms.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Republic of Korea, without
          regard to conflict of law principles.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:jamespark6897@gmail.com">jamespark6897@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
