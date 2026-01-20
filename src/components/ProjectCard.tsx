// src/components/ProjectCard.tsx
import { Project} from "@/types";

interface Props {
    project: Project;
}

export default function ProjectCard ({project}: Props){
    return (
        <div className="group">
            <div className="aspect-video overflow-hidden rounded-3xl">
                <img src={project.thumbnail_url} />
            </div>

            <div className="mt-6">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}