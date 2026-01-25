"use client";
import { useState } from "react";
import { Send, ArrowRight, Loader2 } from "lucide-react";

export default function Contact() {
    // status can now handle "error" if the Laravel API fails
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [apiMessage, setApiMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        // Collect data from the form
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            body: formData.get("message"),
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.status === 'success') {
                setStatus("success");
                setApiMessage(result.message); // This pulls your "Message received!" text from Laravel
            } else {
                setStatus("error");
                setApiMessage(result.message || "Something went wrong. Please check your inputs.");
            }
        } catch (error) {
            setStatus("error");
            setApiMessage("Unable to connect to the server. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-16 bg-white overflow-hidden">
            <div className="ml-6 lg:ml-24 bg-gray-50 rounded-l-[4rem] md:rounded-l-[8rem] p-12 md:p-24 relative shadow-sm border-gray-100">
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
                            I&apos;m currently open to new opportunities in Markham or remote. Whether you have a project in mind or just want to discuss the latest in Laravel, my inbox is open.
                        </p>

                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Current Base</p>
                            <p className="text-lg font-medium text-brand-primary">Markham, Ontario 🇨🇦</p>
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 min-h-[500px] flex flex-col justify-center">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center space-y-4 py-16 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-orange-100/80 text-brand-primary rounded-full flex items-center justify-center">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-brand-primary text-2xl font-bold">Message Sent!</h3>
                                <p className="text-gray-500">{apiMessage}</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-brand-primary font-bold text-sm underline underline-offset-4"
                                >
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {status === "error" && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-medium">
                                        {apiMessage}
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-primary ml-4">Your Identity</label>
                                    <input required name="name" type="text" placeholder="Full Name" className="text-brand-dark w-full bg-[#ededed] placeholder-gray-400 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-primary ml-4">Email Channel</label>
                                    <input required name="email" type="email" placeholder="email@company.com" className="text-brand-dark w-full bg-[#ededed] placeholder-gray-400 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-brand-primary ml-4">Project Brief</label>
                                    <textarea required name="message" rows={4} placeholder="What are we building?" className="text-brand-dark w-full bg-[#ededed] placeholder-gray-400 border-none rounded-[2rem] px-6 py-5 focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none resize-none" />
                                </div>

                                <button
                                    disabled={status === "sending"}
                                    type="submit"
                                    className="w-full bg-gray-900 text-white group flex items-center justify-center gap-3 py-5 rounded-full font-bold hover:bg-black transition-all shadow-lg disabled:bg-gray-400"
                                >
                                    {status === "sending" ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : (
                                        <>
                                            Initiate Discussion
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-brand-primary" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}