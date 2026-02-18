"use client";

import { motion } from "framer-motion";
import { LocateIcon, Clock, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Location() {
    const { location } = siteConfig;

    return (
        <section className="min-h-screen w-full bg-[#0a0a0a] text-zinc-100 flex flex-col md:flex-row">

            {/* Left Column: Info & Reservations */}
            <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center border-r border-zinc-900 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-gothic mb-12 text-white">{location.title}</h2>

                    <div className="space-y-10 font-mono text-sm md:text-base tracking-wider text-zinc-400">

                        {/* Address */}
                        <div className="flex items-start gap-4 hover:text-white transition-colors group">
                            <MapPin className="text-red-700 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="text-white text-lg font-serif mb-1">HQ</p>
                                {location.addressLines.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-4 hover:text-white transition-colors group">
                            <Clock className="text-yellow-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="text-white text-lg font-serif mb-1">OPERATING HOURS</p>
                                <p>{location.operatingHours}</p>
                                <p>{location.kitchenHours}</p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex items-start gap-4 hover:text-white transition-colors group">
                            <Phone className="text-zinc-500 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="text-white text-lg font-serif mb-1">RESERVATIONS</p>
                                <p className="mb-4">Book early to secure your ritual.</p>
                                <a
                                    href={`tel:${location.phone}`}
                                    className="inline-block border border-zinc-700 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs"
                                >
                                    Call to Reserve
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>

            {/* Right Column: The Map */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative group overflow-hidden bg-red-900">
                <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                >
                    {/* The Map Image with "Jekyll" styling (B&W High Contrast) */}
                    <Image
                        src={location.mapImage}
                        alt="Map to Location"
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
