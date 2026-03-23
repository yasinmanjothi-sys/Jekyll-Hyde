import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import WeeklyEvents from "@/components/WeeklyEvents";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import SocialGallery from "@/components/SocialGallery";
import AudioAlchemy from "@/components/AudioAlchemy";


export const metadata: Metadata = {
  title: "Jekyll & Hyde | Cocktail Bar & Kitchen",
  description: "Jekyll & Hyde | Cocktail Bar & Kitchen. Nairobi's premier alternative nightlife and dining experience in Westlands.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="sr-only">Jekyll & Hyde | Cocktail Bar & Kitchen</h1><Hero />
      <WeeklyEvents />
      <AudioAlchemy />
      <SocialGallery />
      <Menu />
      <Location />
      <Footer />
    </main>
  );
}
