export interface ProjectDetail {
    id: number;
    problem_statement: string;
    solution_approach: string;
    // We use an object here Matching our Postgres JSONB structure
    repository_links: {
        frontend?: string;
        backend?: string;
    };
    feature_highlights: string[];
    live_url: string;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    thumbnail_url: string;
    tech_stack: string[];
    // Keep these for logic/ordering on the frontend
    order: number;
    is_featured: boolean;
    // RULE: Relationship is optional because we use whenLoaded() in Laravel
    detail?: ProjectDetail;
}