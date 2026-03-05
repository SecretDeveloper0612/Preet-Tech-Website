"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Rocket, MessageSquare, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

const ContactCTA: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-20 md:py-24 overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-500"
        >
            {/* Massive Background Typography */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] dark:opacity-[0.03] select-none">
                <motion.h2
                    style={{ y }}
                    className="text-[20vw] font-black text-slate-900 dark:text-white leading-none whitespace-nowrap"
                >
                    CONTACT_US
                </motion.h2>
            </div>

            {/* Neural/Grid Background Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,143,204,0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

            {/* Animated Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-brand-medium/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -40, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-cyan/20 dark:bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="relative z-10 container mx-auto px-6">
                <motion.div
                    style={{ scale: springScale }}
                    className="max-w-4xl mx-auto rounded-[3rem] bg-white shadow-xl dark:shadow-2xl dark:bg-white/[0.03] backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-10 md:p-16 relative overflow-hidden"
                >
                    {/* Inner Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-medium to-transparent" />

                    <div className="text-center space-y-8">

                        {/* Heading */}
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none"
                            >
                                Let's Build the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan italic">Future.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed"
                            >
                                The architecture for your next digital leap is ready.
                                Initialize the project protocol and scale your vision.
                            </motion.p>
                        </div>

                        {/* Strategic Actions */}
                        <div className="flex items-center justify-center pt-4">
                            <button
                                className="w-full sm:w-auto group relative px-8 py-4 bg-[#3994fa] text-white rounded-xl overflow-hidden shadow-xl shadow-[#3994fa]/20 transition-all font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <Rocket className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                <span className="relative z-10">Initiate Project</span>
                            </button>
                        </div>


                    </div>

                    {/* Technical Aesthetic Accents */}
                    <div className="absolute bottom-0 right-0 p-8 opacity-10 pointer-events-none">
                        <Zap size={120} className="text-brand-medium" />
                    </div>
                </motion.div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-brand-medium/10 to-transparent pointer-events-none" />
        </section>
    );
};

export default ContactCTA;
