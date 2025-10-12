// app/layout.js
import "./globals.css";


export const metadata = {
  title: "Travel Phrasebook",
  description: "100 essential travel phrases per destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
