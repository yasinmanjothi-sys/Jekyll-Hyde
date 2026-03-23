import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google';
import NavigationBar from "@/components/NavigationBar";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const gothica = localFont({
  src: [
    {
      path: "../../public/font/gothica_2/Gothica-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/gothica_2/Gothica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/gothica_2/Gothica-BookOblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/gothica_2/Gothica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    }
  ],
  variable: "--font-gothica"
});

const cocoGothic = localFont({
  src: [
    {
      path: "../../public/font/coco_gothic/CocoGothic_trial.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/coco_gothic/CocoGothic-Light_trial.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/coco_gothic/CocoGothic-Bold_trial.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/coco_gothic/CocoGothic-Italic_trial.ttf",
      weight: "400",
      style: "italic",
    }
  ],
  variable: "--font-coco"
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jekyllandhydekenya.com/"),
  title: "Jekyll & Hyde | Cocktail Bar & Kitchen",
  description: "Jekyll & Hyde | Cocktail Bar & Kitchen. Experience Nairobi's premier alternative nightlife and dining ritual in Westlands.",
  keywords: [
    "Cocktail Bar", "Nairobi", "Westlands", "Jekyll & Hyde", "Nightlife", "Kitchen",
    "Cocktail Bar near The Mall Westlands", "Bar near Naivas Westlands",
    "Drinks near 254 Beer District", "Dining near Artcaffé Gastro Bar",
    "Cocktail Bar Westlands", "Speakeasy Nairobi", "Alternative nightlife Nairobi"
  ],
  authors: [{ name: "Jekyll & Hyde" }],
  openGraph: {
    title: "Jekyll & Hyde | Cocktail Bar & Kitchen",
    description: "Cocktail Bar & Kitchen",
    url: "https://jekyllandhydekenya.com",
    siteName: "Jekyll & Hyde",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${gothica.variable} ${cocoGothic.variable} antialiased bg-black text-white`}
      >
        <NavigationBar />
        <SiteHeader />
        {children}
        <GoogleAnalytics gaId="G-KSNDZHYJVY" />
      </body>
    </html>
  );
}
