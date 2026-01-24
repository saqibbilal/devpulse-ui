export const dynamic = 'force-dynamic';

import { getProjects, getSkills } from "@/lib/api";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import { Github, Linkedin, FileText, Shield, Code, Cloud, Zap } from "lucide-react";

export default async function Home() {

    // Fetching both in parallel for speed
    const [projects, allSkills] = await Promise.all([
        getProjects(),
        getSkills()
    ]);

    // Filter skills by category (we'll set these up in Laravel next)
    const backendSkills = allSkills.filter(s => s.category === 'backend').map(s => s.name);
    const frontendSkills = allSkills.filter(s => s.category === 'frontend').map(s => s.name);
    const tooling = allSkills.filter(s => s.category === 'tools').map(s => s.name);

    return (
        <main className="min-h-screen">
            {/* VIBRANT CALVIN HERO - Using flex-col and padding to prevent vertical overlap */}
            <section id="hero" className="bg-brand-primary min-h-[100vh] flex flex-col justify-center px-6 relative overflow-hidden pt-32 pb-16 lg:pt-20">

                {/* Background Ray Effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,white_0%,transparent_70%)]"></div>
                </div>

                <div className="z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left: Identity Section */}
                    <div className="text-white text-center lg:text-left order-2 lg:order-1">
                        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium mb-3 md:mb-6 tracking-widest opacity-90 uppercase">
                            Senior Full Stack Developer
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] lg:leading-[0.9] mb-6 lg:mb-10 tracking-tighter">
                            Architecting <br />
                            <span className="text-brand-accent/80">Decoupled</span> <br />
                            Systems.
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12 leading-relaxed opacity-95">
                            Specializing in **API-First Laravel** backends and high-performance **Next.js 15** frontends.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10">
                            {/* Primary Action: Resume */}
                            <a
                                href="/path-to-your-resume.pdf"
                                target="_blank"
                                className="flex items-center gap-2 bg-white border border-gray-100 text-gray-600 hover:text-brand-primary hover:border-brand-primary px-4 py-4 rounded-full font-bold transition-all shadow-sm hover:shadow-md"
                            >
                                <FileText size={20} />
                                View My Resume
                            </a>

                            {/* Secondary Actions: Social Hub */}
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://github.com/your-username"
                                    target="_blank"
                                    className="p-4 bg-white border border-gray-100 rounded-full text-gray-600 hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm hover:shadow-md"
                                    title="GitHub Profile"
                                >
                                    <Github size={24} strokeWidth={1.5} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/your-profile"
                                    target="_blank"
                                    className="p-4 bg-white border border-gray-100 rounded-full text-gray-600 hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm hover:shadow-md"
                                    title="LinkedIn Profile"
                                >
                                    <Linkedin size={24} strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right: Circle Section - Scaled for short viewports */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-[380px] lg:h-[380px] xl:w-[500px] xl:h-[500px] transition-all duration-500">
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full border-[6px] lg:border-[12px] border-white/20 p-2 lg:p-4 flex items-center justify-center">
                                <div className="w-full h-full rounded-full bg-white/10 border-2 lg:border-4 border-white overflow-hidden shadow-2xl flex items-center justify-center">
                                    <span className="text-3xl lg:text-9xl font-bold text-white/40">MBB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="expertise" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Header */}
                    <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary block mb-4">
                Professional Focus
            </span>
                        <h2 className="text-4xl md:text-6xl text-gray-900 font-bold tracking-tighter">
                            My Expertise
                        </h2>
                    </div>

                    {/* The Grid with Cross-Border Lines */}
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Box 1: Architecture */}
                        <div className="p-12 border-b border-gray-100 md:border-r hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 group">
                            <div className="space-y-6">
                                <div className="w-12 h-12 text-gray-400 group-hover:text-brand-primary transition-colors">
                                    <Shield size={48} strokeWidth={1.5} /> {/* Replaces broken img */}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Architecture & Scalability</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Designing decoupled systems using Laravel and Next.js that are built to grow.
                                </p>
                                <span className="inline-block text-sm font-medium text-brand-primary border-b border-brand-primary/30 pb-1">
                System Architect at DevPulse
            </span>
                            </div>
                        </div>

                        {/* Box 2: Engineering */}
                        <div className="p-12 border-b border-gray-100 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 group">
                            <div className="space-y-6">
                                <div className="w-12 h-12 text-gray-400 group-hover:text-brand-primary transition-colors">
                                    <Code size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">End-to-End Engineering</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Full-cycle development from frontend interactivity to backend logic and AWS deployment.
                                </p>
                                <span className="inline-block text-sm font-medium text-brand-primary border-b border-brand-primary/30 pb-1">
                Full Stack Developer
            </span>
                            </div>
                        </div>

                        {/* Box 3: Cloud */}
                        <div className="p-12 border-b border-gray-100 md:border-b-0 md:border-r hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 group">
                            <div className="space-y-6">
                                <div className="w-12 h-12 text-gray-400 group-hover:text-brand-primary transition-colors">
                                    <Cloud size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Cloud Infrastructure</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Deploying and managing scalable environments on AWS utilizing App Runner and RDS.
                                </p>
                                <span className="inline-block text-sm font-medium text-brand-primary border-b border-brand-primary/30 pb-1">
                AWS Cloud Practitioner
            </span>
                            </div>
                        </div>

                        {/* Box 4: Performance */}
                        <div className="p-12 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 group">
                            <div className="space-y-6">
                                <div className="w-12 h-12 text-gray-400 group-hover:text-brand-primary transition-colors">
                                    <Zap size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Performance Optimization</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Tuning Laravel APIs and React components to ensure low latency and high performance.
                                </p>
                                <span className="inline-block text-sm font-medium text-brand-primary border-b border-brand-primary/30 pb-1">
                Backend PHP Engineer
            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*{ The SkillsGrid section }*/}
            {/* 1. Use mx-auto to center the entire block on the screen */}
            <div id="SkillsGrid" className="py-8 max-w-7xl my-10 mx-auto px-6">

                <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
                        Toolbelt
                    </span>
                </div>
                {/* 2. Center the text heading */}
                <div className="mb-6">
                    <h2 className="text-4xl md:text-6xl text-gray-800 font-bold tracking-tighter">
                        My Technical Arsenal
                    </h2>
                </div>


                {allSkills.length > 0 ? (
                    /* 3. Grid handles the columns; no need for flex classes here */
                    <div className="grid grid-cols-1 gap-5">
                        <SkillsGrid title="The Engine (Backend)" skills={backendSkills} />
                        <SkillsGrid title="The Experience (Frontend)" skills={frontendSkills} />
                        <SkillsGrid title="The Tools (DevOps)" skills={tooling} />
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-400 italic text-sm">Skills are being synchronized...</p>
                    </div>
                )}




            </div>

            {/* Projects Grid Container */}
            {/* Latest Sprints Section */}
            <section id="work" className="py-10 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h4 className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Latest Sprints</h4>
                        <h2 className="text-5xl text-gray-800 font-bold tracking-tighter">Selected Projects</h2>
                    </div>
                    <p className="text-gray-400 max-w-xs text-right hidden md:block">
                        A collection of decoupled applications built with Laravel 11 and Next.js 15.
                    </p>
                </div>

                {/* The Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>


            {/* THE STORY SECTION with Interactive Background */}
            <section id="about" className="py-24 overflow-hidden">
                {/* The Asymmetrical Container: Flush to Left, Rounded on Right */}
                <div className="mr-6 lg:mr-24 bg-[#F8F8F8] rounded-r-[3rem] md:rounded-r-[6rem] p-12 md:p-24 relative">

                    {/* Content stays aligned to your max-width grid logic */}
                    <div className="max-w-7xl ml-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">
                                The Narrative
                            </h2>
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-gray-900">
                                Bridging Logic <br />
                                <span className="text-brand-primary">& Creativity.</span>
                            </h3>
                        </div>

                        <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                            <p>
                                I&apos;m a software engineer based in **Markham** with a unique vantage point. My journey isn&apos;t just about syntax; it&apos;s about the &quot;Maker&quot; mindset.
                            </p>
                            <p>
                                Whether I&apos;m architecting **decoupled Laravel APIs** or managing the precision of my home bakery, **Honeywhisk**, I focus on one thing: **Consistency**.
                            </p>
                            <p>
                                From running a YouTube channel for kids to deploying to AWS, I thrive where technical complexity meets clear communication.
                            </p>
                            <div className="pt-8">
                                <a href="mailto:your-email@example.com" className="text-lg font-bold text-black border-b-2 border-black hover:text-brand-primary hover:border-brand-primary transition-all pb-1">
                                    Let’s build something steady →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FOOTER INFO (From Calvin) */}
            <section className="bg-brand-primary border-t border-white/10 py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
                    <div>
                        <p className="text-xs uppercase tracking-widest mb-2 font-bold">Specialization</p>
                        <p className="text-lg font-medium">Headless APIs & Web Apps</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest mb-2 font-bold">Location</p>
                        <p className="text-lg font-medium">Markham, Ontario, Canada</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest mb-2 font-bold">Contact</p>
                        <p className="text-lg font-medium underline decoration-white/30">saqib_bilal786@yahoo.com</p>
                    </div>
                </div>
            </section>

        </main>
    );
}