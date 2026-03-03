"use client";

import { useState, useEffect } from "react";

export function LiveClock() {
    const [time, setTime] = useState<string>("00:00:00");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return <>00:00:00</>;
    }

    return <>{time}</>;
}
