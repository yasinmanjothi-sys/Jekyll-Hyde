"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [isHyde, setIsHyde] = useState(false);

    // Auto-switch to Hyde mode briefly every few seconds to simulate "instability"
    useEffect(() => {
        const interval = setInterval(() => {
            setIsHyde((prev) => !prev);
        }, 4000); // Toggle every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`w-full h-full object-cover transition-all duration-200 ${isHyde ? "scale-105 blur-[2px] contrast-150 hue-rotate-15" : "opacity-80"
                        }`}
                >
                    <source src="/hero 2.mp4" type="video/mp4" />
                </video>
                {/* Fallback gradient/overlay to ensure text readability and mood */}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Brand Text */}
            {/* Brand Text - Handled by SiteHeader now */}

            {/* Overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-20" />
        </section>
    );
}
