// app/contact/page.js
export const metadata = {
  title: "Contact | Light Travel 100",
  description: "Contact Light Travel 100",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-slate-600 mb-6">
        For questions, feedback, or partnership inquiries, please reach out.
      </p>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p className="mb-4">
          <a
            href="mailto:jamespark6897@gmail.com"
            className="underline text-blue-600"
          >
            jamespark6897@gmail.com
          </a>
        </p>

        <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
        <p className="mb-4">Mon–Fri (KST), 10:00–18:00</p>

        <h2 className="text-xl font-semibold mb-2">Notes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>We typically respond within 2–3 business days.</li>
          <li>
            When contacting us, please include your device/browser info if your
            question is technical.
          </li>
        </ul>
      </div>
    </main>
  );
}
