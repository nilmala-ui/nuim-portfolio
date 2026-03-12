"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

import { motion } from "framer-motion";

export default function Work() {
    return (
        <section id="work" className="py-24 md:py-32 relative z-10 w-full overflow-hidden scroll-mt-24">
            {/* Creative Filler: Deep Violet & Electric Azure background blur to tie sections together */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] bg-gradient-to-l from-blue-600/10 to-violet-600/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none -z-10 transform-gpu translate-z-0 will-change-transform" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 dark:text-white tracking-tighter">
                        Selected Work
                    </h2>
                </motion.div>

                {/* Staggered Editorial Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    {PROJECTS.map((project, index) => {
                        // Apply a severe staggered rhythm
                        const isEven = index % 2 === 0;
                        const staggerClass = !isEven ? "md:mt-32" : "";

                        return (
                            <motion.div
                                key={index}
                                className={`relative w-full ${staggerClass}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Link href={`/work/${project.slug}`} className="block group">
                                    <div className="w-full relative overflow-hidden bg-black/5 dark:bg-white/5">
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            priority={false}
                                            width={1200}
                                            height={800}
                                            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] translate-z-0"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>

                                    {/* Stark, Technical Metadata */}
                                    <div className="mt-6 flex flex-col gap-1 font-sans">
                                        <div className="text-xs tracking-widest uppercase text-slate-500 dark:text-white/50">
                                            [ {String(index + 1).padStart(2, '0')} ] — {project.title}
                                        </div>
                                        <div className="text-sm text-slate-800 dark:text-white/80 font-medium tracking-wide">
                                            {project.category}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
