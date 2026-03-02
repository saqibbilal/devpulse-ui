import { Project, Skill } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.mbilal.ca/api";

export async function getProjects(): Promise<Project[]> {
    const url = `${API_URL}/projects`;
    console.log("🚀 Server-side fetching from:", url); // This is for your Vercel Logs

    try {
        const res = await fetch(url, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            console.error(`❌ API Error: ${res.status} ${res.statusText}`);
            return []; // Return empty instead of crashing the whole site
        }

        const jsonToObj = await res.json();
        return jsonToObj.data || [];
    } catch (error) {
        console.error("❌ Fetch failed entirely:", error);
        return [];
    }
}


export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const url = `${API_URL}/projects/${slug}`;

    try {
        const res = await fetch(url, {
            next: { revalidate: 3600 },
        });

        // 1. If it's a 404 or any other error, return null.
        // DO NOT throw an error, or the build will fail.
        if (!res.ok) {
            console.error(`🚀 Build fetch failed for ${slug}: ${res.status}`);
            return null;
        }

        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error(`🚀 Network error during build for ${slug}:`, error);
        return null;
    }
}

export async function getSkills(): Promise<Skill[]> {
    try {
        const response = await fetch(`${API_URL}/skills`, {
            next: { revalidate: 3600 }
        });

        // 1. Check if the response is actually valid JSON/OK
        if (!response.ok) {
            console.error(`❌ Skills API Error: ${response.status}`);
            return []; // Fail gracefully with an empty list
        }

        const json = await response.json();

        // 2. Ensure we handle the Laravel 'data' wrapper safely
        return json.data || [];
    } catch (error) {
        // 3. This catches network timeouts or DNS failures
        console.error("❌ Network error fetching skills:", error);
        return [];
    }
}