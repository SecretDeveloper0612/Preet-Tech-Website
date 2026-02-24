
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const ReadyToPartner: React.FC = () => {
    return (
        <section id="contact" className="py-16 md:py-20 relative overflow-hidden bg-white dark:bg-[#07090f] transition-colors duration-300">
            {/* Background with Glow/Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-medium/10 dark:bg-brand-medium/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 mb-6 font-mono">
                        <Sparkles className="w-4 h-4 text-brand-medium" />
                        <span className="text-[10px] md:text-xs font-bold text-brand-medium uppercase tracking-widest">Growth Partnership</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[1] md:leading-tight mb-6">
                        Ready to <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium via-brand-sky to-brand-cyan">Partner?</span>
                    </h2>

                    <p className="text-base md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-semibold md:font-medium">
                        Experience explosive growth with <span className="font-bold text-foreground">zero upfront investment</span>.
                        We only succeed when you do — powered by our performance-based revenue-share model.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center justify-center mb-12 md:mb-16">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 rounded-full bg-brand-medium text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:shadow-brand-medium/20 transition-all"
                        >
                            <Calendar className="w-5 h-5" /> Book Strategy Call
                        </motion.button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 pt-12 border-t border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-3 text-slate-500">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span className="text-sm font-bold uppercase tracking-wider">No Upfront Cost</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-500">
                            <Zap className="w-5 h-5 text-amber-500" />
                            <span className="text-sm font-bold uppercase tracking-wider">Performance-Based</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-500">
                            <Sparkles className="w-5 h-5 text-brand-sky" />
                            <span className="text-sm font-bold uppercase tracking-wider">Long-Term Partnership</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReadyToPartner;
