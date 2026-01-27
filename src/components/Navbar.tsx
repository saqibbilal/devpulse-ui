'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHome = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (isHome) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/');
        }
    };

    const handleNavigation = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // No timeout needed now because the layout doesn't shift!
        if (isHome) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(`/#${id}`);
        }
    };

    const isSolid = isScrolled || !isHome || isMobileMenuOpen;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
            isSolid ? 'bg-white shadow-sm py-5' : 'bg-transparent py-5 md:py-8'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={handleHome}
                    className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                        isSolid ? 'text-brand-primary' : 'text-white'
                    }`}
                >
                    MBilal
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    {/* Desktop Links */}
                    <div className={`hidden lg:flex gap-8 font-medium transition-colors duration-500 ${
                        isSolid ? 'text-brand-dark' : 'text-white'
                    }`}>
                        <a href="#" onClick={handleHome} className="hover:opacity-70 cursor-pointer">Home</a>
                        <a href="#SkillsGrid" onClick={(e) => handleNavigation(e, 'SkillsGrid')} className="hover:opacity-70 cursor-pointer">TechStack</a>
                        <a href="#work" onClick={(e) => handleNavigation(e, 'work')} className="hover:opacity-70 cursor-pointer">Work</a>
                        <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="hover:opacity-70 cursor-pointer">About</a>
                    </div>

                    <button
                        onClick={(e) => handleNavigation(e, 'contact')}
                        className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-500 ${
                            isSolid ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary shadow-lg hover:scale-105'
                        }`}
                    >
                        Let&apos;s Talk
                    </button>

                    {/* Animated Hamburger */}
                    <button className="lg:hidden p-2 outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 transition-all duration-300 ${isSolid ? 'bg-brand-dark' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 transition-all duration-300 ${isSolid ? 'bg-brand-dark' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 transition-all duration-300 ${isSolid ? 'bg-brand-dark' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY MENU - Fixed to absolute to prevent layout shift */}
            <div className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out lg:hidden grid ${
                isMobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
            }`}>
                <div className="overflow-hidden">
                    <div className="flex flex-col p-8 gap-8 border-t border-gray-50">
                        <a href="#" onClick={handleHome} className="text-brand-dark text-2xl font-black tracking-tighter hover:text-brand-primary transition-colors uppercase">Home</a>
                        <a href="#SkillsGrid" onClick={(e) => handleNavigation(e, 'SkillsGrid')} className="text-brand-dark text-2xl font-black tracking-tighter hover:text-brand-primary transition-colors uppercase">Tech Stack</a>
                        <a href="#work" onClick={(e) => handleNavigation(e, 'work')} className="text-brand-dark text-2xl font-black tracking-tighter hover:text-brand-primary transition-colors uppercase">Work</a>
                        <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="text-brand-dark text-2xl font-black tracking-tighter hover:text-brand-primary transition-colors uppercase">About</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}