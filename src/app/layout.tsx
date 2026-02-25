import type { Metadata } from "next";
import { Geist, Geist_Mono, Pirata_One, Amatic_SC } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jekyllandhydekenya.com/"),
  title: "Jekyll & Hyde | Luxury Restaurant & Thematic Bar in Westlands, Nairobi",
  description: "Experience unreleased flavours at Jekyll & Hyde, a premier cocktail bar and kitchen in Westlands, Nairobi. The ultimate speakeasy and alternative nightlife near The Mall and Naivas Westlands.",
  keywords: [
    "Cocktail Bar", "Nairobi", "Westlands", "Jekyll & Hyde", "Nightlife", "Restaurant",
    "Restaurant near The Mall Westlands", "Bar near Naivas Westlands",
    "Drinks near 254 Beer District", "Dining near Artcaffé Gastro Bar",
    "Thematic bar Westlands", "Speakeasy Nairobi", "Alternative nightlife Nairobi"
  ],
  authors: [{ name: "Jekyll & Hyde" }],
  openGraph: {
    title: "Jekyll & Hyde | Luxury Restaurant & Thematic Bar Nairobi",
    description: "Unreleased flavours. Unique hospitality. Dive into Nairobi's best alternative nightlife experience.",
    url: "https://jekyllandhydekenya.com/",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/map_screenshot.png", // Using the map as a placeholder OG image
        width: 1200,
        height: 630,
        alt: "Jekyll & Hyde Nairobi Location Map",
      },
    ],
  },
  verification: {
    google: "jyvrwXxl9JBJ495DISY13H6gh_t44QAYeQCxuwHzH0M",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jekyllandhydekenya.com/",
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
        {children}
        <GoogleAnalytics gaId="G-KSNDZHYJVY" />
      </body>
    </html>
  );
}
