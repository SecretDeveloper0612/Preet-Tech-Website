import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Users, Zap, Briefcase } from 'lucide-react';

const Odometer = ({ value, suffix }: { value: number; suffix: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const startTime = Date.now();

            const updateCounter = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

                setDisplayValue(Math.floor(easedProgress * end));

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {displayValue}{suffix}
        </span>
    );
};

const StatsCounter: React.FC = () => {
    const STATS = [
        { value: 124, suffix: "+", label: "Number Of Customers", icon: <Briefcase className="w-4 h-4" /> },
        { value: 250, suffix: "+", label: "Total Projects Delivered", icon: <Users className="w-4 h-4" /> },
        { value: 500, suffix: "M+", label: "Digital Reach", icon: <Zap className="w-4 h-4" /> },
        { value: 24, suffix: "/7", label: "Chat Support", icon: <Activity className="w-4 h-4" /> }
    ];

    return (
        <section className="py-12 md:py-16 relative overflow-hidden bg-white dark:bg-[#020408] transition-colors duration-500">
            {/* Desktop Background Atmosphere */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
                    <span className="text-sm md:text-base font-bold text-brand-medium tracking-widest uppercase mb-4 block">Proven IT Expertise</span>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-[1.1] md:leading-[0.9]"
                    >
                        Impact by the <br className="block md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan italic md:ml-2">Numbers.</span>
                    </motion.h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                        Backed by over a decade of industry experience and an authoritative team of engineers, we consistently deliver high-performance digital solutions that earn clients' trust globally.
                    </p>
                </div>

                {/* Single Line Horizon HUD */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-4 lg:gap-y-0 relative">
                    {/* Mobile Center Divider */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent -translate-y-1/2 lg:hidden" />

                    {STATS.map((stat, index) => (
                        <div key={index} className="relative group px-1 sm:px-4">
                            {/* Vertical Line Separator (only on large screens) */}
                            {index !== 0 && (
                                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-slate-100 dark:bg-white/5" />
                            )}

                            <motion.div
                                className="flex flex-col items-center text-center"
                            >
                                {/* Metric Icon & ID */}
                                <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
                                    <div className="text-brand-medium opacity-50">{stat.icon}</div>
                                    <span className="text-[8px] md:text-[9px] font-mono text-slate-400 dark:text-white/20 tracking-widest">MT.0{index + 1}</span>
                                </div>

                                {/* Main Value */}
                                <div className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-500 leading-none">
                                    <Odometer value={stat.value} suffix={stat.suffix} />
                                </div>

                                {/* Label */}
                                <div className="text-[9px] md:text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-400 dark:text-slate-500 group-hover:text-brand-medium transition-colors max-w-[120px] md:max-w-none mx-auto leading-relaxed">
                                    {stat.label}
                                </div>

                                {/* Animated Focus Bracket */}
                                <div className="mt-5 md:mt-6 w-6 md:w-8 h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden group-hover:w-16 transition-all duration-500">
                                    <div className="h-full bg-brand-medium w-0 group-hover:w-full transition-all duration-700" />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
