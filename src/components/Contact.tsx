"use client";
import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <section id="contact" className="py-24 overflow-hidden">
            {/* The Inverted Asymmetrical Container: Flush to Right, Rounded on Left */}
            <div className="ml-6 lg:ml-24 bg-white/90 rounded-l-[3rem] md:rounded-l-[6rem] p-12 md:p-24 relative shadow-md">

                {/* Content stays aligned to your max-width grid logic */}
                <div className="max-w-7xl mr-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left Side: The Narrative */}
                    <div className="py-4">
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">
                            Let&apos;s Talk
                        </h2>
                        <h3 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-gray-900">
                            READY TO <br />
                            <span className="text-brand-primary italic font-light">elevate</span> <br />
                            YOUR STACK?
                        </h3>
                        <p className="text-xl text-gray-500 font-light max-w-md leading-relaxed mb-12">
                            I&apos;m currently open to new opportunities in Markham or remote. Whether you have a project in mind or just want to discuss the latest in Laravel 12, my inbox is open.
                        </p>

                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Current Base</p>
                            <p className="text-lg font-medium">Markham, Ontario 🇨🇦</p>
                        </div>
                    </div>

                    {/* Right Side: The Form (The "White Island" element) */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-gray-500">I&apos;ll get back to you shortly, Saqib.</p>
                                <button onClick={() => setStatus("idle")} className="text-brand-primary font-bold text-sm underline underline-offset-4">Send another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-primary ml-4">Your Identity</label>
                                    <input required type="text" placeholder="Full Name" className="w-full bg-[#ededed] placeholder-gray-400 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-primary ml-4">Email Channel</label>
                                    <input required type="email" placeholder="email@company.com" className="w-full bg-[#ededed] placeholder-gray-400 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-primary ml-4">Project Brief</label>
                                    <textarea required rows={4} placeholder="What are we building?" className="w-full bg-[#ededed] placeholder-gray-400 border-none rounded-[2rem] px-6 py-5 focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none resize-none" />
                                </div>

                                <button
                                    disabled={status === "sending"}
                                    type="submit"
                                    className="w-full bg-gray-500 text-white group flex items-center justify-center gap-3 py-5 rounded-full font-bold hover:bg-gray-700 transition-all shadow-lg"
                                >
                                    {status === "sending" ? "Dispatching..." : "Initiate Discussion"}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-brand-primary" />
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}