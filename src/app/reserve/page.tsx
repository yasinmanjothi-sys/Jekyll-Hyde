import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
    title: "Reservations | Jekyll & Hyde Westlands, Nairobi",
    description: "Secure your ritual at Jekyll & Hyde. Call or WhatsApp to book your table at Nairobi's premier speakeasy and dining venue near Naivas Westlands.",
};

export default function ReservePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col selection:bg-red-900/50">
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
                            Book early to guarantee your place in the shadows. We accept reservations via direct call or WhatsApp message.
                            <br /><br />
                            Welcome to Jekyll & Hyde Nairobi, the premier destination for exclusive dining and immersive nightlife experiences. Situated conveniently near Lavington and positioned in the vibrant heart of Westlands, our thematic sanctuary offers a highly curated atmosphere perfect for an unforgettable evening. Whether you are looking to secure a VIP table for a weekend celebration, arrange an intimate dinner, or plan a private gathering, securing your reservations in advance is highly recommended. Our establishment blends masterful mixology, exceptional culinary creations, and an alternative aesthetic that stands unparalleled in the Nairobi hospitality landscape. Contact our dedicated concierge team today to design your perfect night out and confirm your spot in our highly sought-after venue.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12 text-zinc-400 font-mono text-sm tracking-wider justify-center md:justify-start">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-red-700 w-5 h-5 mt-0.5" />
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

                        <div className="flex flex-col gap-6 w-full">
                            <a
                                href="tel:+254707370028"
                                className="group relative flex flex-col items-center justify-center gap-1 border border-zinc-700 bg-black/50 px-8 py-5 hover:bg-white hover:text-black hover:border-white transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-red-950/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                <div className="flex items-center gap-4 z-10">
                                    <Phone className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                                    <span className="font-gothic text-3xl uppercase tracking-widest group-hover:drop-shadow-md">
                                        Reserve via Call
                                    </span>
                                </div>
                                <span className="font-mono text-xs tracking-widest text-zinc-400 group-hover:text-zinc-700 z-10">
                                    +254 707 370 028
                                </span>
                            </a>

                            <a
                                href="https://wa.me/254707370028"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center gap-4 border border-green-900/50 bg-green-950/10 px-8 py-6 hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-green-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                <MessageCircle className="w-6 h-6 z-10 text-green-500 group-hover:text-white transition-colors" />
                                <span className="font-gothic text-3xl uppercase tracking-widest z-10 group-hover:drop-shadow-md">
                                    Reserve via WhatsApp
                                </span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Right Column: The Map */}
                <div className="w-full md:w-1/2 min-h-[50vh] relative group overflow-hidden bg-red-900 mt-auto md:mt-0">
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
                        <div className="absolute inset-0 bg-red-900/0 mix-blend-multiply group-hover:bg-red-900/60 transition-colors duration-500" />

                        {/* CTA Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="bg-black/80 px-8 py-4 border border-red-600 backdrop-blur-sm">
                                <span className="font-gothic text-2xl text-red-500 tracking-widest">OPEN IN MAPS</span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
}
