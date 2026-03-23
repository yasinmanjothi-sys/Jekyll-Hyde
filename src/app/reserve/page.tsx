import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import ReservationButtons from "./ReservationButtons";

export const metadata: Metadata = {
    title: "Reservations | Jekyll & Hyde Westlands, Nairobi",
    description: "Secure your ritual at Jekyll & Hyde. Call or WhatsApp to book your table at Nairobi's premier Cocktail Bar & Kitchen near Naivas Westlands.",
    alternates: {
        canonical: "https://jekyllandhydekenya.com/reserve",
    },
};

export default function ReservePage() {
    return (
        <main className="min-h-screen bg-jekyll-black text-zinc-100 flex flex-col selection:bg-jekyll-red/50">
            <h1 className="sr-only">Make a Reservation - Jekyll & Hyde Nairobi</h1>{/* Top Spacer for Fixed Navbar */}
            <div className="h-20 w-full" />

            <section className="flex-grow w-full flex flex-col md:flex-row">
                {/* Left Column: Info & Reservations */}
                <div className="w-full md:w-1/2 p-10 md:p-24 py-20 flex flex-col justify-center border-r border-zinc-900 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]">

                    <div className="max-w-xl mx-auto md:mx-0 w-full">
                        <h1 className="text-5xl md:text-8xl font-gothic mb-6 text-jekyll-red text-center md:text-left drop-shadow-[0_0_10px_rgba(92,23,5,0.5)] tracking-widest uppercase">
                            Secure Your Ritual
                        </h1>

                        <p className="text-zinc-400 font-mono text-sm md:text-base tracking-wider mb-8 text-center md:text-left max-w-md">
                            Book early to guarantee your place in the shadows.
                            <br /><br />
                            Jekyll & Hyde Nairobi is the premier Cocktail Bar & Kitchen for exclusive dining and immersive nightlife in Westlands, near Lavington. We highly recommend securing table reservations in advance for our highly sought-after venue.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12 text-zinc-400 font-mono text-sm tracking-wider justify-center md:justify-start">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-jekyll-red w-5 h-5 mt-0.5" />
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

                        {/* Legal & Policies */}
                        <div className="mt-12 pt-8 border-t border-white/10 text-zinc-500 font-mono text-xs tracking-wider leading-relaxed space-y-4">
                            <p>Management reserves the right of admission. Alcohol will only be served to patrons above 21 years.</p>
                            <p>All guests are advised to take due care of their personal belongings at all times. Management shall not be held liable for any loss, theft, or damage to personal property howsoever caused, unless proven negligence on the part of the management, as provided for under the laws of Kenya. By entering the premises, patrons acknowledge and accept this notice.</p>
                            <p>Strictly no outside food or drinks allowed on this premises and its extensions. Management reserves the right to refuse entry or request the removal of any such items in accordance with applicable laws and regulations in Kenya.</p>
                        </div>
                    </div>

                </div>

                {/* Right Column: The Map */}
                <div className="w-full md:w-1/2 min-h-[50vh] relative group overflow-hidden bg-jekyll-red/40 mt-auto md:mt-0">
                    <a
                        href="https://www.google.com/maps/place/Jekyll+and+Hyde/@-1.2649812,36.8003148,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17003d617797:0xc0f0ecfff812153e!8m2!3d-1.2649866!4d36.8028897!16s%2Fg%2F11xn9c6sk7?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative"
                    >
                        {/* Red Night Vision Filter over Map Image */}
                        <Image
                            src="/MAP.png"
                            alt="Jekyll & Hyde Location Map"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale contrast-125 saturate-50"
                        />
                        {/* Permanent Red Tint Block */}
                        <div className="absolute inset-0 bg-[#bb0a0a] mix-blend-multiply opacity-100 pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-90" />

                        {/* Additional "Hyde" Overlay (Red Tint on Hover) */}
                        

                        {/* CTA Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                            <div className="bg-jekyll-black/80 px-8 py-4 border border-jekyll-red backdrop-blur-sm pointer-events-none">
                                <span className="font-gothic text-2xl text-jekyll-red tracking-widest">OPEN IN MAPS</span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
}
