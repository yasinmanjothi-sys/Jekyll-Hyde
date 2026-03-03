"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { archivePosters, EventSlug } from "@/lib/posters-data";

const EVENTS = [
    {
        day: "Wednesday",
        title: "Midweek Blend",
        description: "A fluid midweek session where DJ sets intertwine with live instrumentation. Designed for after-work drinks that ease you into the night.",
        time: "From 6:00 PM",
        image: "/events/wednesday.jpg"
    },
    {
        day: "Thursday",
        title: "Groove Town",
        description: "An evening dedicated to live music, soulful vocals, and effortless groove. From smooth classic covers to funk-leaning rhythms and expressive individual to band sets, Thursdays are warm, social, and musically rich, the perfect build towards the weekend.",
        time: "From 6:00 PM",
        image: "/events/thursday.jpg"
    },
    {
        day: "Friday",
        title: "Pop Friday",
        description: "Our signature end-of-month gathering. A bigger lineup, sunset-to-late-night energy, and an open-terrace atmosphere that brings the community together. Expect extended sets, elevated production, and a packed dancefloor, all with free entry.",
        time: "From 6:00 PM",
        image: "/events/friday.jpg"
    },
    {
        day: "Saturday",
        title: "Sacrosanct",
        description: "A deeper, more immersive Saturday experience. House melodies, steady builds, and layered soundscapes define the night- crafted for those who appreciate progression, atmosphere, and a dancefloor that evolves with intention. High energy, but refined.",
        time: "From 6:00 PM",
        image: "/events/saturday.jpg"
    }
];

export default function WeeklyEvents() {
    return (
        <section id="events" className="min-h-screen w-full bg-zinc-950 text-white py-24 px-6 md:px-0 overflow-hidden">
            {/* Section Header */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-7xl font-gothic text-texture-burgundy mb-4 uppercase tracking-widest">
                        This Week at Jekyll & Hyde
                    </h2>
                </motion.div>
            </div>

            {/* Events List - Magazine/Editorial Layout */}
            <div className="flex flex-col w-full">
                {EVENTS.map((event, index) => {
                    const isEven = index % 2 === 0;
                    const eventSlug = event.day.toLowerCase() as EventSlug;
                    const archiveImages = archivePosters[eventSlug] || [];
                    const displayImage = archiveImages.length > 0 ? archiveImages[0].image : event.image;

                    return (
                        <motion.div
                            key={event.day}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ margin: "-100px" }}
                            className={`flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[80vh] items-center ${isEven ? "" : "md:flex-row-reverse"}`}
                        >

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative transition-all duration-700 group overflow-hidden bg-zinc-950 flex items-center justify-center p-4">
                                {/* Overlay removed */}
                                <Image
                                    src={displayImage}
                                    alt={`${event.title} - Jekyll & Hyde Events Nairobi`}
                                    fill
                                    className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-zinc-950 relative z-20 border-y border-zinc-900 md:border-none">
                                <div className={`flex flex-col ${isEven ? "md:items-start" : "md:items-end"} text-center ${isEven ? "md:text-left" : "md:text-right"}`}>

                                    <span className="text-yellow-500 font-mono tracking-[0.2em] uppercase text-sm mb-4">
                                        {event.day}
                                    </span>

                                    <h2 className="text-5xl md:text-8xl font-gothic text-white mb-6 uppercase leading-[0.9]">
                                        {event.title}
                                    </h2>

                                    <p className="font-sans text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed mb-8">
                                        {event.description}
                                    </p>

                                    <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                                        <div className="inline-block border border-burgundy/50 px-4 py-2 rounded-full">
                                            <span className="font-mono text-burgundy text-sm tracking-widest">
                                                {event.time}
                                            </span>
                                        </div>

                                        <Link
                                            href={`/archive/${event.day.toLowerCase()}`}
                                            className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                                        >
                                            <span className="font-mono text-xs uppercase tracking-widest border-b border-transparent group-hover:border-white transition-colors">
                                                View Archive
                                            </span>
                                            <span className="text-burgundy transform group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
}
