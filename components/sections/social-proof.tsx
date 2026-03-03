"use client";

import { motion } from "framer-motion";

export function SocialProof() {
    return (
        <section className="relative z-10 w-full border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden backdrop-blur-md">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 whitespace-nowrap text-center md:text-left">
                        Trusted by industry leaders
                    </p>
                    {/* Infinite Marquee for Logos/Brand Names */}
                    <div className="relative flex w-full overflow-hidden mask-image-linear-edges">
                        <motion.div
                            className="flex items-center gap-16 whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* Duplicate group to create seamless loop */}
                            <div className="flex items-center gap-16 shrink-0">
                                {["NuiM Wear", "Vertex AI", "Design Ops", "Neo Studio", "Framer Labs"].map((brand, i) => (
                                    <span key={i} className="text-xl font-bold text-white/20 uppercase tracking-widest px-4">
                                        {brand}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-16 shrink-0">
                                {["NuiM Wear", "Vertex AI", "Design Ops", "Neo Studio", "Framer Labs"].map((brand, i) => (
                                    <span key={i + 5} className="text-xl font-bold text-white/20 uppercase tracking-widest px-4">
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
