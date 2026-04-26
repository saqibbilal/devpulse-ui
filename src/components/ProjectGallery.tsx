"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectImage } from "@/types";

interface ProjectGalleryProps {
    gallery: ProjectImage[];
    thumbnailUrl: string;
    title: string;
}

export default function ProjectGallery({ gallery, thumbnailUrl, title }: ProjectGalleryProps) {
    // 1. Fallback Logic: If gallery is empty, use the thumbnail_url
    const images = gallery && gallery.length > 0
        ? gallery
        : [{ url: thumbnailUrl, name: "Project Thumbnail", order: 0, is_featured: true }];

    const featuredIndex = images.findIndex(img => img.is_featured);
    const initialIndex = featuredIndex !== -1 ? featuredIndex : 0;

    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [direction, setDirection] = useState(0);

    // Wave Attractor Logic
    const [hasInteracted, setHasInteracted] = useState(false);
    const waveControls = useAnimation();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const stopInteraction = () => {
        if (!hasInteracted) {
            setHasInteracted(true);
            if (intervalRef.current) clearInterval(intervalRef.current);
            waveControls.stop();
            waveControls.start("center"); // Ensure it settles at center
        }
    };

    useEffect(() => {
        // Only start if user hasn't interacted yet
        const initialTimeout = setTimeout(() => {
            if (!hasInteracted) {
                // Trigger initial wave
                waveControls.start({
                    x: [0, -30, 30, -15, 15, 0],
                    transition: { duration: 2, ease: "easeInOut" }
                });

                // Setup 12s interval
                intervalRef.current = setInterval(() => {
                    waveControls.start({
                        x: [0, -30, 30, -15, 15, 0],
                        transition: { duration: 2, ease: "easeInOut" }
                    });
                }, 10000);
            }
        }, 3000);

        return () => {
            clearTimeout(initialTimeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [hasInteracted, waveControls]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
            }
        })
    };

    const paginate = (newDirection: number) => {
        const nextIndex = (currentIndex + newDirection + images.length) % images.length;
        setDirection(newDirection);
        setCurrentIndex(nextIndex);
    };

    return (
        <motion.div
            onMouseEnter={stopInteraction}
            onClick={stopInteraction}
            animate={hasInteracted ? { x: 0 } : waveControls}
            className="group relative aspect-video w-full overflow-hidden bg-gray-100 rounded-[1.5rem] md:rounded-[3rem] shadow-2xl border-[6px] md:border-[12px] border-white"
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    dragDirectionLock
                    onDragStart={stopInteraction}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -10000) {
                            paginate(1);
                        } else if (swipe > 10000) {
                            paginate(-1);
                        }
                    }}
                    style={{ touchAction: "pan-y" }}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                    <Image
                        src={images[currentIndex].url || "/placeholder.jpg"}
                        alt={`${title} - ${images[currentIndex].name}`}
                        fill
                        className="object-cover select-none"
                        draggable={false}
                        priority={currentIndex === initialIndex} // Optimization: Priority for the first visible image
                        quality={100}
                        sizes="(max-width: 1280px) 100vw, 1200px"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 active:scale-95 md:left-8 opacity-0 group-hover:opacity-100 border border-white/20"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 active:scale-95 md:right-8 opacity-0 group-hover:opacity-100 border border-white/20"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Indicators (Dots) */}
            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-10 bg-white shadow-lg" : "w-2 bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Slide Counter */}
            {images.length > 1 && (
                <div className="absolute top-6 right-6 z-10 bg-black/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </motion.div>
    );
}
