"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { archivePosters, EventSlug } from "@/lib/posters-data";
import SpecialCollab from "./SpecialCollab";

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
        title: "Pop Culture",
        description: "Your weekly descent into high-energy pop, remixed anthems, and unapologetic singalongs. From throwbacks to current hits, Pop Culture redefines the weekend kickoff with an electric atmosphere designed for those who want to dance until the lights come on.",
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
    // Manually define Closing Rituals since it sits outside the weekly loop now
    const closingRitualsEvent = {
        day: "Closing Rituals",
        title: "Closing Rituals",
        description: "Our signature end-of-month gathering. A bigger lineup, sunset-to-late-night energy, and an open-terrace atmosphere that brings the community together. Expect extended sets, elevated production, and a packed dancefloor, all with free entry.",
        time: "From 6:00 PM",
        image: "/events/closing-rituals.jpg"
    };

    const closingRitualsArchive = archivePosters["closing-rituals"] || [];
    const closingRitualsImage = closingRitualsArchive.length > 0 ? closingRitualsArchive[0].image : closingRitualsEvent.image;

    return (
        <section id="events" className="min-h-screen w-full bg-zinc-950 text-white py-24 px-6 md:px-0 overflow-hidden">



            {/* Featured Events (Closing Rituals & Collab Events) */}
            <div className="flex flex-col w-full mb-24">
                {/* 1. Closing Rituals */}
                <div id="event-closing-rituals" className="scroll-mt-32 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ margin: "-100px" }}
                        className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[80vh] items-center md:flex-row-reverse"
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative transition-all duration-700 group overflow-hidden bg-zinc-950 flex items-center justify-center p-4">
                            {closingRitualsImage.toLowerCase().endsWith('.mp4') || closingRitualsImage.toLowerCase().endsWith('.webm') ? (
                                <video
                                    src={closingRitualsImage}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <Image
                                    src={closingRitualsImage}
                                    alt="Closing Rituals - Jekyll & Hyde Events Nairobi"
                                    fill
                                    className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            )}
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-zinc-950 relative z-20 border-y border-zinc-900 md:border-none">
                            <div className="flex flex-col md:items-start text-center md:text-left">
                                <span className="text-yellow-500 font-mono tracking-[0.2em] uppercase text-sm mb-4">
                                    Closing Rituals
                                </span>
                                <h2 className="text-5xl md:text-8xl font-gothic text-white mb-6 uppercase leading-[0.9]">
                                    Closing Rituals
                                </h2>
                                <p className="font-sans text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed mb-8">
                                    {closingRitualsEvent.description}
                                </p>

                                <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center w-full">
                                    <div className="inline-block border border-burgundy/50 px-4 py-2 rounded-full">
                                        <span className="font-mono text-burgundy text-sm tracking-widest uppercase">
                                            {(closingRitualsArchive.length > 0 && closingRitualsArchive[0].time) ? closingRitualsArchive[0].time : closingRitualsEvent.time}
                                        </span>
                                    </div>

                                    <Link
                                        href="/archive/closing-rituals"
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

                {/* Section Header for ALL Events */}
                <div className="container mx-auto px-4 mb-24 mt-24 text-center relative z-10 w-full">
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

                {/* 2. Collaboration Events */}
                <SpecialCollab />
            </div>

            {/* Regular Weekly Events List - Wednesday to Saturday */}
            <div className="flex flex-col w-full">
                {EVENTS.map((event, index) => {
                    // Since closing rituals & collab are out of the loop, Wednesday is now index 0. 
                    // To keep Wednesday looking like a regular right-sided image (previously it was odd index 1),
                    // We can inverse the isEven check.
                    const isEven = index % 2 !== 0;
                    const eventSlug = event.day.toLowerCase().replace(/\s+/g, '-') as EventSlug;
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

                                        <p className="font-sans text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed mb-8">
                                            {event.description}
                                        </p>

                                        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
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
        </section>
    );
}
