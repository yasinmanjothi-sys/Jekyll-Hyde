"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Menu", href: "/#menu" },
        { name: "About", href: "/about" },
        { name: "Events This Week", href: "/#events" },
        { name: "Audio Alchemy", href: "/#audio" },
        { name: "Social Alchemy", href: "/#social" },
        { name: "Contact Us", href: "/contact" },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false);
        if (href.startsWith("/#") && pathname === "/") {
            const targetId = href.split("#")[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", href);
            }
        }
    };

    return (
        <>
            {/* Hamburger Button (Fixed Top Left) */}
            <div className="fixed top-0 left-0 h-20 z-50 flex items-center px-6 md:px-12 pointer-events-none pt-2">
                <button
                    onClick={toggleMenu}
                    className="p-2 -ml-2 text-white hover:text-jekyll-parchment transition-colors pointer-events-auto rounded bg-black/30 backdrop-blur-sm border border-transparent hover:border-white/20"
                    aria-label="Toggle navigation menu"
                >
                    <Menu className="w-8 h-8" />
                </button>
            </div>

            {/* Slide-out Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
                        />
                        <motion.nav
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-jekyll-black border-r border-white/10 z-[60] flex flex-col p-8 shadow-2xl overflow-y-auto"
                        >
                            <div className="flex justify-end items-center mb-12">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                                    aria-label="Close navigation menu"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </div>

                            <ul className="flex flex-col space-y-6 flex-grow">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className="font-gothic text-3xl md:text-4xl uppercase tracking-widest text-zinc-400 hover:text-jekyll-parchment transition-colors drop-shadow-sm hover:drop-shadow-[0_0_10px_rgba(238,235,224,0.3)] block w-full"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 text-zinc-500 font-mono text-sm">
                                <p>© {new Date().getFullYear()} Jekyll & Hyde.</p>
                                <p className="mt-1">Nairobi, Kenya</p>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
