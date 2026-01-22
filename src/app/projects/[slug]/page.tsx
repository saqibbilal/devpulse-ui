// src/app/projects/[slug]/page.tsx
import { getProjectBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
            {/* VIBRANT HERO: Responsive padding and text alignment */}
            <section className="bg-brand-primary pt-24 pb-20 md:pt-32 md:pb-24 px-6 text-white">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] mb-8 md:mb-12 inline-block"
                    >
                        ← Back to Sprints
                    </Link>

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12">
                        <div className="max-w-3xl">
                            {/* Heading scales from 4xl on mobile to 8xl on desktop */}
                            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 md:mb-8">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack?.map((tech) => (
                                    <span key={tech} className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:max-w-md">
                            <p className="text-lg md:text-xl font-light leading-relaxed italic opacity-90">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREVIEW CONTAINER: Reduced border and radius on smaller screens */}
            <section className="px-4 md:px-6 -mt-8 md:-mt-12">
                <div className="max-w-7xl mx-auto">
                    <div className="aspect-video relative bg-gray-100 rounded-[1.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden border-[6px] md:border-[12px] border-white">
                        <Image
                            src={project.thumbnail_url ?? "/placeholder.jpg"}
                            unoptimized
                            alt={project.title}
                            fill // RULE: Use 'fill' for layout-responsive containers
                            className="object-cover transition-transform duration-700 hover:scale-[1.01]"
                            priority // RULE: Load the hero image with high priority
                        />
                    </div>
                </div>
            </section>

            {/* CONTENT GRID: Stacks on mobile (1 col), side-by-side on desktop (3 cols) */}
            <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                {/* Left Column: The Technical Story (Spans 2 columns on desktop) */}
                <div className="lg:col-span-2 space-y-10 md:space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-primary">
                            The Challenge
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                            {project.detail?.problem_statement}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-primary">
                            The Solution
                        </h2>
                        <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                            {project.detail?.solution_approach}
                        </p>
                    </div>
                </div>

                {/* Right Column: Links & Features (Last on mobile, sidebar on desktop) */}
                <div className="space-y-10 md:space-y-12">
                    {/* Repo Links Card */}
                    <div className="bg-gray-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100">
                        <h3 className="text-sm font-bold mb-6 uppercase tracking-tight">Explore the Code</h3>
                        <div className="flex flex-col gap-3">
                            {project.detail?.repository_links?.frontend && (
                                <a
                                    href={project.detail.repository_links.frontend}
                                    target="_blank"
                                    className="bg-black text-white text-center py-3 rounded-xl font-bold hover:bg-brand-primary transition-all active:scale-[0.98]"
                                >
                                    Frontend (Next.js)
                                </a>
                            )}
                            {project.detail?.repository_links?.backend && (
                                <a
                                    href={project.detail.repository_links.backend}
                                    target="_blank"
                                    className="bg-white border border-gray-200 text-black text-center py-3 rounded-xl font-bold hover:border-black transition-all active:scale-[0.98]"
                                >
                                    Backend (Laravel)
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Feature Highlights */}
                    <div className="px-2">
                        <h3 className="text-xs font-bold mb-6 uppercase tracking-widest text-gray-400">Key Features</h3>
                        <ul className="space-y-4">
                            {project.detail?.feature_highlights?.map(feature => (
                                <li key={feature} className="flex items-start gap-3 text-gray-700 font-medium group">
                                    <span className="mt-1.5 w-2 h-2 bg-brand-primary rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                                    <span className="text-sm md:text-base leading-tight">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}