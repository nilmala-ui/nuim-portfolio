"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-12 md:py-16 relative z-10 scroll-mt-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.h2
                    className="mb-12 text-3xl font-bold md:text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6 }}
                >
                    Nil Mala
                </motion.h2>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">

                    {/* Card 1: Main Bio (Spans 2 columns on desktop) */}
                    <motion.div
                        className="md:col-span-2 group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 hover:bg-white/10 flex flex-col justify-center transform-gpu translate-z-0 will-change-transform">
                            <h3 className="text-2xl font-bold mb-6 text-white/50 uppercase tracking-wider text-sm">Profile</h3>
                            <div className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight space-y-6 text-white">
                                <p>
                                    I am a digital artist and UI designer building <span className="text-blue-400">immersive digital experiences</span>.
                                </p>
                                <p className="text-muted-foreground text-xl md:text-2xl">
                                    My work blends the clinical precision of interface design with the chaotic, vibrant beauty of cyberpunk aesthetics.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Visual Anchor (Square portrait/art) */}
                    <motion.div
                        className="md:col-span-1 group h-[400px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <div className="relative h-full w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-[inset_0_0_80px_rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[inset_0_0_100px_rgba(124,58,237,0.3)] hover:border-violet-500/50 transform-gpu translate-z-0 will-change-transform">
                            {/* Inner NuiM Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-violet-600/10 z-10 pointer-events-none" />
                            <Image
                                src="/me.jpg" // Restored user portrait
                                alt="Nil Mala"
                                fill
                                className="object-cover z-0 transition-transform duration-700 group-hover:scale-110 translate-z-0"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
