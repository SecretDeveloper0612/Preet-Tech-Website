import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock, Tag } from 'lucide-react';

const INSIGHTS = [
    {
        id: 1,
        title: "The Future of AI in Fintech: Beyond Automation",
        excerpt: "Discover how predictive algorithms are reshaping financial services, from fraud detection to personalized wealth management.",
        category: "Fintech",
        readTime: "5 min read",
        date: "Oct 12, 2024",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        id: 2,
        title: "Scaling SaaS: From MVP to Market Leader",
        excerpt: "Key strategies for technical scalability and user acquisition during the critical growth phase of your startup.",
        category: "Startup Strategy",
        readTime: "7 min read",
        date: "Oct 08, 2024",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: 3,
        title: "Web3 & The New Internet Infrastructure",
        excerpt: "An engineer's guide to decentralized architectures and how they will impact enterprise application development.",
        category: "Technology",
        readTime: "6 min read",
        date: "Sep 28, 2024",
        image: "https://images.unsplash.com/photo-1639322537228-ad7117a767f1?auto=format&fit=crop&q=80&w=800",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    }
];

const Insights: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Triple the data for seamless looping
    const SLIDER_INSIGHTS = [...INSIGHTS, ...INSIGHTS, ...INSIGHTS];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Initial centered scroll position
            const setupInitialScroll = () => {
                const singleSetWidth = container.scrollWidth / 3;
                container.scrollLeft = singleSetWidth;
            };
            setTimeout(setupInitialScroll, 100);
        }
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying && !isDragging) {
            interval = setInterval(() => {
                scroll('right');
            }, 6000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, isDragging]);

    const handleInfiniteScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth } = scrollContainerRef.current;
        const singleSetWidth = scrollWidth / 3;

        // Update current index for dots/state
        const relativeScroll = scrollLeft % singleSetWidth;
        const index = Math.round(relativeScroll / (scrollWidth / SLIDER_INSIGHTS.length));
        setCurrentIndex(index % INSIGHTS.length);

        if (scrollLeft >= singleSetWidth * 2) {
            scrollContainerRef.current.scrollLeft = scrollLeft - singleSetWidth;
        } else if (scrollLeft <= singleSetWidth / 2) {
            scrollContainerRef.current.scrollLeft = scrollLeft + singleSetWidth;
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsAutoPlaying(false);
        if (!scrollContainerRef.current) return;
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => setIsAutoPlaying(true), 2000);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const firstCard = scrollContainerRef.current.querySelector('.insight-card') as HTMLElement;
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + (window.innerWidth < 768 ? 24 : 32);
                scrollContainerRef.current.scrollBy({
                    left: direction === 'left' ? -cardWidth : cardWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section
            id="insights"
            className="pt-8 md:pt-12 pb-24 bg-slate-50 dark:bg-[#080c14] overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => !isDragging && setIsAutoPlaying(true)}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-6 md:gap-8 border-t border-slate-100 dark:border-white/5 pt-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-medium/10 border border-brand-medium/20 mb-6 font-mono">
                            <BookOpen className="w-4 h-4 text-brand-medium" />
                            <span className="text-[10px] md:text-xs font-bold text-brand-medium uppercase tracking-[0.2em]">Knowledge Base</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-[1.1] md:leading-tight uppercase tracking-tighter">
                            <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">Case Studies.</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 mr-4">
                            {INSIGHTS.map((_, i) => (
                                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-brand-medium' : 'w-2 bg-slate-200 dark:bg-white/10'}`} />
                            ))}
                        </div>
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
                        >
                            <ArrowRight className="w-5 h-5 text-slate-400 rotate-180 group-hover:text-brand-medium transition-colors" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-brand-medium hover:text-white transition-colors"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Infinite Slider Container */}
            <div className="relative w-full overflow-hidden pb-12">


                <div
                    ref={scrollContainerRef}
                    onScroll={handleInfiniteScroll}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing px-6 md:pl-[max(1.5rem,calc((100vw-1280px+3rem)/2))] md:pr-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {SLIDER_INSIGHTS.map((post, index) => (
                        <motion.div
                            key={`${post.id}-${index}`}
                            className="insight-card group flex flex-col w-[calc(100vw-48px)] md:w-[320px] bg-white dark:bg-[#111624] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.2)] snap-center snap-always flex-shrink-0"
                        >
                            {/* Image Visual */}
                            <div className="relative h-44 md:h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-5 left-5">
                                    <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/95 dark:bg-black/80 backdrop-blur-md ${post.color} border border-white/10 shadow-xl`}>
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="flex-1 p-5 md:p-8 flex flex-col">
                                <div className="flex items-center gap-5 text-[10px] font-mono text-slate-500 mb-6 uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-brand-medium" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-brand-medium" /> {post.readTime}</span>
                                </div>

                                <h3 className="text-base md:text-lg font-black text-foreground mb-4 leading-tight group-hover:text-brand-medium transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground group-hover:text-brand-medium transition-colors">
                                        Read Analysis
                                    </button>
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-all duration-500 shadow-sm">
                                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex justify-center w-full">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-medium hover:text-white transition-all">
                    Enter Archives
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};

export default Insights;
