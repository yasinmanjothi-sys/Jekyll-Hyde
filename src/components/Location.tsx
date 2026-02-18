"use client";

import { motion } from "framer-motion";
import { LocateIcon, Clock, Phone, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Location() {
    return (
        <section className="min-h-screen w-full bg-[#0a0a0a] text-zinc-100 flex flex-col md:flex-row">

            {/* Left Column: Info & Reservations */}
            <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center border-r border-zinc-900 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-gothic mb-12 text-white">FIND THE CURE</h2>

                    <div className="space-y-10 font-mono text-sm md:text-base tracking-wider text-zinc-400">

                        {/* Address */}
                        <div className="flex items-start gap-4 hover:text-white transition-colors group">
                            <MapPin className="text-red-700 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="text-white text-lg font-serif mb-1">HQ</p>
                                <p>Westlands Arcade Plaza</p>
                                <p>Waiyaki Way, Nairobi</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-4 hover:text-white transition-colors group">
                            <Clock className="text-yellow-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="text-white text-lg font-serif mb-1">OPERATING HOURS</p>
                                <p>Tue - Sat: 6:00 PM - 1:30 AM</p>
                                <p>(Kitchen closes at 11:00 PM)</p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex items-start gap-4 hover:text-white transition-colors group">
                            <Phone className="text-zinc-500 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="text-white text-lg font-serif mb-1">RESERVATIONS</p>
                                <p className="mb-4">Book early to secure your ritual.</p>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <a
                                        href="tel:+254707370028"
                                        className="inline-block border border-zinc-700 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs text-center"
                                    >
                                        Call to Reserve
                                    </a>
                                    <a
                                        href="https://wa.me/254707370028"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 border border-green-900/50 bg-green-900/10 text-green-500 px-6 py-3 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 uppercase text-xs"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>

            {/* Right Column: The Map */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative group overflow-hidden bg-red-900">
                <a
                    href="https://www.google.com/maps/place/Jekyll+and+Hyde/@-1.2649866,36.8003148,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17003d617797:0xc0f0ecfff812153e!8m2!3d-1.2649866!4d36.8028897"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                >
                    {/* The Map Image with "Jekyll" styling (B&W High Contrast) */}
                    <Image
                        src="/custom_map.jpg"
                        alt="Map to Jekyll & Hyde"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* "Hyde" Overlay (Red Tint on Hover) */}
                    <div className="absolute inset-0 bg-red-900/0 mix-blend-multiply group-hover:bg-red-900/60 transition-colors duration-500" />

                    {/* CTA Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-black/80 px-8 py-4 border border-red-600 backdrop-blur-sm">
                            <span className="font-gothic text-2xl text-red-500 tracking-widest">OPEN MAPS</span>
                        </div>
                    </div>
                </a>
            </div>

        </section>
    );
}
