"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/gallery-data";

export default function SocialGallery() {
    // Use static images
    const images = galleryImages;
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Use placeholders or empty state if no images are found
    const displayImages = images.length > 0 ? images : [];

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            // Card width + margin approx
            const scrollAmount = 316; // 300px width + 16px (mx-2 * 2 rounded)
            const targetScroll = 
                scrollContainerRef.current.scrollLeft + 
                (direction === "left" ? -scrollAmount : scrollAmount);
            
            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="w-full bg-black py-16 border-b border-zinc-900 overflow-hidden relative group/section">

            <Link href="/gallery" className="group block relative cursor-pointer z-10">
                {/* Header / CTA */}
                <div className="container mx-auto px-4 mb-8 text-center relative z-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-gothic text-white mb-2 tracking-widest uppercase transition-colors group-hover:text-burgundy">
                            Social Alchemy
                        </h2>
                        <p className="font-mono text-zinc-500 text-xs tracking-[0.2em] uppercase group-hover:text-zinc-300 transition-colors">
                            View the full gallery
                        </p>
                    </div>
                </div>
            </Link>

            {/* Navigation Buttons for Desktop */}
            {displayImages.length > 0 && (
                <>
                    <button 
                        onClick={() => scroll("left")}
                        className="absolute left-4 md:left-8 top-[60%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-900 hover:border-zinc-700 hover:scale-105 transition-all duration-300 opacity-0 group-hover/section:opacity-100 hidden md:flex"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        className="absolute right-4 md:right-8 top-[60%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-900 hover:border-zinc-700 hover:scale-105 transition-all duration-300 opacity-0 group-hover/section:opacity-100 hidden md:flex"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Horizontal Scroll Container */}
            <div 
                ref={scrollContainerRef}
                className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 relative z-0"
            >
                <div className="flex px-4 md:px-8 w-max mx-auto md:mx-0">
                    {displayImages.length > 0 ? (
                        [...displayImages].map((src, index) => (
                            <div
                                key={`${src}-${index}`}
                                className="w-[300px] h-[400px] mx-2 relative bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0 snap-center"
                            >
                                <Image
                                    src={src}
                                    alt={`Jekyll & Hyde Nairobi Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))
                    ) : (
                        // Empty State Placeholder
                        <div className="flex mx-auto md:mx-0">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={`placeholder-${index}`}
                                    className="w-[300px] h-[400px] mx-2 relative bg-zinc-900 border border-zinc-800 shrink-0 flex items-center justify-center snap-center"
                                >
                                    <div className="text-center p-6">
                                        <p className="font-gothic text-2xl text-zinc-700 mb-2">AWAITING EVIDENCE</p>
                                        <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                                            Drop images in public/gallery
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
