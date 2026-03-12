"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { LiveClock } from "@/components/ui/live-clock";
import { AmbientMesh } from "@/components/ui/ambient-mesh";
import { useLenis } from "lenis/react";

export function Hero() {
    const lenis = useLenis();

    const scrollToStrategy = (hash: string) => {
        if (lenis) {
            lenis.scrollTo(hash);
        } else {
            document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className="relative flex h-screen w-full flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24 text-left"
        >
            {/* Layer 1: The Texture - "Blueprint Grid" */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

            {/* Layer 2: The Light - "Fluid Ambient Mesh" */}
            <AmbientMesh />

            {/* Architectural Elements (Metadata) */}
            <div className="absolute top-10 right-10 text-xs font-sans tracking-widest text-slate-500 dark:text-white/50 z-10 hidden md:block">
                [ VISUAL SYSTEMS ]
            </div>
            <div className="absolute bottom-[30%] left-6 text-xs font-sans tracking-widest text-slate-500 dark:text-white/50 z-10 origin-left -rotate-90 hidden md:block">
                SYS.01 // OVERHAUL
            </div>
            <div className="absolute top-1/2 right-6 text-xs font-sans tracking-widest text-slate-500 dark:text-white/50 z-10 origin-right rotate-90 hidden md:block">
                [ EST. 2026 ]
            </div>

            {/* Main Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 relative mt-20 md:mt-0"
            >
                <h1 className="mb-6 text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.9] font-serif font-bold tracking-tighter text-slate-900 dark:text-white flex flex-row items-baseline">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#3B82F6] to-[#7C3AED]">
                        N
                    </span>
                    <span>uiM</span>
                </h1>

                <div className="max-w-md space-y-4 font-sans text-left">
                    <TextReveal
                        text="Forging Digital Identities."
                        className="text-2xl font-light text-slate-700 dark:text-muted-foreground md:text-3xl transition-colors"
                    />
                    <TextReveal
                        text="Specialized in High-End UI & Visual Systems."
                        className="text-lg text-slate-500 dark:text-white/50 transition-colors"
                        delay={0.5}
                    />
                </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="z-10 mt-12 flex flex-col sm:flex-row items-start gap-4 relative font-sans"
            >
                {/* Primary CTA */}
                <MagneticButton
                    className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 text-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                    onClick={() => scrollToStrategy('#work')}
                >
                    <span className="relative z-10 font-semibold tracking-wide">View Selected Work</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                </MagneticButton>

                {/* Secondary CTA */}
                <MagneticButton
                    className="group flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 text-white transition-all hover:bg-white/10 hover:border-white/40 transform-gpu translate-z-0 will-change-transform"
                    onClick={() => scrollToStrategy('#contact')}
                >
                    <span className="font-medium tracking-wide">Start a Project</span>
                </MagneticButton>
            </motion.div>

            {/* Premium Typography Clock */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <LiveClock />
            </div>
        </section>
    );
}
