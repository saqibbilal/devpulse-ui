 // src/app/sandbox/page.tsx

import { ProjectCard} from "@/components/ProjectCard";
import { getProjects } from "@/lib/api";

export default async function home () {

    const projects = await getProjects();

    return (
        <>
        {projects.map((project) => {
            return < ProjectCard  key={project.id} project={project} />
        })}
        </>
    )}

