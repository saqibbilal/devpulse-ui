import { getProjectBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

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
        <main className="min-h-screen pt-32 px-6">
            <h1 className="text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-12">{project.description}</p>
            <div className="aspect-video bg-gray-100 rounded-[2.5rem]"></div>
        </main>
    );
}