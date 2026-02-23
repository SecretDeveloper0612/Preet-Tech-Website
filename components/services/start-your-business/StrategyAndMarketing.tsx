"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, PieChart, BarChart3, Rocket, Users, Globe, Zap } from 'lucide-react';

const StrategyAndMarketing = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-[#030712] relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Strategy Section (Section 9) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7">
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Growth blueprint</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">
                            Business Strategy <br /> & <span className="text-brand-cyan italic">Planning</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Revenue System", desc: "Architecting sustainable monetization streams.", icon: PieChart },
                                { title: "Market Research", desc: "Data-driven competitor and audience analysis.", icon: Target },
                                { title: "Positioning", desc: "Finding your 'Blue Ocean' in a red market.", icon: Globe },
                                { title: "Growth Roadmap", desc: "Step-by-step scaling plan for the next 24 months.", icon: TrendingUp }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-brand-cyan" />
                                    </div>
                                    <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-[4rem] p-12 border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-2xl flex items-center justify-center">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                src="https://images.unsplash.com/photo-1543286386-713bcd51403b?q=80&w=1200&auto=format&fit=crop"
                                alt="Strategy Infographic"
                                className="w-full h-auto drop-shadow-2xl rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Marketing & Launch (Section 11) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#030712] via-[#0a0c12] to-brand-cyan/20 overflow-hidden text-white"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 blur-[120px]" />
                    <div className="relative z-10 max-w-4xl">
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block font-sans">Momentum Creation</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8 leading-[0.9]">
                            Marketing & <br /> <span className="text-brand-cyan italic">Launch Strategy</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Launch Campaign", desc: "Generating massive hype before day one.", icon: Rocket },
                                { title: "Social Impact", desc: "Organic viral growth and community setup.", icon: Users },
                                { title: "Performance Ad Ops", desc: "Precision paid media for instant traffic.", icon: Zap }
                            ].map((item, i) => (
                                <div key={i} className="group cursor-default">
                                    <item.icon className="w-8 h-8 text-brand-cyan mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-base font-black uppercase tracking-tight mb-2 group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                    <p className="text-white/60 text-[11px] font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap gap-12">
                            {[
                                { label: "Target ROAS", value: "4.5x+" },
                                { label: "Launch Speed", value: "14 Days" },
                                { label: "Support", value: "365/24/7" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="text-white font-black text-2xl mb-1">{stat.value}</p>
                                    <p className="text-brand-cyan text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StrategyAndMarketing;
