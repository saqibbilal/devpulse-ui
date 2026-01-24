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

    // Senior Navigation Logic: Smooth scroll on home, Redirect + Anchor on sub-pages
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
        e.preventDefault();

        if (isHome) {
            // We are on Home: Smooth scroll to the section
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // We are on a Sub-page: Navigate home first with the hash
            router.push(`/#${id}`);
        }

        setIsMobileMenuOpen(false);
    };

    // Determine if the navbar should be "solid" (scrolled or not on home)
    const isSolid = isScrolled || !isHome;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            isSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-5 md:py-8'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link
                    href="/"
                    className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${
                        isSolid ? 'text-brand-primary' : 'text-white'
                    }`}
                >
                    DevPulse
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    {/* Desktop Links */}
                    <div className={`hidden lg:flex gap-8 font-medium transition-colors duration-500 ${
                        isSolid ? 'text-brand-dark' : 'text-white'
                    }`}>
                        <Link href="/" className="hover:opacity-70">Home</Link>
                        <a
                            href="#SkillsGrid"
                            onClick={(e) => handleNavigation(e, 'SkillsGrid')}
                            className="hover:opacity-70 cursor-pointer"
                        >
                            TechStack
                        </a>
                        <a
                            href="#work"
                            onClick={(e) => handleNavigation(e, 'work')}
                            className="hover:opacity-70 cursor-pointer"
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => handleNavigation(e, 'about')}
                            className="hover:opacity-70 cursor-pointer"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavigation(e, 'contact')}
                            className="hover:opacity-70 cursor-pointer"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Let's Talk Button */}
                    <button
                        onClick={(e) => handleNavigation(e, 'contact')}
                        className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm transition-all duration-500 ${
                            isSolid ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary shadow-lg hover:scale-105'
                        }`}
                    >
                        Let&apos;s Talk
                    </button>

                    {/* Hamburger Button */}
                    <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <span className={`text-2xl ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                          {isMobileMenuOpen ? '✕' : '☰'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
                isMobileMenuOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="flex flex-col p-8 gap-6">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-bold">Home</Link>
                    <a href="#SkillsGrid" onClick={(e) => handleNavigation(e, 'SkillsGrid')} className="text-brand-dark text-lg font-bold">TechStack</a>
                    <a href="#work" onClick={(e) => handleNavigation(e, 'work')} className="text-brand-dark text-lg font-bold">Work</a>
                    <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="text-brand-dark text-lg font-bold">About</a>
                    <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className="text-brand-dark text-lg font-bold text-brand-primary">Contact</a>
                </div>
            </div>
        </nav>
    );
}