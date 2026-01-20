import { getProjects } from "@/lib/api";

export default async function Home() {
    const projects = await getProjects();

    return (
        <main className="min-h-screen">
            {/* VIBRANT CALVIN HERO - Using flex-col and padding to prevent vertical overlap */}
            <section className="bg-brand-primary min-h-[90vh] flex flex-col justify-center px-6 relative overflow-hidden pt-32 pb-16 lg:pt-20">

                {/* Background Ray Effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,white_0%,transparent_70%)]"></div>
                </div>

                <div className="z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left: Identity Section */}
                    <div className="text-white text-center lg:text-left order-2 lg:order-1">
                        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium mb-3 md:mb-6 tracking-widest opacity-90 uppercase">
                            Senior Full Stack Developer
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] lg:leading-[0.9] mb-6 lg:mb-10 tracking-tighter">
                            Architecting <br />
                            <span className="text-brand-accent/80">Decoupled</span> <br />
                            Systems.
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12 leading-relaxed opacity-95">
                            Specializing in **API-First Laravel** backends and high-performance **Next.js 15** frontends.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all">
                                Explore My Sprints
                            </button>
                            <button className="border-2 border-white/40 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                                View My Resume
                            </button>
                        </div>
                    </div>

                    {/* Right: Circle Section - Scaled for short viewports */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-[380px] lg:h-[380px] xl:w-[500px] xl:h-[500px] transition-all duration-500">
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full border-[6px] lg:border-[12px] border-white/20 p-2 lg:p-4 flex items-center justify-center">
                                <div className="w-full h-full rounded-full bg-white/10 border-2 lg:border-4 border-white overflow-hidden shadow-2xl flex items-center justify-center">
                                    <span className="text-3xl lg:text-9xl font-bold text-white/40">MBB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER INFO (From Calvin) */}
            <section className="bg-brand-primary border-t border-white/10 py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
                    <div>
                        <p className="text-xs uppercase tracking-widest mb-2 font-bold">Specialization</p>
                        <p className="text-lg font-medium">Headless APIs & Web Apps</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest mb-2 font-bold">Location</p>
                        <p className="text-lg font-medium">Markham, Ontario, Canada</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest mb-2 font-bold">Contact</p>
                        <p className="text-lg font-medium underline decoration-white/30">saqib_bilal786@yahoo.com</p>
                    </div>
                </div>
            </section>

            {/* Projects Grid Container */}
            <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
                {/* We will build the cards here next */}
            </section>
        </main>
    );
}