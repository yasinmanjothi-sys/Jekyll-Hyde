"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Amatic_SC } from "next/font/google";
import { siteConfig, MenuItem, MenuSection } from "@/config/site.config";

const amatic = Amatic_SC({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function Menu() {
    const { categories, items } = siteConfig.menu;
    // Default to first category if available
    const [activeTab, setActiveTab] = useState<string>(categories[0]?.id || "");

    const currentCategoryData = items[activeTab];

    return (
        <section className={`min-h-screen w-full bg-black text-white py-24 px-4 md:px-20 relative overflow-hidden ${amatic.className}`}>

            {/* Background Texture similar to menu card */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>

            <div className="max-w-5xl mx-auto z-10 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-gothic text-red-600 mb-4 tracking-widest drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                    >
                        THE MENU
                    </motion.h2>
                    <p className="font-hand text-zinc-400 text-lg md:text-xl tracking-widest">
                        -- UNRELEASED FLAVOURS --
                    </p>
                </div>

                {/* Categories / Tabs */}
                <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-red-900/30 pb-4">
                    {categories.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-xl md:text-3xl uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? "text-red-500 scale-110" : "text-zinc-600 hover:text-zinc-400"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Menu Content */}
                <div className="min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full"
                        >
                            {/* Render based on Type */}
                            {currentCategoryData?.type === "flat" && currentCategoryData.items && (
                                <div className={currentCategoryData.displayStyle === "list" ? "max-w-3xl mx-auto space-y-6" : "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"}>
                                    {currentCategoryData.displayStyle === "list" && (
                                        <h3 className="text-6xl text-center text-red-600 mb-12 font-gothic uppercase">{categories.find(c => c.id === activeTab)?.label}</h3>
                                    )}

                                    {currentCategoryData.items.map((item, idx) => (
                                        currentCategoryData.displayStyle === "list" ? (
                                            // LIST STYLE (Wines)
                                            <div key={idx} className="flex justify-between items-end border-b border-zinc-800 pb-2 border-dashed border-zinc-800/50">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-zinc-500 text-xl font-bold">--</span>
                                                    <span className="text-white text-2xl md:text-3xl font-bold">{item.name}</span>
                                                </div>
                                                <span className="text-red-600 text-2xl md:text-3xl pl-4 min-w-[150px] text-right font-bold">
                                                    {siteConfig.menu.currency} {item.price}
                                                </span>
                                            </div>
                                        ) : (
                                            // GRID STYLE (Cocktails/Tapas)
                                            <div key={idx} className="group">
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="text-red-600 text-3xl md:text-4xl font-bold">--</span>
                                                    <h3 className="text-red-600 text-3xl md:text-4xl uppercase tracking-wide font-bold">{item.name}</h3>
                                                    <div className="ml-auto text-red-600 text-2xl md:text-3xl whitespace-nowrap font-bold group-hover:underline decoration-red-600/50">
                                                        {siteConfig.menu.currency} {item.price}
                                                    </div>
                                                </div>
                                                {item.desc && (
                                                    <p className="text-white/90 text-xl md:text-2xl pl-8 leading-relaxed mb-2 font-bold">
                                                        {item.desc}
                                                    </p>
                                                )}
                                                {item.allergens && (
                                                    <p className="text-zinc-500 text-lg pl-8 italic font-bold">Allergens: {item.allergens}</p>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}

                            {currentCategoryData?.type === "sections" && currentCategoryData.sections && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                                    {currentCategoryData.sections.map((section, idx) => (
                                        <div key={idx}>
                                            <h3 className="text-5xl text-center text-red-600 mb-8 font-gothic uppercase">{section.title}</h3>
                                            <div className="space-y-8">
                                                {section.items.map((item, i) => (
                                                    <div key={i}>
                                                        <div className="flex justify-between items-baseline mb-1">
                                                            <span className="text-white text-3xl uppercase font-bold">--{item.name}</span>
                                                            <span className="text-red-600 text-3xl font-bold">{siteConfig.menu.currency} {item.price}</span>
                                                        </div>
                                                        {item.desc && (
                                                            <p className="text-zinc-400 text-xl pl-6 font-bold">{item.desc}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
