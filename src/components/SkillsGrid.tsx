// src/components/SkillsGrid.tsx
interface SkillsProps {
    title: string;
    skills: string[];
}

export default function SkillsGrid({ title, skills }: SkillsProps) {
    return (
        <section className="py-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-5">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="px-5 py-2 md:px-5 md:py-2 border border-gray-100 rounded-2xl bg-white text-gray-800 font-bold hover:border-brand-primary hover:text-brand-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}