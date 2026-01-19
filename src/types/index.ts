// This interface matches Laravel 'projects' table schema exactly
export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    thumbnail_url: string;
    tech_stack: string[]; // Handled as an array thanks to Laravel's JSON casting
    live_url: string | null;
    github_url: string | null;
    order: number;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
}