"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}>
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="group flex items-center justify-center w-14 h-14 bg-gray-300 text-gray-900 rounded-full shadow-2xl border border-gray-100 hover:bg-gray-500 hover:text-white transition-all duration-300"
            >
                <ChevronUp
                    size={24}
                    strokeWidth={2.5}
                    className="group-hover:-translate-y-1 transition-transform duration-300"
                />

                {/* Subtle Brand Accent Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-brand-primary/20 scale-110 transition-transform duration-500" />
            </button>
        </div>
    );
}