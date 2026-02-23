"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, User, Phone, Mail, Lightbulb, DollarSign, Briefcase, ArrowRight } from 'lucide-react';

const HeroLaunch = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => setFormStatus('success'), 2000);
    };

    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-20 flex items-center overflow-hidden bg-[#030712] transition-colors duration-500">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-cyan/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-medium/5 blur-[120px] rounded-full" />

                {/* Micro-mesh pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                {/* Left Side: Massive Typography */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-md"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_rgba(95,211,230,0.8)]" />
                        Next-Gen Business Architecture
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-10"
                    >
                        FROM IDEA <br />
                        TO <span className="text-brand-cyan italic">INCOME —</span> <br />
                        <span className="text-4xl sm:text-5xl md:text-7xl lg:text-[85px] text-white opacity-90">LET'S BUILD IT <span className="text-brand-cyan italic">TOGETHER</span></span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/50 text-base md:text-xl font-medium leading-relaxed mb-12 max-w-2xl"
                    >
                        We architect, engineer, and launch your business from the ground up. Registration, branding, technology, and marketing — all synchronized for cinematic impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-[#030712] bg-slate-800 overflow-hidden shadow-2xl relative">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                            ))}
                        </div>
                        <div className="text-[10px] font-black text-white/40 uppercase leading-tight tracking-[0.4em]">
                            Empowering <br /> <span className="text-brand-cyan">100+ Startup Founders</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Clean High-Fidelity Form Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative bg-white rounded-[3.5rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(255,255,255,0.05)] border border-white/10 group overflow-hidden">
                        {/* Soft Inner Shadows */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white to-slate-50 opacity-100" />

                        <div className="relative z-10">
                            {formStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-20 text-center space-y-6"
                                >
                                    <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                        <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Venture Pipeline Initiated</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">Our execution team is reviewing your roadmap. Stand by for contact.</p>
                                    <button onClick={() => setFormStatus('idle')} className="text-brand-cyan font-black uppercase text-[10px] tracking-[0.4em] hover:opacity-70 transition-opacity">Submit New Roadmap</button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="text-center mb-10">
                                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.6em] block mb-4">Blueprint Your Success</span>
                                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
                                            FREE <span className="text-brand-cyan italic">CONSULTATION</span>
                                        </h2>
                                    </div>

                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Name Input */}
                                            <div className="relative group/input">
                                                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-brand-cyan transition-colors" />
                                                <input required type="text" placeholder="Your Name" className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl py-2 pl-16 pr-6 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-cyan/10 transition-all shadow-sm" />
                                            </div>

                                            {/* Email Input */}
                                            <div className="relative group/input">
                                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-brand-cyan transition-colors" />
                                                <input required type="email" placeholder="Email Address" className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl py-2 pl-16 pr-6 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-cyan/10 transition-all shadow-sm" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Phone Input */}
                                            <div className="relative group/input">
                                                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-brand-cyan transition-colors" />
                                                <input required type="tel" placeholder="Phone Number" className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl py-2 pl-16 pr-6 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-cyan/10 transition-all shadow-sm" />
                                            </div>

                                            {/* Timeline Select */}
                                            <div className="relative group/input">
                                                <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                                <select defaultValue="Timeline" className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl py-2 pl-16 pr-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-cyan/10 transition-all shadow-sm appearance-none cursor-pointer">
                                                    <option value="Timeline" disabled>TIMELINE (E.G. ASAP)</option>
                                                    <option>Immediately</option>
                                                    <option>In 1 Month</option>
                                                    <option>In 3 Months</option>
                                                    <option>Researching</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Business Idea Input */}
                                        <div className="relative group/input">
                                            <Lightbulb className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-brand-cyan transition-colors" />
                                            <input required type="text" placeholder="Business Idea / Industry" className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl py-2 pl-16 pr-6 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-cyan/10 transition-all shadow-sm" />
                                        </div>

                                        {/* Budget Select */}
                                        <div className="relative group/input">
                                            <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                            <select defaultValue="Budget" className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl py-2 pl-16 pr-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-cyan/10 transition-all shadow-sm appearance-none cursor-pointer">
                                                <option value="Budget" disabled>TARGET BUDGET</option>
                                                <option>$500 - $2,000</option>
                                                <option>$2,000 - $10,000</option>
                                                <option>$10,000 - $25,000</option>
                                                <option>$25,000+</option>
                                            </select>
                                        </div>

                                        <button
                                            disabled={formStatus === 'submitting'}
                                            className="w-full group mt-6 h-20 bg-brand-cyan hover:bg-[#030712] text-[#030712] hover:text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-[0_20px_40px_-10px_rgba(95,211,230,0.4)] flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                                        >
                                            {formStatus === 'submitting' ? 'PRODUCING ROADMAP...' : 'GET FREE CONSULTATION'}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroLaunch;
