// devpulse-ui/src/app/page.tsx
import { getProjects } from "@/lib/api";
// devpulse-ui/src/app/page.tsx

export default async function Home() {
    const projects = await getProjects();

    return (
        <main className="min-h-screen">
            {/* VIBRANT CALVIN HERO */}
            <section className="bg-brand-primary min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden">
                {/* Background Decorative Element (The "Calvin" Ray) */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,white_0%,transparent_70%)]"></div>
                </div>

                <div className="z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: The Senior Identity */}
                    <div className="text-white">
                        <h2 className="text-2xl font-medium mb-4 tracking-wide opacity-90 uppercase">
                            Senior Full Stack Developer
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
                            Architecting <br />
                            <span className="text-brand-accent/80">Decoupled</span> <br />
                            Systems.
                        </h1>
                        <p className="text-xl md:text-2xl font-light max-w-lg mb-12 leading-relaxed opacity-95">
                            Specializing in **API-First Laravel** backends and high-performance **Next.js 15** frontends.
                            Bridging the gap between legacy monoliths and modern cloud architecture.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all">
                                Explore My Sprints
                            </button>
                            <button className="border-2 border-white/40 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                                View My Resume
                            </button>
                        </div>
                    </div>

                    {/* Right: The Circular Focal Point */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
                            {/* The "Glow" behind the circle */}
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>

                            {/* The Main Circle */}
                            <div className="relative w-full h-full rounded-full border-[12px] border-white/20 p-4 flex items-center justify-center">
                                <div className="w-full h-full rounded-full bg-white/10 border-4 border-white overflow-hidden shadow-2xl flex items-center justify-center">
                                    {/* This is where your professional photo goes */}
                                    <span className="text-9xl grayscale opacity-50">MBB</span>
                                </div>
                            </div>

                            {/* Decorative Small Circles from Calvin */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
                            <div className="absolute -bottom-8 left-12 w-24 h-24 bg-white/10 rounded-full blur-md"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER INFO (From Calvin) */}
            <section className="bg-brand-primary border-t border-white/10 py-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
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
        </main>
    );
}