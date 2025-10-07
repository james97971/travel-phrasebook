// app/[ui]/[dest]/page.js
"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CATEGORIES, UIL10N } from "@/lib/phrases";

export default function CategoryHub() {
  const { ui = "en", dest = "ko" } = useParams();
  const t = UIL10N[ui] || UIL10N.en;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-4 text-sm text-slate-500">UI: {ui.toUpperCase()} · DEST: {dest.toUpperCase()}</div>
      <h1 className="text-2xl font-bold mb-2">{t.trending}</h1>
      <p className="mb-4 text-slate-600">Choose a category to see phrases.</p>

      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
        {CATEGORIES.map((c) => (
          <Link
            key={c.id}
            href={`/${ui}/${dest}/${c.id}`}
            className="rounded-2xl border bg-white/70 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2"
          >
            <div className="text-2xl leading-none">{c.icon}</div>
            <div className="font-semibold">{c.name[ui] || c.name.en}</div>
            <div className="text-xs text-slate-500">{c.hint[ui] || c.hint.en}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
