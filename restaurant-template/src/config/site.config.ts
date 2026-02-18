export type MenuItem = {
    name: string;
    price: string;
    desc?: string;
    allergens?: string;
};

export type MenuSection = {
    title: string;
    items: MenuItem[];
};

export type MenuCategoryData = {
    type: "flat" | "sections";
    displayStyle?: "grid" | "list";
    items?: MenuItem[];
    sections?: MenuSection[];
};

export type EventItem = {
    day: string;
    title: string;
    description: string;
    time: string;
    image: string;
};

export const siteConfig = {
    metadata: {
        title: "Jekyll & Hyde | Nairobi",
        description: "Unreleased flavours. Unique hospitality. A cocktail bar & kitchen in Westlands, Nairobi.",
        keywords: ["Cocktail Bar", "Nairobi", "Westlands", "Jekyll & Hyde", "Nightlife", "Restaurant"],
    },
    branding: {
        logo: "/logo.png",
        logoWidth: 600,
        logoHeight: 600,
    },
    theme: {
        colors: {
            background: "#0a0a0a",
            foreground: "#fafafa",
            accentRed: "#7f1d1d",
            accentGold: "#c0a062",
        },
        fonts: {
            sans: "var(--font-geist-sans)",
            mono: "var(--font-geist-mono)",
            gothic: "var(--font-pirata)",
            hand: "var(--font-amatic)",
        },
    },
    hero: {
        title: {
            first: "JEKYLL &",
            second: "HYDE",
            highlightSecond: true,
        },
        subtitle: "Cocktail Bar & Kitchen",
        video: "/hero 2.mp4",
    },
    footer: {
        socials: {
            instagram: "https://www.instagram.com/jekyllandhyde.ke/",
        },
        address: "Nairobi, Kenya",
        copyrightName: "Jekyll & Hyde",
    },
    menu: {
        currency: "KShs",
        categories: [
            { id: "cocktails", label: "Signature Cocktails" },
            { id: "tapas", label: "Tapas & Bitings" },
            { id: "wines", label: "Wines" },
            { id: "more", label: "Beers & 00" }
        ],
        items: {
            cocktails: {
                type: "flat",
                displayStyle: "grid",
                items: [
                    { name: "Kamba Sunshine", price: "1300", desc: "Procera Gin, Lemon Juice and Mango Shrub." },
                    { name: "Jekyll & Hyde", price: "1500", desc: "Custard Apple Bourbon, Apple Tepache and Apple Cider." },
                    { name: "Carmilla Gold", price: "1500", desc: "Curry & Turmeric Tequila, Florida Syrup, Lime Juice and Soda Water." },
                    { name: "Santa Muerte", price: "1300", desc: "Silver Tequila, Rhubarb & Carrot Shrub and Lime Juice." },
                    { name: "Dracula", price: "1700", desc: "Blueberry Oregano Syrup, Lime Juice, Mezcal, Egg White, Saline Solution and Cassis." },
                    { name: "Phantom of the Opera", price: "1300", desc: "Dark Rum, Lychee Cream and Strawberry Water." },
                    { name: "Belladonna", price: "1300", desc: "Rose Vodka, Dry Vermouth and Gooseberry Cordial." },
                    { name: "Ophelia", price: "1500", desc: "Pear liqueur, Pear Gin, Acid Solution and Peach Soju." },
                    { name: "Mami Wata", price: "1300", desc: "Bourbon, Alomo Bitters, Lemon Juice and Orgeat." },
                ]
            },
            tapas: {
                type: "flat",
                displayStyle: "grid",
                items: [
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
                ]
            },
            wines: {
                type: "flat",
                displayStyle: "list",
                items: [
                    { name: "Far from the Crown Shiraz", price: "850 | 4000" },
                    { name: "Pequena Vasilja Sauvignon Blanc", price: "850 | 4000" },
                    { name: "San Felipe Classic Rose", price: "850 | 4000" },
                    { name: "Duc de Paris Blanc de Blancs", price: "850 | 4000" },
                    { name: "Decanal Pinot Grigio", price: "5500 (BTL)" },
                    { name: "Tons Duorum White & Red", price: "5500 (BTL)" },
                    { name: "Angelo Montepulciano D'Abruzzo", price: "5500 (BTL)" },
                    { name: "Fantinel Prosecco", price: "5500 (BTL)" },
                    { name: "Veuve Ambal Rose Sparkling", price: "6000 (BTL)" },
                ]
            },
            more: {
                type: "sections",
                sections: [
                    {
                        title: "BEERS & CIDERS",
                        items: [
                            { name: "Capitan Lager", price: "550" },
                            { name: "Bila Shaka IPA", price: "550" },
                            { name: "Porini Pilsner", price: "550" },
                            { name: "Manyatta Cider Classic", price: "550" },
                        ]
                    },
                    {
                        title: "00 MENU",
                        items: [
                            { name: "Pornstar 00", price: "1050", desc: "Passion, Vanilla, Bubbles 00" },
                            { name: "Spritz 00", price: "1100", desc: "Italian Aperitivo, Bubbles 00, Soda Water" },
                            { name: "Orange Fizz", price: "1100", desc: "Italian Aperitivo, Ginger, Lemon, Soda Water" },
                        ]
                    }
                ]
            }
        } as Record<string, MenuCategoryData>
    },
    location: {
        title: "FIND THE CURE",
        addressLines: ["Westlands Arcade Plaza", "Waiyaki Way, Nairobi"],
        operatingHours: "Tue - Sat: 6:00 PM - 1:30 AM",
        kitchenHours: "(Kitchen closes at 11:00 PM)",
        phone: "+254707370028",
        mapUrl: "https://www.google.com/maps/place/Jekyll+and+Hyde/@-1.2649866,36.8003148,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17003d617797:0xc0f0ecfff812153e!8m2!3d-1.2649866!4d36.8028897",
        mapImage: "/custom_map.jpg",
    },
    events: {
        title: { first: "THIS WEEK AT", second: "JEKYLL & HYDE" },
        items: [
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
                image: "/events/thursday.jpg"
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
        ]
    },
    gallery: {
        title: "Social Alchemy",
        subtitle: "View the full gallery",
    }
};
