import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zapp.energy"),
  title: {
    default: "ZAPP — Plan Electricity Before You Pay For It",
    template: "%s | ZAPP",
  },
  description:
    "Pakistan’s AI-powered electricity planning assistant. Get daily energy plans, solar-aware recommendations and bill estimates—without smart meters or IoT hardware.",
  keywords: [
    "electricity bill Pakistan",
    "energy planning app",
    "solar planning Pakistan",
    "electricity units calculator",
    "ZAPP energy",
  ],
  openGraph: {
    title: "ZAPP — Smarter energy. Lighter bills.",
    description:
      "Plan household electricity before you use it with AI, weather and solar-aware guidance.",
    type: "website",
    locale: "en_PK",
    siteName: "ZAPP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAPP — Plan electricity before you pay for it.",
    description:
      "Daily electricity plans for Pakistani households. No smart hardware required.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/zapp-logo.png",
    apple: "/zapp-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
