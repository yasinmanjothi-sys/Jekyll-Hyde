"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RECOGNITIONS = [
    {
        id: "tales",
        category: "Global Excellence • Tales of the Cocktail",
        title: "Best New International",
        subtitle: "Cocktail Bar",
        quote: "We are honoured to be recognised alongside such incredible bars in the region. Big love to our team and community for making this possible 🥂❤️",
        typeLabel: "Recognition Type",
        typeValue: "Regional Top 10 • MEA",
        linkText: "View Official Announcement",
        linkUrl: "https://talesofthecocktail.org/tales-of-the-cocktail-foundation-announces-spirited-awards-2026-mea-regional-top-10-honorees/",
        image: "/awards/honoree-seal.jpg"
    },
    {
        id: "wine-enthusiast",
        category: "Press Feature",
        title: "Wine Enthusiast",
        subtitle: "Editorial Spotlight",
        quote: "Located in the Westlands of Nairobi inside a strip mall, Jekyll & Hyde is the kind of place you might want to visit without the kids. Imagine if Morticia Adams was a bar, and that bar had a sprinkle of BSDM vibes. That’s Jekyll & Hyde. Owned by Elenora Vassiono (or Lele), this moody, playful bar is known for its burlesque nights and live music, as well as its boundary-pushing cocktail menu.",
        typeLabel: "Featured In",
        typeValue: "Wine Enthusiast 2025",
        linkText: "Read Full Article",
        linkUrl: "https://www.wineenthusiast.com/culture/travel/nairobi-bars-where-to-drink/?fbclid=PAZnRzaAOD7llleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae26fGkwg_VnZT5TKwaPvKK_FJ2itLjgs74qQIA1ozq59AGl7TrBbRH6lGyGg_aem_FPmMjsibIYFUmMQ89BGrvw",
        image: "/awards/wine enthusiast.png"
    }
];

export default function AwardsRecognition() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % RECOGNITIONS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + RECOGNITIONS.length) % RECOGNITIONS.length);
    };

    const current = RECOGNITIONS[currentIndex];

    return (
        <section id="awards" className="w-full bg-black text-white py-24 px-6 md:py-40 overflow-hidden relative border-t border-zinc-900/50 group">
            {/* Minimalist Background Texture - very subtle */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            {/* Navigation Arrows - Desktop Side Placement */}
            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 z-40 justify-between items-center pointer-events-none px-4 max-w-[1400px] mx-auto w-full">
                 <button 
                    onClick={prevSlide}
                    className="pointer-events-auto p-3 rounded-full bg-black/50 border border-white/20 hover:bg-burgundy hover:border-burgundy text-white/50 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-xl"
                >
                    <ChevronLeft size={32} strokeWidth={1} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="pointer-events-auto p-3 rounded-full bg-black/50 border border-white/20 hover:bg-burgundy hover:border-burgundy text-white/50 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-xl"
                >
                    <ChevronRight size={32} strokeWidth={1} />
                </button>
            </div>

            <div className="container mx-auto relative z-10 w-full max-w-6xl">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-gothic text-texture-burgundy tracking-widest uppercase mb-4 opacity-90">
                        RECOGNITIONS
                    </h2>
                    <div className="w-24 h-[1px] bg-burgundy/40 mx-auto" />
                </motion.div>

                <div className="relative min-h-[600px] flex items-center w-full mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center justify-between w-full"
                        >
                            {/* Media Section - Stagnant Composition */}
                            <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
                                <div className="relative w-full max-w-[500px] aspect-square z-10 drop-shadow-[0_0_60px_rgba(133,5,41,0.2)]">
                                    <Image
                                        src={current.image}
                                        alt={`${current.title} Recognition`}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                <div className="absolute right-[5%] bottom-[10%] z-20">
                                    <div className="bg-texture-burgundy/80 text-white font-mono text-[10px] md:text-sm tracking-[0.4em] uppercase px-6 py-3 backdrop-blur-md shadow-2xl">
                                        Feature 2025/26
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                                <span className="text-yellow-500 font-mono tracking-[0.4em] uppercase text-xs mb-8 block">
                                    {current.category}
                                </span>
                                
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-gothic text-white mb-10 uppercase leading-[0.8] tracking-tight">
                                    <span className="text-white">{current.title}</span><br />
                                    <span className="text-texture-burgundy">{current.subtitle}</span>
                                </h2>

                                <div className="space-y-10">
                                    <div className="relative">
                                        {/* Quote accent */}
                                        <div className="text-burgundy/40 text-8xl font-gothic absolute -top-12 -left-8 pointer-events-none">"</div>
                                        <p className="font-sans text-zinc-300 text-lg md:text-xl leading-relaxed italic relative z-10 font-medium max-w-xl mx-auto lg:mx-0">
                                            {current.quote}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-8 pt-6">
                                        <div className="flex flex-col gap-2">
                                            <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-[0.5em]">{current.typeLabel}</span>
                                            <span className="text-white font-gothic text-3xl uppercase tracking-widest">{current.typeValue}</span>
                                        </div>

                                        <a 
                                            href={current.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center bg-burgundy hover:bg-burgundy/80 text-white font-gothic text-2xl uppercase tracking-[0.3em] px-14 py-6 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl shadow-burgundy/40 w-full md:w-fit mt-4 mx-auto lg:mx-0"
                                        >
                                            {current.linkText}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons - Mobile Bottom Placement */}
                    <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex gap-12 lg:hidden z-30">
                        <button 
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-black/50 border border-white/20 hover:bg-burgundy hover:border-burgundy text-white transition-all duration-300 backdrop-blur-sm"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-black/50 border border-white/20 hover:bg-burgundy hover:border-burgundy text-white transition-all duration-300 backdrop-blur-sm"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
