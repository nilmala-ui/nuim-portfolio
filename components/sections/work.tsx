"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

import { motion } from "framer-motion";

export default function Work() {
    return (
        <section id="work" className="py-12 md:py-16 relative z-10 w-full overflow-hidden scroll-mt-24">
            {/* Creative Filler: Deep Violet & Electric Azure background blur to tie sections together */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] bg-gradient-to-l from-blue-600/10 to-violet-600/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none -z-10 transform-gpu translate-z-0 will-change-transform" />

            <div className="container mx-auto px-6">
                <motion.h2
                    className="mb-12 text-3xl font-bold md:text-5xl text-slate-900 dark:text-white transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6 }}
                >
                    Selected Work
                </motion.h2>

                {/* Immersive Asymmetrical Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[400px]">
                    {PROJECTS.map((project, index) => {
                        // Create an asymmetrical layout pattern based on index
                        let spanClass = "md:col-span-1 lg:col-span-1";
                        if (index % 4 === 0) spanClass = "md:col-span-2 lg:col-span-2";
                        if (index % 4 === 3) spanClass = "md:col-span-2 lg:col-span-2";

                        return (
                            <motion.div
                                key={index}
                                className={`relative h-full w-full ${spanClass}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <Link href={`/work/${project.slug}`} className="block h-full w-full">
                                    {/* 
                                     Applying hardware-accelerated 2D hover states for a premium, performant feel. 
                                    */}
                                    <div className="h-full w-full overflow-hidden rounded-3xl border border-white/10 group cursor-pointer bg-black/20 transition-all duration-500 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] will-change-transform">

                                        {/* Background Artwork - Full Fill */}
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            priority={false}
                                            width={1200}
                                            height={800}
                                            className="w-full h-full object-cover transition-all duration-700 brightness-75 group-hover:brightness-110 group-hover:scale-105 translate-z-0"
                                            sizes={spanClass.includes("col-span-2") ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                                        />

                                        {/* Hover Overlay Gradient for Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Frosted Glass Info Banner (Always visible on mobile, slides up on hover on desktop) */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transform-gpu translate-z-0 will-change-transform">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                                    {project.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="text-sm font-medium text-blue-300">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-white/30">•</span>
                                                    <span className="text-sm text-white/70">
                                                        View Case Study &rarr;
                                                    </span>
                                                </div>
                                            </div>
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
