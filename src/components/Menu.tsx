"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Amatic_SC } from "next/font/google";

const amatic = Amatic_SC({
    weight: ["400", "700"],
    subsets: ["latin"],
});

// --- DATA ---
const SIGNATURE_COCKTAILS = [
    { name: "Kamba Sunshine", price: "1300", desc: "Procera Gin, Lemon Juice and Mango Shrub." },
    { name: "Jekyll & Hyde", price: "1500", desc: "Custard Apple Bourbon, Apple Tepache and Apple Cider." },
    { name: "Carmilla Gold", price: "1500", desc: "Curry & Turmeric Tequila, Florida Syrup, Lime Juice and Soda Water." },
    { name: "Santa Muerte", price: "1300", desc: "Silver Tequila, Rhubarb & Carrot Shrub and Lime Juice." },
    { name: "Dracula", price: "1700", desc: "Blueberry Oregano Syrup, Lime Juice, Mezcal, Egg White, Saline Solution and Cassis." },
    { name: "Phantom of the Opera", price: "1300", desc: "Dark Rum, Lychee Cream and Strawberry Water." },
    { name: "Belladonna", price: "1300", desc: "Rose Vodka, Dry Vermouth and Gooseberry Cordial." },
    { name: "Ophelia", price: "1500", desc: "Pear liqueur, Pear Gin, Acid Solution and Peach Soju." },
    { name: "Mami Wata", price: "1300", desc: "Bourbon, Alomo Bitters, Lemon Juice and Orgeat." },
];

const TAPAS_BITINGS = [
    { name: "Hummus", price: "750", desc: "Chickpea dip, served with crackers and veggies.", allergens: "Gluten, & Nuts" },
    { name: "Bhajia", price: "450", desc: "Deep fried potatoes with spices, served with romesco sauce.", allergens: "Nuts, gluten" },
    { name: "Spicy Cauliflower Wings", price: "450", desc: "Deep fried cauliflower florets, served with french dressing.", allergens: "Gluten" },
    { name: "Burrata", price: "1200", desc: "Burrata cheese served with cherry tomato pesto and sourdough bread.", allergens: "Dairy, Gluten & Nuts" },
    { name: "Samosas (6 pcs)", price: "800", desc: "Minced beef cooked in red wine. Mushrooms, sun-dried tomatoes and brie. Spinach and feta.", allergens: "Dairy & Gluten" },
    { name: "Labneh", price: "650", desc: "Homemade strained yoghurt, served with black olives, walnuts and crackers.", allergens: "Dairy, Gluten & Nuts" },
    { name: "Popcorn Chicken", price: "950", desc: "Deep fried chicken in panko bread, coated with honey and miso sauce.", allergens: "Eggs, Gluten, Peanuts, Soy" },
    { name: "Charcuterie Board (Sharing)", price: "2700", desc: "Different selections of cheese and cold cuts, served with bread, J&H pesto, hummus and pineapple jam.", allergens: "Dairy, Gluten & Nuts" },
    { name: "Meatballs", price: "1000", desc: "Beef meatballs with home made tomato sauce, and chimichurri.", allergens: "Dairy, Eggs & Gluten" },
    { name: "Chicken Skewers", price: "950", desc: "Boneless chicken thighs marinated with chermoula, served with garlic sauce.", allergens: "Dairy" },
    { name: "Bruschetta Board (6 pcs)", price: "1100", desc: "White bread, marinated zucchini mint & cherry tomatoes. Sourdough rosemary and olives bread, with hummus and black oven roasted olives. Cacao and dry sultanas bread, with labneh, walnuts, cured ham and rocket.", allergens: "Dairy, Gluten & Nuts" },
];

const WINES = [
    { name: "Far from the Crown Shiraz", price: "850 | 4000" },
    { name: "Pequena Vasilja Sauvignon Blanc", price: "850 | 4000" },
    { name: "San Felipe Classic Rose", price: "850 | 4000" },
    { name: "Duc de Paris Blanc de Blancs", price: "850 | 4000" },
    { name: "Decanal Pinot Grigio", price: "5500 (BTL)" },
    { name: "Tons Duorum White & Red", price: "5500 (BTL)" },
    { name: "Angelo Montepulciano D'Abruzzo", price: "5500 (BTL)" },
    { name: "Fantinel Prosecco", price: "5500 (BTL)" },
    { name: "Veuve Ambal Rose Sparkling", price: "6000 (BTL)" },
];

