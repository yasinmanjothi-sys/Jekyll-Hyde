import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AwardsRecognition from "@/components/AwardsRecognition";
import Menu from "@/components/Menu";
import WeeklyEvents from "@/components/WeeklyEvents";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import SocialGallery from "@/components/SocialGallery";
import AudioAlchemy from "@/components/AudioAlchemy";

export const metadata: Metadata = {
  title: "Home | Jekyll & Hyde - Cocktail Bar & Kitchen in Westlands",
  description: "Join us at Jekyll & Hyde in Westlands, Nairobi. Exceptional dining, masterfully crafted cocktails, and alternative nightlife near The Mall and 254 Beer District.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <WeeklyEvents />
      <AudioAlchemy />
      <SocialGallery />
      <Menu />
      <AwardsRecognition />
      <Location />
      <Footer />
    </main>
  );
}
