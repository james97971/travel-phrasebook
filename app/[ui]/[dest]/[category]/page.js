// app/[ui]/[dest]/[category]/page.js
"use client";
import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { PHRASES, CATEGORIES } from "@/lib/phrases";

const LABELS = {
  ko: { search: "검색", backRoot: "← 언어 선택으로", backCats: "← 카테고리", pron: "발음", none: "발음 데이터가 없습니다" },
  en: { search: "Search", backRoot: "← Language selector", backCats: "← Categories", pron: "Pronunciation", none: "No pronunciation data" },
  ja: { search: "検索", backRoot: "← 言語選択へ", backCats: "← カテゴリへ", pron: "発音", none: "発音データがありません" },
  zh: { search: "搜索", backRoot: "← 语言选择", backCats: "← 分类", pron: "发音", none: "暂无读音数据" },
};

export default function CategoryPage() {
  const { ui = "en", dest = "ko", category = "greet" } = useParams();
  const router = useRouter();
  const L = LABELS[ui] || LABELS.en;

  const [q, setQ] = useState("");
  const [openPron, setOpenPron] = useState(() => new Set());

  const list = useMemo(() => {
    const all = PHRASES.filter((p) => p.catId === category);
    if (!q) return all;
    const keys = ["ko", "en", "ja", "zh"];
    return all.filter((p) => keys.some((k) => (p[k] || "").toLowerCase().includes(q.toLowerCase())));
  }, [q, category]);

  const catMeta = CATEGORIES.find((c) => c.id === category) || CATEGORIES[0];

  const speak = (text, lang) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const map = { ko: "ko-KR", en: "en-US", ja: "ja-JP", zh: "zh-CN" };
    const u = new SpeechSynthesisUtterance(text);
    u.lang = map[lang] || "en-US";
    u.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  const pronOf = (item) => item.roman?.[dest] || item.roman?.[ui] || item[dest] || "";

  const togglePron = (id) => {
    const next = new Set(openPron);
    next.has(id) ? next.delete(id) : next.add(id);
    setOpenPron(next);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-3 text-sm text-slate-500 flex flex-wrap gap-3 items-center">
        <button onClick={() => router.push("/")} className="underline" type="button">{L.backRoot}</button>
        <span>·</span>
        <Link href={`/${ui}/${dest}`} className="underline">{L.backCats}</Link>
        <span>·</span>
        <span>UI: {ui.toUpperCase()} / DEST: {dest.toUpperCase()}</span>
      </div>

      <h1 className="text-xl font-bold mb-2">{catMeta.name[ui] || catMeta.name.en}</h1>
      <p className="text-slate-600 mb-4">{catMeta.hint[ui] || catMeta.hint.en}</p>

      <div className="mb-4 flex items-center gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={L.search} className="rounded-xl border px-3 py-2 w-full md:w-96" />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {list.map((it) => {
          const isOpen = openPron.has(it.id);
          const pron = pronOf(it);
          return (
            <div key={it.id} className="rounded-2xl border bg-white/70 p-5 shadow-sm flex flex-col gap-2">
              <div className="text-xs text-slate-500">{catMeta.name[ui] || catMeta.name.en}</div>
              <div className="font-semibold">{it[ui]}</div>
              <div className="text-lg">{it[dest]}</div>

              <div className="mt-2 flex gap-2">
                <button className="rounded-lg border px-3 py-1 text-sm hover:shadow" onClick={() => speak(it[dest] || it[ui], dest)} title="Speak">🔊</button>
                <button className="rounded-lg border px-3 py-1 text-sm hover:shadow" onClick={() => togglePron(it.id)} title={L.pron}>📋</button>
              </div>

              {isOpen && (
                <div className="mt-2 rounded-xl border bg-white/60 px-3 py-2 text-sm text-slate-700">
                  <div className="text-xs text-slate-500 mb-1">{L.pron}</div>
                  {pron || <span className="text-slate-400">{L.none}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
