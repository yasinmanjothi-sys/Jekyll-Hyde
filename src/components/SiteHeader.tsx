"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteHeader() {
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const isHomePage = pathname === "/";
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

    const desktopScale = useTransform(scrollY, [0, 500], [0.8, 0.12]);
    const mobileScale = useTransform(scrollY, [0, 500], [0.4, 0.12]);

    const logoY = useTransform(scrollY, [0, 500], ["calc(50dvh - 300px)", "-260px"]);

    const currentScale = isMobile ? mobileScale : desktopScale;

    // Navbar background opacity
    const navBgOpacity = useTransform(scrollY, [400, 500], [0, 1]); // Fade in after hero
    const finalNavBgOpacity = isHomePage ? navBgOpacity : 1;

    // Determine final values based on route
    const finalScale = isHomePage ? currentScale : 0.12;
    const finalY = isHomePage ? logoY : "-260px";

    useEffect(() => {
        // Optional: Can add scrolling logic here if needed for other navbar elements
    }, [scrollY]);

    return (
        <>
            {/* Fixed Navbar Background */}
            <motion.div
                style={{ opacity: finalNavBgOpacity }}
                className="fixed top-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-md z-30 border-b border-white/10 pointer-events-none"
            />

            {/* Permanent Reserve Button Container */}
            <div className="fixed top-0 left-0 right-0 h-20 z-40 flex items-center justify-end px-6 md:px-12 pointer-events-none pt-2">
                <Link
                    href="/reserve"
                    className="font-gothic text-2xl md:text-3xl text-white hover:text-red-500 transition-colors uppercase tracking-wider relative px-4 py-2 border border-transparent hover:border-red-900/50 bg-transparent hover:bg-black/50 pointer-events-auto rounded backdrop-blur-sm"
                >
                    Reserve
                </Link>
            </div>

            {/* Logo removed as requested */}
        </>
    );
}
