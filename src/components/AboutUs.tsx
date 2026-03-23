export default function AboutUs() {
    return (
        <section id="about" className="w-full bg-jekyll-black text-jekyll-parchment py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto w-full space-y-12">
                <header className="text-center md:text-left mb-16">
                    <h2 className="text-5xl md:text-8xl font-gothic tracking-widest text-jekyll-red uppercase drop-shadow-[0_0_10px_rgba(92,23,5,0.5)]">
                        The Narrative
                    </h2>
                </header>

                <div className="prose prose-invert prose-lg max-w-none font-sans text-zinc-300">
                    <p className="text-xl md:text-2xl font-mono leading-relaxed mb-8">
                        Our story is one of duality—the refined elegance of day giving way to the untamed spirit of the night.
                    </p>
                    <p className="font-mono text-zinc-400">
                        Jekyll & Hyde Nairobi is the premier Cocktail Bar & Kitchen for exclusive dining and immersive nightlife in Westlands. We blend meticulous mixology with an atmosphere designed to awaken your darker, more playful side. Step in, leave the ordinary behind, and let the ritual begin.
                    </p>
                </div>
            </div>
        </section>
    );
}
