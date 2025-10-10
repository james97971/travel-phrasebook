// app/layout.js
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Travel Phrasebook",
  description: "100 essential travel phrases per destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* AdSense: 페이지 전체에서 로드 (이미 쓰고 있던 값 유지) */}
        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7721829567022661"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
