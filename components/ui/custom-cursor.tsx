"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if the target or its parents should trigger hover scale
            if (target.closest('a') || target.closest('button') || target.closest('.cursor-zoom-in') || target.closest('.group')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Spring physics configuration for a fluid trailing motion
    const springConfig = { type: "spring", stiffness: 150, damping: 15, mass: 0.5 };

    return (
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center transform-gpu"
            animate={{
                x: mousePosition.x - 6, // Offset by half width
                y: mousePosition.y - 6, // Offset by half height
                scale: isHovering ? 3 : 1,
            }}
            transition={springConfig}
        >
            {/* Optional dot inside - expands when hovering */}
            {isHovering && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-1 h-1 bg-black rounded-full"
                />
            )}
        </motion.div>
    );
}
