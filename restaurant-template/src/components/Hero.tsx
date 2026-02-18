"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Hero() {
    const [isHyde, setIsHyde] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Force autoplay on mount to bypass some browser restrictions
    useEffect(() => {
        if (videoRef.current) {
            // Explicitly set attributes for better mobile support
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

    // Auto-switch to Hyde mode briefly every few seconds to simulate "instability"
    useEffect(() => {
        const interval = setInterval(() => {
            setIsHyde((prev) => !prev);
        }, 4000); // Toggle every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full flex flex-col md:flex-row min-h-screen bg-black overflow-hidden">

            {/* Desktop: Content Left (Mobile: Order 2) */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-10 md:p-20 order-2 md:order-1 min-h-[50vh] bg-black">
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-5xl md:text-8xl font-gothic text-white mb-6 tracking-wider">
                        {siteConfig.hero.title.first} <span className="text-red-700">{siteConfig.hero.title.second}</span>
                    </h1>
                    <p className="font-mono text-zinc-400 text-sm md:text-lg tracking-[0.3em] uppercase mb-8">
                        {siteConfig.hero.subtitle}
                    </p>
                </div>
            </div>

            {/* Desktop: Video Right (Mobile: Order 1, Full Screen) */}
            <div className="relative w-full md:w-1/2 h-[100dvh] md:h-screen order-1 md:order-2 overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`w-full h-full object-cover transition-all duration-200 ${isHyde ? "scale-105 blur-[1px] contrast-125 hue-rotate-15" : "opacity-80"}`}
                    style={{
                        willChange: "transform, filter",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)"
                    }}
                >
                    <source src={siteConfig.hero.video} type="video/mp4" />
                </video>
                {/* Mobile Overlay Gradient for smooth transition if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
            </div>

            {/* Global Overlay vignette (adjust z-index or remove if it interferes with text on desktop) */}
            {/* Kept minimal for split layout */}
        </section>
    );
}
