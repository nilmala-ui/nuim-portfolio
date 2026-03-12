import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "NuiM | Digital Artist & UI Designer",
    description: "Personal portfolio of NuiM - Digital Artist & UI Designer.",
};

import { GrainOverlay } from "@/components/ui/grain-overlay";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { Preloader } from "@/components/ui/preloader";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { ScrollRestoration } from "@/components/ui/scroll-restoration";

import { BlurredBackground } from "@/components/ui/blurred-background";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-[#0a0a0a] text-white font-sans antialiased md:cursor-none",
                    GeistSans.variable,
                    GeistMono.variable,
                    playfair.variable
                )}
            >
                <BlurredBackground />
                <GrainOverlay />
                <Preloader />
                <CustomCursor />
                <SpotlightCursor />
                <ScrollRestoration />
                {children}
            </body>
        </html>
    );
}
