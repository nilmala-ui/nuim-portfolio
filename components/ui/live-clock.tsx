"use client";

import { useState, useEffect } from "react";

export function LiveClock() {
    const [time, setTime] = useState<string>("00:00:00");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }).split(':').join(' : ');
            setTime(timeStr);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center gap-3 text-white/60 font-mono tracking-widest text-xs md:text-sm">
                <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white/20"></span>
                </span>
                <span>[ 00 : 00 : 00 ]</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3 text-white/60 font-mono tracking-widest text-xs md:text-sm uppercase bg-transparent">
            {/* Pulsing Dot */}
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white/60"></span>
            </span>
            <span>[ {time} ]</span>
        </div>
    );
}
