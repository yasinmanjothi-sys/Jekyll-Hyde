"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site.config";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const root = document.documentElement;
        const { colors, fonts } = siteConfig.theme;

        // Apply colors
        root.style.setProperty("--background", colors.background);
        root.style.setProperty("--foreground", colors.foreground);
        root.style.setProperty("--accent-red", colors.accentRed);
        root.style.setProperty("--accent-gold", colors.accentGold);

        // Apply fonts (if needed, though fonts are usually handled by Next.js font loader)
        // We keep the font variables consistent with what layout.tsx provides
    }, []);

    return <>{children}</>;
}
