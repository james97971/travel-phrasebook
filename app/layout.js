// app/layout.js
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Travel Phrasebook",
  description: "Essential travel phrases for global travelers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ AdSense: Next Script로 afterInteractive 로드 (권장) */}
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7721829567022661"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
