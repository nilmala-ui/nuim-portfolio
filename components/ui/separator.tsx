"use client";

import { motion } from "framer-motion";

export function Separator() {
    return (
        <div className="w-full overflow-hidden flex items-center h-16 relative py-4 border-y border-white/5 bg-transparent">
            {/* The infinite marquee container */}
            <motion.div
                className="flex whitespace-nowrap min-w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 15,
                        ease: "linear",
                    },
                }}
            >
                {/* 
                  Render the text group twice so that we can pan the container by 50% continuously.
                */}
                <div className="flex shrink-0">
                    {[...Array(4)].map((_, i) => (
                        <span
                            key={i}
                            className="text-sm uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#94A3B8]/40 to-[#94A3B8]/10 px-4 flex-shrink-0"
                        >
                            ✦ NuiM ✦ DIGITAL ART ✦ UI DESIGN ✦ BRANDING
                        </span>
                    ))}
                </div>
                <div className="flex shrink-0">
                    {[...Array(4)].map((_, i) => (
                        <span
                            key={i + 4}
                            className="text-sm uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#94A3B8]/40 to-[#94A3B8]/10 px-4 flex-shrink-0"
                        >
                            ✦ NuiM ✦ DIGITAL ART ✦ UI DESIGN ✦ BRANDING
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
