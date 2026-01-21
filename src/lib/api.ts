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
    const jsonResponse = await res.json();

    // Logic fix: Extract the 'data' array from the Laravel Resource wrapper
    return jsonResponse.data;
}