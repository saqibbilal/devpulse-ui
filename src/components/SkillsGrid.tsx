interface SkillsProps {
    title: string;
    skills: string[];
}

export default function SkillsGrid({ title, skills }: SkillsProps) {
    return (
        <div className="py-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
                {title}
            </h3>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="px-6 py-3 border border-gray-100 rounded-2xl bg-gray-50 text-gray-800 font-bold hover:border-brand-primary hover:text-brand-primary transition-all duration-300 cursor-default"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}