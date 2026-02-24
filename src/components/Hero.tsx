"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

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
        <section className="relative w-full h-screen bg-black overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
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
                    <source src="/hero 2.mp4" type="video/mp4" />
                </video>
                {/* Mobile Overlay Gradient for smooth transition if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
            </div>

            {/* Center Logo Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-64 h-64 md:w-96 md:h-96"
                >
                    <Image
                        src="/LOGOS-02.svg"
                        alt="Jekyll & Hyde"
                        fill
                        className="object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                        priority
                    />
                </motion.div>
            </div>

            {/* Global Overlay vignette */}
        </section>
    );
}
