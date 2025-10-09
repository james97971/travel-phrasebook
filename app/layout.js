import "./globals.css";

export const metadata = {
  title: "Travel Phrasebook",
  description: "Essential travel phrases for global travelers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense 코드 — 반드시 이렇게 정적 삽입 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7721829567022661"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
