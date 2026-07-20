import type { Metadata } from "next";
import { Big_Shoulders_Display, Caveat, JetBrains_Mono } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const display = Big_Shoulders_Display({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const hand = Caveat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-hand" });

export const metadata: Metadata = {
  title: "stuck.builders — The Build · your AI system, live in 4 hours",
  description:
    "Live 4-hour virtual build, 1:1 with Will. You build your AI system hands-on. $1,995 limited-time launch (regular $2,995).",
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
