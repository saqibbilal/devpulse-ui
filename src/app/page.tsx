// export const dynamic = 'force-dynamic'; // Switch to turn on SSR
// export const dynamic = 'force-static'; // Switch to turn on SSG

import { getProjects, getSkills } from "@/lib/api";
import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import About from "@/components/sections/About";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import Contact from "@/components/Contact";

export default async function Home() {
    const [projects, allSkills] = await Promise.all([
        getProjects(),
        getSkills()
    ]);

    const backendSkills = allSkills.filter(s => s.category === 'backend').map(s => s.name);
    const frontendSkills = allSkills.filter(s => s.category === 'frontend').map(s => s.name);
    const tooling = allSkills.filter(s => s.category === 'tools').map(s => s.name);

    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Expertise />

            {/* Technical Arsenal */}
            <section id="SkillsGrid" className="py-24 max-w-7xl mx-auto px-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary block mb-4">Toolbelt</span>
                <h2 className="text-5xl md:text-7xl text-gray-900 font-bold tracking-tighter mb-16">Technical Arsenal</h2>
                <div className="grid grid-cols-1 gap-8">
                    <SkillsGrid title="The Engine (Backend)" skills={backendSkills} />
                    <SkillsGrid title="The Experience (Frontend)" skills={frontendSkills} />
                    <SkillsGrid title="The Tools (DevOps)" skills={tooling} />
                </div>
            </section>

            {/* Work Section */}
            <section id="work" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary block mb-4">Latest Sprints</span>
                            <h2 className="text-5xl md:text-7xl text-gray-900 font-bold tracking-tighter">Selected Projects</h2>
                        </div>
                        <p className="text-gray-500 max-w-xs font-light text-lg">Decoupled applications built with Laravel 11 and Next.js 15.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <About />
            <Contact />

            {/* Footer */}
            <footer className="bg-brand-primary py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white/90">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-60">Focus</p>
                        <p className="text-xl font-bold">Headless APIs & Scalable Apps</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-60">Base</p>
                        <p className="text-xl font-bold">Markham, ON, Canada</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-60">Direct</p>
                        <p className="text-xl font-bold underline decoration-white/30">saqib_bilal786@yahoo.com</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}