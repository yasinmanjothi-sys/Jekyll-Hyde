"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SiteHeader() {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // --- ANIMATION VALUES ---
    // We use `origin-center` for the Logo. This means scaling happens around the center point.
    // The logo internal size is 600px x 600px. Center is at 300px.
    // Visual Center Position = Y + 300px.

    // START (Hero): 
    // We want visual center at 50% viewport height (50dvh).
    // Y + 300 = 50dvh  =>  Y = 50dvh - 300

    // END (Navbar):
    // Navbar is 80px height. Center is 40px.
    // We want visual center at 40px.
    // Y + 300 = 40  =>  Y = 40 - 300 = -260px.

    // SCALES:
    // Desktop: 1.0 (600px) -> 0.12 (72px)
    // Mobile:  0.5 (300px) -> 0.12 (72px)

    const desktopScale = useTransform(scrollY, [0, 500], [1, 0.12]);
    const mobileScale = useTransform(scrollY, [0, 500], [0.5, 0.12]);

    const logoY = useTransform(scrollY, [0, 500], ["calc(50dvh - 300px)", "-260px"]);

    const currentScale = isMobile ? mobileScale : desktopScale;

    // Navbar background opacity
    const navOpacity = useTransform(scrollY, [400, 500], [0, 1]); // Fade in after hero

    useEffect(() => {
        // Optional: Can add scrolling logic here if needed for other navbar elements
    }, [scrollY]);

    return (
        <>
            {/* Fixed Navbar Background (appears after scroll) */}
            <motion.div
                style={{ opacity: navOpacity }}
                className="fixed top-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-md z-40 border-b border-white/10"
            />

            {/* Logo Container - This moves from hero center to navbar */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <motion.div
                    style={{
                        scale: currentScale,
                        y: logoY,
                    }}
                    className="relative w-[600px] h-[600px] origin-center will-change-transform"
                >
                    <Image
                        src="/logo.png"
                        alt="Jekyll & Hyde Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>
            </div>
        </>
    );
}
