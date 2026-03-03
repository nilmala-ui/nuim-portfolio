"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LightboxProps {
    isOpen: boolean;
    imageSrc: string;
    altText?: string;
    onClose: () => void;
}

export function Lightbox({ isOpen, imageSrc, altText = "Image", onClose }: LightboxProps) {
    const [scale, setScale] = useState(1);

    // Reset scale when image changes or lightbox opens
    useEffect(() => {
        setScale(1);
    }, [isOpen, imageSrc]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    {/* Controls */}
                    <div className="absolute top-4 right-4 flex gap-4 z-50">
                        <button
                            onClick={(e) => { e.stopPropagation(); setScale(s => Math.max(1, s - 0.5)); }}
                            className="p-2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                            <ZoomOut className="w-6 h-6" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setScale(s => Math.min(4, s + 0.5)); }}
                            className="p-2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                            <ZoomIn className="w-6 h-6" />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Image Container */}
                    <motion.div
                        className="relative w-full h-full flex items-center justify-center overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => {
                            e.stopPropagation();
                            setScale((s) => {
                                const newScale = s - e.deltaY * 0.005;
                                return Math.min(Math.max(newScale, 0.5), 4);
                            });
                        }}
                    >
                        <motion.div
                            drag
                            dragConstraints={{ left: -scale * 200, right: scale * 200, top: -scale * 200, bottom: scale * 200 }}
                            onDragEnd={(e, info) => {
                                // Swipe to dismiss on mobile
                                if (scale === 1 && Math.abs(info.offset.y) > 100) {
                                    onClose();
                                }
                            }}
                            animate={{ scale: scale }}
                            className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
                            style={{ cursor: scale > 1 ? "grab" : "default" }}
                        >
                            <Image
                                src={imageSrc}
                                alt={altText}
                                fill
                                className="object-contain"
                                quality={100}
                                draggable={false}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
