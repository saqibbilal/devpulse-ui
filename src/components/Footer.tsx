import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-12">
            <div className="max-full mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto px-6">

                    {/* Left: Direct Contact info */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm text-gray-500 font-medium">
                        <a href="mailto:saqib_bilal786@yahoo.com" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                            <Mail size={16} strokeWidth={2} className="text-brand-primary" />
                            saqib_bilal786@yahoo.com
                        </a>
                        <a href="tel:+14372605336" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                            <Phone size={16} strokeWidth={2} className="text-brand-primary" />
                            +1 (647) 864-1186
                        </a>
                    </div>

                    {/* Right: Action Hub */}
                    <div className="flex items-center gap-4">
                        {/* Resume Link */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 bg-white border border-gray-100 text-gray-600 hover:text-brand-primary hover:border-brand-primary px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg"
                        >
                            <FileText size={14} />
                            Resume
                        </a>


                        {/* Social Circle Links */}
                        <div className="flex items-center gap-2 border-l border-gray-100 pl-4">
                            <a
                                href="https://github.com/saqibbilal"
                                target="_blank"
                                className="p-2.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:text-brand-primary hover:border-brand-primary transition-all shadow-lg"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/saqibbilal/"
                                target="_blank"
                                className="p-2.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:text-brand-primary hover:border-brand-primary transition-all shadow-lg"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright Strip */}
                <div className="mt-12 border-t bg-gray-500 border-brand-primary text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">
                    <div className="flex justify-between items-center max-w-xl mx-auto py-4 px-4">
                        <p>© 2026 mbilal.ca</p>
                        <p>Toronto, Ontario</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}