"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES, UIL10N } from "@/lib/phrases";

export default function DestPage({ params }) {
  const { ui, dest } = use(params);
  const router = useRouter();

  const copyByUi = {
    en: {
      title: "Select a phrase category",
      intro:
        "Choose a category to start learning useful travel phrases. Each phrase includes pronunciation and native translation.",
      tip: "Use the speaker icon to listen to the pronunciation.",
      guideTitle: "Travel Phrase Guide",
      guide1:
        "Travel Phrasebook helps you learn short, practical sentences essential for travel. Each category includes phrases used in real situations like greetings, transport, lodging, dining, and emergencies.",
      guide2:
        "Each phrase includes pronunciation and translation so that you can speak naturally wherever you go. This site focuses on everyday expressions, not textbook grammar.",
    },
    ko: {
      title: "카테고리를 선택하세요",
      intro:
        "여행에서 유용한 문장을 카테고리별로 학습하세요. 각 문장에는 발음과 현지 번역이 포함됩니다.",
      tip: "스피커 아이콘을 눌러 발음을 들어보세요.",
      guideTitle: "가벼운 여행자를 위한 안내",
      guide1:
        "Travel Phrasebook은 여행 전 핵심만 익히고 싶은 분을 위한 나라별 필수 100문장 모음입니다. 인사, 교통, 숙소, 식당, 쇼핑, 응급, 관광, 결제 등 실제 상황에서 바로 쓸 수 있는 짧은 문장을 카테고리로 묶었습니다.",
      guide2:
        "각 문장에는 발음과 번역이 포함되어 있어 바로 말하기에 도움이 됩니다. 교과서식 문법 대신, 실제로 자주 쓰는 표현 위주로 담았습니다.",
    },
    ja: {
      title: "カテゴリを選んでください",
      intro:
        "旅行で役立つフレーズをカテゴリーごとに学びましょう。各フレーズには発音と現地語訳が含まれます。",
      tip: "スピーカーアイコンで発音を確認できます。",
      guideTitle: "旅行会話ガイド",
      guide1:
        "Travel Phrasebook は、旅行で使える短い実用フレーズをカテゴリ別にまとめています。あいさつ、交通、宿泊、食事、緊急時、ショッピング、観光、支払いなど、実際の場面ですぐ使えます。",
      guide2:
        "各フレーズには発音表記と翻訳があり、自然に話す練習に役立ちます。教科書的な文法ではなく、日常の実用表現にフォーカスしています。",
    },
    zh: {
      title: "请选择一个类别",
      intro: "按类别学习旅行常用句子。每个句子都包含发音和当地翻译。",
      tip: "点击扬声器图标可收听发音。",
      guideTitle: "旅行会话指南",
      guide1:
        "Travel Phrasebook 收集每个目的地的 100 句常用短语，按类别划分，涵盖问候、交通、住宿、餐饮、紧急情况、购物、观光、支付等真实场景。",
      guide2:
        "每个短语都包含发音和翻译，便于在旅途中立即开口交流。本网站注重日常实用表达，而非课本语法。",
    },
  };
  const t = copyByUi[ui] || copyByUi.en;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      {/* ← 처음 화면으로 */}
      <a href="/" className="underline text-sm">← Home</a>

      <div className="mt-2 rounded-3xl border bg-white/70 p-6">
        <h1 className="text-2xl font-bold">{t.title}</h1>
        <p className="text-slate-700 mt-1">{t.intro}</p>
        <p className="text-slate-500 text-xs mt-1">{t.tip}</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => router.push(`/${ui}/${dest}/${c.id}`)}
            className="rounded-2xl border bg-white/80 hover:shadow transition text-left p-4"
          >
            <div className="text-2xl">{c.icon}</div>
            <div className="mt-1 text-lg font-semibold">
              {c.name?.[ui] || c.name?.en}
            </div>
            <div className="text-slate-600 text-sm">
              {c.hint?.[ui] || c.hint?.en}
            </div>
          </button>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border bg-white/70 p-6 text-sm text-slate-700 leading-relaxed">
        <h2 className="font-semibold mb-2">{t.guideTitle}</h2>
        <p>{t.guide1}</p>
        <p className="mt-2">{t.guide2}</p>
      </section>

      <div className="mt-4 text-sm text-slate-500">
        {UIL10N[ui]?.trending || UIL10N.en.trending}
      </div>
    </main>
  );
}
