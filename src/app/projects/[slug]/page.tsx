// src/app/projects/[slug]/page.tsx
import { getProjectBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
    // In Next.js 15, params is a Promise that must be awaited
    const { slug } = await params;

    try {
        const project = await getProjectBySlug(slug);

        return (
            <main className="min-h-screen pt-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl text-gray-600 mb-12">{project.description}</p>

                    {/* Placeholder for the detailed content we'll style next */}
                    <div className="aspect-video bg-gray-100 rounded-[2.5rem] mb-12"></div>
                </div>
            </main>
        );
    } catch (error) {
        // If the slug doesn't exist in your Laravel DB, show the 404 page
        notFound();
    }
}