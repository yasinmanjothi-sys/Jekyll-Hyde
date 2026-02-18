"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/gallery-data";

export default function SocialGallery() {
    // Use static images
    const images = galleryImages;

    // If no images, don't show or show placeholder?
    // Let's hide if no images for now, or maybe show placeholders if empty?
    // User wants to dump images. If empty, maybe just return null or keep empty.
    // Use placeholders or empty state if no images are found
    const displayImages = images.length > 0 ? images : [];

    return (
        <section className="w-full bg-black py-16 border-b border-zinc-900 overflow-hidden relative">

            <Link href="/gallery" className="group block relative cursor-pointer">
                {/* Header / CTA */}
                <div className="container mx-auto px-4 mb-8 text-center relative z-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-gothic text-white mb-2 tracking-widest uppercase transition-colors group-hover:text-red-600">
                            Social Alchemy
                        </h2>
                        <p className="font-mono text-zinc-500 text-xs tracking-[0.2em] uppercase group-hover:text-zinc-300 transition-colors">
                            View the full gallery
                        </p>
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full flex">
                    <div className="flex animate-marquee whitespace-nowrap" style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translate3d(0,0,0)" }}>
                        {displayImages.length > 0 ? (
                            [...displayImages, ...displayImages].map((src, index) => (
                                <div
                                    key={`${src}-${index}`}
                                    className="w-[300px] h-[400px] mx-2 relative bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0 transition-all duration-700"
                                >
                                    <Image
                                        src={src}
                                        alt="Gallery image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))
                        ) : (
                            // Empty State Placeholder
                            Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={`placeholder-${index}`}
                                    className="w-[300px] h-[400px] mx-2 relative bg-zinc-900 border border-zinc-800 shrink-0 flex items-center justify-center"
                                >
                                    <div className="text-center p-6">
                                        <p className="font-gothic text-2xl text-zinc-700 mb-2">AWAITING EVIDENCE</p>
                                        <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                                            Drop images in public/gallery
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </Link>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
