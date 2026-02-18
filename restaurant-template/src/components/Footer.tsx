"use client";

import { Instagram } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-zinc-500 border-t border-zinc-900 py-12 px-6 flex flex-col items-center justify-center gap-6">

            {/* Socials */}
            <div className="flex gap-8">
                <a
                    href={siteConfig.footer.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors duration-300"
                >
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                </a>
            </div>

            {/* Brand */}
            <div className="text-center flex flex-col items-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 opacity-80">
                    <Image
                        src={siteConfig.branding.logo}
                        alt={`${siteConfig.metadata.title} Logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 128px, 160px"
                    />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest">{siteConfig.footer.address}</p>
            </div>

            {/* Copyright */}
            <div className="text-[10px] font-mono opacity-40 mt-6 text-center">
                <p>© {new Date().getFullYear()} {siteConfig.footer.copyrightName}. All rights reserved. Drink responsibly.</p>
                <div className="mt-4 flex justify-center">
                    <a
                        href="https://redboatmedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group opacity-50 hover:opacity-100 transition-opacity duration-300"
                    >
                        <Image
                            src="/red-boat-badge.svg"
                            width={150}
                            height={40}
                            alt="Made by Red Boat Media"
                            className="h-10 w-auto"
                        />
                    </a>
                </div>
            </div>

        </footer>
    );
}
