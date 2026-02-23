"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, FileText, Palette, TrendingUp, DollarSign, XCircle, CheckCircle2, Rocket } from 'lucide-react';

const CHALLENGES = [
    { title: "Legal Confusion", desc: "Complex registrations and documentation hurdles.", icon: AlertCircle },
    { title: "No Clear Strategy", desc: "Starting without a roadmap leads to early burnout.", icon: FileText },
    { title: "Branding Mistakes", desc: "Inconsistent identity that fails to build trust.", icon: Palette },
    { title: "Poor Marketing Launch", desc: "Invisible entry into a crowded marketplace.", icon: TrendingUp },
    { title: "Wasted Budget", desc: "Overspending on resources that don't drive ROI.", icon: DollarSign },
];

const Challenges = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-[#030712] relative overflow-hidden transition-colors duration-500">
            {/* Soft Ambient Shadow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.5em] mb-4 block">The Critical Extraction</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.9] mb-6">
                            THE SCALING <br />
                            <span className="text-brand-cyan italic">DEATH VALLEY</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-lg">
                            90% of startups fail within the first 18 months due to predictable engineering anomalies. We identify and neutralize these roadblocks before you launch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {CHALLENGES.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 items-center p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 group hover:bg-white dark:hover:bg-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all cursor-default"
                            >
                                <div className="w-14 h-14 rounded-[1.25rem] bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-white/5 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shrink-0">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-slate-900 dark:text-white font-black uppercase text-sm tracking-tight">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-8 rounded-[2.5rem] bg-brand-cyan text-[#030712] flex items-center gap-6 shadow-2xl shadow-brand-cyan/20 group"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#030712] flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-brand-cyan" />
                        </div>
                        <p className="font-black uppercase text-[10px] tracking-widest leading-relaxed">
                            Preet Tech logic removes these barriers, <br />
                            <span className="opacity-70">Ensuring 100% synchronized market entry.</span>
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="aspect-square bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border border-slate-100 dark:border-white/5 p-12 relative overflow-hidden flex items-center justify-center shadow-inner">
                        {/* Technical Blueprint Visual */}
                        <div className="relative w-full aspect-square border-2 border-dashed border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-[1px] border-brand-cyan/20 rounded-full"
                            />

                            <div className="relative z-10 w-4/5 aspect-square bg-white dark:bg-[#030712] rounded-full border border-slate-100 dark:border-white/10 shadow-2xl flex flex-col items-center justify-center px-10 text-center space-y-4">
                                <div className="w-16 h-16 rounded-3xl bg-brand-cyan/10 flex items-center justify-center">
                                    <Rocket className="w-8 h-8 text-brand-cyan animate-pulse" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">PHASE 01</h3>
                                    <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em]">MARKET NEUTRALIZATION</p>
                                </div>
                                <div className="w-12 h-0.5 bg-slate-100 dark:bg-white/10" />
                                <p className="text-slate-400 text-[10px] font-medium leading-relaxed uppercase tracking-widest">Bridging the revenue gap <br /> with venture architecture</p>
                            </div>

                            {/* Orbiting Tech Points */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute h-full w-full"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(95,211,230,0.8)]" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-brand-medium shadow-[0_0_15px_rgba(147,51,234,0.8)]" />
                            </motion.div>
                        </div>

                        {/* Background Code/Grid elements */}
                        <div className="absolute top-10 left-10 text-[8px] font-mono text-slate-300 dark:text-slate-700 select-none">INIT_VENTURE_SEQ</div>
                        <div className="absolute bottom-10 right-10 text-[8px] font-mono text-slate-300 dark:text-slate-700 select-none">STATUS: OPTIMIZED</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Challenges;
