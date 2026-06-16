"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { archivePosters } from "@/lib/posters-data";
import SpecialCollab from "./SpecialCollab";

const EVENTS = [
    {
        day: "Wednesday",
        title: "Jekyll & Hyde Turns One",
        description: "Wednesday – Jekyll & Hyde Turns One\nThis Wednesday ✨\n\nA year of great drinks, good company, and a community that has made our space what it is. Thank you for being part of the journey so far. We have more coming. ✨\n\nTo mark the occasion, we're unveiling the next chapter of J&H: a refreshed food and cocktail menu, months in the making. Expect bold flavours, carefully crafted pairings, and original cocktails inspired by African spirits, herbs, and spices that celebrate local culture and heritage.\n\nDJ Chopstick will be on the decks spinning your favourite 80s and 90s classics.\n\nJoin us this Wednesday and be among the first to experience it. 🖤",
        time: "From 6:00 PM",
        image: "/events/wednesday.jpg"
    },
    {
        day: "Thursday",
        title: "Groove Town",
        description: "An evening dedicated to live music, soulful vocals, and effortless groove. From smooth classic covers to funk-leaning rhythms and expressive individual to band sets, Thursdays are warm, social, and musically rich, the perfect build towards the weekend.",
        time: "From 9:30 PM",
        image: "/events/thursday.jpg"
    },
    {
        day: "Friday",
        title: "Pop Culture",
        description: "A high-energy atmosphere built around recognisable anthems and dancefloor favourites. Expect popular hits, playful pop edits, disco-leaning cuts, and crowd-driven selections that keep the room vibrant all night. It's familiar, fun, and unapologetically feel-good.",
        time: "From 6:00 PM",
        image: "/events/friday.jpg"
    },
    {
        day: "Saturday",
        title: "Sacrosanct",
        description: "Our flagship Saturday night. The biggest lineup of the week, peak-time energy, and a dancefloor that doesn't stop. Expect a full night of curated DJ sets taking you deep into the early hours.",
        time: "From 9:00 PM",
        image: "/events/saturday.jpg"
    },
    {
        day: "Signature Event",
        title: "Closing Rituals",
        slug: "closing-rituals",
        description: "Our signature end-of-month gathering. A bigger lineup, sunset-to-late-night energy, and an open-terrace atmosphere that brings the community together. Expect extended sets, elevated production, and a packed dancefloor, all with free entry.",
        time: "From 6:00 PM",
        image: "/events/closing-rituals.jpg"
    }
];

export default function WeeklyEvents() {
    return (
        <section id="events" className="min-h-screen w-full bg-zinc-950 text-white py-12 md:py-24 px-6 md:px-0 overflow-hidden">
            {/* Section Header for ALL Events */}
            <div className="container mx-auto px-4 mb-24 text-center relative z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "-100px" }}
                    className="text-4xl md:text-7xl font-gothic tracking-widest text-white mb-2"
                >
                    THIS WEEK AT
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ margin: "-100px" }}
                    className="text-4xl md:text-7xl font-gothic tracking-widest text-texture-burgundy"
                >
                    JEKYLL & HYDE
                </motion.h2>
            </div>


            {/* Regular Weekly Events List - Wednesday to Saturday */}
            <div className="flex flex-col w-full">
                {EVENTS.map((event, index) => {
                    const isEven = index % 2 !== 0;
                    const eventSlug = ((event as any).slug || event.day.toLowerCase().replace(/\s+/g, '-')) as keyof typeof archivePosters;
                    const archiveImages = archivePosters[eventSlug] || [];
                    const displayImage = archiveImages.length > 0 ? archiveImages[0].image : event.image;

                    return (
                        <div key={event.day} id={`event-${eventSlug}`} className="scroll-mt-32">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ margin: "-100px" }}
                                className={`flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[80vh] items-center ${isEven ? "" : "md:flex-row-reverse"}`}
                            >

                                {/* Image Section */}
                                <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative transition-all duration-700 group overflow-hidden bg-zinc-950 flex items-center justify-center p-4">
                                    {displayImage.toLowerCase().endsWith('.mp4') || displayImage.toLowerCase().endsWith('.webm') ? (
                                        <video
                                            src={displayImage}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <Image
                                            src={displayImage}
                                            alt={`${event.title} - Jekyll & Hyde Events Nairobi`}
                                            fill
                                            className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    )}
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

                                        <p className="font-sans text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed mb-4">
                                            {event.description}
                                        </p>

                                        {(event as any).ticketUrl && (
                                            <a
                                                href={(event as any).ticketUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 border border-white/80 hover:bg-white hover:text-zinc-950 text-white font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 mb-6"
                                            >
                                                Get Tickets →
                                            </a>
                                        )}

                                        <div className="mt-4 pb-12 md:pb-0 border-b border-zinc-800 md:border-none w-full flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                                            <div className="inline-block border border-burgundy/50 px-4 py-2 rounded-full">
                                                <span className="font-mono text-burgundy text-sm tracking-widest uppercase">
                                                    {(archiveImages.length > 0 && archiveImages[0].time) ? archiveImages[0].time : event.time}
                                                </span>
                                            </div>

                                            <Link
                                                href={`/archive/${event.day.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                                            >
                                                <span className="font-mono text-xs uppercase tracking-widest border-b border-transparent group-hover:border-white transition-colors">
                                                    View Past Events
                                                </span>
                                                <span className="text-burgundy transform group-hover:translate-x-1 transition-transform">
                                                    →
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* 2. Collaboration Events (Moved to the bottom below weekly events) */}
            <div className="flex flex-col w-full">
                <SpecialCollab />
            </div>

        </section>
    );
}
