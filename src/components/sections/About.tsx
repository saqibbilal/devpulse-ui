"use client";

import { ArrowRight } from "lucide-react";

export default function About() {
    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            {/* The Asymmetrical Container: Flush to Left, Rounded on Right */}
            <div className="mr-6 lg:mr-24 bg-gray-50 rounded-r-[4rem] md:rounded-r-[8rem] p-12 md:p-24 relative shadow-sm border-y border-r border-gray-100">

                {/* Content stays aligned to your max-width grid logic */}
                <div className="max-w-7xl ml-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Watermark & Headings */}
                    <div className="relative">
                        <h3 className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-gray-200/60 select-none -ml-4 md:-ml-12 mb-[-2rem] md:mb-[-4rem]">
                            ABOUT
                        </h3>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-6 relative z-10">
                            The Narrative
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-gray-900 relative z-10">
                            Bridging Logic <br />
                            <span className="text-brand-primary italic font-light">& Creativity.</span>
                        </h3>
                    </div>

                    {/* Right Side: Copy & CTA */}
                    <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                        <p>
                            I&apos;m a software engineer based in **Markham** with a unique vantage point. My journey isn&apos;t just about syntax; it&apos;s about the &quot;Maker&quot; mindset.
                        </p>
                        <p>
                            Whether I&apos;m architecting **decoupled Laravel APIs** or managing the precision of my home bakery, **Honeywhisk**, I focus on one thing: **Consistency**.
                        </p>

                        <div className="pt-8">
                            <button
                                onClick={scrollToContact}
                                className="group text-lg font-bold text-black flex items-center gap-3 cursor-pointer outline-none"
                            >
                                <span className="border-b-2 border-black group-hover:text-brand-primary group-hover:border-brand-primary transition-all pb-1">
                                    Let&apos;s build something steady
                                </span>
                                <ArrowRight size={20} className="text-brand-primary group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}