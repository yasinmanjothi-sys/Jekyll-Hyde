import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import WeeklyEvents from "@/components/WeeklyEvents";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import SocialGallery from "@/components/SocialGallery";

import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <Hero />
      <SocialGallery />
      <Menu />
      <WeeklyEvents />
      <Location />
      <Footer />
    </main>
  );
}
