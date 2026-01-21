// src/app/projects/[slug]/page.tsx
import { getProjectBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
    // RULE: In Next.js 15, params is a Promise
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
    // 1. Await the params Promise to get the actual value
    const { slug } = await params;

    // 2. Fetch the project using the string slug
    const project = await getProjectBySlug(slug);

    // 3. Trigger 404 if the API returns null
    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* VIBRANT HERO: Using brand-primary for that 'Calvin' pop */}
            <section className="bg-brand-primary pt-32 pb-24 px-6 text-white">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] mb-12 inline-block"
                    >
                        ← Back to Sprints
                    </Link>

                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                        <div className="max-w-3xl">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                                {project.title}
                            </h1>

                            {/* Tech Stack Pills: Glassmorphism style */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack?.map((tech) => (
                                    <span key={tech} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:max-w-md">
                            <p className="text-xl font-light leading-relaxed italic opacity-90">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREVIEW CONTAINER: Using negative margin to create depth */}
            <section className="px-6 -mt-12">
                <div className="max-w-7xl mx-auto">
                    <div className="aspect-video bg-gray-100 rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-white transition-transform duration-700 hover:scale-[1.01]">
                        <img
                            src={project.thumbnail_url}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>


            <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left Column: The Technical Story */}
                <div className="lg:col-span-2 space-y-12">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">The Challenge</h2>
                        <p className="text-2xl text-gray-800 leading-relaxed">{project.detail?.problem_statement}</p>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">The Solution</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">{project.detail?.solution_approach}</p>
                    </div>
                </div>

                {/* Right Column: Links & Features */}
                <div className="space-y-12">
                    {/* Repo Links */}
                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                        <h3 className="font-bold mb-6">Explore the Code</h3>
                        <div className="flex flex-col gap-3">
                            {project.detail?.repository_links.frontend && (
                                <a href={project.detail.repository_links.frontend} target="_blank" className="bg-black text-white text-center py-3 rounded-xl font-bold hover:bg-brand-primary transition-colors">
                                    Frontend (Next.js)
                                </a>
                            )}
                            {project.detail?.repository_links.backend && (
                                <a href={project.detail.repository_links.backend} target="_blank" className="bg-white border border-gray-200 text-black text-center py-3 rounded-xl font-bold hover:border-black transition-colors">
                                    Backend (Laravel)
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Feature Highlights */}
                    <div>
                        <h3 className="font-bold mb-4 uppercase tracking-tighter text-gray-400">Key Features</h3>
                        <ul className="space-y-2">
                            {project.detail?.feature_highlights.map(feature => (
                                <li key={feature} className="flex items-center gap-2 text-gray-700 font-medium">
                                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}