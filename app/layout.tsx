import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foxy webstorage",
  description: "Created by xKitsune47@GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-row bg-slate-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
