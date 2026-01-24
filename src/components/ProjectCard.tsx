// src/components/ProjectCard.tsx
import Link from "next/link";
import { Project } from "@/types";
import Image from 'next/image';

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block cursor-pointer"
        >
            {/* 1. Image Container */}
            <div className="relative aspect-video overflow-hidden rounded-[2.5rem] bg-brand-accent/30 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                    src={project.thumbnail_url}
                    alt={project.title}
                    fill
                    unoptimized // Use this if images are hosted on devpulse-api.test or external sites
                    className="object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                />

                {/* 2. Overlay Tag */}
                <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-primary shadow-sm">
                        Featured Work
                    </span>
                </div>
            </div>

            {/* 3. Info Container */}
            <div className="mt-8 px-2">
                <div className="flex gap-2 mb-4">
                    {project.tech_stack?.map((tech) => (
                        <span key={tech} className="text-[10px] font-bold text-brand-primary/60 uppercase tracking-tighter">
                            {tech}
                        </span>
                    ))}
                </div>

                <h3 className="text-3xl font-bold text-brand-dark mb-3 tracking-tight transition-colors group-hover:text-brand-primary">
                    {project.title}
                </h3>

                <p className="text-gray-500 font-light leading-relaxed line-clamp-2 italic">
                    {project.description}
                </p>
            </div>
        </Link>
    );
}