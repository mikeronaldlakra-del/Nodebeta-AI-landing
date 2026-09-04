import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NODEBETA AI — Deep Reasoning Engine",
  description:
    "The world's most powerful deep-reasoning AI. Think deeper, reason stronger, solve anything.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-node-black text-node-white antialiased">
        {children}
      </body>
    </html>
  );
}
