import { Project, Skill } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.devpulse.mbilal.ca/api";

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

export async function getSkills(): Promise<Skill[]> {
    try {
        const response = await fetch(`${API_URL}/skills`, {
            next: { revalidate: 3600 } // Cache for 1 hour for performance
        });

        if (!response.ok) {
            throw new Error("Failed to fetch skills");
        }

        const data = await response.json();
        return data.data; // Remember, Laravel resources wrap data in a 'data' key
    } catch (error) {
        console.error("Error fetching skills:", error);
        return [];
    }
}