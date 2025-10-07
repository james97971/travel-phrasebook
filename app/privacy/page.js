// app/privacy/page.js
export const metadata = {
  title: "Privacy Policy | Light Travel 100",
  description: "Privacy Policy for Light Travel 100",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <section className="prose prose-slate max-w-none">
        <h2>1. Introduction</h2>
        <p>
          Light Travel 100 (“we”, “our”, “us”) respects your privacy. This
          Privacy Policy describes how we collect, use, and share information
          when you use this website (the “Service”).
        </p>

        <h2>2. What We Collect</h2>
        <ul>
          <li>
            <strong>Usage Data:</strong> pages visited, approximate location,
            device/browser info (via analytics tools or server logs).
          </li>
          <li>
            <strong>Cookies &amp; Local Storage:</strong> we may store UI
            language or preferences to improve your experience.
          </li>
          <li>
            <strong>Contact Information:</strong> only if you email us via the
            contact page.
          </li>
        </ul>

        <h2>3. Advertising (Google AdSense)</h2>
        <p>
          We use <strong>Google AdSense</strong> to display ads. Google and its
          partners may use cookies to serve ads based on your visits to this and
          other websites. Google’s use of advertising cookies enables it and its
          partners to serve ads to you based on your visit to our site and/or
          other sites on the Internet.
        </p>
        <ul>
          <li>
            You can opt out of personalized advertising by visiting{" "}
            <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            For more info about how Google uses data:{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noreferrer"
            >
              https://policies.google.com/technologies/ads
            </a>
          </li>
        </ul>

        <h2>4. Analytics</h2>
        <p>
          We may use privacy-friendly analytics or third-party analytics to
          understand aggregate usage trends. These tools may set cookies or
          collect anonymized/aggregated metrics.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain data only as long as necessary for the purposes described in
          this Policy or as required by law. Contact emails are kept as needed
          to respond and for record-keeping.
        </p>

        <h2>6. Your Choices</h2>
        <ul>
          <li>
            <strong>Cookie controls:</strong> You can control cookies in your
            browser settings. Blocking cookies may affect some features.
          </li>
          <li>
            <strong>Opt-out of personalized ads:</strong> via the link above.
          </li>
        </ul>

        <h2>7. Children’s Privacy</h2>
        <p>
          The Service is not directed to children under 13. We do not knowingly
          collect personal information from children.
        </p>

        <h2>8. Changes</h2>
        <p>
          We may update this Policy from time to time. We will post the new
          Policy on this page with an updated “Last updated” date.
        </p>

        <h2>9. Contact</h2>
        <p>
          If you have questions, contact us at{" "}
          <a href="mailto:jamespark6897@gmail.com">jamespark6897@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
