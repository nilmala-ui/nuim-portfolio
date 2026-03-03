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
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white font-sans antialiased transition-colors duration-300",
                    GeistSans.variable,
                    GeistMono.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <BlurredBackground />
                    <GrainOverlay />
                    <Preloader />
                    <SpotlightCursor />
                    <ScrollRestoration />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
