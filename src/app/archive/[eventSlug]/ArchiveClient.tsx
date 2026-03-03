"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { archivePosters, EventSlug, ArchivePoster } from "@/lib/posters-data";

const eventInfo: Record<string, { title: string, subtitle: string }> = {
    wednesday: { title: "Midweek Blend", subtitle: "Archive" },
    thursday: { title: "Groove Town", subtitle: "Archive" },
    friday: { title: "Pop Friday", subtitle: "Archive" },
    saturday: { title: "Sacrosanct", subtitle: "Archive" }
};

export default function ArchiveClient({ eventSlug }: { eventSlug: EventSlug }) {
    const [selectedImage, setSelectedImage] = useState<ArchivePoster | null>(null);

    // Fallback if the slug isn't found
    if (!eventSlug || !eventInfo[eventSlug]) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
                <Link href="/" className="hover:text-burgundy font-mono uppercase tracking-widest text-sm">
                    Return to Home
                </Link>
            </div>
        );
    }

    const { title, subtitle } = eventInfo[eventSlug];
    // Use the generated data, fallback to empty array if nothing generated yet
    const posters = archivePosters?.[eventSlug] || [];

    return (
        <main className="min-h-screen w-full bg-zinc-950 text-white pb-24 relative overflow-hidden">

            {/* Nav Back */}
            <div className="fixed top-6 left-6 z-40">
                <Link href="/#events" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                    <div className="p-2 border border-zinc-800 bg-black/50 backdrop-blur-sm rounded-full group-hover:border-white/50 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0">
                        Back to Events
                    </span>
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
                    <h1 className="text-5xl md:text-8xl font-gothic text-texture-burgundy mb-4 tracking-widest uppercase">
                        {title}
                    </h1>
                    <p className="font-mono text-zinc-500 text-sm md:text-base tracking-[0.2em] uppercase">
                        {subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Masonry-ish Grid */}
            <div className="container mx-auto px-4">
                {posters.length === 0 ? (
                    <div className="text-center py-20 text-zinc-600 font-sans tracking-wide">
                        <p>No archive posters available for this event yet.</p>
                        <p className="text-xs mt-2 uppercase">Please run `node scripts/generate-archive.js`</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {posters.map((poster, index) => (
                            <motion.div
                                key={poster.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ margin: "-50px" }}
                                className="relative aspect-[4/5] group overflow-hidden bg-zinc-900 border border-zinc-800 cursor-none"
                                onClick={() => setSelectedImage(poster)}
                            >
                                <Image
                                    src={poster.image}
                                    alt={poster.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                                    <h3 className="font-mono text-white text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {poster.title.replace(/-/g, ' ')}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="absolute top-6 right-6 p-2 rounded-full border border-white/20 bg-black/50 text-white/70 hover:text-white hover:border-white/50 transition-colors z-50"
                        >
                            <X className="w-6 h-6" />
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl h-[85vh] md:h-full cursor-auto"
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
                        >
                            <Image
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </motion.div>

                        {/* Title at the bottom */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="absolute bottom-8 left-0 right-0 text-center font-mono tracking-widest text-sm text-zinc-400 uppercase pointer-events-none"
                        >
                            {selectedImage.title.replace(/-/g, ' ')}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}
