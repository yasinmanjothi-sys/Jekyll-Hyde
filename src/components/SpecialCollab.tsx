"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SpecialCollab() {
    return (
        <div id="event-collaboration-events" className="scroll-mt-32 w-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ margin: "-100px" }}
                className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[80vh] items-center"
            >

                {/* Image Section (Matches Image Section behavior in WeeklyEvents) */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative transition-all duration-700 group overflow-hidden bg-zinc-950 flex items-center justify-center p-4">
                    <Image
                        src="/archive/collaboration-events/2_1pm to 10pm.jpg"
                        alt="J&H x Not A Thing Brazilian Carnival Poster"
                        fill
                        className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-zinc-950 relative z-20 border-y border-zinc-900 md:border-none">
                    <div className="flex flex-col md:items-end text-center md:text-right">

                        <span className="text-burgundy font-mono tracking-[0.3em] uppercase text-sm mb-4 border border-burgundy/50 px-4 py-2 self-center md:self-end">
                            Special Event
                        </span>

                        <h2 className="text-5xl md:text-8xl font-gothic text-white mb-6 uppercase leading-[0.9]">
                            J&H <span className="text-zinc-500 font-sans mx-1 text-3xl md:text-5xl lowercase">x</span> NOT A THING <br />
                            <span className="text-zinc-500 text-4xl md:text-6xl mt-2 block">Brazilian Carnival</span>
                        </h2>

                        <div className="font-sans text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed mb-8 space-y-4">
                            <p>
                                In collaboration with Not A Thing, we're bringing the vibrant spirit of Brazilian Carnival to the heart of Nairobi.
                            </p>
                            <p>
                                Expect samba rhythms, carnival energy, authentic Brazilian food, and the colours of Rio taking over Jekyll & Hyde for a Sunday celebration like no other.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center w-full">

                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <span className="text-zinc-500 font-serif text-sm uppercase tracking-widest mb-1">Time</span>
                                <span className="font-mono text-white text-lg">Sun • 1:00 PM</span>
                            </div>

                            <div className="flex gap-4 items-center">

                                <Link
                                    href="/reserve"
                                    className="group inline-flex items-center justify-center gap-4 bg-black/50 px-4 py-2 hover:bg-white hover:text-black hover:border-white transition-all duration-500 overflow-hidden"
                                >
                                    <span className="font-gothic text-xl uppercase tracking-widest z-10 group-hover:drop-shadow-md">
                                        Reserve
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
