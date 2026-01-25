import { LucideIcon , Layers, CodeXml, CloudSync, ShieldCheck } from "lucide-react";

interface ExpertiseCardProps {
    Icon: LucideIcon;
    title: string;
    desc: string;
    label: string;
    hasRightBorder?: boolean;
    noBottomBorder?: boolean;
}

export default function Expertise() {
    return (
        <section id="expertise" className="pt-24 pb-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary block mb-4">Professional Focus</span>
                    <h2 className="text-5xl md:text-7xl text-gray-900 font-bold tracking-tighter">My Expertise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <ExpertiseCard
                        Icon={Layers}
                        title="Architecture & Scalability"
                        desc="Designing high-performance, decoupled systems using Laravel and Next.js that are built to grow."
                        label="System Architect"
                        hasRightBorder
                    />
                    <ExpertiseCard
                        Icon={CodeXml}
                        title="End-to-End Engineering"
                        desc="Crafting fluid user experiences with TypeScript and React while managing complex business logic on the PHP backend."
                        label="Full Stack Developer"
                    />
                    <ExpertiseCard
                        Icon={CloudSync}
                        title="Cloud & CI/CD Infrastructure"
                        desc="Deploying containerized applications on AWS (ECS Fargate, RDS, ECR) with Docker and GitHub Actions for automated CI/CD."
                        label="DevOps Specialist"
                        hasRightBorder
                        noBottomBorder
                    />
                    <ExpertiseCard
                        Icon={ShieldCheck}
                        title="Security & Software Quality"
                        desc="Implementing Test-Driven Development (TDD) and secure coding standards to ensure enterprise-grade stability and data integrity."
                        label="Quality Engineer"
                        noBottomBorder
                    />
                </div>
            </div>
        </section>
    );
}

function ExpertiseCard({ Icon, title, desc, label, hasRightBorder = false, noBottomBorder = false }: ExpertiseCardProps) {

    const keywords = [
        'laravel', 'next.js', 'typescript', 'react', 'tailwindcss',
        'docker', 'github', 'actions', 'aws', 'test-driven', 'phpunit', 'pest',
        'development', 'tdd', 'ecr', 'ecs', 'rds', 'fargate'
    ];

    return (
        <div className={`p-12 border-gray-100 transition-all duration-500 group hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] 
            ${!noBottomBorder ? 'border-b' : ''} 
            ${hasRightBorder ? 'md:border-r' : ''}`}>

            <Icon size={48} strokeWidth={1.5} className="text-gray-400 group-hover:text-brand-primary mb-6 transition-colors" />

            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

            <p className="text-gray-500 leading-relaxed mb-6">
                {desc.split(' ').map((word: string, i: number) => {
                    // Clean the word of all non-alphanumeric chars for the "check"
                    const cleanWord = word.toLowerCase().replace(/[^a-z0-9.-]/g, '');

                    const isKeyword = keywords.includes(cleanWord);

                    return (
                        <span key={i}>
                            {isKeyword ? (
                                <strong className="font-bold text-gray-900">{word}</strong>
                            ) : (
                                word
                            )}
                            {' '}
                        </span>
                    );
                })}
            </p>

            <span className="inline-block text-sm font-medium text-brand-primary border-b border-brand-primary/30 pb-1 uppercase tracking-widest">
                {label}
            </span>
        </div>
    );
}