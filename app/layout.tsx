import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-[#0a0a0a] text-white font-sans antialiased",
                    GeistSans.variable,
                    GeistMono.variable
                )}
            >
                <BlurredBackground />
                <GrainOverlay />
                <Preloader />
                <SpotlightCursor />
                <ScrollRestoration />
                {children}
            </body>
        </html>
    );
}
