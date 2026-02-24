"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SpecialCollab() {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Force autoplay on mount to bypass some browser restrictions
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.setAttribute("muted", "");
            videoRef.current.setAttribute("playsinline", "");
            videoRef.current.muted = true;

            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay prevented:", error);
                });
            }
        }
    }, []);

    return (
        <section className="min-h-screen w-full bg-black text-white py-24 px-6 md:px-0 flex flex-col items-center justify-center overflow-hidden border-y border-zinc-900">
            {/* Section Header */}
            <div className="text-center mb-24 relative z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-gothic tracking-widest text-white mb-2"
                >
                    THIS WEEK AT
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-gothic tracking-widest text-red-700"
                >
                    JEKYLL & HYDE
                </motion.h2>
            </div>

            <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex flex-col items-start text-left order-2 md:order-1"
                >
                    <span className="text-red-600 font-mono tracking-[0.3em] uppercase text-sm mb-4 border border-red-900/50 px-4 py-2">
                        Special Event
                    </span>

                    {/* Event Details go here */}
                    {/* Event Details go here */}
                    <h2 className="text-4xl md:text-7xl font-gothic mb-6 leading-[0.9] uppercase tracking-wide">
                        J&H <span className="text-zinc-500 font-sans mx-2 text-2xl md:text-4xl lowercase">x</span> EZO <br />
                        <span className="text-zinc-500 text-3xl md:text-5xl mt-2 block">Bartenders’ Day</span>
                        <span className="text-zinc-500 text-3xl md:text-5xl mt-2 block">Takeover</span>
                    </h2>

                    <div className="font-sans text-zinc-400 text-sm md:text-base max-w-md leading-relaxed mb-6 space-y-4">
                        <p>
                            In celebration of International Bartenders’ Day, we’re teaming up with EZO for a special collaboration.
                        </p>
                        <p>
                            This Saturday, we swap talents. EZO guests will enjoy J&H signature cocktails from your favourite bartender, while one of EZO’s finest bartenders takes over the J&H bar.
                        </p>
                        <p className="text-red-500 font-mono text-xs md:text-sm tracking-widest uppercase mt-4 block">
                            The special menu will be running at both locations from 6pm onwards.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 mb-12">
                        <div className="flex flex-col">
                            <span className="text-zinc-500 font-serif text-sm uppercase tracking-widest mb-1">Date</span>
                            <span className="font-mono text-white text-lg">Saturday Night</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-zinc-500 font-serif text-sm uppercase tracking-widest mb-1">Time</span>
                            <span className="font-mono text-white text-lg">From 6:00 PM</span>
                        </div>
                    </div>

                    <Link
                        href="/reserve"
                        className="group relative inline-flex items-center justify-center gap-4 border border-zinc-700 bg-black/50 px-10 py-5 hover:bg-white hover:text-black hover:border-white transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-red-950/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <span className="font-gothic text-2xl uppercase tracking-widest z-10 group-hover:drop-shadow-md">
                            Reserve Now
                        </span>
                    </Link>
                </motion.div>

                {/* Video Container (Portrait 9:16) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
                >
                    {/* 
                        Uses an aspect ratio trick. 
                        Max width ensures it doesn't get ridiculously large on huge monitors, 
                        and aspect-[9/16] enforces the portrait layout 
                    */}
                    <div className="relative w-full max-w-[450px] aspect-[9/16] rounded-xl overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(220,38,38,0.1)] group">
                        <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply flex z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />

                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/events/special-collab.mp4" type="video/mp4" />
                            {/* Fallback image if video fails or before it loads */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
