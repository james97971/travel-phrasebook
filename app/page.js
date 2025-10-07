// app/page.js (Demo 제거 버전)
"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const LOCALES = [
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文(简体)", flag: "🇨🇳" },
];

const UIL10N = {
  ko: { ui:"UI", travel:"Travel", title:"해외여행 필수 회화", subtitle:"여행지 언어를 선택한 뒤 시작하세요.", to:"여행지", start:"회화 보기" },
  en: { ui:"UI", travel:"Travel", title:"Travel Phrasebook", subtitle:"Pick your destination language and start.", to:"Destination", start:"Show phrases" },
  ja: { ui:"UI", travel:"Travel", title:"海外旅行の必須フレーズ", subtitle:"行き先の言語を選んで開始。", to:"行き先", start:"フレーズを見る" },
  zh: { ui:"UI", travel:"Travel", title:"海外旅行必备会话", subtitle:"选择旅行地语言后开始。", to:"旅行地", start:"查看会话" },
};

export default function Main() {
  const router = useRouter();
  const [ui, setUi] = useState("en"); // 기본 en
  const [to, setTo] = useState("ko"); // 기본 ko

  useEffect(() => {
    const savedUi = localStorage.getItem("ui");
    const savedTo = localStorage.getItem("to");
    if (savedUi) setUi(savedUi);
    if (savedTo) setTo(savedTo);
  }, []);
  useEffect(() => { localStorage.setItem("ui", ui); }, [ui]);
  useEffect(() => { localStorage.setItem("to", to); }, [to]);

  const t = useMemo(() => UIL10N[ui] || UIL10N.en, [ui]);

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <div className="text-lg font-bold flex items-center gap-2">
            <span className="text-xl">🌍</span> Phrasebook
          </div>
          <div className="ml-auto flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-white/60">{t.ui}</span>
            <select className="rounded-lg border px-2 py-1" value={ui} onChange={(e)=>setUi(e.target.value)}>
              {LOCALES.map(l=> <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>

            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-white/60">{t.travel}</span>
            <select className="rounded-lg border px-2 py-1" value={to} onChange={(e)=>setTo(e.target.value)}>
              {LOCALES.map(l=> <option key={l.code} value={l.code}>{l.flag} {l.label}</option>)}
            </select>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="absolute inset-x-0 -top-10 blur-3xl opacity-30 pointer-events-none">
          <div className="mx-auto h-40 max-w-5xl rounded-full bg-gradient-to-r from-indigo-300 via-cyan-300 to-emerald-300" />
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-8">
          <div className="rounded-3xl border bg-white/70 p-6 md:p-10 shadow-sm">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">{t.title}</h1>
            <p className="mt-2 text-slate-600">{t.subtitle}</p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border bg-white/70 p-5 shadow-sm">
                <div className="text-xs text-slate-500 mb-2">{t.to}</div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{LOCALES.find(l=>l.code===to)?.flag}</div>
                  <select className="rounded-xl border px-3 py-2" value={to} onChange={e=>setTo(e.target.value)}>
                    {LOCALES.map(l=> <option key={l.code} value={l.code}>{l.flag} {l.label}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={()=>router.push(`/${ui}/${to}`)}
                className="rounded-2xl border px-5 py-3 text-sm hover:shadow inline-flex items-center gap-2"
              >
                {t.start} <span>›</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 py-10 text-center text-xs text-slate-500">
          <nav className="flex gap-4 justify-center">
            <a href="/privacy" className="underline">Privacy</a>
            <a href="/terms" className="underline">Terms</a>
            <a href="/contact" className="underline">Contact</a>
          </nav>
          <div className="mt-3">© {new Date().getFullYear()} Light Travel 100</div>
        </footer>
    </div>
  );
}
