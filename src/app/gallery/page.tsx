"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { galleryImages } from "@/lib/gallery-data";

export default function GalleryPage() {
    const images = galleryImages;

    return (
        <main className="min-h-screen w-full bg-zinc-950 text-white pb-24 relative overflow-hidden">

            {/* Nav Back */}
            <div className="fixed top-6 left-6 z-50">
                <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                    <div className="p-2 border border-zinc-800 bg-black/50 backdrop-blur-sm rounded-full group-hover:border-white/50 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0">Return</span>
                </Link>
            </div>

            {/* Header */}
            <div className="container mx-auto px-4 pt-32 mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-9xl font-gothic text-red-600 mb-6 tracking-widest uppercase">
                        Social Alchemy
                    </h1>
                    <p className="font-mono text-zinc-500 text-sm md:text-base tracking-[0.2em] uppercase">
                        Evidence of the Night
                    </p>
                </motion.div>
            </div>

            {/* Masonry-ish Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {images.map((src, index) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ margin: "-50px" }}
                            className={`relative aspect-[3/4] group overflow-hidden bg-zinc-900 border border-zinc-800 ${index % 3 === 1 ? "md:translate-y-12" : ""
                                }`}
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decor Elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />

        </main>
    );
}
