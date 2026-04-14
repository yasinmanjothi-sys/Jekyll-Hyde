"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedSpecialEvent() {
    return (
        <section id="special-event" className="w-full bg-zinc-950 text-white py-12 px-6 md:px-0 overflow-hidden relative border-b border-zinc-900/50">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "-100px" }}
                    className="flex flex-col lg:flex-row gap-12 items-center"
                >
                    {/* Media Section */}
                    <div className="w-full lg:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] group overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl shadow-burgundy/10">
                        <Image
                            src="/archive/collaboration-events/5_ puzzle x Jekyll & Hyde.jpeg"
                            alt="Jekyll & Hyde + Puzzle presents Nasty Grooves Vol.5: DOWN THE RABBIT HOLE"
                            fill
                            className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
                        
                        {/* Decorative Badge */}
                        <div className="absolute top-6 left-6 z-20">
                            <span className="bg-burgundy text-white font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase px-4 py-2 border border-white/20 backdrop-blur-md">
                                Special Collaboration
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ margin: "-100px" }}
                        >
                            <span className="text-yellow-500 font-mono tracking-[0.2em] uppercase text-sm mb-4 block">
                                Upcoming Event • 18th April
                            </span>
                            
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-gothic text-white mb-6 uppercase leading-[0.9] tracking-tight">
                                <span className="text-white">Nasty Grooves Vol.5:</span><br />
                                <span className="text-texture-burgundy">DOWN THE RABBIT HOLE</span>
                            </h2>

                            <div className="space-y-6">
                                <p className="font-sans text-zinc-300 text-lg md:text-xl leading-relaxed max-w-xl">
                                    Step into a world where reality blends and sound takes control. Puzzle returns with another edition of Nasty Grooves Sessions, inviting you to journey down the rabbit hole into an Alice in Wonderland–inspired universe of music, madness, and immersive visuals.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 border-y border-zinc-900/80">
                                    <div className="flex flex-col gap-2">
                                        <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest">When</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-white font-gothic text-2xl uppercase">18th April</span>
                                            <span className="text-burgundy font-mono text-sm">9PM - 6AM</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest">Where</span>
                                        <span className="text-white font-sans text-lg">Hosted at Jekyll & Hyde’s brand new covered open-air space.</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest">Lineup</span>
                                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                                            {["Suraj", "Kalesh E.", "Priss", "MMZ", "Lilo & Raya", "Pyjama", "Faure"].map((name, i, arr) => (
                                                <span key={name} className="text-white font-sans text-lg">
                                                    {name}{i < arr.length - 1 && <span className="text-burgundy mx-1">·</span>}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest">Dress Code</span>
                                        <span className="text-white font-sans text-lg">🎭 Dress to impress - prizes await the top 3 costumes.</span>
                                    </div>
                                </div>

                                <div className="pt-4 flex flex-col gap-6">
                                    <p className="font-sans text-zinc-400 text-base italic">
                                        Are you ready to loose yourself into the groove? Follow the rabbit… 🐇
                                    </p>
                                    
                                    <a 
                                        href="https://clqc.hustlesasa.shop/products/69c7d4f1747e047898e45c76"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        referrerPolicy="no-referrer"
                                        className="inline-flex items-center justify-center bg-burgundy hover:bg-burgundy/80 text-white font-gothic text-2xl uppercase tracking-widest px-10 py-5 transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-burgundy/20 w-full md:w-fit"
                                    >
                                        Get Your Tickets
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
