"use client";

import { use, useMemo, useState } from "react";
import { getPhrases } from "@/lib/phrases";

function speak(text, lang) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang =
      { ko: "ko-KR", en: "en-US", ja: "ja-JP", zh: "zh-CN" }[lang] || "en-US";
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch {}
}

export default function CategoryPage({ params }) {
  // Next 15: params unwrap
  const { ui, dest, category } = use(params);

  const [q, setQ] = useState("");
  const [pron, setPron] = useState({});

  const data = useMemo(() => getPhrases(ui, dest, category), [ui, dest, category]);

  if (!data || data.items.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex gap-4 text-sm">
          <a href="/" className="underline">← Home</a>
          <a href={`/${ui}/${dest}`} className="underline">← Categories</a>
        </div>
        <h1 className="mt-3 text-xl font-bold">준비 중인 카테고리</h1>
        <p className="text-slate-600 mt-1">이 언어 조합은 순차적으로 확장됩니다.</p>
      </main>
    );
  }

  const filtered = data.items.filter(
    (x) => !q || x.native.includes(q) || x.ui.includes(q)
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* 빵크럼 */}
      <div className="flex gap-4 text-sm">
        <a href="/" className="underline">← Home</a>
        <a href={`/${ui}/${dest}`} className="underline">← Categories</a>
      </div>
      <div className="mt-1 text-xs text-slate-500">
        UI: {ui.toUpperCase()} · DEST: {dest.toUpperCase()}
      </div>

      <h1 className="mt-3 text-2xl font-bold">{data.title}</h1>
      <p className="text-slate-600">{data.pathLabel}</p>

      <input
        placeholder="Search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="mt-4 w-full rounded-xl border px-3 py-2"
      />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {filtered.map((item, idx) => (
          <article key={idx} className="rounded-2xl border bg-white p-4">
            <div className="text-xs text-slate-500">{data.pathLabel}</div>
            <h3 className="text-lg font-semibold mt-1">{item.ui}</h3>
            <p className="mt-2 text-xl">{item.native}</p>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => speak(item.native, dest)}
                className="rounded-xl border px-3 py-2 text-sm"
                title="Play"
              >
                🔊
              </button>
              <button
                onClick={() =>
                  // ✅ 발음은 목적어(DEST) 기준
                  setPron((p) => ({ ...p, [idx]: item.pron?.[dest] || item.native }))
                }
                className="rounded-xl border px-3 py-2 text-sm"
                title="Show pronunciation"
              >
                🗒
              </button>
            </div>

            <div className="mt-3 rounded-xl border px-3 py-2 text-sm bg-slate-50">
              <div className="text-slate-500">Pronunciation</div>
              <div>{pron[idx] || "Tap the memo icon to show"}</div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
