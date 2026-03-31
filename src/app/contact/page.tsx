import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Mail, Handshake } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contact Us | Jekyll & Hyde Westlands",
    description: "Get in touch with Jekyll & Hyde. Contact us for reservations, inquiries, or collaboration opportunities.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-zinc-400 flex flex-col">
            <h1 className="sr-only">Contact Jekyll & Hyde</h1>{/* Top Spacer for Fixed Navbar */}
            <div className="h-20 w-full" />

            <section className="flex-grow w-full flex flex-col md:flex-row">
                {/* Left Column: Contact Details */}
                <div className="w-full md:w-1/2 p-10 md:p-24 py-20 flex flex-col justify-center border-r border-white/10">
                    <div className="max-w-xl mx-auto md:mx-0 w-full">
                        <h2 className="text-5xl md:text-8xl font-gothic mb-8 text-burgundy text-center md:text-left drop-shadow-[0_0_10px_rgba(128,0,32,0.5)] tracking-widest uppercase">
                            Get In Touch
                        </h2>

                        <div className="space-y-10 font-mono tracking-wider">
                            
                            {/* General Inquiry / Phone */}
                            <div className="flex items-start gap-6">
                                <Phone className="w-6 h-6 text-burgundy shrink-0" />
                                <div>
                                    <p className="text-white font-serif mb-2 uppercase tracking-widest text-lg">Direct Line</p>
                                    <a href="tel:+254707370028" className="hover:text-white transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-burgundy after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">
                                        +254 707 370 028
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-start gap-6">
                                <MessageCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                                <div>
                                    <p className="text-white font-serif mb-2 uppercase tracking-widest text-lg">WhatsApp</p>
                                    <a href="https://wa.me/254707370028" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-emerald-500 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">
                                        Message Us
                                    </a>
                                </div>
                            </div>

                            {/* Email / Collabs */}
                            <div className="flex items-start gap-6">
                                <Mail className="w-6 h-6 text-blue-400 shrink-0" />
                                <div>
                                    <p className="text-white font-serif mb-2 uppercase tracking-widest text-lg items-center flex gap-3">
                                        Email & Collabs <Handshake className="w-5 h-5 opacity-70" />
                                    </p>
                                    <p className="text-sm mb-2 opacity-80">For general inquiries or to discuss potential collaboration opportunities.</p>
                                    <a href="mailto:info@jekyllandhydekenya.com" className="hover:text-white transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300 break-all">
                                        info@jekyllandhydekenya.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-6 pt-6 border-t border-white/10">
                                <MapPin className="w-6 h-6 text-burgundy shrink-0" />
                                <div>
                                    <p className="text-white font-serif mb-2 uppercase tracking-widest text-lg">Location</p>
                                    <p className="leading-relaxed">
                                        Westlands Arcade Plaza<br />
                                        Waiyaki Way, Nairobi
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Column: Google Maps Picture */}
                <div className="w-full md:w-1/2 h-[400px] md:h-auto md:min-h-[50vh] relative group overflow-hidden bg-black">
                    <a
                        href="https://www.google.com/maps/place/Jekyll+and+Hyde/@-1.2649812,36.8003148,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17003d617797:0xc0f0ecfff812153e!8m2!3d-1.2649866!4d36.8028897!16s%2Fg%2F11xn9c6sk7?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative"
                    >
                        <Image
                            src="/MAP.png"
                            alt="Jekyll & Hyde Location Map"
                            fill
                            priority
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale contrast-125 saturate-50"
                        />
                        {/* Permanent Red Tint Block */}
                        <div className="absolute inset-0 bg-[#800020] mix-blend-multiply opacity-100 pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-90" />
                        
                        {/* Interactive Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                            <span className="font-gothic text-2xl text-white tracking-widest px-8 py-4 border border-white/20">
                                VIEW ON MAPS
                            </span>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
}
