import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "NODEBETA AI — Deep Reasoning & Deterministic Computation",
  description:
    "Autonomous cognitive architecture constructed for analytical rigor, formal proof verification, and multi-hypothesis reasoning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-[#060709] text-[#E5E7EB] selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
