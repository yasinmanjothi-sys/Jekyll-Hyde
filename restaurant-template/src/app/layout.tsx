import type { Metadata } from "next";
import { Geist, Geist_Mono, Pirata_One, Amatic_SC } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pirataOne = Pirata_One({
  variable: "--font-pirata",
  weight: "400",
  subsets: ["latin"],
});

const amaticSC = Amatic_SC({
  variable: "--font-amatic",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jekyll & Hyde | Nairobi",
  description: "Unreleased flavours. Unique hospitality. A cocktail bar & kitchen in Westlands, Nairobi.",
  keywords: ["Cocktail Bar", "Nairobi", "Westlands", "Jekyll & Hyde", "Nightlife", "Restaurant"],
  authors: [{ name: "Jekyll & Hyde" }],
  openGraph: {
    title: "Jekyll & Hyde | Nairobi",
    description: "Unreleased flavours. Unique hospitality.",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/map_screenshot.png", // Using the map as a placeholder OG image
        width: 1200,
        height: 630,
        alt: "Jekyll & Hyde Nairobi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pirataOne.variable} ${amaticSC.variable} antialiased bg-black text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
