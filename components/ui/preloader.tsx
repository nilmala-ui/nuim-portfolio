"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Disable scroll when loading
        document.body.style.overflow = "hidden";

        // Counter animation
        const interval = setInterval(() => {
            setCounter((prev) => {
                const next = prev + Math.floor(Math.random() * 10) + 1;
                if (next >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return next;
            });
        }, 50);

        // Completion timeout
        const timeout = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
        }, 2200);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="flex flex-col items-center gap-4 font-mono">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground"
                        >
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            System Initializing...
                        </motion.div>

                        <h1 className="text-8xl font-black tracking-tighter">
                            {counter}%
                        </h1>

                        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                            <motion.div
                                className="h-full bg-white"
                                style={{ width: `${counter}%` }}
                            />
                        </div>

                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] text-white/30 uppercase tracking-[0.5em]">
                            NuiM Portfolio v2.0
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
