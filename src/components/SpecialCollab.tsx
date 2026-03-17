"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { archivePosters } from "@/lib/posters-data";

export default function SpecialCollab() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const collabEvents = archivePosters["collaboration-events"] || [];

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 500 : 320; // Match approximate card width
            const targetScroll = 
                scrollContainerRef.current.scrollLeft + 
                (direction === "left" ? -scrollAmount : scrollAmount);
            
            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: "smooth"
            });
        }
    };

    if (collabEvents.length === 0) return null;

    return (
        <section className="w-full bg-zinc-950 py-16 border-t border-zinc-900 overflow-hidden relative group/section mt-24 mb-24">
            <div className="container mx-auto px-4 mb-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "-100px" }}
                >
                    <span className="text-burgundy font-mono tracking-[0.3em] uppercase text-sm mb-4 border border-burgundy/50 px-4 py-2 inline-block">
                        Past Collaborations
                    </span>
                    <h2 className="text-4xl md:text-6xl font-gothic text-white mb-2 tracking-widest uppercase mt-6">
                        Special Events
                    </h2>
                </motion.div>
            </div>

            {/* Navigation Buttons */}
            {collabEvents.length > 1 && (
                <>
                    <button 
                        onClick={() => scroll("left")}
                        className="absolute left-4 md:left-8 top-[60%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-900 hover:border-zinc-700 hover:scale-105 transition-all duration-300 opacity-0 group-hover/section:opacity-100 hidden md:flex"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        className="absolute right-4 md:right-8 top-[60%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-900 hover:border-zinc-700 hover:scale-105 transition-all duration-300 opacity-0 group-hover/section:opacity-100 hidden md:flex"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Horizontal Scroll Container */}
            <div 
                ref={scrollContainerRef}
                className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4 md:px-8"
            >
                <div className="flex gap-6 w-max mx-auto md:mx-0">
                    {collabEvents.map((event, index) => {
                        // Extract a cleaner title by removing the number prefix
                        const cleanTitle = event.title.replace(/^\d+_?/, '').replace(/\.[^/.]+$/, "");
                        
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ margin: "-50px" }}
                                key={event.id}
                                className="snap-center shrink-0 w-[300px] sm:w-[400px] md:w-[500px] group"
                            >
                                {/* Media Container */}
                                <div className="w-full h-[400px] md:h-[600px] relative bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-500 group-hover:border-zinc-500 mb-6 flex items-center justify-center">
                                    {event.image.toLowerCase().endsWith('.mp4') || event.image.toLowerCase().endsWith('.webm') ? (
                                        <video
                                            src={event.image}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <Image
                                            src={event.image}
                                            alt={cleanTitle || "Collaboration Event"}
                                            fill
                                            className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                        />
                                    )}
                                </div>

                                <div className="px-2 text-center md:text-left flex flex-col items-center md:items-start">
                                    <h3 className="font-gothic text-2xl md:text-3xl text-white mb-2 tracking-wider uppercase group-hover:text-burgundy transition-colors duration-300 leading-none">
                                        {cleanTitle || "Special Collab"}
                                    </h3>
                                    {event.time && (
                                        <p className="font-mono text-[10px] md:text-xs text-zinc-500 tracking-[0.2em] uppercase mt-2 border border-zinc-800 px-3 py-1 inline-block rounded-full">
                                            {event.time}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
