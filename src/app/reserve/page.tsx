import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import ReservationButtons from "./ReservationButtons";

export const metadata: Metadata = {
    title: "Reservations | Jekyll & Hyde Westlands, Nairobi",
    description: "Secure your ritual at Jekyll & Hyde. Call or WhatsApp to book your table at Nairobi's premier speakeasy and dining venue near Naivas Westlands.",
    alternates: {
        canonical: "https://jekyllandhydekenya.com/reserve",
    },
};

export default function ReservePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col selection:bg-burgundy/50">
            <h1 className="sr-only">Make a Reservation - Jekyll & Hyde Nairobi</h1>
            <SiteHeader />

            {/* Top Spacer for Fixed Navbar */}
            <div className="h-20 w-full" />

            <section className="flex-grow w-full flex flex-col md:flex-row">
                {/* Left Column: Info & Reservations */}
                <div className="w-full md:w-1/2 p-10 md:p-24 py-20 flex flex-col justify-center border-r border-zinc-900 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]">

                    <div className="max-w-xl mx-auto md:mx-0 w-full">
                        <h1 className="text-5xl md:text-8xl font-gothic mb-6 text-white text-center md:text-left drop-shadow-[0_0_10px_rgba(220,38,38,0.5)] tracking-widest uppercase">
                            Secure Your Ritual
                        </h1>

                        <p className="text-zinc-400 font-mono text-sm md:text-base tracking-wider mb-8 text-center md:text-left max-w-md">
                            Book early to guarantee your place in the shadows.
                            <br /><br />
                            Jekyll & Hyde Nairobi is the premier destination for exclusive dining and immersive nightlife in Westlands, near Lavington. We highly recommend securing table reservations in advance for our highly sought-after venue.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12 text-zinc-400 font-mono text-sm tracking-wider justify-center md:justify-start">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-burgundy w-5 h-5 mt-0.5" />
                                <div className="text-center md:text-left">
                                    <p className="text-white font-serif mb-1 uppercase tracking-widest text-base">Location</p>
                                    <p>Westlands Arcade Plaza</p>
                                    <p>Waiyaki Way, Nairobi</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="text-yellow-600 w-5 h-5 mt-0.5" />
                                <div className="text-center md:text-left">
                                    <p className="text-white font-serif mb-1 uppercase tracking-widest text-base">Bar Hours</p>
                                    <p>Tue - Sat: 6:00 PM - 1:30 AM</p>
                                    <p>(Kitchen closes at 11:00 PM)</p>
                                </div>
                            </div>
                        </div>

                        <ReservationButtons />
                    </div>

                </div>

                {/* Right Column: The Map */}
                <div className="w-full md:w-1/2 min-h-[50vh] relative group overflow-hidden bg-burgundy/40 mt-auto md:mt-0">
                    <a
                        href="https://www.google.com/maps/place/Jekyll+and+Hyde/@-1.2649812,36.8003148,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17003d617797:0xc0f0ecfff812153e!8m2!3d-1.2649866!4d36.8028897!16s%2Fg%2F11xn9c6sk7?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative"
                    >
                        {/* The Map Image with "Jekyll" styling (B&W High Contrast) */}
                        <Image
                            src="/new_map.png"
                            alt="Map to Jekyll & Hyde"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* "Hyde" Overlay (Red Tint on Hover) */}
                        <div className="absolute inset-0 bg-burgundy/0 mix-blend-multiply group-hover:bg-burgundy/60 transition-colors duration-500" />

                        {/* CTA Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="bg-black/80 px-8 py-4 border border-burgundy backdrop-blur-sm">
                                <span className="font-gothic text-2xl text-burgundy tracking-widest">OPEN IN MAPS</span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
}
