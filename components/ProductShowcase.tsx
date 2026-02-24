import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, ChevronLeft, ChevronRight, MessageCircle, ArrowUpRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const PRODUCTS = [
    {
        id: 'business-tool',
        title: 'Business Tool',
        category: 'Management',
        description: 'Operations & growth automation engine. Streamline workflows, track key metrics, and scale your operations effortlessly.',
        image: '/business-tool.png',
        originalPrice: 249.99,
        discountedPrice: 49.99,
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Preet Tech Business Tool.",
        color: "from-blue-500/20 to-cyan-400/20"
    },
    {
        id: 'crm-tool',
        title: 'Nexus CRM',
        category: 'SaaS',
        description: 'Next-gen customer management portal. Build stronger relationships, track interactions, and drive sales pipeline growth.',
        image: '/crm-tool.png',
        originalPrice: 399.99,
        discountedPrice: 79.99,
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Nexus CRM portal.",
        color: "from-indigo-500/20 to-purple-400/20"
    },
    {
        id: 'analytics-tool',
        title: 'Insight Pro',
        category: 'Analytics',
        description: 'Real-time data visualization streams. Transform raw data into actionable insights with beautiful, dynamic dashboards.',
        image: '/analytics-tool.png',
        originalPrice: 199.99,
        discountedPrice: 39.99,
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Insight Pro Analytics tool.",
        color: "from-emerald-500/20 to-teal-400/20"
    },
    {
        id: 'automation-tool',
        title: 'Flow Master',
        category: 'Automation',
        description: 'Intelligent high-velocity automation. Connect your core apps, automate repetitive tasks, and boost team productivity.',
        image: '/automation-tool.png',
        originalPrice: 299.99,
        discountedPrice: 59.99,
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Flow Master Automation suite.",
        color: "from-orange-500/20 to-rose-400/20"
    }
];

const ProductShowcase: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Looped data for infinite feel
    const LOOPED_PRODUCTS = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

    const handleInfiniteScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth } = scrollContainerRef.current;
        const singleSetWidth = scrollWidth / 3;

        // Update dot index
        const relativeScroll = scrollLeft % singleSetWidth;
        const index = Math.round(relativeScroll / (scrollWidth / LOOPED_PRODUCTS.length));
        setCurrentIndex(index % PRODUCTS.length);

        if (scrollLeft >= singleSetWidth * 2) {
            scrollContainerRef.current.scrollLeft = scrollLeft - singleSetWidth;
        } else if (scrollLeft <= singleSetWidth / 2) {
            scrollContainerRef.current.scrollLeft = scrollLeft + singleSetWidth;
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const setupInitialScroll = () => {
                container.scrollLeft = container.scrollWidth / 3;
            };
            const timeout = setTimeout(setupInitialScroll, 100);
            return () => clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying && !isDragging) {
            interval = setInterval(() => {
                scroll('right');
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, isDragging]);

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
            const firstCard = scrollContainerRef.current.querySelector('.product-card') as HTMLElement;
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + 24;
                const currentScroll = scrollContainerRef.current.scrollLeft;
                const newScroll = direction === 'left' ? currentScroll - cardWidth : currentScroll + cardWidth;
                scrollContainerRef.current.scrollTo({
                    left: newScroll,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section
            className="py-8 md:py-16 relative bg-background overflow-hidden transition-colors duration-300"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => !isDragging && setIsAutoPlaying(true)}
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Inventory_Assets
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none"
                        >
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan italic">Tools.</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="/services/business-tools"
                            className="mr-2 px-6 py-3 bg-brand-medium/10 border border-brand-medium/20 text-brand-medium hover:bg-brand-medium hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
                        >
                            View More Deals
                        </Link>
                        <div className="flex items-center gap-3 mr-4">
                            {PRODUCTS.map((_, i) => (
                                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-brand-medium' : 'w-2 bg-slate-200 dark:bg-white/10'}`} />
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-foreground hover:bg-brand-medium hover:text-white hover:border-brand-medium transition-all active:scale-90"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-foreground hover:bg-brand-medium hover:text-white hover:border-brand-medium transition-all active:scale-90"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Container */}
            <div className="relative w-full">
                <div
                    ref={scrollContainerRef}
                    onScroll={handleInfiniteScroll}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:pl-[max(1.5rem,calc((100vw-1280px+3rem)/2))] pb-12 cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {LOOPED_PRODUCTS.map((product, idx) => (
                        <div
                            key={`${product.id}-${idx}`}
                            className="product-card shrink-0 snap-center snap-always w-[calc(100vw-48px)] md:w-[280px] lg:w-[calc((100vw-120px)/4)] xl:w-[290px]"
                        >
                            <motion.div
                                className="group relative h-[420px] md:h-[460px] bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-medium/50 transition-all duration-500 flex flex-col"
                            >
                                {/* 1. Image & Overlay Container */}
                                <div className="relative h-36 w-full overflow-hidden shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Top Badges */}
                                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                                        <div className="px-2.5 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                                            <span className="text-[8px] font-black text-white uppercase tracking-widest">{product.category}</span>
                                        </div>
                                        <div className="px-2.5 py-1 bg-brand-medium text-white rounded-full shadow-lg shadow-brand-medium/30">
                                            <span className="text-[9px] font-black uppercase tracking-tighter">{product.discountBadge}</span>
                                        </div>
                                    </div>

                                    {/* Verified Overlay */}
                                    <div className="absolute bottom-3 left-3">
                                        <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-lg">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Verified Logic</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Content Section */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="space-y-2 mb-auto">
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-lg md:text-xl font-black tracking-tight leading-tight group-hover:text-brand-medium transition-colors line-clamp-2">
                                                {product.title}
                                            </h3>
                                            <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowUpRight className="w-3.5 h-3.5 text-brand-medium" />
                                            </div>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* 3. Pricing & CTA Section */}
                                    <div className="mt-5 pt-5 border-t border-slate-100 dark:border-white/5 space-y-4">
                                        <a
                                            href={`https://wa.me/917900310428?text=${encodeURIComponent(product.whatsappMsg)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full group/btn relative overflow-hidden py-3 bg-[#0a0a0a] dark:bg-white text-white dark:text-black rounded-xl font-black text-[9px] uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg hover:shadow-brand-medium/20"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-medium to-brand-cyan opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                            <MessageCircle className="w-3.5 h-3.5 relative z-10 transition-transform group-hover/btn:-rotate-12" />
                                            <span className="relative z-10">Buy via WhatsApp</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Subtle Background Mark */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-medium/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        </div>
                    ))}
                </div>
                {/* Bleed Masking Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />
            </div>
        </section>
    );
};

export default ProductShowcase;
