
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const STEPS = [
    {
        id: "01",
        title: "Discovery",
        description: "We dive deep into your business metrics and market opportunities to define a clear path for growth.",
        icon: <Search className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "02",
        title: "Strategy",
        description: "Designing a high-performance roadmap and technical architecture tailored to your unique scaling needs.",
        icon: <Compass className="w-6 h-6" />,
        color: "from-indigo-500 to-purple-500"
    },
    {
        id: "03",
        title: "Execution",
        description: "Our engineers and designers bring the vision to life with cinematic fidelity and robust, scalable code.",
        icon: <Zap className="w-6 h-6" />,
        color: "from-amber-500 to-orange-500"
    },
    {
        id: "04",
        title: "Scale",
        description: "Continuous data-driven optimization and strategic iterations to multiply your ROI and market share.",
        icon: <TrendingUp className="w-6 h-6" />,
        color: "from-emerald-500 to-teal-500"
    }
];

const SimpleSteps: React.FC = () => {
    return (
        <section id="process" className="py-16 md:py-20 bg-background relative overflow-hidden transition-colors duration-300">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tighter mb-6 leading-tight uppercase"
                    >
                        THE GENESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">PROCESS.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Growth doesn't have to be complicated. We've streamlined our process to take you from discovery to digital dominance.
                    </motion.p>
                </div>

                {/* Steps Layout */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-slate-200 dark:bg-white/10" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative group"
                            >
                                {/* Step Indicator */}
                                <div className="hidden lg:block absolute -top-[5px] left-0 w-3 h-3 rounded-full bg-background border-2 border-slate-300 dark:border-white/20 group-hover:border-brand-medium transition-colors z-20" />

                                <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4">
                                    {/* Large Number with Mask */}
                                    <div className="mb-8 relative">
                                        <div className="text-7xl md:text-8xl font-black text-slate-200 dark:text-white/[0.03] select-none leading-none group-hover:text-brand-medium/10 transition-colors">
                                            {step.id}
                                        </div>
                                        <div className={`absolute top-1/2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                            <div className="w-full h-full bg-white dark:bg-[#0b0f1a] rounded-[14px] flex items-center justify-center text-foreground">
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-brand-medium transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-foreground transition-all">
                                        Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-medium/0 via-brand-medium/5 to-brand-medium/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <h4 className="text-xl md:text-3xl font-bold text-foreground mb-4">Ready to start your journey?</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
                        The first step is a conversation. Let's discuss how we can engineer your business's next growth phase.
                    </p>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-brand-medium hover:text-white transition-all">
                        Schedule an Audit
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SimpleSteps;
