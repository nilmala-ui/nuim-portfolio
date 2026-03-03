"use client";

import { useEffect } from "react";

export function ScrollRestoration() {
    useEffect(() => {
        // Disable browser's native scroll restoration
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Force scroll to top on mount (page refresh)
        window.scrollTo(0, 0);
    }, []);

    return null;
}
