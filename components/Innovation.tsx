import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Layout, Cloud, ArrowRight, Sparkles, Activity } from 'lucide-react';

const TRENDS = [
    {
        title: "AI & Automation",
        description: "Moving beyond simple scripts to autonomous, self-learning systems that transform raw data into predictive business intelligence.",
        icon: <Cpu className="w-8 h-8" />,
        color: "from-blue-600/20 to-cyan-500/20",
        accent: "text-blue-400",
        delay: 0.1
    },
    {
        title: "Modern Web Performance",
        description: "In the era of Core Web Vitals, speed is the ultimate competitive advantage. We engineer sub-second experiences for global scale.",
        icon: <Zap className="w-8 h-8" />,
        color: "from-blue-500/20 to-indigo-500/20",
        accent: "text-cyan-400",
        delay: 0.2
    },
    {
        title: "UI/UX Evolution",
        description: "Crafting immersive, spatial interfaces that bridge the gap between human intuition and complex digital ecosystems.",
        icon: <Layout className="w-8 h-8" />,
        color: "from-indigo-600/20 to-blue-500/20",
        accent: "text-indigo-400",
        delay: 0.3
    },
    {
        title: "Cloud & Scalable Architecture",
        description: "Designing elastic, multi-region infrastructures that maintain 99.99% uptime while handling exponential traffic surges.",
        icon: <Cloud className="w-8 h-8" />,
        color: "from-cyan-600/20 to-blue-600/20",
        accent: "text-blue-500",
        delay: 0.4
    }
];

const Innovation: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-[#020408] transition-colors duration-300">
            {/* Background Engineering Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Digital Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
                    >
                        <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">Transformation Intelligence</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] uppercase mb-8"
                    >
                        Mastering the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-brand-medium to-brand-cyan dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 italic">Digital Frontier.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light"
                    >
                        In a landscape of rapid disruption, digital transformation is no longer a choice—it's a survival mechanism. We help legacy-bound organizations pivot toward future-ready, high-impact technology stacks.
                    </motion.p>
                </div>

                {/* Strategic Trend Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TRENDS.map((trend, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: trend.delay, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="group relative h-full flex flex-col p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-500 overflow-hidden"
                        >
                            {/* Interactive Glow Effect */}
                            <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${trend.color} p-0.5 mb-10 transform group-hover:scale-110 transition-transform duration-500 shadow-sm dark:shadow-none`}>
                                <div className="w-full h-full bg-white dark:bg-[#020408] rounded-[14px] flex items-center justify-center text-blue-600 dark:text-white">
                                    {trend.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {trend.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-light">
                                {trend.description}
                            </p>

                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-500 group-hover:gap-4 transition-all">
                                Protocol Insight <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Innovation;
