// devpulse-ui/src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5 md:py-8'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link href="/" className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${
                    isScrolled ? 'text-brand-primary' : 'text-white'
                }`}>
                    DevPulse
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    {/* Desktop Links - Visible only on LG screens to prevent 928px overlap */}
                    <div className={`hidden lg:flex gap-8 font-medium transition-colors duration-500 ${
                        isScrolled ? 'text-brand-dark' : 'text-white'
                    }`}>
                        <Link href="/" className="hover:opacity-70">Home</Link>
                        <Link href="#work" className="hover:opacity-70">TechStack</Link>
                        <Link href="#work" className="hover:opacity-70">Work</Link>
                        <Link href="#about" className="hover:opacity-70">About</Link>
                    </div>

                    {/* Let's Talk Button - Scales for mobile */}
                    <button className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-500 ${
                        isScrolled ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary shadow-lg'
                    }`}>
                        Let&apos;s Talk
                    </button>

                    {/* Hamburger - Visible on MD and below (including 928px) */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
            <span className={`text-2xl ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Smooth Slide & Opacity */}
            <div className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
                isMobileMenuOpen ? 'max-h-80 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="flex flex-col p-8 gap-6">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-bold">Home</Link>
                    <Link href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-bold">Work</Link>
                    <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-bold">About</Link>
                </div>
            </div>
        </nav>
    );
}