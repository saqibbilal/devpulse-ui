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

            {/* CONTENT AREA: For the detailed technical story */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                {/* We will map further project details here next */}
            </section>
        </main>
    );
}