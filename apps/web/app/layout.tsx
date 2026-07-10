import type { Metadata } from "next";
import { Big_Shoulders_Display, Caveat, JetBrains_Mono } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const display = Big_Shoulders_Display({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const hand = Caveat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-hand" });

export const metadata: Metadata = {
  title: "Stuck to Shipped — Two Builds. Greenfield or Brownfield. Shipped in 7 days.",
  description:
    "Two Builds. Greenfield $199 — no code yet. Brownfield $399 — existing project. Shipped in 7 days.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${hand.variable}`}>
      <body>
        <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
        {children}
      </body>
    </html>
  );
}
