"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Palette, Globe, Scale, Map, BarChart3 } from 'lucide-react';

const SERVICES = [
    { title: "Registration", desc: "Complete company incorporation support.", icon: Landmark },
    { title: "Branding", desc: "Strategic visual identity and logo design.", icon: Palette },
    { title: "Website Development", desc: "High-conversion digital storefronts.", icon: Globe },
    { title: "Legal Assistance", desc: "Compliance and documentation management.", icon: Scale },
    { title: "Strategy Planning", desc: "Roadmaps for sustainable scaling.", icon: Map },
    { title: "Marketing Launch", desc: "Multi-channel entry strategies.", icon: BarChart3 },
];

const ServicesOverview = () => {
    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Ecosystem</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                            Complete <br />
                            <span className="text-brand-cyan italic">Business Setup</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium max-w-sm leading-relaxed">
                        We don't just register your company; we architect your entire digital presence and market entry strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-white/10 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
                    {SERVICES.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ backgroundColor: "rgba(95, 211, 230, 0.05)" }}
                            className="bg-white dark:bg-slate-900/50 p-12 flex flex-col items-center text-center group transition-all"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-8 border border-slate-100 dark:border-white/10 group-hover:border-brand-cyan group-hover:scale-110 transition-all">
                                <item.icon className="w-8 h-8 text-brand-cyan" />
                            </div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed uppercase tracking-widest">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
