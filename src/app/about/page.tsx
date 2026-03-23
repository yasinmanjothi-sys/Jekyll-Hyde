import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Jekyll & Hyde Westlands",
    description: "Discover the narrative and ethos behind Jekyll & Hyde, Nairobi's premier Cocktail Bar & Kitchen.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-jekyll-black text-jekyll-parchment flex flex-col pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <h1 className="sr-only">About Jekyll & Hyde</h1>
            
            <article className="max-w-4xl mx-auto w-full space-y-12">
                <header className="text-center md:text-left mb-16">
                    <h2 className="text-5xl md:text-8xl font-gothic tracking-widest text-jekyll-red uppercase">
                        The Narrative
                    </h2>
                </header>

                <section className="prose prose-invert prose-lg max-w-none font-sans text-zinc-300">
                    {/* Content Payload Area */}
                    <p className="text-xl md:text-2xl font-mono leading-relaxed mb-8">
                        Our story is one of duality—the refined elegance of day giving way to the untamed spirit of the night.
                    </p>
                    
                    {/* Placeholder for further textual content */}
                    <div className="h-48 border border-white/10 rounded flex items-center justify-center bg-white/5">
                        <span className="font-mono text-sm text-zinc-500">[ Narrative content to be injected here ]</span>
                    </div>
                </section>
            </article>
        </main>
    );
}
