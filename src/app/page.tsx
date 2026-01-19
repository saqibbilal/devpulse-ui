import { getProjects } from "@/lib/api";

export default async function Home() {
  const projects = await getProjects();

  return (
      <main className="min-h-screen bg-white">
        {/* Hero Section: Vibrant & Bold (Calvin-inspired) */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter text-brand-secondary leading-none mb-8">
              Dev<span className="text-brand-primary">Pulse</span>
            </h1>
            <p className="text-2xl md:text-3xl text-brand-muted font-light leading-relaxed">
              A showcase of <span className="text-brand-secondary font-medium">end-to-end</span> engineering sprints.
              Currently focused on Next.js, Laravel, and AWS architecture.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold text-brand-secondary">Latest Sprints</h2>
            <div className="h-1 w-24 bg-brand-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
                <article key={project.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-video bg-gray-100 mb-6">
                    <img
                        src={project.thumbnail_url}
                        alt={project.title}
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.map((tech) => (
                        <span key={tech} className="text-[10px] uppercase tracking-widest border border-gray-200 px-2 py-1 text-brand-muted">
                    {tech}
                  </span>
                    ))}
                  </div>
                  <p className="text-brand-muted line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </article>
            ))}
          </div>
        </section>
      </main>
  );
}