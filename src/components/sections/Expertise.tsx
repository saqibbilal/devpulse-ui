import { Shield, Code, Cloud, Zap } from "lucide-react";

export default function Expertise() {
    return (
        <section id="expertise" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary block mb-4">Professional Focus</span>
                    <h2 className="text-5xl md:text-7xl text-gray-900 font-bold tracking-tighter">My Expertise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <ExpertiseCard
                        Icon={Shield}
                        title="Architecture & Scalability"
                        desc="Designing decoupled systems using Laravel and Next.js that are built to grow."
                        label="System Architect"
                        hasRightBorder
                    />
                    <ExpertiseCard
                        Icon={Code}
                        title="End-to-End Engineering"
                        desc="Full-cycle development from React interactivity to complex PHP business logic."
                        label="Full Stack Developer"
                    />
                    <ExpertiseCard
                        Icon={Cloud}
                        title="Cloud Infrastructure"
                        desc="Deploying and managing scalable environments on AWS using App Runner & RDS."
                        label="AWS Specialist"
                        hasRightBorder
                        noBottomBorder
                    />
                    <ExpertiseCard
                        Icon={Zap}
                        title="Performance Tuning"
                        desc="Optimizing queries and component rendering for sub-second load times."
                        label="Backend Engineer"
                        noBottomBorder
                    />
                </div>
            </div>
        </section>
    );
}

function ExpertiseCard({ Icon, title, desc, label, hasRightBorder = false, noBottomBorder = false }: any) {
    return (
        <div className={`p-12 border-gray-100 transition-all duration-500 group hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] 
            ${!noBottomBorder ? 'border-b' : ''} 
            ${hasRightBorder ? 'md:border-r' : ''}`}>
            <Icon size={48} strokeWidth={1.5} className="text-gray-400 group-hover:text-brand-primary mb-6 transition-colors" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-500 leading-relaxed mb-6">{desc}</p>
            <span className="inline-block text-sm font-medium text-brand-primary border-b border-brand-primary/30 pb-1 uppercase tracking-widest">{label}</span>
        </div>
    );
}