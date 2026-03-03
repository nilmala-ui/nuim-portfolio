"use client";


import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { LiveClock } from "@/components/ui/live-clock";
import { AmbientMesh } from "@/components/ui/ambient-mesh";
import { useLenis } from "lenis/react";

const BADGES = [
    { text: "UI & DIGITAL DESIGN", top: "20%", left: "15%", delay: 0 },
    { text: "VISUAL BRAND SYSTEMS", top: "30%", right: "15%", delay: 2 },
    { text: "3D ART & MOTION", bottom: "35%", left: "25%", delay: 4 },
];

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
            className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
        >
            {/* Layer 1: The Texture - "Blueprint Grid" */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

            {/* Layer 2: The Light - "Fluid Ambient Mesh" */}
            <AmbientMesh />

            {/* Layer 3: Contextual Details - Floating Badges */}
            {BADGES.map((badge, i) => (
                <motion.div
                    key={i}
                    className="hidden md:absolute md:flex items-center justify-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 z-10"
                    style={{
                        top: badge.top,
                        left: badge.left,
                        right: badge.right,
                        bottom: badge.bottom,
                    }}
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: badge.delay,
                    }}
                >
                    <span className="text-[10px] sm:text-xs font-mono tracking-widest text-white/60">
                        {badge.text}
                    </span>
                </motion.div>
            ))}

            {/* Main Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 relative"
            >
                <h1 className="mb-6 text-6xl md:text-8xl lg:text-[10rem] leading-none text-white flex items-center justify-center -ml-4">
                    <span className="font-bold tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#3B82F6] to-[#7C3AED]">
                            N
                        </span>
                        <span className="text-white">
                            uiM
                        </span>
                    </span>
                </h1>

                <div className="max-w-2xl mx-auto space-y-4">
                    <TextReveal
                        text="Forging Digital Identities."
                        className="text-2xl font-light text-muted-foreground md:text-3xl justify-center"
                    />
                    <TextReveal
                        text="Specialized in High-End UI & Visual Systems."
                        className="text-lg text-white/50 justify-center"
                        delay={0.5}
                    />
                </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="z-10 mt-12 flex flex-col sm:flex-row items-center gap-4 relative"
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

            {/* Status Dock Anchor */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transform-gpu translate-z-0 will-change-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-white/80">
                        AVAILABILITY: OPEN
                    </span>
                </div>

                <div className="h-4 w-[1px] bg-white/10" />

                <div className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#3B82F6]">
                        [ LIVE TIME ]
                    </span>
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-white/80 w-[60px] text-right">
                        <LiveClock />
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
