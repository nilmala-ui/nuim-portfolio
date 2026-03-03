"use client";


import { Palette, PenTool, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
    {
        title: "Digital Product & UI Design",
        description: "Crafting intuitive user interfaces and premium digital experiences that perform flawlessly.",
        outputs: ["Web Design", "Mobile App UI", "Design Systems"],
        icon: Monitor,
    },
    {
        title: "Brand Identity & Strategy",
        description: "Building cohesive visual systems that differentiate your brand and tell a compelling story.",
        outputs: ["Visual Strategy", "Logo & Typography", "Brand Guidelines"],
        icon: PenTool,
    },
    {
        title: "Creative Direction & 3D Art",
        description: "Producing unique, high-end digital assets, concept art, and visual narratives.",
        outputs: ["3D Assets", "Custom Illustrations", "Motion Graphics"],
        icon: Palette,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-12 md:py-16 relative z-10 w-full overflow-hidden scroll-mt-24">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="mb-20 text-4xl font-bold md:text-6xl text-center text-slate-900 dark:text-white transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6 }}
                >
                    Core Capabilities
                </motion.h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative h-[500px] w-full rounded-[2rem] bg-black/40 backdrop-blur-2xl p-px overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >

                            {/* Spotlight Hover Border Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Inner Card content container masking border */}
                            <div className="relative h-full w-full rounded-[2rem] bg-black/60 backdrop-blur-3xl p-10 flex flex-col items-start justify-between z-10 overflow-hidden">

                                {/* Inner Top Highlight (Glass Edge) */}
                                <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none" />

                                <div className="relative z-20 w-full">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_50px_rgba(124,58,237,0.4)] transition-all duration-500 group-hover:scale-110">
                                        <service.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-400 transition-all duration-500">{service.title}</h3>

                                    <p className="mb-6 relative z-20 text-base text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {service.outputs.map((output, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500/50" />
                                                {output}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Ambient Background Glow inside card */}
                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-violet-600/30 transition-colors duration-700 pointer-events-none transform-gpu translate-z-0 will-change-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
