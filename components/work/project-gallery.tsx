"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/ui/lightbox";
import { motion } from "framer-motion";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    // Split images for masonry columns (3 columns for desktop)
    // This is a simple JS-based distribution for true masonry feel
    const columns = [[], [], []] as string[][];
    images.forEach((img, i) => {
        columns[i % 3].push(img);
    });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[0, 1, 2].map((colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-6">
                        {/* Filter images belonging to this column based on original index */}
                        {images.filter((_, i) => i % 3 === colIndex).map((image, i) => {
                            // Find the original index for the lightbox
                            const originalIndex = images.indexOf(image);

                            return (
                                <motion.div
                                    key={originalIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "0px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group relative w-full rounded-xl overflow-hidden cursor-zoom-in border border-white/10 bg-white/5"
                                    onClick={() => openLightbox(originalIndex)}
                                >
                                    <Image
                                        src={image}
                                        alt={`${title} - ${originalIndex + 1}`}
                                        priority={false}
                                        width={1200}
                                        height={800}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </motion.div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <Lightbox
                isOpen={lightboxIndex !== null}
                imageSrc={lightboxIndex !== null ? images[lightboxIndex] : ""}
                altText={`${title} - Detail`}
                onClose={closeLightbox}
            />
        </>
    );
}
