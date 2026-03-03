"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

const NAV_LINKS = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Works", href: "/#work" },
    { name: "Contact", href: "/#contact" },
];

export function Header() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const lenis = useLenis();

    // Use active state for highlighting
    const [activeLink, setActiveLink] = useState<string | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only intercept if we're dealing with an anchor link and we are currently on the homepage
        // Note: href from our array looks like "/#about"
        const isAnchorLink = href.includes('#');

        if (isAnchorLink) {
            // Check if we are currently on the home page.
            // A robust way without importing next/router in client component during this quick fix
            // is to check window.location.pathname.
            const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

            if (isHomePage) {
                e.preventDefault(); // Stop default jump
                const targetId = href.split('#')[1]; // Extract 'about'
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    if (lenis) {
                        lenis.scrollTo(`#${targetId}`);
                    } else {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }
            // If we are NOT on the homepage, we do NOT prevent the default behavior.
            // We let Next.js naturally route the user to "/" and jump to the hash.
        }
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-[999] flex justify-center w-full pointer-events-none"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <motion.div
                className={cn(
                    "pointer-events-auto flex items-center justify-between rounded-full border transition-all duration-500",
                    "bg-white/70 dark:bg-black/20 backdrop-blur-xl shadow-2xl relative overflow-hidden transform-gpu translate-z-0 will-change-transform",
                    // The inner highlight to give it that physical "glass" feel
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
                    scrolled
                        ? "mt-4 px-4 py-2 md:px-6 w-[calc(100%-2rem)] max-w-[600px] mx-auto border-black/10 dark:border-white/20"
                        : "mt-4 md:mt-6 px-6 py-2.5 md:px-8 md:py-3 w-[calc(100%-2rem)] max-w-[700px] mx-auto border-blue-500/20 dark:border-blue-500/30"
                )}
            >
                {/* Faceted Logo Border Effect (visible always, but more intense when scrolled) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-transparent to-violet-500/20 pointer-events-none z-0" />

                {/* Logo Area */}
                <Link href="/" onClick={(e) => handleScroll(e, '/')} className="relative z-10 flex items-center gap-2 group">
                    <span className="text-xl font-bold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#3B82F6] to-[#7C3AED]">
                            N
                        </span>
                        <span className="text-slate-900 dark:text-white transition-colors duration-300">
                            uiM
                        </span>
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="relative z-10 flex items-center gap-1 sm:gap-2">
                    {NAV_LINKS.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => setActiveLink(link.name)}
                            onMouseLeave={() => setActiveLink(null)}
                        >
                            <Link
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="relative px-3 py-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-sm font-medium text-slate-700 dark:text-white transition-colors hover:text-slate-900 dark:hover:text-white"
                            >
                                <span className="relative z-10">{link.name}</span>

                                {/* Faceted Hover Highlight */}
                                {activeLink === link.name && (
                                    <motion.div
                                        layoutId="header-active-tab"
                                        className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/30 to-violet-500/30 rounded-full border border-white/10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        </div>
                    ))}
                </nav>
            </motion.div>
        </motion.header>
    );
}
