"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function SpotlightCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className={cn(
                "pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hidden md:block"
            )}
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                willChange: "transform",
            }}
        >
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl"></div>
        </motion.div>
    );
}
