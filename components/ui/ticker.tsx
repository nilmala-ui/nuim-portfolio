"use client";

import { motion } from "framer-motion";

export function Ticker({ text, direction = 1 }: { text: string; direction?: number }) {
    return (
        <div className="flex overflow-hidden whitespace-nowrap py-2 select-none opacity-50">
            <motion.div
                className="flex min-w-full gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground"
                animate={{ x: direction * -100 + "%" }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            >
                {Array(10).fill(text).map((item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </motion.div>
            <motion.div
                className="flex min-w-full gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground"
                animate={{ x: direction * -100 + "%" }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            >
                {Array(10).fill(text).map((item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </motion.div>
        </div>
    );
}
