import HeadShot from "@/components/HeadShot";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="bg-brand-primary min-h-[100vh] flex flex-col justify-center px-6 relative overflow-hidden pt-32 pb-16 lg:pt-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,white_0%,transparent_70%)]"></div>
            </div>

            <div className="z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="text-white text-center lg:text-left order-2 lg:order-1">
                    <h2 className="text-sm md:text-lg font-bold mb-4 tracking-[0.3em] opacity-90 uppercase">
                        Senior Full Stack Developer
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
                        Architecting <br />
                        <span className="text-brand-accent/90 italic font-light">Decoupled</span> <br />
                        Systems.
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-95">
                        Specializing in API-First <span className="font-bold text-brand-accent">Laravel</span> backends and high-performance <span className="font-bold text-brand-accent">Next.js 15</span> frontends with over <span className="font-bold">5 years</span> of enterprise engineering experience. Based in the Greater Toronto Area.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <a href="/Saqib_Bilal_FullStack_2026.pdf" target="_blank" className="flex items-center gap-2 bg-white text-gray-600 border border-gray-100 px-8 py-4 rounded-full font-bold transition-all shadow-sm hover:shadow-md hover:text-brand-primary">
                            <FileText size={20} />
                            View My Resume
                        </a>
                        <div className="flex items-center gap-3">
                            <a href="https://github.com/saqibbilal" target="_blank" className="p-4 bg-white border border-gray-100 rounded-full text-gray-600 hover:text-brand-primary transition-all shadow-sm hover:shadow-md">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/saqibbilal/" target="_blank" className="p-4 bg-white border border-gray-100 rounded-full text-gray-600 hover:text-brand-primary transition-all shadow-sm hover:shadow-md">
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative w-56 h-56 lg:w-[450px] lg:h-[450px]">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-[8px] lg:border-[16px] border-white/20 p-2 lg:p-4">
                            <div className="w-full h-full rounded-full bg-white/10 border-2 lg:border-4 border-white overflow-hidden shadow-2xl">
                                <HeadShot />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}