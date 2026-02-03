"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EVENTS = [
    {
        day: "Wednesday",
        title: "Midweek Blend",
        description: "@deejaychopstick254 teams up with a live saxophonist, weaving live jazz elements into a fluid DJ set.",
        time: "8PM till late",
        image: "/events/wednesday.jpg"
    },
    {
        day: "Thursday",
        title: "Groove Town",
        description: "Groove Town Thursdays presents Shane Gray Experience. A live, groove-driven performance filled with smooth renditions and warm melodies.",
        time: "9:30PM till late",
        image: "/events/thursday.jpg" // Using placeholder image with similar vibe
    },
    {
        day: "Friday",
        title: "Pop Culture",
        description: "A high-energy back-to-back session with @savi_svai × @kirasbubble × JustKen, serving disco-leaning edits, pop remixes and dancefloor favourites.",
        time: "9PM till late",
        image: "/events/friday.jpg"
    },
    {
        day: "Saturday",
        title: "Sacrosanct",
        description: "An immersive late-night journey through melodic and atmospheric sounds curated by @djdonnaccia.",
        time: "9:30PM till late",
        image: "/events/saturday.jpg"
    }
];

export default function WeeklyEvents() {
    return (
        <section className="min-h-screen w-full bg-zinc-950 text-white py-24 px-6 md:px-0 overflow-hidden">

            {/* Section Header */}
            <div className="text-center mb-24 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-gothic tracking-widest text-white mb-2"
                >
                    THIS WEEK AT
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-gothic tracking-widest text-red-700"
                >
                    JEKYLL & HYDE
                </motion.h2>
            </div>

            {/* Events List - Magazine/Editorial Layout */}
            <div className="flex flex-col w-full">
                {EVENTS.map((event, index) => {
                    const isEven = index % 2 === 0;
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
                            <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative transition-all duration-700 group overflow-hidden">
                                {/* Overlay removed */}
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-zinc-950 relative z-20 border-y border-zinc-900 md:border-none">
                                <div className={`flex flex-col ${isEven ? "md:items-start" : "md:items-end"} text-center ${isEven ? "md:text-left" : "md:text-right"}`}>

                                    <span className="text-yellow-500 font-mono tracking-[0.2em] uppercase text-sm mb-4">
                                        {event.day}
                                    </span>

                                    <h3 className="text-5xl md:text-8xl font-gothic text-white mb-6 uppercase leading-[0.9]">
                                        {event.title}
                                    </h3>

                                    <p className="font-sans text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed mb-8">
                                        {event.description}
                                    </p>

                                    <div className="inline-block border border-red-900/50 px-4 py-2 rounded-full">
                                        <span className="font-mono text-red-500 text-sm tracking-widest">
                                            {event.time}
                                        </span>
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
