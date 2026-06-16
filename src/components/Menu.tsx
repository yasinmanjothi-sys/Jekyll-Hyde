"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PAGES = Array.from({ length: 14 }, (_, i) => ({
    src: `/tribute-to-africa/${i + 1}.jpg`,
    alt: `Tribute to Africa Menu — page ${i + 1}`,
}));

export default function Menu() {
    return (
        <section id="menu" className="min-h-screen w-full bg-black text-white py-24 px-4 md:px-20 relative overflow-hidden scroll-mt-20">

            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />

            <div className="max-w-xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-gothic text-texture-burgundy mb-4 tracking-widest drop-shadow-[0_0_10px_rgba(133,5,41,0.5)]"
                    >
                        THE MENU
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-mono text-xs tracking-widest uppercase text-zinc-400"
                    >
                        ✦ New Menu — Tribute to Africa Edition ✦
                    </motion.p>
                </div>

                {/* Menu pages */}
                <div className="flex flex-col gap-2">
                    {PAGES.map((page, i) => (
                        <motion.div
                            key={page.src}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="w-full"
                        >
                            <Image
                                src={page.src}
                                alt={page.alt}
                                width={2400}
                                height={3200}
                                className="w-full h-auto"
                                quality={100}
                                priority={i < 2}
                                unoptimized
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
