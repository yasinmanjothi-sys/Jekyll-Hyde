"use client";

import { useState } from "react";
import { djSets, DJSet } from "@/lib/dj-sets-data";

export default function AudioAlchemy() {
    const [selectedSet, setSelectedSet] = useState<DJSet | null>(null);

    // Filter out sets that don't have data, just in case
    const displaySets = djSets;

    return (
        <section className="w-full bg-black py-16 border-b border-zinc-900 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-8 text-center relative z-10">
                <div>
                    <h2 className="text-3xl md:text-5xl font-gothic text-white mb-2 tracking-widest uppercase">
                        Audio Alchemy
                    </h2>
                    <p className="font-mono text-zinc-500 text-xs tracking-[0.2em] uppercase">
                        Live Sets & Performances
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
                <div className="flex gap-4 px-4 md:px-8 w-max mx-auto">
                    {displaySets.length > 0 ? (
                        displaySets.map((set) => (
                            <div
                                key={set.id}
                                className="snap-center shrink-0 w-[320px] sm:w-[400px] md:w-[500px] cursor-pointer group"
                                onClick={() => setSelectedSet(set)}
                            >
                                {/* Video Preview Container */}
                                <div className="w-full aspect-[9/16] md:aspect-video relative bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-300 group-hover:border-zinc-500 mb-4">
                                    <video
                                        src={set.previewVideoPath}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />

                                    {/* Subtle Overlay / Gradient (Optional, just for the hover play button now) */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                    {/* Play Button Indicator Centered on Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                                            <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[12px] md:border-l-[16px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent ml-1 md:ml-2" />
                                        </div>
                                    </div>
                                </div>

                                <div className="px-1">
                                    <h3 className="font-gothic text-2xl md:text-3xl text-white mb-1 tracking-wider uppercase group-hover:text-burgundy transition-colors duration-300 leading-none">
                                        {set.title.split('\n').map((line, i) => (
                                            <span key={i} className="block">{line}</span>
                                        ))}
                                    </h3>
                                    {set.eventOrDate && (
                                        <p className="font-mono text-[10px] md:text-xs text-zinc-500 tracking-[0.2em] uppercase mt-2">
                                            {set.eventOrDate}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        // Empty State if no sets exist
                        <div className="w-[300px] md:w-[500px] aspect-video relative bg-zinc-900/50 border border-zinc-800 shrink-0 flex items-center justify-center snap-center">
                            <div className="text-center p-6">
                                <p className="font-gothic text-2xl text-zinc-700 mb-2">AWAITING FREQUENCIES</p>
                                <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                                    Check back soon
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal for full YouTube Video */}
            {selectedSet && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
                        onClick={() => setSelectedSet(null)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-5xl aspect-video bg-black border border-zinc-800 shadow-2xl rounded-sm overflow-hidden z-10">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedSet(null)}
                            className="absolute -top-12 right-0 md:top-4 md:right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-zinc-900 border border-zinc-800 transition-colors rounded-full"
                        >
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${selectedSet.youtubeId}?autoplay=1`}
                            title={selectedSet.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
