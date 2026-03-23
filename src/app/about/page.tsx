"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#070707] text-zinc-200 pt-32 pb-32 px-6 md:px-12 selection:bg-jekyll-red/30">
            {/* Ambient Background Noise */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <header className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-gothic tracking-widest text-[#cc1111] uppercase mb-8 drop-shadow-[0_0_15px_rgba(204,17,17,0.3)]">
                            The Narrative
                        </h1>
                        <div className="w-1/4 h-[1px] bg-gradient-to-r from-transparent via-jekyll-red to-transparent mx-auto"></div>
                    </motion.div>
                </header>

                <article className="space-y-12 font-sans font-light text-lg md:text-xl text-zinc-400 leading-relaxed">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pl-6 md:pl-10 border-l-2 border-jekyll-red"
                    >
                        <p className="text-2xl md:text-3xl font-mono text-zinc-200 leading-relaxed">
                            Jekyll & Hyde was founded in June 2025, and it was not born from an idea, it was born from experience.
                        </p>
                        <p className="mt-6">
                            From years spent behind bars across continents, we learned that hospitality is not simply about making good drinks. It is about creating experiences, crafting memories, and connecting with guests through food, service, and atmosphere.
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Jekyll & Hyde is the result of that journey. A space shaped by knowledge, discipline, and creative instinct. A place where we hope you will feel that story the moment you walk through our doors.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Inspired by the novel Dr. Jekyll and Mr. Hyde, we embrace the duality within every human being. By day, we hold one face, composed, structured, refined, and by night, we allow ourselves to unfold, to express, to transform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="my-16 p-10 md:p-14 border border-zinc-800/50 bg-black/40 backdrop-blur-sm rounded-sm text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-jekyll-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <p className="text-2xl font-mono text-zinc-200 leading-relaxed italic relative z-10">
                            "Here, consistency is not a statement, it is a standard. Every ingredient, every cocktail, every interaction is intentional."
                        </p>
                        <p className="mt-8 text-zinc-400 relative z-10">
                            Our programme brings together nearly 100 classic recipes alongside signature creations, exploring bold and unexpected flavours, with a particular focus on spirits from the African continent.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center my-20"
                    >
                        <p className="text-2xl md:text-3xl font-gothic text-[#cc1111] tracking-[0.2em] uppercase">
                            But as the name suggests, there is always another side.
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        As the evening unfolds, the atmosphere shifts. From jazz to live music, to the pulse of contemporary culture. Jekyll & Hyde is a space designed for contrast.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        For those who appreciate detail, during the week, it is a cocktail bar, a place to enjoy a drink, to talk, to slow down. As the weekend arrives, the atmosphere evolves into something more raw, a dive bar spirit, louder, freer, and alive.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-center pt-20 mt-12 border-t border-zinc-900"
                    >
                        <p className="text-2xl md:text-4xl font-gothic tracking-widest text-zinc-100">
                            This is not just a bar. 
                        </p>
                        <p className="mt-4 text-xl md:text-2xl font-mono text-[#cc1111]/80 italic">
                            It is a reflection of the people who create it and those who step inside.
                        </p>
                    </motion.div>
                </article>
            </div>
        </main>
    );
}
