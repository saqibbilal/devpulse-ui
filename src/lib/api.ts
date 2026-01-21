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


export async function getProjectBySlug(slug: string): Promise<Project> {
    const res = await fetch(`${API_URL}/projects/${slug}`, {
        // We keep the revalidation consistent with your index page
        next: { revalidate: 5 },
    });

    if (!res.ok) {
        // If the API returns a 404, this will trigger the 'catch' in your page.tsx
        throw new Error(`Project with slug ${slug} not found`);
    }

    const json = await res.json();
    return json.data; // Always remember to unwrap the Laravel Resource 'data' key!
}