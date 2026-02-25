"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function ReservationButtons() {
    const trackBooking = (method: string) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag('event', 'reservation_complete', {
                event_category: 'engagement',
                event_label: `Jekyll & Hyde Table Booking - ${method}`,
                value: 1
            });
        }
    };

    return (
        <div className="flex flex-col gap-6 w-full">
            <a
                href="tel:+254707370028"
                onClick={() => trackBooking('Call')}
                className="group relative flex flex-col items-center justify-center gap-1 border border-zinc-700 bg-black/50 px-8 py-5 hover:bg-white hover:text-black hover:border-white transition-all duration-500 overflow-hidden"
            >
                <div className="absolute inset-0 bg-red-950/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="flex items-center gap-4 z-10">
                    <Phone className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    <span className="font-gothic text-3xl uppercase tracking-widest group-hover:drop-shadow-md">
                        Reserve via Call
                    </span>
                </div>
                <span className="font-mono text-xs tracking-widest text-zinc-400 group-hover:text-zinc-700 z-10">
                    +254 707 370 028
                </span>
            </a>

            <a
                href="https://wa.me/254707370028"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBooking('WhatsApp')}
                className="group relative flex items-center justify-center gap-4 border border-green-900/50 bg-green-950/10 px-8 py-6 hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-500 overflow-hidden"
            >
                <div className="absolute inset-0 bg-green-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <MessageCircle className="w-6 h-6 z-10 text-green-500 group-hover:text-white transition-colors" />
                <span className="font-gothic text-3xl uppercase tracking-widest z-10 group-hover:drop-shadow-md">
                    Reserve via WhatsApp
                </span>
            </a>
        </div>
    );
}
