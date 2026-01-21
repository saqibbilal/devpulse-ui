import { Project } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects(): Promise<Project[]> {
    // Using the absolute URL for server-side fetches
    const res = await fetch(`${API_URL}/projects`, {
        // Next.js 15 Fetch Cache: revalidate every hour
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch projects from the API');
    }

    // convert object to json
    const jsonToObj = await res.json();

    // Logic fix: Extract the 'data' array from the Laravel Resource wrapper
    return jsonToObj.data;
}


export async function getProjectBySlug(slug: string): Promise<Project | null> {
    // 1. Replaced SSR (no-store) with ISR (revalidate)
    const res = await fetch(`${API_URL}/projects/${slug}`, {
        cache: "no-store",
    });

    // 2. Standard 404 handling for our Page Component
    if (res.status === 404) return null;

    // 3. Robust error handling for unexpected API crashes
    if (!res.ok) throw new Error("API Error: Failed to fetch single project");

    // 4. Unwrap the Laravel Resource data
    const json = await res.json();
    return json.data;
}