// app/page.js
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
  ko: { title:"해외여행 필수 회화", sub:"여행지 언어를 선택한 뒤 시작하세요.", to:"여행지", start:"회화 보기" },
  en: { title:"Travel Phrasebook", sub:"Pick your destination language and start.", to:"Destination", start:"Show phrases" },
  ja: { title:"海外旅行の必須フレーズ", sub:"行き先の言語を選んで開始。", to:"行き先", start:"フレーズを見る" },
  zh: { title:"海外旅行必备会话", sub:"选择旅行地语言后开始。", to:"旅行地", start:"查看会话" },
};

/** 하단 안내문: UI 언어에 맞춰 자동 번역 */
function SeoIntro({ ui }) {
  const texts = {
    ko: {
      title: "가벼운 여행자를 위한 안내",
      body1: (
        <>
          <strong>Travel Phrasebook</strong>은 여행 전에 핵심만 익히고 싶은 분을 위한
          <strong> 나라별 필수 100문장</strong> 모음입니다. 인사, 교통, 숙소, 식당, 쇼핑, 응급, 관광, 결제 등 실제
          상황에서 바로 쓸 수 있는 짧은 문장을 카테고리로 묶었습니다. 상단에서 <em>UI 언어</em>는 고정하고
          <em> 여행지 언어</em>만 바꾸면, 화면 설명은 익숙한 언어로 유지되고 아래 문장은 현지어로 표시됩니다.
        </>
      ),
      howtoTitle: "이용 방법",
      howtoList: [
        "여행지 언어를 선택하고 “회화 보기” 버튼을 누릅니다.",
        "카테고리를 고른 뒤, 문장 카드의 스피커 아이콘을 눌러 현지 발음을 들어보세요.",
        "메모 아이콘을 누르면 UI 언어 기준의 간단한 발음 표기가 나타납니다.",
      ],
      whyTitle: "왜 100문장인가요?",
      whyBody: (
        <>
          여행에서 실제로 반복되는 패턴은 단순합니다. 길을 묻고, 주문하고, 감사 인사를 전하고, 도움을 요청하는 짧은
          표현이 대부분이죠. 본 서비스는 이러한 <strong>핵심 표현만 추려</strong> 숙지 부담을 줄였습니다.
        </>
      ),
      note: "* 일부 언어/카테고리는 순차적으로 확장됩니다. 문의나 제안은 하단의 Contact로 보내주세요.",
    },
    en: {
      title: "Traveler’s Quick Guide",
      body1: (
        <>
          <strong>Travel Phrasebook</strong> offers <strong>100 essential phrases</strong> per destination.
          Short, practical sentences grouped by categories like greetings, transport, lodging, dining, shopping,
          emergencies, and payments. Keep the <em>UI language</em> fixed and switch only the <em>destination language</em>.
        </>
      ),
      howtoTitle: "How to Use",
      howtoList: [
        "Select your destination language and click “Show phrases”.",
        "Choose a category, then tap the speaker icon to hear native pronunciation.",
        "Tap the memo icon to reveal romanized pronunciation in your UI language.",
      ],
      whyTitle: "Why 100 Phrases?",
      whyBody: (
        <>
          Real travel conversations repeat simple patterns—asking directions, ordering, thanking, requesting help.
          We focus on <strong>core expressions only</strong> to reduce learning load.
        </>
      ),
      note: "* More languages/categories will be added. For feedback, use the Contact page below.",
    },
    ja: {
      title: "旅行者のための簡単ガイド",
      body1: (
        <>
          <strong>Travel Phrasebook</strong>は
          <strong> 国別必須100フレーズ</strong>をカテゴリ別に整理。挨拶・交通・宿泊・食事・買い物・緊急・決済など、
          旅行でそのまま使える短い表現だけを厳選しています。上部で<em>UI言語</em>は固定し、
          <em>行き先の言語</em>だけ切り替えて使えます。
        </>
      ),
      howtoTitle: "使い方",
      howtoList: [
        "行き先の言語を選び「フレーズを見る」をクリック。",
        "カテゴリを選び、スピーカーアイコンで発音を確認。",
        "メモアイコンでUI言語基準の発音表記を表示。",
      ],
      whyTitle: "なぜ100フレーズ？",
      whyBody: (
        <>
          旅行中の会話はシンプルなパターンの繰り返しです。道を聞く、注文する、感謝する、助けを求める等。
          本サービスは<strong>最重要表現のみ</strong>に絞り、学習負担を減らします。
        </>
      ),
      note: "* 言語/カテゴリは順次拡張予定です。ご意見は下部のContactへ。",
    },
    zh: {
      title: "旅行者简明指南",
      body1: (
        <>
          <strong>Travel Phrasebook</strong> 为每个目的地整理
          <strong>100个必备句子</strong>，涵盖问候、交通、住宿、餐饮、购物、紧急、付款等分类。
          你可以固定<em>UI语言</em>，只切换<em>旅行地语言</em>。
        </>
      ),
      howtoTitle: "使用方法",
      howtoList: [
        "选择旅行地语言并点击“查看会话”。",
        "选择分类，点击扬声器图标收听发音。",
        "点击备忘图标显示基于UI语言的发音拼写。",
      ],
      whyTitle: "为什么是100句？",
      whyBody: (
        <>
          旅行中的交流多为固定模式：问路、点餐、致谢、求助等。我们专注于
          <strong>核心表达</strong>，降低学习负担。
        </>
      ),
      note: "* 部分语言/分类将逐步扩展。意见反馈请使用下方 Contact 页面。",
    },
  };

  const t = texts[ui] || texts.en;

  return (
    <section className="mt-10 rounded-2xl border bg-white p-6 prose prose-slate max-w-none">
      <h2>{t.title}</h2>
      <p>{t.body1}</p>
      <h3>{t.howtoTitle}</h3>
      <ol>{t.howtoList.map((v, i) => <li key={i}>{v}</li>)}</ol>
      <h3>{t.whyTitle}</h3>
      <p>{t.whyBody}</p>
      <p className="text-slate-500 text-sm">{t.note}</p>
    </section>
  );
}

