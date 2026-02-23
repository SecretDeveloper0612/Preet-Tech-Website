import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCTS = [
    {
        id: 'business-tool',
        title: 'Business Tool',
        description: 'Operations & growth automation engine.',
        image: '/business-tool.png',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Preet Tech Business Tool.",
        color: "from-blue-500/20 to-cyan-400/20"
    },
    {
        id: 'crm-tool',
        title: 'Nexus CRM',
        description: 'Next-gen customer management portal.',
        image: '/crm-tool.png',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Nexus CRM portal.",
        color: "from-indigo-500/20 to-purple-400/20"
    },
    {
        id: 'analytics-tool',
        title: 'Insight Pro',
        description: 'Real-time data visualization streams.',
        image: '/analytics-tool.png',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Insight Pro Analytics tool.",
        color: "from-emerald-500/20 to-teal-400/20"
    },
    {
        id: 'automation-tool',
        title: 'Flow Master',
        description: 'Intelligent high-velocity automation.',
        image: '/automation-tool.png',
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
            className="py-12 md:py-24 relative bg-background overflow-hidden transition-colors duration-300"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => !isDragging && setIsAutoPlaying(true)}
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 mr-4">
                            {PRODUCTS.map((_, i) => (
                                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-brand-medium' : 'w-2 bg-slate-200 dark:bg-white/10'}`} />
                            ))}
                        </div>
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
                            className="product-card shrink-0 snap-center snap-always w-[calc(100vw-48px)] md:w-[350px]"
                        >
                            <motion.div
                                className="group h-full bg-white dark:bg-[#080c14] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-6 hover:border-brand-medium/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-medium/10"
                            >
                                {/* Image Visual */}
                                <div className="relative aspect-[4/3] w-full mb-6 rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-black/40">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                </div>

                                {/* Content */}
                                <div className="space-y-2 mb-8 px-2">
                                    <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-brand-medium transition-colors uppercase italic">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-2">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <a
                                    href={`https://wa.me/917900310428?text=${encodeURIComponent(product.whatsappMsg)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-brand-medium text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 shadow-lg hover:shadow-brand-medium/20 active:scale-[0.98]"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    Acquire Asset
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Bleed Masking Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />
            </div>
        </section>
    );
};

export default ProductShowcase;
