// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Light Travel 100",
  description: "가벼운 여행을 위한 필수 100문장",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