export default function Main() {
  const router = useRouter();
  const [ui, setUi] = useState("en"); // 기본 EN
  const [to, setTo] = useState("ko"); // 기본 KO

  // 로컬 저장값 복구
  useEffect(() => {
    const a = localStorage.getItem("ui"); if (a) setUi(a);
    const b = localStorage.getItem("to"); if (b) setTo(b);
  }, []);
  // 변경 저장
  useEffect(() => { localStorage.setItem("ui", ui); }, [ui]);
  useEffect(() => { localStorage.setItem("to", to); }, [to]);

  const t = useMemo(() => UIL10N[ui] || UIL10N.en, [ui]);

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-sky-100 via-blue-50 to-indigo-100">
      {/* 상단 헤더 – 기존 디자인 그대로 */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <div className="text-lg font-bold flex items-center gap-2">
            <span className="text-xl">🌍</span> Travel Phrasebook
          </div>
          <div className="ml-auto flex items-center gap-2 text-sm">
            <span className="rounded-full border px-3 py-1 bg-white/60">UI</span>
            <select className="rounded-lg border px-2 py-1" value={ui} onChange={(e)=>setUi(e.target.value)}>
              {LOCALES.map(l=> <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
            <span className="rounded-full border px-3 py-1 bg-white/60">{t.to}</span>
            <select className="rounded-lg border px-2 py-1" value={to} onChange={(e)=>setTo(e.target.value)}>
              {LOCALES.map(l=> <option key={l.code} value={l.code}>{l.flag} {l.label}</option>)}
            </select>
          </div>
        </div>
      </header>

      {/* 메인 박스 – 기존 디자인 유지 */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-8">
        <div className="rounded-3xl border bg-white/70 p-6 md:p-10 shadow-sm">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">{t.title}</h1>
          <p className="mt-2 text-slate-600">{t.sub}</p>

          <div className="mt-6 rounded-2xl border bg-white/70 p-5 shadow-sm">
            <div className="text-xs text-slate-500 mb-2">{t.to}</div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">{LOCALES.find(l=>l.code===to)?.flag}</div>
              <select className="rounded-xl border px-3 py-2" value={to} onChange={(e)=>setTo(e.target.value)}>
                {LOCALES.map(l=> <option key={l.code} value={l.code}>{l.flag} {l.label}</option>)}
              </select>
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

        {/* 🔥 애드센스/콘텐츠 강화용 안내 – UI 언어로 표시 */}
        <SeoIntro ui={ui} />
      </section>
      <footer className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-500">
          <div className="border-t pt-6 flex flex-wrap items-center gap-4">
            <nav className="space-x-4">
              <a href="/contact" className="hover:underline">Contact</a>
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/terms" className="hover:underline">Terms</a>
            </nav>
            <span className="ml-auto">© {new Date().getFullYear()} Travel Phrasebook</span>
          </div>
        </footer>

    </div>
    
  );
}