const EXTENDED_MENU = [
    {
        category: "BEERS & CIDERS", items: [
            { name: "Capitan Lager", price: "550" },
            { name: "Bila Shaka IPA", price: "550" },
            { name: "Porini Pilsner", price: "550" },
            { name: "Manyatta Cider Classic", price: "550" },
        ]
    },
    {
        category: "00 MENU", items: [
            { name: "Pornstar 00", price: "1050", desc: "Passion, Vanilla, Bubbles 00" },
            { name: "Spritz 00", price: "1100", desc: "Italian Aperitivo, Bubbles 00, Soda Water" },
            { name: "Orange Fizz", price: "1100", desc: "Italian Aperitivo, Ginger, Lemon, Soda Water" },
        ]
    }
];


type Tab = "cocktails" | "tapas" | "wines" | "more";

export default function Menu() {
    const [activeTab, setActiveTab] = useState<Tab>("cocktails");

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
                    {[
                        { id: "cocktails", label: "Signature Cocktails" },
                        { id: "tapas", label: "Tapas & Bitings" },
                        { id: "wines", label: "Wines" },
                        { id: "more", label: "Beers & 00" }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as Tab)}
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

                        {/* COCKTAILS */}
                        {activeTab === "cocktails" && (
                            <motion.div
                                key="cocktails"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                            >
                                {SIGNATURE_COCKTAILS.map((item) => (
                                    <div key={item.name} className="group">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-red-600 text-3xl md:text-4xl font-bold">--</span>
                                            <h3 className="text-red-600 text-3xl md:text-4xl uppercase tracking-wide font-bold">{item.name}</h3>
                                            <span className="text-red-600 text-2xl md:text-3xl ml-auto whitespace-nowrap font-bold">KShs {item.price}</span>
                                        </div>
                                        <p className="text-white/90 text-xl md:text-2xl pl-8 leading-relaxed font-bold">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* TAPAS */}
                        {activeTab === "tapas" && (
                            <motion.div
                                key="tapas"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                            >
                                {TAPAS_BITINGS.map((item) => (
                                    <div key={item.name} className="group">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-red-600 text-3xl md:text-4xl font-bold">--</span>
                                            <h3 className="text-red-600 text-3xl md:text-4xl uppercase tracking-wide font-bold">{item.name}</h3>
                                            <div className="ml-auto text-red-600 text-2xl md:text-3xl whitespace-nowrap group-hover:underline decoration-red-600/50 font-bold">
                                                KShs {item.price}
                                            </div>
                                        </div>
                                        <p className="text-white/90 text-xl md:text-2xl pl-8 leading-relaxed mb-2 font-bold">
                                            {item.desc}
                                        </p>
                                        {item.allergens && (
                                            <p className="text-zinc-500 text-lg pl-8 italic font-bold">Allergens: {item.allergens}</p>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* WINES */}
                        {activeTab === "wines" && (
                            <motion.div
                                key="wines"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="max-w-3xl mx-auto space-y-6"
                            >
                                <h3 className="text-6xl text-center text-red-600 mb-12 font-gothic">WINES</h3>
                                {WINES.map((item) => (
                                    <div key={item.name} className="flex justify-between items-end border-b border-zinc-800 pb-2 border-dashed border-zinc-800/50">
                                        <div className="flex items-center gap-2">
                                            <span className="text-zinc-500 text-xl font-bold">--</span>
                                            <span className="text-white text-2xl md:text-3xl font-bold">{item.name}</span>
                                        </div>
                                        <span className="text-red-600 text-2xl md:text-3xl pl-4 min-w-[150px] text-right font-bold">
                                            KShs {item.price}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* MORE (Beers, 00) */}
                        {activeTab === "more" && (
                            <motion.div
                                key="more"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-20"
                            >
                                {EXTENDED_MENU.map((category) => (
                                    <div key={category.category}>
                                        <h3 className="text-5xl text-center text-red-600 mb-8 font-gothic">{category.category}</h3>
                                        <div className="space-y-8">
                                            {category.items.map((item: any) => (
                                                <div key={item.name}>
                                                    <div className="flex justify-between items-baseline mb-1">
                                                        <span className="text-white text-3xl uppercase font-bold">--{item.name}</span>
                                                        <span className="text-red-600 text-3xl font-bold">KShs {item.price}</span>
                                                    </div>
                                                    {item.desc && (
                                                        <p className="text-zinc-400 text-xl pl-6 font-bold">{item.desc}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>



            </div>
        </section>
    );
}
