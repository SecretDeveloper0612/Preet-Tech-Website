
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const ORIGINAL_CASE_STUDIES = [
    {
        id: 1,
        client: "Nebula Finance",
        industry: "FinTech & Trading",
        challenge: "Legacy infrastructure caused 40% latency.",
        solution: "Distributed micro-latency ledger system.",
        metrics: [
            { label: "Speed", value: "10x" },
            { label: "Revenue", value: "+$2.4M" }
        ],
        graphColor: "text-emerald-500",
        accent: "bg-emerald-500"
    },
    {
        id: 2,
        client: "Vortex Retail",
        industry: "Global E-Commerce",
        challenge: "Stagnant conversion rates (1.2%).",
        solution: "AI personalization engine.",
        metrics: [
            { label: "Conversion", value: "4.8%" },
            { label: "Growth", value: "+215%" }
        ],
        graphColor: "text-blue-500",
        accent: "bg-blue-500"
    },
    {
        id: 3,
        client: "Apex Health",
        industry: "Healthcare SaaS",
        challenge: "Data inaccessible in low-bandwidth.",
        solution: "Offline-first PWA with sync.",
        metrics: [
            { label: "Adoption", value: "+300%" },
            { label: "Clinics", value: "50k+" }
        ],
        graphColor: "text-rose-500",
        accent: "bg-rose-500"
    },
    {
        id: 4,
        client: "Cyber Shield",
        industry: "Cybersecurity",
        challenge: "Zero-day defenses failing.",
        solution: "AI-driven threat prediction.",
        metrics: [
            { label: "Detection", value: "99.9%" },
            { label: "Response", value: "<1ms" }
        ],
        graphColor: "text-purple-500",
        accent: "bg-purple-500"
    }
];

// Create a tripled list for seamless looping [Clone, Real, Clone]
const CASE_STUDIES = [...ORIGINAL_CASE_STUDIES, ...ORIGINAL_CASE_STUDIES, ...ORIGINAL_CASE_STUDIES];

const CaseStudies: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const GAP = 24;

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const setupInitialScroll = () => {
                const { scrollWidth } = container;
                container.scrollLeft = scrollWidth / 3;
            };
            const timeout = setTimeout(setupInitialScroll, 100);
            return () => clearTimeout(timeout);
        }
    }, [GAP]);

    const handleInfiniteScroll = () => {
        if (!scrollContainerRef.current) return;

        const { scrollLeft, scrollWidth } = scrollContainerRef.current;
        const singleSetWidth = scrollWidth / 3;

        // Reset to middle if we drift too far
        if (scrollLeft >= singleSetWidth * 2) {
            scrollContainerRef.current.scrollLeft = scrollLeft - singleSetWidth;
        } else if (scrollLeft <= singleSetWidth / 2) {
            scrollContainerRef.current.scrollLeft = scrollLeft + singleSetWidth;
        }
    };

    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsPaused(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
        const walk = (x - startX) * 2; // scroll-fast factor
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsPaused(false);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstCard = container.querySelector('.case-study-card') as HTMLElement;
            if (firstCard) {
                const scrollAmount = firstCard.offsetWidth + GAP;
                container.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Auto-play logic
    useEffect(() => {
        if (isPaused || isDragging) return;

        const timer = setInterval(() => {
            scroll('right');
        }, 5000);

        return () => clearInterval(timer);
    }, [isPaused, isDragging]);

    return (
        <section id="case-studies" className="pt-16 md:pt-24 pb-4 md:pb-6 bg-background overflow-hidden relative border-t border-slate-100 dark:border-white/5">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row gap-10 lg:gap-14 items-center xl:items-start text-center xl:text-left">

                {/* Fixed Header Content */}
                <div className="xl:w-[450px] flex-shrink-0 flex flex-col items-center xl:items-start z-10 bg-background py-4 flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-medium/5 border border-brand-medium/10 mb-6 mx-auto xl:mx-0">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-medium" />
                        <span className="text-[10px] md:text-[11px] font-black uppercase text-brand-medium tracking-widest">Growth Engines</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[1.1] mb-6">
                        Where Strategy Meets <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">Measurable Results.</span>
                    </h2>

                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mb-10">
                        Browse our archive of digital breakthroughs. Every metric represents a milestone in our partners' growth success.
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center xl:justify-start gap-3 mb-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
                        >
                            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-brand-medium transition-colors" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-brand-medium hover:text-white transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Infinite Carousel Track */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleInfiniteScroll}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => {
                        setIsPaused(false);
                        handleMouseUp();
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    className="w-full overflow-x-auto scrollbar-hide xl:mask-fade-left scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div
                        className="flex gap-6 items-stretch px-8 md:px-0 w-max"
                    >
                        {CASE_STUDIES.map((study, index) => (
                            <div
                                key={`${study.id}-${index}`}
                                className="case-study-card flex-shrink-0 w-[calc(100vw-64px)] md:w-[350px] rounded-[2rem] bg-slate-50 dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/5 p-5 md:p-6 flex flex-col justify-between hover:border-brand-medium/30 transition-colors group snap-center snap-always"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-5 md:mb-6">
                                        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl ${study.accent} bg-opacity-10 flex items-center justify-center`}>
                                            <Target className={`w-4 h-4 md:w-5 md:h-5 ${study.graphColor}`} />
                                        </div>
                                        <button className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-medium" />
                                        </button>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-0.5 tracking-tight">{study.client}</h3>
                                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 md:mb-5">{study.industry}</p>

                                    <div className="space-y-2 md:space-y-3 mb-6">
                                        <div className="p-3 rounded-xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                            <p className="text-[8px] md:text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1">Challenge</p>
                                            <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 leading-snug">{study.challenge}</p>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                            <p className="text-[8px] md:text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">Solution</p>
                                            <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 leading-snug">{study.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 md:pt-5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <div className="text-lg md:text-xl font-black text-foreground">{metric.value}</div>
                                            <div className="text-[8px] md:text-[9px] uppercase font-bold text-slate-400 tracking-wider">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .xl\\:mask-fade-left {
                    @media (min-width: 1280px) {
                        mask-image: linear-gradient(to right, transparent, black 10%, black 100%);
                    }
                }
            `}</style>
        </section>
    );
};

export default CaseStudies;
